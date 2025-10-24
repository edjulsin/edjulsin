import type { StaticImageData } from 'next/image'

type Project = {
	type: 'fullstack' | 'backend' | 'frontend',
	slug: string
	title: string
	description: string
	stack: string[]
	published_at: string,
	modified_at: string,
	features: { title: string; description: string }[]
	images: {
		width: number
		height: number
		data: StaticImageData
		alt: string
	}[]
	demo: string
}

export default Project
