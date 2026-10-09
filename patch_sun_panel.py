#!/usr/bin/env python3
import sys
import os
import struct
import re

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
        return shstrtab[idx:shstrtab.find(b'\x00', idx)].decode('ascii', errors='ignore')
    
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
        print(f"WARNING: Symbol {sym} not found, searching pattern...")
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
    # Pattern around 0x82799f: 48 8b 54 24 48 0f b6 12 88 54 24 36
    # Change 0f b6 12 (movzbl (%rdx), %edx) to b2 01 90 (mov $1, %dl; nop)
    pat_open = bytes.fromhex('48 8b 54 24 48 0f b6 12 88 54 24 36')
    offset_open = data.find(pat_open)
    if offset_open != -1:
        data[offset_open+5 : offset_open+8] = b'\xb2\x01\x90'
        print(f"Patched openness hideProBadge at {hex(offset_open)}")
    else:
        print("Notice: openness hideProBadge pattern not found, skipped")

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
    for root, _, files in os.walk(assets_dir):
        for fname in files:
            if fname.endswith('.js'):
                fpath = os.path.join(root, fname)
                with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()

                orig_len = len(content)
                # Remove PRO text badge on backup / restore
                new_content = content.replace('text:"PRO"', 'text:""')
                new_content = new_content.replace('text:"PRO授权"', 'text:""')

                if len(new_content) != orig_len or new_content != content:
                    with open(fpath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Patched frontend file: {fname}")
                    count += 1
    print(f"Patched {count} frontend asset files")

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
