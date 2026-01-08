import { Photo } from './photo'

type Project = {
	type: 'fullstack' | 'backend' | 'frontend',
	slug: string
	title: string
	description: string
	stack: string[]
	published_at: string,
	modified_at: string,
	features: { title: string; description: string }[]
	screenshot: Photo,
	images: Photo[]
	demo: string
}

export default Project
