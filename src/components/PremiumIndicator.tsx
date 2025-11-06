import React from 'react';

interface PremiumIndicatorProps {
  total: number;
  current: number;
  onIndicatorClick: (index: number) => void;
  className?: string;
}

const PremiumIndicator: React.FC<PremiumIndicatorProps> = ({ 
  total, 
  current, 
  onIndicatorClick, 
  className = "" 
}) => {
  return (
    <div className={`flex justify-center gap-3 ${className}`}>
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => {
            onIndicatorClick(i);
          }}
          className={`relative h-3 rounded-full transition-all duration-500 hover:scale-125 active:scale-95 ${
            i === current
              ? "w-12 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50"
              : "w-3 bg-white/20 hover:bg-white/30"
          }`}
        >
          {i === current && (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm opacity-60 animate-pulse"></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default PremiumIndicator;