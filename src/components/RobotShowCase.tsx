import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { motion } from 'framer-motion';
import TechFrame from "@/components/TechFrame";
import MagicBento from './MagicBento'
import { useTranslation } from 'react-i18next';
interface ComponentInfo {
    id: string;
    name: string;
    title: string;
    description: string;
    specs: string[];
    position: { top: string; left: string };
    border: {
        top: string;
        left: string;
    },
}
const textVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: {
        opacity: 1,
        width: "auto",
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.1
        }
    },
};
const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const components: ComponentInfo[] = [
    {
        id: "legs",
        name: "平衡移动系统",
        title: "智能行走模块",
        description: "动态平衡算法配合高精度电机，实现平稳的双足行走和复杂地形适应",
        specs: ["动态平衡控制", "自适应步态", "障碍物规避", "爬坡能力"],
        position: { top: "75%", left: "50%" },
        border: {
            left: '400px',
            top: '450px'
        },
    },
    {
        id: "base",
        name: "能源管理系统",
        title: "动力供应模块",
        description: "高效能源管理系统，支持快速充电和长时间续航",
        specs: ["智能电池管理", "8小时续航", "快充支持", "能耗优化"],
        position: { top: "25%", left: "50%" },
        border: {
            left: '400px',
            top: '80px'
        },
    },
    {
        id: "head",
        name: "智能视觉系统",
        title: "AI视觉识别模块",
        description: "配备高精度摄像头和先进的AI算法，实现360度环境感知和物体识别",
        specs: ["4K高清摄像头", "实时物体检测", "面部识别技术", "夜视功能"],
        position: { top: "36%", left: "32%" },
        border: {
            left: '100px',
            top: '150px'
        },
    },
];
const RobotShowcase = () => {
    const [selectedComponent, setSelectedComponent] = useState<ComponentInfo | null>(null);
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const { t } = useTranslation();
    return (
        <div className="min-h-[800px]  relative overflow-hidden mt-32" >
            {/* Animated grid background */}
            <div className="absolute inset-0 tech-grid opacity-30" />
            <div className="container mx-auto px-4 py-12 relative z-10">
                {/* Header */}
                <div className="text-center  animate-fade-in">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {t('智能机器人系统')}
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        {t('点击各组件了解详细功能')}
                    </p>
                </div>

                {/* Robot Display */}
                <div className="relative max-w-3xl mx-auto h-[600px] mt-12">
                    <div className="relative aspect-video flex items-center justify-center overflow-hidden rounded-3xl w-full h-full">
                        <img
                            className="w-[500px] h-[500px] object-contain"
                            src="https://img.fengxuan.cn/yunshenchu/lite_04p.png"
                            alt={t('Robot')}
                        />
                        {components.map((component) => (
                            <button
                                key={component.id}
                                className={`absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full 
                  border-2 border-primary bg-primary/20 backdrop-blur-sm
                  transition-all duration-300 hover:scale-125 hover:bg-primary/40
                  ${hoveredId === component.id ? 'pulse-glow scale-125' : 'glow'}
                  ${selectedComponent?.id === component.id ? 'bg-primary/60 scale-150' : ''}`}
                                style={{ top: component.position.top, left: component.position.left }}
                                onClick={() => setSelectedComponent(component)}
                                onMouseEnter={() => setHoveredId(component.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <div className="absolute inset-0 rounded-full bg-primary/50 animate-ping" />
                                <div className="relative w-full h-full rounded-full" />
                            </button>
                        ))}
                    </div>

                    {/* Component name tooltip with dashed line */}
                    {hoveredId && !selectedComponent && (() => {
                        const component = components.find(c => c.id === hoveredId);
                        if (!component) return null;

                        return (
                            <div
                                className="absolute animate-fade-in pointer-events-none z-10"
                                style={{
                                    top: component.border.top,
                                    left: component.border.left,
                                }}
                            >
                                <motion.div
                                    className="relative bg-card/90 backdrop-blur-sm border border-primary/30 rounded-lg px-4 py-3 shadow-lg"
                                    style={{ display: 'inline-block', position: 'relative', marginTop: '10px' }}
                                    initial="hidden"
                                    animate="visible"
                                    variants={textVariants}
                                >
                                    {/* 科技感边框装饰 */}
                                    <div className="absolute inset-0 rounded-lg border-2 border-primary/20 animate-pulse" />
                                    <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-primary rounded-tl-lg" />
                                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary rounded-tr-lg" />
                                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-primary rounded-bl-lg" />
                                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-primary rounded-br-lg" />

                                    {/* 扫描线效果 */}
                                    <div className="absolute inset-0 overflow-hidden rounded-lg">
                                        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-scan-line" />
                                    </div>

                                    {/* 文字内容 */}
                                    <div className="relative z-10">
                                        {t(component.name).split('').map((char, index) => (
                                            <motion.span
                                                key={index}
                                                variants={letterVariants}
                                                style={{ display: 'inline-block' }}
                                                className="text-primary font-medium glow-text"
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })()}
                </div>

                {/* Component Info Panel */}
                {selectedComponent && (
                    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
                        <Card className="max-w-2xl w-full bg-card border-primary glow-strong p-8 relative animate-slide-in-right">
                            <button
                                onClick={() => setSelectedComponent(null)}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="space-y-6">
                                <div>
                                    <Badge className="mb-2 bg-primary/20 text-primary border-primary">
                                        {t(selectedComponent.name)}
                                    </Badge>
                                    <h2 className="text-3xl font-bold text-foreground">
                                        {t(selectedComponent.title)}
                                    </h2>
                                </div>

                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {t(selectedComponent.description)}
                                </p>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-primary">{t('技术规格')}</h3>
                                    <ul className="space-y-2">
                                        {selectedComponent.specs.map((spec, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center gap-3 text-foreground"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent glow" />
                                                {t(spec)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </div>
                )}
            </div>

        </div >
    );
};
export default RobotShowcase;
