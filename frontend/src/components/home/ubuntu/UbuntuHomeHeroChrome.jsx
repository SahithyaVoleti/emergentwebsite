import SitePageChrome from "../../ubuntu/SitePageChrome";
import UbuntuHomeHero from "./UbuntuHomeHero";

/** Homepage hero chrome — uses site-wide merged navbar + pattern section. */
export default function UbuntuHomeHeroChrome() {
  return (
    <SitePageChrome id="home-hero-chrome" testId="home-hero-chrome">
      <UbuntuHomeHero embedded />
    </SitePageChrome>
  );
}
