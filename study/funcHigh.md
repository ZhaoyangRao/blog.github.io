## 高阶函数
一个函数接收另外一个函数作为参数，这个函数就叫高阶函数
```
function a(x){
    return x
}

function b(x,f){
    return f(x)
}

b(1,a)     // 1  这个b就是一个典型的高阶函数，它接收一个函数作为参数，这里把a函数传给它了

```
:::tip 总结
所谓函数引用、对象引用、函数名其实都是内存中的一个地址，这个地址指向了某个函数或对象或方法，谁拿到了这个地址，谁就拥有了调用函数、调用方法的权利，所以所谓传入函数作为参数，其实就是把这个地址传给了另外一个函数，让另外一个函数拥有操作这个函数的权利.
:::
## js自提供的几个高阶函数
其实你可能一直在使用高阶函数，只是你不知道它是高阶函数
### map
+ callback
    + element  也就是集合中的每一个item
    + index 位置
    + self  传入的集合
```
function a(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(a);  
console.log(results); // [1, 4, 9, 16, 25, 36, 49, 64, 81] 

这不就等价于,可能你平时更多就下面这样玩

var results = arr.map(item=>{
    return item=item*item
}); 

——————————————————————————
还有更简单的一些技巧用法
arr.map(String); // ['1', '2', '3', '4', '5', '6', '7', '8', '9'] 
```
### reduce
又叫累加器，一版用作累加，最主要的也是previousValue这个callback里面的参数
+ callback （执行数组中每个值的函数，包含四个参数）
    + previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
    + currentValue （数组中当前被处理的元素）
    + index （当前元素在数组中的索引）
    + array （调用 reduce 的数组）
+ initialValue （作为第一次调用 callback 的第一个参数。）
```
var arr = [1, 2, 3];
var results = arr.reduce((prev, cur)=>{
    console.log(prev, cur)
    return prev=prev+cur
})
console.log(results) //6

————————————————————
initialValue的用法，类似于累加之前的一个初始值
var arr = [1, 2, 3];
var results = arr.reduce((prev, cur)=>{
    console.log(prev, cur)
    return prev=prev+cur
},2)
console.log(results) // 8

```
### filter
又叫过滤器，用于筛选，返回过滤后的数据
+ callback
    + element  也就是集合中的每一个item
    + index 位置
    + self  传入的集合
```
var arr = [1, 2, 3];
var results=arr.filter(item=>{
    return item>2
})
console.log(results) //[3]

```
### sort
排序，需要注意的是sort方法会默认把元素转换为String再排序，直接对数字排，绝对掉坑里
```
let arr=[1,2,10,3]
console.log(arr.sort())  //[1, 10, 2, 3] 
```
上面的例子可不是你想要的结果,所以我们需要自己提供一个比较函数传给sort
```
let arr=[1,2,10,3]
let r=arr.sort((a,b)=>{
console.log(a,b)
return a-b
})
console.log(r)   //[1,2,3,10]
___________________
let arr=[1,2,10,3]
let r=arr.sort((a,b)=>{
console.log(a,b)
return b-a
})
console.log(r)   //[10,3,2,1]

```
上面的正序倒序一下就排序完成了，但是如果对sort内部机制不明白，这个a和b到底是啥？<br>
通过console其实你大致都能看出来了<br>
sort中的那个函数就叫做比较函数，该函数比较a和b两个值，return一个用来说明a,b相对顺序的数字。<br>
+ a-b>0  所以b相对再a前面
+ a-b=0  ab相对位置不会变
+ a-b<0  a相对在b前面
<br>sort函数就是不断的对相邻两个值不断对比，记录位置，不断调整顺序，根据两个值相减返回的值与0对比确认两个值的相对位置。

```
按照数组中对象的某一个属性值进行排序

var arr = [
    {name:'zopp',age:0},
    {name:'gpp',age:18},
    {name:'yjj',age:8}
];

let r=arr.sort((a,b)=>{
    return a.age-b.age
})
console.log(r)  //[{name:'zopp',age:0},{name:'yjj',age:8},{name:'gpp',age:18}]

我们知道sort是根据return计算的值跟0相比来确定相邻两个值的相对位置，所以只要这个值我们随机生成，不就实现了乱排吗

let arr=[1,2,10,3]
let r=arr.sort(function(a,b){
    return Math.random() - 0.5;
})
console.log(r)  //乱序
```
### every
用来检测是不是数组中每一个元素都符合条件,返回一个布尔值
```
let arr=[1,2,10,3]
let r=arr.every(item=>{
    return item>2
})
console.log(r)  //false
```
### some
只要数组中有一个满足条件，就返回布尔值，跟every刚好对应
```
let arr=[1,2,10,3]
let r=arr.some(item=>{
    return item>2
})
console.log(r)  //true
```

其实还有很多高阶函数，只要能传个函数给他的就是高阶函数，数组里面提供的高阶函数多了去了，例如find,findIndex,forEach等等，这里只是举几个典型的例子