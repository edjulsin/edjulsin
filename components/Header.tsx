import Link from 'next/link'

const Header = () => (
	<header className='tracking-tight text-center xl:text-left min-h-[20dvh] font-extralight'>
		<nav className='flex items-center justify-between gap-3'>
			<Link href='/' className='text-neutral-400 text-2xl md:text-3xl xl:text-4xl'>Edwin Julian</Link>
			<a href='/resume.pdf' download='Edwin_Julian_Frontend_Resume' className='flex items-center gap-1.5 px-3 py-1.5 text-sm md:text-base xl:text-lg rounded-full bg-foreground font-semibold transition-colors'>
				<span className='text-background'>Resume</span>
				<span className='size-5 flex items-center justify-center rounded-full outline-1 outline-neutral-500 text-neutral-500'>&#8595;</span>
			</a>
		</nav>
	</header>
)

export default Header
