import { Link, useLocation } from "react-router-dom";
import UbuntuSplitLayout from "../ubuntu/UbuntuSplitLayout";
import SolutionsHorizontalSlider from "../ubuntu/SolutionsHorizontalSlider";
import ServiceSubservicesGrid from "./ServiceSubservicesGrid";
import ServiceDetailIndustriesBand from "./ServiceDetailIndustriesBand";
import TestimonialsSection from "../TestimonialsSection";
import PageContactForm from "../PageContactForm";
import UbuntuProcessMethodologyStrip from "../ubuntu/UbuntuProcessMethodologyStrip";
import UbuntuHomeVisionCta from "../home/ubuntu/UbuntuHomeVisionCta";
import UbuntuHomePhilosophy from "../home/ubuntu/UbuntuHomePhilosophy";
import UbuntuHomeTechStack from "../home/ubuntu/UbuntuHomeTechStack";
import { UbuntuHomeBlogs } from "../home/ubuntu/UbuntuHomeIndustriesBlogs";
import { getHomeSectionImage } from "../../data/homePageImages";
import { getSiteMockup } from "../../data/siteMockups";
import { homeImagePosition } from "../../lib/homeImagePosition";
import { CONTACT_TOPIC, contactFormTo } from "../../lib/contactIntent";
import blogArticles from "../../data/blog";

const CASE_STUDIES_LEAD =
  "Production test cases linked to this service—systems we developed, tested in live environments, and validated as production-ready.";

const SERVICE_ASSURANCE_BULLETS = [
  "Scoped credentials and audit trails for agent actions",
  "Tests on critical workflows before production go-live",
  "Rollback paths for prompts, models, and tool permissions",
  "Documentation ready for security and procurement review",
];

/**
 * Service detail body — mirrors homepage section order and containers; copy comes from service data.
 */
export default function ServiceDetailHomeLayout({
  service,
  cases = [],
  contactContext,
  ctaOverrides = {},
}) {
  const location = useLocation();
  let mediaIndex = 1;
  const nextPosition = () => homeImagePosition(mediaIndex++);

  const visionMockup = getSiteMockup("data");
  const philosophyMockup = getSiteMockup("code");
  const nextStepImage = getHomeSectionImage("next-step");

  const processStats = (service.process ?? []).map((step, index) => ({
    value: String(index + 1).padStart(2, "0"),
    label: step.step,
  }));

  const caseStudySlides = cases.map((cs, index) => ({
    slug: `${service.slug}-pattern-${index}`,
    heroImage: service.heroImage,
    title: cs.title,
    shortDesc: cs.desc,
    cardDescriptor: cs.archetype,
    domain: cs.industry,
    href: cs.caseStudySlug ? `/case-studies/${cs.caseStudySlug}` : "/case-studies",
  }));

  const ctaTitle = ctaOverrides.title ?? `Get started with ${service.title}`;
  const ctaDescription =
    ctaOverrides.description ??
    `We align ${service.title} to your systems, priorities, and timeline to define a practical starting scope and control boundaries.`;

  return (
    <>
      <div id="capabilities">
        <ServiceSubservicesGrid service={service} />
      </div>

      {processStats.length > 0 && (
        <UbuntuProcessMethodologyStrip
          id="service-methodology-steps"
          eyebrow="Methodology"
          title={`Delivery steps for ${service.title}`}
          lead="We sequence alignment, build, and deployment checkpoints with clear ownership at each stage."
          steps={processStats}
        />
      )}

      <UbuntuHomeVisionCta
        mockup={visionMockup}
        imagePosition={nextPosition()}
        config={{
          id: "service-outcomes",
          eyebrow: "Value",
          title: `Why teams choose ${service.title}`,
          body: "Differentiators we bring to discovery and pilot—not a substitute for your own acceptance criteria.",
          primaryCta: {
            label: "Contact us",
            href: contactFormTo(location.pathname, CONTACT_TOPIC.CONTACT),
          },
          secondaryCta: { label: "View capabilities", href: "#capabilities" },
        }}
        bullets={service.whyChooseUs?.map((item) => `${item.title}: ${item.desc}`)}
      />

      {caseStudySlides.length > 0 && (
        <SolutionsHorizontalSlider
          id="service-case-patterns"
          eyebrow="Production test cases"
          items={caseStudySlides}
          title={`Live-tested implementations: ${service.title}`}
          lead={CASE_STUDIES_LEAD}
          viewAllHref={undefined}
          autoAdvanceMs={6000}
          hrefFor={(item) => item.href}
          testIdPrefix="service-case-slide"
        />
      )}

      <UbuntuHomePhilosophy
        mockup={philosophyMockup}
        imagePosition={nextPosition()}
        config={{
          id: "service-assurance",
          eyebrow: "Assurance",
          title: `Assurance for ${service.title} programs`,
          lead: "Controls and review artifacts we build into each delivery milestone—not added after launch.",
          bullets: SERVICE_ASSURANCE_BULLETS,
        }}
      />

      <UbuntuHomeTechStack
        initialSlug={service.slug}
        config={{
          title: "Technical foundation",
          eyebrow: "Technology",
          lead: "Platforms and tools we commonly use on delivery programs for this service track.",
          primaryCta: {
            label: "Contact us",
            href: contactFormTo(location.pathname, CONTACT_TOPIC.CONTACT),
          },
          secondaryCta: { label: "View capabilities", href: "#capabilities" },
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
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#5c677d]">
          Contact
        </p>
        <h2 className="ubuntu-section-title">{ctaTitle}</h2>
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

      <UbuntuHomeBlogs
        config={{
          id: "related-articles",
          eyebrow: "Articles",
          title: "Related technical articles",
          lead: undefined,
          viewAllHref: "/blog",
          viewAllLabel: "View all articles",
          slugs: blogArticles.slice(0, 3).map((a) => a.slug),
        }}
      />

      <PageContactForm context={contactContext} />
    </>
  );
}
