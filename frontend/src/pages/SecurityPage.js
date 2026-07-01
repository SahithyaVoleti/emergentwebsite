import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import SitePageMain from "../components/ubuntu/SitePageMain";
import UbuntuFeaturesBand from "../components/ubuntu/UbuntuFeaturesBand";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import { ABOUT_HERO_IMAGE } from "../lib/heroImageThemes";
import {
  GOVERNANCE_ASSURANCE_BULLETS,
  GOVERNANCE_SECURITY_PILLARS,
} from "../data/governanceSecurity";
import { SECTION_LABEL } from "../data/sectionLabels";

export default function SecurityPage() {
  return (
    <SitePageMain>
      <PageHero
        significance="detail"
        label="Company"
        title="Governance and security"
        description="Control areas we address during architecture, build, and operations for agentic solutions and AI product programs—not certification claims unless separately contracted."
        primaryCTA={{ text: "Discuss your requirements", href: "#page-contact" }}
        secondaryCTA={{ text: "View assurance controls", href: "#governance-controls" }}
        image={ABOUT_HERO_IMAGE}
      />

      <UbuntuFeaturesBand
        id="governance-pillars"
        eyebrow={SECTION_LABEL.governance}
        title="Governance and security pillars"
        lead="Practices applied across agent deployment, data integration, and production operations."
        items={GOVERNANCE_SECURITY_PILLARS}
        variant="alt"
      />

      <UbuntuPageSection
        id="governance-controls"
        eyebrow={SECTION_LABEL.controls}
        title="Assurance for governed delivery"
        lead="This assurance model defines permissions, audit logging, and human oversight from discovery through production rollout."
        bullets={GOVERNANCE_ASSURANCE_BULLETS}
      />

      <PageContactForm context="Governance & Security" />
    </SitePageMain>
  );
}
