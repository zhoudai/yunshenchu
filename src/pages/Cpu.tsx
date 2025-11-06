import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShinyText from '@/components/ShinyText';

const Cpu = () => {
    const [activeTab, setActiveTab] = useState("firmware");
    const tabs = [
        { id: "firmware", name: "控制器固件" },
        { id: "drivers", name: "驱动与工具" },
        { id: "docs", name: "开发文档" },
        { id: "resources", name: "常用资源" },
    ];
    const downloads = {
    };
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            {/* Hero Section */}
            <section className="relative h-96 flex items-center justify-center overflow-hidden">
                    <ShinyText
      text="demo version 仅供演示"
      disabled={false}
      speed={3}
      className='custom-class absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-[100] text-xl'
    />
                <img
                    src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356"
                    alt="Downloads"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
                <div className="relative z-10 text-center">
                    <h1 className="text-6xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent">
                        技术中心
                    </h1>
                    <p className="text-xl text-muted-foreground">专业技术支持，专业技术文档，专业售后支持</p>
                </div>
            </section>
            {/* Content Section */}
            <section className="py-20 container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Tabs */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`p-4 rounded-lg font-medium transition-all ${activeTab === tab.id
                                        ? "bg-primary text-primary-foreground shadow-glow"
                                        : "bg-card border border-primary/20 text-foreground hover:border-primary"
                                    }`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>
                    {/* Downloads List */}
                    <div className="space-y-4">
                        {downloads[activeTab as keyof typeof downloads]?.map((file, i) => (
                            <div
                                key={i}
                                className="p-6 bg-card border border-primary/20 rounded-lg hover:border-primary transition-all group"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex gap-4 flex-1">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                                <FileText className="h-6 w-6 text-primary" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                                                {file.name}
                                            </h3>
                                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                                <span>版本: {file.version}</span>
                                                <span>日期: {file.date}</span>
                                                <span>大小: {file.size}</span>
                                                <span className="px-2 py-0.5 bg-primary/10 text-primary rounded">
                                                    {file.type}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="flex-shrink-0 bg-primary hover:bg-primary/90">
                                        <Download className="mr-2 h-4 w-4" />
                                        下载
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Cpu;
