import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import Intersector from './Intersector'

const Project = ({
	title,
	stack,
	description,
	features,
	images,
	demo,
}: {
	title: string
	stack: string[]
	description: string
	features: { title: string; description: string }[]
	images: {
		width: number
		height: number
		data: StaticImageData
		alt: string
	}[]
	demo: string
}) => (
	<article className='grid xl:grid-cols-[.6fr_.4fr] gap-35 py-10'>
		<section className='flex flex-col justify-center gap-y-15'>
			<header className='flex flex-col justify-center gap-y-10'>
				<h1 className='uppercase text-6xl/tight md:text-7xl/tight xl:text-8xl/tight'>
					{title}
				</h1>
				<ul className='uppercase flex flex-wrap gap-3 text-sm md:text-base xl:text-lg font-medium'>
					{stack.map(v => (
						<li
							key={title + v}
							className='uppercase px-2 py-1 rounded-full text-neutral-500 outline-1 outline-neutral-500'
						>
							{v}
						</li>
					))}
				</ul>
				<p className='text-lg/loose md:text-xl/loose xl:text-2xl/loose whitespace-pre-wrap'>
					{description}
				</p>
			</header>
			<section className='flex flex-col justify-center gap-y-5'>
				<h3 className='capitalize text-2xl/loose md:text-3xl/loose xl:text-4xl/loose font-medium text-neutral-500 border-b-1 border-b-neutral-800'>
					Features
				</h3>
				<ul className='flex flex-col gap-y-5 xl:gap-y-10 justify-center'>
					{
						features.map(({ title, description }) =>
							<li
								key={title + description}
								className='flex flex-col text-lg/loose md:text-xl/loose xl:text-2xl/loose'
							>
								<span className='capitalize font-semibold'>
									{title}
								</span>
								<span className='text-neutral-500'>
									{description}
								</span>
							</li>
						)
					}
				</ul>
			</section>
			<section>
				<Link
					href={demo}
					target='_blank'
					rel='noopener noreferrer'
					className='uppercase text-lg md:text-xl xl:text-2xl flex items-center justify-center gap-x-2 px-1 py-2 rounded-full outline-1 outline-neutral-500 hover:bg-foreground hover:text-background transition-colors'
				>
					<span>Live demo</span>
					<span>&#8599;</span>
				</Link>
			</section>
		</section>
		<section>
			<Intersector selectors={['.project-image']} />
			<ul className='flex flex-col gap-y-10 sticky top-0 right-0'>
				{
					images.map(v =>
						<li
							className='project-image data-[intersected=true]:unfold-xy'
							key={v.data.src}
						>
							<Image
								className='size-full'
								src={v.data}
								alt={v.alt}
								width={v.width}
								height={v.height}
							/>
						</li>
					)
				}
			</ul>
		</section>
	</article>
)

export default Project
