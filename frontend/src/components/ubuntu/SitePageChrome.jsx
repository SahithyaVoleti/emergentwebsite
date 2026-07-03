import HeroAnimatedBackdrop from "../HeroAnimatedBackdrop";
import HomeHeroBackdropSlider from "./HomeHeroBackdropSlider";

/**
 * Hero band with optional full-bleed background image (navbar is rendered once in UbuntuPageShell).
 * @param {"default" | "light-split" | "home-banner"} [variant]
 */
export default function SitePageChrome({
  children,
  id = "page-hero-chrome",
  testId = "site-page-chrome",
  backgroundImage,
  backgroundVideo,
  homeBackgroundImage,
  homeBackgroundImages,
  variant = "default",
  significance = "primary",
}) {
  const isLightSplit = variant === "light-split";
  const isHomeBanner = variant === "home-banner";
  const isFullBleed = !isLightSplit && !isHomeBanner && Boolean(backgroundImage || backgroundVideo);
  const isUtility = significance === "utility";

  const slides = Array.isArray(homeBackgroundImages) && homeBackgroundImages.length
    ? homeBackgroundImages
    : homeBackgroundImage
      ? [homeBackgroundImage]
      : [];
  const hasPhoto = isHomeBanner && slides.length > 0;

  return (
    <section
      id={id}
      data-testid={testId}
      className={[
        "ubuntu-site-page-chrome",
        isLightSplit && "ubuntu-site-page-chrome--light-split",
        isHomeBanner && "ubuntu-site-page-chrome--home-banner",
        hasPhoto && "ubuntu-site-page-chrome--home-banner-has-photo",
        isLightSplit && isUtility && "ubuntu-site-page-chrome--utility",
        isFullBleed && "ubuntu-site-page-chrome--fullbleed",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {hasPhoto ? <HomeHeroBackdropSlider images={slides} /> : null}
      {isFullBleed && (
        <HeroAnimatedBackdrop image={backgroundImage} video={backgroundVideo} />
      )}
      <div className="ubuntu-site-page-chrome__inner relative z-10">{children}</div>
    </section>
  );
}
