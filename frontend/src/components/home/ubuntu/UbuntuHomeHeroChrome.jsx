import SitePageChrome from "../../ubuntu/SitePageChrome";
import UbuntuHomeHero from "./UbuntuHomeHero";
import { getHomeSectionImage } from "../../../data/homePageImages";

/** Homepage hero chrome — full-bleed background image with merged navbar. */
export default function UbuntuHomeHeroChrome() {
  const heroImage = getHomeSectionImage("hero");

  return (
    <SitePageChrome
      id="home-hero-chrome"
      testId="home-hero-chrome"
      backgroundImage={heroImage?.src}
    >
      <UbuntuHomeHero embedded />
    </SitePageChrome>
  );
}
