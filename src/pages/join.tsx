import { Phone, Mail, ShoppingBag, Truck, ExternalLink, Send, Search, ChevronDown, ChevronRight } from 'lucide-react';
import './contact.css'
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import Orb from '@/components/Orb';
import { useState } from 'react';
import ShinyText from '@/components/ShinyText';

const Join = () => {
    const [selectedTab, setSelectedTab] = useState('products');
    const [selectedSubItem, setSelectedSubItem] = useState('智能机器人');
    const [expandedMenus, setExpandedMenus] = useState<string[]>(['products']); // 默认展开第一个菜单

    const toggleMenu = (menuKey: string) => {
        setExpandedMenus(prev =>
            prev.includes(menuKey)
                ? prev.filter(key => key !== menuKey)
                : [...prev, menuKey]
        );
    };

    const handleSubItemClick = (parentKey: string, subItemName: string) => {
        setSelectedTab(parentKey);
        setSelectedSubItem(subItemName);
        // 确保父菜单是展开的
        if (!expandedMenus.includes(parentKey)) {
            setExpandedMenus(prev => [...prev, parentKey]);
        }
    };

    const tabData = {
        products: {
            title: '技术岗位',
            subItems: [
                { name: '算法工程师', description: '负责机器学习算法研发，推动AI技术创新' },
                { name: '软件工程师', description: '开发高质量软件产品，构建稳定技术架构' },
                { name: '硬件工程师', description: '设计创新硬件方案，实现产品技术突破' }
            ]
        },
        applications: {
            title: '业务岗位',
            subItems: [
                { name: '产品经理', description: '规划产品发展方向，打造用户喜爱的产品' },
                { name: '市场专员', description: '拓展市场渠道，提升品牌影响力和市场份额' },
                { name: '销售代表', description: '维护客户关系，实现销售目标和业务增长' }
            ]
        },
        resources: {
            title: '职能岗位',
            subItems: [
                { name: '人力资源', description: '优化人才结构，打造高效团队和企业文化' },
                { name: '财务会计', description: '管理财务风险，支持公司战略决策和发展' },
                { name: '行政助理', description: '协调日常事务，提供高效的行政支持服务' }
            ]
        },
        support: {
            title: '实习岗位',
            subItems: [
                { name: '技术实习生', description: '参与项目开发，在实践中快速成长和学习' },
                { name: '产品实习生', description: '协助产品规划，积累产品设计和管理经验' },
                { name: '运营实习生', description: '支持运营活动，学习市场推广和用户运营' }
            ]
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <section className="relative h-[100vh] min-h-[500px] flex items-center justify-center overflow-hidden flex-grow">
                <ShinyText
                    text="demo version 仅供演示"
                    disabled={false}
                    speed={3}
                    className='custom-class absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-[100] text-xl'
                />
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="pointer-events-auto w-[1000px] h-[800px] flex items-center justify-center">
                        <Orb
                            hoverIntensity={1}
                            rotateOnHover={true}
                            hue={0}
                            forceHoverState={false}
                        />
                    </div>
                </div>
                <div className="absolute top-[250px] z-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-cyber bg-clip-text text-transparent">
                            加入我们
                        </span>
                    </h2>
                </div>
                <div className="absolute w-full max-w-3xl mx-4 top-[350px] z-30" >
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70 z-10" />
                    <input
                        type="text"
                        placeholder="搜索职位"
                        className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/50 focus:bg-white/15 transition-all duration-300 hover:bg-white/15 hover:border-white/40 shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 pointer-events-none" />
                    <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none" />
                </div>
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-transparent to-transparent" />
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
                </div>
                {/* Animated Particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="contact-particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${5 + Math.random() * 10}s`,
                            }}
                        />
                    ))}
                </div>
            </section>
            <div className='absolute top-[500px] w-full  bg-background z-20'>
                {/* 左右布局的标签页组件 */}
                <div className="h-[1100px]  w-full z-20 relative">
                    <div className="h-[300px] px-10 absolute top--20 w-full" >
                        <div className="border-1 h-full w-full boder-primary rounded-3xl relative">
                            <img src="https://img.fengxuan.cn/yunshenchu/042.jpg" alt="" className="h-full w-full object-cover  object-[center_40%]  rounded-3xl brightness-[0.50]" />
                            <span className="absolute bottom-10 right-10  text-white text-2xl font-bold">招聘资讯图片</span>
                        </div>
                    </div>
                    <div className="flex h-[750px] w-full absolute top-[350px]" >
                        {/* 左侧选择栏 */}
                        <div className="w-1/3 p-6">
                            <h3 className="text-xl font-bold text-white mb-6">导航菜单</h3>
                            {/* <div className="flex items-center relative mb-6">
                                <Search className="transform -translate-y-1/2 w-5 h-5 text-white/70 z-10 left-5 top-1/2 absolute" />
                                <input
                                    type="text"
                                    placeholder="搜索产品、应用或资源..."
                                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/50 focus:bg-white/15 transition-all duration-300 hover:bg-white/15 hover:border-white/40 shadow-lg"
                                />
                            </div> */}
                            <div className="space-y-2">
                                {Object.entries(tabData).map(([key, data]) => (
                                    <div key={key} className="border border-white/20 rounded-lg overflow-hidden">
                                        {/* 主菜单项 */}
                                        <button
                                            onClick={() => {
                                                setSelectedTab(key);
                                                toggleMenu(key);
                                            }}
                                            className={`w-full flex items-center justify-between px-4 py-3 transition-all duration-300 ${selectedTab === key
                                                ? 'bg-white/20 text-white'
                                                : 'text-white/70 hover:bg-white/10 hover:text-white'
                                                }`}
                                        >
                                            <span className="font-medium">{data.title}</span>
                                            {expandedMenus.includes(key) ? (
                                                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                                            ) : (
                                                <ChevronRight className="w-4 h-4 transition-transform duration-200" />
                                            )}
                                        </button>

                                        {/* 二级菜单 */}
                                        <div className={`transition-all duration-300 overflow-hidden ${expandedMenus.includes(key) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}>
                                            <div className="bg-white/5 border-t border-white/10">
                                                {data.subItems.map((item, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => handleSubItemClick(key, item.name)}
                                                        className={`w-full text-left px-6 py-2 text-sm transition-all duration-200 border-b border-white/5 last:border-b-0 ${selectedTab === key && selectedSubItem === item.name
                                                                ? 'text-white bg-white/15 border-l-2 border-l-white/60'
                                                                : 'text-white/60 hover:text-white hover:bg-white/10'
                                                            }`}
                                                    >
                                                        <div className="flex items-center space-x-2">
                                                            <div className={`w-1 h-1 rounded-full ${selectedTab === key && selectedSubItem === item.name
                                                                    ? 'bg-white'
                                                                    : 'bg-white/40'
                                                                }`}></div>
                                                            <span>{item.name}</span>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 右侧内容区域 */}
                        <div className="flex-1 p-6">
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                                {selectedSubItem}
                            </h2>
                            <div className="grid gap-4">
                                {/* 显示选中子项的详细信息 */}
                                {(() => {
                                    const currentTabData = tabData[selectedTab as keyof typeof tabData];
                                    const selectedItem = currentTabData.subItems.find(item => item.name === selectedSubItem);

                                    if (selectedItem) {
                                        return (
                                            <div className=" backdrop-blur-sm rounded-lg p-6 ">
                                                <h3 className="text-xl font-semibold text-white mb-4">{selectedItem.name}</h3>
                                                <p className="text-white/80 mb-6 leading-relaxed">{selectedItem.description}</p>

                                                {/* 添加招聘相关内容 */}
                                                <div className="space-y-4">
                                                    <div className="bg-white/5 rounded-lg p-4">
                                                        <h4 className="text-lg font-medium text-white mb-2">岗位要求</h4>
                                                        <ul className="text-white/70 space-y-1">
                                                            <li>• 本科及以上学历，相关专业优先</li>
                                                            <li>• 具备良好的沟通协调能力</li>
                                                            <li>• 有相关工作经验者优先</li>
                                                            <li>• 具备团队合作精神</li>
                                                        </ul>
                                                    </div>

                                                    <div className="bg-white/5 rounded-lg p-4">
                                                        <h4 className="text-lg font-medium text-white mb-2">福利待遇</h4>
                                                        <p className="text-white/70">
                                                            提供具有竞争力的薪资待遇，完善的五险一金，
                                                            年终奖金、带薪年假、培训机会等丰富福利。
                                                        </p>
                                                    </div>

                                                    <div className="flex space-x-4 mt-6">
                                                        <button className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-300 border border-white/30">
                                                            了解更多
                                                        </button>
                                                        <button className="px-6 py-2 bg-primary/80 hover:bg-primary text-white rounded-lg transition-all duration-300">
                                                            立即咨询
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }

                                    // 当没有选中具体岗位时，显示通用招聘信息
                                    return (
                                        <div className=" backdrop-blur-sm rounded-lg p-6">
                                            <h3 className="text-xl font-semibold text-white mb-4">加入我们的团队</h3>
                                            <p className="text-white/80 mb-6 leading-relaxed">
                                                我们正在寻找有才华、有激情的人才加入我们的团队。在这里，您将有机会参与创新项目，
                                                与优秀的同事一起工作，实现个人和职业发展的目标。
                                            </p>

                                            {/* 通用招聘内容 */}
                                            <div className="space-y-4">
                                                <div className="bg-white/5 rounded-lg p-4">
                                                    <h4 className="text-lg font-medium text-white mb-2">我们提供</h4>
                                                    <ul className="text-white/70 space-y-1">
                                                        <li>• 具有竞争力的薪资待遇</li>
                                                        <li>• 完善的培训和发展机会</li>
                                                        <li>• 灵活的工作环境</li>
                                                        <li>• 丰富的员工福利</li>
                                                    </ul>
                                                </div>

                                                <div className="bg-white/5 rounded-lg p-4">
                                                    <h4 className="text-lg font-medium text-white mb-2">我们寻找</h4>
                                                    <p className="text-white/70">
                                                        具有创新思维、团队合作精神和持续学习能力的人才。
                                                        无论您是经验丰富的专业人士还是充满潜力的新人，
                                                        我们都欢迎您的加入。
                                                    </p>
                                                </div>

                                                <div className="flex space-x-4 mt-6">
                                                    <button className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-300 border border-white/30">
                                                        查看所有职位
                                                    </button>
                                                    <button className="px-6 py-2 bg-primary/80 hover:bg-primary text-white rounded-lg transition-all duration-300">
                                                        投递简历
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })()}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Join;
