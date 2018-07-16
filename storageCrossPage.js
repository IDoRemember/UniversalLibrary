/**
 * 
 * @desc 在多个标签页之间共享sessionStorage  
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

