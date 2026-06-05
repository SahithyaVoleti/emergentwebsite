import PageHero from "../components/PageHero";
import UbuntuIndustriesIconGrid from "../components/ubuntu/UbuntuIndustriesIconGrid";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import industries from "../data/industries";

export default function IndustriesPage() {
  return (
    <SitePageMain>
      <PageHero
        label="Industries"
        title="Industry Programs Aligned to Regulation and Operations"
        description="We align delivery to sector constraints, controls, data practices, and operating cadence, then define pilots sized to your governance and funding cycle."
        primaryCTA={{ text: "Contact us", href: "#page-contact" }}
        secondaryCTA={{ text: "Browse industries", href: "#verticals" }}
        illustrationKey="industries"
      />

      <UbuntuIndustriesIconGrid industries={industries} />

      <PageStandardSections pageKey="industries" contactContext="Industries Page" />
    </SitePageMain>
  );
}
