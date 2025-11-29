
// 目前本插件出现错误，暂时不修复，已取消引用
// 2025-11-29-8-54

const officialSites = [
  "https://tbmiao.dpdns.org",
];

// 域名检测功能
function checkDomain() {
  try {
    // 获取当前域名
    const currentDomain = window.location.hostname;
    
    // 检查是否为本地开发环境
    const isLocalDev = ['localhost', '127.0.0.1', '0.0.0.0'].includes(currentDomain);
    if (isLocalDev) return;

    // 检查是否为官方域名
    const isOfficialDomain = officialSites.some(site => {
      try {
        const officialDomain = new URL(site).hostname;
        // 支持主域名和子域名匹配
        return currentDomain === officialDomain || 
               currentDomain.endsWith('.' + officialDomain);
      } catch (e) {
        return false;
      }
    });

    if (!isOfficialDomain) {
      // 获取所有官方域名用于显示
      const officialDomains = officialSites.map(site => {
        try {
          return new URL(site).hostname;
        } catch (e) {
          return null;
        }
      }).filter(Boolean);

      // 创建警告弹窗
      const shouldRedirect = confirm(
        `⚠️ 域名安全警告\n\n` +
        `您当前访问的域名：${currentDomain}\n` +
        `官方域名：${officialDomains.join(', ')}\n\n` +
        `您可能正在访问非官方网站，存在安全风险！\n\n` +
        `点击"确定"跳转到主站\n` +
        `点击"取消"继续访问当前网站（不推荐）`
      );

      if (shouldRedirect) {
        // 跳转到主站首页
        window.location.href = officialSites[0];
      }
    }
  } catch (error) {
    console.error('域名检测错误:', error);
  }
}

// 页面加载完成后执行域名检测
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', checkDomain);
} else {
  checkDomain();
}
