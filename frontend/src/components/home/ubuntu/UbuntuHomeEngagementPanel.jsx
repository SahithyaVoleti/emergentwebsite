import { Link } from "react-router-dom";
import { HOME_ALERT } from "../../../data/homePageSections";
import UbuntuHomeLink from "../../ubuntu/UbuntuLink";
import SectionEyebrow from "../../ubuntu/SectionEyebrow";
import SectionTitle from "../../ubuntu/SectionTitle";

/** Compact engagement CTA for pairing beside the outcomes band. */
export default function UbuntuHomeEngagementPanel() {
  return (
    <div
      id="engagement-cta"
      data-testid="engagement-alert-cta"
      className="relative flex h-full min-h-[28rem] flex-col overflow-hidden lg:min-h-0"
    >
      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 sm:px-8 md:lg:px-10 xl:px-12">
        <SectionEyebrow>{HOME_ALERT.eyebrow}</SectionEyebrow>
        <SectionTitle as="h2" title={HOME_ALERT.title} />
        <p className="ubuntu-lead mt-4 text-base">{HOME_ALERT.body}</p>
        <div className="ubuntu-cta-row flex-col items-stretch sm:flex-row sm:items-center">
          <Link to={HOME_ALERT.primaryCta.href} className="ubuntu-btn-primary text-center">
            {HOME_ALERT.primaryCta.label}
          </Link>
          <UbuntuHomeLink to={HOME_ALERT.secondaryCta.href}>
            {HOME_ALERT.secondaryCta.label}
          </UbuntuHomeLink>
        </div>
      </div>
    </div>
  );
}
