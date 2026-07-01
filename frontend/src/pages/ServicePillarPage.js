import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import ServiceOfferingCards from "../components/ubuntu/ServiceOfferingCards";
import SectionEyebrow from "../components/ubuntu/SectionEyebrow";
import SectionTitle from "../components/ubuntu/SectionTitle";
import { SECTION_LABEL } from "../data/sectionLabels";
import { getPillarGroup } from "../data/servicePillars";
import services from "../data/services";

export default function ServicePillarPage({ pillar }) {
  const group = getPillarGroup(pillar.id, services);

  if (!group) {
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

  return (
    <SitePageMain>
      <PageHero
        significance="detail"
        title={group.label}
        description={group.shortDesc}
        primaryCTA={{ text: "Browse service lines", href: "#service-lines" }}
        image={group.cardImage}
        imageVariant="service-pillar"
      />

      <section
        id="service-lines"
        className="ubuntu-section-block scroll-mt-24 border-y border-[#d9d9d9] bg-white"
        aria-labelledby="service-lines-heading"
      >
        <div className="ubuntu-container">
          <div className="mb-8 max-w-3xl lg:mb-10">
            <SectionEyebrow>{SECTION_LABEL.serviceCatalog}</SectionEyebrow>
            <SectionTitle
              id="service-lines-heading"
              title="Service lines"
            />
            <p className="ubuntu-lead mt-3">
              Scoped offerings within {group.label.toLowerCase()}—each with defined deliverables,
              integration assumptions, and representative outcomes.
            </p>
          </div>

          <ServiceOfferingCards items={group.serviceLines} cardVariant="line" />
        </div>
      </section>

      <PageStandardSections
        pageKey="services"
        contactContext={`${group.label} Services`}
        includeMethodology={false}
        includeOutcomes={false}
        includeAssurance={false}
      />
    </SitePageMain>
  );
}
