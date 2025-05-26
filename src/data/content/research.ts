// 研究内容数据 - 支持中英文双语
export interface ResearchProject {
  title: string;
  description: string;
}

export interface ResearchContent {
  intro: string;
  approach: string;
  projectsTitle: string;
  projects: ResearchProject[];
  impactTitle: string;
  impact: string;
}

// 中英文研究内容数据
export const researchData: { zh: ResearchContent; en: ResearchContent } = {
  zh: {
    intro: '我的研究专注于新型电力系统的规划与运行优化，致力于推动清洁能源的高效利用和电网的智能化发展。通过先进的数学建模、优化算法和数据分析技术，我致力于解决电力系统面临的关键技术挑战。',
    approach: '这种跨学科的研究方法结合了电力工程、计算机科学和数据科学的前沿技术，为构建安全、经济、清洁的现代电力系统提供理论基础和技术支撑。',
    projectsTitle: '当前研究项目',
    projects: [
      {
        title: '新能源并网优化',
        description: '研究风电、光伏等新能源发电的并网技术，优化电网运行策略，提高新能源消纳能力。'
      },
      {
        title: '电力负荷预测',
        description: '基于深度学习和大数据技术，开发高精度的电力负荷预测模型，为电网调度提供决策支持。'
      },
      {
        title: '智能电网规划',
        description: '运用先进的优化算法，进行电网扩展规划和设备配置优化，提高电网的经济性和可靠性。'
      },
      {
        title: '电力市场分析',
        description: '研究电力市场机制设计和价格形成机理，为电力市场改革提供理论指导。'
      }
    ],
    impactTitle: '研究影响与应用',
    impact: '我的研究成果已在多个实际电力系统项目中得到应用，为提高电网运行效率、促进新能源发展做出了重要贡献。相关研究成果发表在国内外知名期刊上，并获得了多项专利授权。这些研究不仅推动了电力系统理论的发展，也为能源转型和碳中和目标的实现提供了技术支撑。'
  },
  en: {
    intro: 'My research focuses on the planning and operation optimization of modern power systems, dedicated to promoting the efficient utilization of clean energy and the intelligent development of power grids. Through advanced mathematical modeling, optimization algorithms, and data analysis techniques, I am committed to solving key technical challenges facing power systems.',
    approach: 'This interdisciplinary research approach combines cutting-edge technologies from electrical engineering, computer science, and data science, providing theoretical foundations and technical support for building safe, economical, and clean modern power systems.',
    projectsTitle: 'Current Research Projects',
    projects: [
      {
        title: 'Renewable Energy Integration Optimization',
        description: 'Research on grid integration technologies for renewable energy sources such as wind and solar power, optimizing grid operation strategies to improve renewable energy accommodation capacity.'
      },
      {
        title: 'Power Load Forecasting',
        description: 'Development of high-precision power load forecasting models based on deep learning and big data technologies, providing decision support for grid dispatch.'
      },
      {
        title: 'Smart Grid Planning',
        description: 'Application of advanced optimization algorithms for grid expansion planning and equipment configuration optimization to improve grid economics and reliability.'
      },
      {
        title: 'Power Market Analysis',
        description: 'Research on power market mechanism design and price formation mechanisms, providing theoretical guidance for power market reform.'
      }
    ],
    impactTitle: 'Research Impact and Applications',
    impact: 'My research achievements have been applied in multiple real power system projects, making important contributions to improving grid operation efficiency and promoting renewable energy development. Related research results have been published in renowned domestic and international journals and have received multiple patent authorizations. These studies not only advance the development of power system theory but also provide technical support for energy transition and carbon neutrality goals.'
  }
};
