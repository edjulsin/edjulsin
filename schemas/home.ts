import capitalize from '@/utility/capitalize'
import { Person, WithContext } from 'schema-dts'

const development = process.env.NODE_ENV === 'development'
const name = process.env.NEXT_PUBLIC_SITE_NAME as string
const url = development ? 'http://localhost:3000' : (process.env.NEXT_PUBLIC_SITE_URL as string)
const github = process.env.NEXT_PUBLIC_GITHUB as string
const linkedin = process.env.NEXT_PUBLIC_LINKEDIN as string

const schema = ({ path, description }: { path: string, description: string }): WithContext<Person> => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': name,
    'url': url + path,
    'jobTitle': 'Frontend Developer',
    'worksFor': {
        '@type': 'Organization',
        'name': 'Freelance'
    },
    'sameAs': [ github, linkedin ],
    'description': description,
    'image': url + '/banner.png',
    'knowsAbout': [ 'react', 'next', 'javascript', 'web development', 'frontend engineering' ].map(capitalize)
})

export default schema