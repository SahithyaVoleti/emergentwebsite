import { useHeroStackSlide } from "../../../hooks/useHeroStackSlide";

/**
 * Our approach CTA: scroll drives the band upward onto the merged hero chrome section.
 */
export default function UbuntuHomeHeroStack({ cta }) {
  const { scrollerRef, translateY, isPinned } = useHeroStackSlide();

  return (
    <div className="ubuntu-hero-stack" data-testid="home-hero-stack">
      <div ref={scrollerRef} className="ubuntu-hero-stack__scroller">
        <div
          className={`ubuntu-hero-stack__cta${isPinned ? " ubuntu-hero-stack__cta--pinned" : ""}`}
          style={{ transform: `translate3d(0, ${translateY}px, 0)` }}
        >
          {cta}
        </div>
      </div>
    </div>
  );
}
