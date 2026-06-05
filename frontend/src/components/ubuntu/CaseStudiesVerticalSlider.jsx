import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { TRACEFOLD } from "../../lib/tracefoldLabel";
import UbuntuLink from "./UbuntuLink";

const SLIDE_VH = 85;

/**
 * Scroll-driven vertical stack: page scroll advances one case-study panel at a time
 * with slide transitions inside a sticky viewport.
 */
export default function CaseStudiesVerticalSlider({
  studies = [],
  id = "case-studies",
  showLabel = true,
  eyebrow = "Outcomes",
  title,
  lead,
  viewAllHref = "/case-studies",
  viewAllLabel = "View all scenarios",
  className = "",
}) {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const count = studies.length;

  const headingTitle =
    title ?? (
      <>
        Outcomes Across <span className="text-[#8b1538]">{TRACEFOLD} scenarios</span>
      </>
    );

  const headingLead =
    lead ??
    `${TRACEFOLD} patterns are representative narratives, not completed client projects. Scroll to compare each scenario, then contact us to scope something concrete.`;

  const updateIndexFromScroll = useCallback(() => {
    const el = sectionRef.current;
    if (!el || count === 0) return;

    const rect = el.getBoundingClientRect();
    const viewport = window.innerHeight;
    const scrollSpan = rect.height - viewport;

    if (scrollSpan <= 0) {
      setActiveIndex(0);
      return;
    }

    const progress = Math.max(0, Math.min(1, -rect.top / scrollSpan));
    const next =
      count <= 1 ? 0 : Math.min(count - 1, Math.round(progress * (count - 1)));
    setActiveIndex(next);
  }, [count]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    updateIndexFromScroll();
    window.addEventListener("scroll", updateIndexFromScroll, { passive: true });
    window.addEventListener("resize", updateIndexFromScroll);
    return () => {
      window.removeEventListener("scroll", updateIndexFromScroll);
      window.removeEventListener("resize", updateIndexFromScroll);
    };
  }, [updateIndexFromScroll]);

  const scrollToSlide = (index) => {
    const el = sectionRef.current;
    if (!el || count === 0) return;
    const clamped = Math.max(0, Math.min(count - 1, index));
    const rect = el.getBoundingClientRect();
    const scrollSpan = el.offsetHeight - window.innerHeight;
    if (scrollSpan <= 0) return;
    const targetTop = window.scrollY + rect.top + (clamped / count) * scrollSpan + 1;
    window.scrollTo({ top: targetTop, behavior: reduceMotion ? "auto" : "smooth" });
  };

  if (!count) return null;

  const sectionHeightVh = count * SLIDE_VH;

  return (
    <section
      id={id}
      ref={sectionRef}
      data-testid="case-studies-section"
      className={`ubuntu-case-studies-scroll ubuntu-section-block relative border-y border-[#d9d9d9] bg-white ${className}`}
      style={{ height: `${sectionHeightVh}vh` }}
      aria-label="Case study scenarios"
    >
      <div className="sticky top-0 z-10 h-screen overflow-hidden">
        <div className="ubuntu-container relative z-10 flex h-full flex-col">
          <div className="mb-6 flex flex-shrink-0 flex-col gap-4 md:mb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              {showLabel && eyebrow && (
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#666]">{eyebrow}</p>
              )}
              <h2 className="ubuntu-section-title">{headingTitle}</h2>
              <p className="ubuntu-lead mt-2 text-sm md:text-base">{headingLead}</p>
            </div>
            {viewAllHref && (
              <UbuntuLink to={viewAllHref} muted className="flex-shrink-0">
                {viewAllLabel}
              </UbuntuLink>
            )}
          </div>

          <div className="relative min-h-0 flex-1">
            <div className="ubuntu-case-studies-scroll__viewport relative h-full overflow-hidden border border-[#d9d9d9]">
              {studies.map((cs, index) => {
                const offset = index - activeIndex;
                const transform = reduceMotion
                  ? offset === 0
                    ? "translateY(0)"
                    : "translateY(100%)"
                  : `translateY(${offset * 100}%)`;

                return (
                  <div
                    key={cs.slug}
                    data-testid={`case-study-slide-${cs.slug}`}
                    className="ubuntu-case-studies-scroll__slide absolute inset-0 flex flex-col lg:flex-row"
                    style={{
                      transform,
                      transition: reduceMotion ? "none" : "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
                      zIndex: index === activeIndex ? 2 : 1,
                      pointerEvents: index === activeIndex ? "auto" : "none",
                    }}
                    aria-hidden={index !== activeIndex}
                  >
                    <div className="relative min-h-[200px] flex-1 bg-[#f7f7f7] lg:min-h-0 lg:w-[42%] border-b lg:border-b-0 lg:border-r border-[#e5e5e5]">
                      <img
                        src={cs.heroImage}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                        loading={index <= 1 ? "eager" : "lazy"}
                      />
                      <div className="absolute left-4 top-4 bg-[#8b1538] px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                        {cs.industry}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-center bg-white p-6 sm:p-8 lg:p-10">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8b1538] mb-2">
                        {cs.archetype}
                      </p>
                      <h3 className="text-xl font-medium text-[#111] leading-snug sm:text-2xl mb-3">{cs.title}</h3>
                      <p className="text-sm leading-relaxed text-[#555] line-clamp-3 mb-4">{cs.heroDesc}</p>
                      {cs.results?.length > 0 && (
                        <ul className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                          {cs.results.slice(0, 4).map((r) => (
                            <li
                              key={r.label}
                              className="border border-[#e5e5e5] bg-[#fafafa] px-2 py-2 text-center"
                            >
                              <span className="block text-xs font-semibold text-[#8b1538]">{r.metric}</span>
                              <span className="block text-[10px] text-[#666] leading-tight mt-0.5">{r.label}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <Link
                        to={`/case-studies/${cs.slug}`}
                        data-testid={`case-study-card-${cs.slug}`}
                        className="ubuntu-btn-primary inline-flex w-fit text-sm"
                      >
                        Read scenario
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="absolute right-3 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-2 md:flex"
              aria-label="Scenario navigation"
            >
              {studies.map((cs, index) => (
                <button
                  key={cs.slug}
                  type="button"
                  onClick={() => scrollToSlide(index)}
                  aria-label={`Go to ${cs.title}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={`rounded-full transition-all ${
                    index === activeIndex ? "h-8 w-2 bg-[#8b1538]" : "h-2 w-2 bg-[#d9d9d9] hover:bg-[#bbb]"
                  }`}
                />
              ))}
            </div>

            <div className="absolute bottom-3 right-3 z-30 flex gap-2 md:bottom-4 md:right-4">
              <button
                type="button"
                onClick={() => scrollToSlide(activeIndex - 1)}
                disabled={activeIndex === 0}
                className="ubuntu-case-studies-scroll__nav-btn"
                aria-label="Previous scenario"
              >
                <ChevronUp size={18} />
              </button>
              <button
                type="button"
                onClick={() => scrollToSlide(activeIndex + 1)}
                disabled={activeIndex >= count - 1}
                className="ubuntu-case-studies-scroll__nav-btn"
                aria-label="Next scenario"
              >
                <ChevronDown size={18} />
              </button>
            </div>

            <div className="absolute bottom-3 left-4 z-30 font-mono text-xs text-[#666] md:bottom-4">
              <span className="text-[#111] font-semibold">{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className="mx-1">/</span>
              <span>{String(count).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
