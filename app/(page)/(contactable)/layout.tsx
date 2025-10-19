import Contact from '@/components/Contact'

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
	<>
		{children}
		<Contact />
	</>
)

export default Layout
