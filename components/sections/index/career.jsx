// Core packages
import Image from "next/image";

import Badges from "../../utils/badge.list.util";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Career scss
import career from "../../../styles/sections/index/career.module.scss";

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Career"
          // subTitle="I am current managing, designing, and developing all consumer and digital product initiatives at My Supply Co."
        />
        <section className={career.area}>
          {/* BIT */}
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>PT Bringin Inti Teknologi </h3>
                <h4>Mobile Developer | Full-time</h4>
                <h4>Jan 2024 - Jan 2026 · 2 yrs</h4>
                <h5>Jakarta</h5>
              </span>
              <ul className={career.list}>
                <li>
                  • Troubleshooting, bug-fixing, and code optimization the existing Homespot App by BRI
                </li> 
                <li>
                  • Developed Homespot App revamp version by BRI, BRIBox Trackmate App, and ETWPAD App
                </li> 
                <li>
                  • Working with BloC and GetX state management with clean architecture pattern
                </li> 
                <li>
                  • Collaborated closely with project manager, back end developer, and QA
                </li>
                <li>
                  • Responsible to app production and submission to Google Play Store, ensuring timely and successful releases
                </li>  
              </ul>
              <Badges
                list={feBIT}
                block="stack"
                fullContainer="fullContainer"
              />
            </div>
            <div className={career.companyAlt}></div>
          </article>

          {/* TELKOM */}
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Telkom Indonesia</h3>
                <h4>Internship</h4>
                <h4>Feb 2023 - June 2023 · 5 mos</h4>
                <h5>Bandung</h5>
              </span>
              <p>
                I worked at Digital Amoeba. Digital Amoeba is a Corporate
                Innovation Lab by Telkom Indonesia that incubates and
                accelerates ideas from its employees which creates digital
                innovation and digital talents.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.companyPositions}>
            {/* <div className={career.position}>
							<div className={career.positionContent}>
								<span class={career.positionHeader}>
									<h3>Director of Product Design and Development</h3>
									<h4>Nov 2021 - Present · 1 yrs 3 mos</h4>
								</span>
								<p>
								I am responsible for the ideation, planning, and development of new consumer goods—and customer and employee facing microservice software. During these projects I work with key stakeholders within our company and supplychain to ensure and meet quality goals across multiple domains.
								</p>
							</div>
							<div className={career.positionAlt}></div>
						</div> */}

            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Front End Web Developer</h3>
                  <h4>Apr 2023 - Jun 2023 · 3 mos</h4>
                </span>
                <ul className={career.list}>
                  <li>• Developed and revamp Eventeer Website V2</li>
                  <li>
                    • Developed Digital Amoeba landing page for the company
                    showcase with stunning visuals and user interaction.
                  </li>
                  <li>
                    • Troubleshooting and bug fixing to improve web performance.
                  </li>
                  <li>
                    • Collaborated with stakeholders, UI/UX designers, system
                    analyst, backend developers, QA, and DevOps team.
                  </li>
                </ul>
                <Badges
                  list={telkomWeb}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>

            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Front End Mobile Developer</h3>
                  <h4>Feb 2023 - Apr 2023 · 3 mos</h4>
                </span>
                <ul className={career.list}>
                  <li>
                    • Troubleshooting, bug-fixing, and code optimization the existing Eventeer App V1 using React Native and React Expo
                  </li>
                  <li>• Reducing app size ~20% by removing unnecessary function, code, and resources</li>
                  <li>• Developed Eventeer App V2 using Flutter with GetX state management</li>
                  <li>• Troubleshooting and bug fixing on Eventeer App V2 .</li>
                  <li>
                    • Collaborated with stakeholders, UI/UX designers, system
                    analyst, backend developers, QA, and DevOps team.
                  </li>
                </ul>
                <Badges
                  list={telkomMobile}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>

          {/* UM */}
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>State University of Malang</h3>
                <h4>Practicum Assistant | Part-time</h4>
                <h4>Sep 2022 - Dec 2022 · 4 mos</h4>
                <h5>Malang</h5>
              </span>
              <ul className={career.list}>
                <li>• Handle 60+ students</li>
                <li>
                  • Assisting Mrs. Ir. Triyanna Widiyaningtyas, S.T. M.T. for
                  Database and Information System course
                </li>
                <li>• Manage practicum, assignments, and score</li>
              </ul>
              <Badges
                list={practicumUM}
                block="stack"
                fullContainer="fullContainer"
              />
            </div>
            <div className={career.companyAlt}></div>
          </article>

          {/* HPU */}
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>PT Harmoni Panca Utama </h3>
                <h4>Junior Software Engineer | Part-time</h4>
                <h4>Oct 2021 - May 2022 · 8 mos</h4>
                <h5>Jakarta</h5>
              </span>
              <ul className={career.list}>
                <li>
                  • Developed a synchronized fuel management system mobile app that impactful for 10++ mining site
                </li>
                <li>
                  • Created various fuel transactions features, OTP auth, and QR code scanner using Flutter, REST APIs, and SQLite
                </li>
                <li>
                  • Managing end to end development cycle for mobile
                </li>
                <li>
                  • Collaborated closely with team leader and back end developer
                </li>
              </ul>
              <Badges
                list={jseHPU}
                block="stack"
                fullContainer="fullContainer"
              />
            </div>
            <div className={career.companyAlt}></div>
          </article>

          {/* ARDAWORKS */}
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Ardaworks</h3>
                <h4>Full-time</h4>
                <h4>Jul 2020 - Sep 2022 · 2 yrs 3 mos</h4>
                <h5>Jakarta</h5>
              </span>
              <p>
                Ardaworks build software that empowers organizations to
                effectively integrate their data, decisions, and operations.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
          <article className={career.companyPositions}>
            {/* <div className={career.position}>
							<div className={career.positionContent}>
								<span class={career.positionHeader}>
									<h3>Director of Product Design and Development</h3>
									<h4>Nov 2021 - Present · 1 yrs 3 mos</h4>
								</span>
								<p>
								I am responsible for the ideation, planning, and development of new consumer goods—and customer and employee facing microservice software. During these projects I work with key stakeholders within our company and supplychain to ensure and meet quality goals across multiple domains.
								</p>
							</div>
							<div className={career.positionAlt}></div>
						</div> */}

            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Project Manager</h3>
                  <h4>Jan 2021 - Sep 2022 · 1 yr 9 mos</h4>
                </span>
                <ul className={career.list}>
                  <li>
                    • Finished two projects in 12 months that increasing
                    50.000++ user
                  </li>
                  <li>
                    • Identified ticket task, acceptance criteria, DOD, and
                    timeline for project development
                  </li>
                  <li>
                    • Scheduled and facilitated meetings between UI/UX designer,
                    developer team, and QA to discuss deliverables, schedules
                    and conflicts
                  </li>
                </ul>
                <Badges
                  list={pmArda}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>

            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Junior Software Engineer</h3>
                  <h4>Jul 2020 - Apr 2021 · 3 mos</h4>
                </span>
                <ul className={career.list}>
                  <li>• Support develope mobile apps</li>
                  <li>
                    • Contributed to daily scrum meetings with team updates
                  </li>
                </ul>
                <Badges
                  list={jseArda}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>

          {/* GAMATECHNO */}
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>PT Gamatechno Indonesia</h3>
                <h4>Front End Developer | Internship</h4>
                <h4>Jun 2019 - Sep 2021 · 3 mos</h4>
                <h5>Yogyakarta</h5>
              </span>
              <ul className={career.list}>
                <li>
                  • Developed academic information system website using GTFW
                  Framework (Gamatechno Framework)
                </li>
                <li>
                  • Developed room inventory mobile apps using java native on
                  Android Studio
                </li>
              </ul>
              <Badges
                list={feGama}
                block="stack"
                fullContainer="fullContainer"
              />
            </div>
            <div className={career.companyAlt}></div>
          </article>
        </section>
      </Container>
    </Section>
  );
}

const telkomWeb = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: 'fastapi', name: 'REST API', type: 'devicon' },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "bootstrap", name: "Bootstrap", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
];

const telkomMobile = [
  { key: "react", name: "React Native", type: "devicon" },
  { key: "flutter", name: "Flutter", type: "devicon" },
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "dart", name: "Dart", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: 'fastapi', name: 'REST API', type: 'devicon' },
  { key: "git", name: "Git", type: "devicon" },
];

const practicumUM = [
  { key: "jquery", name: "jquery", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "microsoftsqlserver", name: "microsoftsqlserver", type: "devicon" },
];

const pmArda = [
  { key: "jira", name: "jira", type: "devicon" },
  { key: "trello", name: "trello", type: "devicon" },
];

const jseArda = [
  { key: "flutter", name: "flutter", type: "devicon" },
  { key: "dart", name: "dart", type: "devicon" },
  { key: "figma", name: "figma", type: "devicon" },
];

const jseHPU = [
  { key: "flutter", name: "flutter", type: "devicon" },
  { key: "dart", name: "dart", type: "devicon" },
  { key: "sqlite", name: "sqlite", type: "devicon" },
  { key: 'fastapi', name: 'REST API', type: 'devicon' },
  { key: "android", name: "android", type: "devicon" },
  { key: "figma", name: "figma", type: "devicon" },
];

const feBIT = [
  { key: "flutter", name: "flutter", type: "devicon" },
  { key: "dart", name: "dart", type: "devicon" },
  { key: "android", name: "android", type: "devicon" },
  { key: 'fastapi', name: 'REST API', type: 'devicon' },
  { key: "figma", name: "figma", type: "devicon" },
];

const feGama = [
  { key: "postgresql", name: "postgresql", type: "devicon" },
  { key: "mysql", name: "mysql", type: "devicon" },
  { key: "jquery", name: "jquery", type: "devicon" },
];
