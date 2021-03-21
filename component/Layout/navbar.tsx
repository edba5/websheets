import Image from 'next/image'
import GiftIcon from './gift-icon'

export default function Navbar() {
	return (
		<div className="flex">
			<div className="flex-grow">
				<Image
					src="/images/logo.png"
					alt="websheets logo"
					width={50}
					height={50}
				/>
			</div>
			<div>
				<a
					href="https://docs.websheets.co"
					className="text-gray-600 hover:underline"
				>
					How it works
				</a>
				<button className="ml-4 md:ml-8 py-2 px-4 rounded-md text-white bg-green-600 hover:bg-green-700">
					<a href="https://buymeacoffee.com/sohafidz" target="_blank">
						<span className="mr-2">Treat The Dev</span>
						<GiftIcon />
					</a>
				</button>
			</div>
		</div>
	)
}
