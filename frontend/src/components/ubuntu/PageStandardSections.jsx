import UbuntuPageSection from "./UbuntuPageSection";
import CTASection from "../CTASection";
import PageContactForm from "../PageContactForm";
import { PAGE_STANDARD_SECTIONS } from "../../data/pageStandardSections";
import { SECONDARY_CTA_BY_PAGE } from "../../data/siteNav";
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
 * Standard page close: methodology → outcomes → assurance → contact (merged CTA when contact is included).
 * When contact is included, Get started copy merges into the contact band so two CTA sections
 * never appear back-to-back.
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
  const showStandaloneCta = includeCta && !includeContact;
  const contactCopyOverrides =
    includeCta && includeContact
      ? {
          eyebrow: cta.eyebrow,
          title: cta.title,
          lead: cta.description,
        }
      : undefined;

  return (
    <>
      {includeMethodology && sectionFromConfig(sections.methodology)}
      {includeOutcomes && sectionFromConfig(sections.outcomes)}
      {includeAssurance && sectionFromConfig(sections.assurance)}
      {beforeCta}
      {showStandaloneCta && (
        <CTASection
          title={cta.title}
          description={cta.description}
          buttonText={cta.buttonText}
          buttonHref={cta.buttonHref}
          contactIntent={cta.contactIntent}
          mockupKey={cta.mockupKey}
          compact={Boolean(cta.compact)}
          secondaryCta={SECONDARY_CTA_BY_PAGE[pageKey] ?? SECONDARY_CTA_BY_PAGE.detail}
        />
      )}
      {includeContact && (
        <PageContactForm context={contactContext} copyOverrides={contactCopyOverrides} />
      )}
    </>
  );
}
