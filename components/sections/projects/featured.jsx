import FeaturedProject from "../../blocks/projects/featured";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";
import Badges from "../../utils/badge.list.util";
import Icon from "../../utils/icon.util";
import SectionTitle from "../../blocks/section.title.block";

import css from "../../../styles/sections/projects/featured.module.scss";
import content from "../../../content/projects/featured.json";
import button from "../../../styles/blocks/button.module.scss";

export default function FeaturedProjects() {
  return (
    <Section classProp={css.hasBg}>
      <Container spacing={"verticalXXXXLrg"}>
        <SectionTitle
          title="Featured Projects"
          preTitle="Software Engineering"
          subTitle="Focusing on the front end development."
        />{" "}
        {content.map((data, index) => {
          return <FeaturedProject content={data} index={index} key={index} />;
        })}
        <div style={{textAlign: "center"}}>
          <button
            className={`button ${button.primary} leaveSite`}
            onClick={() =>
              window.open(
                "https://bit.ly/RisaAM_Portfolio_Aug2025",
                "_blank"
              )
            }
          >
            See all portofolio
          </button>
        </div>
      </Container>
      <div className={css.bgContainer}>
        <span className={css.orbitalBg}>
          <span class={`${css.bgSection}`}>
            <span
              className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}
            ></span>
          </span>
          <span class={`${css.bgSection}`}>
            <span className={`${css.bgInner} ${css.heroCenter}`}></span>
          </span>
          <span class={`${css.bgSection}`}>
            <span
              className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}
            ></span>
          </span>
        </span>
        <span className={css.afterGlowBg}></span>
      </div>
    </Section>
  );
}
