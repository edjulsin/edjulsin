import { notFound } from 'next/navigation'
import { isSlug } from 'validator'

import Project from '@/components/Project'
import sanitize from 'sanitize-html'
import projects from '@/data/projects'

const slugs = projects.map(v => v.slug)

const Page = async ({ params }: { params: Promise<{ slug: string }> }) =>
    params.then(v => {
        const slug = sanitize(v.slug + '').trim().toLowerCase()
        if(isSlug(slug) && slugs.includes(slug)) {
            const project = projects.find(v => v.slug === slug)!
            return <Project { ...project } />
        } else {
            notFound()
        }
    })

export default Page