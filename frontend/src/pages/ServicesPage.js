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
        title="Build agents and modernize your apps"
        description="We build AI agents inside CRM, ERP, and internal tools—and upgrade legacy apps into AI-powered software. Pick a track to see scope and how we integrate with what you run today."
        primaryCTA={{ text: "Browse services", href: "#services-catalog" }}
        image={LISTING_PAGE_HERO_IMAGES.services}
      />

      <ServicesGrid4x4
        id="services-catalog"
        services={servicesForDisplay(services)}
        eyebrow={SECTION_LABEL.serviceCatalog}
        title="Services we deliver"
        lead="Agents, copilots, app modernization, and the data and infrastructure that support them."
        className="!border-t-0"
      />

      <PageStandardSections pageKey="services" contactContext="Services Page" />
    </SitePageMain>
  );
}
