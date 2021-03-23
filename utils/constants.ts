export interface TechStack {
	name: string
	icon: string
}

export const techStack: TechStack[] = [
	{
		name: 'Google Sheets',
		icon: '/images/techstack/gsheets.png',
	},
	{
		name: 'React JS',
		icon: '/images/techstack/react.png',
	},
	{
		name: 'Next JS',
		icon: '/images/techstack/next.png',
	},
	{
		name: 'Tailwind CSS',
		icon: '/images/techstack/tailwind.png',
	},
	{
		name: 'Vercel',
		icon: '/images/techstack/vercel.png',
	},
]

export interface Templates {
	title: string
	tags: string[]
	imageUrl: string
	primaryActionUrl: string
	secondaryActionUrl: string
}

export const templates: Templates[] = [
	{
		title: 'Websheets Templates',
		tags: ['landing', 'gallery', 'web'],
		imageUrl:
			'https://i.ibb.co/PN9rprx/Screenshot-2021-03-21-at-1-08-05-PM.png',
		primaryActionUrl: '',
		secondaryActionUrl: '',
	},
	{
		title: 'Influential Figures',
		tags: ['profile', 'inspiration'],
		imageUrl:
			'https://i.ibb.co/T1y5L7W/Screenshot-2021-03-21-at-1-07-52-PM.png',
		primaryActionUrl: '',
		secondaryActionUrl: '',
	},
	{
		title: 'Quotes',
		tags: ['profile', 'inspiration'],
		imageUrl:
			'https://i.ibb.co/PN9rprx/Screenshot-2021-03-21-at-1-08-05-PM.png',
		primaryActionUrl: '',
		secondaryActionUrl: '',
	},
	{
		title: 'Influential Figures',
		tags: ['profile', 'inspiration'],
		imageUrl:
			'https://i.ibb.co/T1y5L7W/Screenshot-2021-03-21-at-1-07-52-PM.png',
		primaryActionUrl: '',
		secondaryActionUrl: '',
	},
	{
		title: 'Quotes',
		tags: ['profile', 'inspiration'],
		imageUrl:
			'https://i.ibb.co/PN9rprx/Screenshot-2021-03-21-at-1-08-05-PM.png',
		primaryActionUrl: '',
		secondaryActionUrl: '',
	},
	{
		title: 'Influential Figures',
		tags: ['profile', 'inspiration'],
		imageUrl:
			'https://i.ibb.co/T1y5L7W/Screenshot-2021-03-21-at-1-07-52-PM.png',
		primaryActionUrl: '',
		secondaryActionUrl: '',
	},
]

export interface Item {
	title: string
	tags: string[]
	imageUrl: string
	destinationUrl: string
	hide: boolean
}

export interface SiteData {
	// GENERAL
	logoUrl: string
	themeColor: string
	darkMode: boolean
	// NAVBAR
	navButtonText: string
	navButtonUrl: string
	navMenuText: string
	navMenuUrl: string
	//HERO
	heroTitle: string
	heroDescription: string
	//FOOTER
	footerText: string
	creditText: string
	creditAuthor: string
	creditUrl: string
	//SEO
	seoTitle: string
	seoDescription: string
	seoBannerUrl: string
}

export enum SheetsDimension {
	ROWS = 'ROWS',
	COLUMNS = 'COLUMNS',
}

export const SHEET_ID = process.env.SHEET_ID
export const SHEET_KEY = process.env.SHEET_KEY
