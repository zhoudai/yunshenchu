import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const news = [
  {
    title: "云深处科技发布新一代人形机器人",
    date: "2024-03-15",
    category: "产品发布",
    image: "https://img.fengxuan.cn/yunshenchu/016.jpg",
    featured: true,
  },
  {
    title: "智能巡检机器人助力工业4.0升级",
    date: "2024-03-10",
    category: "行业应用",
    image: "https://img.fengxuan.cn/yunshenchu/017.jpg",
    tall: true,
  },
  {
    title: "公司获得新一轮战略投资",
    date: "2024-03-05",
    category: "公司动态",
    image: "https://img.fengxuan.cn/yunshenchu/018.jpg",

  },
  {
    title: "AI技术赋能机器人产业新突破",
    date: "2024-02-28",
    category: "技术创新",
    image: "https://img.fengxuan.cn/yunshenchu/019.jpg",

  },
  {
    title: "云深处参展全球机器人峰会",
    date: "2024-02-20",
    category: "展会活动",
    image: "https://img.fengxuan.cn/yunshenchu/20251026-133908.png",
    featured: true,
  },
  {
    title: "机器人助力智慧城市建设",
    date: "2024-02-15",
    category: "应用案例",
    image: "https://img.fengxuan.cn/yunshenchu/20251026-133851.png",
    featured: true,
  },
];

const LatestNews = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 relative bg-gradient-to-b from-background via-card/30 to-background">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center mb-16 animate-fade-in">
             <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-cyber bg-clip-text text-transparent">
                {t('最新资讯')}</span>
            </h2>
            <div className="text-center">
              <p className="text-xl text-muted-foreground">
                {t('了解云深处最新动态与行业资讯')}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 auto-rows-[160px] gap-4">
          {news.map((item, index) => {
            const getGridClass = () => {
              if (item.featured) return 'md:col-span-2 md:row-span-2';
              if (item.tall) return 'md:row-span-2';
              if (item.wide) return 'md:col-span-2';
              return '';
            };

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card via-card to-card/50 border border-primary/20 transition-all duration-700 hover:border-primary hover:shadow-glow-strong backdrop-blur-sm hover:scale-[1.02] ${getGridClass()}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Tech Grid Background */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }} />
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),hsl(var(--primary)/0.15),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-full z-10">
                  {/* Visual Layer */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      loading="lazy"
                      src={item.image}
                      alt={t(item.title)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />

                    {/* Scan Line Effect */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    </div>

                    {/* Corner Frame */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-primary/90 backdrop-blur-md text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-glow border border-primary/30">
                      {t(item.category)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-20 p-5 h-full flex flex-col justify-end">
                    <h3 className={`font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 ${item.featured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`}>
                      {t(item.title)}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-3.5 w-3.5" />
                      <span className="text-xs">{item.date}</span>
                    </div>
                    <div className="mt-3 inline-flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                      <span>{t('阅读详情')}</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Holographic Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All Link */}
        <div className="md:hidden mt-8 text-center">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all group"
          >
            <span className="font-medium">{t('查看全部资讯')}</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
