# seo需求 
公司的大部分项目，最初只为了实现前后端分离式开发，直接选择了vue等框架进行开发，技术栈也大多是spa，现在对其中一个官网项目要求做seo优化。
于是开启了针对这次官网seo的探索之旅
## 方案
对于开发者来说，当然在项目截至日期之前，越简单，对现有工程改造侵入越小，是优先选择,查阅相关资料以后，暂时定下来两个方案
```
1.prerender-spa-plugin客户端预渲染
2.ssr服务端渲染

```
在选择预渲染模式还是服务端渲染的模式时，考虑到成本与项目为官网，简单的界面展示，最终选择用户端预渲染去改造现有的项目。
## prerender-spa-plugin客户端预渲染
相关文档可查看：官网，链接就不贴了

### 安装
```
cnpm install --save prerender-spa-plugin

```
### 配置
我的项目就是vuecli4的项目，所以我的配置都在vue.config.js里面

#### vue.config.js
```
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path')

// vue.config.js

module.exports = {
    configureWebpack: config => {
           if (process.env.NODE_ENV === 'production') {
              // 为开发环境修改配置...
            return {
                plugins: [
                new PrerenderSPAPlugin({
                        staticDir: path.join(__dirname, 'dist'),
                        routes: ['/', '/Kanban/index', '/sand/index','/Assessment/index','/aboutMe/index'],
                        renderer: new Renderer({
                            inject: {
                                foo: "bar"
                            },
                            headless: false,
                            renderAfterDocumentEvent: 'render-event'
                        })
                    })
            ]
            }
        }

    }
}
```
#### main.js
```
new Vue({
    router,
    store,
    render: h => h(App),
    mounted() {
        document.dispatchEvent(new Event('render-event'))
    },
}).$mount('#app')
```
#### 标签插件vue-meta-info
main.js中加
```
import MetaInfo from 'vue-meta-info'
Vue.use(MetaInfo)

```
页面的vue中加metaInfo信息,就可以将关键字预渲染到html的页面中去
```
export default {
  metaInfo: {
    title: 'We Inc',
    meta: [
      {
        name: 'keywords',
        content: '关键字1,关键字2,关键字3'
      },
      {
        name: 'description',
        content: '这是一段网页的描述'
      }
    ]
  }
}

```

#### npm run build
就可以在dist文件夹下生成对应路由的文件夹里面包含页面预渲染信息的html

 ``` 
dist
│    ├── home          
│    │       └── index.html           
│    ├── homePage
│             └── index.html 
├── index.html      
└── static

```











