import type { MetadataRoute } from 'next'

const url = process.env.NEXT_PUBLIC_SITE_URL as string

const robots = (): MetadataRoute.Robots => {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `${url}/sitemap.xml`,
	}
}

export default robots
