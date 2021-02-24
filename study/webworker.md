## Web Worker
js是单线程的，而Web Worker就是为js创造了多线程的环境，主线程执行代码遇到new Worker，就创建了一个独立于主线程外的worker线程，两者互不干扰，woker线程执行完成再把结果通知主线程。
### 特点
+ 与主线程同源
+ 不能读取或者操作DOM
+ 不能读取本地文件
+ 也不能读取或者更改主线程的变量

简单的理解它就是独立于主线程外的一个单独的线程，浏览器为了安全考虑，限制其对主线程运行的网页代码环境进行操作，只能通过特定的通信机制传递消息给主线程，有点安全沙箱的意思。
### 常见的用法
先看下面的一个简单的例子
```
worker线程给主线程发送消息
<script>
if (window.Worker) {
    const myWorker = new Worker("myWorker.js");
    myWorker.onmessage = function(e) {
        console.log('收到了');
    }
    myWorker.terminate()
} else {
    console.log('Your browser doesn\'t support web workers.')
}
</script>

myWorker.js
<script>
 setTimeout(()=>{
       postMessage('发送');
 },500);
</script>


主线程也可以给worker线程发送消息
<script>
if (window.Worker) {
    const myWorker = new Worker("myWorker.js");
     myWorker.postMessage('发送'); 
} else {
    console.log('Your browser doesn\'t support web workers.')
}
</script>

myWorker.js
<script>
addEventListener('message', function (e) {  
 
}, false);

等价于

this.addEventListener('message', function (e) {  
 
}, false);
等价于

self.addEventListener('message', function (e) {  
 
}, false);


</script>
```
:::tip 注意
web worker有自己的全局对象，不是主线程的window，所以worker没有alert confirm这些方法
:::
上面例子中用到了两个api，方法postMessage,terminate和事件onmessage。

**主要的方法：**
+ postMessage
    字面意思发送消息
+ terminate
    终止worker

**主要的事件：**
+ onmessage
    接收postMessage发送来的消息
+ onmessageerror
    当messageerror 类型的事件发生时，对应的EventHandler 代码被调用
    
**Worker自身内部的属性方法事件：**
+ importScripts();
    加载脚本(该方法可加装多个脚本)：self.importScripts('script1.js', 'script2.js')
+ close   
    worker内部关闭自身self.close()
+ onmessage
+ onmessageerror
+ postMessage

### web worker分类
web worker分为
+ DedicatedWorker(专用线程)
+ SharedWorker(共享线程)

概念上简单的理解专用线程就是专为当前页面服务的线程，而共享线程则可以为多个页面共享的线程。<br>

表现上来看，专用线程一般就在本页面调用，推送也只能推送本页面，当前页面关闭，则线程结束。共享线程则可以同时推送多个页面信息，要调用它的多个页面都关闭，线程才会结束，其实你可以把他理解成单页面里面store的概念，多个组件共享这个状态。<br>
   
DedicatedWorker(专用线程)用法就是普通的web worker<br>

**SharedWorker(共享线程)**

其实跟普通的web worker也只有些许的不同,只是它的事件方法都是在port对象上
```
<script>
if (window.Worker) {
    const myWorker = new SharedWorker("myWorker.js");
    
    myWorker.port.start()//onmessage事件或者start事件，这两种事件都可以启动一个SharedWorker
    
    myWorker.port.onmessage = function(e) {
        console.log('收到了');
    }
    myWorker.port.terminate()
} else {
    console.log('Your browser doesn\'t support web workers.')
}
</script>

myWorker.js
<script>
addEventListener('onconnect ', function (e) {  
  var port = e.ports[0];
  port.postMessage('发送');
  
}, false);
</script>
```
当然SharedWorker这个兼容性太差了，基本很多浏览器都不支持
   