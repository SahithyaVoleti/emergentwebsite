import UbuntuPageSection from "../ubuntu/UbuntuPageSection";
import UbuntuStatsStrip from "../ubuntu/UbuntuStatsStrip";
import ScopeOfDeliverySection from "../ScopeOfDeliverySection";
import UbuntuProcessMethodologyStrip from "../ubuntu/UbuntuProcessMethodologyStrip";
import PageStandardSections from "../ubuntu/PageStandardSections";
import FAQSection from "../FAQSection";
import TestimonialsSection from "../TestimonialsSection";
import RelatedBlog from "../RelatedBlog";
import TechnicalFoundationSplitSection from "./TechnicalFoundationSplitSection";
import { buildServiceStatsStrip } from "../../lib/buildServiceStatsStrip";

/**
 * Service detail body — fewer stacked bands than homepage mirror; aligned with solution detail flow.
 */
export default function ServiceDetailStandardLayout({
  service,
  contactContext,
  ctaOverrides = {},
}) {
  const techItems = (service.techStack ?? []).flatMap((cat) =>
    (cat.techs ?? []).map((name) => ({ name }))
  );

  const processSteps = (service.process ?? []).map((step, index) => ({
    value: String(index + 1).padStart(2, "0"),
    label: step.step,
  }));

  const outcomeBullets = (service.whyChooseUs ?? []).map((item) => `${item.title}: ${item.desc}`);

  const ctaTitle = ctaOverrides.title ?? `Next Step for ${service.title}`;
  const ctaDescription =
    ctaOverrides.description ??
    `We can align ${service.title} to your systems, priorities, and timeline to define an actionable starting scope and governance boundary.`;

  const stats = buildServiceStatsStrip(service);

  return (
    <>
      <ScopeOfDeliverySection service={service} />

      {stats.length > 0 && (
        <UbuntuStatsStrip
          id="service-delivery-stats"
          testId="service-delivery-stats"
          stats={stats}
        />
      )}

      {processSteps.length > 0 && (
        <UbuntuProcessMethodologyStrip
          id="service-methodology-steps"
          title={`Methodology for ${service.title} engagements`}
          lead="This methodology sequences alignment, build, and deployment checkpoints with clear ownership at each stage."
          steps={processSteps}
        />
      )}

      {techItems.length > 0 && (
        <TechnicalFoundationSplitSection
          title={`Technical foundation for ${service.title}`}
          lead="Platforms and tools commonly integrated on delivery programs for this service track. Selection follows your standards, integration constraints, and procurement rules."
          techItems={techItems}
        />
      )}

      {outcomeBullets.length > 0 && (
        <UbuntuPageSection
          eyebrow="Outcomes"
          title={`Outcomes for ${service.title}`}
          lead="These outcomes describe why teams continue engagement beyond initial pilots; your acceptance criteria define success."
          bullets={outcomeBullets}
        />
      )}

      <PageStandardSections
        pageKey="detail"
        contactContext={contactContext}
        includeMethodology={false}
        includeOutcomes={false}
        includeAssurance
        ctaOverrides={{
          title: ctaTitle,
          description: ctaDescription,
          mockupKey: ctaOverrides.mockupKey ?? "code",
        }}
        beforeCta={
          <>
            {service.faqs?.length > 0 && (
              <FAQSection
                faqs={service.faqs}
                title={`Common questions on ${service.title}`}
              />
            )}
            <TestimonialsSection title="How we engage new partners" />
            <RelatedBlog title="Related technical articles" />
          </>
        }
      />
    </>
  );
}
