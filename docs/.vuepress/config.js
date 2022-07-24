module.exports = {
  title: "Ring博客",
  port: '5556',//端口号
  dest: './dist', //打包输出文件路径
  // 默认多语言配置
  // https://vuepress-theme-reco.recoluan.com/views/1.x/local.html
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  markdown:{
    lineNumbers:true
  },
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ["link", { rel: "icon", href: "/img/favicon.ico" }],
    ['meta', { name: 'Keywords', content: 'wbRong个人博客,wbRong博客,Ring前端技术分享,Ring前端,wbrong前端,Ring个人博客,Ring博客,'}],
    ['meta', { name: 'author', content: '不定期更新些个人笔记，对自己的知识进行总结。' }],
  ],
  theme: "reco",//主题
  themeConfig: {
    // 博客配置
    type: "blog",
    fullscreen: true, //全屏
    logo: null,
    description:'Ring个人博客，不定期地发一些个人笔记，对自己的知识进行总结',
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/wbRong' },
        { icon: 'reco-mayun', link: 'https://gitee.com/wbRong' },
        { icon: 'reco-npm', link: 'https://www.npmjs.com/~wbrong' }
      ]
    },
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebar: "auto",//所有页面自动生成侧边栏
    // sidebar: require('./sidebar.js'),
    author: "Ring",
    authorAvatar: "/img/avatar.5xl9mdkacdg0.webp",
    mode: "auto", // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    codeTheme: "tomorrow", // default 'tomorrow' okaidia
    // 备案
    record: "桂ICP备2022004109号-1",
    recordLink: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030602006832",
    // cyberSecurityRecord: '公安部备案文案',
    // cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030602006832',
    smooth: "true", //平滑滚动
    // 导航栏
    nav: require('./nav.js'),
  },
  // 项目开始时间
  startYear: '2022',
  editLinks: false,
  editLinkText: '在 GitHub 上编辑此页 ！',
  markdown: {
    lineNumbers: true, //代码显示行号
  },
  // Vuepress 插件，
  plugins: {
    'vuepress-plugin-code-copy':true,//一键复制代码插件
    'reading-progress': true,//阅读进度条
  },
}
