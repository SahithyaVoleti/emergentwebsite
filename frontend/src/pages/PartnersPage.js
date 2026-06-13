import PageHero from "../components/PageHero";
import UbuntuPartnerGrid from "../components/ubuntu/UbuntuPartnerGrid";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import technologyPartners from "../data/partners";

export default function PartnersPage() {
  return (
    <SitePageMain>
      <PageHero
        label="Technology Partners"
        title="Technology Partnerships that Strengthen Delivery"
        description="We combine proven platform partners with practical architecture choices to reduce implementation risk and accelerate enterprise outcomes."
        primaryCTA={{ text: "Contact us", href: "#page-contact" }}
        illustrationKey="solutions"
      />

      <UbuntuPartnerGrid partners={technologyPartners} />

      <PageStandardSections pageKey="partners" contactContext="Partners Page" />
    </SitePageMain>
  );
}
