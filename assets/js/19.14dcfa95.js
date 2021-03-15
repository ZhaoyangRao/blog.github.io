(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{160:function(t,r,s){"use strict";s.r(r);var e=s(0),v=Object(e.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"浏览器dns域名解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器dns域名解析"}},[t._v("#")]),t._v(" 浏览器DNS域名解析")]),t._v(" "),s("h3",{attrs:{id:"dns域名解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns域名解析"}},[t._v("#")]),t._v(" DNS域名解析")]),t._v(" "),s("p",[t._v("DNS域名解析简单的理解，就是当你输入一个域名，DNS服务器把我们输入的域名翻译成IP地址，它就是一个翻译官。"),s("br")]),t._v(" "),s("h3",{attrs:{id:"为什么需要dns解析？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要dns解析？"}},[t._v("#")]),t._v(" 为什么需要DNS解析？"),s("br")]),t._v(" "),s("p",[t._v("网络通讯大部分都是基于TCP/IP协议，看名字都知道TCP/IP是基于IP地址的，所以在网络通讯时人家只认识‘196.168.0.0’之类的IP地址，你看这反人类的数字，不可能让用户去记这些，所以就诞生了更简单的域名类似‘www.baidu.com'，用户记住域名输入，DNS解析成IP地址就行了。"),s("br")]),t._v(" "),s("p",[t._v("TCP/IP协议这里就不细讲了。")]),t._v(" "),s("h3",{attrs:{id:"dns怎么去解析？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns怎么去解析？"}},[t._v("#")]),t._v(" DNS怎么去解析？")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("1.用户输入一个域名，例如’www.baidu.com'，浏览器马上开启线程去DNS解析这个域名，目的就是转换成IP地址"),s("br")])]),t._v(" "),s("li",[s("p",[t._v("2.首先，会先检测浏览器自己的缓存里面有没有这个域名对应的IP地址，有就结束，没有就继续。"),s("br")])]),t._v(" "),s("li",[s("p",[t._v("3.检查系统缓存中有没有。比如我们开发的时候修改的host文件，里面有域名对应的ip地址，就结束，没有证明本地确实哪都没找到缓存。"),s("br")]),t._v(" "),s("p",[t._v("注意=>（这里的host文件，某些病毒就会修改你系统的host，造成域名劫持）"),s("br")])]),t._v(" "),s("li",[s("p",[t._v("4.开始往路由器缓存中找，路由器也没找到，那真的是客服端确实找不到缓存了，开始去服务器上查询。"),s("br")]),t._v(" "),s("p",[t._v("注意=>（这里也是容易被劫持的风险点，如果有人改了你的路由器域名ip匹配，所以不要随便连不熟悉的路由器）"),s("br")])]),t._v(" "),s("li",[s("p",[t._v("5.会优先去本地域名服务器(LDNS),顾名思义就是你当地的服务器上，有可能就在你的城里，通常已经缓存了大部分的域名IP地址"),s("br")])]),t._v(" "),s("li",[s("p",[t._v("6.如果本地域名服务器没找到，本地域名服务器就去根域名服务器（Root Server）上请求解析，根域名服务器把结果返回给本地域名服务器，本地域名服务器，会缓存下来，并返回给客户端（全球好像只有十几台根域名服务器，他们之间也会存在互相查询之类，这里就不细说了）"),s("br")])])]),t._v(" "),s("p",[t._v("从上面的过程就可以看出来，DNS解析其实还是会耗费一定的时间，类似于递归的去查询，尤其你的域名在本地没有缓存的情况下，所以自然而然就会想法去优化DNS解析。")]),t._v(" "),s("h3",{attrs:{id:"dns预解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns预解析"}},[t._v("#")]),t._v(" DNS预解析")]),t._v(" "),s("p",[t._v("DNS解析优化也算是前端优化很基础却也是容易忘记的一个点"),s("br")]),t._v(" "),s("p",[t._v("核心思想就是："),s("br")]),t._v(" "),s("ul",[s("li",[t._v("减少DNS解析")]),t._v(" "),s("li",[t._v("DNS预解析    =>(浏览器在空闲时间会提前把这些域名转换为对应的 IP 地址，缓存到系统缓存中，从而缩短 DNS 解析花费的时间，提高访问网站的速度）")])]),t._v(" "),s("p",[t._v("这里主要是讲DNS预解析，其实使用很简单")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('\x3c!-- 开启DNS预解析 --\x3e\n    <meta http-equiv="x-dns-prefetch-control" content="on">\n    <link rel="dns-prefetch" href="//cdn.boblog.com">\n    <link rel="dns-prefetch" href="//images.boblog.com">\n\x3c!-- 关闭DNS预解析 --\x3e\n    <meta  http-equiv="x-dns-prefetch-control" content="off">\n    注：dns-prefetch需慎用，多页面重复DNS预解析会增加重复DNS查询次数\n')])])]),s("ul",[s("li",[t._v("meta信息是告诉浏览器，当前页面要做DNS预解析"),s("br")]),t._v(" "),s("li",[t._v("link标签是告诉浏览器对特定的域名进行预解析"),s("br")])]),t._v(" "),s("p",[t._v("其实很多浏览器已经内置了DNS预解析的功能，比如谷歌，不设置，他依然自己会进行预解析，设置了反而会让他多次DNS预解析。但是换个角度想，第一次解析了，一般浏览器都会存在本地，后面的解析大多会从缓存中取，现代浏览器倒也不会有多大影响~~。")])])}),[],!1,null,null,null);r.default=v.exports}}]);