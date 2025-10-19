import type { NextConfig } from 'next'

const development = process.env.NODE_ENV === 'development'

const CSP = `
    default-src 'self';
    script-src 'self' ${development ? "'unsafe-eval' 'unsafe-inline'" : ''};
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`

const nextConfig: NextConfig = {
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: CSP.replace(/\n/g, ''),
					}
				]
			}
		]
	},
}

export default nextConfig
