import { notFound } from 'next/navigation'
import { isSlug } from 'validator'
import Project from '@/components/Project'
import Schema from '@/components/Schema'
import projects from '@/data/projects'
import projectMeta from '@/meta/project'
import schema from '@/schemas/project'
import Pagination from '@/components/Pagination'
import { Separator } from 'radix-ui'

const slugs = projects.map(v => v.slug)

export const dynamicParams = false

export const generateStaticParams = async () =>
	projects.map(v => {
		return { slug: v.slug }
	})

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) =>
	params.then(v => {
		const slug = (v.slug + '').trim().toLowerCase()
		const index = slugs.findIndex(v => v === slug)
		if(isSlug(slug) && index >= 0) {
			return projectMeta(projects[index])
		} else {
			notFound()
		}
	})

const Page = async ({ params }: { params: Promise<{ slug: string }> }) =>
	params.then(v => {
		const slug = (v.slug + '').trim().toLowerCase()
		const index = slugs.findIndex(v => v === slug)
		if(isSlug(slug) && index >= 0) {
			const project = projects[index]
			return (
				<>
					<Schema value={schema(project)} />
					<Project {...project} />
					<Separator.Root orientation='horizontal' className='h-px w-full bg-neutral-900' />
					<Pagination index={index} />
				</>
			)
		} else {
			notFound()
		}
	})

export default Page
