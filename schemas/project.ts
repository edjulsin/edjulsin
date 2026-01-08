import type { CreativeWork, WithContext } from 'schema-dts'
import type Project from '@/type/project'
import capitalize from '@/utility/capitalize'

const name = process.env.NEXT_PUBLIC_SITE_NAME as string
const url = process.env.NEXT_PUBLIC_SITE_URL as string
const github = process.env.NEXT_PUBLIC_GITHUB as string
const linkedin = process.env.NEXT_PUBLIC_LINKEDIN as string

const schema = (project: Project): WithContext<CreativeWork> => {
	const thumbnail = project.screenshot
	return {
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		"name": capitalize(project.title),
		"url": `${url}/projects/${project.slug}`,
		"description": project.description,
		"creator": {
			'@type': 'Person',
			"name": name,
			"url": url,
			"jobTitle": 'Frontend Developer',
			"sameAs": [github, linkedin]
		},
		"image": {
			"@type": "ImageObject",
			"url": url + thumbnail.data.src,
			"name": thumbnail.alt,
			"width": { "@type": "QuantitativeValue", value: thumbnail.width },
			"height": { "@type": "QuantitativeValue", value: thumbnail.height }
		},
		"keywords": project.stack.map(v => v.toLowerCase()),
		"datePublished": project.published_at,
		"dateModified": project.modified_at
	}
}

export default schema
