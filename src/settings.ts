export const profile = {
	en: {
		fullName: 'LIAO Shiwu',
		title: 'Ph.D. & Founder of TODE Co., Ltd.',
		institute: 'TODE Co., Ltd. & Huazhong University of Science & Technology',
		author_name: 'Shiwu Liao', // Author name to be highlighted in the papers section
		description: 'Brief impactful description of your research focus and academic mission. Highlight your key contributions and areas of expertise.',
		research_areas: [
			// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
		],
	},
	zh: {
		fullName: '廖诗武',
		title: '博士，研究员，TODE Co., Ltd. 创始人',
		institute: 'TODE Co., Ltd. & 华中科技大学',
		author_name: 'Shiwu Liao', // Author name to be highlighted in the papers section
		description: '研究领域：新型电力系统规划及运行分析',
		research_areas: [
			// { title: '物理学', description: '研究兴趣的简要描述', field: 'physics' },
		],
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
