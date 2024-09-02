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
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Education"
					preTitle="academic"
				// subTitle="With a diverse skill set that includes UX design, UI design, full stack development, operational architecture, systems design, photography, and branding, I am a well-rounded digital professional."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/profile_01.jpg" alt="Risa's profile photo" style={{height:600, marginTop:100}} />
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock
							title="State University of Malang"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fat', 'ear-listen']}
							time="Informatics Engineering | 2020 - 2024"
							copy0="• GPA 3.91/4.00"
							copy1="• 2nd Best Graduate Faculty of Engineering"
							copy2="• Awardee Beasiswa Unggulan Kemendikbudristek"
							copy3="• 3rd Winner of The Most Outstanding Student (Faculty of Engineering)"
							copy4="• Partial-Funded Awardee Asian Youth Exchange Program Chapter Turki"
							copy5="• Awardee Research Funding Program Kreativitas Mahasiswa (PKM)"
							copy6="• Hak Cipta Program Komputer - ID EC00202143203, ID EC00202374121, ID EC00202312282"
							copy7="• Top 30 Finalist International MAIoT Challenge"
							copy8="• Finish study in 7 semester" 
						// copy="In addition to my design and technical expertise—I also have strong leadership, time management, and multitasking skills—honed through my experience as a business owner / managing partner, husband, and father of two. Outside of work, I enjoy staying active through sports such as hockey and snowboarding. I am confident in my ability to bring passion and value to any project."
						/>
						<CopyBlock
							title="Telkom Schools Malang"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fat', 'ear-listen']}
							time="Software Engineering | 2017 - 2020"
							copy1="• 1st Winner of Internet of Things Competition" 
						// copy="In addition to my design and technical expertise—I also have strong leadership, time management, and multitasking skills—honed through my experience as a business owner / managing partner, husband, and father of two. Outside of work, I enjoy staying active through sports such as hockey and snowboarding. I am confident in my ability to bring passion and value to any project."
						/> 
					</div>
				</section>
			</Container>
		</Section>
	)
}

const methods = [
	{}
]