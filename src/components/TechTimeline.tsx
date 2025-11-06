import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface TimelineItem {
  year: number;
  title: string;
  description: string;
  fadeImages?: string[]; // 修改为多张图片数组
}

interface TechTimelineProps {
  items: TimelineItem[];
}

const TechTimeline = ({ items }: TechTimelineProps) => {
  const [activeYear, setActiveYear] = useState(items[0]?.year || 2020);
  const [rippleKey, setRippleKey] = useState(0);
  const [fadeOutImage, setFadeOutImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  useEffect(() => {
    handleYearChange(2020)
  }, [])
  // 处理年份切换时的扩散动画
  const handleYearChange = (year: number) => {
    if (year !== activeYear) {
      setActiveYear(year);
      setRippleKey(prev => prev + 1); // 触发扩散动画

      // 触发淡出图片效果
      const itemIndex = items.findIndex(item => item.year === year);
      if (itemIndex !== -1 && items[itemIndex].fadeImages && items[itemIndex].fadeImages!.length > 0) {
        setFadeOutImage(itemIndex);
        // 初始化图片索引
        if (!(itemIndex in currentImageIndex)) {
          setCurrentImageIndex(prev => ({ ...prev, [itemIndex]: 0 }));
        }
      }
    }
  };

  // 处理图片切换
  const handleImageChange = (itemIndex: number, direction: 'prev' | 'next') => {
    const item = items[itemIndex];
    if (!item.fadeImages || item.fadeImages.length <= 1) return;

    const currentIndex = currentImageIndex[itemIndex] || 0;
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? item.fadeImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === item.fadeImages.length - 1 ? 0 : currentIndex + 1;
    }

    setCurrentImageIndex(prev => ({ ...prev, [itemIndex]: newIndex }));
  };

  return (
    <div className="relative flex flex-col justify-center h-[700px] w-full">
      {/* Holographic Grid Background */}
      <div className="absolute inset-0 opacity-20 ">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>
      {/* Year Navigation */}
      <div className=" flex justify-center gap-3 py-2 flex-wrap">
        {items.map((item) => (
          <button
            key={item.year}
            onClick={() => handleYearChange(item.year)}
            className={`relative px-6 py-3 font-bold transition-all duration-300 overflow-hidden group ${activeYear === item.year
              ? "text-primary-foreground"
              : "text-foreground hover:text-primary"
              }`}
          >
            {/* Background */}
            <div className={`absolute inset-0 transition-all duration-300 ${activeYear === item.year
              ? "bg-primary scale-100"
              : "bg-card border border-primary/20 group-hover:border-primary scale-95 group-hover:scale-100"
              }`}>
              {/* Scan effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </div>

            {/* Text */}
            <span className="relative z-10">{item.year}</span>

            {/* Glow effect for active */}
            {activeYear === item.year && (
              <div className="absolute inset-0 shadow-[0_0_30px_hsl(var(--primary)/0.5)] animate-pulse mb-10" />
            )}
          </button>
        ))}
      </div>
      {/* Timeline Container */}
      <div className="relative overflow-hidden h-[600px] mt-10">
        {/* Main Timeline Line - 独立层级 */}
        <div className="absolute top-1/2 left-16 right-16 h-1 -translate-y-1/2 bg-gradient-to-r from-primary/0 via-primary to-primary/0 z-0 pointer-events-none">
          <div className="absolute inset-0 w-full animate-scan-horizontal">
            <div className="w-20 h-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </div>

        {/* Timeline Items */}
        <div className="flex items-center justify-center relative z-10 h-full overflow-hidden gap-10">
          {items.map((item, idx) => {
            const isActive = activeYear === item.year;
            const isTop = idx % 2 === 0;

            return (
              <div
                key={item.year}
                className="relative flex flex-col items-center"
                onClick={() => handleYearChange(item.year)}
              >
                {/* Content Card */}
                <div className={`w-64 md:w-72 lg:w-80 ${isTop ? '-translate-y-28' : 'translate-y-28'}`}>
                  <div
                    className={`group cursor-pointer transition-all duration-500 ${isActive
                      ? 'scale-105'
                      : 'scale-90 opacity-60 hover:opacity-80 hover:scale-95'
                      }`}
                  >
                    {/* Card with 3D effect */}
                    <div className="relative">
                      {/* Glow effect */}
                      {isActive && (
                        <div className="absolute inset-0 bg-primary/20 blur-2xl" />
                      )}

                      {/* Main card */}
                      <div className={`relative bg-card border-2 rounded-xl p-6 overflow-hidden transition-all duration-500 ${isActive
                        ? 'border-primary shadow-[0_0_30px_hsl(var(--primary)/0.3)]'
                        : 'border-primary/20 hover:border-primary/40'
                        }`}>
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />

                        {/* Content */}
                        <div className="relative z-10 text-center">
                          <h3 className={`text-xl font-bold mb-2 transition-colors ${isActive ? 'text-primary' : 'text-foreground'
                            }`}>
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {item.description}
                          </p>
                        </div>

                        {/* Year indicator */}
                        <div className={`absolute ${isTop ? '-bottom-16' : '-top-16'} left-1/2 -translate-x-1/2`}>
                          <div className={`text-3xl font-black transition-all duration-500 ${isActive
                            ? 'text-primary scale-110 [text-shadow:0_0_20px_hsl(var(--primary))]'
                            : 'text-primary/30'
                            }`}>
                            {item.year}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Node - 连接到水平线 */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                  <div className="relative">
                    {/* 持续扩散波动效果 */}
                    {isActive && (
                      <div className="absolute -inset-1 w-12 h-12 rounded-full border-2 border-primary/60 animate-ripple-continuous" />
                    )}

                    {/* Main node - 变大 */}
                    <div className={`relative rounded-full border-4 transition-all duration-500 ${isActive
                      ? 'w-10 h-10 bg-primary border-primary shadow-[0_0_20px_hsl(var(--primary))]'
                      : 'w-6 h-6 bg-card border-primary/50'
                      }`}>
                      {/* 外圈空心圈 - 仅在激活状态显示 */}
                      {isActive && (
                        <div className="absolute -inset-3 rounded-full border-4 border-primary/40 animate-pulse"></div>
                      )}
                    </div>

                    {/* 方块形淡出图片效果 - 在箭头指向的位置 */}
                    {fadeOutImage === idx && item.fadeImages && item.fadeImages.length > 0 && (
                      <div className={`absolute ${isTop ? 'top-20' : 'bottom-20'} left-1/2 -translate-x-1/2 z-20`}>
                        <div className="relative w-80 h-60">  {/* 修改为4:3比例 (320px:240px) */}
                          <img
                            src={item.fadeImages[currentImageIndex[idx] || 0]}
                            alt={`${item.title} 详情`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                          <div className="absolute inset-0 border-2 border-primary/30 rounded-lg"></div>

                          {/* 左右切换箭头 */}
                          {item.fadeImages.length > 1 && (
                            <>
                              {/* 左箭头 */}
                              <button
                                onClick={() => handleImageChange(idx, 'prev')}
                                className="absolute left-[-50px] top-1/2 transform -translate-y-1/2  rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 group"
                              >
                                <div className="relative">
                                  <ChevronLeft className="w-4 h-4 relative z-10 text-primary" />
                                  {/* 持续扩散特效 */}
                                  <div className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping"></div>
                                  {/* <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-pulse"></div> */}
                                </div>
                              </button>

                              {/* 右箭头 */}
                              <button
                                onClick={() => handleImageChange(idx, 'next')}
                                className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 group"
                              >
                                <div className="relative">
                                  <ChevronRight className="w-4 h-4 relative z-10 text-primary" />
                                  {/* 持续扩散特效 */}
                                  <div className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping"></div>
                                  {/* <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-pulse"></div> */}
                                </div>
                              </button>

                              {/* 图片指示器 */}
                              <div className={`absolute bottom-[isTop ? '40px' : '-40px'] left-1/2 transform -translate-x-1/2 flex space-x-1`}>
                                {item.fadeImages.map((_, imgIndex) => (
                                  <div
                                    key={imgIndex}
                                    className={`w-2 h-2 rounded-full transition-all duration-200 ${imgIndex === (currentImageIndex[idx] || 0)
                                      ? 'bg-blue-500'
                                      : 'bg-gray-300'
                                      }`}
                                  />
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                        {/* 2.2秒后开始淡出 */}
                        <div className={`absolute inset-0 w-64 md:w-72 lg:w-80 h-48 md:h-54 lg:h-60 `} style={{ animationDelay: '2.2s' }}>  {/* 修改为4:3比例 */}
                          <img
                            src={item.fadeImages[currentImageIndex[idx] || 0]}
                            alt={`${item.title} 详情`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                          <div className="absolute inset-0 border-2 border-primary/30 rounded-lg"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default TechTimeline;
