(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{153:function(t,e,v){"use strict";v.r(e);var _=v(0),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"浅谈网络安全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浅谈网络安全"}},[t._v("#")]),t._v(" 浅谈网络安全")]),t._v(" "),v("h3",{attrs:{id:"浏览器安全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器安全"}},[t._v("#")]),t._v(" 浏览器安全")]),t._v(" "),v("p",[t._v("浏览器自身有一些策略来保证自身的安全，比如：")]),t._v(" "),v("ul",[v("li",[t._v("同源策略"),v("br"),t._v("\n协议，域名，端口一致，就叫做同源。"),v("br"),t._v("\n但是因为页面又可以嵌入三方资源，就产生了一些XSS漏洞等，因为这个问题又诞生了内容安全策略CSP，简单的理解就是开发者告诉客服端哪些外部资源能加载\n"),v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP",target:"_blank",rel:"noopener noreferrer"}},[t._v("内容安全策略CSP"),v("OutboundLink")],1)]),t._v(" "),v("li",[t._v("安全沙箱"),v("br"),t._v("\n假设你的网页应用被攻击了，你的网页应用又运行在浏览器上，而我们知道网页的运行涉及到浏览器分配的多进程，进程与浏览器内核的交互通信，所以有可能你网页的问题导致浏览器系统层面也被攻击，这对于浏览器来说是非常危险的。"),v("br"),t._v("\n所以诞生了安全沙箱的概念，网页应用都是在单独的沙箱中运行，它只能访问浏览器允许它访问的功能，这样即使网页被攻击了，也不会影响到浏览器，而且安全沙箱最小的单位是进程，所以进程其实就是一个单独的沙箱环境了，进程在沙箱中与浏览器内核通过IPC来通信，简单的理解就是所以进程想访问系统必须先打报告，允许它才有可能访问系统资源。")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("IPC")]),t._v(" "),v("p",[t._v("简单的理解就是进程之间通信的一种机制，一个进程通知浏览器内核，浏览器内核再告诉另外一个进程这个消息，有点像emit机制")])]),t._v(" "),v("ul",[v("li",[t._v("站点隔离\n其实这个很好理解，一个tab浏览器会开启一个渲染进程，如果这个网页中还嵌入了其他网站的iframe，那么这个iframe难道也是同一个渲染进程吗？那么如果它出问题了崩溃了，整个网页都崩溃了。"),v("br"),t._v("\n所以浏览器采用的是站点隔离策略，即使你嵌入的iframe再多，内部如何崩溃，都不会影响到其他正常的网页，因为每一个iframe都是单独的渲染进程，这也就是站点隔离")])]),t._v(" "),v("h3",{attrs:{id:"web安全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#web安全"}},[t._v("#")]),t._v(" web安全")]),t._v(" "),v("h4",{attrs:{id:"sql注入"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sql注入"}},[t._v("#")]),t._v(" SQL注入")]),t._v(" "),v("p",[t._v("简单的理解就是用户提交表单的时候，提交了一段SQL代码,服务端也解析成了SQL")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("用户名：sjones\n\n密码：1=1' or pass123\n\nSELECT * FROM Users WHERE User_Name = sjones AND Password = 1=1' or pass123;\n")])])]),v("p",[t._v("解决方案："),v("br")]),t._v(" "),v("ul",[v("li",[t._v("对用户的输入进行校验")]),t._v(" "),v("li",[t._v("限制网站用户的数据库的操作权限")]),t._v(" "),v("li",[t._v("避免网站显示SQL错误信息")])]),t._v(" "),v("h4",{attrs:{id:"xss跨站脚本漏洞"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#xss跨站脚本漏洞"}},[t._v("#")]),t._v(" XSS跨站脚本漏洞")]),t._v(" "),v("p",[t._v("简单的理解就是攻击者往web页面里面插入恶意的script代码,客户端会执行这里面的script代码，比如弹出一个用户账户密码的登录框等等让攻击变得更严重")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('<p style=\'color:red\'>你好啊，尊敬的 xxx<script>alert(1)<\/script><p>\n\nor\n\nhttp://www.vulnerablesite.com/home?"<script>alert("xss")<\/script>\n\nor\n表单：<script>alert("xss")<\/script>\n')])])]),v("p",[t._v("解决方案："),v("br")]),t._v(" "),v("ul",[v("li",[t._v("对用户的输入进行校验过滤")]),t._v(" "),v("li",[t._v("服务端返回的数据也要校验过滤")]),t._v(" "),v("li",[t._v("内容安全策略CSP")])]),t._v(" "),v("h4",{attrs:{id:"csrf跨站点请求伪造"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#csrf跨站点请求伪造"}},[t._v("#")]),t._v(" CSRF跨站点请求伪造")]),t._v(" "),v("p",[t._v("简单的理解就是攻击者盗用你的个人身份，与服务端进行了交互，尤其支付等场景"),v("br"),t._v("\n产生的原因："),v("br")]),t._v(" "),v("ul",[v("li",[t._v("用户登录真实可信的网站，并且再本地生成了cookie等")]),t._v(" "),v("li",[t._v("不登出a网站的情况下，访问了危险网站")]),t._v(" "),v("li",[t._v("危险网站带着cookie等，访问真实可信的网站，用你的身份进行交互")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('<form id="aaa" action="http://www.xxx.com/transfer.do" metdod="POST" display="none">\n    <input type="text" name="accountNum" value="10001"/>\n    <input type="text" name="money" value="10000"/>\n</form>\n<script>\n    var form = document.forms(\'aaa\');\n    form.submit();\n<\/script>\n\n')])])]),v("p",[t._v("解决方案："),v("br"),t._v("\n其实思想就是要么在cookie的时候解决，让cookie不被读取，要么在请求中放入攻击者所不能伪造的信息，并且该信总不存在于cookie之中")]),t._v(" "),v("ul",[v("li",[t._v("将cookie设置为HttpOnly，这样通过js脚本等无法读取cookie信息了")]),t._v(" "),v("li",[t._v("cookie SameSite属性 Strict Lax None（注意：存在浏览器兼容性问题）")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("请求类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("示例")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("正常情况")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("Lax")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("链接")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v('<a href="..."></a>')]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("发送 Cookie")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("发送 Cookie")])]),t._v(" "),v("tr",[v("td",[t._v("预加载")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v('<link rel="prerender" href="..."/>')]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("发送 Cookie")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("发送 Cookie")])]),t._v(" "),v("tr",[v("td",[t._v("GET 表单")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v('<form method="GET" action="...">')]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("发送 Cookie")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("发送 Cookie")])]),t._v(" "),v("tr",[v("td",[t._v("POST 表单")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v('<form method="POST" action="...">')]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("发送 Cookie")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("不发送")])]),t._v(" "),v("tr",[v("td",[t._v("iframe")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v('<iframe src="..."></iframe>')]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("发送 Cookie")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("不发送")])]),t._v(" "),v("tr",[v("td",[t._v("AJAX")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v('$.get("...")')]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("发送 Cookie")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("不发送")])]),t._v(" "),v("tr",[v("td",[t._v("Image")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v('<img src="...">')]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("发送 Cookie")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("不发送")])])])]),t._v(" "),v("p",[t._v("通常情况下设置samesite的strict和lax已经能杜绝大部分CSRF了")]),t._v(" "),v("ul",[v("li",[t._v("同源检测校验http referer 校验http origin")]),t._v(" "),v("li",[t._v("在请求中添加自定义的token，服务端拦截并验证")]),t._v(" "),v("li",[t._v("添加验证码等功能")])]),t._v(" "),v("h4",{attrs:{id:"弱口令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#弱口令"}},[t._v("#")]),t._v(" 弱口令")]),t._v(" "),v("p",[t._v("简单的理解就是用户的的密码过于简单，会很容易被破译")]),t._v(" "),v("h4",{attrs:{id:"越权"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#越权"}},[t._v("#")]),t._v(" 越权")]),t._v(" "),v("p",[t._v("简单的理解，用户可以对自己的信息进行增删改查，但是服务端没有对用户的权限限制，用户更改一些条件就能增删改查别人的信息")]),t._v(" "),v("p",[t._v("web安全其实大多都是利用一些用户输入输出，窃取用户登录凭证，用户权限未限制等情况下的漏洞来攻击，我们没必要去记哪些什么概念，大部分漏洞其实都很简单，比如上面的几个场景下漏洞的名字也只是一个归纳罢了。")]),t._v(" "),v("h4",{attrs:{id:"中间人攻击"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#中间人攻击"}},[t._v("#")]),t._v(" 中间人攻击")]),t._v(" "),v("p",[t._v("这里主要说的是客服端与服务端已经成功建立通信，但是在通信的过程中，被中间人窃取，伪造篡改，我们通常把这种叫做中间人攻击。")]),t._v(" "),v("p",[t._v("通常情况下，http数据提交给TCP层，数据会经过用户电脑，路由器，运营商，一些正反向代理，最后才会到目标服务器，这中间你的数据都是明文传输的话，很容易就被窃取。")]),t._v(" "),v("p",[t._v("浏览器-------中间人------服务端")]),t._v(" "),v("p",[t._v("HTTPS"),v("br"),t._v("\n这也就是https诞生的原因，简单的理解https就是把传输的内容给加密了(SSL/TSL),并且有了一张证书(数据证书)证明自己,即使中间人截取了，也需要解密，所以没有绝对的安全，在公共场合即使是https还是别用公用的wifi。"),v("br")]),t._v(" "),v("p",[t._v("SSL/TLS"),v("br"),t._v("\n主要是用来加密传输内容，在http层和tcp层之间加了一个安全层，用于加密解密传输的内容\n这个地方就涉及到对称加密与非对称加密的概念"),v("br")]),t._v(" "),v("p",[t._v("对称加密"),v("br")]),t._v(" "),v("ul",[v("li",[t._v("服务端=>密钥=>客户端")]),t._v(" "),v("li",[t._v("服务端=>(密钥加密)传输内容=>客户端(密钥解密)")])]),t._v(" "),v("p",[t._v("非对称加密")]),t._v(" "),v("ul",[v("li",[t._v("服务端有自己的公钥和私钥=>服务端的公钥，客户端的公钥=>客户端有自己的公钥和私钥")]),t._v(" "),v("li",[t._v("服务端=>(客户端公钥加密)传输内容=>客户端(客户端私钥解密)")]),t._v(" "),v("li",[t._v("客户端=>(服务端公钥加密)传输内容=>服务端(服务端私钥解密)\n"),v("br"),t._v("可以看出来私钥永远在自己的手上，就避免了私钥再传输的过程中被窃取。")])]),t._v(" "),v("p",[t._v("SSL原理其实也是对称与非对称的结合")]),t._v(" "),v("ul",[v("li",[t._v("客户端请求网页")]),t._v(" "),v("li",[t._v("服务端返回证书和服务端的公钥")]),t._v(" "),v("li",[t._v("客服端检测证书，证书有效，并且用接收到的服务端的公钥加密一个客服端自己的密钥(随机的对称密钥)")]),t._v(" "),v("li",[t._v("服务端收到，用自己的私钥解密客户端发来的这个密钥")]),t._v(" "),v("li",[t._v("服务端用客服端发来的密钥给网页加密，发送给客服端")]),t._v(" "),v("li",[t._v("客服端用自己的密钥解密\n"),v("br"),t._v("可以看到服务端始终有公钥密钥，而客服端其实一直只有一个随机生成的密钥，服务端的私钥一直在自己手中，并不会用来传输")])]),t._v(" "),v("p",[t._v("数据证书")]),t._v(" "),v("p",[t._v("这个没什么说的，证明自己是自己，和身份证差不多，权威机构给你开局的证书")])])}),[],!1,null,null,null);e.default=a.exports}}]);