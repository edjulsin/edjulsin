import type { MetadataRoute } from 'next'

const development = process.env.NODE_ENV === 'development'
const url = development ? 'http://localhost:3000' : (process.env.NEXT_PUBLIC_SITE_URL as string)

const robots = (): MetadataRoute.Robots => {
    return {
        rules: {
            userAgent: '*',
            allow: '/'
        },
        sitemap: `${url}/sitemap.xml`
    }
}

export default robots