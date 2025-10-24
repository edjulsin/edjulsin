import type { ContactPage, WithContext } from 'schema-dts'

const development = process.env.NODE_ENV === 'development'
const name = process.env.NEXT_PUBLIC_SITE_NAME
const url = development
	? 'http://localhost:3000'
	: (process.env.NEXT_PUBLIC_SITE_URL as string)

const github = process.env.NEXT_PUBLIC_GITHUB as string
const linkedin = process.env.NEXT_PUBLIC_LINKEDIN as string

const schema = ({ title, path, description }: {
	title: string,
	path: string
	description: string
}): WithContext<ContactPage> => ({
	'@context': 'https://schema.org',
	'@type': 'ContactPage',
	"name": title,
	"url": url + path,
	"description": description,
	"mainEntity": {
		'@type': 'Person',
		"name": name,
		"url": url,
		"jobTitle": 'Frontend Developer',
		"sameAs": [github, linkedin]
	}
})

export default schema
