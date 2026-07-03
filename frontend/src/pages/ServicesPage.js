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
        title="Enterprise generative AI, machine intelligence, data platforms, and |cloud engineering|"
        description="Four enterprise AI disciplines—each with defined subservices, delivery scope, and integration model."
        primaryCTA={{ text: "Browse disciplines", href: "#services-catalog" }}
        image={LISTING_PAGE_HERO_IMAGES.services}
      />

      <ServicesPillarCatalog
        id="services-catalog"
        variant="cards"
        eyebrow={SECTION_LABEL.serviceCatalog}
        title="Main |services|"
        lead="Open a discipline to review its services, deliverables, and integration assumptions—without mixing offerings from other areas."
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
