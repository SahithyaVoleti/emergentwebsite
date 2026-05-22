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
import { TRACEFOLD } from "../../lib/tracefoldLabel";
import { CONTACT_TOPIC, contactFormTo } from "../../lib/contactIntent";
import blogArticles from "../../data/blog";

const CASE_STUDIES_LEAD =
  "Examples of problem classes and how we structure an engagement—not references to specific completed client programs unless separately agreed.";

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

  const featureItems = (service.subservices ?? []).slice(0, 8).map((sub) => ({
    name: sub.title,
    description: sub.desc,
    icon: "ml",
  }));

  const workflowSteps = (service.process ?? []).map((p) => ({
    title: p.step,
    desc: p.desc,
  }));

  const philosophyBullets = (service.process ?? []).map((p) => `${p.step}: ${p.desc}`);

  const caseStudySlides = cases.map((cs, index) => ({
    slug: `${service.slug}-pattern-${index}`,
    heroImage: service.heroImage,
    title: cs.title,
    shortDesc: cs.desc,
    cardDescriptor: cs.archetype,
    domain: cs.industry,
    href: "#page-contact",
  }));

  const ctaTitle = ctaOverrides.title ?? `Next Step for ${service.title}`;
  const ctaDescription =
    ctaOverrides.description ??
    `We can align ${service.title} to your systems, priorities, and timeline to define an actionable starting scope and governance boundary.`;

  return (
    <>
      <div id="capabilities">
        <ServiceSubservicesGrid service={service} />
      </div>

      {processStats.length > 0 && (
        <UbuntuProcessMethodologyStrip
          id="service-methodology-steps"
          title={`Methodology for ${service.title} engagements`}
          lead="This methodology sequences alignment, build, and deployment checkpoints with clear ownership at each stage."
          steps={processStats}
        />
      )}

      <UbuntuHomeVisionCta
        mockup={visionMockup}
        imagePosition={nextPosition()}
        config={{
          id: "service-outcomes",
          eyebrow: "Outcomes",
          title: `Outcomes for ${service.title}`,
          body: "These outcomes describe why teams continue engagement beyond initial pilots; your acceptance criteria define success.",
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
          items={caseStudySlides}
          eyebrow="Coverage"
          title={`${TRACEFOLD} patterns: ${service.title}`}
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
          id: "service-methodology-detail",
          eyebrow: "Assurance",
          title: `Assurance for ${service.title} programs`,
          lead: "Controls and checkpoints applied at each stage of the methodology above.",
          bullets: philosophyBullets,
        }}
      />

      <UbuntuHomeTechStack
        initialSlug={service.slug}
        config={{
          eyebrow: "Coverage",
          title: "Technical foundation",
          lead: "Platforms and tools commonly integrated on delivery programs for this service track.",
          primaryCta: {
            label: "Contact us",
            href: contactFormTo(location.pathname, CONTACT_TOPIC.CONTACT),
          },
          secondaryCta: { label: "View capabilities", href: "#capabilities" },
        }}
      />

      <ServiceDetailIndustriesBand />

      <TestimonialsSection title="How we engage new partners" />

      <UbuntuSplitLayout
        id="next-step"
        testId="service-next-step-cta"
        pattern="cta"
        variant="dark"
        image={nextStepImage?.src ?? getSiteMockup(ctaOverrides.mockupKey ?? "code").src}
        imageAlt={nextStepImage?.alt ?? getSiteMockup("code").alt}
        imagePosition={nextPosition()}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#e8b4b8]">
          Next Step
        </p>
        <h2 className="ubuntu-section-title text-white">{ctaTitle}</h2>
        <p className="ubuntu-lead text-white/90">{ctaDescription}</p>
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
          eyebrow: "Coverage",
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
