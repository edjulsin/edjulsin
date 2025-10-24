import { notFound } from 'next/navigation'
import { isSlug } from 'validator'
import Project from '@/components/Project'
import Schema from '@/components/Schema'
import projects from '@/data/projects'
import schema from '@/schemas/project'
import projectMeta from '@/meta/project'

const slugs = projects.map(v => v.slug)

export const dynamicParams = false

export const generateStaticParams = async () =>
	projects.map(v => {
		return { slug: v.slug }
	})

export const generateMetadata = async ({ params, }: { params: Promise<{ slug: string }> }) =>
	params.then(
		v => {
			const slug = (v.slug + '').trim().toLowerCase()
			if(isSlug(slug) && slugs.includes(slug)) {
				const project = projects.find(v => v.slug === slug)!
				return projectMeta(project)
			} else {
				notFound()
			}
		},
		() => ({})
	)

const Page = async ({ params }: { params: Promise<{ slug: string }> }) =>
	params.then(v => {
		const slug = (v.slug + '').trim().toLowerCase()
		if(isSlug(slug) && slugs.includes(slug)) {
			const project = projects.find(v => v.slug === slug)!
			return (
				<>
					<Schema value={schema(project)} />
					<Project {...project} />
				</>
			)
		} else {
			notFound()
		}
	})

export default Page
