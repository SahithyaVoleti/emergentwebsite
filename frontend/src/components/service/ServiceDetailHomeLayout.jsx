import SiteNavLink from "../ubuntu/SiteNavLink";
import UbuntuSplitLayout from "../ubuntu/UbuntuSplitLayout";
import ServicePilotOverviewSection from "./ServiceDetailScopeSections";
import ServiceSubservicesGrid from "./ServiceSubservicesGrid";
import TestimonialsSection from "../TestimonialsSection";
import FAQSection from "../FAQSection";
import PageContactForm from "../PageContactForm";
import { getServicePilotMeta } from "../../data/servicePilotMeta";
import { getSiteMockup } from "../../data/siteMockups";
import { getHomeSectionImage } from "../../data/homePageImages";

/**
 * Startup-friendly service detail: pilot scope, capabilities, deliverables, FAQ, contact.
 */
export default function ServiceDetailHomeLayout({ service, contactContext, ctaOverrides = {} }) {
  const pilot = getServicePilotMeta(service.slug);
  const nextStepImage = getHomeSectionImage("next-step");
  const faqs = (service.faqs ?? []).slice(0, 5);

  const ctaTitle = ctaOverrides.title ?? `Start a ${service.title} pilot`;
  const ctaDescription =
    ctaOverrides.description ??
    `${pilot.idealFor} Typical pilot window: ${pilot.pilotDuration}.`;

  return (
    <>
      <ServicePilotOverviewSection pilot={pilot} />

      <div id="capabilities">
        <ServiceSubservicesGrid
          service={{
            ...service,
            subservices: (service.subservices ?? []).slice(0, 6),
          }}
          title={`Top capabilities for ${service.title}`}
          lead="Six modules we most often scope into first pilots. Full capability depth is available during discovery."
        />
      </div>

      {faqs.length > 0 && (
        <section className="ubuntu-section-block border-y border-[#d9d9d9] bg-white">
          <div className="ubuntu-container py-12 sm:py-16">
            <FAQSection faqs={faqs} title={`Questions about ${service.title} pilots`} />
          </div>
        </section>
      )}

      <TestimonialsSection title="How we engage on new programs" showLabel={false} />

      <UbuntuSplitLayout
        id="next-step"
        testId="service-next-step-cta"
        pattern="cta"
        variant="dark"
        image={nextStepImage?.src ?? getSiteMockup("chat").src}
        imageAlt={nextStepImage?.alt ?? "Schedule a pilot discovery call"}
        imagePosition="right"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#e8b4b8]">
          Next Step
        </p>
        <h2 className="ubuntu-section-title text-white">{ctaTitle}</h2>
        <p className="ubuntu-lead text-white/90">{ctaDescription}</p>
        <div className="ubuntu-cta-row flex-wrap">
          <SiteNavLink href="#page-contact" contactIntent="consultation" primary showArrow={false}>
            Start a pilot
          </SiteNavLink>
          <SiteNavLink href="/testimonials" muted className="!text-[#e8b4b8]">
            See engagement models
          </SiteNavLink>
        </div>
      </UbuntuSplitLayout>

      <PageContactForm context={contactContext} />
    </>
  );
}
