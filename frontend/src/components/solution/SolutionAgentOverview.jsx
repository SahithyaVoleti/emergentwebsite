import SiteNavLink from "../ubuntu/SiteNavLink";
import UbuntuSplitLayout from "../ubuntu/UbuntuSplitLayout";
import MockupFrame from "../ubuntu/MockupFrame";
import SectionEyebrow from "../ubuntu/SectionEyebrow";
import SectionTitle from "../ubuntu/SectionTitle";
import { getSolutionProductName } from "../../lib/solutionDisplay";

/**
 * Single hero + overview band for agent detail pages — agent infographic, no duplicate hero.
 */
export default function SolutionAgentOverview({ solution }) {
  const productName = getSolutionProductName(solution);
  const brandName = solution.brandName || solution.title;
  const useCases = solution.useCases ?? [];

  return (
    <UbuntuSplitLayout
      id="solution-overview"
      testId="solution-overview"
      pattern="hero"
      className="solution-agent-overview"
      imagePosition="right"
      mediaSlot={
        <div className="ubuntu-split__media ubuntu-split__media--product">
          <MockupFrame src={solution.heroImage} alt={`${brandName} — ${productName}`} variant="plain" />
        </div>
      }
      belowContent={
        useCases.length > 0 ? (
          <div className="solution-agent-overview__coverage">
            <p className="solution-agent-overview__coverage-label">Coverage</p>
            <ul className="solution-agent-overview__coverage-list">
              {useCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null
      }
    >
      <SectionEyebrow>{brandName ? `${brandName} · Agentic solution` : "Agentic solution"}</SectionEyebrow>
      <SectionTitle as="h1" title={solution.heroTitle || productName} />
      {solution.heroDesc && <p className="ubuntu-lead">{solution.heroDesc}</p>}
      {solution.overview && <p className="ubuntu-body">{solution.overview}</p>}
      <div className="ubuntu-cta-row mt-6">
        <SiteNavLink href="#page-contact" contactIntent="consultation" primary showArrow={false}>
          Request a briefing
        </SiteNavLink>
        <SiteNavLink href="#agent-capabilities" muted showArrow>
          View capabilities
        </SiteNavLink>
      </div>
    </UbuntuSplitLayout>
  );
}
