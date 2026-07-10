import SitePageChrome from "./ubuntu/SitePageChrome";
import UbuntuPageHeroBanner from "./ubuntu/UbuntuPageHeroBanner";

/**
 * Standard page hero — homepage banner layout (headline, lead, symbol watermark).
 * @param {"primary" | "detail" | "utility"} [significance]
 */
export default function PageHero({
  significance = "primary",
  title,
  description,
  lead,
  primaryCTA,
  secondaryCTA,
  hideContent,
  showSymbol = true,
  homeBackgroundImage,
  /** @deprecated Banner heroes use the site symbol watermark — kept for call-site compatibility */
  image: _image,
  video: _video,
  illustrationKey: _illustrationKey,
  imageVariant: _imageVariant,
  label: _label,
  alt: _alt,
}) {
  const hasPhotoHero = Boolean(homeBackgroundImage);

  return (
    <SitePageChrome
      variant="home-banner"
      significance={significance}
      homeBackgroundImage={homeBackgroundImage}
    >
      <UbuntuPageHeroBanner
        embedded
        significance={significance}
        title={title}
        lead={lead ?? description}
        primaryCTA={primaryCTA}
        secondaryCTA={secondaryCTA}
        hideContent={hideContent}
        showSymbol={showSymbol && !hasPhotoHero && significance !== "utility"}
      />
    </SitePageChrome>
  );
}
