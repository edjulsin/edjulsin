import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import sanitize from 'sanitize-html'
import { isSlug } from 'validator'
import Project from '@/components/Project'
import Schema from '@/components/Schema'
import projects from '@/data/projects'
import schema from '@/schemas/project'
import capitalize from '@/utility/capitalize'

const name = process.env.NEXT_PUBLIC_SITE_NAME

const slugs = projects.map(v => v.slug)

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{ slug: string }>
}) =>
	params.then(
		(v): Metadata => {
			const slug = sanitize(v.slug + '')
				.trim()
				.toLowerCase()
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
						url: path
					}
				}
			} else {
				return {}
			}
		},
		() => ({}),
	)

const Page = async ({ params }: { params: Promise<{ slug: string }> }) =>
	params.then(v => {
		const slug = sanitize(v.slug + '')
			.trim()
			.toLowerCase()
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
