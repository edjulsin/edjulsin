import Contact from '@/components/Contact'
import Intersector from '@/components/Intersector'

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) =>
    <>
        { children }
        <Contact />
    </>

export default Layout