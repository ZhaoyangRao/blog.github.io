## iframe
iframe在现在的前端项目里面，很多时候我们不得不用它，而用它又不是简单的放在那个位置就完了，更多的现实情况是iframe都并不是同一个域名，并且都会涉及到一些通信


iframe有很多功能，不管是作为组件来布局还是为了利用第三方的网页实现功能，都需要用到的就是iframe的通信功能，而iframe通信分为同域和跨域，这也是浏览器处于安全考虑来进行限制产生的结果。

### 同域通信

#### 主页面调用子iframe
```
<iframe name="iframeName" id="iframeId" src="child.html"></iframe>

1.通过iframe的ID获取子页面的dom，然后通过内置属性contentWindow取得子窗口的window对象此方法兼容各个浏览器

document.getElementById('iframeId').contentWindow.func(); 
document.getElementById('iframeId').contentWindow.document.getElementById('子页面中的元素ID');

2、通过iframe的name（名字）直接获取子窗口的window对象

iframeName.window.func(); 
iframeName.window.document.getElementById('子页面中的元素ID');

3、通过window对象的frames[]数组对象直接获取子frame对象

window.frames[0].func();
window.frames[0].document.getElementById('子页面中的元素ID');
//或
window.frames["iframeName"].func();
window.frames["iframeName"].document.getElementById('子页面中的元素ID');

```
#### 子iframe页面调用父页面
```
通过parent或top对象获取父页面的window对象内元素及方法

parent.window.func(); 
parent.window.document.getElementById('父页面中的元素ID');
//同理
top.window.func(); 
top.window.document.getElementById('父页面中的元素ID');

```
#### 主页面内兄弟iframe页面相互调用

```
/*以下为在child1.html页面内访问兄弟frame页面*/
<iframe name="iframe1Name" id="iframe1Id" src="child1.html"></iframe>
<iframe name="iframe2Name" id="iframe2Id" src="child2.html"></iframe>
<iframe name="iframe3Name" id="iframe3Id" src="child3.html"></iframe>

1、通过兄弟iframe的ID获取其dom，然后通过内置属性contentWindow取得window对象
  此方法兼容各个浏览器

parent.window.document.getElementById('iframe2Id').contentWindow.func(); 
parent.window.document.getElementById('iframe3Id').contentWindow.document.getElementById('兄弟页面3中的元素ID');

2、通过iframe的name（名字）直接获取子窗口的window对象

parent.window.iframe2Name.window.func(); 
parent.window.iframe3Name.window.document.getElementById('兄弟页面3中的元素ID'); 

3、通过window对象的frames[]数组对象直接获取子frame对象

parent.window.frames[1].func();
top.window.frames[2].document.getElementById('兄弟页面3中的元素ID');
//或
parent.window.frames["iframe2Name"].func();
parent.window.frames["iframe3Name"].document.getElementById('兄弟页面3中的元素ID');

```

其实从上面的例子也可以看出，在同域的情况下，核心还是通过window对象，因为浏览器并不会限制同域下iframe的这些访问。

### 跨域访问
网上也有很多间接的方案，但是现在有了更好的更简单方案，也就是postMessage,而且兼容性已经满足主流浏览器了
```
主页

var iframeWin = document.getElementById("otherPage").contentWindow;       
iframeWin.postMessage('发送给ifame');   
window.addEventListener("message", receiveMessage, false);
function receiveMessage(event)
{
 console.log(event)
}
————————————————————————————————————————————————————————————————————————————————————————
iframe中
window.addEventListener("message", receiveMessage, false);
function receiveMessage(event)
{
 console.log(event);
 window.parent.postMessage('发送给主页');  
}
  
```
其实很简单就是通过postMessage方法和message事件，来互相派发消息，有点像发布订阅，看到这里你可能发现其实跟web worker也有点像，当然web worker也只能同域，这里不作延申

### 缺点
+ 会阻塞主页面的onload事件<br>
onload事件会等浏览器当前界面的页面资源加载完成才触发，包括当前界面里面的iframe,所以如果iframe过多，要注意onload事件，或者让iframe异步加载<br>
+ 搜索引擎无法解读这种页面，不利于SEO<br>
+ iframe和主页面共享连接池<br>
浏览器同域名请求并发限制，参考我的另外一篇文章<br>
+ 开启多余的进程，性能消耗<br>
单独的进程渲染，多个iframe就会有多个进程，消耗内存
