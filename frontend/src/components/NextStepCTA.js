import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import SectionPatternBackground from "./SectionPatternBackground";
import { usePatternSectionHover } from "../hooks/usePatternSectionHover";
import { CONTACT_TOPIC, contactFormTo } from "../lib/contactIntent";

/**
 * Homepage “Next Step” band: dark CTA panel before the contact form.
 */
export default function NextStepCTA() {
  const { sectionRef, onPointerMove, onPointerLeave } = usePatternSectionHover();

  return (
    <section
      ref={sectionRef}
      data-testid="next-step-cta"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="ubuntu-pattern-section ubuntu-pattern-section--cta ubuntu-section--dark ubuntu-section-block relative overflow-hidden text-white"
    >
      <SectionPatternBackground variant="cta" />
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#e8b4b8]">
            Next Step
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
            <span className="text-white">Next Step for </span>
            <span className="text-slate-200">Your Initiative</span>
          </h2>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            This next step is a working discussion of objectives, constraints, timeline, and fit, so both sides can decide on a proportionate pilot or engagement model.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Button
              data-testid="next-step-cta-primary"
              asChild
              className="h-12 rounded-sm border-0 bg-[#8b1538] px-8 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#d14a1c] focus-visible:ring-2 focus-visible:ring-[#e8b4b8]"
            >
              <Link to={contactFormTo("/", CONTACT_TOPIC.CONSULTATION)}>
                Schedule a call
              </Link>
            </Button>
            <Button
              data-testid="next-step-cta-secondary"
              asChild
              variant="outline"
              className="h-12 rounded-sm border-white/40 bg-transparent px-8 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/services">Explore services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
