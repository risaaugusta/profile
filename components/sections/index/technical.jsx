// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hardskills"
					subTitle="As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<BadgesBlock
							title="Mobile Apps Development"
							copy=""
							list={mobile}
							block="mobile"
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon}
						/>
						<BadgesBlock
							title="Web Development"
							copy=""
							list={web}
							block="web"
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon}
						/>
						<BadgesBlock
							title="Project Management"
							copy=""
							list={project}
							block="project"
							fullContainer="fullContainer"
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon}
						/>
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const mobile = [
	{ key: 'flutter', name: 'flutter', type: 'devicon' },
	{ key: 'swift', name: 'swift', type: 'devicon' },
	{ key: 'react', name: 'React Native', type: 'devicon' },
	{ key: 'fastapi', name: 'REST API', type: 'devicon' },
	{ key: 'figma', name: 'Figma', type: 'devicon' },
	{ key: 'vscode', name: 'VSCode', type: 'devicon' },
	{ key: 'xcode', name: 'XCode', type: 'devicon' },
	{ key: 'androidstudio', name: 'Android Studio', type: 'devicon' },
	{ key: 'xcode', name: 'XCode', type: 'devicon' },
	{ key: 'mailbox', name: 'Postman', type: 'fas' }, 
	{ key: 'sqlite', name: 'sqlite', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'android', name: 'Android', type: 'devicon' },
	{ key: 'apple', name: 'IOS', type: 'devicon' },
]

const web = [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJS', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'jquery', name: 'jQuery', type: 'devicon' },
	{ key: 'bootstrap', name: 'bootstrap', type: 'devicon' },
	{ key: 'sass', name: 'SASS', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'mysql', name: 'MySQL', type: 'devicon' }
]

const project = [
	{ key: 'jira', name: 'Jira', type: 'devicon' },
	{ key: 'trello', name: 'trello', type: 'devicon' }, 
]