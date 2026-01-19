import Link from 'next/link'

const Header = () => (
	<header className='tracking-tight text-2xl md:text-3xl xl:text-4xl text-neutral-400 text-center xl:text-left min-h-[20dvh] font-extralight'>
		<nav>
			<Link href='/'>Edwin Julian</Link>
		</nav>
	</header>
)

export default Header
