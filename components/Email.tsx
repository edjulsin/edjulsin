import {
	Body,
	Column,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Tailwind,
	Text,
	pixelBasedPreset
} from '@react-email/components'

const url = process.env.NEXT_PUBLIC_SITE_URL as string
const banner = `${url}/banner.png`
const siteDomain = process.env.NEXT_PUBLIC_SITE_DOMAIN as string
const siteName = process.env.NEXT_PUBLIC_SITE_NAME as string

const Contact = ({
	name,
	email,
	message,
}: {
	name: string
	email: string
	message: string
}) => (
	<Html>
		<Head />
		<Preview className='capitalize'>You’ve received a new message from {siteDomain}. View the contact form details.</Preview>
		<Tailwind config={{ presets: [pixelBasedPreset] }}>
			<Body className="m-0 p-5 bg-white font-sans">
				<Container className="p-5 max-w-sm rounded-lg border-1 border-neutral-200 text-sm text-neutral-500">
					<Img
						src={banner}
						width={1200}
						height={630}
						alt={siteName}
						className="m-auto w-50 h-auto"
					/>
					<Heading className="text-center font-normal text-neutral-500 text-xl">
						Contact Form
					</Heading>
					<Section>
						<Row className='my-5'>
							<Column>
								<Text className='m-0 p-0 text-xs text-neutral-400'>Name</Text>
								<Text className='capitalize m-0 p-0 text-base'>{name}</Text>
							</Column>
						</Row>
						<Row className='my-5'>
							<Column>
								<Text className='m-0 p-0 text-xs text-neutral-400'>Email</Text>
								<Link className='m-0 p-0 underline text-base leading-[24px]' href={`mailto:${email}`}>{email}</Link>
							</Column>
						</Row>
						<Row className='my-5'>
							<Column>
								<Text className='m-0 p-0 text-xs text-neutral-400'>Message</Text>
								<Text className='m-0 p-0 text-base'>{message}</Text>
							</Column>
						</Row>
					</Section>
					<Hr className="bordert-t-1 border-neutral-200" />
					<Text className="text-neutral-400 text-xs leading-normal">
						This is an automated message. Please reply directly to the sender's email.
					</Text>
				</Container>
			</Body>
		</Tailwind>
	</Html>
)

export default Contact
