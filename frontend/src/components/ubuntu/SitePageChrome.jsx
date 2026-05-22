import SectionPatternBackground from "../SectionPatternBackground";
import { usePatternSectionHover } from "../../hooks/usePatternSectionHover";

/**
 * Hero band with a single pattern layer (navbar is rendered once in UbuntuPageShell).
 */
export default function SitePageChrome({
  children,
  id = "page-hero-chrome",
  testId = "site-page-chrome",
}) {
  const { sectionRef, onPointerMove, onPointerLeave } = usePatternSectionHover();

  return (
    <section
      ref={sectionRef}
      id={id}
      data-testid={testId}
      className="ubuntu-site-page-chrome ubuntu-pattern-section ubuntu-pattern-section--hero"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <SectionPatternBackground variant="hero" />
      <div className="ubuntu-site-page-chrome__inner relative z-10">{children}</div>
    </section>
  );
}
