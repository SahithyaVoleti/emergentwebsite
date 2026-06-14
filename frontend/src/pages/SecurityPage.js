import { LockKeyhole, Eye, Server, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero";
import UbuntuFeaturesBand from "../components/ubuntu/UbuntuFeaturesBand";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";

const pillars = [
  {
    icon: LockKeyhole,
    title: "Secure by design",
    desc: "Security controls built into architecture, development, and deployment.",
  },
  {
    icon: Eye,
    title: "Governance and auditability",
    desc: "Traceable controls, review paths, and operational transparency.",
  },
  {
    icon: Server,
    title: "Infrastructure hardening",
    desc: "Environment protections, access boundaries, and resilient platform practices.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance alignment",
    desc: "Delivery patterns that support regulated and security-sensitive industries.",
  },
];

export default function SecurityPage() {
  return (
    <SitePageMain>
      <PageHero
        label="Security"
        title="Security Practices for Enterprise AI Environments"
        description="Our security model combines technical controls, governance checkpoints, and operational safeguards across the delivery lifecycle."
        primaryCTA={{
          text: "Discuss security requirements",
          href: "#page-contact",
          contactIntent: "consultation",
        }}
        illustrationKey="industries"
      />

      <UbuntuFeaturesBand
        id="security-pillars"
        title="Security controls we address"
        lead="Control areas we address during architecture, build, and operations. Not certification claims unless separately contracted."
        items={pillars}
        className="!border-t-0"
      />

      <PageStandardSections pageKey="security" contactContext="Security Page" />
    </SitePageMain>
  );
}
