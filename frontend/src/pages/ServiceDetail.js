import PageHero from "../components/PageHero";
import SitePageMain from "../components/ubuntu/SitePageMain";
import ServiceDetailHomeLayout from "../components/service/ServiceDetailHomeLayout";
import { getPillarForService } from "../data/servicePillars";

export default function ServiceDetail({ service }) {
  const pillar = getPillarForService(service);

  return (
    <SitePageMain>
      <PageHero
        significance="detail"
        title={service.heroTitle}
        description={service.heroDesc}
        primaryCTA={{ text: "Contact us", href: "#page-contact" }}
        secondaryCTA={{ text: "View capabilities", href: "#capabilities" }}
        image={service.heroImage}
        video={service.heroVideo}
      />

      <ServiceDetailHomeLayout
        service={service}
        contactContext={service.title}
        ctaOverrides={{
          title: `Next step for ${service.catalogTitle ?? service.title}`,
          description: `We can align ${service.catalogTitle ?? service.title} to your systems, operating model, and delivery timeline to define a governed starting scope and measurable outcomes.`,
          mockupKey: "code",
        }}
      />
    </SitePageMain>
  );
}
