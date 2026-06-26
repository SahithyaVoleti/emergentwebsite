import PageHero from "../components/PageHero";
import SitePageMain from "../components/ubuntu/SitePageMain";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import UbuntuFeaturesBand from "../components/ubuntu/UbuntuFeaturesBand";
import UbuntuStatsStrip from "../components/ubuntu/UbuntuStatsStrip";
import UbuntuTeamGrid from "../components/ubuntu/UbuntuTeamGrid";
import UbuntuPartnerGrid from "../components/ubuntu/UbuntuPartnerGrid";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import team from "../data/team";
import { ABOUT_HERO_IMAGE } from "../lib/heroImageThemes";
import { COMPANY_FOUNDED_LABEL } from "../lib/company";
import { getSiteMockup } from "../data/siteMockups";
import { SECTION_LABEL } from "../data/sectionLabels";

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

const values = [
  {
    title: "Embedded delivery",
    desc: "Intelligent automation integrated with CRM, ERP, and line-of-business tools.",
  },
  {
    title: "Incremental modernization",
    desc: "We upgrade legacy apps incrementally so work keeps moving while AI lands.",
  },
  {
    title: "Transparent execution",
    desc: "Timelines, code, and tradeoffs are documented for your internal review.",
  },
  {
    title: "Remote-first",
    desc: "We hire globally and run disciplined schedules and handovers.",
  },
];

export default function AboutPage() {
  const missionMockup = getSiteMockup("collaboration");

  return (
    <SitePageMain>
      <PageHero
        label="About Us"
        title="Enterprise AI delivery and application modernization"
        description={`NeuralTrix AI was founded in ${COMPANY_FOUNDED_LABEL}. We are a senior-led team focused on governed intelligent automation and application modernization within enterprise software environments.`}
        primaryCTA={{ text: "Contact us", href: "#page-contact" }}
        secondaryCTA={{ text: "Careers", href: "/careers" }}
        image={ABOUT_HERO_IMAGE}
      />

      <UbuntuPageSection
        eyebrow={SECTION_LABEL.mission}
        title="Our mission"
        lead="We deliver intelligent automation within existing application workflows—aligned to governance, integration, and measurable outcomes."
        image={missionMockup.src}
        imageAlt={missionMockup.alt}
        bullets={[
          "Intelligent automation for CRM, ERP, internal tools, and customer applications",
          "Application modernization for legacy and core business systems",
          "Pilot first, scale when results hold up",
          "Hand over code and runbooks your team can own",
        ]}
      />

      <UbuntuStatsStrip
        stats={[
          { value: "2026", label: `Founded ${COMPANY_FOUNDED_LABEL}` },
          { value: "Senior-led", label: "Builders on every workstream" },
          { value: "Remote-first", label: "Distributed engineering team" },
          { value: "Pilot-based", label: "Scoped agent and app programs" },
        ]}
      />

      <UbuntuFeaturesBand
        id="about-values"
        eyebrow={SECTION_LABEL.values}
        title="Values that guide delivery"
        lead="These values guide how we scope intelligent automation programs, modernization workstreams, and operational handover."
        variant="alt"
        items={values}
      />

      <UbuntuTeamGrid
        members={team}
        title="Our team"
        lead="Senior practitioners lead workstreams so you engage directly with delivery owners—not intermediary account layers."
      />

      <UbuntuPartnerGrid partners={partners} />

      <PageStandardSections pageKey="about" contactContext="About Page" />
    </SitePageMain>
  );
}
