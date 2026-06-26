import PageHero from "../components/PageHero";
import SolutionsHorizontalSlider from "../components/ubuntu/SolutionsHorizontalSlider";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";
import { SECTION_LABEL } from "../data/sectionLabels";

export default function SolutionsPage() {
  return (
    <SitePageMain>
      <PageHero
        label="Solutions"
        title="Solution accelerators for enterprise applications"
        description="Pre-built modules for deployment inside CRM, ERP, internal tools, and customer applications—derived from production delivery programs."
        primaryCTA={{ text: "Browse solution modules", href: "#solutions-slider" }}
        image={LISTING_PAGE_HERO_IMAGES.solutions}
      />

      <SolutionsHorizontalSlider
        id="solutions-catalog"
        eyebrow={SECTION_LABEL.accelerators}
        title="Solution accelerator catalog"
        lead="Each module addresses a defined workflow within existing application estates. Review the catalog for scope, integration requirements, and deployment notes."
        viewAllHref={undefined}
        autoAdvanceMs={0}
        className="!border-t-0"
      />

      <PageStandardSections pageKey="solutions" contactContext="Solutions Page" />
    </SitePageMain>
  );
}
