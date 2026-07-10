import UbuntuPageSection from "./UbuntuPageSection";
import CTASection from "../CTASection";
import PageContactForm from "../PageContactForm";
import { PAGE_STANDARD_SECTIONS } from "../../data/pageStandardSections";
import { SECONDARY_CTA_BY_PAGE } from "../../data/siteNav";
import { SITE_OUTCOMES_MEDIA, SITE_ASSURANCE_MEDIA } from "../../data/brandAssets";
import { getSiteMockup } from "../../data/siteMockups";
import { isContactHref } from "../../lib/siteNavigation";

function sectionFromConfig(config) {
  if (!config) return null;
  const isOutcomes = config.eyebrow === "Outcomes";
  const isAssurance = config.eyebrow === "Assurance";
  const media =
    config.media ??
    (isOutcomes
      ? SITE_OUTCOMES_MEDIA
      : isAssurance
        ? SITE_ASSURANCE_MEDIA
        : getSiteMockup(config.mockupKey ?? "collaboration"));
  return (
    <UbuntuPageSection
      eyebrow={config.eyebrow}
      title={config.title}
      lead={config.lead}
      bullets={config.bullets}
      image={media.src}
      imageAlt={media.alt}
      variant={config.variant}
      mockupVariant={isOutcomes || isAssurance || config.media ? "plain" : "browser"}
      className={
        isOutcomes ? "ubuntu-outcomes-section" : isAssurance ? "ubuntu-assurance-section" : undefined
      }
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
  const alternateCta =
    cta.buttonHref && cta.buttonText && !isContactHref(cta.buttonHref)
      ? { label: cta.buttonText, href: cta.buttonHref }
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
        <PageContactForm
          context={contactContext}
          copyOverrides={contactCopyOverrides}
          alternateCta={alternateCta}
        />
      )}
    </>
  );
}
