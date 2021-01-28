(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{159:function(t,n,o){"use strict";o.r(n);var a=o(0),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"面向对象"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#面向对象"}},[t._v("#")]),t._v(" 面向对象")]),t._v(" "),o("p",[t._v("在js里面所有的都可以看作对象，正所谓万物皆对象。")]),t._v(" "),o("p",[t._v("面向对象三大特征")]),t._v(" "),o("ul",[o("li",[t._v("封装")]),t._v(" "),o("li",[t._v("继承")]),t._v(" "),o("li",[t._v("多态")])]),t._v(" "),o("h2",{attrs:{id:"封装"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#封装"}},[t._v("#")]),t._v(" 封装")]),t._v(" "),o("p",[t._v("其实封装里面有很多知识点，看你怎么去理解，往空泛了说封装就是你封装一个函数或者方法，方便调用，避免写一些重复的代码。\n但怎么去封装，就会涉及到你是用函数式编程的方式去编码，还是继承的方式去编码。")]),t._v(" "),o("h2",{attrs:{id:"继承"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[t._v("#")]),t._v(" 继承")]),t._v(" "),o("p",[t._v("js里面的面向对象其实跟大多数面向对象的编程语言都不一样。\n正常的面向对象里面有两个最重要的基本概念")]),t._v(" "),o("ul",[o("li",[t._v("类class，类本身就是一种类型，不表示任何具体的实例")]),t._v(" "),o("li",[t._v("实例，根据类创建的对象"),o("br")])]),t._v(" "),o("p",[t._v("而在js里面是通过复制原型来实现继承的")]),t._v(" "),o("h3",{attrs:{id:"原型"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#原型"}},[t._v("#")]),t._v(" 原型")]),t._v(" "),o("p",[t._v("这也是js实现面向对象，继承的最重要的一个概念。")]),t._v(" "),o("p",[t._v("js的原型是一个很让人头疼的事情。\n"),o("br"),t._v("一 来prototype容易与proto混淆。\n"),o("br"),t._v("二 来则是prototype、proto和constructor的三角关系。"),o("br")]),t._v(" "),o("p",[t._v("接下来我会举一些小例子来解释三者的关系")]),t._v(" "),o("ul",[o("li",[t._v("函数才有prototype")]),t._v(" "),o("li",[t._v("对象都有proto constructor")]),t._v(" "),o("li",[t._v("函数也是对象，所以函数也有proto constructor(以后有机会专门说一下Function 和Object的关系)")])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("【构造函数】\n【实例对象】\n例子1\nfunction Foo(){};\nvar f1 = new Foo;\nvar f2 = new Foo;\nFoo就是构造函数\nf1，f2就是实例对象\n————————————————————————————————————————————————————————\n【prototype】\n例子2\nfunction Foo(){};\nFoo.prototype.a=1\nvar f1 = new Foo;\nvar f2 = new Foo;\n\nconsole.log(Foo.prototype.a);//1\nconsole.log(f1.a);//1\nconsole.log(f2.a);//1\n构造函数都有一个prototype，而new得作用之一是复制构造器得原型，使f1,f2保持了引用，所以其实f1,f2得prototyte对象其实是同一个引用，这就是js实现继承得本质\n\n例子3\nfunction Foo(){};\nvar f1 = new Foo;\nconsole.log(Foo.prototype); {constructor:f}\nconsole.log(f1.prototype);  //undefined\n实例对象并打印不出来prototype，只有构造函数能打印出来，可见在js里面prototype属性只对构造函数暴露出来了\n构造函数得prototype属性指向得是constructor，在这里也就是自己\n————————————————————————————————————————————————————————\n【constructor】\n例子4\nfunction Foo(){};\nvar f1 = new Foo;\nconsole.log(f1.constructor === Foo);//true\n\nconstructor（构造器），实例对象得构造器就指向构造函数\n我们知道f1这个实例对象其实也通过原型对构造器保持着引用，我们怎么打印出来它的prototype呢，参考例子5\n——————————————————————————————————————————————————————————\n【proto】\n例子5\nfunction Foo(){};\nvar f1 = new Foo;\nconsole.log(f1.__proto__ === Foo.prototype);//true\n我们可以看出来，f1的proto就能指向prototype，因为f1是复制的构造函数Foo的prototype，所以他们的prototype是相同的\n所以我们可以推出   实例对象的proto指向的是该实例对象的原型\n———————————————————————————————————————————————————————————\n例子6\nfunction a(){}\nconsole.log(a.__proto__===Function.prototype)\n\n我们可以看出来a虽然并不是new出来的，其实也是一个实例，它的构造函数是Function,只是背后做了这些事情，我们不知道而已\n")])])]),o("p",[t._v("从上面一大堆例子其实已经可以得出三个之间的关系了")]),t._v(" "),o("ul",[o("li",[t._v("函数prototype是实例与构造函数的一种引用，实例对象复制的构造函数的prototype。")]),t._v(" "),o("li",[t._v("js里面的继承本质上就是实例去复制构造函数的prototype。")]),t._v(" "),o("li",[t._v("函数的proto指向的是其构造函数的prototype,并且可以通过proto一直追诉到顶级，这一层一层的结构就是原型链。")]),t._v(" "),o("li",[t._v("函数的constructor指向的就是它的构造器。")])]),t._v(" "),o("p",[t._v("其实js里面的继承本质上就是一个函数复制了另外一个函数的原型，通过在原型上挂在属性方法，复制的时候就把属性方法一起给复制了，也就实现了继承。\n写到这里我也觉得js里面的继承理解起来其实比其他面向对象的继承繁琐多了，谁让我们这门语言就没有类这个概念呢，即使后面es6的class也只是个语法糖。")]),t._v(" "),o("h3",{attrs:{id:"继承-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#继承-2"}},[t._v("#")]),t._v(" 继承")]),t._v(" "),o("h4",{attrs:{id:"一-原型链继承"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#一-原型链继承"}},[t._v("#")]),t._v(" 一 . 原型链继承")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("function Stu(){\n}\nStu.prototype.sex='男'\nvar a= new Stu();\nvar b= new Stu();\nconsole.log(a.sex) //男\n \na和b都是构造器Stu的实例对象，构造器上的prototype挂载的属性都被a,b继承\n—————————————————————————————————————————————————————\nfunction Stu(){\n}\nStu.prototype.sex={\nkey:'男'\n}\nvar a= new Stu();\nvar b= new Stu();\na.sex.key='女'\nconsole.log(a.sex.key) //女\nconsole.log(b.sex.key) //女\n因为属性sex是引用数据类型，a修改了，b也被修改了\n——————————————————————————————————————————————————————\n")])])]),o("p",[t._v("优点")]),t._v(" "),o("ul",[o("li",[t._v("纯粹的继承关系，实例就是构造函数的实例")]),t._v(" "),o("li",[t._v("简单")])]),t._v(" "),o("p",[t._v("缺点")]),t._v(" "),o("ul",[o("li",[t._v("无法传参")]),t._v(" "),o("li",[t._v("构造器原型对象上的所有属性都会被实例继承，构造函数更改属性，那么实例上所有的属性都会被更改")]),t._v(" "),o("li",[t._v("实例继承的属性是引用类型的话，所有实例的属性都会被修改")]),t._v(" "),o("li",[t._v("多继承乏力")])]),t._v(" "),o("h4",{attrs:{id:"二-构造继承"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#二-构造继承"}},[t._v("#")]),t._v(" 二 . 构造继承")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("function Father(param){\n    this.name=param\n}\nfunction Father2(param){\n    this.sex=param\n}\nfunction Son(name,sex){\n    Father.call(this,name)\n    Father2.call(this,sex)\n}\nvar a=new Son('张三','男')\nconsole.log(a);\nconsole.log(a instanceof Son); true\nconsole.log(a instanceof Father); false\n\na就通过call或者apply实现了继承多个构造函数\n—————————————————————————————————————————————————————————\n\n")])])]),o("p",[t._v("优点")]),t._v(" "),o("ul",[o("li",[t._v("可以传参")]),t._v(" "),o("li",[t._v("可以实现多个构造函数的继承")]),t._v(" "),o("li",[t._v("实例可以不用完全共享构造函数的属性，更活用")])]),t._v(" "),o("p",[t._v("缺点")]),t._v(" "),o("ul",[o("li",[t._v("实例并不是父类的实例，是子类的实例。（比如上面的例子，a是And的实例，并不是Stu,Boy的实例，call只是改了this的指向）")]),t._v(" "),o("li",[t._v("只能继承父类的实例方法，并不能继承原型的属性方法")]),t._v(" "),o("li",[t._v("每个子类其实都是父类函数的副本，都是通过call来拷贝的嘛，影响性能（其实我觉得现代浏览器的性能影响不会太大~~）")])]),t._v(" "),o("h4",{attrs:{id:"三"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#三"}},[t._v("#")]),t._v(" 三 .")]),t._v(" "),o("p",[t._v("组合继承\n核心就是原型链继承和构造函数继承的结合，")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("function Father(param){\n    this.name=param\n}\nfunction Son(name){\n    Father.call(this,name)\n}\nSon.prototype=new Father(name)\nvar a= new Son('张安');\nconsole.log(a);\nconsole.log(a instanceof Father); // true\nconsole.log(a instanceof Son); // true\n——————————————————————————————————————————————————————\n")])])]),o("p",[t._v("优点")]),t._v(" "),o("ul",[o("li",[t._v("原型链继承与构造继承的结合，解决了大部分两个单独使用会出现的问题\n缺点")]),t._v(" "),o("li",[t._v("相对来说，不只是组合继承，包括原型链继承，构造函数继承以及在这两个上面诞生的其他继承其实都是一种hack,代码都挺难维护的，理解也不舒服，编码也不舒服，所以es6诞生了class的方法")])]),t._v(" "),o("h4",{attrs:{id:"四-class"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#四-class"}},[t._v("#")]),t._v(" 四 . class")]),t._v(" "),o("p",[t._v("其实class诞生就是为了让我们编码更简单，更好维护")]),t._v(" "),o("p",[t._v("【class】")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("【class】\nclass Father{\n     constructor(name) {\n        this.name = name;\n    }\n    eat(){\n        console.log('eat')\n    }\n}\nvar a= new Father('张三');\nconsole.log(a)\n")])])]),o("p",[t._v("就是这么的清爽，简单，你很容易就能理解Father是个类，a是一个实例，代码里面没有任何的什么call啊 prototype啊")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("new Foo();// ReferenceError\nclass Foo{}\n")])])]),o("p",[t._v("值得注意的是这样会报错，class不存在变量提升")]),t._v(" "),o("p",[t._v("【constructor】")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("class Father{\n    constructor(){}\n}\n//等同于\nFather.prototype = {\n    constructor(){},\n}\n\nclass Point{}\n//等同于\nclass Point{\n    constructor(){}\n}\n")])])]),o("p",[t._v("class中的constructor，其实这里的constructor等同于挂载到prototype的constructor\n这里其实跟es5所理解的constructor是一致的，只是写法而已。"),o("br"),t._v("\n就算你不写constructor,其实也会默认添加一个空的constructor。")]),t._v(" "),o("p",[t._v("【extends】")]),t._v(" "),o("p",[t._v("class可以通过extends来实现子类继承父类")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("class Father{}\nclass Son extends Father{}\n")])])]),o("p",[t._v("【super】")]),t._v(" "),o("p",[t._v("super作为函数使用时：")]),t._v(" "),o("p",[t._v("其实下面的例子才是一个子类继承父类的基本结构，而且子类必须执行super()")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("class A{}\nclass B extends A{\n    constructor(){\n        this.name='123' //报错\n        super(); //其实这里相当于 A.prototype.constructor.call(this)   \n        this.name='123' //对的\n    }\n}\n")])])]),o("p",[t._v("简单的理解就是子类要先super一下，代码上看就是 父类.prototype.constructor.call(this)，\n得到与父类相同的实例属性和方法，然后再加上子类自己的实例属性和方法。"),o("br"),t._v("\n所以只有调用super之后，才可以使用this关键字，否则会报错")]),t._v(" "),o("p",[t._v("super作为对象使用时：")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("class A{\n     constructor(){\n        this.name='123'\n     }\n    eat(){\n        return 'eat'\n    }\n}\nclass B extends A{\n    constructor(){\n       super(); \n       console.log(super.eat()); //eat A.prototype.eat()\n       console.log(super.name);  //undefined\n       console.log(super.constructor.name) //123\n    }\n}\nvar c = new B();\n")])])]),o("p",[t._v("可以看出,作为对象,super其实就相当于 A.prototype,指向的就是父类的原型对象。作为函数，其实就是把父类的构造器的属性给绑定在this上"),o("br"),t._v("\n从上面的例子还可以看出 super.name取不到值，super.constructor.name是能取到值的，这也间接说明了class这个关键字，其实内部所有的属性都是挂载到prototype上的，constructor 相当于 prototype.constructor。"),o("br"),t._v("\n所以作为代码层面简单的理解就是class除了constructor，其他的属性全是直接挂原型上的，constructor是间接挂原型上的。"),o("br"),t._v("\n站在继承的角度讲，class继承属性和方法分别挂在原型和构造器内部"),o("br"),t._v("\n所有其实class只是一个语法糖，内部依然还是通过prototype实现继承的本质,super就专门去实现this的call，但是class写法让人更好理解，也更好维护。"),o("br")]),t._v(" "),o("h2",{attrs:{id:"多态"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#多态"}},[t._v("#")]),t._v(" 多态")]),t._v(" "),o("p",[t._v("其实我以前对多态也不是很理解，看了很多文献博客,不同的文献还总结不同的结果，什么重载啊重写啊例子举一大堆，我大致总结了一下"),o("br"),t._v("\n其实多态就是不同的对象执行同一个操作，返回不同的结果。最简单的例子就是加法运算符，数字跟字符串加法运算的结果大不一样"),o("br"),t._v("\n理念上来说，就是把做什么跟谁去做分开，让代码更好维护 "),o("br")])])}),[],!1,null,null,null);n.default=s.exports}}]);