import Form from '@/components/Form'
import Schema from '@/components/Schema'
import pageMeta from '@/meta/page'
import schema from '@/schemas/contact'

const meta = {
	title: 'Contact',
	description: 'Get in touch with Edwin Julian, a frontend developer based in Indonesia. Reach out for collaborations, projects, or inquiries.',
	path: '/contact'
}

export const metadata = pageMeta(meta)

const Page = () =>
	<>
		<Schema value={schema(meta)} />
		<section className='flex flex-col items-center gap-y-25 min-h-[80dvh]'>
			<h1 className='tracking-tight w-full uppercase font-thin text-4xl/snug md:text-5xl/snug xl:text-6xl/snug text-neutral-500 text-center'>
				Contact me
			</h1>
			<Form />
		</section>
	</>


export default Page
