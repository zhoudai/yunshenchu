import { Zap, Factory, AlertTriangle, Shield, Film, GraduationCap } from 'lucide-react';

export interface Application {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  icon: any;
  problems: string[];
  solutions: string[];
  benefits: string[];
  recommendedProducts: string[];
  caseStudies: {
    title: string;
    description: string;
    metrics: { label: string; value: string }[];
  }[];
}

export const applications: Application[] = [
  {
    id: 'power',
    title: '电力巡检',
    description: '为电力行业提供智能化巡检解决方案，提升安全性和效率',
    fullDescription: '云深处机器人电力巡检解决方案，采用AI视觉识别、红外测温、局放检测等多种技术，能够24小时不间断巡检，及时发现设备缺陷和安全隐患。系统支持自主导航、自动充电、数据自动上传，大幅降低人工巡检强度和安全风险。',
    image: '/src/assets/app-power.jpg',
    icon: Zap,
    problems: [
      '人工巡检效率低，覆盖不全面',
      '恶劣天气和危险环境下巡检困难',
      '人员安全风险高',
      '缺陷发现不及时，处理滞后',
      '巡检数据管理困难',
    ],
    solutions: [
      '24小时全天候自主巡检',
      'AI视觉识别设备异常',
      '红外测温检测热缺陷',
      '局放检测发现早期故障',
      '自主充电无需人工干预',
      '数据实时上传云平台分析',
    ],
    benefits: [
      '巡检效率提升300%',
      '人工成本降低70%',
      '缺陷发现率提高90%',
      '安全事故率下降95%',
    ],
    recommendedProducts: ['x30', 'lite3', 'm20'],
    caseStudies: [
      {
        title: '某省电力公司变电站巡检',
        description: '部署20台X30四足机器人，覆盖50个变电站，实现24小时无人化巡检',
        metrics: [
          { label: '巡检效率提升', value: '350%' },
          { label: '人工成本降低', value: '75%' },
          { label: '缺陷识别准确率', value: '98%' },
        ],
      },
    ],
  },
  {
    id: 'industrial',
    title: '工业巡检',
    description: '为制造业提供智能巡检和数据采集服务',
    fullDescription: '工业巡检解决方案涵盖生产车间、仓储物流、设备维护等多个场景。机器人搭载多种传感器，可进行设备运行状态监测、环境参数采集、安全隐患排查。通过数字孪生技术，构建工厂三维模型，实现生产过程可视化管理。',
    image: '/src/assets/app-industrial.jpg',
    icon: Factory,
    problems: [
      '生产环境复杂多变',
      '设备故障预测困难',
      '人工巡检盲区多',
      '数据采集不完整',
      '巡检标准不统一',
    ],
    solutions: [
      '全工况环境适应',
      '设备状态实时监测',
      '360度全方位巡检',
      '多维数据自动采集',
      '标准化巡检流程',
      '故障预测性维护',
    ],
    benefits: [
      '设备故障率降低60%',
      '巡检覆盖率提升至100%',
      '维护成本降低50%',
      '生产效率提升25%',
    ],
    recommendedProducts: ['m20', 'lite3', 'x30'],
    caseStudies: [
      {
        title: '某汽车制造厂智能巡检',
        description: '部署M20轮腿机器人进行产线巡检和物料搬运',
        metrics: [
          { label: '巡检时间缩短', value: '80%' },
          { label: '设备利用率提升', value: '30%' },
          { label: '维护响应速度', value: '5分钟内' },
        ],
      },
    ],
  },
  {
    id: 'rescue',
    title: '应急救援',
    description: '在灾害现场提供侦查、搜救和物资运送支持',
    fullDescription: '应急救援解决方案专为灾害和危险环境设计。机器人具备强大的地形适应能力，可在废墟、洪水、火灾等极端环境中作业。搭载生命探测、气体检测、高清图传等设备，为救援决策提供第一手信息，同时可运送救援物资，提高救援成功率。',
    image: '/src/assets/app-power.jpg',
    icon: AlertTriangle,
    problems: [
      '灾害现场环境危险',
      '救援人员生命安全威胁',
      '信息获取困难',
      '救援效率低',
      '夜间作业困难',
    ],
    solutions: [
      '极端环境作业能力',
      '生命体征探测',
      '有毒气体检测',
      '高清视频回传',
      '夜视和热成像',
      '物资运送支持',
    ],
    benefits: [
      '救援响应时间缩短70%',
      '救援人员零伤亡',
      '幸存者发现率提高80%',
      '救援成功率提升60%',
    ],
    recommendedProducts: ['x30', 'm20', 'dr02'],
    caseStudies: [
      {
        title: '地震灾区应急救援',
        description: '部署X30机器人进行废墟搜救和物资运送',
        metrics: [
          { label: '搜救覆盖面积', value: '50000㎡' },
          { label: '幸存者发现', value: '15人' },
          { label: '物资运送', value: '500kg' },
        ],
      },
    ],
  },
  {
    id: 'security',
    title: '安防巡逻',
    description: '为园区、社区提供智能安防巡逻服务',
    fullDescription: '智能安防巡逻系统采用AI视频分析、人脸识别、行为分析等技术，实现24小时不间断巡逻。机器人可自主规划路线、识别异常事件、实时报警，与现有安防系统无缝对接。支持远程遥操作，遇紧急情况可人工接管处置。',
    image: '/src/assets/app-industrial.jpg',
    icon: Shield,
    problems: [
      '人工巡逻覆盖不全',
      '夜间巡逻安全风险',
      '异常事件响应慢',
      '取证困难',
      '成本高昂',
    ],
    solutions: [
      '24小时自主巡逻',
      '多点同时监控',
      'AI异常行为识别',
      '人脸识别比对',
      '实时报警推送',
      '高清视频取证',
    ],
    benefits: [
      '巡逻覆盖率提升至100%',
      '异常事件响应时间缩短90%',
      '安防成本降低60%',
      '案件侦破率提升40%',
    ],
    recommendedProducts: ['m20', 'lite3', 'dr02'],
    caseStudies: [
      {
        title: '某科技园区智能巡逻',
        description: '部署8台M20机器人进行24小时巡逻',
        metrics: [
          { label: '巡逻覆盖面积', value: '100万㎡' },
          { label: '异常事件识别', value: '98%准确率' },
          { label: '人工成本节省', value: '65%' },
        ],
      },
    ],
  },
  {
    id: 'entertainment',
    title: '娱乐传媒',
    description: '为影视制作和活动提供机器人演员和拍摄支持',
    fullDescription: '娱乐传媒解决方案让机器人成为舞台和银幕上的新星。DR02人形机器人可进行舞蹈表演、互动演出，四足机器人可模拟动物行为。配备专业运动捕捉系统，支持动作编排和录制。可用于影视拍摄、商业演出、主题公园等场景。',
    image: '/src/assets/hero-robots.jpg',
    icon: Film,
    problems: [
      '危险动作拍摄风险高',
      '演员档期协调困难',
      '特效制作成本高',
      '互动体验单一',
      '可重复性差',
    ],
    solutions: [
      '高难度动作表演',
      '7×24小时待命',
      '精准动作重复',
      '多机器人协同',
      '实时互动响应',
      '动作捕捉编排',
    ],
    benefits: [
      '拍摄周期缩短50%',
      '制作成本降低40%',
      '观众互动度提升300%',
      '内容创新度大幅提高',
    ],
    recommendedProducts: ['dr02', 'lite3', 'x30'],
    caseStudies: [
      {
        title: '科幻电影机器人演员',
        description: 'DR02参与科幻电影拍摄，完成高难度动作场景',
        metrics: [
          { label: '拍摄周期', value: '缩短60%' },
          { label: '危险动作', value: '零事故' },
          { label: '动作精度', value: '100%还原' },
        ],
      },
    ],
  },
  {
    id: 'education',
    title: '教育科研',
    description: '为高校和科研机构提供机器人教学和研究平台',
    fullDescription: '教育科研解决方案为学生和研究人员提供完整的机器人学习和开发平台。开放所有软硬件接口，支持二次开发和算法验证。配套完整的教材、实验指导和在线课程。已被100多所高校采用，培养了大批机器人领域人才。',
    image: '/src/assets/hero-robots.jpg',
    icon: GraduationCap,
    problems: [
      '教学设备昂贵',
      '理论与实践脱节',
      '研究平台不够开放',
      '学习曲线陡峭',
      '维护成本高',
    ],
    solutions: [
      '模块化教学设计',
      '全开放软硬件平台',
      '图形化编程工具',
      '丰富的教学资源',
      '在线技术支持',
      '定期培训课程',
    ],
    benefits: [
      '学习效率提升200%',
      '实验成功率提高90%',
      '科研周期缩短50%',
      '学生就业率提升40%',
    ],
    recommendedProducts: ['lite3', 'dr02', 'j60'],
    caseStudies: [
      {
        title: '某985高校机器人实验室',
        description: '采购20台Lite3和5台DR02用于教学和科研',
        metrics: [
          { label: '学生参与人数', value: '500+' },
          { label: '科研论文发表', value: '30篇' },
          { label: '学生满意度', value: '95%' },
        ],
      },
    ],
  },
];

export const getApplicationById = (id: string) => applications.find(a => a.id === id);
