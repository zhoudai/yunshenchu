import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/robot-hero.jpg";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";
import { useTranslation } from "react-i18next";
import ShinyText from './ShinyText';
const HeroSection = () => {
  const { t } = useTranslation();
  const [videoError, setVideoError] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <ShinyText
      text="demo version 仅供演示"
      disabled={false}
      speed={3}
      className='custom-class absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-[100] text-xl'
    />
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      {!videoError ? (
        <video
          src="https://img.fengxuan.cn/yunshenchu/r4.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-10"
          onError={() => setVideoError(true)}
        />
      ) : (
        <img
          src={heroImage}
          alt="Advanced Robot Technology"
          className="w-full h-full object-cover opacity-40 absolute inset-0 z-10"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background z-20" />
    </div>

    {/* Animated Grid Background */}
    <div className="absolute inset-0 z-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
    </div>

    {/* Glow Effects (hidden on small screens) */}
    <div className="hidden sm:block absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
    <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-secondary/20 rounded-full blur-[120px] animate-glow-pulse" style={{
      animationDelay: '1s'
    }} />

    {/* Content */}
    <div className="relative z-10 w-full mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-end gap-6 sm:gap-10 lg:gap-[130px] mt-24 sm:mt-32 lg:mt-[300px] mb-[300px] 2xl:mb-0">

      <div className="container px-0 sm:px-6 text-center lg:text-left">
        <div className="max-w-5xl  animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent leading-tight text-center">
            {t('未来机器人')}
            <br />
            {t('触手可及')}
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto lg:mx-0 text-center">{t('云深处 - 具身智能技术创新与行业应用引领者')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow-strong transition-all text-lg px-8 py-6">
              {t('探索产品')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="group border-primary/50 hover:border-primary text-foreground hover:bg-primary/10 text-lg px-8 py-6" onClick={() => {
              setVideoUrl("https://img.fengxuan.cn/yunshenchu/r4.mp4"); setShowVideo(true)
            }
            }>
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              {t('观看视频')}
            </Button>
          </div>
        </div>
      </div>
      <div className="relative z-10 container px-0 sm:px-6 text-center">
        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-20 max-w-3xl mx-auto">
          {[{
            value: "DR01",
            label: t('人形机器人')
          }, {
            value: "绝影X20",
            label: t('X系列')
          }, {
            value: "绝影Lite3",
            label: t('Lite系列')
          }].map((stat, index) => <div key={index} className="text-center animate-slide-up backdrop-blur-sm bg-card/50 rounded-lg p-4 sm:p-6 border border-primary/20" style={{
            animationDelay: `${index * 0.1}s`
          }}>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>)}
        </div>
      </div>
    </div>

    {/* Bottom Gradient */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    <VideoModal
      isOpen={showVideo}
      onClose={() => setShowVideo(false)}
      videoUrl={videoUrl}
      title={t('产品演示视频')}
    />
  </section >;

};
export default HeroSection;