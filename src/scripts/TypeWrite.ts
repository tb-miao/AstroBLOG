import SITE_INFO from '@/config';
export default () => {
  const writeDom = document.querySelector('.header-main>.desc');
  if (!writeDom) return;
  const TypeWriteList: any = SITE_INFO.TypeWriteList;
  if (!Array.isArray(TypeWriteList) || !TypeWriteList.length) return writeDom.remove();
  writeDom.textContent = TypeWriteList[0];
}