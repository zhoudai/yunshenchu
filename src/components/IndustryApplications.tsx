import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import TechFrame from "./TechFrame";
import PremiumIndicator from "./PremiumIndicator";
import { useTranslation } from "react-i18next";
const applications = [
  {
    title: "电力巡检",
    description: "电网设施自动化巡查，保障电力系统安全",
    image: "https://img.fengxuan.cn/yunshenchu/v02.mp4",
    path: "/applications/industrial",
    isVideo: true
  },
  {
    title: "工业巡检",
    description: "智能化工厂设备巡检，提升效率降低风险",
    image: "https://img.fengxuan.cn/yunshenchu/v01.mp4",
    path: "/applications/power",
    isVideo: true
  },
  {
    title: "安防监控",
    description: "24小时智能安防巡逻，守护安全防线",
    image: "https://img.fengxuan.cn/yunshenchu/20251026-133851.png",
    path: "/applications/security"
  },
  {
    title: "物流仓储",
    description: "自动化仓库管理，提升物流效率",
    image: "https://img.fengxuan.cn/yunshenchu/019.jpg",
    path: "/applications/logistics"
  },
  {
    title: "应急救援",
    description: "复杂环境应急响应，保护救援人员安全",
    image: "https://img.fengxuan.cn/yunshenchu/015.jpg",
    path: "/applications/rescue"
  },
  {
    title: "科研教育",
    description: "科研实验与教学平台，推动技术创新",
    image: "https://img.fengxuan.cn/yunshenchu/016.jpg",
    path: "/applications/research"
  }
];

const IndustryApplications = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 自动切换功能
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === applications.length - 1 ? 0 : prev + 1));
    }, 4000); // 每4秒切换一次

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Radial Glow (sm及以上显示，移动端隐藏并缩小尺寸) */}
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              {t('行业应用领域')}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('深耕多个行业领域，提供定制化智能机器人解决方案')}
          </p>
        </div>
        {/* Futuristic Hexagonal Layout */}
        <div className="relative max-w-[1600px] mx-auto px-2 sm:px-6">
          {/* Left Arrow */}
          <button
            onClick={() => setActiveIndex((prev) => (prev === 0 ? applications.length - 1 : prev - 1))}
            className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 group"
          >
            <div className="relative">
              <ChevronLeft className="w-6 h-6 relative z-10 text-primary" />
              <div className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping"></div>
            </div>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => setActiveIndex((prev) => (prev === applications.length - 1 ? 0 : prev + 1))}
            className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 group"
          >
            <div className="relative">
              <ChevronRight className="w-6 h-6 relative z-10 text-primary" />
              <div className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping"></div>
            </div>
          </button>

          {/* Center Main Display */}
          <div className="relative mb-12">
            <div className="relative h-[280px] sm:h-[420px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden group ">
              {/* Main Image */}

              {applications[activeIndex].isVideo ? (
                <video
                  src={applications[activeIndex].image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-all duration-700"
                />
              ) : (
                <img
                  src={applications[activeIndex].image}
                  alt={t(applications[activeIndex].title)}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              )}

              <TechFrame />

              {/* Content Info */}
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 z-10">
                <div className="flex items-end justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent" />
                      <div>
                        <div className="text-sm text-primary font-mono mb-1">{activeIndex + 1} / {applications.length}</div>
                        <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3">
                          {t(applications[activeIndex].title)}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl ml-0 sm:ml-4">
                      {t(applications[activeIndex].description)}
                    </p>
                  </div>

                  {/* Status Panel */}
                </div>
              </div>

              {/* Holographic Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>
          {/* Mobile Controls */}
          <div className="flex 2xl:hidden items-center justify-center gap-6 mt-4">
            <button
              onClick={() => setActiveIndex((prev) => (prev === 0 ? applications.length - 1 : prev - 1))}
              className="rounded-full p-2 border border-primary/40 hover:border-primary transition"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev === applications.length - 1 ? 0 : prev + 1))}
              className="rounded-full p-2 border border-primary/40 hover:border-primary transition"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>
          <PremiumIndicator
            total={applications.length}
            current={activeIndex}
            onIndicatorClick={setActiveIndex}
          />
          {/* Navigation Grid - Surrounding Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
            {applications.map((app, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  group relative cursor-pointer
                  transition-all duration-500 animate-slide-up
                  ${activeIndex === index ? 'scale-105' : 'scale-100 hover:scale-105'}
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Container */}
                <div className={`
                  relative aspect-[3/4] rounded-2xl overflow-hidden
                  border-2 transition-all duration-500
                  ${activeIndex === index
                    ? 'border-primary shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)]'
                    : 'border-primary/20 hover:border-primary/50'
                  }
                `}>
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    {app.isVideo ? (
                      <video
                        src={app.image}
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <img
                        src={app.image}
                        alt={t(app.title)}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
                  </div>

                  {/* Glow Effect for Active */}
                  {activeIndex === index && (
                    <div className="absolute inset-0 bg-primary/10 animate-pulse" />
                  )}

                  {/* Scan Line */}
                  {(hoveredIndex === index || activeIndex === index) && (
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
                  )}

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-4 z-10">
                    {/* Index Number */}
                    <div className="absolute top-4 left-4">
                      <div className={`
                        text-xs font-mono font-bold px-2 py-1 rounded
                        ${activeIndex === index
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-background/60 text-muted-foreground backdrop-blur-sm'
                        }
                      `}>
                        0{index + 1}
                      </div>
                    </div>

                    {/* Tech Corner */}
                    <div className={`
                      absolute top-3 right-3 w-6 h-6 
                      border-t border-r transition-all duration-500
                      ${activeIndex === index ? 'border-primary' : 'border-primary/30'}
                    `} />

                    {/* Title */}
                    <h4 className={`
                      text-base font-bold mb-1 transition-all duration-300
                      ${activeIndex === index ? 'text-primary' : 'text-foreground'}
                    `}>
                      {t(app.title)}
                    </h4>

                    {/* Selection Indicator */}
                    <div className={`
                      h-1 rounded-full transition-all duration-500
                      ${activeIndex === index
                        ? 'w-full bg-primary'
                        : 'w-0 group-hover:w-1/2 bg-primary/50'
                      }
                    `} />
                  </div>

                  {/* Holographic Border Effect */}
                  <div className={`
                    absolute inset-0 pointer-events-none transition-opacity duration-500
                    ${activeIndex === index ? 'opacity-100' : 'opacity-0'}
                  `}>
                    <div className="absolute inset-0 rounded-2xl border border-primary/50 animate-pulse" />
                  </div>
                </div>

                {/* Active Indicator Line */}
                {activeIndex === index && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryApplications;
