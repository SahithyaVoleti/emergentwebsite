import { LockKeyhole, Eye, Server, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero";
import UbuntuFeaturesBand from "../components/ubuntu/UbuntuFeaturesBand";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";

const pillars = [
  {
    icon: LockKeyhole,
    title: "Secure by design",
    desc: "Security controls embedded in architecture, development, and deployment—not bolted on after launch.",
  },
  {
    icon: Eye,
    title: "Access & auditability",
    desc: "Role-based access, logging, and review paths sized to your program—not generic enterprise claims.",
  },
  {
    icon: Server,
    title: "Data handling",
    desc: "Classification, retention, and residency decisions documented per engagement.",
  },
  {
    icon: ShieldCheck,
    title: "Incident readiness",
    desc: "Runbooks and escalation paths for models, APIs, and data pipelines in pilot scope.",
  },
];

const notYetClaims = [
  "SOC 2 Type II certification (available to scope in future programs)",
  "Pen-test reports unless contracted per engagement",
  "Guaranteed compliance with every regional framework without assessment",
];

export default function SecurityPage() {
  return (
    <SitePageMain>
      <PageHero
        label="Security"
        title="Security practices in our delivery"
        description="How we handle data, access, and change control during pilot and production programs—not a certified enterprise security brochure."
        primaryCTA={{
          text: "Discuss security requirements",
          href: "#page-contact",
          contactIntent: "consultation",
        }}
        illustrationKey="security"
      />

      <UbuntuFeaturesBand
        id="security-pillars"
        eyebrow="Practices"
        title="Control areas we address in delivery"
        lead="These summarize practices we embed in milestones. Certification claims require separate contractual scope."
        items={pillars}
        className="!border-t-0"
      />

      <UbuntuPageSection
        eyebrow="Honest boundaries"
        title="What we can't claim yet"
        lead="Early-stage honesty builds trust with security-conscious buyers. Ask us for evidence paths relevant to your review."
        variant="alt"
        bullets={notYetClaims}
      />

      <PageStandardSections pageKey="security" contactContext="Security Page" includeAssurance={false} />
    </SitePageMain>
  );
}
