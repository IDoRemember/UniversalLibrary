# UniversalLibrary
陈钰涵的一些通用函数
### 1. storageCrossPage.js介绍

**通过点击链接（或者用了 window.open）打开的新标签页之间是属于同一个 sessionStorage 的，
但新开一个标签页总是会初始化一个新的 sessionStorage，即使网站是一样的，它们也不属于同一个 sessionStorage。**
那么，如何在新开一个标签页之后仍然要共享sessionStorage呢？
代码已经写在storageCrossPage.js里面，这里我分析一下代码如何实现这个功能的。


```javascript
  if (!sessionStorage.length) {
    localStorage.setItem('getSessionStorage', Date.now());
  }
```
先分析这段代码，当我们新打开一个tab页的时候，这时候`sessionStorage`没有的话，就通过`localStorage`来触发`storage`的`event`事件。
因此这段代码主要对新打开的tab页起作用。

```javascript
  window.addEventListener('storage', (event) => {
    if (event.key === 'getSessionStorage') {
      localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
      localStorage.removeItem('sessionStorage');
    } else if (event.key === 'sessionStorage' && !sessionStorage.length) {
      ...
    }
  });
```
这时候新的tab页已经触发老页面的`storage`事件了，我们进入第一个第一个`if`，我们可以知道`localstorage`是一直存在本地的，我们通过`localstorage`将老页面的`sessionStorage`存到本地，这时候又触发`event`事件了。
因此这段代码是针对老页面起作用的。
```javascript
  window.addEventListener('storage', (event) => {
    if (event.key === 'getSessionStorage') {
      ...
    } else if (event.key === 'sessionStorage' && !sessionStorage.length) {
      const data = JSON.parse(event.newValue);
      Object.keys(data).forEach((item) => {
        sessionStorage.setItem(item, data[item]);
      });
    }
  });
```
这时候新tab页监听到了key为`sessionStorage`的事件进入了第二个`if`，这里将事件的值获取到并存入了`sessionStorage`，大工完成！
传递过来的sessionStorage绝对不会保存在localStorage，从localStorage事件将数据中复制并保存到sessionStorage，这个流程是在同一个调用中完成，没有中间状态。而且数据是对应事件携带的，并不在localStorage中。
### 2. chunk 介绍
将数组块划分为指定大小的较小数组。

使用Array.from()创建新的数组, 这符合将生成的区块数。使用Array.slice()将新数组的每个元素映射到size长度的区块。如果原始数组不能均匀拆分,则最终的块将包含剩余的元素。
`chunk([1,2,3,4,5], 2) -> [[1,2],[3,4],[5]]`

### 3. compact
从数组移除falsey的值
使用`Array.filter()`筛选出 `falsey` 值 (false、null、0、""、undefined和NaN).

### 4. filterUnique
筛选出数组中的非唯一值。
对于只包含唯一值的数组, 请使用Array.filter()。