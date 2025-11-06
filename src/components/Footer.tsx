import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt={t('RoboTech Logo')} className="h-8" />
              <span className="text-xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
                {t('TOUCH FUTURE')}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('具身智能技术创新与行业应用引领者')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">{t('快速链接')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('首页')}
                </a>
              </li>
              <li>
                <a href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('产品中心')}
                </a>
              </li>
              <li>
                <a href="/applications" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('行业应用')}
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('关于云深处')}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">{t('服务支持')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('资源中心')}
                </a>
              </li>
              <li>
                <a href="/policies" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('政策与条款')}
                </a>
              </li>
              <li>
                <a href="/downloads" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('下载中心')}
                </a>
              </li>
              <li>
                <a href="/news" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('新闻资讯')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">{t('联系我们')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{t('杭州市余杭区文一西路1818号')}</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">400-123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">contact@touchfuture.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {t('© 2024 云深处科技. All rights reserved.')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
