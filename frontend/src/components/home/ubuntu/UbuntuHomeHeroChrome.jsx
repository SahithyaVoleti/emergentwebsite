import SitePageChrome from "../../ubuntu/SitePageChrome";
import UbuntuHomeHero from "./UbuntuHomeHero";

/** Homepage hero — banner layout without photographic backdrop. */
export default function UbuntuHomeHeroChrome() {
  return (
    <SitePageChrome
      id="home-hero-chrome"
      testId="home-hero-chrome"
      variant="home-banner"
    >
      <UbuntuHomeHero embedded />
    </SitePageChrome>
  );
}
