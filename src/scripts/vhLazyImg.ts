// 图片懒加载
import LazyLoad from "vanilla-lazyload";

// 初始化图片懒加载
let lazyLoadStatus: LazyLoad | null = null;
const lazyImages = document.querySelectorAll<HTMLImageElement>(".main-inner>.main-inner-content img:not(.view-image-container)");

export default () => {
  lazyImages.forEach((img) => {
    if (!img.hasAttribute("data-vh-lz-src")) {
      img.setAttribute("data-vh-lz-src", img.getAttribute("src") || '');
      img.setAttribute("src", '/assets/images/lazy-loading.webp');
      img.loading = 'lazy'; // 添加原生懒加载支持
    }
  });

  if (lazyLoadStatus) return lazyLoadStatus.update();
  
  lazyLoadStatus = new LazyLoad({
    elements_selector: "img:not(.view-image-container)",
    threshold: 300, // 增加阈值，提前加载
    data_src: "vh-lz-src",
    rootMargin: '200px 0px' // 预加载视口附近的图片
  });
}