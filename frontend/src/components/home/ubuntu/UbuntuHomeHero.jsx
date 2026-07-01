import UbuntuPageHeroBanner from "../../ubuntu/UbuntuPageHeroBanner";
import { HOME_HERO } from "../../../data/homePageSections";

/** Homepage hero — headline left, large grey logo symbol watermark right. */
export default function UbuntuHomeHero({ embedded = false }) {
  const { titleBefore, titleAccent, titleAfter, lead, primaryCta } = HOME_HERO;

  return (
    <UbuntuPageHeroBanner
      embedded={embedded}
      title={{ before: titleBefore, accent: titleAccent, after: titleAfter }}
      lead={lead}
      primaryCTA={primaryCta ? { label: primaryCta.label, href: primaryCta.href } : null}
    />
  );
}
