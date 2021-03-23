import { useContext } from 'react'
import SiteDataContext from '../../utils/SiteDataContext'
import TechStack from './tech-stack'

export default function Hero() {
	const {heroTitle, heroDescription} = useContext(SiteDataContext)
	return (
		<div className="py-12 md:py-20 mx-auto max-w-2xl text-center">
			<h1 className="text-5xl md:text-6xl font-bold">{heroTitle}</h1>
			<p className="py-6 font-light text-xl text-gray-600">{heroDescription}</p>
			<TechStack />
		</div>
	)
}
