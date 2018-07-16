# UniversalLibrary
陈钰涵的一些通用函数
1. storageCrossPage.js介绍
**通过点击链接（或者用了 window.open）打开的新标签页之间是属于同一个 sessionStorage 的，
但新开一个标签页总是会初始化一个新的 sessionStorage，即使网站是一样的，它们也不属于同一个 sessionStorage。**
那么，如何在新开一个标签页之后任然共享sessionStorage呢？
代码已经写在storageCrossPage.js里面，这里我分析一下代码如何实现这个功能的。