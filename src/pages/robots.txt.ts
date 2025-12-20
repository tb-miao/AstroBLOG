/**
 * robots.txt 生成器
 * 用于控制搜索引擎爬虫的访问权限
 */

const robotsTxt = `
# 允许所有搜索引擎爬虫访问
User-agent: *

# 禁止访问的目录和文件
Disallow: /_astro/          # Astro 构建生成的静态资源目录
Disallow: /admin/           # 管理后台目录（如果存在）
Disallow: /api/             # API 接口目录
Disallow: /private/         # 私有文件目录
Disallow: /config/          # 配置文件目录
Disallow: /logs/            # 日志文件目录
Disallow: /*.json$          # JSON 配置文件
Disallow: /*.xml$           # XML 配置文件（除了sitemap）
Disallow: /*.env$           # 环境配置文件

# 允许访问的目录（如果需要明确允许某些目录）
# Allow: /posts/
# Allow: /images/

# 爬取延迟设置（可选，控制爬虫访问频率）
# Crawl-delay: 10

# 站点地图
Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}
`.trim();

export default robotsTxt;
