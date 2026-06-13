import PageHero from "../components/PageHero";
import TestimonialsSection from "../components/TestimonialsSection";
import UbuntuStatsStrip from "../components/ubuntu/UbuntuStatsStrip";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import UbuntuFeaturesBand from "../components/ubuntu/UbuntuFeaturesBand";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import {
  ENGAGEMENT_MODELS,
  ENGAGEMENT_TIMELINE,
  CLIENT_REQUIREMENTS,
  WHEN_NOT_A_FIT,
} from "../data/engagementModels";

export default function TestimonialsPage() {
  return (
    <SitePageMain>
      <PageHero
        label="Engagement"
        title="How we work with early customer programs"
        description="NeuralTrix is building its client base with pilot-scoped delivery: transparency, engineering access, and explicit success measures—not generic transformation promises."
        primaryCTA={{ text: "Start a pilot", href: "#page-contact?topic=consultation", contactIntent: "consultation" }}
        secondaryCTA={{ text: "View services", href: "/services" }}
        illustrationKey="collaboration"
      />

      <UbuntuStatsStrip
        stats={[
          { value: "2026", label: "Founded Jan 12" },
          { value: "Senior-led", label: "Accountable delivery leads" },
          { value: "2–8 wks", label: "Typical pilot windows" },
          { value: "Documented", label: "Handover artifacts" },
        ]}
      />

      <UbuntuFeaturesBand
        id="engagement-models"
        eyebrow="Engagement models"
        title="Discovery, pilot, or retained engineering"
        lead="Pick the entry point that matches your stage. Most teams start with discovery or a fixed pilot."
        variant="alt"
        items={ENGAGEMENT_MODELS.map((model) => ({
          title: `${model.title} · ${model.duration}`,
          desc: `${model.summary} Includes: ${model.includes.join("; ")}.`,
        }))}
      />

      <UbuntuPageSection
        eyebrow="Timeline"
        title="Sample 8-week pilot path"
        lead="Durations flex by scope, but this is the rhythm most early programs follow."
        bullets={ENGAGEMENT_TIMELINE.map((step) => `${step.week} — ${step.label}: ${step.detail}`)}
        imagePosition="right"
      />

      <UbuntuPageSection
        eyebrow="Your side"
        title="What we need from you"
        lead="Pilots fail when access and decisions lag. We surface these requirements in week one."
        bullets={CLIENT_REQUIREMENTS}
        variant="alt"
      />

      <TestimonialsSection title="Operating principles" />

      <UbuntuPageSection
        eyebrow={WHEN_NOT_A_FIT.tag}
        title={WHEN_NOT_A_FIT.headline}
        lead={WHEN_NOT_A_FIT.body}
        bullets={[
          "Open-ended staff augmentation without delivery ownership",
          "Strategy decks without a scoped build commitment",
          "Guaranteed ROI claims before baselines exist",
        ]}
      />

      <PageStandardSections
        pageKey="testimonials"
        contactContext="How we work / pilot inquiry"
        includeAssurance={false}
      />
    </SitePageMain>
  );
}
