import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { isSlug } from 'validator'
import projects from '@/data/projects'

const slugs = projects.map(v => v.slug)

const size = { width: 1200, height: 630 }

const type = 'image/png'

const url = process.env.NEXT_PUBLIC_SITE_URL as string

export const generateImageMetadata = async ({ params }: { params: { slug: string } }) => {
	const slug = (params.slug + '').trim().toLowerCase()
	const index = slugs.findIndex(v => v === slug)
	if(isSlug(slug) && index >= 0) {
		return [projects[index]].map((v, i) => {
			return {
				id: i,
				alt: v.screenshot.alt,
				size: size,
				contentType: type,
			}
		})
	} else {
		return []
	}
}

const opengraph = async ({ params }: { params: Promise<{ slug: string }> }) =>
	params.then(async params => {
		const slug = (params.slug + '').trim().toLowerCase()
		const index = slugs.findIndex(v => v === slug)
		if(isSlug(slug) && index >= 0) {
			const project = projects[index]
			const thumbnail = project.screenshot
			return readFile(
				join(
					process.cwd(),
					`/assets/${project.slug.toLowerCase()}/screenshot.png`,
				),
				'base64',
			).then(
				v => new ImageResponse(
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							height: '100%',
							width: '100%',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '25px',
							padding: '50px',
							backgroundColor: '#0a0a0a',
						}}
					>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								width: '30%',
								height: '100%',
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: '15px',
							}}
						>
							<h1
								style={{
									textTransform: 'uppercase',
									writingMode: 'vertical-rl',
									transform: 'rotate(-90deg)',
									textOrientation: 'upright',
									fontSize: '75px',
									color: '#ededed',
									textAlign: 'center',
								}}
							>
								{project.title}
							</h1>
						</div>
						<img
							style={{
								width: '70%',
								height: '100%',
								objectFit: 'cover',
								objectPosition: 'center',
								borderRadius: '15px',
							}}
							src={`data:image/png;base64,${v}`}
							alt={thumbnail.alt}
							width={thumbnail.width}
							height={thumbnail.height}
						/>
					</div>,
					size
				)
			)
		} else {
			return Promise.resolve(
				new ImageResponse(
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							height: '100%',
							width: '100%',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<img
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								objectPosition: 'center',
							}}
							src={url + '/banner.png'}
							alt='Edwin Julian'
							width={size.width}
							height={size.height}
						/>
					</div>,
					size
				)
			)
		}
	})

export default opengraph
