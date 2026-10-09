#!/usr/bin/env python3
import sys
import os
import struct
import re
import hashlib

def find_symbol(elf_path, sym_name):
    with open(elf_path, 'rb') as f:
        data = f.read()
    
    e_shoff, = struct.unpack_from('<Q', data, 40)
    e_shentsize, e_shnum, e_shstrndx = struct.unpack_from('<HHH', data, 58)
    
    sections = []
    for i in range(e_shnum):
        offset = e_shoff + i * e_shentsize
        sh_name, sh_type, sh_flags, sh_addr, sh_offset, sh_size, sh_link, sh_info, sh_addralign, sh_entsize = struct.unpack_from('<IIQQQQIIQQ', data, offset)
        sections.append({
            'name_idx': sh_name, 'type': sh_type, 'addr': sh_addr, 'offset': sh_offset,
            'size': sh_size, 'link': sh_link, 'entsize': sh_entsize
        })
    
    shstrtab = data[sections[e_shstrndx]['offset'] : sections[e_shstrndx]['offset'] + sections[e_shstrndx]['size']]
    def get_sh_name(idx):
        return shstrtab[idx:shstrtab.find(b'\x00', idx)].decode('ascii')
    
    symtab = None
    strtab = None
    for s in sections:
        name = get_sh_name(s['name_idx'])
        if s['type'] == 2: # SHT_SYMTAB
            symtab = s
            strtab = sections[s['link']]
            break
    
    if not symtab or not strtab:
        return None
    
    strdata = data[strtab['offset'] : strtab['offset'] + strtab['size']]
    symdata = data[symtab['offset'] : symtab['offset'] + symtab['size']]
    
    for i in range(0, len(symdata), symtab['entsize']):
        st_name, st_info, st_other, st_shndx, st_value, st_size = struct.unpack_from('<IBBHQQ', symdata, i)
        name = strdata[st_name:strdata.find(b'\x00', st_name)].decode('ascii', errors='ignore')
        if name == sym_name:
            file_offset = st_value - 0x400000
            return st_value, file_offset
    return None

def patch_backend(src_path, dst_path):
    print(f"Reading binary: {src_path}")
    with open(src_path, 'rb') as f:
        data = bytearray(f.read())
    
    # 1. ProIsExpired: xor %eax, %eax; ret (31 c0 c3)
    sym = 'sun-panel/biz.(*ProAuthType).ProIsExpired'
    res = find_symbol(src_path, sym)
    if res:
        addr, offset = res
        print(f"Found {sym} at {hex(addr)} (offset {hex(offset)})")
        data[offset:offset+3] = b'\x31\xc0\xc3'
    else:
        pattern = bytes.fromhex('49 3b 66 10 0f 86 6a 01 00 00 55 48 89 e5 48 83 ec 60')
        offset = data.find(pattern)
        if offset != -1:
            data[offset:offset+3] = b'\x31\xc0\xc3'
            print(f"Patched {sym} via pattern at {hex(offset)}")
        else:
            raise RuntimeError(f"Could not locate {sym}")

    # 2. TempAuthIsExpired: xor %eax, %eax; ret (31 c0 c3)
    sym = 'sun-panel/biz.(*ProAuthType).TempAuthIsExpired'
    res = find_symbol(src_path, sym)
    if res:
        addr, offset = res
        print(f"Found {sym} at {hex(addr)} (offset {hex(offset)})")
        data[offset:offset+3] = b'\x31\xc0\xc3'
    else:
        pattern = bytes.fromhex('49 3b 66 10 0f 86 c4 00 00 00 55 48 89 e5')
        offset = data.find(pattern)
        if offset != -1:
            data[offset:offset+3] = b'\x31\xc0\xc3'
            print(f"Patched {sym} via pattern at {hex(offset)}")
        else:
            raise RuntimeError(f"Could not locate {sym}")

    # 3. GetHideProBadgeStatus: mov $1, %eax; ret (b8 01 00 00 00 c3)
    sym = 'sun-panel/biz.(*ProAuthType).GetHideProBadgeStatus'
    res = find_symbol(src_path, sym)
    if res:
        addr, offset = res
        print(f"Found {sym} at {hex(addr)} (offset {hex(offset)})")
        data[offset:offset+6] = b'\xb8\x01\x00\x00\x00\xc3'
    else:
        pattern = bytes.fromhex('49 3b 66 10 76 5b 55 48 89 e5 48 83 ec 30')
        offset = data.find(pattern)
        if offset != -1:
            data[offset:offset+6] = b'\xb8\x01\x00\x00\x00\xc3'
            print(f"Patched {sym} via pattern at {hex(offset)}")

    # 4. openness.ProIsExpired hideProBadge return value:
    pat_open = bytes.fromhex('48 8b 54 24 48 0f b6 12 88 54 24 36')
    offset_open = data.find(pat_open)
    if offset_open != -1:
        data[offset_open+5 : offset_open+8] = b'\xb2\x01\x90'
        print(f"Patched openness hideProBadge at {hex(offset_open)}")

    with open(dst_path, 'wb') as f:
        f.write(data)
    os.chmod(dst_path, 0o755)
    print(f"Successfully wrote patched backend binary: {dst_path}")

def patch_frontend(web_dir):
    print(f"Patching frontend in: {web_dir}")
    assets_dir = os.path.join(web_dir, 'assets')
    if not os.path.exists(assets_dir):
        print(f"Warning: {assets_dir} not found")
        return

    count = 0
    patched_files = {}

    for root, _, files in os.walk(assets_dir):
        for fname in files:
            if fname.endswith('.js'):
                fpath = os.path.join(root, fname)
                with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()

                orig_content = content

                # 1. Remove PRO badges and text
                content = content.replace('text:"PRO"', 'text:""')
                content = content.replace('text:"PRO授权"', 'text:""')

                # 2. Patch index-Dca3OcbT.js (Store and base config)
                if 'function Nc(){return{' in content:
                    content = content.replace('function Nc(){return{', 'function Nc(){return{cardOpenTarget:"blank",')
                    # Add i18n
                    content = content.replace('cardStyle:"卡片风格",', 'cardStyle:"卡片风格",cardOpenTarget:"点击卡片打开方式",openBlank:"新建标签页打开",openSelf:"当前页直接跳转",')
                    content = content.replace('"cardStyle":"Card style",', '"cardStyle":"Card style","cardOpenTarget":"Card click action","openBlank":"Open in new tab","openSelf":"Direct jump in current page",')
                    print(f"Added default cardOpenTarget and i18n in {fname}")

                target_expired = 'const e=de(!0);async function t(){try{const{data:o}=await sb();e.value=o.isExpired}catch{}}return t(),{proIsExpired:e}'
                if target_expired in content:
                    content = content.replace(target_expired, 'const e=de(!1);async function t(){try{e.value=!1}catch{}}return t(),{proIsExpired:e}')
                    print(f"Neutralized proIsExpired store in {fname}")

                # 3. Patch index-DFgaO5ar.js (Style Settings Component)
                target_style = 'r("div",ea,[r("div",null,v(t(k)("apps.itemGroupManage.cardStyle")),1),r("div",ta,[c(t(rt),{value:t(a).panelConfig.iconStyle,"onUpdate:value":d[12]||(d[12]=i=>t(a).panelConfig.iconStyle=i),size:"small",options:L},null,8,["value"])])])'
                if target_style in content:
                    old_L = 'L=[{label:k("apps.baseSettings.detailIcon"),value:st.info},{label:k("apps.baseSettings.smallIcon"),value:st.icon}],'
                    new_L = old_L + 'otOpt=[{label:k("apps.itemGroupManage.openBlank"),value:"blank"},{label:k("apps.itemGroupManage.openSelf"),value:"self"}],'
                    if old_L in content:
                        content = content.replace(old_L, new_L)
                        addition = ',r("div",{class:"flex items-center mt-[10px]"},[r("div",null,v(t(k)("apps.itemGroupManage.cardOpenTarget")),1),r("div",ta,[c(t(rt),{value:t(a).panelConfig.cardOpenTarget||"blank","onUpdate:value":d[35]||(d[35]=i=>t(a).panelConfig.cardOpenTarget=i),size:"small",options:otOpt},null,8,["value"])])])'
                    else:
                        addition = ',r("div",{class:"flex items-center mt-[10px]"},[r("div",null,"点击卡片打开方式",1),r("div",ta,[c(t(rt),{value:t(a).panelConfig.cardOpenTarget||"blank","onUpdate:value":d[35]||(d[35]=i=>t(a).panelConfig.cardOpenTarget=i),size:"small",options:[{label:"新建标签页打开",value:"blank"},{label:"当前页直接跳转",value:"self"}]},null,8,["value"])])])'
                    content = content.replace(target_style, target_style + addition)
                    print(f"Injected cardOpenTarget setting with i18n in Style Settings {fname}")

                # 4. Patch index-C9Kg_QMv.js (Card click handlers, search filter, Pro drawer & badges)
                s1 = 'function x(A,J){'
                r1 = 'function x(A,J){const _target=(r.panelConfig&&r.panelConfig.cardOpenTarget)||"blank";if(A!==3){if(_target==="self")A=1;else A=2}'
                if s1 in content:
                    content = content.replace(s1, r1)
                    print(f"Hooked NormalCard click handler in {fname}")

                s2 = 'function Me(te,Se){'
                r2 = 'function Me(te,Se){const _target=(r.panelConfig&&r.panelConfig.cardOpenTarget)||"blank";if(te!==3){if(_target==="self")te=1;else te=2}'
                if s2 in content:
                    content = content.replace(s2, r2)
                    print(f"Hooked SmallCard click handler in {fname}")

                target_pro_drawer = ',{name:X("proAuth.appName"),componentName:"ProAuth",icon:"tabler:award",roles:[1]}'
                if target_pro_drawer in content:
                    content = content.replace(target_pro_drawer, '')
                    print(f"Removed ProAuth from drawer menu in {fname}")

                target_pro_badge = 's(r).hideProBadge?'
                if target_pro_badge in content:
                    content = content.replace(target_pro_badge, 'true?')
                    print(f"Neutralized ProBadge component in {fname}")

                target_sb_warn = 'w(s(ra),{"show-icon":"",content:s(X)("deskModule.searchBox.noProAuth"),class:"ml-2"},null,8,["content"])'
                if target_sb_warn in content:
                    content = content.replace(target_sb_warn, 'Te("",!0)')
                    print(f"Removed searchBox noProAuth warning in {fname}")

                target_sb_lim = 'if(a.isExpired&&h.value.searchEngineList.length>=4)'
                if target_sb_lim in content:
                    content = content.replace(target_sb_lim, 'if(false)')
                    print(f"Removed search engine count limit in {fname}")

                # Search box pinyin match hook
                idx_filter = content.find('Pe.filter(wt=>{var $t;return wt.title.toLowerCase()')
                if idx_filter != -1:
                    end_filter = content.find(';Ae&&', idx_filter)
                    if end_filter != -1:
                        rep_filter = 'Pe.filter(wt=>{var $t;return window.__matchSearch?window.__matchSearch(wt,ve):(wt.title.toLowerCase().includes((ve==null?void 0:ve.toLowerCase())??"")||wt.url.toLowerCase().includes((ve==null?void 0:ve.toLowerCase())??"")||(($t=wt.description)==null?void 0:$t.toLowerCase().includes((ve==null?void 0:ve.toLowerCase())??"")))})'
                        content = content[:idx_filter] + rep_filter + content[end_filter:]
                        print(f"Hooked searchBox item filter for Pinyin in {fname}")

                if content != orig_content:
                    with open(fpath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    patched_files[fname] = content
                    count += 1

    print(f"Patched {count} frontend asset files")

    # 5. CONTENT-HASH-BUSTING: Rename patched files to completely bypass browser disk caches
    hasher = hashlib.md5()
    for fname in sorted(patched_files.keys()):
        hasher.update(patched_files[fname].encode('utf-8'))
    bhash = hasher.hexdigest()[:8]
    print(f"Computed unique build cache-busting hash: {bhash}")

    name_map = {}
    for fname in patched_files.keys():
        name_parts = fname.rsplit('.js', 1)
        new_fname = f"{name_parts[0]}.p{bhash}.js"
        name_map[fname] = new_fname

        old_fpath = os.path.join(assets_dir, fname)
        new_fpath = os.path.join(assets_dir, new_fname)
        if os.path.exists(old_fpath):
            os.rename(old_fpath, new_fpath)
            print(f"Cache-bust rename: {fname} -> {new_fname}")

    # 6. Update all module import references across all files in web/
    print("Updating asset references across all web files...")
    for root, _, files in os.walk(web_dir):
        for fname in files:
            fpath = os.path.join(root, fname)
            try:
                with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
                    content = fp.read()
                orig_content = content
                for old_name, new_name in name_map.items():
                    if old_name in content:
                        content = content.replace(old_name, new_name)
                if content != orig_content:
                    with open(fpath, 'w', encoding='utf-8') as fp:
                        fp.write(content)
            except Exception as e:
                print(f"Error updating references in {fname}: {e}")

    # 7. Update index.html with cache-busting meta tags and versioned custom scripts
    index_html_path = os.path.join(web_dir, 'index.html')
    if os.path.exists(index_html_path):
        with open(index_html_path, 'r', encoding='utf-8') as fp:
            html = fp.read()

        # Update /custom/ script and css versions
        html = re.sub(r'/custom/index\.js(?:\?v=[^\"]*)?', f'/custom/index.js?v={bhash}', html)
        html = re.sub(r'/custom/index\.css(?:\?v=[^\"]*)?', f'/custom/index.css?v={bhash}', html)

        # Inject no-cache meta tags into <head>
        meta_tags = (
            '\n\t<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />'
            '\n\t<meta http-equiv="Pragma" content="no-cache" />'
            '\n\t<meta http-equiv="Expires" content="0" />'
        )
        if 'http-equiv="Cache-Control"' not in html:
            html = html.replace('<head>', '<head>' + meta_tags)

        with open(index_html_path, 'w', encoding='utf-8') as fp:
            fp.write(html)
        print("Injected cache-busting meta headers and custom asset query strings into index.html")

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: patch_sun_panel.py <input_binary> <output_binary> [web_dir]")
        sys.exit(1)
    
    bin_in = sys.argv[1]
    bin_out = sys.argv[2]
    web_dir = sys.argv[3] if len(sys.argv) > 3 else None
    
    patch_backend(bin_in, bin_out)
    if web_dir:
        patch_frontend(web_dir)
