import SitePageChrome from "../../ubuntu/SitePageChrome";
import UbuntuHomeHero from "./UbuntuHomeHero";
import { BRAND_HERO_BACKGROUNDS } from "../../../data/brandAssets";

/** Homepage hero — banner layout with branded backdrop image. */
export default function UbuntuHomeHeroChrome() {
  return (
    <SitePageChrome
      id="home-hero-chrome"
      testId="home-hero-chrome"
      variant="home-banner"
      homeBackgroundImages={BRAND_HERO_BACKGROUNDS}
    >
      <UbuntuHomeHero embedded />
    </SitePageChrome>
  );
}
