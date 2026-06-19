import SectionPatternBackground from "../SectionPatternBackground";
import HeroAnimatedBackdrop from "../HeroAnimatedBackdrop";
import { usePatternSectionHover } from "../../hooks/usePatternSectionHover";

/**
 * Hero band with optional full-bleed background image (navbar is rendered once in UbuntuPageShell).
 * @param {"default" | "light-split"} [variant]
 */
export default function SitePageChrome({
  children,
  id = "page-hero-chrome",
  testId = "site-page-chrome",
  backgroundImage,
  backgroundVideo,
  variant = "default",
}) {
  const { sectionRef, onPointerMove, onPointerLeave } = usePatternSectionHover();
  const isLightSplit = variant === "light-split";
  const isFullBleed = !isLightSplit && Boolean(backgroundImage || backgroundVideo);

  return (
    <section
      ref={sectionRef}
      id={id}
      data-testid={testId}
      className={[
        "ubuntu-site-page-chrome",
        "ubuntu-pattern-section",
        "ubuntu-pattern-section--hero",
        isLightSplit && "ubuntu-site-page-chrome--light-split",
        isFullBleed && "ubuntu-site-page-chrome--fullbleed",
      ]
        .filter(Boolean)
        .join(" ")}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {!isLightSplit && <SectionPatternBackground variant="hero" />}
      {isFullBleed && (
        <HeroAnimatedBackdrop image={backgroundImage} video={backgroundVideo} />
      )}
      <div className="ubuntu-site-page-chrome__inner relative z-10">{children}</div>
    </section>
  );
}
