import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Schema from '@/components/Schema'
import Work from '@/components/Work'
import schema from '@/schemas/home'

export const metadata = {
	description: 'Edwin Julian is a frontend developer based in Indonesia, creating modern, responsive, and user-friendly web experiences using React and Next.js.',
	alternates: {
		canonical: '/'
	}
}

const Home = () =>
	<>
		<Schema
			value={ schema({
				path: metadata.alternates.canonical,
				description: metadata.description
			}) }
		/>
		<Hero />
		<Intro />
		<Work />
	</>

export default Home
