import React from 'react';

interface TechFrameProps {
  className?: string;
}

const TechFrame: React.FC<TechFrameProps> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

      {/* Animated Tech Frame */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner Frames */}
        <div className="absolute top-8 left-8 w-24 h-24">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-primary to-transparent" />
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary" />
        </div>
        <div className="absolute top-8 right-8 w-24 h-24">
          <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-primary to-transparent" />
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-primary to-transparent" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary" />
        </div>
        <div className="absolute bottom-8 left-8 w-24 h-24">
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
          <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-primary to-transparent" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary" />
        </div>
        <div className="absolute bottom-8 right-8 w-24 h-24">
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-primary to-transparent" />
          <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-primary to-transparent" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary" />
        </div>

        {/* Scan Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default TechFrame;