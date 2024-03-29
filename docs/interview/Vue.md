## 1. 写 React/Vue 项目时为什么要在列表组件中写 key？作用是什么？
答：Vue 和 React 都是采用 diff 算法来对比新旧虚拟节点，从而更新节点。key 是给每一个 vnode 的唯一 id,可以依靠 key，更准确，更快的拿到 oldVnode 中对应的 vnode 节点。
- 更准确
  因为带key就不是就地复用了，在sameNode函数 a.key === b.key对比中可以避免就地复用的情况。所以会更加准确。
- 更快
  利用key的唯一性生成map对象来获取对应节点，比遍历方式更快。


## 2. Vue3和Vue2相比有哪些新特性？
静态提升、靶向更新。
虽然，对于面试常问的 diff 过程在一定程度上是减少了对 DOM 的直接操作。但是，这个减少是有一定成本的。因为，如果是复杂应用，那么就会存在父子关系非常复杂的 VNode，而这也就是 diff 的痛点，它会不断地递归调用 patchVNode，不断堆叠而成的几毫秒，最终就会造成 VNode 更新缓慢。
也因此，这也是为什么我们所看到的大型应用诸如阿里云之类的采用的是基于「React」的技术栈的原因之一。所以，「Vue3」也是痛改前非，重写了整个 Compiler 过程，提出了静态提升、靶向更新等优化点，来提高 patchVNode 过程。
静态更新：
