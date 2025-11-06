import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Factory, Users, Building2, Globe2, Headset, Cpu, Bot, Package, Heart, GraduationCap, FileText, Shield, HelpCircle, Download, MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import ConsultModal from "./ConsultModal";
import logo from "@/assets/logo.png";
import '@/i18n'; // 引入 i18n 配置
import { useTranslation } from 'react-i18next'; // 引入 useTranslation hook
const navItems = [
  { name: "首页", path: "/" },
  {
    name: "产品中心",
    path: "/products",
    subItems: [
      { name: "人型机器人", path: "/products", description: "DR-01", icon: Bot, imgSrc: "https://www.deeprobotics.cn/public/static/robot/images/nav_hum.png" },
      { name: "人型机器人", path: "/products", description: "DR-01", icon: Bot, imgSrc: "https://www.deeprobotics.cn/public/static/robot/images/nav_hum.png" },
      { name: "人型机器人", path: "/products", description: "DR-01", icon: Bot, imgSrc: "https://www.deeprobotics.cn/public/static/robot/images/nav_hum.png" },
      { name: "人型机器人", path: "/products", description: "DR-01", icon: Bot, imgSrc: "https://www.deeprobotics.cn/public/static/robot/images/nav_hum.png" },
    ]
  },
  {
    name: "行业应用",
    path: "/applications",
    subItems: [
      { name: "智能制造", path: "/applications", description: "工业4.0自动化", icon: Factory },
      { name: "智慧物流", path: "/applications", description: "仓储物流解决方案", icon: Package },
      { name: "医疗健康", path: "/applications", description: "医疗辅助与康复", icon: Heart },
      { name: "教育科研", path: "/applications", description: "教学与实验平台", icon: GraduationCap },
    ]
  },
  {
    name: "服务支持",
    path: "/support",
    subItems: [
      { name: "技术中心", path: "/cpu", description: "专业技术支持", icon: Cpu },
      { name: "文档中心", path: "/documentation", description: "专业技术文档", icon: FileText },
      { name: "帮助中心", path: "/help", description: "专业售后支持", icon: HelpCircle },
      { name: "下载中心", path: "/downloads", description: "资料与软件下载", icon: Download },
      { name: "政策与条款", path: "/policies", description: "专业售后支持法律条款与政策", icon: Shield },

    ]
  },
  {
    name: "资源中心",
    path: "/resources",
  },
  {
    name: "新闻资讯",
    path: "/news"
  },
  {
    name: "关于云深处",
    path: "/about",
  },
  {
    name: "加入我们",
    path: "/join",
  },
];

// 顶部导航在窄屏时显示的图标映射
const topNavIcons: Record<string, React.ElementType> = {
  "首页": Globe2,
  "产品中心": Package,
  "行业应用": Building2,
  "服务支持": Headset,
  "资源中心": FileText,
  "新闻资讯": Users,
  "关于云深处": Users,
  "加入我们": GraduationCap,
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [openMobileMenus, setOpenMobileMenus] = useState<Record<string, boolean>>({});
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  // 宽度小于 1024 时，用点击展开替代 hover；宽度小于 1500 时隐藏文本显示图标
  const [isHoverMode, setIsHoverMode] = useState(true);
  const [isVeryWide, setIsVeryWide] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const { t, i18n } = useTranslation(); // 获取翻译函数和 i18n 对象
  const changeLanguage = (lang) => {
    console.log(lang);
    i18n.changeLanguage(lang); // 切换语言
    console.log('当前语言:', i18n.language);
  };
  useEffect(() => {
    const updateHoverMode = () => setIsHoverMode(window.innerWidth >= 1024);
    const updateVeryWide = () => setIsVeryWide(window.innerWidth >= 1500);
    updateHoverMode();
    updateVeryWide();
    window.addEventListener('resize', updateHoverMode);
    window.addEventListener('resize', updateVeryWide);
    return () => {
      window.removeEventListener('resize', updateHoverMode);
      window.removeEventListener('resize', updateVeryWide);
    };
  }, []);
  // 检查父菜单是否应该高亮（当前路径匹配父菜单或其子菜单）
  const isParentActive = (item: typeof navItems[0]) => {
    if (location.pathname === item.path) return true;
    if (item.subItems) {
      return item.subItems.some(subItem => location.pathname === subItem.path);
    }
    return false;
  };

  const handleMenuEnter = (menuName: string | null) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setActiveMenu(menuName);
  };

  const handleMenuLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 150); // 150ms延迟，避免鼠标快速移动时菜单闪烁
    setCloseTimeout(timeout);
  };

  const handleCloseMenu = () => {
    setActiveMenu(null);
  };
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/10">
      <div className="w-full mx-auto">
        <div className="flex items-center justify-between px-4  md:px-8 h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt={t('RoboTech Logo')} className="h-10 w-40" />
            <span className="text-2xl font-bold bg-gradient-cyber bg-clip-text text-transparent mx-[20px]" >
              {t('TOUCH FUTURE')}
            </span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden 2xl:flex items-center justify-around rounded-full backdrop-blur-md bg-white/5 leading-[0.4] w-[1000px]">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={isHoverMode && item.subItems ? () => handleMenuEnter(item.name) : undefined}
                onMouseLeave={isHoverMode && item.subItems ? () => handleMenuLeave() : undefined}
              >
                {item.subItems ? (
                  <div
                    className={cn(
                      "px-4 py-2 rounded-md transition-all duration-300 flex items-center gap-1 cursor-pointer",
                      "text-sm font-medium",
                      activeMenu === item.name || isParentActive(item)
                        ? "text-primary bg-white/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    )}
                    onClick={!isHoverMode ? () => setActiveMenu(activeMenu === item.name ? null : item.name) : undefined}
                  >
                    {(() => {
                      const IconComp = topNavIcons[item.name];
                      return isVeryWide || !IconComp ? t(item.name) : <IconComp className="w-4 h-4" />;
                    })()}
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      activeMenu === item.name && "rotate-180"
                    )} />
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={cn(
                      "px-4 py-2 rounded-md transition-all duration-300",
                      "text-sm font-medium",
                      isActive(item.path)
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    )}
                  >
                    {(() => {
                      const IconComp = topNavIcons[item.name];
                      return isVeryWide || !IconComp ? t(item.name) : <IconComp className="w-4 h-4" />;
                    })()}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="hidden 2xl:flex items-center gap-4">
            <div
              className="flex items-center gap-2 3xl:border border-primary rounded-md box-border shadow-glow cursor-pointer "
              onClick={() => setIsConsultModalOpen(true)}
            >
              <MessageCircleMore className="h-5 w-5 ml-2" />
              <Button className="hidden 3xl:flex bg-primary hover:bg-primary/90 rounded" style={{ height: "30px" }}>
                {t('在线咨询')} 
              </Button>
            </div> 
            <div className="flex items-center gap-2 border border-primary rounded-md box-border" onClick={() => { navigate("/contact") }}>
              <Button className="bg-transparent hover:bg-primary/10 text-white shadow-glow rounded" style={{ height: "30px" }}>
                {t('联系我们')}
              </Button>
            </div>
            <button className="flex items-center gap-2 p-2 rounded-md " disabled onClick={() => changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}>
              <Globe2 className="w-5 h-5" />
              <span className="hidden 3xl:flex">{t('EN / 中文')}</span>
            </button>
          </div>

          {/* Mega Menu Dropdown */}
          {activeMenu && (
            <>
              <div
                onMouseEnter={() => handleMenuEnter(activeMenu)}
                onMouseLeave={() => handleMenuLeave()}
                key={activeMenu} // 添加key来强制重新渲染，避免叠加
                className="fixed left-0 right-0 top-20 z-40 animate-fade-in"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-background/98 via-background/95 to-background/90 backdrop-blur-2xl">
                  {/* Scanning line effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                  <div className="container mx-auto px-4 py-8">
                    <div
                      className="grid gap-4"
                      style={{
                        gridTemplateColumns: `repeat(${navItems.find(item => item.name === activeMenu)?.subItems?.length ?? 4}, minmax(0, 1fr))`,
                      }}
                    >
                      {navItems
                        .find(item => item.name === activeMenu)
                        ?.subItems?.map((subItem, index) => {
                          const Icon = subItem.icon;
                          return (

                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={cn(
                                "group relative p-6 rounded-xl overflow-hidden",
                                "bg-gradient-to-br from-white/5 via-transparent to-transparent",
                                "border border-white/10",
                                "hover:border-primary/50 hover:from-primary/10 hover:to-accent/5",
                                "transition-all duration-500",
                                "animate-scale-in"
                              )}
                              style={{ animationDelay: `${index * 50}ms`, zIndex: 100 }}
                              onClick={() => setActiveMenu(null)}
                            >
                              {/* 80% 透明蒙版 - 覆盖整个子菜单方块 */}
                              <div className="absolute inset-0 bg-black/80 z-10 opacity-0 opacity-100 transition-opacity duration-300" />

                              {/* Glow effect on hover */}
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 blur-xl" />
                              </div>

                              <div className="relative z-20 flex justify-between">
                                <div>
                                  {/* Icon with glow */}
                                  <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 group-hover:shadow-glow-strong transition-all duration-300 group-hover:scale-110">
                                    {Icon && <Icon className="w-6 h-6 text-primary" />}
                                  </div>

                                  {/* Title */}
                                  <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                                    {t(subItem.name)}
                                  </h3>

                                  {/* Description */}
                                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                    {t(subItem.description)}
                                  </p>
                                </div>
                                {subItem?.imgSrc &&
                                  <div>
                                    <img src={subItem.imgSrc} alt={t(subItem.name)} className="w-32 h-32 " />
                                  </div>
                                }
                              </div>

                              {/* Corner accent */}
                              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
                            </Link>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="2xl:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="py-4 space-y-2 animate-fade-in bg-background/95 backdrop-blur-md border-t border-primary/20">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.subItems ? (
                  <button
                    type="button"
                    onClick={() => setOpenMobileMenus(prev => ({ ...prev, [item.name]: !prev[item.name] }))}
                    className={cn(
                      "flex w-full items-center justify-between px-4 py-3 rounded-md transition-all",
                      openMobileMenus[item.name]
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    )}
                  >
                    {t(item.name)}
                    <ChevronDown className={cn("w-4 h-4 transition-transform", openMobileMenus[item.name] && "rotate-180")} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-md transition-all",
                      isActive(item.path)
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    )}
                  >
                    {t(item.name)}
                  </Link>
                )}
                {item.subItems && openMobileMenus[item.name] && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm rounded-md text-muted-foreground hover:bg-white/5 hover:text-foreground transition-all"
                      >
                        {t(subItem.name)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Mobile Actions */}
            <div className="px-4 mt-4 grid grid-cols-3 gap-3">
              <Button className="bg-primary hover:bg-primary/90" onClick={() => setIsConsultModalOpen(true)}>
                {t('在线咨询')}
              </Button>
              <Button variant="outline" className="border-primary/50 hover:border-primary" onClick={() => navigate('/contact')}>
                {t('联系我们')}
              </Button>
              <Button variant="outline" className="col-span-1  border-primary/50 hover:border-primary text-white" onClick={() => changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}>
                {t('EN / 中文')}
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* 咨询Modal */}
      <ConsultModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
      />
    </nav>
  );
};
export default Navbar;