export const profile = {
	en: {
		fullName: 'LIAO Shiwu',
		title: 'CEO',
		institute: '',
		author_name: '', // Author name to be highlighted in the papers section
		description: 'Brief impactful description of your research focus and academic mission. Highlight your key contributions and areas of expertise.',
		research_areas: [
			// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
		],
	},
	zh: {
		fullName: '廖诗武',
		title: '首席执行官',
		institute: '',
		author_name: '', // Author name to be highlighted in the papers section
		description: '简要而有影响力地描述您的研究重点和学术使命。突出您的主要贡献和专业领域。',
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
		default_description: 'Astro Academia is a template for academic websites.',
		default_image: '/images/astro-academia.png',
	},
	zh: {
		default_title: '廖诗武',
		default_description: 'Astro Academia 是一个学术网站模板。',
		default_image: '/images/astro-academia.png',
	}
}
