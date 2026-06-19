import SitePageChrome from "../../ubuntu/SitePageChrome";
import UbuntuHomeHero from "./UbuntuHomeHero";

/** Homepage hero — light split layout with illustration (merged navbar). */
export default function UbuntuHomeHeroChrome() {
  return (
    <SitePageChrome id="home-hero-chrome" testId="home-hero-chrome" variant="light-split">
      <UbuntuHomeHero embedded />
    </SitePageChrome>
  );
}
