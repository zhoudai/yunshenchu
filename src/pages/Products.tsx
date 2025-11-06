import { useState, useRef, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import PremiumIndicator from "@/components/PremiumIndicator";
import { Play, ChevronLeft, ChevronRight, Pause, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import RobotShowCase from "@/components/RobotShowCase";
import ShinyText from '@/components/ShinyText';
const Products = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  // 添加intersection observer for 技术参数动画区域
  // 使用滚动进度hook替代intersection observer
  const { targetRef: techAnimationRef, progress: scrollProgress } = useScrollProgress({
    threshold: 0.1,

    rootMargin: '0px'
  });

  const functionActionList = [
    { title: t("自主导航"), src: 'https://img.fengxuan.cn/yunshenchu/r1.mp4' },
    { title: t("地形适应"), src: 'https://img.fengxuan.cn/yunshenchu/r2.mp4' },
    { title: t("远程控制"), src: 'https://img.fengxuan.cn/yunshenchu/r3.mp4' },
    { title: t("AI视觉"), src: 'https://img.fengxuan.cn/yunshenchu/r4.mp4' },
  ]

  // 新增：场景数据
  const scenes = [
    { id: 1, title: t("工业巡检"), video: "https://img.fengxuan.cn/yunshenchu/r1.mp4" },
    { id: 2, title: t("安防监控"), video: "https://img.fengxuan.cn/yunshenchu/r2.mp4" },
    { id: 3, title: t("物流配送"), video: "https://img.fengxuan.cn/yunshenchu/r3.mp4" },
    { id: 4, title: t("救援搜索"), video: "https://img.fengxuan.cn/yunshenchu/r4.mp4" },
  ];
  const featureList = [
    { name: t("自主导航"), description: t("精准定位，智能避障"), icon: "🎯", img: 'https://img.fengxuan.cn/yunshenchu/017.jpg' },
    { name: t("地形适应"), description: t("多种地形灵活应对"), icon: "🏔️", img: 'https://img.fengxuan.cn/yunshenchu/019.jpg' },
    { name: t("远程控制"), description: t("实时监控与操作"), icon: "📡", img: 'https://img.fengxuan.cn/yunshenchu/012.jpg' },
    { name: t("AI视觉"), description: t("智能识别与分析"), icon: "👁️", img: 'https://img.fengxuan.cn/yunshenchu/018.jpg' },
  ]

  // 新增：切换到下一个场景
  const nextScene = () => {
    setCurrentSceneIndex((prev) => (prev + 1) % scenes.length);
  };

  // 新增：切换到上一个场景
  const prevScene = () => {
    setCurrentSceneIndex((prev) => (prev - 1 + scenes.length) % scenes.length);
  };
  // 自动切换功能
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSceneIndex((prev) => (prev === scenes.length - 1 ? 0 : prev + 1));
    }, 4000); // 每4秒切换一次

    return () => clearInterval(interval);
  }, []);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (hoveredIndex === index && currentSceneIndex === index) {
          video.play().catch(console.error);
        } else {
          video.pause();
        }
      }
    });
  }, [hoveredIndex, currentSceneIndex]);
  // 动态网格布局逻辑
  const generateDynamicLayout = () => {
    const rows: Product[][] = [];
    let currentRow: Product[] = [];
    let currentRowCols = 0;

    products.forEach((product) => {
      const colsNeeded = product.layout?.colsPerRow || 2;

      // 如果当前行为空或者当前产品需要独占一行
      if (currentRow.length === 0) {
        currentRow.push(product);
        currentRowCols = colsNeeded;
      }
      // 如果当前行的列数配置与新产品一致，且还有空间
      else if (currentRowCols === colsNeeded && currentRow.length < colsNeeded) {
        currentRow.push(product);
      }
      // 否则开始新行
      else {
        rows.push([...currentRow]);
        currentRow = [product];
        currentRowCols = colsNeeded;
      }
    });

    // 添加最后一行
    if (currentRow.length > 0) {
      rows.push(currentRow);
    }

    return rows;
  };
  const products: Product[] = [
    {
      title: t("模块名称"),
      category: t("功能模块1"),
      description: t("模块简介"),
      imageType: 'url',
      image: "https://img.fengxuan.cn/yunshenchu/20251026-133830.jpg",
      path: "/products/quadruped",
      layout: { colsPerRow: 2, height: "350px", width: "750px" },
      rounded: 'rounded-tl-lg'
    },
    {
      title: t("模块名称"),
      category: t("功能模块2"),
      description: t("模块简介"),
      imageType: 'url',
      image: "https://img.fengxuan.cn/yunshenchu/20251026-133859.jpg",
      path: "/products/quadruped",
      layout: { colsPerRow: 2, height: "350px", width: "350px" },
      rounded: 'rounded-tr-lg'
    },
    {
      title: t("模块名称"),
      category: t("功能模块3"),
      description: t("模块简介"),
      imageType: 'url',
      image: "https://img.fengxuan.cn/yunshenchu/20251026-133851.png",
      path: "/products/quadruped",
      layout: { colsPerRow: 3, height: "350px", width: "356px" },
    },
    {
      title: t("模块名称"),
      category: t("功能模块4"),
      description: t("模块简介"),
      imageType: 'url',
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      path: "/products/humanoid",
      layout: { colsPerRow: 3, height: "350px", width: "356px" }
    },
    {
      title: t("模块名称"),
      category: t("功能模块5"),
      description: t("模块简介"),
      imageType: 'url',
      image: "https://images.unsplash.com/photo-1563770660941-20978e870e26",
      path: "/products/wheeled",
      layout: { colsPerRow: 3, height: "350px", width: "356px" }
    },
  ];
  const productRows = generateDynamicLayout();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Video Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <ShinyText
      text="demo version 仅供演示"
      disabled={false}
      speed={3}
      className='custom-class absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-[100] text-xl'
    />
        <video
          src="https://img.fengxuan.cn/yunshenchu/r2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background z-20" />
        {/* Animated Grid Background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-glow-pulse" style={{
          animationDelay: '1s'
        }} />
        <div className="absolute bottom-20 left-40 z-20 text-left" >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            {t("DR-01")}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">{t("全地形智能机器人解决方案")}</p>
          <Button
            size="lg"
            onClick={() => { setVideoUrl("https://img.fengxuan.cn/yunshenchu/r2.mp4"); setShowVideo(true) }}
            className="group bg-primary hover:bg-primary/90 shadow-glow"
          >
            <Play className="mr-2 h-5 w-5" />
            {t("观看产品视频")}
          </Button>
        </div>
      </section>

      {/* Application Videos Carousel */}
      <section className="py-20 w-full h-screen">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              {t("应用场景")}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("深耕多个行业领域，提供定制化智能机器人解决方案")}
          </p>
        </div>
        <div className="relative w-full">
          {/* 轮播容器 */}
          <div className="relative overflow-hidden mb-12" style={{ height: '500px' }} >
            <div
              className="flex h-full transition-transform duration-1000 ease-in-out"
            >
              {scenes.map((scene, index) => {
                let showIndexes;
                if (currentSceneIndex === scenes.length - 1) {
                  // 最后一个场景：显示前一个和当前
                  const prevIndex = currentSceneIndex - 1;
                  showIndexes = [prevIndex, currentSceneIndex];
                } else {
                  // 其他场景：显示当前和下一个
                  const nextIndex = (currentSceneIndex + 1) % scenes.length;
                  showIndexes = [currentSceneIndex, nextIndex];
                }

                if (!showIndexes.includes(index)) {
                  return null;
                }

                // 确定宽度：当前场景3/4，其他1/4
                const isCurrentScene = index === currentSceneIndex;
                return (
                  <div
                    key={scene.id}
                    className={`h-full flex-shrink-0 relative cursor-pointer group px-6 transition-all duration-500 ease-in-out ${
                      isCurrentScene ? 'w-3/4' : 'w-1/4'
                    }`}
                    onClick={() => setCurrentSceneIndex(index)}
                  >
                    <div
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`relative h-full rounded-lg overflow-hidden border border-primary/20 transition-all duration-500 shadow-glow ${
                        isCurrentScene ? 'hover:border-primary' : ''
                      }`}
                    >
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={scene.video}
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover transition-all duration-700 ease-out"
                      />
                      {/* 默认蒙层 - 鼠标hover时隐藏 */}
                      <div className={`absolute inset-0 bg-black/30 transition-all duration-500 ease-out ${
                        isCurrentScene ? 'group-hover:opacity-0' : ''
                      }`} />
                      <div className="absolute inset-0 bg-black/40 flex items-end pb-12 transition-all duration-500 ease-out">
                        <h3 className={`text-4xl md:text-4xl font-bold text-foreground mb-3 pl-12 transition-all duration-500 ease-out ${
                          isCurrentScene ? 'opacity-100 transform translate-y-0' : 'opacity-70 transform translate-y-2'
                        }`}>
                          {scene.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 导航按钮 */}
          <button
            onClick={prevScene}
            disabled={currentSceneIndex === 0}
            className={`${currentSceneIndex === 0 ? 'cursor-not-allowed' : ""} absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background border border-primary/20 hover:border-primary rounded-full p-3 transition-all shadow-glow'}`}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextScene}
            disabled={currentSceneIndex === scenes.length - 1}
            className={`${currentSceneIndex === scenes.length - 1 ? 'cursor-not-allowed' : ""} absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background border border-primary/20 hover:border-primary rounded-full p-3 transition-all shadow-glow'}`}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <PremiumIndicator
            total={scenes.length}
            current={currentSceneIndex}
            onIndicatorClick={setCurrentSceneIndex}
          />

        </div>
      </section>

      {/* Features Slider */}
      <section className="relative py-32 overflow-hidden">

        {/* 动态光效 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-cyber bg-clip-text text-transparent">
                {t("核心功能")}
              </span>
            </h2>
          </div>

          <div className="relative max-w-6xl mx-auto ">
            <div
              className="flex items-center justify-between mb-12 h-[500px]"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentFeature(Math.max(0, currentFeature - 1))}
                disabled={currentFeature === 0}
                className="h-12 w-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 disabled:opacity-30 hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </Button>
              <div className="flex-1 mx-12 h-full">
                <div className="relative group h-full">
                  {/* 卡片光晕效果 */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-15 group-hover:opacity-40 transition duration-1000"></div>
                  {/* 主卡片 */}
                  <div className="h-full relative text-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-500 transform hover:scale-[1.02] cursor-pointer"
                  >
                    <img src={featureList[currentFeature].img} className="w-full h-full object-cover rounded-2xl" />
                    <h3 className="absolute bottom-5 left-5 z-10 text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {featureList[currentFeature].name}
                    </h3>
                    <h3 className="absolute bottom-5 right-5 z-10 text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {featureList[currentFeature].description}
                    </h3>
                    {/* 底部装饰线 */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                  </div>
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentFeature(Math.min(featureList.length - 1, currentFeature + 1))}
                disabled={currentFeature === featureList.length - 1}
                className="h-12 w-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 disabled:opacity-30 hover:scale-110 active:scale-95"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </Button>
            </div>

            <PremiumIndicator
              total={featureList.length}
              current={currentFeature}
              onIndicatorClick={setCurrentFeature}
            />
          </div>
        </div>
      </section>
      <div className="text-center mb-16 animate-fade-in mt-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-cyber bg-clip-text text-transparent">
            {t("功能模块")}
          </span>
        </h2>
      </div>
      {/* Function Modules Grid */}
      <div className="max-w-6xl mx-auto space-y-8 mb-16">
        {productRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap gap-8 justify-start items-start w-fit "
          >
            {row.map((product, colIndex) => {
              const globalIndex = products.findIndex(p => p === product);
              return (
                <div
                  key={globalIndex}
                  className="group relative animate-slide-up flex-shrink-0 cursor-pointer"
                  style={{
                    animationDelay: `${globalIndex * 0.15}s`,
                    perspective: '1000px'
                  }}
                  onMouseEnter={() => setActiveIndex(globalIndex)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div
                    className={`relative ${product.rounded} overflow-hidden bg-card border border-primary/20 hover:border-primary transition-all duration-700 shadow-lg hover:shadow-glow transform hover:-translate-y-2`}
                    style={{
                      height: product.layout?.height || '400px',
                      width: product.layout?.width || 'auto',
                      minWidth: '280px'
                    }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={product.imageType === 'url' ? product.image : product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/50 group-hover:from-background/80 group-hover:via-background/60 transition-all duration-700" />
                    </div>

                    {/* Holographic Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 animate-pulse" />
                      {/* Corner Frames */}
                      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary animate-pulse" />
                      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary animate-pulse" style={{ animationDelay: '0.1s' }} />
                      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-primary animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary animate-pulse" style={{ animationDelay: '0.3s' }} />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-8 z-10">
                      {/* Category Badge */}
                      <div className="flex justify-between items-start">
                        <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-sm font-medium text-primary">
                          {product.category}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                        <h3 className="text-3xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                          {product.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Scan Line Effect */}
                    {activeIndex === globalIndex && (
                      <>
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
                        <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-scan-vertical" />
                      </>
                    )}

                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-10" />
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <RobotShowCase />
      {/* Video Gallery */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-cyber bg-clip-text text-transparent">
                {t("功能演示")}
              </span>
            </h2>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
            {functionActionList.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 snap-center cursor-pointer group"
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) video.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) video.pause();
                }}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden bg-card border border-primary/20 hover:border-primary transition-all">
                  <video
                    src={item.src}
                    title={`${t("功能视频")} ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    muted
                    loop
                  />
                  <div className="absolute inset-0 bg-background/50 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                    <Play className="h-12 w-12 text-primary" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end p-6">
                    <div>
                      <p className="text-sm text-muted-foreground">{t("详细功能描述")}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 container mx-auto px-6 h-[800px]">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              {t("技术参数")}
            </span>
          </h2>
        </div>
        {/* 技术参数下方的图片动画区域 */}
        <div
          ref={techAnimationRef}
          className="mt-16 relative mx-auto w-[650px] h-[450px] group cursor-pointer"
        >
          {/* 下层图片 - 根据滚动进度右移 */}
          <div
            className="absolute inset-0 overflow-hidden transition-transform w-full rounded-2xl duration-300 ease-out h-full bg-black border-primary"
            style={{
              transform: `translateX(${scrollProgress * 404}px)`, // 384px = 96 * 4 (translate-x-96)
              borderWidth: scrollProgress > 0.5 ? '2px' : '0px'
            }}
          >
            {/* 技术参数 - 优化后的布局 */}
            <div className="p-12">
              <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 text-white">
                {[
                  {
                    category: t('规格'),
                    items: [
                      { name: t('站立尺寸'), value: '950*470*700mm' },
                      { name: t('(长*宽*高)'), value: '' },
                      { name: t('整机重量'), value: '53kg' },
                    ],
                  },
                  {
                    category: t('运动'),
                    items: [
                      { name: t('持续作业负载'), value: '20kg' },
                      { name: t('最大爬坡角度'), value: '≥30°' },
                    ],
                  },
                  {
                    category: t('防护'),
                    items: [{ name: t('防护等级'), value: 'IP66' }],
                  },
                  {
                    category: t('电池'),
                    items: [
                      { name: t('续航时间'), value: '2-4h' },
                      { name: t('续航里程'), value: '15km' },
                    ],
                  },
                  {
                    category: t('通讯'),
                    items: [{ name: t('外置接口'), value: t('无') }],
                  },
                ].map((spec) => (
                  <div key={spec.category}>
                    <h4 className="text-xl font-semibold text-white mb-4 border-l-4 border-primary pl-4">{spec.category}</h4>
                    <ul className="space-y-3 text-gray-300">
                      {spec.items.map((item) => (
                        <li key={item.name} className="flex justify-between">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-gray-400">{item.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 边框特效 - 始终存在 */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 animate-pulse" />
              {/* Corner Frames */}
              {/* <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary animate-pulse" />
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary animate-pulse" style={{ animationDelay: '0.1s' }} />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-primary animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary animate-pulse" style={{ animationDelay: '0.3s' }} /> */}
            </div>
          </div>

          {/* 上层图片 - 根据滚动进度左移 */}
          <div
            className="absolute inset-0 transition-transform w-full ease-out z-10 h-full duration-300 shadow-lg shadow-glow transform border-primary "
            style={{
              transform: `translateX(${-scrollProgress * 304}px)`,// 向左移动
              width: scrollProgress < 0 ? `${450 + scrollProgress * 200}px` : '450px', // 从450px到650px
            }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-15 transition"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-[650px] h-[450px]  overflow-hidden bg-black flex items-center justify-center flex-col gap-4">
                <img
                  src="https://www.deeprobotics.cn/public/static/robot/images/nav_hum.png"
                  alt={t("技术展示")}
                  className="w-[250px] h-[250px] object-cover mix-blend-luminosity"
                  style={{
                    opacity: scrollProgress > 0.3 ? 0.8 : 1
                  }}
                />
                {/* 扫描线 - 水平方向 */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
                {/* 扫描线 - 垂直方向 */}
                <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-bounce" />
                {/* 扫描线 - 垂直方向 */}
                <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-bounce" />
                {/* 扫描线 - 水平方向 */}
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
                <div className="text-white text-2xl font-bold">{t("DR-01")}</div>
              </div>
              {/* 边框特效 - 始终存在 */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 animate-pulse" />
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary animate-pulse" />
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary animate-pulse" style={{ animationDelay: '0.1s' }} />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-primary animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary animate-pulse" style={{ animationDelay: '0.3s' }} />
              </div>
            </div>
          </div>

        </div>


      </section>

      <Footer />

      <VideoModal
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
        videoUrl={videoUrl}
        title={t("产品演示视频")}
      />
    </div>
  );
};

export default Products;
