import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: [ "latin" ],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: [ "latin" ],
})

export const metadata: Metadata = {
	title: 'Edwin Julian Sinaga',
	description: 'Experienced front-end web developer based in Indonesia. I turn complex problems into elegant, scalable solutions through thoughtful design and clean code.'
}

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) =>
	<html lang='en'>
		<body className={ `${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-center items-center` }>
			<div className='w-full h-auto max-w-7xl *:w-full font-sans px-8 *:flex *:flex-col *:justify-center'>
				<Header />
				<main>
					{ children }
					<Contact />
				</main>
				<Footer />
			</div>
		</body>
	</html>



export default Layout