import katt1 from '@/assets/katt/1.gif'
import katt2 from '@/assets/katt/2.gif'
import katt3 from '@/assets/katt/3.gif'
import kattScreenshot from '@/assets/katt/screenshot.png'
import krypton1 from '@/assets/krypton/1.gif'
import krypton2 from '@/assets/krypton/2.gif'
import krypton3 from '@/assets/krypton/3.gif'
import kryptonScreenshot from '@/assets/krypton/screenshot.png'
import type Project from '@/type/project'

const projects: Project[] = [
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
			width: kryptonScreenshot.width,
			height: kryptonScreenshot.height,
			data: kryptonScreenshot,
			alt: 'Krypton`s screenshot'
		},
		images: [
			{
				width: krypton1.width,
				height: krypton1.height,
				data: krypton1,
				alt: 'Krypton`s multi-chart'
			},
			{
				width: krypton2.width,
				height: krypton2.height,
				data: krypton2,
				alt: 'Krypton`s interactive chart'
			},
			{
				width: krypton3.width,
				height: krypton3.height,
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
			width: kattScreenshot.width,
			height: kattScreenshot.height,
			data: kattScreenshot,
			alt: 'Katt`s screenshot'
		},
		images: [
			{
				width: katt1.width,
				height: katt1.height,
				data: katt1,
				alt: 'Katt`s home page'
			},
			{
				width: katt2.width,
				height: katt2.height,
				data: katt2,
				alt: 'Katt`s editor during drag and resize',
			},
			{
				width: katt3.width,
				height: katt3.height,
				data: katt3,
				alt: 'Katt`s editor during crop',
			},
		],
		demo: 'https://kattinterior.vercel.app/',
	}
]

export default projects
