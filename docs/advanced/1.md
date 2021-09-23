# Vue Diff 算法详解

## 当数据发生变化时，vue是怎么更新节点的？
要知道渲染真实DOM的开销是很大的，比如有时候我们修改了某个数据，如果直接渲染到真实dom上会引起整个dom树的重绘和重排，有没有可能我们只更新我们修改的那一小块dom而不要更新整个dom呢？diff算法能够帮助我们。

我们先根据真实DOM生成一颗virtual DOM，当virtual DOM某个节点的数据改变后会生成一个新的Vnode，然后Vnode和oldVnode作对比，发现有不一样的地方就直接修改在真实的DOM上，然后使oldVnode的值为Vnode。

diff的过程就是调用名为patch（打补丁）的函数，比较新旧节点，一边比较一边给真实的DOM打补丁。

## virtual DOM和真实DOM的区别？
virtual DOM是将真实的DOM的数据抽取出来，以对象的形式模拟树形结构。比如dom是这样的：
```html
<div>
    <p>123</p>
</div>
```

对应的virtual DOM（伪代码）：
```js
var Vnode = {
    tag: 'div',
    children: [
        { tag: 'p', text: '123' }
    ]
};
```

::: tip
VNode 和 oldVNode 都是对象，一定要记住
:::