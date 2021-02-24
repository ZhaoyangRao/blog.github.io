(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{161:function(t,n,e){"use strict";e.r(n);var a=e(0),l=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"事件模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件模型"}},[t._v("#")]),t._v(" 事件模型")]),t._v(" "),e("p",[t._v("突然有人问我事件模型，一下子就短路了，事件就事件，事件代理我也晓得，事件绑定的兼容性我也知道，事件模型是什么鬼？这是个什么概念？")]),t._v(" "),e("p",[t._v("在工作中都知道通过事件来跟用户产生交互，让界面返回用户想要的结果，但事件模型表达的是一个关于什么的概念呢？翻阅了一些资料，我知道了，原来我一直都在用，只是不知道这个就叫做事件模型，这就跟web安全各种漏洞的概念一样，你有可能知道这个漏洞，但是不知道这个漏洞在不同的地方有不同的名词概念，懵逼也很正常。")]),t._v(" "),e("h3",{attrs:{id:"dom0事件模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dom0事件模型"}},[t._v("#")]),t._v(" DOM0事件模型")]),t._v(" "),e("p",[t._v("为什么叫DOM0这个跟DOM规范的版本有关，证明这种事件模型在DOM0版本就已经定义了，")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//绑定事件\n<button type=\"button\" onclick=\"console.log('click')\"></button>\nvar $btn = document.querySelector('button');\n$btn.onclick = () => {console.log('click')};\n$btn.onclick = () => {console.log('click2')};  //只会执行这个，前面的都会被覆盖了\n————————————————————————————————————————————————————————————————————\n//取消事件\n$btn.onclick =null\n\n")])])]),e("p",[t._v("从上面得例子可以看见，其实绑定取消很简单，语义化也很明显，唯一得缺点就是无法绑定多个同类型事件回调，前面所注册的同类型事件的函数会被覆盖，但是这种方式简单，因为很早就提出来，兼容性也好，其实使用的频率也很高。")]),t._v(" "),e("h3",{attrs:{id:"dom2事件模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dom2事件模型"}},[t._v("#")]),t._v(" DOM2事件模型")]),t._v(" "),e("p",[t._v("DOM2事件模型的出现就是为了解决DOM0无法绑定多个同类型事件的。相较于DOM0事件绑谁就在谁身上的简单概念，诞生了新的概念也就是我们熟悉的捕获与冒泡，原则上默认是先捕获后冒泡")]),t._v(" "),e("h4",{attrs:{id:"捕获与冒泡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#捕获与冒泡"}},[t._v("#")]),t._v(" 捕获与冒泡")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<html>\n  <body>\n    <button></button>\n  </body>\n</html>\n假如点击了button\n首先执行捕获流程document -> html -> body ->button\n然后执行冒泡流程button -> body -> html -> document\n————————————————————————————————————————————————————————————————\n//绑定事件\n$btn.addEventListener('click', () => alert('body'),true); //捕获\n$btn.addEventListener('click', () => alert('body'),false); //冒泡\n—————————————————————————————————————————————————————————————————\n//取消事件\n$btn.removeEventListener('click', btnClick); \n—————————————————————————————————————————————————————————————————\n//我真的不想让事件冒泡捕获\n$btn.addEventListener('click', (event) => {event.stopPropagation()});\n")])])]),e("p",[t._v("可以看出，绑定事件有三个参数，事件类型，回调函数，以及一个boolean，默认是false，也就是默认是冒泡。")]),t._v(" "),e("h3",{attrs:{id:"ie事件模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ie事件模型"}},[t._v("#")]),t._v(" IE事件模型")]),t._v(" "),e("p",[t._v("因为DOM2事件模型在IE是存在兼容性问题的，比如IE8是不支持DOM2的骚操作的，根本没有捕获的概念，同时IE也有自己的事件模型，不会吧？不会现在应该不会还有人兼容IE8吧？")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<html>\n  <body>\n    <button></button>\n  </body>\n</html>\n假如点击了button\n执行冒泡流程button -> body -> html -> document\n—————————————————————————————————————————————————————————————————\n//绑定事件\n$btn.attachEvent('click', () => alert('body')); \n—————————————————————————————————————————————————————————————————\n//取消事件\n$btn.detachEvent('click',handler);\n")])])]),e("p",[t._v("IE事件模型只支持冒泡，且没有第三个参数，默认就是冒泡")]),t._v(" "),e("h2",{attrs:{id:"事件代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件代理"}},[t._v("#")]),t._v(" 事件代理")]),t._v(" "),e("p",[t._v("顾名思义就是把事件代理出去，其实是DOM2事件模型的延申，正因为事件可以冒泡捕获了，那么事件就可以绑定在父元素上，通过捕获冒泡的方式传递到子元素，事件代理通常都是绑定在父元素上，核心就是DOM2事件模型的捕获冒泡。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<div>\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n</div>\n—————————————————————————————————————————————————————————————————\n比如上面的多个li，要给li绑定事件，你要自己给每一个都绑定，如果一百个，就要绑一百个，性能问题咱不说，代码书写也不好维护\n$div.addEventListener('click', (e) => {\n    if(e.targettagName.toLowerCase() == 'li' ){\n    \n    }\n})\n\n")])])])])}),[],!1,null,null,null);n.default=l.exports}}]);