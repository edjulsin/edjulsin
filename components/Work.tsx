import Link from 'next/link'
import React from 'react'
import projects from '@/data/projects'
import Intersector from './Intersector'

const Work = () => (
	<section className='*:uppercase min-h-[100dvh] flex flex-col justify-center gap-y-15 md:gap-y-20 xl:gap-y-25'>
		<Intersector selectors={['.work-list']} options={{ threshold: 0.5 }} />
		<h2 className='flex flex-col gap-y-2 md:gap-y-4 xl:gap-y-6'>
			<span className='text-neutral-500 text-3xl md:text-5xl xl:text-7xl'>
				Selected
			</span>
			<span className='text-4xl md:text-6xl xl:text-8xl'>Works</span>
		</h2>
		<ul
			className='
                text-4xl 
                md:text-6xl 
                xl:text-8xl 
                flex 
                flex-col
                justify-center
                group
                work-list
            '
		>
			{projects.map(v => (
				<React.Fragment key={v.slug}>
					<div className='h-px bg-neutral-800 transition-transform scale-x-0 origin-left ease-in-out duration-800 group-data-[intersected=true]:scale-x-100' />
					<li key={v.slug}>
						<Link
							className='py-5 md:py-10 xl:py-15 text-neutral-500 hover:text-foreground cursor-pointer transition-colors block'
							href={`projects/${v.slug}`}
						>
							{v.title}
						</Link>
					</li>
				</React.Fragment>
			))}
			<div className='h-px bg-neutral-800 transition-transform scale-x-0 origin-left ease-in-out duration-800 group-data-[intersected=true]:scale-x-100' />
		</ul>
	</section>
)

export default Work
