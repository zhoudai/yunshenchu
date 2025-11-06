import { useState, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import { Play, ChevronLeft, ChevronRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import APPLICATIONSiMG01 from "@/assets/APPLICATIONSiMG01.png";
import ShinyText from '@/components/ShinyText';

const Applications = () => {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  const [activeTab1, setActiveTab1] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);
  const [currentScene, setCurrentScene] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 防抖机制
  const debounceRef1 = useRef<NodeJS.Timeout>();
  const debounceRef2 = useRef<NodeJS.Timeout>();

  // 优化的tab切换函数
  const handleTab1Change = useCallback((index: number) => {
    if (debounceRef1.current) {
      clearTimeout(debounceRef1.current);
    }
    debounceRef1.current = setTimeout(() => {
      setActiveTab1(index);
    }, 50); // 50ms防抖
  }, []);

  const handleTab2Change = useCallback((index: number) => {
    if (debounceRef2.current) {
      clearTimeout(debounceRef2.current);
    }
    debounceRef2.current = setTimeout(() => {
      setActiveTab2(index);
    }, 50); // 50ms防抖
  }, []);

  // 应用领域切换函数
  const handleSceneChange = (direction: 'prev' | 'next') => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentScene === 0 ? features.length - 1 : currentScene - 1;
    } else {
      newIndex = currentScene === features.length - 1 ? 0 : currentScene + 1;
    }

    setCurrentScene(newIndex);

    // 滚动到对应的场景
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth / features.length;
      scrollContainerRef.current.scrollTo({
        left: scrollWidth * newIndex,
        behavior: 'smooth'
      });
    }
  };

  const features = [
    { title: t("行业功能点1"), image: APPLICATIONSiMG01 },
    { title: t("行业功能点2"), image: "https://img.fengxuan.cn/yunshenchu/20251026-133908.png" },
    { title: t("行业功能点3"), image: "https://img.fengxuan.cn/yunshenchu/011.jpg" },
    { title: t("行业功能点4"), image: "https://img.fengxuan.cn/yunshenchu/020.jpg" },
  ];

  const functions1 = [
    { name: t("智能识别"), description: t("AI视觉识别技术"), image: "https://img.fengxuan.cn/yunshenchu/20251026-133924.webp" },
    { name: t("自主导航"), description: t("精准定位与路径规划"), image: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { name: t("数据分析"), description: t("实时数据处理与分析"), image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71" },
  ];

  const functions2 = [
    { name: t("远程控制"), description: t("云端实时控制系统"), image: "https://img.fengxuan.cn/yunshenchu/20251026-133916.jpg" },
    { name: t("语音交互"), description: t("自然语言处理"), image: "https://img.fengxuan.cn/yunshenchu/20251026-133924.webp" },
    { name: t("协同作业"), description: t("多机器人协作"), image: "https://img.fengxuan.cn/yunshenchu/015.jpg" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Video Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden ">
            <ShinyText
      text="demo version 仅供演示"
      disabled={false}
      speed={3}
      className='custom-class absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-[100] text-xl'
    />
        <video
          src="https://img.fengxuan.cn/yunshenchu/r3.mp4"
          title={t('Applications')}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          autoPlay
          loop
          muted
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
            {t('工业巡检')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">{t('赋能各行各业，创造无限可能')}</p>
          <Button
            size="lg"
            onClick={() => {setVideoUrl("https://img.fengxuan.cn/yunshenchu/r3.mp4"); setShowVideo(true)}}
            className="group bg-primary hover:bg-primary/90 shadow-glow"
          >
            <Play className="mr-2 h-5 w-5" />
            {t('观看应用视频')}
          </Button>
        </div>
      </section>

      {/* Features Slider */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
        <div className=" h-full w-full">
          {/* 左右切换按钮 */}
          <button
            disabled={currentScene === 0}
            onClick={() => handleSceneChange('prev')}
            className={`absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-background/80 hover:bg-background backdrop-blur-sm border border-primary/30 rounded-full p-4 transition-all duration-300 hover:scale-110 hover:border-primary/60 ${currentScene === 0 ? 'cursor-not-allowed' : ''}`}
          >
            <ChevronLeft className="h-8 w-8 text-primary" />
          </button>
          <button
            disabled={currentScene === 3}
            onClick={() => handleSceneChange('next')}
            className={`absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-background/80 hover:bg-background backdrop-blur-sm border border-primary/30 rounded-full p-4 transition-all duration-300 hover:scale-110 hover:border-primary/60 ${currentScene === 3 ? 'cursor-not-allowed' : ''}`}
          >
            <ChevronRight className="h-8 w-8 text-primary" />
          </button>
          <div ref={scrollContainerRef} className="flex h-full overflow-hidden snap-x snap-mandatory scrollbar-hide p-4">
            {features.map((scene, i) => (
              <div
                key={i}
                className={`relative flex-shrink-0 w-[calc(100%-2rem)] h-[calc(100%-2rem)]  group cursor-pointer
                  }`}
              // onClick={() => setShowVideo(true)}
              >
                {/* Background Image */}
                <img
                  src={scene.image}
                  alt={scene.title}
                  className=" border-2 border-primary rounded-20 absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover transition-all duration-1000 ease-in-out rounded-lg"
                />

                {/* Corner Accents */}
                <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-primary opacity-50 group-hover:opacity-100 transition-all duration-1000 ease-in-out group-hover:scale-110" />
                <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-primary opacity-50 group-hover:opacity-100 transition-all duration-1000 ease-in-out group-hover:scale-110" />
                <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-primary opacity-50 group-hover:opacity-100 transition-all duration-1000 ease-in-out group-hover:scale-110" />
                <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-primary opacity-50 group-hover:opacity-100 transition-all duration-1000 ease-in-out group-hover:scale-110" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end items-center px-8 pb-32">
                  <div className="text-center mb-32 w-full flex justify-center">
                    <h3 className="text-4xl md:text-4xl font-bold text-foreground absolute bottom-[100px] right-[200px]">
                      {scene.title}
                    </h3>
                  </div>
                  {/* Status Bar */}
                  <div className="absolute bottom-40 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 bg-background/80 backdrop-blur-sm border border-primary/30 rounded-full">
                    <span className="text-sm font-mono"> {i + 1}/{features.length}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {features.map((_, i) => (
              <div
                key={i}
                className={`w-12 h-1 transition-colors cursor-pointer ${currentScene === i ? 'bg-primary' : 'bg-muted hover:bg-primary'
                  }`}
                onClick={() => setCurrentScene(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Function Area 1 */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-cyber bg-clip-text text-transparent">
                {t('核心功能')}
              </span>
            </h2>
          </div>
          <div className="max-w-7xl mx-auto px-6" style={{ marginRight: "25rem" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* 左侧时间轴菜单区域 */}
              <div className="relative">
                {/* 时间轴线条 */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50"></div>
                <div className="space-y-10">
                  {functions1.map((func, i) => (
                    <div
                      key={i}
                      className={`relative transition-opacity duration-150 ${activeTab1 === i
                        ? "opacity-100"
                        : "opacity-60 hover:opacity-80"
                        }`}
                    >
                      {/* 时间轴节点 */}
                      <div
                        className={`absolute left-8 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-colors duration-150 ${activeTab1 === i
                          ? "bg-primary border-primary"
                          : "bg-background border-primary/30"
                          }`}
                      ></div>

                      {/* 按钮内容 */}
                      <button
                        onClick={() => handleTab1Change(i)}
                        className={`w-80 text-left pl-16 pr-8 py-8 rounded-lg font-medium transition-colors duration-150 ${activeTab1 === i
                          ? "bg-primary/10 border border-primary/30 text-foreground"
                          : "bg-card/50 border border-primary/10 text-foreground/70 hover:border-primary/20 hover:bg-card/80"
                          }`}
                      >
                        <div className="flex flex-col">
                          <span className={`font-semibold transition-all duration-300 ${activeTab1 === i ? "text-xl" : "text-lg"
                            }`}>
                            {func.name}
                          </span>
                          <span className={`opacity-80 mt-2 transition-all duration-300 ${activeTab1 === i ? "text-base" : "text-sm"
                            }`}>
                            {func.description}
                          </span>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* 右侧图片区域 */}
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-card via-card/90 to-primary/5 border-2 border-primary/30 shadow-2xl shadow-primary/10" style={{ perspective: '1200px', aspectRatio: '16/9', minHeight: '500px' }}>
                {/* 科技感背景网格 */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.3)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                </div>

                {/* 发光边框效果 */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-pulse" />

                <div className="relative w-full h-full transition-transform duration-500 ease-in-out hover:scale-105 group will-change-transform" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(0deg)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'rotateX(8deg) rotateY(-2deg)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)'}>
                  <img
                    src={functions1[activeTab1].image}
                    alt={functions1[activeTab1].name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:contrast-110 will-change-transform"
                  />

                  {/* 科技感扫描线 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  {/* 增强的渐变遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-10">
                    <div className="transform transition-all duration-700 group-hover:translate-y-2 group-hover:scale-105">
                      <h3 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent drop-shadow-lg">{functions1[activeTab1].name}</h3>
                      <p className="text-xl text-muted-foreground/90 leading-relaxed">{functions1[activeTab1].description}</p>
                    </div>
                  </div>

                  {/* 角落装饰 */}
                  <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/60" />
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/60" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-primary/60" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Function Area 2 */}
      <section className="py-32 bg-background relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--primary)) 0px, transparent 1px, transparent 40px),
                             repeating-linear-gradient(90deg, hsl(var(--primary)) 0px, transparent 1px, transparent 40px)`,
            animation: 'grid-flow 15s linear infinite'
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-cyber bg-clip-text text-transparent">
                {t('作业模块')}
              </span>
            </h2>
          </div>

          <div className="max-w-8xl mx-auto">
            {/* Main Display Area */}
            <div className="relative mb-12">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-glow-strong">
                {/* Background with Animation */}
                <div className="absolute inset-0">
                  {functions2.map((func, i) => (
                    <img
                      key={i}
                      src={func.image}
                      alt={func.name}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${activeTab2 === i
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                        }`}
                    />
                  ))}
                </div>

                {/* Tech Overlay Effects */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `linear-gradient(hsl(var(--primary) / 0.6) 1px, transparent 1px),
                                       linear-gradient(90deg, hsl(var(--primary) / 0.6) 1px, transparent 1px)`,
                      backgroundSize: '40px 40px'
                    }}
                  />

                  {/* Scan Lines */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-vertical opacity-40" />
                    <div className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent animate-scan opacity-40" />
                  </div>

                  {/* Data Visualization Lines */}
                  {activeTab2 === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-64 border-2 border-primary/30 rounded-full animate-pulse" />
                      <div className="absolute w-48 h-48 border border-primary/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>
                  )}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />

                {/* Content Info */}
                <div className="absolute inset-0 flex flex-col justify-between p-10">
                  {/* Top Status Bar */}
                  <div className="flex justify-between items-start">
                    <div className="px-4 py-2 bg-background/80 backdrop-blur-sm border border-primary/30 rounded-lg">
                      <div className="flex items-center gap-2 text-sm font-mono">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-primary">{t('扩展功能')}</span>
                      </div>
                    </div>

                    <div className="text-right font-mono text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/20">
                      {t('模块')} {activeTab2 + 1}/{functions2.length}
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="animate-slide-in-left">
                    <h3 className="text-5xl font-bold mb-3 bg-gradient-cyber bg-clip-text text-transparent">
                      {functions2[activeTab2].name}
                    </h3>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                      {functions2[activeTab2].description}
                    </p>
                  </div>
                </div>

                {/* Corner Frames */}
                <div className="absolute top-6 left-6 w-20 h-20 border-t-2 border-l-2 border-primary opacity-60" />
                <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-primary opacity-60" />
                <div className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-primary opacity-60" />
                <div className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-primary opacity-60" />
              </div>
            </div>

            {/* Control Panel */}
            <div className="relative">
              {/* Connection Lines */}
              <div className="absolute -top-6 left-1/2 w-0.5 h-6 bg-gradient-to-b from-primary/50 to-transparent" />

              <div className="flex gap-6 justify-center">
                {functions2.map((func, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab2(i)}
                    className={`relative group flex-1 max-w-xs transition-all duration-500 ${activeTab2 === i ? "scale-105" : "scale-100 hover:scale-102"
                      }`}
                  >
                    {/* Connection Line to Display */}
                    <div className={`absolute -top-6 left-1/2 w-0.5 h-6 transition-all duration-500 ${activeTab2 === i
                      ? "bg-gradient-to-t from-primary to-primary/50"
                      : "bg-gradient-to-t from-primary/20 to-transparent"
                      }`} />

                    <div className={`relative p-6 rounded-xl overflow-hidden transition-all duration-500 ${activeTab2 === i
                      ? "bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary shadow-glow-strong"
                      : "bg-card/50 border border-primary/20 hover:border-primary/50"
                      }`}>
                      {/* Animated Border for Active */}
                      {activeTab2 === i && (
                        <div className="absolute inset-0 overflow-hidden">
                          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent top-0 animate-scan" />
                        </div>
                      )}

                      {/* Corner Accents */}
                      <div className={`absolute top-0 right-0 w-8 h-8 border-t border-r transition-colors ${activeTab2 === i ? "border-primary" : "border-primary/20"
                        }`} />
                      <div className={`absolute bottom-0 left-0 w-8 h-8 border-b border-l transition-colors ${activeTab2 === i ? "border-primary" : "border-primary/20"
                        }`} />

                      <div className="relative z-10 text-center">
                        {/* Index */}
                        <div className={`text-xs font-mono mb-2 transition-colors ${activeTab2 === i ? "text-primary" : "text-muted-foreground"
                          }`}>
                          {t('模块')}.0{i + 1}
                        </div>

                        {/* Title */}
                        <h4 className={`text-xl font-bold mb-2 transition-all duration-500 ${activeTab2 === i
                          ? "bg-gradient-cyber bg-clip-text text-transparent"
                          : "text-foreground"
                          }`}>
                          {func.name}
                        </h4>

                        {/* Description */}
                        <p className={`text-sm transition-colors ${activeTab2 === i ? "text-foreground/80" : "text-muted-foreground"
                          }`}>
                          {func.description}
                        </p>

                        {/* Status Badge */}
                        {/* {activeTab2 === i && (
                          <div className="mt-3 inline-flex items-center gap-1 text-xs font-mono text-primary animate-fade-in">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            SELECTED
                          </div>
                        )} */}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-cyber bg-clip-text text-transparent">
            {t('巡视系统')}
          </span>
        </h2>
      </div>
      <div className="relative mb-16 mx-auto container" style={{ width: "1400px" }}>
        <div className="relative  rounded-3xl overflow-hidden group">
          {/* Main Image */}
          <img
            src='https://img.fengxuan.cn/yunshenchu/021.jpg'
            className="w-full h-full object-cover transition-all duration-700"
          />
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

          {/* Holographic Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      </div>
      {/* Contact Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6 text-center">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-cyber bg-clip-text text-transparent">
                {t('联系云深处')}
              </span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('让我们一起探讨如何将智能机器人技术应用到您的业务中')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow">
              <Mail className="mr-2 h-5 w-5" />
              {t('发送邮件')}
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary">
              <Phone className="mr-2 h-5 w-5" />
              {t('电话咨询')}
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      <VideoModal
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
        videoUrl={videoUrl}
        title={t('行业应用视频')}
      />
    </div>
  );
};

export default Applications;
