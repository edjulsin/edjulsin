import type { Person, WithContext } from 'schema-dts'
import capitalize from '@/utility/capitalize'

const development = process.env.NODE_ENV === 'development'
const url = development
	? 'http://localhost:3000'
	: (process.env.NEXT_PUBLIC_SITE_URL as string)
const github = process.env.NEXT_PUBLIC_GITHUB as string
const linkedin = process.env.NEXT_PUBLIC_LINKEDIN as string

const schema = ({ title, path, description }: {
	title: string,
	description: string,
	path: string
}): WithContext<Person> => ({
	'@context': 'https://schema.org',
	'@type': 'Person',
	"name": title,
	"url": url + path,
	"description": description,
	"jobTitle": 'Frontend Developer',
	"worksFor": {
		'@type': 'Organization',
		"name": 'Freelance'
	},
	"sameAs": [github, linkedin],
	"image": url + '/banner.png',
	"knowsAbout": [
		'react',
		'next',
		'javascript',
		'web development',
		'frontend engineering'
	].map(capitalize)
})

export default schema
