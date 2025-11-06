import { Code2, Database, Network, Sparkles } from "lucide-react";

const technologies = [
  { icon: Code2, label: "先进算法" },
  { icon: Database, label: "大数据处理" },
  { icon: Network, label: "物联网集成" },
  { icon: Sparkles, label: "自主学习" }
];

const TechSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Tech Stack */}
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-cyber bg-clip-text text-transparent">
                技术领先
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              融合前沿AI技术与工业级硬件设计，构建稳定可靠的智能机器人平台。从感知到决策，从执行到反馈，全链路技术自主研发。
            </p>

            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <tech.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground">{tech.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {[
                { metric: "20ms", label: "响应延迟", gradient: "from-primary/20 to-primary/5" },
                { metric: "360°", label: "环境感知", gradient: "from-secondary/20 to-secondary/5" },
                { metric: "24/7", label: "持续运行", gradient: "from-primary/20 to-primary/5" },
                { metric: "100+", label: "应用场景", gradient: "from-secondary/20 to-secondary/5" }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl bg-gradient-to-br ${item.gradient} backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all hover:scale-105 animate-slide-up`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="text-5xl font-bold text-primary mb-3">{item.metric}</div>
                  <div className="text-sm text-muted-foreground font-medium">{item.label}</div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full blur-2xl" />
                </div>
              ))}
            </div>

            {/* Floating glow effect */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-glow-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
