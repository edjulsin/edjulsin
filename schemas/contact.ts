import type { ContactPage, WithContext } from 'schema-dts'

const development = process.env.NODE_ENV === 'development'
const name = process.env.NEXT_PUBLIC_SITE_NAME
const url = development
	? 'http://localhost:3000'
	: (process.env.NEXT_PUBLIC_SITE_URL as string)

const schema = ({
	path,
	description,
}: {
	path: string
	description: string
}): WithContext<ContactPage> => ({
	'@context': 'https://schema.org',
	'@type': 'ContactPage',
	name: 'Contact',
	url: url + path,
	description: description,
	mainEntity: {
		'@type': 'Person',
		name: name,
		url: url,
		jobTitle: 'Frontend Developer'
	}
})

export default schema
