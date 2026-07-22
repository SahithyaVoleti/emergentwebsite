import UbuntuPageHeroBanner from "../../ubuntu/UbuntuPageHeroBanner";
import { HOME_HERO } from "../../../data/homePageSections";

/** Homepage hero — headline and CTA on the banner band. */
export default function UbuntuHomeHero({ embedded = false }) {
  const { titleBefore, titleAccent, titleAfter, lead, primaryCta } = HOME_HERO;

  return (
    <UbuntuPageHeroBanner
      embedded={embedded}
      showSymbol={false}
      title={{ before: titleBefore, accent: titleAccent, after: titleAfter }}
      lead={lead}
      primaryCTA={primaryCta ? { label: primaryCta.label, href: primaryCta.href } : null}
    />
  );
}
