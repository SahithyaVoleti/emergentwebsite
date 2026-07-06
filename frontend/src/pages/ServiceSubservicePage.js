import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SitePageMain from "../components/ubuntu/SitePageMain";
import ServiceLandingPageLayout from "../components/service/ServiceLandingPageLayout";
import { buildSubservicePageSections } from "../lib/buildServicePageSections";
import services from "../data/services";
import { getSubserviceCards } from "../data/serviceCatalog";
import { getSubserviceCardImage } from "../data/serviceSubserviceImages";

export default function ServiceSubservicePage({ pillar, subservice }) {
  const service = services.find((entry) => entry.slug === pillar.id);
  const sections = buildSubservicePageSections(pillar, subservice, service);
  const siblingCards = getSubserviceCards(pillar.id).filter((card) => card.id !== subservice.id);
  const heroImage = subservice.cardImage ?? getSubserviceCardImage(subservice.id);

  return (
    <SitePageMain>
      <PageHero
        significance="detail"
        title={sections.hero.title}
        description={sections.hero.description}
        primaryCTA={sections.hero.primaryCTA}
        secondaryCTA={sections.hero.secondaryCTA}
        image={heroImage}
        imageVariant="service-pillar"
      />

      <ServiceLandingPageLayout
        sections={sections}
        relatedOfferingItems={siblingCards}
        contactContext={subservice.title}
      />
    </SitePageMain>
  );
}
