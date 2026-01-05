import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { isSlug } from 'validator'
import projects from '@/data/projects'

const slugs = projects.map(v => v.slug)

const size = { width: 1200, height: 630 }

const development = process.env.NODE_ENV === 'development'
const url = development
	? 'http://localhost:3000'
	: (process.env.NEXT_PUBLIC_SITE_URL as string)

export const generateImageMetadata = async ({ params }: { params: { slug: string } }) => {
	const slug = (params.slug + '').trim().toLowerCase()
	if(isSlug(slug) && slugs.includes(slug)) {
		const project = projects.find(v => v.slug === slug)!
		return project.images.slice(0, 1).map((v, i) => {
			return {
				id: i + 1,
				alt: v.alt,
				size: size,
				contentType: 'image/png',
			}
		})
	} else {
		return []
	}
}

const opengraph = async ({ params, id }: { id: Promise<number>, params: Promise<{ slug: string }> }) =>
	Promise.all([params, id]).then(async ([params, id]) => {
		const slug = (params.slug + '').trim().toLowerCase()
		if(isSlug(slug) && slugs.includes(slug)) {
			const project = projects.find(v => v.slug === slug)!
			const thumbnail = project.images[id]
			return readFile(
				join(
					process.cwd(),
					`/assets/${project.slug.toLowerCase()}/${id}.png`,
				),
				'base64',
			).then(
				v =>
					new ImageResponse(
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
								backgroundColor: 'black',
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
										color: 'white',
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
						size,
					),
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
					size,
				),
			)
		}
	})

export default opengraph
