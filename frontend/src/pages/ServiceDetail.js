import { useParams, Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SitePageMain from "../components/ubuntu/SitePageMain";
import ServiceDetailHomeLayout from "../components/service/ServiceDetailHomeLayout";
import ServiceDetailStandardLayout from "../components/service/ServiceDetailStandardLayout";
import services from "../data/services";
import serviceCaseStudies from "../data/serviceCaseStudies";

const STANDARD_LAYOUT_SLUGS = new Set(["artificial-intelligence"]);

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <SitePageMain>
        <div className="ubuntu-container flex min-h-[50vh] flex-col items-center justify-center py-16">
          <h1 className="ubuntu-section-title">Service not found</h1>
          <Link to="/#services-grid" className="mt-4 text-[#8b1538] hover:underline">
            Back to home
          </Link>
        </div>
      </SitePageMain>
    );
  }

  return (
    <SitePageMain>
      <PageHero
        label="Services"
        title={service.heroTitle}
        description={service.heroDesc}
        primaryCTA={{ text: "Contact us", href: "#page-contact" }}
        secondaryCTA={{ text: "View capabilities", href: "#capabilities" }}
        image={service.heroImage}
        video={service.heroVideo}
      />

      {STANDARD_LAYOUT_SLUGS.has(service.slug) ? (
        <ServiceDetailStandardLayout
          service={service}
          contactContext={service.title}
          ctaOverrides={{
            title: `Next Step for ${service.title}`,
            description: `We can align ${service.title} to your systems, priorities, and timeline to define an actionable starting scope and governance boundary.`,
            mockupKey: "code",
          }}
        />
      ) : (
        <ServiceDetailHomeLayout
          service={service}
          cases={serviceCaseStudies[service.slug]}
          contactContext={service.title}
          ctaOverrides={{
            title: `Next Step for ${service.title}`,
            description: `We can align ${service.title} to your systems, priorities, and timeline to define an actionable starting scope and governance boundary.`,
            mockupKey: "code",
          }}
        />
      )}
    </SitePageMain>
  );
}
