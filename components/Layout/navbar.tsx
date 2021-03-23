import Image from 'next/image'
import { useContext } from 'react'
import SiteDataContext from '../../utils/SiteDataContext'
import GiftIcon from './gift-icon'

export default function Navbar() {
	const {
		navMenuText,
		navMenuUrl,
		navButtonText,
		navButtonUrl,
		themeColor,
		logoUrl,
	} = useContext(SiteDataContext)
	return (
		<div className="flex">
			<div className="flex-grow">
				<img src={logoUrl} alt="logo" width={50} height={50} />
			</div>
			<div>
				<a
					href={navMenuUrl}
					className="text-gray-600 hover:underline"
					target="_blank"
				>
					{navMenuText}
				</a>
				<button
					className={`ml-4 md:ml-8 py-2 px-4 rounded-md text-white bg-green-600 hover:bg-green-700`}
				>
					<a href={navButtonUrl} target="_blank">
						<span className="mr-2">{navButtonText}</span>
						<GiftIcon />
					</a>
				</button>
			</div>
		</div>
	)
}
