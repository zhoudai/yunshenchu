export interface Product {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  categoryId: string;
  image: string;
  description: string;
  fullDescription: string;
  specs: string[];
  detailedSpecs: {
    label: string;
    value: string;
  }[];
  features: string[];
  applications: string[];
}

export const products: Product[] = [
  {
    id: 'dr02',
    name: 'DR02 人形机器人',
    nameEn: 'DR02 Humanoid Robot',
    category: '人形机器人',
    categoryId: 'humanoid',
    image: 'https://www.deeprobotics.cn/public/static/robot/images/nav_hum.png',
    description: '全尺寸人形机器人，具备高度仿生的运动能力和智能交互系统',
    fullDescription: 'DR02是云深处最新研发的全尺寸人形机器人，高度达到170cm，重量65kg。搭载先进的AI控制系统和全身41个自由度关节，能够实现流畅自然的人类动作模拟。配备多模态感知系统，支持视觉、听觉、触觉融合，可在复杂环境中自主导航和作业。',
    specs: [
      '身高: 170cm',
      '重量: 65kg',
      '自由度: 41DOF'
    ],
    detailedSpecs: [
      { label: '身高', value: '170cm' },
      { label: '重量', value: '65kg' },
      { label: '自由度', value: '41DOF' },
      { label: '行走速度', value: '最高5km/h' },
      { label: '负载能力', value: '20kg' },
      { label: '续航时间', value: '4-6小时' },
      { label: '充电时间', value: '2小时' },
      { label: 'CPU', value: 'Intel Core i7' },
    ],
    features: [
      '全身41个高精度伺服关节',
      '多模态AI感知系统',
      '自主导航与避障',
      '自然语言交互',
      '远程遥操作支持',
    ],
    applications: ['工业巡检', '商业服务', '教育科研', '展览展示'],
  },
  {
    id: 'lite3',
    name: 'Lite3 四足机器人',
    nameEn: 'Lite3 Quadruped Robot',
    category: '四足机器人',
    categoryId: 'quadruped',
    image: 'https://www.deeprobotics.cn/public/static/robot/images/nav_lite3.png',
    description: '轻量级四足机器人，适合室内外巡检和数据采集',
    fullDescription: 'Lite3是专为工业和科研场景设计的轻量级四足机器人。重量仅12kg，却具备强大的环境适应能力。采用模块化设计，可快速更换不同的传感器模块和功能载荷。独特的步态算法使其能够在楼梯、斜坡等复杂地形中稳定行走。',
    specs: [
      '重量: 12kg',
      '速度: 最高3.5m/s',
      '续航: 2-3小时'
    ],
    detailedSpecs: [
      { label: '重量', value: '12kg' },
      { label: '最高速度', value: '3.5m/s' },
      { label: '越障高度', value: '20cm' },
      { label: '爬坡角度', value: '30°' },
      { label: '续航时间', value: '2-3小时' },
      { label: '防护等级', value: 'IP54' },
      { label: '负载能力', value: '5kg' },
      { label: '自由度', value: '12DOF' },
    ],
    features: [
      '轻量化碳纤维机身',
      '智能步态规划',
      '多地形适应',
      '实时环境建图',
      '模块化载荷设计',
    ],
    applications: ['电力巡检', '安防巡逻', '工业检测', '科研教育'],
  },
  {
    id: 'x30',
    name: 'X30 四足机器人',
    nameEn: 'X30 Quadruped Robot',
    category: '四足机器人',
    categoryId: 'quadruped',
    image: 'https://www.deeprobotics.cn/public/static/robot/images/nav_x30.png',
    description: '工业级四足机器人，高负载能力和防护等级',
    fullDescription: 'X30是云深处工业级四足机器人旗舰产品。采用全铝合金骨架和工业级伺服系统，具备IP67防护等级，可在恶劣环境下长时间作业。搭载多种工业传感器，支持热成像、气体检测、超声波检测等多种功能模块。',
    specs: [
      '重量: 50kg',
      '负载: 40kg',
      '防护: IP67'
    ],
    detailedSpecs: [
      { label: '重量', value: '50kg' },
      { label: '最高速度', value: '2m/s' },
      { label: '负载能力', value: '40kg' },
      { label: '越障高度', value: '35cm' },
      { label: '爬坡角度', value: '45°' },
      { label: '续航时间', value: '4-6小时' },
      { label: '防护等级', value: 'IP67' },
      { label: '工作温度', value: '-20°C ~ 55°C' },
    ],
    features: [
      '工业级机身设计',
      'IP67防护等级',
      '大负载能力',
      '多传感器融合',
      '5G/Wi-Fi通讯',
    ],
    applications: ['电力巡检', '石油化工', '应急救援', '矿山巡检'],
  },
  {
    id: 'm20',
    name: 'M20 轮腿机器人',
    nameEn: 'M20 Wheel-Leg Robot',
    category: '轮腿机器人',
    categoryId: 'wheel-leg',
    image: 'https://www.deeprobotics.cn/public/static/robot/images/nav_lynx.png',
    description: '创新轮腿混合设计，兼顾速度与地形适应性',
    fullDescription: 'M20采用创新的轮腿混合驱动设计，结合了轮式机器人的高速移动能力和腿式机器人的地形适应能力。在平坦路面可切换至轮式模式实现5m/s高速移动，遇到台阶、障碍时自动切换为腿式模式越障。配备全景相机和激光雷达，支持自主导航和路径规划。',
    specs: [
      '速度: 最高5m/s',
      '越障: 30cm',
      '续航: 5小时'
    ],
    detailedSpecs: [
      { label: '重量', value: '35kg' },
      { label: '轮式速度', value: '5m/s' },
      { label: '腿式速度', value: '1.5m/s' },
      { label: '越障高度', value: '30cm' },
      { label: '爬坡角度', value: '35°' },
      { label: '续航时间', value: '5小时' },
      { label: '负载能力', value: '15kg' },
      { label: '防护等级', value: 'IP54' },
    ],
    features: [
      '轮腿混合驱动',
      '模式自动切换',
      '高速移动能力',
      '全景视觉导航',
      '自主路径规划',
    ],
    applications: ['园区巡逻', '仓储物流', '应急侦查', '户外巡检'],
  },
  {
    id: 'j60',
    name: 'J60 关节模组',
    nameEn: 'J60 Joint Module',
    category: '核心部件',
    categoryId: 'components',
    image: 'https://www.deeprobotics.cn/public/static/robot/images/nav_J60.png',
    description: '高性能伺服关节，扭矩60Nm，适用于中型机器人',
    fullDescription: 'J60是专为中型机器人设计的高性能伺服关节模组。采用一体化设计，集成电机、减速器、编码器和驱动器。具备高扭矩输出、低功耗、高精度位置控制等特点。支持多种通讯协议，易于集成到不同的机器人平台。',
    specs: [
      '额定扭矩: 60Nm',
      '峰值扭矩: 120Nm',
      '重复定位: ±0.1°'
    ],
    detailedSpecs: [
      { label: '额定扭矩', value: '60Nm' },
      { label: '峰值扭矩', value: '120Nm' },
      { label: '额定转速', value: '120rpm' },
      { label: '重复定位精度', value: '±0.1°' },
      { label: '重量', value: '0.95kg' },
      { label: '通讯接口', value: 'CAN/RS485' },
      { label: '工作电压', value: '48V' },
      { label: '防护等级', value: 'IP54' },
    ],
    features: [
      '一体化集成设计',
      '高扭矩密度',
      '低功耗运行',
      '多通讯协议',
      '易于集成',
    ],
    applications: ['人形机器人', '四足机器人', '机械臂', '工业设备'],
  },
  {
    id: 'j80',
    name: 'J80 关节模组',
    nameEn: 'J80 Joint Module',
    category: '核心部件',
    categoryId: 'components',
    image: 'https://www.deeprobotics.cn/public/static/robot/images/nav_J100.png',
    description: '大扭矩关节模组，适用于大型机器人和重载应用',
    fullDescription: 'J80是针对大型机器人和重载应用开发的大扭矩关节模组。扭矩输出高达80Nm，可承受更大的负载。采用工业级元器件和密封设计，适合恶劣环境使用。支持热插拔和现场维护，降低维护成本。',
    specs: [
      '额定扭矩: 80Nm',
      '峰值扭矩: 160Nm',
      '防护: IP65'
    ],
    detailedSpecs: [
      { label: '额定扭矩', value: '80Nm' },
      { label: '峰值扭矩', value: '160Nm' },
      { label: '额定转速', value: '100rpm' },
      { label: '重复定位精度', value: '±0.08°' },
      { label: '重量', value: '1.35kg' },
      { label: '通讯接口', value: 'CAN/EtherCAT' },
      { label: '工作电压', value: '48V' },
      { label: '防护等级', value: 'IP65' },
    ],
    features: [
      '大扭矩输出',
      '工业级可靠性',
      '热插拔支持',
      '现场可维护',
      '多协议通讯',
    ],
    applications: ['大型人形机器人', '工业机械臂', '重载设备', '特种机器人'],
  },
  {
    id: 'j100',
    name: 'J100 关节模组',
    nameEn: 'J100 Joint Module',
    category: '核心部件',
    categoryId: 'components',
    image: 'https://www.deeprobotics.cn/public/static/robot/images/nav_J100.png',
    description: '超大扭矩关节，扭矩100Nm，适用于特殊工况',
    fullDescription: 'J100是云深处最强大的关节模组产品，专为特殊工况和超重载应用设计。采用双电机驱动方案，扭矩输出高达100Nm。内置多重安全保护机制，包括过载保护、温度保护、限位保护等。特殊的散热设计确保长时间高强度作业。',
    specs: [
      '额定扭矩: 100Nm',
      '峰值扭矩: 200Nm',
      '工业级设计'
    ],
    detailedSpecs: [
      { label: '额定扭矩', value: '100Nm' },
      { label: '峰值扭矩', value: '200Nm' },
      { label: '额定转速', value: '80rpm' },
      { label: '重复定位精度', value: '±0.05°' },
      { label: '重量', value: '1.85kg' },
      { label: '通讯接口', value: 'EtherCAT/CAN' },
      { label: '工作电压', value: '48V' },
      { label: '防护等级', value: 'IP67' },
    ],
    features: [
      '超大扭矩输出',
      '双电机驱动',
      '多重安全保护',
      '主动散热系统',
      '工业级可靠性',
    ],
    applications: ['重型机器人', '特种作业设备', '工业自动化', '国防装备'],
  },
];

export const getProductById = (id: string) => products.find(p => p.id === id);
export const getProductsByCategory = (categoryId: string) => products.filter(p => p.categoryId === categoryId);
