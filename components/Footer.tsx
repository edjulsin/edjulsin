'use client'

const Footer = () =>
	<footer className='text-neutral-500 text-center min-h-[30dvh] flex flex-col gap-y-5 md:gap-y-10 xl:gap-y-20 justify-center items-center'>
		<span className='text-base md:text-xl xl:text-3xl'>
			Somewhere in Indonesia
		</span>
		<span className='text-sm md:text-lg xl:text-2xl'>
			{new Date().getFullYear()}
		</span>
	</footer>


export default Footer
