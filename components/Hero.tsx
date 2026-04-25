const Hero = () => (
	<section className='min-h-[80dvh] grid grid-rows-[2fr_1fr_.5fr] *:flex *:flex-col *:justify-center *:items-center'>
		<div>
			<h1 className='tracking-tight uppercase flex flex-col gap-1 md:gap-2 xl:gap-4'>
				<span className='text-5xl md:text-7xl xl:text-9xl'>
					Frontend
				</span>
				<span className='text-4xl md:text-6xl xl:text-8xl text-neutral-500 font-medium'>
					Engineer
				</span>
			</h1>
		</div>
		<div className='xl:items-end'>
			<div className='*:leading-tight flex flex-col gap-y-1 text-center justify-center tabular-nums p-5 rounded-3xl bg-neutral-900'>
				<h3 className='capitalize text-lg md:text-xl xl:text-2xl'>
					Open to Remote
				</h3>
				<small className='tracking-tight capitalize text-sm md:text-base xl:text-lg text-neutral-500 font-medium'>
					(UTC + 7)
				</small>
			</div>
		</div>
		<div className='xl:items-start'>
			<span className='text-2xl md:text-3xl xl:text-4xl font-extralight animate-bounce block'>
				&#8595;
			</span>
		</div>
	</section>
)

export default Hero
