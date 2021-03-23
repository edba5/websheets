import { GetStaticProps } from "next"
import React from "react"
import Hero from '../component/Home/hero'
import TemplatesList from '../component/Home/templates-list'
import Layout from '../component/Layout'
import { getItems, getSiteData } from "../services/sheet"
import { SiteDataProvider } from "../utils/SiteDataContext"


export default function Index({ siteData, items }) {
	return (
    <SiteDataProvider value={siteData}>
      <Layout>
        <Hero />
        <TemplatesList items={items} />
      </Layout>
    </SiteDataProvider>
    )
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

