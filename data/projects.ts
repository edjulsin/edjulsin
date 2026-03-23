import type Project from '@/type/project'

import katt1 from '@/assets/katt/1.gif'
import katt2 from '@/assets/katt/2.gif'
import katt3 from '@/assets/katt/3.gif'
import kattScreenshot from '@/assets/katt/screenshot.png'
import krypton1 from '@/assets/krypton/1.gif'
import krypton2 from '@/assets/krypton/2.gif'
import krypton3 from '@/assets/krypton/3.gif'
import kryptonScreenshot from '@/assets/krypton/screenshot.png'
import finns1 from '@/assets/finns/1.png'
import finns2 from '@/assets/finns/2.png'
import finns3 from '@/assets/finns/3.png'
import finnsScreenshot from '@/assets/finns/screenshot.png'

const projects: Project[] = [
	{
		type: 'frontend',
		slug: 'finns',
		title: 'Finns',
		description: 'An interactive booking engine optimized for high conversion, designed for FINNS Beach Club—Bali’s most visited destination.',
		stack: ['next', 'typescript', 'd3', 'tailwind', 'radix-ui', 'figma'],
		published_at: new Date('2026-03-24').toISOString(),
		modified_at: new Date('2026-03-24').toISOString(),
		features: [
			{
				title: 'High-fidelity Booking Engine',
				description: 'Conversion-driven seat selection.'
			},
			{
				title: 'Zoom & Drag',
				description: 'Interactive SVG seat chart powered by D3.js.',
			},
			{
				title: 'Adaptive UI System',
				description: 'Non-blocking UI for seamless selection on any screen.',
			},
			{
				title: 'Multi-date Booking System',
				description: 'Select seats across multiple dates in one booking.',
			},
			{
				title: 'Real-time Booking System',
				description: 'Get real-time notification on seats availablity.',
			},
			{
				title: 'Smart Selection',
				description: 'One click to find the best available seats.',
			},
			{
				title: 'Shareable Booking State',
				description: 'Easily share selected seats to enable faster decision-making.',
			},
		],
		screenshot: { data: finnsScreenshot, alt: 'Finns` screenshot' },
		images: [
			{
				data: finns1,
				alt: 'Finns booking UI'
			},
			{
				data: finns2,
				alt: 'Finns product page'
			},
			{
				data: finns3,
				alt: 'Finns checkout page',
			}
		],
		demo: 'https://finns-eight.vercel.app/book',
	},
	{
		type: 'frontend',
		slug: 'krypton',
		title: 'Krypton',
		description: 'Krypton is real-time cryptocurrency dashboard with interactive & customizable chart.',
		stack: ['react', 'd3', 'sass', 'canvas'],
		published_at: new Date('2021-01-30').toISOString(),
		modified_at: new Date('2025-10-09').toISOString(),
		features: [
			{
				title: 'Zoom & Drag',
				description: 'Interactive charts powered by HTML5 Canvas and D3.js.',
			},
			{
				title: 'Realtime',
				description: 'Realtime data streaming via RxJS WebSocket.',
			},
			{
				title: 'Pixel-Perfect',
				description: 'Super-crisp charts, perfect for snapshots.',
			},
			{
				title: 'Responsive Design',
				description: 'Works seamlessly on desktop, tablet, and mobile.',
			},
			{
				title: 'Full Customization',
				description: 'Create and customize your own charts.',
			},
		],
		screenshot: {
			data: kryptonScreenshot,
			alt: 'Krypton`s screenshot'
		},
		images: [
			{
				data: krypton1,
				alt: 'Krypton`s multi-chart'
			},
			{
				data: krypton2,
				alt: 'Krypton`s interactive chart'
			},
			{
				data: krypton3,
				alt: 'Krypton`s chart using websocket',
			}
		],
		demo: 'https://krypton-navy.vercel.app/',
	},
	{
		type: 'fullstack',
		slug: 'katt',
		title: 'Katt',
		description: 'Katt is an easy-to-use blog CMS for gallery-style blogs with heavy image use. It’s suitable for architecture or interior design websites.',
		stack: ['next', 'typescript', 'tailwind', 'supabase', 'resend', 'radix-ui'],
		published_at: new Date('2025-02-19').toISOString(),
		modified_at: new Date('2025-10-24').toISOString(),
		features: [
			{
				title: 'Drag & Drop Editor',
				description: 'Easily edit images and layouts with a simple interface.',
			},
			{
				title: 'CMS',
				description: 'Optimized for content-rich blogs with heavy image usage.',
			},
			{
				title: 'Database & User Management',
				description: 'Securely powered by Supabase for seamless data handling.',
			},
			{
				title: 'Responsive Design',
				description: 'Works flawlessly across desktop, tablet, and mobile devices.',
			},
			{
				title: 'SEO',
				description: 'Optimize your blog to rank higher in search engines.',
			},
		],
		screenshot: {
			data: kattScreenshot,
			alt: 'Katt`s screenshot'
		},
		images: [
			{
				data: katt1,
				alt: 'Katt`s home page'
			},
			{
				data: katt2,
				alt: 'Katt`s editor during drag and resize',
			},
			{
				data: katt3,
				alt: 'Katt`s editor during crop',
			},
		],
		demo: 'https://kattinterior.vercel.app/',
	}
]

export default projects
