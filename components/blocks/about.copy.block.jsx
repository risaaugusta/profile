// Util packages
import Icon from '../utils/icon.util'

// Utility packages
import space from '../utils/spacing.util';

/**
 * About section component block that contains the written copy
 * 
 * @param {string} 	classProp template literals of classes for contain
 * @param {array}	icon request props [ iconType, iconKey ] 
 * @param {string} 	title to be displayed 
 * @param {string} 	copy written content
 * @param {string} 	src written content
 * @returns {jsx} <CopyBlock />
 */
export default function CopyBlock({ containerClass, iconClass, icon, title, copy,copy0,copy1,copy2,copy3,copy4,copy5,copy6,copy7,copy8,time, src }) {
	return (
		<>
			<div className={containerClass}>
				<span className={iconClass}>
					<Icon icon={icon} />
					<img src={src} />
				</span>
				<h3>{title}</h3>
				<h4>{time}</h4>
				<p>
					{copy}
					<ul >
					<li>
							{copy0}
						</li>
						<li>
							{copy1}
						</li>
						<li>
						{copy2}
						</li>
						<li>
						{copy3}
						</li>
						<li>
						{copy4}
						</li>
						<li>
						{copy5}
						</li>
						<li>
						{copy6}
						</li>
						<li>
						{copy7}
						</li>
						<li>
						{copy8}
						</li>
					</ul>
				</p>
			</div>
		</>
	)
}