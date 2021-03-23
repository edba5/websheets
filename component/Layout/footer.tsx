import Image from 'next/image'

export default function Footer({siteData}) {
	const {footerText, creditText, creditAuthor, creditUrl} = siteData
	return (
		<div className="py-8 text-center text-gray-500 text-sm font-light">
			<Image src="/images/logo.png" width={50} height={50} />
			<p>{footerText}</p>
			<p>
				{creditText}{' '}
				<a href={creditUrl} target="_blank" className="hover:underline">
					{creditAuthor}
				</a>
			</p>
		</div>
	)
}
