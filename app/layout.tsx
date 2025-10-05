import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={ `${geistSans.variable} ${geistMono.variable} antialiased` }
			>
				{ children }
			</body>
		</html>
	)
}
