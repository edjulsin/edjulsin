import type { CreativeWork, WithContext } from 'schema-dts'
import type Project from '@/type/project'
import capitalize from '@/utility/capitalize'

const development = process.env.NODE_ENV === 'development'
const name = process.env.NEXT_PUBLIC_SITE_NAME
const url = development
	? 'http://localhost:3000'
	: (process.env.NEXT_PUBLIC_SITE_URL as string)

const schema = (project: Project): WithContext<CreativeWork> => {
	const [thumbnail] = project.images
	return {
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		name: capitalize(project.title),
		url: `${url}/projects/${project.slug}`,
		description: project.description,
		creator: {
			'@type': 'Person',
			name: name,
			url: url
		},
		image: url + thumbnail.data.src,
		keywords: project.stack.map(capitalize)
	}
}

export default schema
