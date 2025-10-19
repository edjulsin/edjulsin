import type { StaticImageData } from 'next/image'

type Project = {
	slug: string
	title: string
	description: string
	stack: string[]
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
