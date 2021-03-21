import {techStack} from './constants'
import Image from 'next/image'

export default function TechStack() {
	const renderSingleTech = () => {
		return techStack.map(singleTech => (
			<li className="inline-block">
				<Image
					src={singleTech.icon}
					alt={singleTech.name}
					width={50}
					height={50}
				/>
			</li>
		))
	}

	return (
		<ul className="py-4 max-w-xl mx-auto space-x-4">{renderSingleTech()}</ul>
	)
}
