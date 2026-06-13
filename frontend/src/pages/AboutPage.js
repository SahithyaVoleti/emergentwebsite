import PageHero from "../components/PageHero";
import SitePageMain from "../components/ubuntu/SitePageMain";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import UbuntuFeaturesBand from "../components/ubuntu/UbuntuFeaturesBand";
import UbuntuStatsStrip from "../components/ubuntu/UbuntuStatsStrip";
import UbuntuTeamGrid from "../components/ubuntu/UbuntuTeamGrid";
import UbuntuPartnerGrid from "../components/ubuntu/UbuntuPartnerGrid";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import { ABOUT_HERO_IMAGE } from "../lib/heroImageThemes";
import { COMPANY_FOUNDED_LABEL } from "../lib/company";
import { getSiteMockup } from "../data/siteMockups";
import teamMembers from "../data/team";
import technologyPartners from "../data/partners";

const values = [
  {
    title: "Delivery priority",
    desc: "Scope decisions favor executable increments and visible progress over narrative-only milestones.",
  },
  {
    title: "Joint accountability",
    desc: "Shared communication channels, documented tradeoffs, and alignment to your roadmap while engaged.",
  },
  {
    title: "Transparent execution",
    desc: "Timelines, repositories, and decisions expressed in materials suitable for internal review.",
  },
  {
    title: "Remote-first",
    desc: "Engineering and delivery talent recruited globally with disciplined scheduling and handovers.",
  },
];

export default function AboutPage() {
  const missionMockup = getSiteMockup("collaboration");

  return (
    <SitePageMain>
      <PageHero
        label="About Us"
        title="Applied AI Engineering with Disciplined Delivery"
        description={`NeuralTrix AI began operations on ${COMPANY_FOUNDED_LABEL}. We are a compact, senior-led team focused on production AI and software outcomes for early customer programs.`}
        primaryCTA={{ text: "Contact us", href: "#page-contact" }}
        secondaryCTA={{ text: "Careers", href: "/careers" }}
        image={ABOUT_HERO_IMAGE}
      />

      <UbuntuPageSection
        eyebrow="Coverage"
        title="Coverage across company foundation"
        lead="We operate as a focused engineering partner, helping teams ship AI-enabled products with proportionate process and measurable checkpoints."
        image={missionMockup.src}
        imageAlt={missionMockup.alt}
        bullets={[
          "Mission: production-grade AI and software with transparent scope",
          "Vision: maintainable outcomes your organization can operate and extend",
          "Delivery discipline sized to production risk, not generic integrator overhead",
          "Early programs with controlled scope and shared decision channels",
        ]}
      />

      <UbuntuStatsStrip
        stats={[
          { value: "2026", label: `Founded ${COMPANY_FOUNDED_LABEL}` },
          { value: "Senior-led", label: "Accountable delivery leadership" },
          { value: "Remote-first", label: "Distributed engineering practice" },
          { value: "Pilot-based", label: "Scoped customer programs" },
        ]}
      />

      <UbuntuFeaturesBand
        id="about-values"
        eyebrow="Assurance"
        title="Assurance through operating values"
        lead="These values guide how we scope work, communicate tradeoffs, and hand over systems your teams can run."
        variant="alt"
        items={values}
      />

      <UbuntuTeamGrid
        title="Coverage across the delivery team"
        lead="Senior practitioners engaged on workstreams so stakeholders interact with decision-makers responsible for outcomes."
        members={teamMembers}
      />

      <UbuntuPartnerGrid partners={technologyPartners} />

      <PageStandardSections pageKey="about" contactContext="About Page" />
    </SitePageMain>
  );
}
