import type { Metadata } from "next";
import type Project from '@/type/project';

const development = process.env.NODE_ENV === 'development'
const name = process.env.NEXT_PUBLIC_SITE_NAME as string
const url = development ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_SITE_URL

const projectMeta = (v: Project): Metadata => ({
    title: `${v.title} | By ${name}`,
    description: v.description,
    alternates: { canonical: `${url}/${v.slug}` },
    openGraph: {
        type: 'article',
        siteName: name,
        title: v.title,
        description: v.description,
        url: `${url}/${v.slug}`,
        section: v.type,
        tags: v.stack.map(v => v.toLowerCase()),
        publishedTime: v.published_at,
        modifiedTime: v.modified_at
    }
})

export default projectMeta