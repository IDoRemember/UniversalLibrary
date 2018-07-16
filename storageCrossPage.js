/**
 * 
 * @desc 在多个标签页之间共享sessionStorage  （通过点击链接（或者用了 window.open）打开的新标签页之间是属于同一个 session 的，但新开一个标签页总是会初始化一个新的 session，即使网站是一样的，它们也不属于同一个 session。）
 */
export function storageCrossPage() {
  if (!sessionStorage.length) {
    localStorage.setItem('getSessionStorage', Date.now());
  }

  window.addEventListener('storage', (event) => {
    if (event.key === 'getSessionStorage') {
      localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
      localStorage.removeItem('sessionStorage');
    } else if (event.key === 'sessionStorage' && !sessionStorage.length) {
      const data = JSON.parse(event.newValue);
      Object.keys(data).forEach((item) => {
        sessionStorage.setItem(item, data[item]);
      });
    }
  });
}

