import PageHero from "../components/PageHero";
import UbuntuPartnerGrid from "../components/ubuntu/UbuntuPartnerGrid";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";

const partners = [
  "AWS",
  "Google Cloud",
  "Microsoft Azure",
  "OpenAI",
  "Anthropic",
  "Meta AI",
  "NVIDIA",
  "Snowflake",
  "Databricks",
  "MongoDB",
];

export default function PartnersPage() {
  return (
    <SitePageMain>
      <PageHero
        label="Technology Partners"
        title="Technology Partnerships for Enterprise Delivery"
        description="We work with proven platform partners and practical architecture choices to reduce implementation risk and speed enterprise delivery."
        primaryCTA={{ text: "Contact us", href: "#page-contact" }}
        illustrationKey="solutions"
      />

      <UbuntuPartnerGrid partners={partners} />

      <PageStandardSections pageKey="partners" contactContext="Partners Page" />
    </SitePageMain>
  );
}
