import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Layout = ({ children }: { children: React.ReactNode }) => (
	<>
		<Header />
		<main>{children}</main>
		<Footer />
	</>
)

export default Layout
