import type { MetadataRoute } from 'next'
import projects from '@/data/projects'

const url = process.env.NEXT_PUBLIC_SITE_URL as string

const sitemap = (): MetadataRoute.Sitemap => {
	const modified = new Date()
	return [
		{
			url: url,
			lastModified: modified,
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${url}/contact`,
			lastModified: modified,
			changeFrequency: 'yearly',
			priority: 0.8,
		},
		...(projects.map(v => {
			return {
				url: `${url}/projects/${v.slug}`,
				lastModified: v.modified_at,
				changeFrequency: 'monthly',
				priority: 0.5,
				images: v.images.map(v => v.data.src),
			}
		}) as MetadataRoute.Sitemap)
	]
}

export default sitemap
