import PageHero from "../components/PageHero";
import PlatformsTechRibbon from "../components/ubuntu/PlatformsTechRibbon";
import SolutionsHorizontalSlider from "../components/ubuntu/SolutionsHorizontalSlider";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";
import { SECTION_LABEL } from "../data/sectionLabels";

export default function SolutionsPage() {
  return (
    <SitePageMain>
      <PageHero
        title="Agentic solutions for |enterprise workflows|"
        description="Production-ready AI agents for transaction security, public services, research, clinical documentation, travel operations, legal research, financial analysis, education, real estate, and agriculture."
        primaryCTA={{ text: "Browse agents", href: "#solutions-catalog" }}
        image={LISTING_PAGE_HERO_IMAGES.solutions}
      />

      <PlatformsTechRibbon />

      <SolutionsHorizontalSlider
        id="solutions-catalog"
        eyebrow={SECTION_LABEL.portfolio}
        title="Agentic solution |catalog|"
        lead="Each agent addresses a defined workflow. Review capabilities, integration scope, and deployment requirements for your operating environment."
        viewAllHref={undefined}
        autoAdvanceMs={0}
        className="!border-t-0"
      />

      <PageStandardSections
        pageKey="solutions"
        contactContext="Solutions Page"
        includeMethodology={false}
        includeOutcomes={false}
        includeAssurance={false}
      />
    </SitePageMain>
  );
}
