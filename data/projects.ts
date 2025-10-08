import katt1 from '@/assets/katt/1.png'
import katt2 from '@/assets/katt/2.png'
import krypton1 from '@/assets/krypton/1.png'
import krypton2 from '@/assets/krypton/2.png'

const projects = [
    {
        slug: 'katt',
        title: 'katt',
        description: 'Katt is an easy-to-use blog CMS for gallery-style blogs with heavy use of images.\nSuitable for architecture or interior design website.',
        stack: [ 'next', 'typescript', 'tailwind', 'supabase', 'resend' ],
        features: [
            { title: 'Drag & drop editor', description: 'Edit images and layout with ease.' },
            { title: 'CMS', description: ' Optimized for content with heavy image usage.' },
            { title: 'Authentication', description: 'Secure login with Supabase.' },
            { title: 'Responsive design', description: 'Works across desktop, tablet, and mobile.' },
            { title: 'SEO', description: 'Make your blog search engine friendly.' },
            { title: 'Contact', description: 'Email and contact management powered by Resend.' }
        ],
        images: [
            { width: 1294, height: 1007, data: katt1 },
            { width: 1350, height: 1371, data: katt2 }
        ],
        demo: 'https://kattinterior.vercel.app/'
    },
    {
        slug: 'krypton',
        title: 'Krypton',
        description: 'Krypton is real-time cryptocurrency dashboard with interactive & customizable chart.',
        stack: [ 'react', 'd3', 'sass', 'canvas' ],
        features: [
            { title: 'Zoom & drag', description: 'Interactive chart powered by HTML5 canvas & D3.' },
            { title: 'Realtime', description: 'Realtime data handled RXJS web socket.' },
            { title: 'Pixel perfect', description: 'Super crisp chart ideal for snapshot.' },
            { title: 'Blazing fast', description: 'Optimized for heavy user interaction.' },
            { title: 'Responsive design', description: 'Work across desktop, tablet, and mobile.' },
            { title: 'Customizable', description: 'Make your own chart.' }
        ],
        images: [
            { width: 867, height: 629, data: krypton1 },
            { width: 852, height: 407, data: krypton2 },
        ],
        demo: 'https://krypton-navy.vercel.app/'
    }
]

export default projects