// CV数据 - 支持中英文双语
export interface CVItem {
  company?: string;
  school?: string;
  time: string;
  title?: string;
  degree?: string;
  location: string;
  description: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  time: string;
  link: string;
  abstract: string;
}

export interface Skill {
  title: string;
  description: string;
}

export interface CVData {
  experiences: CVItem[];
  education: CVItem[];
  skills: Skill[];
  publications: Publication[];
}

// 中英文CV数据
export const cvData: { zh: CVData; en: CVData } = {
  zh: {
    experiences: [
      {
        company: '国网江苏省电力公司电力科学研究院',
        time: '2017.8 - 2021.4',
        title: '高级工程师',
        location: '南京，江苏，中国',
        description: '电力系统规划与运行领域的核心研究员和分析师',
      },
      // 可以添加更多工作经历
    ],
    education: [
      {
        school: '华中科技大学',
        time: '2012.9 - 2017.6',
        degree: '博士学位',
        location: '武汉，湖北，中国',
        description: '电气工程专业，专注于电力系统规划与运行优化研究',
      },
      {
        school: '哈佛大学',
        time: '2015.9 - 2016.8',
        degree: '访问学者',
        location: '剑桥，马萨诸塞州，美国',
        description: '在电力系统与能源政策研究中心进行学术交流与合作研究',
      },
      {
        school: '华中科技大学',
        time: '2008.9 - 2012.6',
        degree: '工学学士',
        location: '武汉，湖北，中国',
        description: '电气工程及其自动化专业，获得优秀毕业生荣誉',
      },
    ],
    skills: [
      {
        title: '电力系统规划与运行',
        description: '具备深厚的电力系统理论基础和丰富的实践经验，擅长电网规划、运行优化和安全分析',
      },
      {
        title: '新能源并网技术',
        description: '专注于风电、光伏等新能源发电技术的并网分析和优化控制',
      },
      {
        title: '数据分析与建模',
        description: '熟练运用MATLAB、Python等工具进行电力系统建模、仿真和数据分析',
      },
    ],
    publications: [
      {
        title: '基于深度学习的电力负荷预测方法研究',
        authors: '廖诗武, 张三, 李四',
        journal: '中国电机工程学报',
        time: '2020',
        link: '#',
        abstract: '提出了一种基于深度学习的电力负荷预测方法，显著提高了预测精度。',
      },
      // 可以添加更多发表论文
    ],
  },
  en: {
    experiences: [
      {
        company: 'State Grid Jiangsu Electric Power Research Institute',
        time: '2017.8 - 2021.4',
        title: 'Senior Engineer',
        location: 'Nanjing, Jiangsu, China',
        description: 'Core researcher and analyst in the field of power system planning and operation',
      },
      // Add more work experiences as needed
    ],
    education: [
      {
        school: 'Huazhong University of Science & Technology',
        time: '2012.9 - 2017.6',
        degree: 'Ph.D. in Electrical Engineering',
        location: 'Wuhan, Hubei, China',
        description: 'Specialized in power system planning and operation optimization research',
      },
      {
        school: 'Harvard University',
        time: '2015.9 - 2016.8',
        degree: 'Visiting Scholar',
        location: 'Cambridge, MA, USA',
        description: 'Academic exchange and collaborative research at the Power Systems and Energy Policy Research Center',
      },
      {
        school: 'Huazhong University of Science & Technology',
        time: '2008.9 - 2012.6',
        degree: 'Bachelor of Engineering',
        location: 'Wuhan, Hubei, China',
        description: 'Electrical Engineering and Automation, graduated with honors',
      },
    ],
    skills: [
      {
        title: 'Power System Planning and Operation',
        description: 'Deep theoretical foundation and rich practical experience in power systems, specializing in grid planning, operation optimization, and security analysis',
      },
      {
        title: 'Renewable Energy Integration',
        description: 'Focus on grid integration analysis and optimal control of renewable energy sources such as wind and solar power',
      },
      {
        title: 'Data Analysis and Modeling',
        description: 'Proficient in using MATLAB, Python and other tools for power system modeling, simulation, and data analysis',
      },
    ],
    publications: [
      {
        title: 'Deep Learning-based Power Load Forecasting Method',
        authors: 'Shiwu Liao, San Zhang, Si Li',
        journal: 'Proceedings of the CSEE',
        time: '2020',
        link: '#',
        abstract: 'Proposed a deep learning-based power load forecasting method that significantly improves prediction accuracy.',
      },
      // Add more publications as needed
    ],
  },
};
