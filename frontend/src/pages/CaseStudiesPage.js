import PageHero from "../components/PageHero";
import CaseStudiesVerticalSlider from "../components/ubuntu/CaseStudiesVerticalSlider";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import caseStudies from "../data/caseStudies";
import { TRACEFOLD } from "../lib/tracefoldLabel";

export default function CaseStudiesPage() {
  return (
    <SitePageMain>
      <PageHero
        label="Delivery scenarios"
        title={`${TRACEFOLD}-Indexed Programs Aligned to Our Services`}
        description={`These ${TRACEFOLD} narratives show how NeuralTrix approaches common AI and software problems, so you can judge fit before a pilot. They are not endorsements or guarantees from named customers.`}
        primaryCTA={{
          text: "Schedule a consultation",
          href: "#page-contact",
          contactIntent: "consultation",
        }}
        illustrationKey="caseStudies"
      />

      <CaseStudiesVerticalSlider
        studies={caseStudies}
        id="case-studies-catalog"
        showLabel
        eyebrow="Coverage"
        title={
          <>
            Coverage across <span className="text-[#8b1538]">{TRACEFOLD} scenarios</span>
          </>
        }
        lead={`Scroll through representative ${TRACEFOLD} narratives. Each panel describes a problem class we address.`}
        viewAllHref={undefined}
        className="!border-t-0"
      />

      <PageStandardSections pageKey="caseStudies" contactContext="Case Studies Page" />
    </SitePageMain>
  );
}
