// 个人资料数据 - 支持中英文双语
export interface ResearchArea {
  title: string;
  description: string;
  field: string;
}

export interface ProfileData {
  fullName: string;
  title: string;
  institute: string;
  author_name: string;
  description: string;
  research_areas: ResearchArea[];
  bio?: string;
  interests?: string[];
  contact?: {
    email?: string;
    phone?: string;
    address?: string;
  };
}

// 中英文个人资料数据
export const profileData: { zh: ProfileData; en: ProfileData } = {
  zh: {
    fullName: '廖诗武',
    title: '博士',
    institute: 'TODE Co., Ltd. & 华中科技大学',
    author_name: 'Shiwu Liao',
    description: '专注于新型电力系统规划及运行分析，致力于推动清洁能源技术发展和智能电网建设',
    research_areas: [
      {
        title: '电力系统规划与运行',
        description: '研究电力系统的优化规划、安全运行和经济调度，为电网的可靠性和经济性提供理论支撑',
        field: 'electrical-engineering'
      },
      {
        title: '新能源并网技术',
        description: '专注于风电、光伏等新能源发电技术的并网分析、控制策略和系统集成优化',
        field: 'renewable-energy'
      },
      {
        title: '智能电网与数字化',
        description: '研究智能电网技术、电力物联网、大数据分析在电力系统中的应用',
        field: 'smart-grid'
      },
      {
        title: '电力市场与政策',
        description: '分析电力市场机制、能源政策对电力系统发展的影响，为行业决策提供支持',
        field: 'energy-policy'
      }
    ],
    bio: '廖诗武博士是电力系统领域的资深研究员，在新型电力系统规划与运行方面具有丰富的理论基础和实践经验。他致力于推动清洁能源技术的发展，为构建安全、经济、清洁的现代电力系统贡献力量。',
    interests: [
      '新能源发电技术',
      '电力系统优化',
      '智能电网',
      '能源政策分析',
      '数据科学应用'
    ],
    contact: {
      email: 'liaoshiwu@example.com',
      address: '中国 湖北省 武汉市'
    }
  },
  en: {
    fullName: 'LIAO Shiwu',
    title: 'Ph.D., Researcher & Founder of TODE Co., Ltd.',
    institute: 'TODE Co., Ltd. & Huazhong University of Science & Technology',
    author_name: 'Shiwu Liao',
    description: 'Focused on modern power system planning and operation analysis, dedicated to promoting clean energy technology development and smart grid construction',
    research_areas: [
      {
        title: 'Power System Planning and Operation',
        description: 'Research on optimal planning, secure operation, and economic dispatch of power systems, providing theoretical support for grid reliability and economics',
        field: 'electrical-engineering'
      },
      {
        title: 'Renewable Energy Integration',
        description: 'Focus on grid integration analysis, control strategies, and system integration optimization for renewable energy sources such as wind and solar power',
        field: 'renewable-energy'
      },
      {
        title: 'Smart Grid and Digitalization',
        description: 'Research on smart grid technologies, power Internet of Things, and big data analytics applications in power systems',
        field: 'smart-grid'
      },
      {
        title: 'Power Markets and Policy',
        description: 'Analysis of power market mechanisms and energy policy impacts on power system development, providing support for industry decision-making',
        field: 'energy-policy'
      }
    ],
    bio: 'Dr. Shiwu Liao is a senior researcher in the field of power systems with extensive theoretical foundation and practical experience in modern power system planning and operation. He is dedicated to promoting the development of clean energy technologies and contributing to the construction of safe, economical, and clean modern power systems.',
    interests: [
      'Renewable Energy Technologies',
      'Power System Optimization',
      'Smart Grid',
      'Energy Policy Analysis',
      'Data Science Applications'
    ],
    contact: {
      email: 'liaoshiwu@example.com',
      address: 'Wuhan, Hubei, China'
    }
  }
};
