// Custom Node Name & Order Manager & Global Open Target Toggle for Sun-Panel
(function() {
  // 1. Hook window.open fallback for 'self' mode
  const originalWindowOpen = window.open;
  window.open = function(url, target, features) {
    const mode = localStorage.getItem('sun_panel_open_target');
    if (mode === 'self' && url && typeof url === 'string' && !url.startsWith('javascript:')) {
      window.location.href = url;
      return window;
    }
    return originalWindowOpen.call(window, url, target, features);
  };

  // Toast notification helper
  function showToast(msg) {
    let toast = document.getElementById('custom-toast-msg');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'custom-toast-msg';
      toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:rgba(30,30,38,0.95);border:1px solid #4a4a5a;color:#fff;padding:10px 20px;border-radius:24px;font-size:14px;font-weight:600;box-shadow:0 8px 24px rgba(0,0,0,0.4);z-index:999999;transition:opacity 0.3s,transform 0.3s;pointer-events:none;backdrop-filter:blur(6px);';
      document.body.appendChild(toast);
    }
    toast.innerText = msg;
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
    clearTimeout(toast.__timer);
    toast.__timer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(10px)';
    }, 2200);
  }

  function getAuthToken() {
    try {
      const raw = localStorage.getItem('AUTH_TOKEN');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.data && parsed.data.token) return parsed.data.token;
        if (parsed.token) return parsed.token;
      }
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const val = localStorage.getItem(key);
        if (val && val.includes('token')) {
          try {
            const p = JSON.parse(val);
            if (p.data && p.data.token) return p.data.token;
            if (p.token) return p.token;
          } catch(e){}
        }
      }
    } catch(e) {}
    return null;
  }

  // 2. Inject Open Target Toggle into Top Floating Dock
  function injectOpenTargetToggle() {
    const dock = document.querySelector('.fixed-element');
    if (!dock) return;

    if (dock.querySelector('.custom-open-target-btn')) return;

    const currentMode = localStorage.getItem('sun_panel_open_target') || 'blank';

    const btn = document.createElement('div');
    btn.className = 'custom-open-target-btn float-btn flex items-center justify-center cursor-pointer';
    btn.style.margin = '0 2px';
    btn.style.transition = 'all 0.2s';

    function updateBtnVisual(mode) {
      if (mode === 'self') {
        btn.title = '卡片打开方式：直接跳转 (点击切换为新建标签页)';
        btn.innerHTML = '<span style="font-size:12px;font-weight:700;color:#60a5fa;display:inline-flex;align-items:center;padding:2px 4px;border:1px solid #3b82f6;border-radius:4px;line-height:1;">当前页</span>';
      } else {
        btn.title = '卡片打开方式：新建标签页 (点击切换为直接跳转)';
        btn.innerHTML = '<span style="font-size:12px;font-weight:700;color:#34d399;display:inline-flex;align-items:center;padding:2px 4px;border:1px solid #10b981;border-radius:4px;line-height:1;">新标签</span>';
      }
    }

    updateBtnVisual(currentMode);

    btn.onclick = (e) => {
      e.stopPropagation();
      const oldMode = localStorage.getItem('sun_panel_open_target') || 'blank';
      const newMode = (oldMode === 'blank') ? 'self' : 'blank';
      localStorage.setItem('sun_panel_open_target', newMode);
      updateBtnVisual(newMode);
      showToast(newMode === 'self' ? '已切换为：点击卡片在当前页直接跳转' : '已切换为：点击卡片在新建标签页打开');
    };

    // Prepend to dock or insert before settings button
    dock.insertBefore(btn, dock.firstChild);
  }

  async function fetchGroups(token) {
    try {
      const res = await fetch('/api/panel/itemIconGroup/getList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token
        },
        body: JSON.stringify({})
      });
      const json = await res.json();
      if (json.code === 0 && json.data && json.data.list) {
        return json.data.list.sort((a, b) => (a.sort || 0) - (b.sort || 0));
      }
    } catch(e) {
      console.error('Fetch groups failed:', e);
    }
    return [];
  }

  async function saveGroupSorts(token, sortItems) {
    const res = await fetch('/api/panel/itemIconGroup/saveSort', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': token
      },
      body: JSON.stringify({ sortItems: sortItems })
    });
    return await res.json();
  }

  async function moveGroupDirect(groupId, direction) {
    const token = getAuthToken();
    if (!token) {
      alert('未检测到登录状态，请重新登录后操作');
      return;
    }

    const groups = await fetchGroups(token);
    if (!groups.length) {
      alert('未能获取节点列表，请刷新重试');
      return;
    }

    const idx = groups.findIndex(g => g.id === groupId);
    if (idx === -1) {
      alert('未找到该节点');
      return;
    }

    const targetIdx = idx + direction;
    if (targetIdx < 0) {
      alert('该节点已经在最顶端了');
      return;
    }
    if (targetIdx >= groups.length) {
      alert('该节点已经在最底部了');
      return;
    }

    // Swap
    const temp = groups[idx];
    groups[idx] = groups[targetIdx];
    groups[targetIdx] = temp;

    const sortItems = groups.map((g, i) => ({ id: g.id, sort: i + 1 }));
    try {
      const res = await saveGroupSorts(token, sortItems);
      if (res.code === 0) {
        location.reload();
      } else {
        alert('调整顺序失败: ' + (res.msg || '未知错误'));
      }
    } catch(err) {
      alert('网络错误，排序失败: ' + err.message);
    }
  }

  function openSortModal() {
    const token = getAuthToken();
    if (!token) {
      alert('未检测到登录状态，请登录后再试');
      return;
    }

    if (document.getElementById('custom-sort-modal-overlay')) return;

    const currentMode = localStorage.getItem('sun_panel_open_target') || 'blank';

    // Create Modal Elements
    const overlay = document.createElement('div');
    overlay.id = 'custom-sort-modal-overlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.65);backdrop-filter:blur(5px);z-index:99999;display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box;';

    const modal = document.createElement('div');
    modal.style.cssText = 'background:#1e1e24;border:1px solid #3a3a46;border-radius:16px;width:100%;max-width:440px;box-shadow:0 12px 36px rgba(0,0,0,0.5);color:#fff;display:flex;flex-direction:column;overflow:hidden;';

    const header = document.createElement('div');
    header.style.cssText = 'padding:16px 20px;border-bottom:1px solid #333340;display:flex;justify-content:space-between;align-items:center;';
    header.innerHTML = '<span style="font-size:17px;font-weight:700;">节点与偏好设置</span><span id="custom-modal-close" style="cursor:pointer;font-size:20px;opacity:0.7;padding:4px 8px;">✕</span>';

    // Open target setting row
    const settingRow = document.createElement('div');
    settingRow.style.cssText = 'padding:12px 18px;background:#24242f;border-bottom:1px solid #333340;display:flex;align-items:center;justify-content:space-between;';
    settingRow.innerHTML = `
      <span style="font-size:14px;font-weight:600;">点击卡片打开方式</span>
      <div style="display:flex;gap:6px;">
        <button id="custom-opt-blank" style="padding:4px 10px;border-radius:6px;border:1px solid ${currentMode==='blank'?'#10b981':'#444'};background:${currentMode==='blank'?'#10b981':'#2a2a36'};color:#fff;font-size:12px;cursor:pointer;">新标签页</button>
        <button id="custom-opt-self" style="padding:4px 10px;border-radius:6px;border:1px solid ${currentMode==='self'?'#3b82f6':'#444'};background:${currentMode==='self'?'#3b82f6':'#2a2a36'};color:#fff;font-size:12px;cursor:pointer;">直接跳转</button>
      </div>
    `;

    const listContainer = document.createElement('div');
    listContainer.id = 'custom-modal-list';
    listContainer.style.cssText = 'padding:14px 16px;max-height:55vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px;';
    listContainer.innerHTML = '<div style="text-align:center;color:#888;padding:20px 0;">加载节点中...</div>';

    const footer = document.createElement('div');
    footer.style.cssText = 'padding:14px 20px;border-top:1px solid #333340;display:flex;justify-content:flex-end;gap:12px;background:#18181d;';
    footer.innerHTML = '<button id="custom-modal-cancel" style="padding:8px 16px;border-radius:8px;background:#2c2c36;color:#ccc;border:none;cursor:pointer;font-size:14px;">取消</button><button id="custom-modal-save" style="padding:8px 18px;border-radius:8px;background:#3b82f6;color:#fff;border:none;cursor:pointer;font-weight:600;font-size:14px;">保存新顺序</button>';

    modal.appendChild(header);
    modal.appendChild(settingRow);
    modal.appendChild(listContainer);
    modal.appendChild(footer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Bind open target buttons inside modal
    let selectedMode = currentMode;
    const btnBlank = document.getElementById('custom-opt-blank');
    const btnSelf = document.getElementById('custom-opt-self');

    btnBlank.onclick = () => {
      selectedMode = 'blank';
      btnBlank.style.borderColor = '#10b981';
      btnBlank.style.background = '#10b981';
      btnSelf.style.borderColor = '#444';
      btnSelf.style.background = '#2a2a36';
      localStorage.setItem('sun_panel_open_target', 'blank');
      showToast('已设为：在新建标签页打开');
      const toggle = document.querySelector('.custom-open-target-btn');
      if (toggle) {
        toggle.title = '卡片打开方式：新建标签页 (点击切换为直接跳转)';
        toggle.innerHTML = '<span style="font-size:12px;font-weight:700;color:#34d399;display:inline-flex;align-items:center;padding:2px 4px;border:1px solid #10b981;border-radius:4px;line-height:1;">新标签</span>';
      }
    };

    btnSelf.onclick = () => {
      selectedMode = 'self';
      btnSelf.style.borderColor = '#3b82f6';
      btnSelf.style.background = '#3b82f6';
      btnBlank.style.borderColor = '#444';
      btnBlank.style.background = '#2a2a36';
      localStorage.setItem('sun_panel_open_target', 'self');
      showToast('已设为：在当前页直接跳转');
      const toggle = document.querySelector('.custom-open-target-btn');
      if (toggle) {
        toggle.title = '卡片打开方式：直接跳转 (点击切换为新建标签页)';
        toggle.innerHTML = '<span style="font-size:12px;font-weight:700;color:#60a5fa;display:inline-flex;align-items:center;padding:2px 4px;border:1px solid #3b82f6;border-radius:4px;line-height:1;">当前页</span>';
      }
    };

    let currentList = [];

    function renderList() {
      listContainer.innerHTML = '';
      currentList.forEach((group, index) => {
        const itemRow = document.createElement('div');
        itemRow.style.cssText = 'display:flex;align-items:center;justify-content:space-between;background:#272733;border:1px solid #3c3c4a;padding:10px 14px;border-radius:10px;';
        
        const leftSpan = document.createElement('div');
        leftSpan.style.cssText = 'display:flex;align-items:center;gap:10px;font-size:15px;font-weight:600;';
        leftSpan.innerHTML = '<span style="display:inline-block;width:22px;height:22px;line-height:22px;text-align:center;background:#3b82f6;border-radius:50%;font-size:12px;">' + (index + 1) + '</span> <span>' + group.title + '</span>';

        const btnWrap = document.createElement('div');
        btnWrap.style.cssText = 'display:flex;gap:6px;';

        const upBtn = document.createElement('button');
        upBtn.innerHTML = '⬆️';
        upBtn.title = '上移';
        upBtn.style.cssText = 'background:#353545;border:none;color:#fff;border-radius:6px;padding:5px 8px;cursor:pointer;opacity:' + (index === 0 ? '0.35' : '1');
        if (index > 0) {
          upBtn.onclick = () => {
            const temp = currentList[index];
            currentList[index] = currentList[index - 1];
            currentList[index - 1] = temp;
            renderList();
          };
        }

        const downBtn = document.createElement('button');
        downBtn.innerHTML = '⬇️';
        downBtn.title = '下移';
        downBtn.style.cssText = 'background:#353545;border:none;color:#fff;border-radius:6px;padding:5px 8px;cursor:pointer;opacity:' + (index === currentList.length - 1 ? '0.35' : '1');
        if (index < currentList.length - 1) {
          downBtn.onclick = () => {
            const temp = currentList[index];
            currentList[index] = currentList[index + 1];
            currentList[index + 1] = temp;
            renderList();
          };
        }

        btnWrap.appendChild(upBtn);
        btnWrap.appendChild(downBtn);

        itemRow.appendChild(leftSpan);
        itemRow.appendChild(btnWrap);
        listContainer.appendChild(itemRow);
      });
    }

    fetchGroups(token).then((res) => {
      currentList = res;
      renderList();
    });

    const closeModal = () => {
      if (document.body.contains(overlay)) {
        document.body.removeChild(overlay);
      }
    };

    document.getElementById('custom-modal-close').onclick = closeModal;
    document.getElementById('custom-modal-cancel').onclick = closeModal;
    overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };

    document.getElementById('custom-modal-save').onclick = async () => {
      const saveBtn = document.getElementById('custom-modal-save');
      saveBtn.innerText = '保存中...';
      saveBtn.disabled = true;

      const sortItems = currentList.map((g, i) => ({ id: g.id, sort: i + 1 }));
      try {
        const res = await saveGroupSorts(token, sortItems);
        if (res.code === 0) {
          closeModal();
          location.reload();
        } else {
          alert('保存排序失败: ' + (res.msg || '未知错误'));
          saveBtn.innerText = '保存新顺序';
          saveBtn.disabled = false;
        }
      } catch(err) {
        alert('网络请求失败: ' + err.message);
        saveBtn.innerText = '保存新顺序';
        saveBtn.disabled = false;
      }
    };
  }

  function injectEditButtons() {
    // 1. Inject open target toggle in floating dock
    injectOpenTargetToggle();

    // 2. Inject group edit buttons
    const groupDivs = document.querySelectorAll('div[id^="item-group-"]');
    if (!groupDivs.length) return;

    groupDivs.forEach((groupDiv) => {
      const titleSpan = groupDiv.querySelector('.group-title');
      const groupBtns = groupDiv.querySelector('.group-buttons');
      if (!titleSpan || !groupBtns) return;

      if (groupBtns.querySelector('.custom-edit-group-btn')) return;

      const idMatch = groupDiv.id.match(/^item-group-(?:group_)?(\d+)$/);
      let groupId = idMatch ? parseInt(idMatch[1], 10) : null;
      if (!groupId) {
        const matchCls = groupDiv.className.match(/item-group-index-(\d+)/);
        if (matchCls) {
          groupId = parseInt(matchCls[1], 10) + 1;
        }
      }

      const createBtn = (iconSvg, tooltip, onClickHandler) => {
        const span = document.createElement('span');
        span.className = 'custom-edit-group-btn mr-2 cursor-pointer text-white';
        span.title = tooltip;
        span.innerHTML = iconSvg;
        span.style.display = 'inline-flex';
        span.style.alignItems = 'center';
        span.style.opacity = '0.85';
        span.style.transition = 'transform 0.15s, opacity 0.15s';
        span.onmouseenter = () => { span.style.opacity = '1'; span.style.transform = 'scale(1.15)'; };
        span.onmouseleave = () => { span.style.opacity = '0.85'; span.style.transform = 'scale(1)'; };
        span.onclick = (e) => {
          e.stopPropagation();
          onClickHandler();
        };
        return span;
      };

      // 1. Rename Button
      const editBtn = createBtn(
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>',
        '修改节点名称',
        async () => {
          const currentTitle = titleSpan.innerText.trim();
          const newTitle = prompt('请输入新的节点名称：', currentTitle);
          if (!newTitle || newTitle.trim() === '' || newTitle.trim() === currentTitle) return;

          const token = getAuthToken();
          if (!token) {
            alert('未检测到登录凭据，请重新登录');
            return;
          }

          try {
            const res = await fetch('/api/panel/itemIconGroup/edit', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'token': token
              },
              body: JSON.stringify({ id: groupId, title: newTitle.trim() })
            });
            const json = await res.json();
            if (json.code === 0) {
              titleSpan.innerText = newTitle.trim();
              setTimeout(() => { location.reload(); }, 300);
            } else {
              alert('修改失败: ' + (json.msg || '未知错误'));
            }
          } catch(err) {
            alert('网络错误，修改失败: ' + err.message);
          }
        }
      );

      // 2. Move Up Button
      const upBtn = createBtn(
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
        '上移此节点',
        () => moveGroupDirect(groupId, -1)
      );

      // 3. Move Down Button
      const downBtn = createBtn(
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>',
        '下移此节点',
        () => moveGroupDirect(groupId, 1)
      );

      // 4. Sort Modal Button
      const modalBtn = createBtn(
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>',
        '节点排序与全局设置窗口',
        () => openSortModal()
      );

      // Insert buttons
      groupBtns.insertBefore(modalBtn, groupBtns.firstChild);
      groupBtns.insertBefore(downBtn, groupBtns.firstChild);
      groupBtns.insertBefore(upBtn, groupBtns.firstChild);
      groupBtns.insertBefore(editBtn, groupBtns.firstChild);
    });
  }

  setInterval(injectEditButtons, 500);
})();
