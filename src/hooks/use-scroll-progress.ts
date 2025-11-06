import { useEffect, useRef, useState } from 'react';

interface UseScrollProgressOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollProgress = (
  options: UseScrollProgressOptions = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '0px'
  } = options;

  const [progress, setProgress] = useState(0);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 计算元素在视口中的进度
          const rect = entry.boundingClientRect;
          const windowHeight = window.innerHeight;
          
          // 计算元素顶部相对于视口底部的位置
          const elementTop = rect.top;
          const elementHeight = rect.height;
          
          // 当元素完全进入视口时，progress = 1
          // 当元素刚开始进入视口时，progress = 0
          let scrollProgress = 0;
          
          if (elementTop <= windowHeight && elementTop + elementHeight >= 0) {
            // 元素在视口中
            if (elementTop <= windowHeight - elementHeight) {
              // 元素完全在视口中
              scrollProgress = 1;
            } else {
              // 元素部分在视口中，计算进度
              const visibleHeight = windowHeight - elementTop;
              scrollProgress = Math.max(0, Math.min(1, visibleHeight / elementHeight));
            }
          }
          
          setProgress(scrollProgress);
        } else {
          setProgress(0);
        }
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // 0 到 1，步长 0.01
        rootMargin,
      }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [threshold, rootMargin]);

  return {
    targetRef,
    progress
  };
};