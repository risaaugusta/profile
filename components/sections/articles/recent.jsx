import Section from "../../structure/section";
import Container from "../../structure/container";

import Image from "next/image";
import SectionTitle from "../../blocks/section.title.block";

import Icon from "../../utils/icon.util";

import css from "../../../styles/sections/articles/recent.module.scss";

export default function Recent({ mediumArticles }) {
  const feed = mediumArticles.feed;
  const articles = mediumArticles.items;

  return (
    <Section classProp="borderBottom">
      <Container spacing={"verticalXXXXLrg"}>
        <SectionTitle
          title="Articles"
          preTitle="Personal"
          subTitle="A personal quest to become a better creative writer."
        />

        {/* <SectionTitle
					title="Coming soon" 
				/> */}

        <section className={css.projects}>
          {articles.map(
            (
              { title, pubDate, link, author, thumbnail, categories },
              index
            ) => {
              const date = new Date(pubDate).toDateString();
              return (
                <>
                  <article key={index} className={css.project}>
                    <span className={css.featuredImage}>
									<img src={thumbnail} alt="Article thumbnail" />
								</span>
                    <span className={css.header}>
                      <a href={link} rel="noreferrer" target="_blank">
                        {title}{" "}
                        <Icon icon={["fad", "arrow-up-right-from-square"]} />
                      </a>
                    </span>
                    <span className={css.descriptionContainer}></span>
                    <span className={css.details}>
                      <p>By {author}</p>
                      <p className={css.pushedAt}>{date}</p>
                    </span>
                    <span className={css.topicsContainer}>
                      {categories.map((e, index) => {
                        return (
                          <span key={index} className={css.topics}>
                            <Icon icon={["fab", "medium"]} /> {e}
                          </span>
                        );
                      })}
                    </span>
                  </article>
                </>
              );
            }
          )}
        </section>

        <section className={css.projects}>
          {/* ARTICLE 1 */}
          <article className={css.project}>
            <span className={css.header}>
              <a
                href={
                  "https://www.linkedin.com/feed/update/urn:li:activity:7197213477113905152/"
                }
                rel="noreferrer"
                target="_blank"
              >
                Congraduation! Bachelor of Computer Science{" "}
                <Icon icon={["fad", "arrow-up-right-from-square"]} />
              </a>
            </span>
            <span className={css.descriptionContainer}></span>
            <span className={css.details}>
              <p>By Risa Augusta</p>
              <p className={css.pushedAt}>May 2024</p>
            </span>
            <span className={css.topicsContainer}>
              <span className={css.topics}>
                <Icon icon={["fas", "pen-to-square"]} /> Education
              </span>
              <span className={css.topics}>
                <Icon icon={["fas", "graduation-cap"]} /> Graduation
              </span>
            </span>
          </article>

          {/* ARTICLE 2 */}
          <article className={css.project}>
            <span className={css.header}>
              <a
                href={
                  "https://www.linkedin.com/feed/update/urn:li:activity:7082930190108012544/"
                }
                rel="noreferrer"
                target="_blank"
              >
                Internship at Telkom Indonesia - MSIB Batch 4
                <Icon icon={["fad", "arrow-up-right-from-square"]} />
              </a>
            </span>
            <span className={css.descriptionContainer}></span>
            <span className={css.details}>
              <p>By Risa Augusta</p>
              <p className={css.pushedAt}>June 2023</p>
            </span>
            <span className={css.topicsContainer}>
              <span className={css.topics}>
                <Icon icon={["fas", "briefcase"]} /> Career
              </span>
              <span className={css.topics}>
                <Icon icon={["fas", "code"]} /> Developer
              </span>
            </span>
          </article>

          {/* ARTICLE 3 */}
          <article className={css.project}>
            <span className={css.header}>
              <a
                href={
                  "https://www.linkedin.com/feed/update/urn:li:activity:6923117401299464192/"
                }
                rel="noreferrer"
                target="_blank"
              >
                Pemilihan Mahasiswa Berprestasi 
                <Icon icon={["fad", "arrow-up-right-from-square"]} />
              </a>
            </span>
            <span className={css.descriptionContainer}></span>
            <span className={css.details}>
              <p>By Risa Augusta</p>
              <p className={css.pushedAt}>March 2022</p>
            </span>
            <span className={css.topicsContainer}>
              <span className={css.topics}>
                <Icon icon={["fas", "pen-to-square"]} /> Education
              </span>
            </span>
          </article>

          {/* ARTICLE 4 */}
          <article className={css.project}>
            <span className={css.header}>
              <a
                href={
                  "https://www.linkedin.com/feed/update/urn:li:activity:6807657692719579137/"
                }
                rel="noreferrer"
                target="_blank"
              >
                Beasiswa Unggulan Annual Gathering
                <Icon icon={["fad", "arrow-up-right-from-square"]} />
              </a>
            </span>
            <span className={css.descriptionContainer}></span>
            <span className={css.details}>
              <p>By Risa Augusta</p>
              <p className={css.pushedAt}>June 2021</p>
            </span>
            <span className={css.topicsContainer}>
              <span className={css.topics}>
                <Icon icon={["fas", "pen-to-square"]} /> Education
              </span>
              <span className={css.topics}>
                <Icon icon={["fas", "money-bill-wave"]} /> Scholarship
              </span>
            </span>
          </article>
         
         {/* ARTICLE 5 */}
          <article className={css.project}>
            <span className={css.header}>
              <a
                href={
                  "https://www.linkedin.com/feed/update/urn:li:activity:6877445805855375360/"
                }
                rel="noreferrer"
                target="_blank"
              >
                Youth Exchange Program - Chapter Turkey
                <Icon icon={["fad", "arrow-up-right-from-square"]} />
              </a>
            </span>
            <span className={css.descriptionContainer}></span>
            <span className={css.details}>
              <p>By Risa Augusta</p>
              <p className={css.pushedAt}>Dec 2021</p>
            </span>
            <span className={css.topicsContainer}>
              <span className={css.topics}>
                <Icon icon={["fas", "pen-to-square"]} /> Education
              </span>
              <span className={css.topics}>
                <Icon icon={["fas", "plane"]} /> Study abroad
              </span>
            </span>
          </article>

         {/* ARTICLE 6 */}
          <article className={css.project}>
            <span className={css.header}>
              <a
                href={
                  "https://radarmalang.jawapos.com/pendidikan/811079848/cegah-bencana-banjir-mahasiswa-um-ciptakan-inovasi-alat-monitor-dam"
                }
                rel="noreferrer"
                target="_blank"
              >
                Cegah Bencana Banjir, Mahasiswa UM Ciptakan Inovasi Alat Monitor DAM
                <Icon icon={["fad", "arrow-up-right-from-square"]} />
              </a>
            </span>
            <span className={css.descriptionContainer}></span>
            <span className={css.details}>
              <p>By Jawa Pos Radar Malang</p>
              <p className={css.pushedAt}>Oct 2021</p>
            </span>
            <span className={css.topicsContainer}>
              <span className={css.topics}>
                <Icon icon={["fas", "wifi"]} /> IoT
              </span> 
            </span>
          </article>

         {/* ARTICLE 7*/}
          <article className={css.project}>
            <span className={css.header}>
              <a
                href={
                  "https://www.kompasiana.com/salma0902/61459b1b06310e31482acd62/mahasiswa-um-inovasikan-sistem-pemantauan-dam-berbasis-aplikasi-sebagai-mitigasi-banjir-di-kota-malang"
                }
                rel="noreferrer"
                target="_blank"
              >
                Mahasiswa UM Inovasikan Sistem Pemantauan DAM Berbasis Aplikasi sebagai Mitigasi Banjir di Kota Malang
                <Icon icon={["fad", "arrow-up-right-from-square"]} />
              </a>
            </span>
            <span className={css.descriptionContainer}></span>
            <span className={css.details}>
              <p>By Kompasiana</p>
              <p className={css.pushedAt}>Sept 2021</p>
            </span>
            <span className={css.topicsContainer}>
              <span className={css.topics}>
                <Icon icon={["fas", "wifi"]} /> IoT
              </span> 
            </span>
          </article>
        </section>
      </Container>
    </Section>
  );
}
