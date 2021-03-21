import TechStack from './tech-stack'

export default function Hero() {
	return (
		<div className="py-12 md:py-20 mx-auto max-w-2xl text-center">
			<h1 className="text-5xl md:text-6xl font-bold">
				Build websites with just Google Sheets
			</h1>
			<p className="py-6 font-light text-xl text-gray-600">
				This is an open-sourced project that let's you build websites simply by
				filling in a Google Sheets template.{' '}
				<span>No accounts, no dashboards, no fees!</span>
			</p>
			<TechStack />
		</div>
	)
}
