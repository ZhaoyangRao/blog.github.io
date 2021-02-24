## null与undefined
作为一个前端工程师，对js里面的null与undefined，很多人都会感到困惑，也有可能当时看了知道了，过段时间又忘了这两个的区别，主要还是它们在js里面的表现形式很相近，但其实js对他们的定义是大不一样的。<br>
::: tip 定义
首先我们要明确的是Undefined 和 Null 是 Javascript 中两种特殊的原始数据类型,它们都只有一个值，分别对应 undefined 和 null
:::
### null
null 表示一个值被定义了，定义为“空值”,被人为的重置为空对象。<br>
GC会择机回收该对象并释放内存。因此，如果需要释放某个对象，就将变量设置为null，即表示该对象已经被清空，目前无效状态

### undefined

undefined 的字面意思就是未定义，根本不存在定义<br>
例如：
+ 变量被声明了，但没有赋值  var a;  console.log(a)//undefined
+ 调用函数时，应该提供的参数没有提供  function a(p){console.log(p)}  a()// undefined
+ 对象没有赋值的属性，该属性的值为undefined   var a={name:'123'}  console.log(a.sex)// undefined
+ 函数执行操作后没有返回值var x = function a(){}() alert(x)//undefined
::: warning 注意
综上，所以设置一个值为 null 是合理的,如var a= null;值为null但已经可以用代码来处理了。<br>
但设置一个值为 undefined 是不合理，也没有意义的，本来 var a它此时就是undefined，你再var a=undefined毫无意义，而且在我们的代码里面undefined更多的时候指向一种错误
:::

### js中异同表现
上面对基本概念有所理解，我们再看一看js里面对null和undefined的表现<br>
首先看一个判断题：null和undefined 是否相等
```
console.log(null==undefined)//true
console.log(null===undefined)//false
```
再看
```
alert(!undefined) //true
alert(!null) //true

```    
null与undefined在js里面的行为非常相似，从上面的几个简单的例子里面我们肯定会困惑<br>

为什么双等下是true？<br>

全等我们能理解，本来两者又不属于同一种类型.双等是因为 ECMAScript 规范认为，既然 null 和  undefined 的行为很相似，并且都表示 一个无效的值，那么它们所表示的内容也具有相似性，所以知道了吧，是es规范这样搞事情的。<br>

为什么遇到“！”关键字符，null,undefined又被转换成了false?<br>

其实不只是“！”这个关键字符，包括遇到if语句，null,undefined都会被转换成false，在这里可以去把js的类型转换看一看，尤其特色的null,undefined,[ ],"",{ },NaN的各种特殊转换

#### 在Number parseInt parseFloat中的表现
```
Number(null) //0
Number(undefined) //NAN
这表明null能转为0 undefined转为的数字为NAN
parseInt(null) //NAN
parseInt(undefined) //NAN
parseFloat(null)//NAN
parseFloat(undefined)//NAN
```
为什么会出现这些结果？
+ parseInt()按字符解析，直到遇见第一个非数字字符为止。
+ parseFloat()按字符解析，直到遇见一个无效的浮点数字字符为止。
+ Number()能转换boolean值，null，只含整数或小数的字符串，空字符串，对象。

#### typeof中的表现
```
typeof(null) object   
typeof(undefined) undefined
```
参考《The history of “typeof null”》
第一版的JavaScript的数据类型在底层都是以二进制的形式，二进制的前三位为 0 会被 typeof 判断为对象类型，而 null 的二进制位恰好都是 0 ，因此，null 被误判断为 Object 类型。
1. 整型（int）000
2. 引用类型（object）010
3. 双精度浮点型（double）100
4. 字符串（string）110
5. 布尔型（boolean）另外还用两个特殊值
6. undefined，用整数−2^30（负2的30次方，不在整型的范围内）
7. null，机器码空指针（C/C++ 宏定义），低三位也是000 <br>
typeof的源代码里面没有过滤null，导致在判断obj阶段产生了误会。
```
JS_PUBLIC_API(JSType)
JS_TypeOfValue(JSContext *cx, jsval v)
{
    JSType type = JSTYPE_VOID;
    JSObject *obj;
    JSObjectOps *ops;
    JSClass *clasp;

    CHECK_REQUEST(cx);
    if (JSVAL_IS_VOID(v)) {  // (1)
        type = JSTYPE_VOID;
    } else if (JSVAL_IS_OBJECT(v)) {  // (2)
        obj = JSVAL_TO_OBJECT(v);
        if (obj &&
            (ops = obj->map->ops,
              ops == &js_ObjectOps
              ? (clasp = OBJ_GET_CLASS(cx, obj),
                clasp->call || clasp == &js_FunctionClass) // (3,4)
              : ops->call != 0)) {  // (3)
            type = JSTYPE_FUNCTION;
        } else {
            type = JSTYPE_OBJECT;
        }
    } else if (JSVAL_IS_NUMBER(v)) {
        type = JSTYPE_NUMBER;
    } else if (JSVAL_IS_STRING(v)) {
        type = JSTYPE_STRING;
    } else if (JSVAL_IS_BOOLEAN(v)) {
        type = JSTYPE_BOOLEAN;
    }
    return type;
}
```
所以typeof(null) 的结果为object，这是js里面的一个bug，曾经有提案 typeof null === 'null'.但提案被拒绝。

### 校验数据类型
前面我们提到 typeof(null) //object ,那么我们怎么获得我们想要的结果null呢，当然有，我们这里再简单的复习一下js校验数据类型的几个方式
1. #### typeof
+ typeof "";  //string
+ typeof 1;   //number
+ typeof false; //boolean
+ typeof undefined; //undefined
+ typeof function(){}; //function
+ typeof {}; //object
+ typeof Symbol(); //symbol
+ typeof null; //object--------------->无效
+ typeof []; //object--------------->无效
+ typeof new Date(); //object--------------->无效
+ typeof new RegExp(); //object   --------------->无效
<br>可以看到 typeof只能判断几种简单的数据类型

2. #### instanceof
+ [] instanceof Array; *//true*
+ {} instanceof Object;*//true*
+ new Date() instanceof Date;*//true*
+ new RegExp() instanceof RegExp*//true*
+ null instanceof Null-------------->报错
+ undefined instanceof undefined-------------->报错

3. #### constructor
+ alert(c.constructor === Array) ----------> true
+ alert(d.constructor === Date) -----------> true
+ alert(e.constructor === Function) -------> true
:::tip 注意
注意： null 和 undefined没有constructor <br>
如果自定义对象，开发者重写prototype之后，原有的constructor会丢失
:::
4. #### toString 通用的方法
+ alert(Object.prototype.toString.call('1') === ‘[object String]’) -------> true;
+ alert(Object.prototype.toString.call(1) === ‘[object Number]’) -------> true;
+ alert(Object.prototype.toString.call([1]) === ‘[object Array]’) -------> true;
+ alert(Object.prototype.toString.call(new Date()) === ‘[object Date]’) -------> true;
+ alert(Object.prototype.toString.call(null) === ‘[object Null]’) -------> true;
+ alert(Object.prototype.toString.call(undefined) === ‘[object undefined]’) -------> true;
+ alert(Object.prototype.toString.call(function(){}) === ‘[object Function]’) -------> true;
<br>该方法基本能满足js里面的类型校验了，就是代码有点多，不考虑其他函数库的情况下通用的方法
5. #### lodash,underscore,jquery都有现成的函数库