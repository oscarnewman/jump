import { JumpProvider, JumpSettings, Text, FormControl } from 'jump-ui'
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
			<div className="space-y-10 p-6 max-w-md mx-auto pb-24">
				<div className="space-y-6">
					<Text
						size="4xl"
						className="text-accent-11 flex items-center space-x-2"
					>
						<GiBouncingSpring className="text-accent-9" />
						<span>Jump UI</span>
					</Text>
					<Text size="lg" className="text-gray-11">
						Jumpstart UI with the components you need.
					</Text>
				</div>

				<nav className="flex gap-2">
					<a href="#clickable" className="text-accent-11 underline">
						Clickable
					</a>
					<a href="#text" className="text-accent-11 underline">
						Text
					</a>
					<a href="#form-control" className="text-accent-11 underline">
						Form Control
					</a>
				</nav>

				<div id="clickable" className="space-y-4 flex flex-col items-start">
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

				<div id="text" className="space-y-4">
					<Text size="lg" className="font-medium text-gray-12">
						Text
					</Text>
					<Text>
						A solid font scale with capsized text for consistent spacing:
					</Text>

					<div id="form-control" className="overflow-hidden pb-2">
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

				<div className="space-y-8">
					<div className="space-y-4">
						<Text size="lg" className="font-medium text-gray-12">
							Form Control Wrapper
						</Text>

						<Text>Label and error state for form inputs</Text>
					</div>

					<FormControl label="First name" error="First name is required">
						<input
							className="bg-gray-3 border rounded border-gray-5 w-full py-1 px-2"
							type="text"
							placeholder="Placeholder Input Tag"
						/>
					</FormControl>
					<FormControl label="First name" error="First name is required">
						<select className="w-full">
							<option value="">One</option>
							<option value="">Two</option>
							<option value="">Three</option>
							<option value="">Four</option>
						</select>
					</FormControl>
				</div>
			</div>
		</JumpProvider>
	)
}
