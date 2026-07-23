import PageHero from "../components/PageHero";
import ServicesPillarCatalog from "../components/ubuntu/ServicesPillarCatalog";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import { SECTION_LABEL } from "../data/sectionLabels";
import { SERVICES_LANDING_HERO_BACKGROUND } from "../data/brandAssets";

export default function ServicesPage() {
  return (
    <SitePageMain>
      <PageHero
        title="Applied AI, data platforms, generative AI, platform reliability, and |software engineering|"
        description="Five enterprise disciplines—each with defined subservices, delivery scope, and integration model."
        primaryCTA={{ text: "Browse disciplines", href: "#services-catalog" }}
        homeBackgroundImage={SERVICES_LANDING_HERO_BACKGROUND}
        showSymbol={false}
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
