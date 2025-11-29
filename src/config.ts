export default {
  // 网站标题
  Title: 'AUNyaの小窝',
  // 网站地址
  Site: 'https://tbmiao.dpdns.org',
  // 网站副标题
  Subtitle: 'AUNya的碎碎念.',
  // 网站描述
  Description: '分享网络技术、服务器部署、内网穿透、静态网站搭建、CDN优化、容器化部署等技术教程与实践经验的个人技术博客，专注于云原生、无服务器架构和前后端开发，作者为AUNya',
  // 网站作者
  Author: 'AUNya',
  // 作者头像
  Avatar: 'https://avatars.githubusercontent.com/u/172878250?v=4',
  // 网站座右铭
  Motto: '你好，喵~ ',
  // Cover 网站缩略图
  Cover: 'https://avatars.githubusercontent.com/u/172878250?v=4',
  // 网站侧边栏公告 (不填写即不开启)
  Tips: '<p>欢迎光临我的博客 🎉</p>',
  // 首页打字机文案列表
  TypeWriteList: [
    'AUNyaの小窝',
  ],
  // 网站创建时间
  CreateTime: '2024-01-01',
  // 顶部 Banner 配置
  HomeBanner: {
    enable: true,
    // 首页高度
    HomeHeight: '38.88rem',
    // 其他页面高度
    PageHeight: '28.88rem',
    // 背景
    background: "url('/images/lt/b.png') no-repeat center 50%/cover",
  },
  // 博客主题配置
  Theme: {
    // 颜色请用 16 进制颜色码
    // 主题颜色
    "--vh-main-color": "#c40179ff",
    // 字体颜色
    "--vh-font-color": "#10c7f5ff",
    // 侧边栏宽度
    "--vh-aside-width": "318px",
    // 全局圆角
    "--vh-main-radius": "0.88rem",
    // 主体内容宽度
    "--vh-main-max-width": "1458px",
  },
  // 导航栏 (新窗口打开 newWindow: true)
  Navs: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可 <不需要文件后缀名>（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG
    { text: '朋友', link: '/links', icon: 'Nav_friends' },
    { text: '圈子', link: '/friends', icon: 'Nav_rss' },
    { text: '昔日', link: '/archives', icon: 'Nav_archives' },
    { text: '留言', link: '/message', icon: 'Nav_message' },
    { text: '关于', link: '/about', icon: 'Nav_about' },
    { text: '统计', link: 'https://cloud.umami.is/share/pBFqYW1e5248KxEz', icon: 'WebSite_world' },
  ],
  // 侧边栏个人网站
  WebSites: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可 <不需要文件后缀名>（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG
    { text: 'Github', link: 'https://github.com/tb-miao', icon: 'WebSite_github' },
    { text: 'lab', link: 'https://lab.tbmiao.dpdns.org', icon: 'WebSite_lab' },
    { text: '状态', link: 'https://status.tbmiao.dpdns.org', icon: 'WebSite_status' },
  ],
  // 侧边栏展示
  AsideShow: {
    // 是否展示个人网站
    WebSitesShow: true,
    // 是否展示分类
    CategoriesShow: true,
    // 是否展示标签
    TagsShow: true,
    // 是否展示推荐文章
    recommendArticleShow: true
  },
  // DNS预解析地址
  DNSOptimization: [
    'https://i0.wp.com',
    'https://cn.cravatar.com',
    'https://analytics.vvhan.com',
    'https://vh-api.4ce.cn',
    'https://registry.npmmirror.com',
    'https://pagead2.googlesyndication.com'
  ],
  // 博客音乐组件解析接口
  vhMusicApi: 'https://vh-api.4ce.cn/blog/meting',
  // 评论组件（只允许同时开启一个）
  Comment: {
    // Twikoo 评论
    Twikoo: {
      enable: false,
      envId: ''
    },
    // Waline 评论
    Waline: {
      enable: true,
      serverURL: 'https://wa.tbmiao.dpdns.org'
    }
  },
  // Han Analytics 统计（https://github.com/uxiaohan/HanAnalytics）
  HanAnalytics: { enable: false, server: '', siteId: '' },
  // Google 广告
   GoogleAds: {
    ad_Client: '', //ca-pub-xxxxxx
  // 侧边栏广告(不填不开启)
    asideAD_Slot: ``,
  // 文章页广告(不填不开启)
    articleAD_Slot: ``
  },

  // 访问网页 自动推送到搜索引擎
  SeoPush: {
    enable: false,
    serverApi: '',
    paramsName: 'url'
  },
  // 页面阻尼滚动速度
  ScrollSpeed: 666
}