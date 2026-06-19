import { useParams, Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SitePageMain from "../components/ubuntu/SitePageMain";
import ServiceDetailHomeLayout from "../components/service/ServiceDetailHomeLayout";
import services from "../data/services";
import serviceCaseStudies from "../data/serviceCaseStudies";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <SitePageMain>
        <div className="ubuntu-container flex min-h-[50vh] flex-col items-center justify-center py-16">
          <h1 className="ubuntu-section-title">Service not found</h1>
          <Link to="/services" className="mt-4 text-[#0466c8] hover:underline">
            Back to services
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

      <ServiceDetailHomeLayout
        service={service}
        cases={serviceCaseStudies[service.slug]}
        contactContext={service.title}
        ctaOverrides={{
          title: `Get started with ${service.title}`,
          description: `We can align ${service.title} to your systems, priorities, and timeline to define an actionable starting scope and governance boundary.`,
          mockupKey: "code",
        }}
      />
    </SitePageMain>
  );
}
