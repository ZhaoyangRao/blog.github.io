## this
网上我也看了很多关于this的解读或者例子，这里做一个自己总结的记录吧
:::tip this
this其实简单的说就是函数运行时所在的环境对象，在哪里运行或者说谁在调用它，this就指向谁，记住这个就够了。

所谓函数引用、对象引用、函数名其实都是内存中的一个地址，这个地址指向了某个函数或对象或方法，谁拿到了这个地址，谁就拥有了调用函数、调用方法的权利，此时this就指向调用者。

所以函数没有被调用，就没有this，只有在执行的时候你才能知道到底谁在调用函数。

值得注意的是在严格版中的默认的this不再是window，而是undefined，下面的例子都不是严格模式。
:::

先来几个例子来缕一缕上面的几句话
```
例1
function a(){
    var user = "追梦子";
    console.log(this.user); //undefined
    console.log(this); //Window
}
a();   

此时this指向得是window，a()其实是window.a()，所以很显然其实是window在调用它
————————————————————————————————————————————————
例2
var o = {
    user:"追梦子",
    fn:function(){
        console.log(this.user);  //追梦子
    }
}
o.fn();

此时this指向o, o在调用fn()，有人就会想了 o.fn() 其实不就是window.o.fn()吗?为什么没有指向window了

所以this其实只跟谁调用该函数，通常指向的是上一级,跟js的老传统作用域链有关系，虽然最外面是window，但是其实上一级，或者说它的直接调用者是o，所以依然指向o
——————————————————————————————————————————————————
例3
var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a); //12
        }
    }
}
o.b.fn();

根据例子2的结论，你能很快判断出此时this指向b 
————————————————————————————————————————————————————
例4
var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a); //undefined
        }
    }
}
var c=o.b.fn;
c()
这里可能有人又会迷惑了，这里的this指向了window，为什么不是b？
牢记this永远指向调用它的对象，c函数是被window调用的毫无疑问，在这里特殊的是虽然fn是在被b引用，但它此时并没有执行。
fn被赋值给了c，最终执行并调用c的依然是window
————————————————————————————————————————————————————


```
## 改变this指向
### new关键字
```
构造函数调用模式下，this指向被构造的对象
例5
function Fn(){
    this.user = "1";
}
var a = new Fn();
console.log(a.user); //1

按照我们前面几个例子的理解，我们也要看Fn是被谁调用的是吧! 这里是看起来被new给调用了啊，难道this指向new，new是什么玩意???

```
我们先要搞清楚new这个特殊的关键字做了什么？
+ 创建了一个空对象
+ 复制了原型
+ this指向改变，指向刚刚创建的新对象
+ 返回新的对象实例<br>

下面就是一个具体代码化的new的例子
```
function Fn(){
    this.user = "1";
}
var a = new Fn();
——————————————————————————
这里的 var a= new Fn();
其实在这期间做了很多事情

var obj={};  //创建了一个空对象

obj._proto_=Fn.prototype; //复制了原型

Fn.call(obj,'a'); //this指向改变,指向自己

return obj  //返回对象
```
### call apply  
上面讲new的时候我们其实举例的时候也是举内部有个call去改变了this指向，所以new的改变指向其实本质上也跟call或者apply有关。<br>

这是两个可以切换函数运行的上下文环境的方法，直白的说就是可以改变this指向，你想让函数指向谁，就指向谁。<br>

使用方法：
+ callback
   + 第一个参数，是你想指向的函数
   + 第二个参数差别就不一样了，call是直接放进去的用‘,’分割，apply是数组，所以我一般还是用apply较多
```
function a(a,b){
    return a+b
}

var a1=a.call(a,1,2)   

console.log(a1)   // 3 
——————————————————————
var b1=a.apply(a,[1,2])

conosle.log(b1)   //3
```
### bind
bind同样的也能改变this指向
```
function a(a,b){
    return a+b
}

var a1=a.bind(a,1,2)()   

console.log(a1)   // 3 

```
从上面的例子看bind更像call，传参跟call一致
+ callback
   + 第一个参数，是你想指向的函数
   + 第二个参数用‘,’分割，与call一致

但是它多了一个(),执行符号
由此可知，bind返回的是一个新的函数，需要调用它才能执行

### 箭头函数
箭头函数是es6新增的一种函数<br>

箭头函数除了写法的区别外，最大的区别是关于this，其他函数都是谁调用它指向谁，而箭头函数并不遵循这个规则，更像是按照作用域链去继承上一级的this。<br>
```
 例子：
    var x=2;
    
    var fn = (()=>{
        console.log(this.x)
    })
    
    fn();//2  
——————————————————————————————
例子：
    var fn = (()=>{
        console.log(this.x)
    })  
    var x="2"
    var obj={
        x:"1",
        fn:fn
    }
    obj.fn();//2
    
这里虽然是obj调用的fn，但是因为fn是箭头函数，它就去找继承上一级的this，也就是全局windows了
```
值得注意的是
使用了箭头函数，你再去bind,apply,call，就会发现失去了作用，第一个参数直接被忽略了，因为箭头函数已经继承了this了，你可以理解为箭头函数的优先级更加高。



