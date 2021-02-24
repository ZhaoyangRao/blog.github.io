## 多进程多线程的浏览器
作为一名前端工程师，之前对于浏览器的认知还不够深入，翻阅了一系列文章，进行浏览器的逐步分析与学习，加深自己的知识储备。同时这部分知识也是做页面性能优化，等工具时所必须的基础知识。<br>
这里以chrome浏览器举例,chrome浏览器使用的是多进程多线程模式<br>

### 多进程

+ 浏览器进程 (Browser Process)：负责浏览器的TAB的前进、后退、地址栏、书签栏的工作和处理浏览器的一些不可见的底层操作，比如网络请求和文件访问。<br>
+ 渲染进程 (Renderer Process)：负责一个Tab内的显示相关的工作，也称渲染引擎。<br>
+ 插件进程 (Plugin Process)：负责控制网页使用到的插件<br>
+ GPU进程 (GPU Process)：负责处理整个应用程序的GPU任务<br>

#### 浏览器各进程之间的关系
首先，当我们是要浏览一个网页，我们会在浏览器的地址栏里输入URL，这个时候Browser Process(浏览器进程)会向这个URL发送请求，获取这个URL的HTML内容，然后将HTML交给Renderer Process(渲染进程)，Renderer Process(渲染进程)解析HTML内容，解析遇到需要请求网络的资源又返回来交给Browser Process(浏览器进程)进行加载，同时通知Browser Process(浏览器进程)，需要Plugin Process(插件进程)加载插件资源，执行插件代码。解析完成后，Renderer Process(渲染进程)计算得到图像帧，并将这些图像帧交给GPU Process(GPU进程)，GPU Process(GPU进程)将其转化为图像显示屏幕。
 
#### why多进程？多进程的优势是什么？
+ 更高的安全性，各进程相互独立，分配单独的内存，单独的执行环境<br>
+ 更高的容错性,各进程相互独立，避免一个崩溃，全崩溃<br>
+ 更好的分配性能，避免互相抢资源，单进程的架构中，各个任务相互竞争抢夺CPU资源，使得浏览器响应速度变慢，而多进程架构正好规避了这一缺点<br>
#### 多进程的劣势
渲染进程的作用是负责一个Tab内的显示相关的工作，这就意味着，一个Tab，就会有一个渲染进程，这些进程之间的内存无法进行共享，开启一个tab就开启一个进程，这也是为什么浏览器tab开的越多越卡，甚至会崩溃等等，为了优化这一类的弊端，各浏览器都选择了自己的方式去优化内存，也就是进程模式。
#### 进程模式
为了节省内存，Chrome提供了四种进程模式（Process Models），不同的进程模式会对 tab 进程做不同的处理。<br>

+ Process-per-site - 同一个 site 使用一个进程<br>
+ Process-per-tab - 每个 tab 使用一个进程<br>
+ Single process - 所有 tab 共用一个进程 单进程模式<br>
+ Process-per-site-instance (default) - 同一个 site-instance 使用一个进程， Chrome 默认使用的模式，相较于 Process-per-tab，能够少开很多进程，就意味着更少的内存占用，相较于 Process-per-site，能够更好的隔离相同域名下毫无关联的 tab，更加安全。简单的理解就是如果tab页的域名相同，并且是其中一个打开的页面，那么会共用一个进程，兼容了性能与易用性<br>

### 多线程
其实这里的多线程主要是针对浏览器渲染进程来的，通过对这些线程的控制来输出可视化的网页或者图像

#### 渲染进程 (Renderer Process)相关线程

+ GUI线程
负责渲染浏览器界面
+ js引擎线程
负责处理JavaScript脚本程序
+ 定时触发器线程
setInterval与setTimeout所在线程
+ 事件触发线程
主要用于控制事件（例如鼠标，键盘等事件）
+ 异步http请求线程
XMLHttpRequest通过浏览器新开的一个线程请求<br>
浏览器对通一域名请求的并发连接数是有限制的，Chrome和Firefox限制数为6个，ie8则为10个。<br>

由于Js是可操纵DOM的，如果存在一个操作dom的行为导致界面的重绘回流，浏览器设置GUI渲染线程与JavaScript引擎为互斥的关系，当JavaScript引擎执行时GUI线程会被挂起，GUI更新会被保存在一个队列中等到引擎线程空闲时立即被执行。<br>

渲染进程（各线程的相互配合）的主要目标是将html+css+js渲染成开发者预期的UI<br>
::: tip 浏览器的渲染过程
渲染进程拿到响应的报文以后，这里不考虑缓存，渲染界面大致的步骤<br>
1.解析html生成DOM TREE<br>
2.解析CSS生成CSS TREE<br>
3.DOM TREE+CSS TREE生成render tree<br>
4.根据render tree来计算各个元素的位置，大小等等，这个过程被称为layout<br>
5.将layout后的render tree进行绘制这个过程被称为Painting<br>
6.GPU进程再将各个图层合成(composite)渲染成开发者预期的UI<br>

需要注意的是我们前面了解到js引擎线程会让GUI线程挂起，等待JS引擎空闲后执行，所以在渲染的过程中，render tree会被js阻塞，尤其js里面有大量的操作dom的时候又会导致render tree的重绘回流。
:::
::: tip 图层的概念
前面提到了图层的合成composite渲染成开发者预期的UI，这里简单的讲一下图层吧<br>
#### 图层分为普通图层和复合图层<br>
复合图层（单独分配资源，硬件加速，各个复合图层是单独绘制）<br>
+ translate3d、translateZ（3D或透视变换）<br>
+ video iframe canvas webgl等元素<br>
+ z-index在复合成的上面渲染<br>
+ opacity属性/过渡动画（需要动画执行的过程中才会创建合成层，动画没有开始或结束后元素还会回到之前的状态）<br>
+ 其它，譬如以前的flash插件<br>
:::

#### 浏览器进程 (Browser Process)相关线程
+  UI thread：控制浏览器上的按钮及输入框，处理用户的输入啊等等<br>
+  network thread：处理网络请求，从网上获取数据；诸如DNS寻址，建立TLS连接等操作，解析HTTP响应， 安全检查，诸如跨域啊400，500等等错误都是报出来的<br>
+  storage thread：控制文件等的访问<br>
