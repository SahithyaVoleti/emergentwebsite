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
        label="Products"
        title="AI-native SaaS products and accelerators"
        description="Products we design, develop, and validate for interdisciplinary deployment—extensible modules that can be configured to your data boundaries and sector requirements."
        primaryCTA={{ text: "Browse products", href: "#solutions-slider" }}
        image={LISTING_PAGE_HERO_IMAGES.solutions}
      />

      <PlatformsTechRibbon />

      <SolutionsHorizontalSlider
        id="solutions-catalog"
        eyebrow={SECTION_LABEL.products}
        title="SaaS product catalog"
        lead="Each product addresses a defined workflow. Review scope, integration requirements, and deployment notes for your industry context."
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
