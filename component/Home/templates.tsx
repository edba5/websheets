import {templates} from './constants'

export default function Templates() {
	const renderTags = tags => {
		return tags.map(tag => (
			<span className="font-light text-gray-500 mr-2">#{tag}</span>
		))
	}

	const renderTemplates = () => {
		return templates.map(({title, tags, imageUrl}) => (
			<div>
				<img
					src={imageUrl}
					className="rounded-xl shadow-lg hover:shadow-2xl cursor-pointer w-full"
				/>
				<h3 className="font-semibold text-xl mt-4">{title}</h3>
				{renderTags(tags)}
			</div>
		))
	}

	return (
		<div className="py-4 mb-24 grid md:grid-cols-3 md:gap-x-8 gap-y-16 md:gap-y-16">
			{renderTemplates()}
		</div>
	)
}
