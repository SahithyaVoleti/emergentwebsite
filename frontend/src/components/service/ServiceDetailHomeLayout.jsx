import { Link, useLocation } from "react-router-dom";
import UbuntuSplitLayout from "../ubuntu/UbuntuSplitLayout";
import ServiceSubservicesGrid from "./ServiceSubservicesGrid";
import ServiceDetailIndustriesBand from "./ServiceDetailIndustriesBand";
import TestimonialsSection from "../TestimonialsSection";
import PageContactForm from "../PageContactForm";
import UbuntuProcessMethodologyStrip from "../ubuntu/UbuntuProcessMethodologyStrip";
import { toMethodologyStripSteps } from "../../lib/processSteps";
import UbuntuHomeVisionCta from "../home/ubuntu/UbuntuHomeVisionCta";
import UbuntuHomePhilosophy from "../home/ubuntu/UbuntuHomePhilosophy";
import SectionEyebrow from "../ubuntu/SectionEyebrow";
import SectionTitle from "../ubuntu/SectionTitle";
import { getHomeSectionImage } from "../../data/homePageImages";
import { getSiteMockup } from "../../data/siteMockups";
import { homeImagePosition } from "../../lib/homeImagePosition";
import { CONTACT_TOPIC, contactFormTo } from "../../lib/contactIntent";

const SERVICE_ASSURANCE_BULLETS = [
  "Scoped credentials and audit trails for automated actions",
  "Tests on critical workflows before production go-live",
  "Rollback paths for prompts, models, and tool permissions",
  "Documentation ready for security and procurement review",
];

/**
 * Service detail body — mirrors homepage section order and containers; copy comes from service data.
 */
export default function ServiceDetailHomeLayout({
  service,
  contactContext,
  ctaOverrides = {},
}) {
  const location = useLocation();
  let mediaIndex = 1;
  const nextPosition = () => homeImagePosition(mediaIndex++);

  const visionMockup = getSiteMockup("data");
  const philosophyMockup = getSiteMockup("code");
  const nextStepImage = getHomeSectionImage("next-step");

  const processStats = toMethodologyStripSteps(service.process);

  const displayTitle = service.catalogTitle ?? service.title;

  const ctaTitle = ctaOverrides.title ?? `Next step for ${displayTitle}`;
  const ctaDescription =
    ctaOverrides.description ??
    `We align ${displayTitle} to your systems, operating model, and delivery timeline to define a governed starting scope and success criteria.`;

  return (
    <>
      <div id="capabilities">
        <ServiceSubservicesGrid service={service} />
      </div>

      {processStats.length > 0 && (
        <UbuntuProcessMethodologyStrip
          id="service-methodology-steps"
          eyebrow="Methodology"
          title={`Methodology for ${displayTitle}`}
          lead="This methodology sequences alignment, build, and deployment checkpoints with clear ownership at each stage."
          steps={processStats}
        />
      )}

      <UbuntuHomeVisionCta
        mockup={visionMockup}
        imagePosition={nextPosition()}
        config={{
          id: "service-outcomes",
          eyebrow: "Value",
          title: `Outcomes for ${displayTitle}`,
          body: "Delivery differentiators we apply during discovery and pilot planning—complementing your acceptance criteria and governance requirements.",
          primaryCta: {
            label: "Contact us",
            href: contactFormTo(location.pathname, CONTACT_TOPIC.CONTACT),
          },
          secondaryCta: { label: "View capabilities", href: "#capabilities" },
        }}
        bullets={service.whyChooseUs?.map((item) => `${item.title}: ${item.desc}`)}
      />

      <UbuntuHomePhilosophy
        mockup={philosophyMockup}
        imagePosition={nextPosition()}
        config={{
          id: "service-assurance",
          eyebrow: "Assurance",
          title: `Assurance for ${displayTitle} programs`,
          lead: "Controls and review artifacts we build into each delivery milestone—not added after launch.",
          bullets: SERVICE_ASSURANCE_BULLETS,
        }}
      />

      <ServiceDetailIndustriesBand />

      <TestimonialsSection title="Engagement principles for new partners" />

      <UbuntuSplitLayout
        id="next-step"
        testId="service-next-step-cta"
        pattern="cta"
        image={nextStepImage?.src ?? getSiteMockup(ctaOverrides.mockupKey ?? "code").src}
        imageAlt={nextStepImage?.alt ?? getSiteMockup("code").alt}
        imagePosition={nextPosition()}
      >
        <SectionEyebrow>Contact</SectionEyebrow>
        <SectionTitle as="h2" title={ctaTitle} />
        <p className="ubuntu-lead">{ctaDescription}</p>
        <div className="ubuntu-cta-row flex-wrap">
          <Link
            to={contactFormTo(location.pathname, CONTACT_TOPIC.CONTACT)}
            className="ubuntu-btn-primary"
          >
            Contact us
          </Link>
        </div>
      </UbuntuSplitLayout>

      <PageContactForm context={contactContext} />
    </>
  );
}
