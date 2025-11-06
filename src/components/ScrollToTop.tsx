import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 当路由变化时，滚动到页面顶部
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // 平滑滚动
    });
  }, [pathname]);

  return null; // 这个组件不渲染任何内容
};

export default ScrollToTop;