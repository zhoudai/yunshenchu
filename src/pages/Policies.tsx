import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShinyText from '@/components/ShinyText';

const Policies = () => {
  const [activeTab, setActiveTab] = useState("shipping");

  const tabs = [
    { id: "shipping", name: "配送、售货及保修政策" },
    { id: "privacy", name: "隐私条款" },
    { id: "disclaimer", name: "免责声明" },
  ];

  const content = {
    shipping: `
      <h3 class="text-2xl font-bold mb-4">配送政策</h3>
      <p class="mb-4">我们提供全国范围内的配送服务，标准配送时间为3-7个工作日。</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-8">售后服务</h3>
      <p class="mb-4">我们为所有产品提供完善的售后服务支持，包括技术咨询、维修保养等。</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-8">保修政策</h3>
      <p class="mb-4">所有产品享有12个月质保期，质保期内免费维修。人为损坏不在保修范围内。</p>
      <ul class="list-disc list-inside space-y-2 text-muted-foreground">
        <li>机械部件保修12个月</li>
        <li>电子部件保修12个月</li>
        <li>电池保修6个月</li>
        <li>提供终身技术支持</li>
      </ul>
    `,
    privacy: `
      <h3 class="text-2xl font-bold mb-4">隐私保护</h3>
      <p class="mb-4">我们高度重视用户隐私保护，严格遵守相关法律法规。</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-8">信息收集</h3>
      <p class="mb-4">我们仅收集必要的用户信息用于提供服务，不会将信息用于其他用途。</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-8">信息使用</h3>
      <ul class="list-disc list-inside space-y-2 text-muted-foreground">
        <li>提供产品和服务</li>
        <li>改进用户体验</li>
        <li>发送重要通知</li>
        <li>遵守法律要求</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 mt-8">信息保护</h3>
      <p class="mb-4">我们采用行业标准的安全措施保护用户信息，防止未经授权的访问、使用或披露。</p>
    `,
    disclaimer: `
      <h3 class="text-2xl font-bold mb-4">免责声明</h3>
      <p class="mb-4">使用我们的产品和服务即表示您同意以下条款：</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-8">产品使用</h3>
      <ul class="list-disc list-inside space-y-2 text-muted-foreground">
        <li>用户应按照产品说明书正确使用产品</li>
        <li>不当使用造成的损失由用户自行承担</li>
        <li>禁止将产品用于非法用途</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 mt-8">责任限制</h3>
      <p class="mb-4">在法律允许的范围内，我们不对以下情况承担责任：</p>
      <ul class="list-disc list-inside space-y-2 text-muted-foreground">
        <li>不可抗力因素造成的损失</li>
        <li>用户违规操作造成的损失</li>
        <li>第三方原因造成的损失</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 mt-8">争议解决</h3>
      <p class="mb-4">如有争议，双方应友好协商解决。协商不成的，可提交至我公司所在地人民法院诉讼解决。</p>
    `,
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
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
          alt="Policies"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent">
            政策与条款
          </h1>
          <p className="text-xl text-muted-foreground">了解我们的服务条款和政策</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-6 rounded-lg font-medium transition-all text-center ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-card border border-primary/20 text-foreground hover:border-primary"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-8 bg-card border border-primary/20 rounded-lg">
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: content[activeTab as keyof typeof content] }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Policies;
