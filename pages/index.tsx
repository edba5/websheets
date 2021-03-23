import { GetStaticProps } from "next"
import Home from "../component/Home"
import { getItems, getSiteData } from "../services/sheet"

export default function Index({ siteData, items }) {
	return <Home siteData={siteData} items={items}/>
}

export const getStaticProps: GetStaticProps = async () => {
  const items = await getItems()
  const siteData = await getSiteData()

  return {
    props: {
      siteData,
      items,
    },
  }
}

