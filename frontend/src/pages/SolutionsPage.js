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
        title="Agent and copilot modules for your apps"
        description="Pre-built modules you deploy inside CRM, ERP, internal tools, and customer apps—updated from real agent and app modernization projects."
        primaryCTA={{ text: "Browse solutions", href: "#solutions-slider" }}
        image={LISTING_PAGE_HERO_IMAGES.solutions}
      />

      <SolutionsHorizontalSlider
        id="solutions-catalog"
        eyebrow={SECTION_LABEL.accelerators}
        title="Solution modules"
        lead="Each module targets a workflow inside software you already use. Browse the carousel, then open a full overview with scope and integration notes."
        viewAllHref={undefined}
        autoAdvanceMs={0}
        className="!border-t-0"
      />

      <PageStandardSections pageKey="solutions" contactContext="Solutions Page" />
    </SitePageMain>
  );
}
