import PageHero from "../components/PageHero";
import UbuntuIndustriesIconGrid from "../components/ubuntu/UbuntuIndustriesIconGrid";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import industries from "../data/industries";
import { SECTION_LABEL } from "../data/sectionLabels";

export default function IndustriesPage() {
  return (
    <SitePageMain>
      <PageHero
        label="Industries"
        title="AI agents built for your industry"
        description="We ship agents and copilots inside the apps your sector runs—CRM, ERP, ops tools, and customer portals—aligned to your rules and review cycle."
        primaryCTA={{ text: "Contact us", href: "#page-contact" }}
        secondaryCTA={{ text: "Browse industries", href: "#verticals" }}
        illustrationKey="industries"
      />

      <UbuntuIndustriesIconGrid
        industries={industries}
        eyebrow={SECTION_LABEL.industries}
        title="Industries where we build agents"
        lead="Each sector runs different applications—EHR, ERP, LMS, CRM, and more. Open an industry to browse industry ready agents and see how we modernize existing software."
      />

      <PageStandardSections pageKey="industries" contactContext="Industries Page" />
    </SitePageMain>
  );
}
