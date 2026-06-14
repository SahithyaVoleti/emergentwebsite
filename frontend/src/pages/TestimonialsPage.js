import PageHero from "../components/PageHero";
import TestimonialsSection from "../components/TestimonialsSection";
import { SECTION_LABEL } from "../data/sectionLabels";
import UbuntuStatsStrip from "../components/ubuntu/UbuntuStatsStrip";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";

export default function TestimonialsPage() {
  return (
    <SitePageMain>
      <PageHero
        label="Engagement"
        title="Engagement Principles for Prospective Partners"
        description="NeuralTrix is building its client base. This page explains what to expect in discovery and pilot: transparency, engineering access, and clear success measures."
        primaryCTA={{ text: "Start a conversation", href: "#page-contact" }}
        illustrationKey="caseStudies"
      />

      <UbuntuStatsStrip
        stats={[
          { value: "2026", label: "Founded Jan 12" },
          { value: "Senior-led", label: "Accountable delivery leads" },
          { value: "Defined", label: "Milestones and acceptance criteria" },
          { value: "Documented", label: "Handover and operational artifacts" },
        ]}
      />

      <TestimonialsSection
        eyebrow={SECTION_LABEL.engagement}
        title="Principles in detail"
      />

      <PageStandardSections pageKey="testimonials" contactContext="Engagement / prospective partner" />
    </SitePageMain>
  );
}
