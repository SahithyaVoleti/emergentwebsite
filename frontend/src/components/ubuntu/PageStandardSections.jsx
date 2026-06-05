import UbuntuPageSection from "./UbuntuPageSection";
import CTASection from "../CTASection";
import PageContactForm from "../PageContactForm";
import { PAGE_STANDARD_SECTIONS } from "../../data/pageStandardSections";
import { getSiteMockup } from "../../data/siteMockups";

function sectionFromConfig(config) {
  if (!config) return null;
  const mockup = getSiteMockup(config.mockupKey ?? "collaboration");
  return (
    <UbuntuPageSection
      eyebrow={config.eyebrow}
      title={config.title}
      lead={config.lead}
      bullets={config.bullets}
      image={mockup.src}
      imageAlt={mockup.alt}
      variant={config.variant}
    />
  );
}

/**
 * Standard page close: Methodology → Outcomes → Assurance → Next Step CTA → Contact.
 * Matches SolutionsPage / CONTENT_STYLE_GUIDE flow.
 */
export default function PageStandardSections({
  pageKey,
  contactContext,
  ctaOverrides = {},
  includeContact = true,
  includeCta = true,
  includeMethodology = true,
  includeOutcomes = true,
  includeAssurance = true,
  beforeCta = null,
}) {
  const sections = PAGE_STANDARD_SECTIONS[pageKey];
  if (!sections) return null;

  const cta = { ...sections.cta, ...ctaOverrides };

  return (
    <>
      {includeMethodology && sectionFromConfig(sections.methodology)}
      {includeOutcomes && sectionFromConfig(sections.outcomes)}
      {includeAssurance && sectionFromConfig(sections.assurance)}
      {beforeCta}
      {includeCta && (
        <CTASection
          title={cta.title}
          description={cta.description}
          buttonText={cta.buttonText}
          buttonHref={cta.buttonHref}
          contactIntent={cta.contactIntent}
          mockupKey={cta.mockupKey}
          compact={Boolean(cta.compact)}
        />
      )}
      {includeContact && <PageContactForm context={contactContext} />}
    </>
  );
}
