# 面向对象
在js里面所有的都可以看作对象，正所谓万物皆对象。

面向对象三大特征
+ 封装
+ 继承
+ 多态
## 封装
其实封装里面有很多知识点，看你怎么去理解，往空泛了说封装就是你封装一个函数或者方法，方便调用，避免写一些重复的代码。
但怎么去封装，就会涉及到你是用函数式编程的方式去编码，还是继承的方式去编码。

## 继承
js里面的面向对象其实跟大多数面向对象的编程语言都不一样。
正常的面向对象里面有两个最重要的基本概念
+ 类class，类本身就是一种类型，不表示任何具体的实例
+ 实例，根据类创建的对象<br>

而在js里面是通过复制原型来实现继承的

### 原型
这也是js实现面向对象，继承的最重要的一个概念。

js的原型是一个很让人头疼的事情。
<br>一 来prototype容易与proto混淆。
<br>二 来则是prototype、proto和constructor的三角关系。<br>

接下来我会举一些小例子来解释三者的关系
+ 函数才有prototype
+ 对象都有proto constructor
+ 函数也是对象，所以函数也有proto constructor(以后有机会专门说一下Function 和Object的关系)

```
【构造函数】
【实例对象】
例子1
function Foo(){};
var f1 = new Foo;
var f2 = new Foo;
Foo就是构造函数
f1，f2就是实例对象
————————————————————————————————————————————————————————
【prototype】
例子2
function Foo(){};
Foo.prototype.a=1
var f1 = new Foo;
var f2 = new Foo;

console.log(Foo.prototype.a);//1
console.log(f1.a);//1
console.log(f2.a);//1
构造函数都有一个prototype，而new得作用之一是复制构造器得原型，使f1,f2保持了引用，
所以其实f1,f2得prototyte对象其实是同一个引用，这就是js实现继承得本质

例子3
function Foo(){};
var f1 = new Foo;
console.log(Foo.prototype); {constructor:f}
console.log(f1.prototype);  //undefined
实例对象并打印不出来prototype，只有构造函数能打印出来，
可见在js里面prototype属性只对构造函数暴露出来了
构造函数得prototype属性指向的是constructor
————————————————————————————————————————————————————————
【constructor】
例子4
function Foo(){};
var f1 = new Foo;
console.log(f1.constructor === Foo);//true

constructor（构造器），实例对象得构造器就指向构造函数
我们知道f1这个实例对象其实也通过原型对构造器保持着引用，我们怎么打印出来它的prototype呢，参考例子5
——————————————————————————————————————————————————————————
【proto】
例子5
function Foo(){};
var f1 = new Foo;
console.log(f1.__proto__ === Foo.prototype);//true
我们可以看出来，f1的proto就能指向prototype，因为f1是复制的构造函数Foo的prototype，
所以他们的prototype是相同的
所以我们可以推出   实例对象的proto指向的是该实例对象的原型
———————————————————————————————————————————————————————————
例子6
function a(){}
console.log(a.__proto__===Function.prototype)

我们可以看出来a虽然并不是我们显示的new出来的，其实也是一个实例，
它的构造函数是Function,只是背后做了这些事情，我们不知道而已
```
从上面一大堆例子其实已经可以得出三个之间的关系了

+ prototype是实例与构造函数的一种引用。
+ js里面的继承本质上就是实例去复制构造函数的prototype。
+ 函数的proto指向的是其构造函数的prototype,并且可以通过proto一直追诉到顶级，这一层一层的结构就是原型链。
+ 实例的constructor指向的就是它的构造函数。

其实js里面的继承本质上就是一个函数复制了另外一个函数的原型，通过在原型上挂在属性方法，复制的时候就把属性方法一起给复制了，也就实现了继承。<br>
写到这里我也觉得js里面的继承理解起来其实比其他面向对象的继承繁琐多了，谁让我们这门语言就没有类这个概念呢，即使后面es6的class也只是个语法糖。
### 继承

#### 一 . 原型链继承
```
function Stu(){
}
Stu.prototype.sex='男'
var a= new Stu();
var b= new Stu();
console.log(a.sex) //男
 
a和b都是构造器Stu的实例对象，构造器上的prototype挂载的属性都被a,b继承
—————————————————————————————————————————————————————
function Stu(){
}
Stu.prototype.sex={
key:'男'
}
var a= new Stu();
var b= new Stu();
a.sex.key='女'
console.log(a.sex.key) //女
console.log(b.sex.key) //女
因为属性sex是引用数据类型，a修改了，b也被修改了
——————————————————————————————————————————————————————
```
优点
+ 纯粹的继承关系，实例就是构造函数的实例
+ 简单

缺点
+ 无法传参
+ 构造器原型对象上的所有属性都会被实例继承，构造函数更改属性，那么实例上所有的属性都会被更改
+ 实例继承的属性是引用类型的话，所有实例的属性都会被修改
+ 多继承乏力
#### 二 . 构造继承
```
function Father(param){
    this.name=param
}
function Father2(param){
    this.sex=param
}
function Son(name,sex){
    Father.call(this,name)
    Father2.call(this,sex)
}
var a=new Son('张三','男')
console.log(a);
console.log(a instanceof Son); true
console.log(a instanceof Father); false

a就通过call或者apply实现了继承多个构造函数
—————————————————————————————————————————————————————————

```
优点
+ 可以传参
+ 可以实现多个构造函数的继承
+ 实例可以不用完全共享构造函数的属性，更活用

缺点
+ 实例并不是父类的实例，是子类的实例。（比如上面的例子，a是Son的实例，并不是Father,Father2的实例，call只是改了this的指向）
+ 只能继承父类的实例方法，并不能继承挂载到父类原型上的属性方法（比如Father.prototype上的属性方法）
+ 每个子类其实都是父类函数的副本，都是通过call来拷贝的嘛，影响性能（其实我觉得现代浏览器的性能影响不会太大~~）
#### 三 . 组合继承
核心思想就是原型链继承和构造函数继承的结合起来
```
function Father(param){
    this.name=param
}
function Son(name){
    Father.call(this,name)
}
Son.prototype=new Father(name)；//相当于把父类Father的原型赋值给了子类Son的原型,
var a= new Son('张安');
console.log(a);
console.log(a instanceof Father); // true
console.log(a instanceof Son); // true
——————————————————————————————————————————————————————
```
优点
+ 原型链继承与构造继承的结合，解决了大部分两个单独使用会出现的问题
缺点
+ 相对来说，不只是组合继承，包括原型链继承，构造函数继承以及在这两个上面诞生的其他继承其实都是一种hack,理解也不舒服，编码也不舒服，维护起来更不舒服，所以es6诞生了class的方法
#### 四 . class
其实class诞生就是为了让我们编码更简单，更好维护

【class】
```
【class】
class Father{
     constructor(name) {
        this.name = name;   
    }
    eat(){
        console.log('eat')
    }
}
等同于
Father.prototype ={
    constructor(name) {
            this.name = name;   
        }
    eat(){
            console.log('eat')
        }
}


var a= new Father('张三');
console.log(a)
```
就是这么的清爽，简单，你很容易就能理解Father是个类，a是一个实例，代码里面没有任何的什么call啊 prototype啊<br>
+ 定义一个类，它的本质就是一个函数，类本身就指向一个构造函数
+ 类里面的所有方法其实都定义在prototype上面，所以其实这个类的实例上调用方法，实际上是调用原型上的方法
+ 所以js里面的类其实就是一个语法糖，具体还是使用prototype和this来进行模拟类（具体表现在类里面的constructor构造函数，使用的是constructor构造函数来模拟类，看起来像类的样子）。
```
new Foo();// ReferenceError
class Foo{}
```
值得注意的是这样会报错，class不存在变量提升

【constructor】

```
class Father{
    constructor(){}
}
//等同于
Father.prototype = {
    constructor(){},
}

class Point{}
//等同于
class Point{
    constructor(){}
}
```
+ 与java很像，每一个类里面就有一个构造函数
+ 如果没有显式定义，则会生成一个默认构造函数。
+ constructor方法默认返回实例对象this，也可以return另外一个对象
+ class中的constructor函数，其实这里的constructor函数等同于挂载到prototype的constructor

值得注意的是，我们知道其实本质上js里面的类本身就是一个构造函数，类里面的方法都是挂载到原型上的，所以其实类里面的constructor方法也只是挂载到原型上的一个特殊一点的方法而已

【extends】

class可以通过extends来实现子类继承父类
```
class Father{}
class Son extends Father{}
```
【super】

super作为函数使用时：

其实下面的例子才是一个子类继承父类的基本结构，而且子类必须执行super()
```
class A{}
class B extends A{
    constructor(){
        this.name='123' //报错
        super(); //其实这里相当于 A.prototype.constructor.call(this)   
        this.name='123' //对的
    }
}
```
简单的理解就是子类要先super一下，代码上看就是 父类.prototype.constructor.call(this)，
得到与父类相同的实例属性和方法，然后再加上子类自己的实例属性和方法。<br>
所以只有调用super之后，才可以使用this关键字，否则会报错

super作为对象使用时：
```
class A{
     constructor(){
        this.name='123'
     }
    eat(){
        return 'eat'
    }
}
class B extends A{
    constructor(){
       super(); 
       console.log(super.eat()); //eat A.prototype.eat()
       console.log(super.name);  //undefined
       console.log(super.constructor.name) //123
    }
}
var c = new B();
```
可以看出,作为对象,super其实就相当于 A.prototype,指向的就是父类的原型对象。作为函数，其实就是把父类的构造器的属性给绑定在this上<br>

从上面的例子还可以看出 super.name取不到值，super.constructor.name是能取到值的，这也间接说明了class这个关键字，其实内部所有的属性都是挂载到prototype上的，constructor 相当于 prototype.constructor。<br>

所有其实class只是一个语法糖，内部依然还是通过prototype实现继承的本质,super就专门去实现this的call，但是class写法让人更好理解，也更好维护。<br>

## 多态
其实我以前对多态也不是很理解，看了很多文献博客,不同的文献还总结不同的结果，什么重载啊重写啊例子举一大堆，我大致总结了一下<br>
其实多态就是不同的对象执行同一个操作，返回不同的结果。最简单的例子就是加法运算符，’两个数字相加‘ 与 ’两个字符串相加‘ 运算的结果大不一样<br>
理念上来说，就是把做什么跟谁去做分开，让代码更好维护 <br>