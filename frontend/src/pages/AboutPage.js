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
    title: "Ship inside your apps",
    desc: "Agents and copilots live in CRM, ERP, and tools your team already uses.",
  },
  {
    title: "Modernize, don't restart",
    desc: "We upgrade legacy apps incrementally so work keeps moving while AI lands.",
  },
  {
    title: "Honest execution",
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
        title="We build AI agents and modernize business apps"
        description={`NeuralTrix AI started in ${COMPANY_FOUNDED_LABEL}. We are a small, senior team focused on two things: agents inside the software you run, and turning legacy apps into AI-powered products.`}
        primaryCTA={{ text: "Contact us", href: "#page-contact" }}
        secondaryCTA={{ text: "Careers", href: "/careers" }}
        image={ABOUT_HERO_IMAGE}
      />

      <UbuntuPageSection
        eyebrow={SECTION_LABEL.mission}
        title="Our mission"
        lead="We help teams put AI where work actually happens—inside existing apps—not in parallel experiments."
        image={missionMockup.src}
        imageAlt={missionMockup.alt}
        bullets={[
          "Build AI agents for CRM, ERP, internal tools, and customer apps",
          "Modernize legacy and normal apps into AI-powered software",
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
        lead="These values guide how we scope agent work, modernize apps, and hand over systems your teams can run."
        variant="alt"
        items={values}
      />

      <UbuntuTeamGrid
        members={team}
        title="Our team"
        lead="Senior builders lead workstreams so you talk to people who ship agents and app upgrades—not account layers."
      />

      <UbuntuPartnerGrid partners={partners} />

      <PageStandardSections pageKey="about" contactContext="About Page" />
    </SitePageMain>
  );
}
