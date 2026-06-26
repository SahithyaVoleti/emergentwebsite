import PageHero from "../components/PageHero";
import CaseStudiesVerticalSlider from "../components/ubuntu/CaseStudiesVerticalSlider";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import caseStudies from "../data/caseStudies";
import { PALETTE } from "../lib/brandPalette";

export default function CaseStudiesPage() {
  return (
    <SitePageMain>
      <PageHero
        label="Production test cases"
        title="Production-validated AI implementations"
        description="Implementations developed and validated in live and sandbox environments across education, healthcare, finance, commerce, manufacturing, and additional sectors. Each test case documents scope for adaptation to your application estate."
        primaryCTA={{
          text: "Discuss a validation program",
          href: "#page-contact",
          contactIntent: "consultation",
        }}
        illustrationKey="caseStudies"
      />

      <CaseStudiesVerticalSlider
        studies={caseStudies}
        id="case-studies-catalog"
        showLabel
        title={
          <>
            Production-ready <span style={{ color: PALETTE.regalNavy }}>test cases</span> by sector
          </>
        }
        lead="Review live-tested implementations by sector. Each case documents delivery scope, validation approach, and adaptation requirements for your environment."
        viewAllHref={undefined}
        className="!border-t-0"
      />

      <PageStandardSections pageKey="caseStudies" contactContext="Case Studies Page" />
    </SitePageMain>
  );
}
