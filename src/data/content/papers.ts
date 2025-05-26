// 学术论文数据 - 支持中英文双语
export interface Paper {
  title: string;
  authors: string;
  journal: string;
  year: string;
  volume?: string;
  pages?: string;
  doi?: string;
  link?: string;
  abstract: string;
  keywords?: string[];
  type: 'journal' | 'conference' | 'book' | 'patent';
}

export interface PapersData {
  featured: Paper[];
  journals: Paper[];
  conferences: Paper[];
  patents: Paper[];
}

// 中英文论文数据
export const papersData: { zh: PapersData; en: PapersData } = {
  zh: {
    featured: [
      {
        title: '基于深度学习的电力负荷预测方法研究',
        authors: '廖诗武, 张三, 李四',
        journal: '中国电机工程学报',
        year: '2020',
        volume: '40',
        pages: '1234-1245',
        doi: '10.13334/j.0258-8013.pcsee.2020.04.012',
        link: '#',
        abstract: '提出了一种基于深度学习的电力负荷预测方法，通过构建多层神经网络模型，结合历史负荷数据和气象因素，显著提高了短期负荷预测的精度。实验结果表明，该方法相比传统预测方法具有更高的准确性和鲁棒性。',
        keywords: ['深度学习', '负荷预测', '神经网络', '电力系统'],
        type: 'journal'
      },
    ],
    journals: [
      {
        title: '新能源并网对电力系统稳定性影响分析',
        authors: '廖诗武, 王五, 赵六',
        journal: '电力系统自动化',
        year: '2021',
        volume: '45',
        pages: '78-85',
        doi: '10.7500/AEPS20210315008',
        link: '#',
        abstract: '分析了大规模新能源并网对电力系统稳定性的影响机理，提出了相应的稳定性评估方法和控制策略。研究结果为新能源高比例接入的电力系统安全运行提供了理论依据。',
        keywords: ['新能源并网', '系统稳定性', '控制策略'],
        type: 'journal'
      },
      {
        title: '智能电网环境下的需求响应优化策略',
        authors: '廖诗武, 陈七, 刘八',
        journal: '电网技术',
        year: '2019',
        volume: '43',
        pages: '2156-2163',
        doi: '10.13335/j.1000-3673.pst.2019.0234',
        link: '#',
        abstract: '针对智能电网环境下的需求响应问题，提出了一种多目标优化策略，在保证用户舒适度的前提下，实现了电网负荷的有效调节和运行成本的降低。',
        keywords: ['智能电网', '需求响应', '多目标优化'],
        type: 'journal'
      },
    ],
    conferences: [
      {
        title: '基于机器学习的电力设备故障诊断方法',
        authors: '廖诗武, 孙九, 周十',
        journal: '2020年中国电机工程学会年会论文集',
        year: '2020',
        pages: '456-461',
        link: '#',
        abstract: '提出了一种基于机器学习的电力设备故障诊断方法，通过分析设备运行数据的特征模式，实现了故障的早期识别和准确定位。',
        keywords: ['机器学习', '故障诊断', '电力设备'],
        type: 'conference'
      },
    ],
    patents: [
      {
        title: '一种基于人工智能的电网调度优化系统',
        authors: '廖诗武, 李十一, 张十二',
        journal: '中国发明专利',
        year: '2021',
        doi: 'CN202110123456.7',
        link: '#',
        abstract: '本发明公开了一种基于人工智能的电网调度优化系统，能够实时分析电网运行状态，自动生成最优调度方案，提高电网运行效率。',
        keywords: ['人工智能', '电网调度', '优化系统'],
        type: 'patent'
      },
    ],
  },
  en: {
    featured: [
      {
        title: 'Deep Learning-based Power Load Forecasting Method',
        authors: 'Shiwu Liao, San Zhang, Si Li',
        journal: 'Proceedings of the CSEE',
        year: '2020',
        volume: '40',
        pages: '1234-1245',
        doi: '10.13334/j.0258-8013.pcsee.2020.04.012',
        link: '#',
        abstract: 'This paper proposes a deep learning-based power load forecasting method. By constructing a multi-layer neural network model and combining historical load data with meteorological factors, the accuracy of short-term load forecasting is significantly improved. Experimental results show that this method has higher accuracy and robustness compared to traditional forecasting methods.',
        keywords: ['Deep Learning', 'Load Forecasting', 'Neural Networks', 'Power Systems'],
        type: 'journal'
      },
    ],
    journals: [
      {
        title: 'Analysis of Renewable Energy Integration Impact on Power System Stability',
        authors: 'Shiwu Liao, Wu Wang, Liu Zhao',
        journal: 'Automation of Electric Power Systems',
        year: '2021',
        volume: '45',
        pages: '78-85',
        doi: '10.7500/AEPS20210315008',
        link: '#',
        abstract: 'This paper analyzes the impact mechanism of large-scale renewable energy integration on power system stability and proposes corresponding stability assessment methods and control strategies. The research results provide theoretical basis for the safe operation of power systems with high proportion of renewable energy access.',
        keywords: ['Renewable Energy Integration', 'System Stability', 'Control Strategy'],
        type: 'journal'
      },
      {
        title: 'Demand Response Optimization Strategy in Smart Grid Environment',
        authors: 'Shiwu Liao, Qi Chen, Ba Liu',
        journal: 'Power System Technology',
        year: '2019',
        volume: '43',
        pages: '2156-2163',
        doi: '10.13335/j.1000-3673.pst.2019.0234',
        link: '#',
        abstract: 'Addressing the demand response problem in smart grid environment, this paper proposes a multi-objective optimization strategy that achieves effective grid load regulation and operation cost reduction while ensuring user comfort.',
        keywords: ['Smart Grid', 'Demand Response', 'Multi-objective Optimization'],
        type: 'journal'
      },
    ],
    conferences: [
      {
        title: 'Machine Learning-based Fault Diagnosis Method for Power Equipment',
        authors: 'Shiwu Liao, Jiu Sun, Shi Zhou',
        journal: 'Proceedings of 2020 Annual Conference of Chinese Society for Electrical Engineering',
        year: '2020',
        pages: '456-461',
        link: '#',
        abstract: 'This paper proposes a machine learning-based fault diagnosis method for power equipment. By analyzing the characteristic patterns of equipment operation data, early fault identification and accurate localization are achieved.',
        keywords: ['Machine Learning', 'Fault Diagnosis', 'Power Equipment'],
        type: 'conference'
      },
    ],
    patents: [
      {
        title: 'An AI-based Power Grid Dispatch Optimization System',
        authors: 'Shiwu Liao, Shiyi Li, Shier Zhang',
        journal: 'Chinese Invention Patent',
        year: '2021',
        doi: 'CN202110123456.7',
        link: '#',
        abstract: 'This invention discloses an AI-based power grid dispatch optimization system that can analyze grid operation status in real-time and automatically generate optimal dispatch schemes to improve grid operation efficiency.',
        keywords: ['Artificial Intelligence', 'Grid Dispatch', 'Optimization System'],
        type: 'patent'
      },
    ],
  }
};
