// 注意：profile 数据已迁移到 src/data/content/profile.ts
// 为了保持向后兼容性，这里保留一个简化版本
// 建议使用 getProfile() 函数从新的数据源获取完整的个人资料信息

export const profile = {
	en: {
		fullName: 'LIAO Shiwu',
		title: 'Ph.D., Researcher & Founder of TODE Co., Ltd.',
		institute: 'TODE Co., Ltd. & Huazhong University of Science & Technology',
		author_name: 'Shiwu Liao',
		description: 'Focused on modern power system planning and operation analysis, dedicated to promoting clean energy technology development and smart grid construction',
		research_areas: [],
	},
	zh: {
		fullName: '廖诗武',
		title: '博士，研究员，TODE Co., Ltd. 创始人',
		institute: 'TODE Co., Ltd. & 华中科技大学',
		author_name: 'Shiwu Liao',
		description: '专注于新型电力系统规划及运行分析，致力于推动清洁能源技术发展和智能电网建设',
		research_areas: [],
	}
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: '',
	linkedin: '',
	x: 'https://www.x.com/',
	github: '',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://liaosw.github.io/personal_website/', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '/personal_website' // Repository name starting with /
}

export const seo = {
	en: {
		default_title: 'LIAO Shiwu',
		default_description: 'Ph.D. & Founder of TODE Co., Ltd.',
		default_image: '/images/astro-academia.png',
	},
	zh: {
		default_title: '廖诗武',
		default_description: '博士，研究员，TODE Co., Ltd. 创始人',
		default_image: '/images/astro-academia.png',
	}
}
