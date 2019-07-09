module.exports = {
    title: 'RaoCy blog',
    description: '我的blog网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', {
            rel: 'icon',
            href: '/logo.jpg'
        }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [ // 导航栏配置
            {
                text: '前端基础',
                link: '/fontbase/'
            },
            {
                text: '前端开发编辑器',
                link: '/edit/'
            },
            {
                text: '前端常用工具函数',
                link: '/utils/'
            }, {
                text: 'mongodb基础',
                link: '/mongodb/'
            }
    ],
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    }
};
