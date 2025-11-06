import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import { Play, Orbit, Target, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import CircularGallery from '@/components/CircularGallery'
import LogoLoop from "../components/LogoLoop";
import styled from 'styled-components';
import LightRays from '@/components/LightRays';
import { useTranslation } from 'react-i18next';
import ShinyText from '@/components/ShinyText';



const StyledWrapper = styled.div`
  .card {
  background: ${({ image }) =>
    image
      ? `url(${image}) center/cover no-repeat`
      : 'rgba(172, 7, 226, 0.5)'};
    position: relative;
    max-width: 300px;
    height: 350px;
    border-radius: 5px;
    padding: 1.5rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 7.5px;
    transition: 0.5s ease;
    color: white;
  }

  
  .card:hover::after {
    opacity: 0.25;
  }

  .cardHeader {
    text-transform: uppercase;
    position: relative;
    width: max-content;
    font-weight: bold;
    transition: all 0.5s ease;
  }
  .cardHeader::after {
    content: "";
    width: calc(100% + 1rem);
    height: 2.5px;
    transform: translateX(calc(-100% - 1rem));
    background: aqua;
    bottom: -2px;
    left: 0;
    position: absolute;
    opacity: 0;
  }

  .details {
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transform: translateY(95%);
    transition: all 0.5s ease;
  }

  .button {
    background-color: aqua;
    color: black;
    padding: 2.5px 5px;
    width: max-content;
    border-radius: 2.5px;
  }
  .card:hover .details {
    transform: translateY(0%);
    transition-delay: 0.5s;
  }
  .card:hover .cardHeader::after {
    transform: translateX(-1rem);
    transition: 0.5s ease;
    opacity: 1;
  }
  .card:hover {
    transform: scale(1.1);
    border-radius: 15px;
  }`;
const About = () => {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);
  const [expandedVision, setExpandedVision] = useState<number | null>(0);
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  const visions2 = [
    {
      title: "定位",
      description: `具身智能技术创新${"\n"}与行业应用引领者`,
      icon: Target
    },
    {
      title: "愿景",
      description: `通过机器人与AI${"\n"}创造更加美好的生活`,
      icon: Orbit
    }, {
      title: "价值",
      description: `为客户创造价值！${"\n"}专业诚信，求实进取${"\n"}持续创新，合作共赢`,
      icon: HeartHandshake
    },
  ]
  const visions = [
    {
      title: "企业愿景",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      description: "成为全球领先的具身智能技术创新企业，让智能机器人走进千家万户"
    },
    {
      title: "企业使命",
      image: "https://img.fengxuan.cn/yunshenchu/20251026-133830.jpg",
      description: "通过技术创新推动人类社会进步，为各行各业提供智能化解决方案"
    },
    {
      title: "核心价值观",
      image: "https://img.fengxuan.cn/yunshenchu/20251026-133924.webp",
      description: "创新、专业、协作、共赢 - 以客户为中心，持续创造价值"
    },
  ];

  const honors = [
    "国家高新技术企业",
    "浙江省科技创新企业",
    "中国机器人产业联盟会员",
    "ISO9001质量管理体系认证",
    "多项国家发明专利",
    "行业技术创新奖",
  ];

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
          src="https://img.fengxuan.cn/yunshenchu/r1.mp4"
          title="Applications"
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
            {t('云深处')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">{t('具身智能技术创新与行业应用引领者')}</p>
          <Button
            size="lg"
            onClick={() => { setVideoUrl("https://img.fengxuan.cn/yunshenchu/r1.mp4"); setShowVideo(true) }}
            className="group bg-primary hover:bg-primary/90 shadow-glow"
          >
            <Play className="mr-2 h-5 w-5" />
            {t('观看企业宣传片')}
          </Button>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              {t('公司介绍')}
            </span>
          </h2></div>
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            {t('云深处科技成立于2020年，是一家专注于具身智能技术研发与应用的高新技术企业。我们致力于将人工智能、机器人技术与实际应用场景深度结合，为各行各业提供智能化解决方案。')}
          </p>
          <p>
            {t('公司拥有一支由机器人学、人工智能、机械工程等领域专家组成的研发团队，累计获得10余项国家发明专利。我们的产品已广泛应用于巡检监控、物流运输、安防巡逻、教育科研等多个领域。')}
          </p>
          <p>
            {t('作为行业的创新引领者，云深处始终坚持技术创新和客户至上的理念，不断推动智能机器人技术的发展与应用，为构建智能化社会贡献力量。')}
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      {/* <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-cyber bg-clip-text text-transparent">
                {t('愿景与使命')}
              </span>
            </h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {visions.map((vision, i) => (
              <div
                key={i}
                onMouseEnter={() => setExpandedVision(i)}
                onMouseLeave={() => setExpandedVision(null)}
                className="group cursor-pointer"
              >
                <StyledWrapper image={vision.image} className="flex justify-center items-center">
                  <div className="card">
                    <div className="details">
                      <div className="cardHeader">{vision.title}</div>
                <div className="cardText whitespace-pre">
                        {vision.description}
                      </div>
                    </div>
                  </div>
                </StyledWrapper>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-20 ">
        <div className="mx-auto w-100% relative h-[600px]">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-cyber bg-clip-text text-transparent">
                {t('愿景与使命')}
              </span>
            </h2></div>
          <LightRays
            raysOrigin="top-center"
            raysColor="#fff"
            raysSpeed={1.2}
            lightSpread={0.9}
            rayLength={0.8}
            followMouse={true}
            mouseInfluence={0.5}
            Saturation={2}
            fadeDistance={1.4}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
          <div className="absolute top-[70%] container left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center w-full">
              {visions2.map((vision, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setExpandedVision(i)}
                  onMouseLeave={() => setExpandedVision(null)}
                  className="group cursor-pointer flex flex-col items-center gap-6 justify-start"
                >
                  <div className="flex items-center justify-center mb-4 rounded-full backdrop-blur-md bg-white/5 border border-white/20 ">
                    <vision.icon className="w-4 h-4  text-white ml-6" />
                    <div className="cardHeader text-white px-2 py-2 text-3xl inline-block mr-4">{t(vision.title)}</div>
                  </div>
                  <div className="cardText  mt-4 whitespace-pre text-center">
                    {t(vision.description)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 mx-auto px-6">
        <div style={{ height: '600px', position: 'relative' }}>
          <div className="text-center  animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-cyber bg-clip-text text-transparent">{t('发展历程')}</span></h2></div>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
        </div>
      </section>
      <section className="py-20 bg-card/50 h-[800px]">
        <div className="mx-auto px-6">        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              {t('公司荣誉')}
            </span>
          </h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
            {honors.map((honor, i) => (
              <div className="flex justify-center items-center">
                <div
                  key={i}
                  className=" bg-card border border-primary/20 rounded-xl hover:border-primary transition-all text-center group cursor-pointer h-[250px] w-[490px] flex flex-col justify-center"
                >
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🏆</div>
                  <div className="font-medium text-lg">{t(honor)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 w-full overflow-hidden">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              {t('合作伙伴')}
            </span>
          </h2>
        </div>
        <LogoLoop
          speed={80}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#0D1017"
          ariaLabel="Technology partners"
        />
      </section>

      <Footer />

      <VideoModal
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
        videoUrl={videoUrl}
        title={t('企业宣传片')}
      />
    </div>
  );
};

export default About;
