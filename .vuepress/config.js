module.exports = {
    title: 'RaoCy',
    description: '欢迎来到RaoCy博客',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', {
            rel: 'icon',
            href: '/images/logo.png'
        }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
    base: '/blog.github.io/', // 这是部署到github相关的配置
    //    serviceWorker: true,
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [ // 导航栏配置
//            {
//                text: '前端基础',
//                link: '/fontbase/'
//            },
//            {
//                text: '前端进阶',
//                link: '/fontup/index/'
//            },
            {
                text: '浏览器的世界',
                items: [{
                        text: '浏览器内核',
                        link: '/study/browserKey/'
                    },
                    {
                        text: '浏览器多线程多进程',
                        link: '/study/browser/'
                    }, {
                        text: '浏览器同域名请求并发限制',
                        link: '/study/browserOpen/'
                    }, {
                        text: '浏览器DNS域名解析',
                        link: '/study/browserDns/'
                    }, {
                        text: '浏览器的安全',
                        link: '/study/broeweSafe/'
                    }, {
                        text: '浏览器的缓存',
                        link: '/study/browserCache/'
                    }, {
                        text: 'Web Worker',
                        link: '/study/webworker/'
                    }, {
                        text: 'iframe',
                        link: '/study/iframe/'
                    }, {
                        text: 'http协议',
                        link: '/study/http/'
                    } , {
                            text: 'cookie',
                            link: '/study/cookie/'
                        }
                       ]
            },
            {
                text: '前端杂谈',
                items: [
                    {
                        text: '前端开发模式',
                        link: '/modules/'
                    },
//                    {
//                        text: '常用工具函数',
//                        link: '/study/utils/'
//                    },
//                    {
//                        text: '前端常用开发工具',
//                        link: '/edit/'
//                    },

                    {
                        text: 'null与undefined',
                        link: '/study/jsnull/'
                    },
                    {
                        text: '宏任务和微任务',
                        link: '/study/eventLoop/'
                    }, {
                        text: 'js异步编程方案',
                        link: '/study/callback/'
                    }, {
                        text: 'iterator迭代器',
                        link: '/study/iterable/'
                    },
                    {
                        text: '闭包',
                        link: '/study/closure/'
                    },
                    {
                        text: '高阶函数',
                        link: '/study/funcHigh/'
                    },
                    {
                        text: 'js中的this',
                        link: '/study/this/'
                    },
                    {
                        text: 'js中的面向对象',
                        link: '/study/class/'
                    }, {
                        text: 'js里的事件模型',
                        link: '/study/event/'
                    },
                    {
                        text: 'diff算法',
                        link: '/study/diff/'
                    },
                    {
                        text: '前端模块化规范',
                        link: '/study/module/'
                    }
                ],
            }, {
                text: '前端技术杂玩',
                items: [
                    {
                        text: 'react',
                        link: '/react/index/'
                    },
                    {
                        text: 'mongodb',
                        link: '/mongodb/api/'
                    },
                    {
                        text: 'vuecli',
                        link: '/vuecli/index/'
                    },
                    {
                        text: 'mxgraph',
                        link: '/mxgraph/index/'
                    },
                    {
                        text: 'prerender-spa-plugin',
                        link: '/prerender-spa-plugin/index/'
                    }
                ]
            }

    ],
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 6, // 侧边栏显示2级
    },
    lastUpdated: 'Last Updated3', // string | boolean
    updatePopup: true, // Boolean | Object, 默认值是 undefined.
    extraWatchFiles: [
    '.vuepress/config.js', // 使用相对路径
  ]
}
