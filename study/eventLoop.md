## 宏任务和微任务
讲这个之前我们先再次了解一下js的单线程和异步 

### js单线程

我们在最开始学习js的时候，js就会告诉我们它是面向对象的，而且一大特点就是单线程<br>

**为什么js是单线程**<br>

js的单线程主要跟它的用途有关系，js的主要功能就是为了与用户交互和操作dom，如果是多线程的的话，两条线程同时去操作这个节点，那么浏览器该如何去render界面呢，以哪个为主<br>

单线程的特性带来的也有很多缺点，任务在一个线程执行，前面的任务没完成，后面的只能等着，导致阻塞<br>

web worker的诞生，就是为js创造多线程环境，但是就像前面说的对于操作dom，js是很谨慎的，web worker并不能去操作dom,主线程用于UI的交互，一些计算等任务就可以交给子线程web worker了，web worker的使用这里就不详细讲了<br>

所以这个web worker并不能改变js是单线程的本质

:::tip
虽然js是单线程的，但js的运行环境浏览器可不是单线程的，浏览器会分配一个js引擎线程去执行我们的js代码，具体参考我的另外一篇文章浏览器的工作原理，这里不再扩展
:::
### 异步
我们这里主要说的是浏览器环境下的js引擎（js是一直是单线程的，浏览器才是实现异步的那个家伙）<br>

js引擎执行异步代码 靠的是自己的消息队列和事件循环机制<br>

:::tip 注意
简单的说js引擎执行代码的时候，主线程上遇到同步任务，就执行并且等到上一个同步任务执行完成才能执行下一个同步，遇到异步任务，该任务不会进入主线程，而是放入任务队列（也叫消息队列），当主线程执行完毕，就会读取任务队列，此时任务队列通知主线程可以执行某个异步任务了，该异步任务才会被放入在主线程中执行，主线程不断的执行并读取的这个过程，直到任务队列中没有任务了，这个过程就是事件循环Event Loop

:::

到这里应该对知道js运行机制以及有了大致的了解
### 宏任务与微任务


```
setTimeout(function(){
console.log('1')
});

new  Promise(function(resolve){
  console.log('2');
  resolve();
}).then(function(){
console.log('3')
});
console.log('4');
```
上面代码在浏览器环境下的执行顺序是什么？<br>

如果只是知道简单的知道同步异步，那么你能很简单的判断出2 4会先执行，但setTimeout与Promise.then的这个结果就懵了，到底1 还是 3先执行呢<br>

这里就引出来了另外一个概念宏任务与微任务<br>
:::tip 注意
+ js异步里面还有一个机制就是遇到宏任务，将宏任务放入宏任务序列
+ 遇到微任务，将微任务放入微任务序列
+ 主线程代码执行完成后，就去任务队列里面读取任务
+ 这时候注意了，js会优先读取微任务序列，等到微任务序列清空了再执行宏任务序列<br>

所以前面的读取任务队列的时候，任务队列其实是分为了宏任务序列与微任务序列，在读取任务队列里面还有先清空微清空后宏的机制
:::
所以我们只需要知道哪些是宏任务？哪些是微任务？就能知道上面的代码执行结果了涩
:::tip 常见的宏任务与微任务
宏任务：包括整体代码script，setTimeout，setInterval。

微任务：Promise，process.nextTick
:::