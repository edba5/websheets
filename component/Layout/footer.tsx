import Image from 'next/image'

export default function Footer() {
	return (
		<div className="py-8 text-center text-gray-500 text-sm font-light">
			<Image src="/images/logo.png" width={50} height={50} />
			<p>© WebSheets 2021</p>
			<p>
				A project by{' '}
				<a href="https://tengkuhafidz.com" className="hover:underline">
					Tengku Hafidz
				</a>
			</p>
		</div>
	)
}
