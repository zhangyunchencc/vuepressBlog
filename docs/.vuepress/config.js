module.exports = {
  title: '个人主页',
  description: 'Personal Website',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/photo.jpg' }],
    ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache, must-revalidate'}]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '前端基础', link: '/accumulate/1.html' },
      {text: '算法题库', link: '/algorithm/'},
      {text: '诗和远方', link: '/others/1.html'},
      {text: '微博', link: 'https://baidu.com'}      
    ],
    sidebar:{ // 侧边栏配置
      '/accumulate/': [
          {
            title: '前端基础',
            children: [
              '/accumulate/1.html',
              '/accumulate/2.html',
              '/accumulate/3.html',
              '/accumulate/4.html',
              '/accumulate/5.html',
              '/accumulate/6.html',
              '/accumulate/7.html',
              '/accumulate/8.html',
              '/accumulate/9.html',
              '/accumulate/10.html',
              '/accumulate/11.html',
            ]
          }
        ],
        '/algorithm/': [
          '/algorithm/', 
          {
            title: '第二组侧边栏下拉框的标题1',
            children: [
              '/algorithm/' 
            ]
          }
        ],
        '/others/': [
          {
            title: '诗和远方',
            children: [
              '/others/1.html'
            ]
          }
        ],
    },
    // sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2
  }
};