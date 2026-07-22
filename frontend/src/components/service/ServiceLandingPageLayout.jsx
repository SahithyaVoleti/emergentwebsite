import { lazy, Suspense } from "react";
import { Link, useLocation } from "react-router-dom";
import FAQSection from "../FAQSection";
import PageContactForm from "../PageContactForm";
import TestimonialsSection from "../TestimonialsSection";
import TechStackRibbonSection from "../ubuntu/TechStackRibbonSection";
import UbuntuMetricGrid from "../ubuntu/UbuntuMetricGrid";
import ScopeOfDeliveryGrid from "./ScopeOfDeliveryGrid";
import { sectionBlockClass } from "../../lib/sectionBands";
import ServiceDetailIndustriesBand from "./ServiceDetailIndustriesBand";
import UbuntuHomeFeatures from "../home/ubuntu/UbuntuHomeFeatures";
import UbuntuHomePhilosophy from "../home/ubuntu/UbuntuHomePhilosophy";
import UbuntuHomeVisionCta from "../home/ubuntu/UbuntuHomeVisionCta";
import UbuntuProcessMethodologyStrip from "../ubuntu/UbuntuProcessMethodologyStrip";
import UbuntuSplitLayout from "../ubuntu/UbuntuSplitLayout";
import UbuntuStatsStrip from "../ubuntu/UbuntuStatsStrip";
import SectionEyebrow from "../ubuntu/SectionEyebrow";
import SectionTitle from "../ubuntu/SectionTitle";
import SiteNavLink from "../ubuntu/SiteNavLink";
import ServiceOfferingCards from "../ubuntu/ServiceOfferingCards";
import ServicesClientCaseStudiesPreview from "../ubuntu/ServicesClientCaseStudiesPreview";
import { getHomeSectionImage } from "../../data/homePageImages";
import { getSiteMockup } from "../../data/siteMockups";
import { homeImagePosition } from "../../lib/homeImagePosition";
import { toMethodologyStripSteps } from "../../lib/processSteps";
import { CONTACT_TOPIC, contactFormTo } from "../../lib/contactIntent";
import { getSubserviceCardImage } from "../../data/serviceSubserviceImages";

const UbuntuHomeBlogs = lazy(() =>
  import("../home/ubuntu/UbuntuHomeIndustriesBlogs").then((mod) => ({
    default: mod.UbuntuHomeBlogs,
  }))
);

function SectionFallback({ minHeight = "12rem" }) {
  return <div style={{ minHeight }} aria-hidden />;
}

/** Normalize workstream/capability rows for homepage-style offering cards. */
function toOfferingCards(items = []) {
  return items.map((item, index) => {
    const id = item.id ?? item.key ?? `offering-${index}`;
    const title = item.title ?? item.name ?? item.label;
    const hasServiceId = Boolean(item.id) && !String(item.id).startsWith("offering-");
    const href = item.href ?? (hasServiceId ? `/services/${item.id}` : undefined);
    const cardImage = item.cardImage ?? (hasServiceId ? getSubserviceCardImage(item.id) : undefined);

    return {
      key: item.key ?? id,
      id,
      title,
      href,
      testId: item.testId ?? `offering-card-${id}`,
      cardImage,
      showMedia: Boolean(cardImage),
    };
  });
}

/**
 * Full service landing layout — shared by main service pillars and subservices.
 */
export default function ServiceLandingPageLayout({
  sections,
  offeringItems = [],
  relatedOfferingItems = [],
  contactContext,
}) {
  const location = useLocation();
  let mediaIndex = 1;
  const nextPosition = () => homeImagePosition(mediaIndex++);

  const processSteps = toMethodologyStripSteps(sections.methodology.process);
  const nextStepImage = sections.nextStep.media ?? getHomeSectionImage("next-step");
  const intro = sections.intro;
  const servicesIntro = sections.servicesIntro?.hide ? null : sections.servicesIntro;
  const showOfferings = !sections.offerings?.hide && !sections.serviceBlocks;
  const showRelated =
    !sections.relatedOfferings?.hide &&
    relatedOfferingItems.length > 0 &&
    sections.relatedOfferings;
  const showEngagement = !sections.engagement?.hide;
  const showBlog = !sections.blog?.hide;

  return (
    <>
      <UbuntuStatsStrip
        stats={sections.stats.items}
        id={sections.stats.id}
        testId={sections.stats.testId}
        animate
      />

      <UbuntuSplitLayout
        id={intro.id}
        testId={`${intro.id}-section`}
        pattern="cta"
        image={intro.media.src}
        imageAlt={intro.media.alt}
        imagePosition={nextPosition()}
        mockupVariant="plain"
      >
        <SectionEyebrow>{intro.eyebrow}</SectionEyebrow>
        <SectionTitle as="h2" title={intro.title} />
        <p className="ubuntu-lead">{intro.lead}</p>
        <p className="mt-4 text-base leading-relaxed text-[#555]">{intro.body}</p>
        <div className="ubuntu-cta-row flex-wrap">
          <a href={intro.primaryCta.href} className="ubuntu-btn-primary">
            {intro.primaryCta.label}
          </a>
          {intro.secondaryCta.href.startsWith("/") ? (
            <Link to={intro.secondaryCta.href} className="ubuntu-home-link">
              {intro.secondaryCta.label} →
            </Link>
          ) : (
            <a href={intro.secondaryCta.href} className="ubuntu-home-link">
              {intro.secondaryCta.label} →
            </a>
          )}
        </div>
      </UbuntuSplitLayout>

      {servicesIntro ? (
        <UbuntuSplitLayout
          id={servicesIntro.id}
          testId={`${servicesIntro.id}-section`}
          pattern="cta"
          image={servicesIntro.media.src}
          imageAlt={servicesIntro.media.alt}
          imagePosition={nextPosition()}
          mockupVariant="plain"
          className="border-b border-[#d9d9d9]"
        >
          <SectionEyebrow>{servicesIntro.eyebrow}</SectionEyebrow>
          <SectionTitle as="h2" title={servicesIntro.title} />
          <p className="ubuntu-lead">{servicesIntro.lead}</p>
          <p className="mt-4 text-base leading-relaxed text-[#555]">{servicesIntro.body}</p>
          <div className="ubuntu-cta-row flex-wrap">
            <a href={servicesIntro.primaryCta.href} className="ubuntu-btn-primary">
              {servicesIntro.primaryCta.label}
            </a>
            <a href={servicesIntro.secondaryCta.href} className="ubuntu-home-link">
              {servicesIntro.secondaryCta.label} →
            </a>
          </div>
        </UbuntuSplitLayout>
      ) : null}

      {sections.serviceBlocks ? (
        <ScopeOfDeliveryGrid
          id={sections.serviceBlocks.id}
          eyebrow={sections.serviceBlocks.eyebrow}
          title={sections.serviceBlocks.title}
          lead={sections.serviceBlocks.lead}
          modules={sections.serviceBlocks.modules}
        />
      ) : null}

      {sections.valuePillars && !sections.valuePillars.hide ? (
        <UbuntuMetricGrid
          id={sections.valuePillars.id}
          eyebrow={sections.valuePillars.eyebrow}
          title={sections.valuePillars.title}
          lead={sections.valuePillars.lead}
          items={sections.valuePillars.items}
          columns={sections.valuePillars.columns ?? 4}
          variant="alt"
        />
      ) : null}

      {showOfferings ? (
      <section
        id={sections.offerings.id}
        className={sectionBlockClass("scroll-mt-24 border-y border-[#d9d9d9]")}
        aria-labelledby="service-offerings-heading"
      >
        <div className="ubuntu-container">
          <div className="mb-8 max-w-3xl lg:mb-10">
            <SectionEyebrow>{sections.offerings.eyebrow}</SectionEyebrow>
            <SectionTitle id="service-offerings-heading" title={sections.offerings.title} />
            <p className="ubuntu-lead mt-3">{sections.offerings.lead}</p>
          </div>

          {sections.offerings.capabilityItems?.length ? (
            <ServiceOfferingCards
              items={toOfferingCards(sections.offerings.capabilityItems)}
              cardVariant="subservice"
            />
          ) : (
            <ServiceOfferingCards items={toOfferingCards(offeringItems)} cardVariant="subservice" />
          )}
        </div>
      </section>
      ) : null}

      {showRelated ? (
        <section
          id={sections.relatedOfferings.id}
          className={sectionBlockClass("scroll-mt-24 border-b border-[#d9d9d9]")}
          aria-labelledby="related-workstreams-heading"
        >
          <div className="ubuntu-container">
            <div className="mb-8 max-w-3xl lg:mb-10">
              <SectionEyebrow>{sections.relatedOfferings.eyebrow}</SectionEyebrow>
              <SectionTitle id="related-workstreams-heading" title={sections.relatedOfferings.title} />
              <p className="ubuntu-lead mt-3">{sections.relatedOfferings.lead}</p>
            </div>
            <ServiceOfferingCards
              items={toOfferingCards(relatedOfferingItems)}
              cardVariant="subservice"
            />
          </div>
        </section>
      ) : null}

      <TechStackRibbonSection
        id={sections.techStack.id}
        testId={sections.techStack.testId}
        eyebrow={sections.techStack.eyebrow}
        title={sections.techStack.title}
        techNames={sections.techStack.techNames}
      />

      <UbuntuHomeFeatures
        config={{
          id: sections.coreCapabilities.id,
          eyebrow: sections.coreCapabilities.eyebrow,
          title: sections.coreCapabilities.title,
          lead: sections.coreCapabilities.lead,
          media: sections.coreCapabilities.media,
        }}
        items={sections.coreCapabilities.items}
      />

      <UbuntuProcessMethodologyStrip
        id={sections.methodology.id}
        eyebrow={sections.methodology.eyebrow}
        title={sections.methodology.title}
        lead={sections.methodology.lead}
        steps={processSteps}
      />

      <UbuntuHomeVisionCta
        mockup={
          sections.outcomes.media ?? getSiteMockup(sections.outcomes.mockupKey)
        }
        mockupVariant="plain"
        imagePosition={nextPosition()}
        config={{
          id: sections.outcomes.id,
          eyebrow: sections.outcomes.eyebrow,
          title: sections.outcomes.title,
          body: sections.outcomes.body,
          primaryCta: {
            label: sections.outcomes.primaryCta.label,
            href: contactFormTo(location.pathname, CONTACT_TOPIC.CONTACT),
          },
          secondaryCta: sections.outcomes.secondaryCta,
        }}
        bullets={sections.outcomes.bullets}
      />

      {sections.trustMetrics ? (
        <UbuntuMetricGrid
          id={sections.trustMetrics.id}
          eyebrow={sections.trustMetrics.eyebrow}
          title={sections.trustMetrics.title}
          lead={sections.trustMetrics.lead}
          items={sections.trustMetrics.items}
          columns={sections.trustMetrics.columns ?? 4}
        />
      ) : null}

      <UbuntuHomePhilosophy config={sections.assurance} imagePosition={nextPosition()} />

      <ServicesClientCaseStudiesPreview config={sections.caseStudies} />

      <ServiceDetailIndustriesBand
        id={sections.industries.id}
        eyebrow={sections.industries.eyebrow}
        title={sections.industries.title}
        lead={sections.industries.lead}
      />

      {showEngagement ? (
      <TestimonialsSection
        id={`${sections.stats.id}-engagement`}
        title={sections.engagement.title}
      />
      ) : null}

      {showBlog ? (
      <Suspense fallback={<SectionFallback minHeight="16rem" />}>
        <UbuntuHomeBlogs config={sections.blog} />
      </Suspense>
      ) : null}

      <UbuntuSplitLayout
        id={sections.nextStep.id}
        testId={`${sections.nextStep.id}-cta`}
        pattern="cta"
        image={nextStepImage?.src ?? intro.media.src}
        imageAlt={nextStepImage?.alt ?? intro.media.alt}
        imagePosition={nextPosition()}
        mockupVariant="plain"
      >
        <SectionEyebrow>{sections.nextStep.eyebrow}</SectionEyebrow>
        <SectionTitle as="h2" title={sections.nextStep.title} />
        <p className="ubuntu-lead">{sections.nextStep.lead}</p>
        <div className="ubuntu-cta-row flex-wrap">
          <SiteNavLink
            href={sections.nextStep.primaryCta.href}
            contactIntent={sections.nextStep.primaryCta.contactIntent}
            primary
            showArrow={false}
          >
            {sections.nextStep.primaryCta.label}
          </SiteNavLink>
          <a href={sections.nextStep.secondaryCta.href} className="ubuntu-home-link">
            {sections.nextStep.secondaryCta.label} →
          </a>
        </div>
      </UbuntuSplitLayout>

      <FAQSection faqs={sections.faqs} title={sections.faqTitle} />

      <PageContactForm context={contactContext} />
    </>
  );
}
