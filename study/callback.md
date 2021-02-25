## js的异步编程
同步和异步的概念就不讲了，我们这里主要说说js异步编程的方法，其实你可以理解为这只是用于处理异步的编程方法，让编码者好理解,好维护.<br>
其实工作中更多的是为了处理某个异步依赖于另外一个异步的结果，而处理异步的这些编程方法是为了让异步代码按照期望的顺序执行，返回符合预期的结果。<br>

我了解到的目前js至少有6种异步编程的方式<br>
### 回调函数
这个是js异步最基本的方法，也是最好理解的方法，缺点就是异步嵌套太多，代码冗余会严重
```
ajax(url, () => {
    // 处理逻辑
    ajax(url1, () => {
        // 处理逻辑
        ajax(url2, () => {
            // 处理逻辑
        })
    })
})
```
上面就是典型的回调处理异步，在前端的业务处理中更多的是ajax的回调嵌回调，好处与劣势自己细品
### 事件监听
这种思想就是用事件驱动的模式去处理异步，简单的理解就是某个异步函数执行完成，然后触发一个事件，事件去调用另外一个函数(这里是jq里面的写法)
```
function f1(){
　　　　setTimeout(function () {
　　　　　　f1.trigger('done');
　　　　}, 1000);
　　}

f1.on('done', ()=>{});
```
### 发布订阅
这种方法与事件驱动类似，其实内部原理是一样的，发布订阅本质上来说也是事件，但比事件监听优化了很多，比如“调度中心”的概念，我们可以清楚知道现在有哪些订阅者，发布信号等，我把它理解为更系统化的事件监听。
```
function f1(){
　　　　setTimeout(function () {
　　　　　　jQuery.publish("done");
　　　　}, 1000);
　　}
jQuery.subscribe("done", ()=>{});  
```
这里还是借鉴的jq的发布订阅，具体的自己实现发布订阅这里暂不展开，其实发布订阅我个人觉得并不适合我们业务中的异步处理，业务中更多的是ajax，发布订阅反而会让代码有点不好理解
### Promise
前面的三种方式其实都有使用起来简单，但是维护起来复杂，很容易陷入回调地狱，难以读懂。<br>
这也是promise诞生的原因，需要一种更好维护更好阅读的方式来处理异步
```
new Promise((resolve,reject)=>{
resolve('success') // 成功
//reject('failed') //失败
//console.log('进入promise') 
}).then((res)=>{

}).catch((err)=>{

})

```
resolve与reject可以理解为是一段时间的异步操作，所以代码块里面除了它两其他依然是同步的方式执行，所以会先执行‘进入promise’，我把resolve和reject认为其实就是promise的回调触发函数，一个成功的回调，一个失败的回调<br>

#### promise有三个状态
+ pending 等待中
+ rejected 失败
+ resolved(Fulfilled) 成功<br>

状态只能由 pending=>rejected  或者 pending=>resolved 得到结果就结束

#### promise的then方法
简单的理解then方法就是为了接收resolve和reject处理状态的，所以其实then有两个参数，第一个函数接收resolved状态的执行，第二个参数接收reject状态的执行(实际工作中更多的是用catch去接收)。
```
new Promise(function(resolve, reject) {
        if (true) {
            resolve();
        } else {
            reject();
        }
    }).then((resolved)=> {
       
    }, (reject)=> {
    
    })
    
等价于

new Promise(function(resolve, reject) {
        if (true) {
            resolve();
        } else {
            reject();
        }
    }).then((resolved)=> {
       
    }).catch((reject)=>{
    
    })
    
也等价于

new Promise(function(resolve, reject) {
        if (true) {
            resolve();
        } else {
            reject();
        }
    }).then((resolved)=> {
       
    }).then(null,(reject)=>{
    
    })

```
#### promise的数据传递

```
function a(n){
    return new Promise((resolve, reject)=>{
        if(typeof n == 'number'){
            resolve(n)
        }else{
            reject()
        }
    })
}

a(1).then((n)=>{
    console.log('resolve',n) 
    return n
}).then(n=>{
    console.log('resolve',n) 
    return n+2
})

// 结果就是 resolve',1  resolve',3
```
这个数据传递的功能非常重要，证明then能拿到上一次promise的结果，并传递给下一个then，想象我们的工作中处理多个ajax的依赖，不正是需要拿到上一次ajax的结果吗，其实这种使用场景反而更多
```
假定ajax2依赖ajax1的返回结果
//回调的写法
function ajax1(){
     axios().then((res)=>{
            axios().then((res)=>{
              axios().then((res)=>{
                  axios().then((res)=>{

                })
            })
        })
    })
}

// primise.then改造
function ajax1(){
    return axios().then((res)=>{
        resolve(res)
    })
}
function ajax2(){
    return axios().then((res)=>{
        resolve(res)
    })
}
function ajax3(){
    return axios().then((res)=>{
        resolve(res)
    })
}
ajax1().then((ajax1res)=>{
    return ajax2()
}).then((ajax2res)=>{
    return ajax3()
}).then((ajax3res)=>{
    console.log(ajax3res)
})

```

#### promise.all
其实跟它的字面意思一样，在Promise.all下所有的promise有了结果，才会调用then
+ all接收的是一个promise对象组成的数组，
+ 如果都resolved返回的也是各个promise结果组成的数组
+ 如果有一个是rejectd就会直接进catch了
```
Promise.all([ajax1(url), ajax1(url1)]).then((res)=>{

}).catch((err)=>{

})
```
在工作中，它主要处理多个请求的结果都返回的时候你再用都返回的结果做事情
#### promise.race
+ 与Promise.all类似，都是接收promise对象组成的数组
+ 只是含义不一样，只要其中有一个有返回结果就调用then，传给then的结果就是最先调用then的那个
```
Promise.race([ajax1(url), ajax1(url1)]).then((res)=>{

})
```
我在工作中很少有使用到promise.race的这个需求，也不知道具体能在哪个场景下能用到

### 生成器Generator
#### 基本概念
promise现在基本已经是很多前端用来处理回调的方案了，包括很多函数库都是基于promise封装的例如axios等等<br>
但原有的任务用promise包装一下，又会有很多then，于是就诞生了Generator

#### 特点
+ function命令与函数名之间有一个*  
+ 函数内部使用yield语句
+ 函数的调用跟普通函数一样，不同的是并不会立刻就执行，而是返回一个指向内部状态的指针对象，即指向第一个遇到的 yield 语句
+ 必须使用next方法，使得指针指向下一个状态 <br>
这也是为什么它能更优雅的处理异步，正因为可以暂停后续的执行
```
function* test(){
    yield console.log('1')
    yield console.log('2')
}
test().next()
```
#### yield与next
```
function* test(){
    yield 1
    yield 2
}
let a=test()
console.log(a.next())   //{value:1,done:false}
console.log(a.next())   //{value:1,done:false}
console.log(a.next())   //{value:undefined,done:true}
```
从上面可以看出<br>
+ 当调用next的，才会执行，并且执行第一次遇到的yield语句，再次调用，就指向下一个yiled
+ next返回的是一个对象，包含value和done
+ 遇到yiled会暂停后续的执行，并且将yield后的表达式的值返回作为返回对象的value
+ 当调用next没有再遇到yiled时，返回done属性值:true，value属性值为undefined。done可以表示遍历是否结束  <br>

其实对迭代器概念有了解的话会更加容易理解这里的next以及返回的对象{value:'',done:Boolen},这里不作延申了，Generators是生成器专门来生成迭代器的存在
#### Generator异步应用
正因为yiled的可以暂停执行，用Generator可以写成很优雅的异步编程代码，下面就是多个ajax依赖的写法，比promise来说简洁的多了
```
//假定ajax3依赖ajax2，ajax2依赖ajax1
function ajax1(){
     axios().then((res)=>{
      a.next(res)
    })
}
function ajax2(){
     axios().then((res)=>{
      a.next(res)
    })
}
function ajax3(){
     axios().then((res)=>{
      a.next(res)
    })
}

function* test(){
    let res1 =yield ajax1()
    let res2 =yield ajax2()
    let res3 =yield ajax3()
}
var a=test();
a.next()
```
### async/await
Generator函数是将函数分步骤阻塞，只有主动调用next() 才能进行下一步，async函数就相当于自执行的Generator函数，在await的部分等待返回， 返回后自动执行下一步。<br>

网上有种说法，是async/wait是相当于Generator把\*变成了async 把 yield 变成了 await???<br>

而async/wait也确实是Generate的语法糖，而且还能自动执行，不需要next，更加方便了
```
const ajax1 = () => {
    return new Promise((resolve, reject)=>{
      axios().then((res)=>{
        resolve(res)
    })
    })
  }

  const ajax2 = () => {
    return new Promise((resolve, reject)=>{
      axios().then((res)=>{
        resolve(res)
    })
    })
  }

  const ajax3 = () => {
    return new Promise((resolve, reject)=>{
      axios().then((res)=>{
        resolve(res)
    })
    })
  }

  async function runAll () {
    let res1=await ajax1();
    let res2=await ajax2();
    let res3=await ajax3();
    return res3;
  }

  runAll().then(()=>{})
          .catch(()=>{})
```
从上面的代码可以看出来，async确实跟Generator很像，但也有区别<br>
+ 将\*转为async，并且至于function最前
+ Generator需要next执行，async自执行
+ async 函数的返回值是Promise对象（会自动转为立即resovle的promise对象）， Generator 函数的返回值是 Iterator 对象

:::tip 总结
前端的技术更新迭代是很多的，处理异步的方式可能也不止现在这几种，加上各大浏览器对新的属性以及方法的兼容性问题，在工作中使用哪种自然有多方的考虑，祝我们以后都能更快乐的阅读历史代码吧。

JS 异步编程进化史：callback -> promise -> generator -> async + await
:::

:::tip JS 异步编程进化史：
callback -> promise -> generator -> async + await
:::