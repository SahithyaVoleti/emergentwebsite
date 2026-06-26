import PageHero from "../components/PageHero";
import ServicesGrid4x4 from "../components/ubuntu/ServicesGrid4x4";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import services, { servicesForDisplay } from "../data/services";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";
import { SECTION_LABEL } from "../data/sectionLabels";

export default function ServicesPage() {
  return (
    <SitePageMain>
      <PageHero
        label="Services"
        title="Enterprise services for AI and application modernization"
        description="We deliver structured consulting and engineering services—from intelligent agents and generative AI to application modernization, data platforms, and cloud operations—with governance, integration discipline, and measurable outcomes."
        primaryCTA={{ text: "Browse service offerings", href: "#services-catalog" }}
        image={LISTING_PAGE_HERO_IMAGES.services}
      />

      <ServicesGrid4x4
        id="services-catalog"
        services={servicesForDisplay(services)}
        eyebrow={SECTION_LABEL.serviceCatalog}
        title="Service offerings"
        lead="Select a service line to review capability scope, representative deliverables, and integration assumptions for your environment."
        className="!border-t-0"
      />

      <PageStandardSections pageKey="services" contactContext="Services Page" />
    </SitePageMain>
  );
}
