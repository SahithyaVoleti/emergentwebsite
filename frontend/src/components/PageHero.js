import SitePageChrome from "./ubuntu/SitePageChrome";
import UbuntuPageHero from "./ubuntu/UbuntuPageHero";

export default function PageHero(props) {
  return (
    <SitePageChrome>
      <UbuntuPageHero {...props} embedded />
    </SitePageChrome>
  );
}
