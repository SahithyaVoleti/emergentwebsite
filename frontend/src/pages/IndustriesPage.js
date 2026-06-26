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
        title="Industry programs for intelligent automation"
        description="We deliver intelligent automation inside sector applications—CRM, ERP, operations tools, and customer portals—aligned to regulatory and operational requirements."
        primaryCTA={{ text: "Contact us", href: "#page-contact" }}
        secondaryCTA={{ text: "Browse industries", href: "#verticals" }}
        illustrationKey="industries"
      />

      <UbuntuIndustriesIconGrid
        industries={industries}
        eyebrow={SECTION_LABEL.industries}
        title="Coverage across industry sectors"
        lead="Each sector operates distinct application estates—EHR, ERP, LMS, CRM, and more. Select an industry to review validated automation patterns and modernization scope."
      />

      <PageStandardSections pageKey="industries" contactContext="Industries Page" />
    </SitePageMain>
  );
}
