import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const development = process.env.NODE_ENV === 'development'
const url = development ? 'http://localhost:3000' : (process.env.NEXT_PUBLIC_SITE_URL as string)

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	metadataBase: new URL(url),
	referrer: 'strict-origin-when-cross-origin',
	pinterest: { richPin: true }
}

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) =>
	<html lang='en'>
		<body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-center items-center`}>
			<div className='w-full h-auto max-w-7xl *:w-full font-sans px-8 *:flex *:flex-col *:justify-center'>
				{children}
			</div>
		</body>
	</html>


export default Layout
