import UbuntuLightSplitHero from "../../ubuntu/UbuntuLightSplitHero";
import { HOME_HERO } from "../../../data/homePageSections";
import { getSiteMockup } from "../../../data/siteMockups";

export default function UbuntuHomeHero({ embedded = false }) {
  const {
    titleBefore,
    titleAccent,
    titleAfter,
    primaryCta,
  } = HOME_HERO;

  const heroMedia = getSiteMockup("hero");

  return (
    <UbuntuLightSplitHero
      id="hero"
      testId="hero-section"
      embedded={embedded}
      significance="primary"
      title={{ before: titleBefore, accent: titleAccent, after: titleAfter }}
      primaryCTA={{
        label: primaryCta.label,
        href: primaryCta.href,
        contactIntent: "consultation",
      }}
      media={heroMedia}
    />
  );
}
