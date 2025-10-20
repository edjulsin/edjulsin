import katt1 from '@/assets/katt/1.png'
import katt2 from '@/assets/katt/2.png'
import krypton1 from '@/assets/krypton/1.png'
import krypton2 from '@/assets/krypton/2.png'

const projects = [
	{
		slug: 'katt',
		title: 'Katt',
		description: 'Katt is an easy-to-use blog CMS for gallery-style blogs with heavy image use. It’s suitable for architecture or interior design websites.',
		stack: ['next', 'typescript', 'tailwind', 'supabase', 'resend'],
		features: [
			{
				title: 'Drag & drop editor',
				description: 'Edit images and layout with ease.',
			},
			{
				title: 'CMS',
				description: 'Optimized for content with heavy image usage.',
			},
			{
				title: 'Authentication',
				description: 'Secure login with Supabase.',
			},
			{
				title: 'Responsive design',
				description: 'Works across desktop, tablet, and mobile.',
			},
			{
				title: 'SEO',
				description: 'Turn your blog into a search-engine favorite.'
			},
		],
		images: [
			{ width: katt1.width, height: katt1.height, data: katt1, alt: 'Katt`s home page' },
			{
				width: katt2.width,
				height: katt2.height,
				data: katt2,
				alt: 'Katt`s editor page',
			},
		],
		demo: 'https://kattinterior.vercel.app/',
	},
	{
		slug: 'krypton',
		title: 'Krypton',
		description: 'Krypton is real-time cryptocurrency dashboard with interactive & customizable chart.',
		stack: ['react', 'd3', 'sass', 'canvas'],
		features: [
			{
				title: 'Zoom & drag',
				description: 'Interactive chart powered by HTML5 canvas & D3.',
			},
			{
				title: 'Realtime',
				description: 'Realtime data handled RXJS web socket.',
			},
			{
				title: 'Pixel perfect',
				description: 'Super-crisp chart, ideal for snapshots.',
			},
			{
				title: 'Responsive design',
				description: 'Work across desktop, tablet, and mobile.',
			},
			{ title: 'Customizable', description: 'Make your own chart.' },
		],
		images: [
			{
				width: krypton1.width,
				height: krypton1.height,
				data: krypton1,
				alt: 'Krypton`s primary chart',
			},
			{
				width: krypton2.width,
				height: krypton2.height,
				data: krypton2,
				alt: 'Krypton`s secondary chart',
			},
		],
		demo: 'https://krypton-navy.vercel.app/',
	},
]

export default projects
