import PageHero from "../components/PageHero";
import UbuntuIndustriesIconGrid from "../components/ubuntu/UbuntuIndustriesIconGrid";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import industries from "../data/industries";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

export default function IndustriesPage() {
  return (
    <SitePageMain>
      <PageHero
        label="Industries"
        title="Industry programs aligned to regulation and operations"
        description="We start with one workflow, not enterprise transformation. Each vertical below maps to example pilot scenarios—not generic stat claims."
        primaryCTA={{ text: "Start a pilot", href: "#page-contact", contactIntent: "consultation" }}
        secondaryCTA={{ text: "Browse industries", href: "#verticals" }}
        image={LISTING_PAGE_HERO_IMAGES.industries}
        illustrationKey="industries"
      />

      <UbuntuPageSection
        eyebrow="Approach"
        title="One workflow at a time"
        lead="Pick a vertical, define a pilot KPI with us, and validate before expanding. We avoid multi-year transformation roadmaps in first engagements."
        variant="alt"
        bullets={[
          "Example: Commerce → demand forecasting on one category",
          "Example: Health → documentation assist for one clinic workflow",
          "Example: Finance → document review for one compliance queue",
        ]}
      />

      <UbuntuIndustriesIconGrid industries={industries} />

      <PageStandardSections
        pageKey="industries"
        contactContext="Industries Page"
        includeAssurance={false}
      />
    </SitePageMain>
  );
}
