
<img src="./docs/images/1131.png" width = "405" height = "511" alt="Firefly" align=right />

<div align="center">

# Firefly
> 一款清新美观的 Astro 博客主题模板

github地址：[https://github.com/CuteLeaf/Firefly](https://github.com/CuteLeaf/Firefly)
---
⚡ 静态站点生成: 基于Astro的超快加载速度和SEO优化

🎨 现代化设计: 简洁美观的界面，支持自定义主题色

📱 移动友好: 完美的响应式体验，移动端专项优化

🔧 高度可配置: 大部分功能模块均可通过配置文件自定义


>[!TIP]
>在重要的布局上，Firefly 创新性地增加了左右双侧边栏、文章网格(双列)布局，
>
>增加了站点统计、日历组件、文章目录等小组件，让侧边栏更加丰富，
>
>同时也保留了 Furwai 的布局，可在配置文件中自由切换。
>
>**更多布局配置及演示请查看：[Firefly 布局系统详解](https://firefly.cuteleaf.cn/posts/firefly-layout-system/)**

## ✨ 功能特性

### 核心功能

- [x] **Astro + Tailwind CSS** - 基于现代技术栈的超快静态站点生成
- [x] **流畅动画** - Swup 页面过渡动画，提供丝滑的浏览体验
- [x] **响应式设计** - 完美适配桌面端、平板和移动设备
- [x] **多语言支持** - i18n 国际化，支持简体中文、繁体中文、英文、日文、俄语
- [x] **全文搜索** - 基于 Pagefind 的客户端搜索，支持文章内容索引。同时支持 MeiliSearch 搜索引擎

### 个性化
- [x] **侧边栏** - 支持配置单侧边栏、双侧边栏，支持前台自由切换
- [x] **文章布局** - 支持配置(单列)列表、网格(二列)布局，支持前台自由切换
- [x] **字体管理** - 支持自定义字体，丰富的字体选择器
- [x] **页脚配置** - HTML 内容注入，完全自定义
- [x] **导航栏自定义** - Logo、标题、链接全面自定义
- [x] **壁纸模式切换** - 横幅壁纸、全屏壁纸、纯色背景，支持前台自由切换
- [x] **主题色自定义** - 360° 色相调节，支持亮色/暗色/跟随系统三种模式，支持前台自由切换

### 页面组件
- [x] **留言板** - 支持留言页面，集成评论系统
- [x] **公告栏** - 顶部公告提示，支持关闭和自定义样式
- [x] **看板娘** - 支持 Spine 和 Live2D 两种动画引擎
- [x] **站点统计** - 显示文章、分类、标签数目、文章总字数、运行时长、最后更新时间
- [x] **站点日历** - 显示当月日历，以及当月的发布文章
- [x] **赞助页面** - 多种支付方式、收款码展示、赞助者列表、文章内赞助按钮
- [x] **樱花特效** - 支持樱花特效，全屏樱花效果
- [x] **友情链接** - 精美的友链展示卡片
- [x] **广告组件** - 支持自定义侧边栏广告内容
- [x] **番组计划** - 基于 Bangumi API 的追番和游戏记录展示
- [x] **评论系统** - 集成 Twikoo、Waline、Giscus、Disqus、Artalk 评论系统
- [x] **访问量统计** - 支持调用 Waline、Twikoo 自带的访问量追踪
- [x] **音乐播放器** - 基于 APlayer，支持本地音乐和 Meting API 在线音乐

### 内容增强
- [x] **图片灯箱** - Fancybox 图片预览功能
- [x] **浮动目录** - 动态显示文章目录，支持锚点跳转，在侧边栏目录隐藏后显示
- [x] **邮箱保护** - 让自动化爬虫程序无法直接爬到邮箱地址，被垃圾邮件骚扰
- [x] **侧边栏目录** - 动态显示文章目录，支持锚点跳转
- [x] **增强代码块** - 基于 Expressive Code，支持代码折叠、行号、语言标识
- [x] **数学公式支持** - KaTeX 渲染引擎，支持行内和块级公式
- [x] **Markdown扩展** - [Markdown extended features](https://github.com/saicaca/fuwari?tab=readme-ov-file#-markdown-extended-syntax)
- [x] **文章随机封面图** - 支持通过 API 获取随机封面图

### SEO
- [x] **SEO 优化** - 完整的 meta 标签和结构化数据
- [x] **RSS 订阅** - 自动生成 RSS Feed
- [x] **站点地图** - 自动生成 XML Sitemap，支持页面过滤配置


## 📝计划中...

- [ ] **重构 Live2D 看板娘**
- [ ] **优化网格布局的文章封面**
- [ ] **持续优化动画流畅度**
- [ ] 更多功能持续完善中...

如果你有好用的功能和优化，请提交 [Pull Request](https://github.com/CuteLeaf/Firefly/pulls)

```
src/
├── config/
│   ├── index.ts              # 配置索引文件
│   ├── siteConfig.ts         # 站点基础配置
│   ├── profileConfig.ts      # 用户资料配置
│   ├── commentConfig.ts      # 评论系统配置
│   ├── announcementConfig.ts # 公告配置
│   ├── licenseConfig.ts      # 许可证配置
│   ├── footerConfig.ts       # 页脚配置
│   ├── FooterConfig.html     # 页脚HTML内容
│   ├── expressiveCodeConfig.ts # 代码高亮配置
│   ├── sakuraConfig.ts       # 樱花特效配置
│   ├── fontConfig.ts         # 字体配置
│   ├── sidebarConfig.ts      # 侧边栏布局配置
│   ├── navBarConfig.ts       # 导航栏配置
│   ├── musicConfig.ts        # 音乐播放器配置
│   ├── pioConfig.ts          # 看板娘配置
│   ├── adConfig.ts           # 广告配置
│   ├── friendsConfig.ts      # 友链配置
│   ├── sponsorConfig.ts      # 赞助配置
│   └── coverImageConfig.ts  # 文章随机封面图配置
```

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

![](https://avatars.githubusercontent.com/u/172878250?v=4)