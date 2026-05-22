import { Link } from "react-router-dom";
import { HOME_ALERT } from "../../../data/homePageSections";
import SectionPatternBackground from "../../SectionPatternBackground";
import UbuntuHomeLink from "../../ubuntu/UbuntuLink";
import { usePatternSectionHover } from "../../../hooks/usePatternSectionHover";

/** Compact engagement CTA for pairing beside the outcomes band. */
export default function UbuntuHomeEngagementPanel() {
  const { sectionRef, onPointerMove, onPointerLeave } = usePatternSectionHover();

  return (
    <div
      ref={sectionRef}
      id="engagement-cta"
      data-testid="engagement-alert-cta"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="ubuntu-pattern-section ubuntu-pattern-section--cta ubuntu-section--dark relative flex h-full min-h-[28rem] flex-col overflow-hidden lg:min-h-0"
    >
      <SectionPatternBackground variant="cta" />
      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 sm:px-8 md:lg:px-10 xl:px-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#e8b4b8]">
          {HOME_ALERT.eyebrow}
        </p>
        <h2 className="ubuntu-section-title text-white text-2xl md:text-3xl">{HOME_ALERT.title}</h2>
        <p className="ubuntu-lead mt-4 text-white/90 text-base">{HOME_ALERT.body}</p>
        <div className="ubuntu-cta-row mt-6 flex-col items-stretch sm:flex-row sm:items-center">
          <Link to={HOME_ALERT.primaryCta.href} className="ubuntu-btn-primary text-center">
            {HOME_ALERT.primaryCta.label}
          </Link>
          <UbuntuHomeLink to={HOME_ALERT.secondaryCta.href} className="!text-[#e8b4b8]">
            {HOME_ALERT.secondaryCta.label}
          </UbuntuHomeLink>
        </div>
      </div>
    </div>
  );
}
