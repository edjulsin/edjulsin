import Project from '@/components/Project'
import sanitize from 'sanitize-html'
import projects from '@/data/projects'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isSlug } from 'validator'
import Schema from '@/components/Schema'
import schema from '@/schemas/project'
import capitalize from '@/utility/capitalize'

const development = process.env.NODE_ENV === 'development'
const url = development ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_SITE_URL
const name = process.env.NEXT_PUBLIC_SITE_NAME

const slugs = projects.map(v => v.slug)

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) =>
    params.then(
        (v): Metadata => {
            const slug = sanitize(v.slug + '').trim().toLowerCase()
            if(isSlug(slug) && slugs.includes(slug)) {
                const project = projects.find(v => v.slug === slug)!
                const path = `/projects/${v.slug}`
                return {
                    title: capitalize(project.title),
                    description: project.description,
                    alternates: { canonical: path },
                    openGraph: {
                        type: 'article',
                        siteName: name,
                        title: capitalize(project.title),
                        description: project.description,
                        url: url + path
                    }
                }
            } else {
                return {}
            }
        },
        () => ({})
    )

const Page = async ({ params }: { params: Promise<{ slug: string }> }) =>
    params.then(v => {
        const slug = sanitize(v.slug + '').trim().toLowerCase()
        if(isSlug(slug) && slugs.includes(slug)) {
            const project = projects.find(v => v.slug === slug)!
            return (
                <>
                    <Schema value={ schema(project) } />
                    <Project { ...project } />
                </>
            )
        } else {
            notFound()
        }
    })

export default Page