import { useParams, Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SitePageMain from "../components/ubuntu/SitePageMain";
import ServiceDetailHomeLayout from "../components/service/ServiceDetailHomeLayout";
import services from "../data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <SitePageMain>
        <div className="ubuntu-container flex min-h-[50vh] flex-col items-center justify-center py-16">
          <h1 className="ubuntu-section-title">Service not found</h1>
          <Link to="/services" className="mt-4 text-[#8b1538] hover:underline">
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
        primaryCTA={{ text: "Start a pilot", href: "#page-contact?topic=consultation", contactIntent: "consultation" }}
        secondaryCTA={{ text: "View all services", href: "/services" }}
        image={service.heroImage}
        video={service.heroVideo}
        illustrationKey="services"
      />

      <ServiceDetailHomeLayout
        service={service}
        contactContext={service.title}
      />
    </SitePageMain>
  );
}
