import PageHero from "../components/PageHero";
import SolutionsHorizontalSlider from "../components/ubuntu/SolutionsHorizontalSlider";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

export default function SolutionsPage() {
  return (
    <SitePageMain>
      <PageHero
        label="Solutions"
        title="Solution Accelerators for Structured AI Rollouts"
        description="Pre-architected modules for document intelligence, regulated workflows, talent operations, and adjacent domains, maintained with customer programs and internal delivery feedback."
        primaryCTA={{ text: "Review accelerators", href: "#solutions-slider" }}
        image={LISTING_PAGE_HERO_IMAGES.solutions}
      />

      <SolutionsHorizontalSlider
        id="solutions-catalog"
        eyebrow="Coverage"
        title="Coverage across solution accelerators"
        lead="Pre-architected modules by accelerator—use the carousel to review each solution, then open a full overview with scope boundaries and integration assumptions."
        viewAllHref={undefined}
        autoAdvanceMs={0}
        className="!border-t-0"
      />

      <PageStandardSections pageKey="solutions" contactContext="Solutions Page" />
    </SitePageMain>
  );
}
