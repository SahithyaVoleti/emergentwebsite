import SitePageChrome from "./ubuntu/SitePageChrome";
import UbuntuPageHero from "./ubuntu/UbuntuPageHero";
import { DEFAULT_PAGE_HERO_IMAGE } from "../lib/heroImageThemes";

export default function PageHero({ image, video, ...props }) {
  const backgroundImage = image || DEFAULT_PAGE_HERO_IMAGE;

  return (
    <SitePageChrome backgroundImage={backgroundImage} backgroundVideo={video}>
      <UbuntuPageHero {...props} embedded />
    </SitePageChrome>
  );
}
