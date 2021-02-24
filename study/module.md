 **模块化**

随着前端的系统越来越复杂，开发者要维护大量的代码，这时候很自然的就需要把系统功能依赖等等隔离，分成模块组织复杂的代码

在没有模块化之前，开发者都是通过编码模拟出类似模块的的功能例如函数封装，对象封装等等来避免变量污染，命名冲突等等。但随着代码量复杂度的提升，代码的可读性，可扩展，复用都靠开发者自己的约束显然是行不通的，很自然需要一套模块化规范。

## 模块化规范
常见的模块化规范CommonJS,AMD,CMD,ES6模块化等等
### CommonJS
CommonJS其实是服务器的模块化规范，我们熟悉的nodejs就是采用这个规范<br>
每个文件都是一个模块，加载模块用require，暴露模块用exports，很多模块化规范都复用了这两个关键字
```
定义模块
a.js
function a(){    
}
exports.a=a
or
module.exports=a
————————————————————————————————————————————————————————————————————

引用模块
b.js
var a=require('./a.js')

```
因为服务器通常情况下文件模块都是在本地，所以commonjs规范是同步的规范，并没有考虑异步，而其实我们浏览器环境，是需要从服务器加载模块的，就必须考虑异步，所以也就诞生了异步模块化规范
### AMD
AMD就是典型的异步规范，是RequireJS在推广过程中对模块化定义的产出

关键字define定义模块
```
定义模块

//If the module does not have dependencies
define(function () {
    //Do setup work here
    return {
        color: "black",
        size: "unisize"
    }
});

//If the module has dependencies
define(['./a.js','./b.js'],function(a,b){
return {
        color: "blue",
        size: "large",
        addToCart: function() {
            a.decrement(this);
            b.add(this);
        }
}
})
————————————————————————————————————————————————————————————————————
引用模块
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        jquery:['../lib/jquery']
    }
});
//Later
requirejs(['jquery'], function ($) {
    //can be used here
});
```
### CMD
CMD同样也是sea.js推广过程中对模块化定义的产出

```
定义模块
define(function(require,exports,module){
    var a=require('./a.js')
    var b=require('./b.js')
    
    // 通过 exports 对外提供接口
    exports.doSomething = ...
})
————————————————————————————————————————————————————————————————————

引用模块
// seajs 的简单配置
seajs.config({
  base: "../sea-modules/",
  alias: {
    "jquery": "jquery/jquery/1.10.1/jquery.js"
  }
});

// 加载入口模块
seajs.use("../static/hello/src/main");
```
:::tip AMD与CMD异同
从代码书写的表现可以明显看到AMD是需要define的时候就要定义用到哪些模块，而CMD则是在回调里面引用模块
+ AMD依赖前置 CMD依赖就近
+ 按照基础推荐示例AMD提前执行(其实AMD新版本也可以支持类似CMD的书写方式了，引入一个require模块)，CMD会用到才会执行
:::
### es6模块化
前面提到的模块化规范都是各个团队非正式推广诞生的规范，而es6则是在js语言的标准层面上，实现模块的功能，并且非常简单，完全可以替代以往的规范

关键字：import export
```
定义模块
export function multiply() {...};
export var year = 2018;
export default ...

引用模块
import "/app";
import React from “react”;
import { Component } from “react”;
```
:::tip 设计思想
es6的模块思想与以往最大的区别就是，静态分析，即在编译的时候就确定模块的依赖关系，而Commonjs AMD都是执行的时候才能确定。<br>
因为es6更强调的是静态分析，所以import关键字引入的模块都是写在代码的最前面，模块地址不能用变量代替，并且还会变量提升，同时无法对其进行逻辑判断等等，总之原则就是静态分析，要动态的引用就用  require。
:::
```
// case 1
if (bool) {
  require('./foo')()
} else {
  require('./bar')()
}

// case 2
for (const item of list) {
  require(`./foo-${item}`)()
}

```