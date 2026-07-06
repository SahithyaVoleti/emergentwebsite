import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SitePageMain from "../components/ubuntu/SitePageMain";
import ServiceLandingPageLayout from "../components/service/ServiceLandingPageLayout";
import { buildPillarPageSections } from "../lib/buildServicePageSections";
import services from "../data/services";
import { getPillarGroup } from "../data/servicePillars";

export default function ServicePillarPage({ pillar }) {
  const group = getPillarGroup(pillar.id);
  const service = services.find((entry) => entry.slug === pillar.id);

  if (!group || !service) {
    return (
      <SitePageMain>
        <div className="ubuntu-container flex min-h-[50vh] flex-col items-center justify-center py-16">
          <h1 className="ubuntu-section-title">Service not found</h1>
          <Link to="/services" className="mt-4 text-[#d1511f] hover:underline">
            Back to services
          </Link>
        </div>
      </SitePageMain>
    );
  }

  const sections = buildPillarPageSections(pillar, service);

  return (
    <SitePageMain>
      <PageHero
        significance="detail"
        title={sections.hero.title}
        description={sections.hero.description}
        primaryCTA={sections.hero.primaryCTA}
        secondaryCTA={sections.hero.secondaryCTA}
        image={group.cardImage}
        imageVariant="service-pillar"
      />

      <ServiceLandingPageLayout
        sections={sections}
        offeringItems={group.subservices}
        contactContext={`${group.label} Services`}
      />
    </SitePageMain>
  );
}
