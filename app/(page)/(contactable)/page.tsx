import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Schema from '@/components/Schema'
import Work from '@/components/Work'
import pageMeta from '@/meta/page'
import schema from '@/schemas/home'

const name = process.env.NEXT_PUBLIC_SITE_NAME as string

const meta = {
	title: name,
	description: `${name} is a frontend developer based in Indonesia, creating modern, responsive, and user-friendly web experiences using React and Next.js.`,
	path: '/'
}

export const metadata = pageMeta(meta)

const Home = () =>
	<>
		<Schema value={schema(meta)} />
		<Hero />
		<Intro />
		<Work />
	</>

export default Home
