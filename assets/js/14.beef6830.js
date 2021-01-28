(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{152:function(e,n,a){"use strict";a.r(n);var t=a(0),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"seo需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seo需求"}},[e._v("#")]),e._v(" seo需求")]),e._v(" "),a("p",[e._v("公司的大部分项目，最初只为了实现前后端分离式开发，直接选择了vue等框架进行开发，技术栈也大多是spa，现在对其中一个官网项目要求做seo优化。\n于是开启了针对这次官网seo的探索之旅")]),e._v(" "),a("h2",{attrs:{id:"方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案"}},[e._v("#")]),e._v(" 方案")]),e._v(" "),a("p",[e._v("对于开发者来说，当然在项目截至日期之前，越简单，对现有工程改造侵入越小，是优先选择,查阅相关资料以后，暂时定下来两个方案")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("1.prerender-spa-plugin客户端预渲染\n2.ssr服务端渲染\n\n")])])]),a("p",[e._v("在选择预渲染模式还是服务端渲染的模式时，考虑到成本与项目为官网，简单的界面展示，最终选择用户端预渲染去改造现有的项目。")]),e._v(" "),a("h2",{attrs:{id:"prerender-spa-plugin客户端预渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerender-spa-plugin客户端预渲染"}},[e._v("#")]),e._v(" prerender-spa-plugin客户端预渲染")]),e._v(" "),a("p",[e._v("相关文档可查看：官网，链接就不贴了")]),e._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cnpm install --save prerender-spa-plugin\n\n")])])]),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),a("p",[e._v("我的项目就是vuecli4的项目，所以我的配置都在vue.config.js里面")]),e._v(" "),a("h4",{attrs:{id:"vue-config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-config-js"}},[e._v("#")]),e._v(" vue.config.js")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const PrerenderSPAPlugin = require('prerender-spa-plugin');\nconst Renderer = PrerenderSPAPlugin.PuppeteerRenderer;\nconst path = require('path')\n\n// vue.config.js\n\nmodule.exports = {\n    configureWebpack: config => {\n           if (process.env.NODE_ENV === 'production') {\n              // 为开发环境修改配置...\n            return {\n                plugins: [\n                new PrerenderSPAPlugin({\n                        staticDir: path.join(__dirname, 'dist'),\n                        routes: ['/', '/Kanban/index', '/sand/index','/Assessment/index','/aboutMe/index'],\n                        renderer: new Renderer({\n                            inject: {\n                                foo: \"bar\"\n                            },\n                            headless: false,\n                            renderAfterDocumentEvent: 'render-event'\n                        })\n                    })\n            ]\n            }\n        }\n\n    }\n}\n")])])]),a("h4",{attrs:{id:"main-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-js"}},[e._v("#")]),e._v(" main.js")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("new Vue({\n    router,\n    store,\n    render: h => h(App),\n    mounted() {\n        document.dispatchEvent(new Event('render-event'))\n    },\n}).$mount('#app')\n")])])]),a("h4",{attrs:{id:"标签插件vue-meta-info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标签插件vue-meta-info"}},[e._v("#")]),e._v(" 标签插件vue-meta-info")]),e._v(" "),a("p",[e._v("main.js中加")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import MetaInfo from 'vue-meta-info'\nVue.use(MetaInfo)\n\n")])])]),a("p",[e._v("页面的vue中加metaInfo信息,就可以将关键字预渲染到html的页面中去")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export default {\n  metaInfo: {\n    title: 'We Inc',\n    meta: [\n      {\n        name: 'keywords',\n        content: '关键字1,关键字2,关键字3'\n      },\n      {\n        name: 'description',\n        content: '这是一段网页的描述'\n      }\n    ]\n  }\n}\n\n")])])]),a("h4",{attrs:{id:"npm-run-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-run-build"}},[e._v("#")]),e._v(" npm run build")]),e._v(" "),a("p",[e._v("就可以在dist文件夹下生成对应路由的文件夹里面包含页面预渲染信息的html")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dist\n│    ├── home          \n│    │       └── index.html           \n│    ├── homePage\n│             └── index.html \n├── index.html      \n└── static\n\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);