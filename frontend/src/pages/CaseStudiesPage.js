import PageHero from "../components/PageHero";
import CaseStudiesVerticalSlider from "../components/ubuntu/CaseStudiesVerticalSlider";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import caseStudies from "../data/caseStudies";

export default function CaseStudiesPage() {
  return (
    <SitePageMain>
      <PageHero
        label="Production test cases"
        title="AI systems we built, tested, and made production-ready"
        description="These are real implementations NeuralTrix developed and validated in live environments—across education, healthcare, finance, commerce, manufacturing, and more. Each test case is ready to adapt to your applications."
        primaryCTA={{
          text: "Discuss a test case",
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
            Production-ready <span className="text-[#8b1538]">test cases</span> by sector
          </>
        }
        lead="Scroll through live-tested implementations across industry sectors. Each case shows what we built, how we tested it, and what is ready for your environment."
        viewAllHref={undefined}
        className="!border-t-0"
      />

      <PageStandardSections pageKey="caseStudies" contactContext="Case Studies Page" />
    </SitePageMain>
  );
}
