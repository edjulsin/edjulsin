import projects from '@/data/projects'
import type { MetadataRoute } from 'next'

const development = process.env.NODE_ENV === 'development'
const url = development ? 'http://localhost:3000' : (process.env.NEXT_PUBLIC_SITE_URL as string)

const sitemap = (): MetadataRoute.Sitemap => {
    const modified = new Date()
    return [
        {
            url: url,
            lastModified: modified,
            changeFrequency: 'yearly',
            priority: 1
        },
        {
            url: `${url}/contact`,
            lastModified: modified,
            changeFrequency: 'yearly',
            priority: .8
        },
        ...projects.map(v => {
            return {
                url: `${url}/projects/${v.slug}`,
                lastModified: modified,
                changeFrequency: 'monthly',
                priority: .5,
                images: v.images.map(v => v.data.src)
            }
        }) as MetadataRoute.Sitemap
    ]
}

export default sitemap