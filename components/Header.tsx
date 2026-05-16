import { DownloadIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const Header = () => (
	<header className='tracking-tight text-center xl:text-left min-h-[20dvh] font-extralight'>
		<nav className='flex items-center justify-between gap-3'>
			<Link href='/' className='text-neutral-400 text-2xl md:text-3xl xl:text-4xl'>Edwin Julian</Link>
			<a href='/resume.pdf' download='Edwin_Julian_Frontend_Resume' className='text-background flex items-center gap-1 px-3 py-1.5 text-sm md:text-base xl:text-lg rounded-full bg-foreground font-semibold transition-colors'>
				<span className='uppercase'>Resume</span>
				<span>
					<DownloadIcon />
				</span>
			</a>
		</nav>
	</header>
)

export default Header
