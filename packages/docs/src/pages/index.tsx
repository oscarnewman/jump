import { JumpProvider, JumpSettings, Text } from 'jump'
import { useRouter } from 'next/router'
import { HiExternalLink, HiLink, HiOutlineMail } from 'react-icons/hi'
import { GiBouncingSpring } from 'react-icons/gi'

import Button from '../components/Button'

export default function Docs() {
	const router = useRouter()

	const settings: Partial<JumpSettings> = {
		history: {
			goBack: router.back,
			push: router.push,
		},
	}

	return (
		<JumpProvider settings={settings}>
			<div className="space-y-10 p-6 max-w-md mx-auto">
				<div className="space-y-6">
					<Text
						size="4xl"
						className="text-accent-11 flex items-center space-x-2"
					>
						<GiBouncingSpring className="text-accent-9" />
						<span>Jump UI</span>
					</Text>
					<Text size="lg" className="text-gray-11">
						Jumpstart your UI with the components you really need.
					</Text>
				</div>

				<div className="space-y-4 flex flex-col items-start">
					<Text size="lg" className="font-medium text-gray-12">
						Clickable
					</Text>
					<Text>An un-styled button/link with support for:</Text>
					<ul className="list-disc">
						<li>Icons</li>
						<li>Loading state</li>
						<li>Regular on-click behavior</li>
						<li>Client-side routing</li>
						<li>External linking</li>
						<li>Analytics tracking</li>
					</ul>

					<Button leadingIcon={<HiOutlineMail />} tone="neutral">
						Hi there
					</Button>
					<Button
						href="https://google.com"
						openInNewWindow
						external
						leadingIcon={<HiExternalLink />}
						tone="neutral"
					>
						This is a link
					</Button>
					<Button leadingIcon={<HiLink />} tone="neutral" href="#foo">
						This is an internal link
					</Button>
				</div>

				<div className="space-y-4">
					<Text size="lg" className="font-medium text-gray-12">
						Text
					</Text>
					<Text>
						A solid font scale with capsized text for consistent spacing:
					</Text>

					<div className="overflow-hidden pb-2">
						<Text className="whitespace-nowrap" size="xs">
							The brown dog
						</Text>
						<Text className="whitespace-nowrap" size="sm">
							The brown dog
						</Text>
						<Text className="whitespace-nowrap" size="base">
							The brown dog
						</Text>
						<Text className="whitespace-nowrap" size="lg">
							The brown dog
						</Text>
						<Text className="whitespace-nowrap" size="xl">
							The brown dog
						</Text>
						<Text className="whitespace-nowrap" size="2xl">
							The brown dog
						</Text>
						<Text className="whitespace-nowrap" size="3xl">
							The brown dog
						</Text>
						<Text className="whitespace-nowrap" size="4xl">
							The brown dog
						</Text>
						<Text className="whitespace-nowrap" size="5xl">
							The brown dog
						</Text>
						<Text className="whitespace-nowrap" size="6xl">
							The brown dog
						</Text>
						<Text className="whitespace-nowrap" size="7xl">
							The brown dog
						</Text>
						<Text className="whitespace-nowrap" size="8xl">
							The brown dog
						</Text>
						<Text className="whitespace-nowrap" size="9xl">
							The brown dog
						</Text>
					</div>
				</div>
			</div>
		</JumpProvider>
	)
}
