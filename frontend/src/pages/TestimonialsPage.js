import PageHero from "../components/PageHero";
import TestimonialsSection from "../components/TestimonialsSection";
import UbuntuStatsStrip from "../components/ubuntu/UbuntuStatsStrip";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";

export default function TestimonialsPage() {
  return (
    <SitePageMain>
      <PageHero
        label="Engagement"
        title="How We Work With Prospective Partners"
        description="NeuralTrix is building its client base: this page explains what you can expect in discovery and pilot—transparency, engineering access, and explicit success measures."
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

      <TestimonialsSection title="Principles in detail" />

      <PageStandardSections pageKey="testimonials" contactContext="Engagement / prospective partner" />
    </SitePageMain>
  );
}
