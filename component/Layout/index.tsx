import Navbar from './navbar'
import Footer from './footer'
import SEO from './seo';

export default function Layout({children, siteData}) {
	return (
		<div className="container mx-auto max-w-5xl py-4 px-4 text-gray-900">
			<SEO siteData={siteData}/>
			<Navbar siteData={siteData}/>
			<main>{children}</main>
			<Footer siteData={siteData}/>
		</div>
	)
}
