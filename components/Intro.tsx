import Intersector from './Intersector'

const Item = ({
	title,
	description,
}: {
	title: string
	description: string
}) =>
	<li className='flex flex-row-reverse gap-x-35 items-center group intro-item tracking-tight'>
		<h5
			className='
            uppercase 
            text-4xl/tight 
            md:text-6xl/tight 
            xl:text-8xl/tight 
            xl:basis-[55%]
            curtain-horizontal
            group-data-[intersecting=true]:curtain-horizontal-open
            group-data-[intersecting=false]:group-data-[position=-1]:curtain-horizontal-open
            group-data-[intersecting=false]:group-data-[position=1]:curtain-horizontal-close
            text-right
        '
		>
			{title}
		</h5>
		<p
			className='
            sr-only 
            xl:not-sr-only 
            xl:group-data-[intersecting=true]:slide-from-bottom
            xl:group-data-[intersecting=false]:fade-out
            xl:basis-[30%] 
            text-neutral-500 
            text-3xl/normal
        '
		>
			{description}
		</p>
	</li>

const Intro = () => (
	<section className='min-h-[150dvh] xl:min-h-[300dvh] flex flex-col justify-center'>
		<ul className='grid auto-rows-fr gap-y-20 md:gap-y-40 xl:gap-y-60'>
			<Intersector
				selectors={['.intro-item']}
				options={{ rootMargin: '0% 0% -30% 0%', threshold: 1 }}
			/>
			<Item
				title='Frontend'
				description='Frameworks come and go — fundamentals stay.'
			/>
			<Item
				title='Responsive design'
				description='Basic, but it sets professionals apart from amateurs.'
			/>
			<Item
				title='Animation & interactivity'
				description='Everyone would love it if it`s done correctly.'
			/>
			<Item
				title='Accessible & SEO'
				description='Easy to use and easy to find — the money will follow.'
			/>
			<Item
				title='Readable & testable'
				description='Maintainable code actually comes from taste.'
			/>
		</ul>
	</section>
)

export default Intro
