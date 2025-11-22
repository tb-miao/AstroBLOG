export default (element, options) => {
  document.querySelectorAll('.vh-paopao').forEach(item => setTimeout(() => item.remove()));
  const config = Object.assign({ radius: 10, density: 0.3, clearOffset: 0.2 }, options);
  let width, height, ctx, active = true;
  const canvas = document.createElement('canvas');
  const particles = [];
  // 初始化画布
  const initCanvas = () => {
    width = element.offsetWidth;
    height = element.offsetHeight;
    Object.assign(canvas.style, { top: '0', zIndex: '0', position: 'absolute', 'pointer-events': 'none' });
    element.append(canvas);
    element.parentElement.style.overflow = 'hidden';
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');
  };


  // 初始化
  initCanvas();
  // 事件监听
  window.addEventListener('scroll', () => active = document.documentElement.scrollTop <= height);
  window.addEventListener('resize', () => { width = element.clientWidth; height = element.clientHeight; canvas.width = width; canvas.height = height; });
};