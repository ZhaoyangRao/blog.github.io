(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{155:function(e,n,a){"use strict";a.r(n);var t=a(0),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"js的异步编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js的异步编程"}},[e._v("#")]),e._v(" js的异步编程")]),e._v(" "),a("p",[e._v("同步和异步的概念就不讲了，我们这里主要说说js异步编程的方法，其实你可以理解为这只是用于处理异步的编程方法，让编码者好理解,好维护."),a("br"),e._v("\n其实工作中更多的是为了处理某个异步依赖于另外一个异步的结果，而处理异步的这些编程方法是为了让异步代码按照期望的顺序执行，返回符合预期的结果。"),a("br")]),e._v(" "),a("p",[e._v("我了解到的目前js至少有6种异步编程的方式"),a("br")]),e._v(" "),a("h3",{attrs:{id:"回调函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回调函数"}},[e._v("#")]),e._v(" 回调函数")]),e._v(" "),a("p",[e._v("这个是js异步最基本的方法，也是最好理解的方法，缺点就是异步嵌套太多，代码冗余会严重")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ajax(url, () => {\n    // 处理逻辑\n    ajax(url1, () => {\n        // 处理逻辑\n        ajax(url2, () => {\n            // 处理逻辑\n        })\n    })\n})\n")])])]),a("p",[e._v("上面就是典型的回调处理异步，在前端的业务处理中更多的是ajax的回调嵌回调，好处与劣势自己细品")]),e._v(" "),a("h3",{attrs:{id:"事件监听"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件监听"}},[e._v("#")]),e._v(" 事件监听")]),e._v(" "),a("p",[e._v("这种思想就是用事件驱动的模式去处理异步，简单的理解就是某个异步函数执行完成，然后触发一个事件，事件去调用另外一个函数(这里是jq里面的写法)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function f1(){\n　　　　setTimeout(function () {\n　　　　　　f1.trigger('done');\n　　　　}, 1000);\n　　}\n\nf1.on('done', ()=>{});\n")])])]),a("h3",{attrs:{id:"发布订阅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅"}},[e._v("#")]),e._v(" 发布订阅")]),e._v(" "),a("p",[e._v("这种方法与事件驱动类似，其实内部原理是一样的，发布订阅本质上来说也是事件，但比事件监听优化了很多，比如“调度中心”的概念，我们可以清楚知道现在有哪些订阅者，发布信号等，我把它理解为更系统化的事件监听。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('function f1(){\n　　　　setTimeout(function () {\n　　　　　　jQuery.publish("done");\n　　　　}, 1000);\n　　}\njQuery.subscribe("done", ()=>{});  \n')])])]),a("p",[e._v("这里还是借鉴的jq的发布订阅，具体的自己实现发布订阅这里暂不展开，其实发布订阅我个人觉得并不适合我们业务中的异步处理，业务中更多的是ajax，发布订阅反而会让代码有点不好理解")]),e._v(" "),a("h3",{attrs:{id:"promise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[e._v("#")]),e._v(" Promise")]),e._v(" "),a("p",[e._v("前面的三种方式其实都有使用起来简单，但是维护起来复杂，很容易陷入回调地狱，难以读懂。"),a("br"),e._v("\n这也是promise诞生的原因，需要一种更好维护更好阅读的方式来处理异步")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("new Promise((resolve,reject)=>{\nresolve('success') // 成功\n//reject('failed') //失败\n//console.log('进入promise') \n}).then((res)=>{\n\n}).catch((err)=>{\n\n})\n\n")])])]),a("p",[e._v("resolve与reject可以理解为是一段时间的异步操作，所以代码块里面除了它两其他依然是同步的方式执行，所以会先执行‘进入promise’，我把resolve和reject认为其实就是promise的回调触发函数，一个成功的回调，一个失败的回调"),a("br")]),e._v(" "),a("h4",{attrs:{id:"promise有三个状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise有三个状态"}},[e._v("#")]),e._v(" promise有三个状态")]),e._v(" "),a("ul",[a("li",[e._v("pending 等待中")]),e._v(" "),a("li",[e._v("rejected 失败")]),e._v(" "),a("li",[e._v("resolved(Fulfilled) 成功"),a("br")])]),e._v(" "),a("p",[e._v("状态只能由 pending=>rejected  或者 pending=>resolved 得到结果就结束")]),e._v(" "),a("h4",{attrs:{id:"promise的then方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise的then方法"}},[e._v("#")]),e._v(" promise的then方法")]),e._v(" "),a("p",[e._v("简单的理解then方法就是为了接收resolve和reject处理状态的，所以其实then有两个参数，第一个函数接收resolved状态的执行，第二个参数接收reject状态的执行(实际工作中更多的是用catch去接收)。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("new Promise(function(resolve, reject) {\n        if (true) {\n            resolve();\n        } else {\n            reject();\n        }\n    }).then((resolved)=> {\n       \n    }, (reject)=> {\n    \n    })\n    \n等价于\n\nnew Promise(function(resolve, reject) {\n        if (true) {\n            resolve();\n        } else {\n            reject();\n        }\n    }).then((resolved)=> {\n       \n    }).catch((reject)=>{\n    \n    })\n    \n也等价于\n\nnew Promise(function(resolve, reject) {\n        if (true) {\n            resolve();\n        } else {\n            reject();\n        }\n    }).then((resolved)=> {\n       \n    }).then(null,(reject)=>{\n    \n    })\n\n")])])]),a("h4",{attrs:{id:"promise的数据传递"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise的数据传递"}},[e._v("#")]),e._v(" promise的数据传递")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function a(n){\n    return new Promise((resolve, reject)=>{\n        if(typeof n == 'number'){\n            resolve(n)\n        }else{\n            reject()\n        }\n    })\n}\n\na(1).then((n)=>{\n    console.log('resolve',n) \n    return n\n}).then(n=>{\n    console.log('resolve',n) \n    return n+2\n})\n\n// 结果就是 resolve',1  resolve',3\n")])])]),a("p",[e._v("这个数据传递的功能非常重要，证明then能拿到上一次promise的结果，并传递给下一个then，想象我们的工作中处理多个ajax的依赖，不正是需要拿到上一次ajax的结果吗，其实这种使用场景反而更多")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("假定ajax2依赖ajax1的返回结果\n//回调的写法\nfunction ajax1(){\n     axios().then((res)=>{\n            axios().then((res)=>{\n              axios().then((res)=>{\n                  axios().then((res)=>{\n\n                })\n            })\n        })\n    })\n}\n\n// primise.then改造\nfunction ajax1(){\n    return axios().then((res)=>{\n        resolve(res)\n    })\n}\nfunction ajax2(){\n    return axios().then((res)=>{\n        resolve(res)\n    })\n}\nfunction ajax3(){\n    return axios().then((res)=>{\n        resolve(res)\n    })\n}\najax1().then((ajax1res)=>{\n    return ajax2()\n}).then((ajax2res)=>{\n    return ajax3()\n}).then((ajax3res)=>{\n    console.log(ajax3res)\n})\n\n")])])]),a("h4",{attrs:{id:"promise-all"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise-all"}},[e._v("#")]),e._v(" promise.all")]),e._v(" "),a("p",[e._v("其实跟它的字面意思一样，在Promise.all下所有的promise有了结果，才会调用then")]),e._v(" "),a("ul",[a("li",[e._v("all接收的是一个promise对象组成的数组，")]),e._v(" "),a("li",[e._v("如果都resolved返回的也是各个promise结果组成的数组")]),e._v(" "),a("li",[e._v("如果有一个是rejectd就会直接进catch了")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Promise.all([ajax1(url), ajax1(url1)]).then((res)=>{\n\n}).catch((err)=>{\n\n})\n")])])]),a("p",[e._v("在工作中，它主要处理多个请求的结果都返回的时候你再用都返回的结果做事情")]),e._v(" "),a("h4",{attrs:{id:"promise-race"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise-race"}},[e._v("#")]),e._v(" promise.race")]),e._v(" "),a("ul",[a("li",[e._v("与Promise.all类似，都是接收promise对象组成的数组")]),e._v(" "),a("li",[e._v("只是含义不一样，只要其中有一个有返回结果就调用then，传给then的结果就是最先调用then的那个")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Promise.race([ajax1(url), ajax1(url1)]).then((res)=>{\n\n})\n")])])]),a("p",[e._v("我在工作中很少有使用到promise.race的这个需求，也不知道具体能在哪个场景下能用到")]),e._v(" "),a("h3",{attrs:{id:"生成器generator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成器generator"}},[e._v("#")]),e._v(" 生成器Generator")]),e._v(" "),a("h4",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[e._v("#")]),e._v(" 基本概念")]),e._v(" "),a("p",[e._v("promise现在基本已经是很多前端用来处理回调的方案了，包括很多函数库都是基于promise封装的例如axios等等"),a("br"),e._v("\n但原有的任务用promise包装一下，又会有很多then，于是就诞生了Generator")]),e._v(" "),a("h4",{attrs:{id:"特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[e._v("#")]),e._v(" 特点")]),e._v(" "),a("ul",[a("li",[e._v("function命令与函数名之间有一个*")]),e._v(" "),a("li",[e._v("函数内部使用yield语句")]),e._v(" "),a("li",[e._v("函数的调用跟普通函数一样，不同的是并不会立刻就执行，而是返回一个指向内部状态的指针对象，即指向第一个遇到的 yield 语句")]),e._v(" "),a("li",[e._v("必须使用next方法，使得指针指向下一个状态 "),a("br"),e._v("\n这也是为什么它能更优雅的处理异步，正因为可以暂停后续的执行")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function* test(){\n    yield console.log('1')\n    yield console.log('2')\n}\ntest().next()\n")])])]),a("h4",{attrs:{id:"yield与next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yield与next"}},[e._v("#")]),e._v(" yield与next")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function* test(){\n    yield 1\n    yield 2\n}\nlet a=test()\nconsole.log(a.next())   //{value:1,done:false}\nconsole.log(a.next())   //{value:1,done:false}\nconsole.log(a.next())   //{value:undefined,done:true}\n")])])]),a("p",[e._v("从上面可以看出"),a("br")]),e._v(" "),a("ul",[a("li",[e._v("当调用next的，才会执行，并且执行第一次遇到的yield语句，再次调用，就指向下一个yiled")]),e._v(" "),a("li",[e._v("next返回的是一个对象，包含value和done")]),e._v(" "),a("li",[e._v("遇到yiled会暂停后续的执行，并且将yield后的表达式的值返回作为返回对象的value")]),e._v(" "),a("li",[e._v("当调用next没有再遇到yiled时，返回done属性值:true，value属性值为undefined。done可以表示遍历是否结束  "),a("br")])]),e._v(" "),a("p",[e._v("其实对迭代器概念有了解的话会更加容易理解这里的next以及返回的对象{value:'',done:Boolen},这里不作延申了，Generators是生成器专门来生成迭代器的存在")]),e._v(" "),a("h4",{attrs:{id:"generator异步应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generator异步应用"}},[e._v("#")]),e._v(" Generator异步应用")]),e._v(" "),a("p",[e._v("正因为yiled的可以暂停执行，用Generator可以写成很优雅的异步编程代码，下面就是多个ajax依赖的写法，比promise来说简洁的多了")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//假定ajax3依赖ajax2，ajax2依赖ajax1\nfunction ajax1(){\n     axios().then((res)=>{\n      a.next(res)\n    })\n}\nfunction ajax2(){\n     axios().then((res)=>{\n      a.next(res)\n    })\n}\nfunction ajax3(){\n     axios().then((res)=>{\n      a.next(res)\n    })\n}\n\nfunction* test(){\n    let res1 =yield ajax1()\n    let res2 =yield ajax2()\n    let res3 =yield ajax3()\n}\nvar a=test();\na.next()\n")])])]),a("h3",{attrs:{id:"async-await"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async-await"}},[e._v("#")]),e._v(" async/await")]),e._v(" "),a("p",[e._v("Generator函数是将函数分步骤阻塞，只有主动调用next() 才能进行下一步，async函数就相当于自执行的Generator函数，在await的部分等待返回， 返回后自动执行下一步。"),a("br")]),e._v(" "),a("p",[e._v("网上有种说法，是async/wait是相当于Generator把*变成了async 把 yield 变成了 await???"),a("br")]),e._v(" "),a("p",[e._v("而async/wait也确实是Generate的语法糖，而且还能自动执行，不需要next，更加方便了")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const ajax1 = () => {\n    return new Promise((resolve, reject)=>{\n      axios().then((res)=>{\n        resolve(res)\n    })\n    })\n  }\n\n  const ajax2 = () => {\n    return new Promise((resolve, reject)=>{\n      axios().then((res)=>{\n        resolve(res)\n    })\n    })\n  }\n\n  const ajax3 = () => {\n    return new Promise((resolve, reject)=>{\n      axios().then((res)=>{\n        resolve(res)\n    })\n    })\n  }\n\n  async function runAll () {\n    let res1=await ajax1();\n    let res2=await ajax2();\n    let res3=await ajax3();\n  }\n\n  runAll().then(()=>{})\n          .catch(()=>{})\n")])])]),a("p",[e._v("从上面的代码可以看出来，async确实跟Generator很像，但也有区别"),a("br")]),e._v(" "),a("ul",[a("li",[e._v("将*转为async，并且至于function最前")]),e._v(" "),a("li",[e._v("将yield转为awiat，并且不再return")]),e._v(" "),a("li",[e._v("await后返回的是Promise对象，需要.then获取拿出，而Generator的return出具体的结果")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("总结")]),e._v(" "),a("p",[e._v("前端的技术更新迭代是很多的，处理异步的方式可能也不止现在这几种，加上各大浏览器对新的属性以及方法的兼容性问题，在工作中使用哪种自然有多方的考虑，祝我们以后都能更快乐的阅读历史代码吧。\nJS 异步编程进化史：callback -> promise -> generator -> async + await")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("JS 异步编程进化史：")]),e._v(" "),a("p",[e._v("callback -> promise -> generator -> async + await")])])])}),[],!1,null,null,null);n.default=s.exports}}]);