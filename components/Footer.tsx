'use client'

const Footer = () => {
	const today = new Date().getFullYear() + ''
	return (
		<footer className='text-neutral-500 font-medium text-center tabular-nums min-h-[30dvh] flex flex-col gap-y-5 md:gap-y-10 xl:gap-y-20 justify-center items-center'>
			<span className='text-base md:text-xl xl:text-3xl'>
				<span>Remote</span>
				{' '}
				<span className='tracking-tight'>(UTC + 7)</span>
			</span>
			<time dateTime={today} className='text-sm md:text-lg xl:text-2xl'>
				{today}
			</time>
		</footer>
	)
}

export default Footer
