export default function TemplatesList({items}) {
	const renderTags = tags => {
		return tags.map(tag => (
			<span className="font-light text-gray-500 mr-2" key={tag}>#{tag}</span>
		))
	}

	const renderTemplates = () => {
		return items.map(({title, tags, imageUrl, destinationUrl}, index) => (
			<div key={`${title}+${index}`}>
				<a href={destinationUrl} target="_blank">
					<img
						src={imageUrl}
						className="rounded-xl shadow-lg hover:shadow-2xl cursor-pointer w-full"
					/>
				</a>
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
