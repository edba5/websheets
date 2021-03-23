import Layout from '../Layout'
import Hero from './hero'
import Templates from './templates'

export default function Home({siteData, items}) {
	return (
		<Layout siteData={siteData}>
			<Hero siteData={siteData} />
			<Templates items={items} />
		</Layout>
	)
}

