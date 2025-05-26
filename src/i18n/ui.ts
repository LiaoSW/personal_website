// 国际化配置和翻译文件
export const languages = {
  en: 'English',
  zh: '中文',
};

export const defaultLang = 'en';

// 翻译文本配置
export const ui = {
  en: {
    // 导航菜单
    'nav.home': 'Home',
    'nav.research': 'Research',
    'nav.papers': 'Papers',
    'nav.cv': 'CV',
    'nav.blog': 'Blog',
    
    // 首页内容
    'home.welcome': 'Welcome! I\'m',
    'home.description': 'Brief impactful description of your research focus and academic mission. Highlight your key contributions and areas of expertise.',
    'home.research_areas': 'Research Areas',
    'home.recent_publications': 'Recent Publications',
    
    // 通用文本
    'common.authors': 'Authors',
    'common.read_more': 'Read More',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    
    // 语言切换
    'lang.switch_to_chinese': '中文',
    'lang.switch_to_english': 'English',
    
    // 页面标题
    'page.research': 'Research',
    'page.papers': 'Papers',
    'page.cv': 'Curriculum Vitae',
    'page.blog': 'Blog Posts',
    
    // 研究页面
    'research.title': 'Research Areas',
    'research.description': 'Explore my research interests and ongoing projects.',
    
    // 论文页面
    'papers.title': 'Publications',
    'papers.description': 'A comprehensive list of my academic publications and research papers.',
    
    // CV页面
    'cv.title': 'Curriculum Vitae',
    'cv.description': 'My academic and professional background.',
    'cv.education': 'Education',
    'cv.experience': 'Experience',
    'cv.skills': 'Skills',
    'cv.awards': 'Awards',
    
    // 博客页面
    'blog.title': 'Blog Posts',
    'blog.description': 'Thoughts, insights, and updates from my research journey.',
    'blog.published_on': 'Published on',
    
    // 错误页面
    'error.404.title': 'Page Not Found',
    'error.404.description': 'The page you are looking for does not exist.',
    'error.404.back_home': 'Back to Home',
  },
  zh: {
    // 导航菜单
    'nav.home': '首页',
    'nav.research': '研究领域',
    'nav.papers': '学术论文',
    'nav.cv': '个人简历',
    'nav.blog': '博客',
    
    // 首页内容
    'home.welcome': '欢迎！我是',
    'home.description': '简要而有影响力地描述您的研究重点和学术使命。突出您的主要贡献和专业领域。',
    'home.research_areas': '研究领域',
    'home.recent_publications': '最新发表',
    
    // 通用文本
    'common.authors': '作者',
    'common.read_more': '阅读更多',
    'common.back': '返回',
    'common.next': '下一页',
    'common.previous': '上一页',
    
    // 语言切换
    'lang.switch_to_chinese': '中文',
    'lang.switch_to_english': 'English',
    
    // 页面标题
    'page.research': '研究领域',
    'page.papers': '学术论文',
    'page.cv': '个人简历',
    'page.blog': '博客文章',
    
    // 研究页面
    'research.title': '研究领域',
    'research.description': '探索我的研究兴趣和正在进行的项目。',
    
    // 论文页面
    'papers.title': '学术发表',
    'papers.description': '我的学术发表和研究论文的完整列表。',
    
    // CV页面
    'cv.title': '个人简历',
    'cv.description': '我的学术和专业背景。',
    'cv.education': '教育背景',
    'cv.experience': '工作经历',
    'cv.skills': '技能专长',
    'cv.awards': '获奖荣誉',
    
    // 博客页面
    'blog.title': '博客文章',
    'blog.description': '我研究旅程中的思考、见解和更新。',
    'blog.published_on': '发布于',
    
    // 错误页面
    'error.404.title': '页面未找到',
    'error.404.description': '您要查找的页面不存在。',
    'error.404.back_home': '返回首页',
  },
} as const;
