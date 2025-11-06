import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  minHeight?: string;
}

const LazyComponent: React.FC<LazyComponentProps> = ({
  children,
  fallback,
  threshold = 0.1,
  rootMargin = '100px',
  className = '',
  minHeight = '200px'
}) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: false
  });

  const defaultFallback = (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{ minHeight }}
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Loading Spinner */}
        <div className="relative">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-r-secondary rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        
        {/* Loading Text */}
        <div className="text-sm text-muted-foreground animate-pulse">
          加载中...
        </div>
        
        {/* Loading Progress Bar */}
        <div className="w-32 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={targetRef} className={className}>
      {isIntersecting ? (
        <div className="animate-fade-in">
          {children}
        </div>
      ) : (
        fallback || defaultFallback
      )}
    </div>
  );
};

export default LazyComponent;