(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{165:function(e,a,t){"use strict";t.r(a);var r=t(0),n=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"iterator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iterator"}},[e._v("#")]),e._v(" iterator")]),e._v(" "),t("h3",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[e._v("#")]),e._v(" 概念")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v('通过翻阅迭代器协议以及可迭代协议，我了解到，在js里面iterator其实是一个对象（废话，js里面哪个不是对象），定义了一个可迭代的序列，并且可以通过调用next()返回一个对象{value:"",done:Boolean},当迭代到序列最后时，done为true。'),t("br")])]),e._v(" "),t("p",[e._v("其实iterator我理解的是也是为了遍历，在没有iterator之前，遍历Array可以采取下标来循环，但是Map和Set这些你无法使用下标的怎么去遍历呢？于是es6引入了iterator机制，并且很多语言都有iterator的概念，js当然也不能落后，于是迭代器和与之对应的生成器被带入了js."),t("br")]),e._v(" "),t("p",[e._v("所以有了iterator，就可以对集合进行标准化的遍历操作，不管是Array还是Map,Set都可以通过iterator这种机制来遍历."),t("br")]),e._v(" "),t("h3",{attrs:{id:"iterator机制的集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iterator机制的集合"}},[e._v("#")]),e._v(" iterator机制的集合")]),e._v(" "),t("p",[e._v("js里面哪些数据结构已经内置了iterator机制呢\nArray、Map、Set、String、TypedArray、函数的 arguments 对象、NodeList 对象都具备 Iterator 接口等等"),t("br")]),e._v(" "),t("p",[e._v("比如Array,它的原型上有一个属性为Symbol(Symbol.iterator)，它就是迭代器函数，执行这个就会返回迭代器对象，迭代器对象就可以调用next()来玩了，\n其实就是某些集合对象，js想让它能标准化遍历，就给内置了iterator机制，但其实工作中我们遇见最多的是Array、Map、Set."),t("br")]),e._v(" "),t("p",[e._v("那么没有内置的，我们也可以通过自己去写迭代器，或者直接用Generator去生成，生成器不就是干这个的嘛")]),e._v(" "),t("h3",{attrs:{id:"迭代器方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#迭代器方法"}},[e._v("#")]),e._v(" 迭代器方法")]),e._v(" "),t("p",[e._v("我们已经知道具有iterator的可以遍历，那么怎么遍历呢？这里介绍几个迭代器方法")]),e._v(" "),t("h4",{attrs:{id:"_1-for-of"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-for-of"}},[e._v("#")]),e._v(" 1.for...of")]),e._v(" "),t("p",[e._v("首先es6随之而来提供了for...of这个api，这也是最基础的方法")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let arr = [1,2,3];\nfor(let num of arr){\nconsole.log(num);\n}\n// 1 2 3\n\nlet set=new Set([1,2,3])\nfor(let num of set){\nconsole.log(num);\n}\n// 1 2 3\n\nlet map=new Map([[1,2],[3,4]])\nfor(let num of map){\nconsole.log(num);\n}\n// [1,2]  [3,4]\n")])])]),t("p",[e._v("上面的代码执行的逻辑跟你理解的简单的for。。in循环机制大不一样"),t("br")]),e._v(" "),t("ul",[t("li",[e._v("首先for-of会调用arr数组中我们前面提到的Symbol.iterator，就得到了arr的迭代器对象,")]),e._v(" "),t("li",[e._v('然后会自动执行iterator.next()，返回对象的{value:"",done:Boolean},其中value属性会被保存在num中')]),e._v(" "),t("li",[e._v("直到迭代到序列最后时，done为true，循环结束。"),t("br")])]),e._v(" "),t("p",[e._v("----这里的循环也被叫做消耗迭代器"),t("br")]),e._v(" "),t("p",[e._v("所以它完全没有去追踪index下标索引，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。就可以使用上述默认会调用Iterator函数的API=>for...of。"),t("br")]),e._v(" "),t("h4",{attrs:{id:"_2-foreach"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-foreach"}},[e._v("#")]),e._v(" 2.forEach")]),e._v(" "),t("p",[e._v("for..of虽然不错，但forEach更加简单，方便")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let arr = [1,2,3];\narr.forEach((e)=>{\nconsole.log(e)\n})\n// 1 2 3\n\nlet set=new Set([1,2,3])\nset.forEach((e)=>{\nconsole.log(e)\n})\n// 1 2 3\n\nlet map=new Map([[1,2],[3,4]])\nmap.forEach((e)=>{\nconsole.log(e)\n})\n// [1,2]  [3,4]\n\n")])])]),t("p",[e._v("当然还有es6还提供了其他更骚的方法，展开语法、yield*，和解构赋值等等来消耗迭代器")]),e._v(" "),t("h4",{attrs:{id:"_3-扩展运算符-spread"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-扩展运算符-spread"}},[e._v("#")]),e._v(" 3.扩展运算符(spread)")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let set=new Set([1,2,3])\nconsole.log(...set)\n// 1 2 3\n\n")])])]),t("h4",{attrs:{id:"_4-解构赋值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-解构赋值"}},[e._v("#")]),e._v(" 4.解构赋值")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let arr = [1, 2, 3, 4, 5];\nlet [a,b,c,d,e]=arr;\nconsole.log(b) //2\n")])])]),t("h4",{attrs:{id:"_5-es6的array-map-set还内置了方法，调用后也可返回迭代器对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-es6的array-map-set还内置了方法，调用后也可返回迭代器对象"}},[e._v("#")]),e._v(" 5.es6的Array,Map,Set还内置了方法，调用后也可返回迭代器对象")]),e._v(" "),t("ul",[t("li",[e._v("entries() 返回的是{value:[key(键),value(值)],done:Boolean}")]),e._v(" "),t("li",[e._v("key()  返回的是{value:key(键),done:Boolean}")]),e._v(" "),t("li",[e._v("values() 返回的是{value:value(值),done:Boolean}")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Array\nlet arr = [1, 2, 3, 4, 5];\nlet it=arr.entries()\nconsole.log(it.next())  //{value:[0,1],done:false}\nlet itKey=arr.key()\nconsole.log(itKey.next()) //{value:0,done:false}\nlet itVal=arr.values()\nconsole.log(itVal.next())  //{value:1,done:false}\n\nSet\nlet arr=new Set([1,2,3,4,5])\nconosle.log(arr.next()) //{value:[1,1],done:false}  Set跟数组不一样，键与值相同\nlet arrKey=arr.key()\nconsole.log(arrKey.next()) //{value:1,done:false}\nlet arrVal=arr.values()\nconsole.log(arrVal.next()) //{value:1,done:false}\n\nMap\nlet map=new Map([[1,2],[3,4]])\nlet it=map.entries()\nconsole.log(it.next()) //{value:[1,2],done:false}  Map例如这里[1,2]，本身就表示[key,value]的含义\nlet itKey=map.key()\nconsole.log(itKey.next()) //{value:1,done:false}\nlet itVal=map.values()\nconsole.log(itVal.next()) //{value:2,done:false}\n")])])]),t("h4",{attrs:{id:"对象为什么没有内置迭代器机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象为什么没有内置迭代器机制"}},[e._v("#")]),e._v(" 对象为什么没有内置迭代器机制")]),e._v(" "),t("p",[e._v("我们知道js主要表示集合的数据结构有Array,Object es6新增加了Set Map"),t("br"),e._v("\n为什么Array,Set,Map都内置了迭代器机制，而Object没有内置呢，去控制台打印也可以发现，Object没有[Symbol.iterator]属性"),t("br"),e._v("\n我理解的原因是Object的遍历，你要考虑到遍历自身的属性还是遍历对象自身原型链的属性等等，考虑的会比较复杂，加上现在遍历对象的方式其实已经有很多方法了"),t("br")]),e._v(" "),t("p",[e._v("那么我们偏要给一个对象整一个迭代器，最简单的就是生成器了，自己去生成迭代器"),t("br")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var it = {};\nit[Symbol.iterator] = function* () {\nyield 1;\nyield 2;\nyield 3;\n};\n//可以被...遍历，说明已经部署成功\nconsole.log([...it])// [1, 2, 3]\nlet myIterator = it[Symbol.iterator]()\nconsole.log(myIterator.next())//{value: 1, done: false}\nconsole.log(myIterator.next())//{value: 2, done: false}\nconsole.log(myIterator.next())//{ value: 3, done: false }\nconsole.log(myIterator.next())//{ value: undefined, done: true }\n\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("这里只是简单的理解一下iterator的概念，本文中顺便提到的一些es6提供的一些新的方法以后有机会再说")])])])}),[],!1,null,null,null);a.default=n.exports}}]);