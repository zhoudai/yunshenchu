import PartnerScroll from './PartnerScroll';
import LogoLoop from './LogoLoop';
import { useTranslation } from 'react-i18next';


const Partners = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 relative overflow-hidden bg-card/30">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              {t('合作伙伴')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('携手行业领军企业，共创智能未来')}
          </p>
        </div>
        <div className="w-full overflow-hidden">
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
        </div>
        {/* Stats Below Partners */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { value: "50+", label: t('合作企业') },
            { value: "100+", label: t('项目落地') },
            { value: "20+", label: t('行业覆盖') },
            { value: "98%", label: t('客户满意度') }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card/50 border border-primary/20 animate-slide-up hover:border-primary transition-all hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
