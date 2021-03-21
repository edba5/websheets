import Navbar from './navbar'
import Footer from './footer'

import Head from 'next/head'

export default function Layout({children}) {
	return (
		<div className="container mx-auto max-w-5xl py-4 px-4 text-gray-900">
			<Head>
				<title>Websheets</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	)
}
