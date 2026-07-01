import PageHero from "../components/PageHero";
import ServicesPillarCatalog from "../components/ubuntu/ServicesPillarCatalog";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import { SECTION_LABEL } from "../data/sectionLabels";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

export default function ServicesPage() {
  return (
    <SitePageMain>
      <PageHero
        title="AI product transformation, fine-tuning, and |platform engineering|"
        description="Three main service disciplines—each with its own scope, service lines, and delivery model."
        primaryCTA={{ text: "Browse disciplines", href: "#services-catalog" }}
        image={LISTING_PAGE_HERO_IMAGES.services}
      />

      <ServicesPillarCatalog
        id="services-catalog"
        variant="cards"
        eyebrow={SECTION_LABEL.serviceCatalog}
        title="Main |services|"
        lead="Open a discipline to review its service lines, deliverables, and integration assumptions—without mixing offerings from other areas."
        className="!border-t-0"
      />

      <PageStandardSections
        pageKey="services"
        contactContext="Services Page"
        includeMethodology={false}
        includeOutcomes={false}
        includeAssurance={false}
      />
    </SitePageMain>
  );
}
