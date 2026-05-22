import PageHero from "../components/PageHero";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import FAQSection from "../components/FAQSection";
import UbuntuListingSection from "../components/ubuntu/UbuntuListingSection";
import ServicesGrid4x4 from "../components/ubuntu/ServicesGrid4x4";
import services from "../data/services";
import { SERVICES_LANDING_HERO_IMAGE } from "../lib/heroImageThemes";

export default function ServicesPage() {
  const serviceFaqs = [
    {
      q: "How do you decide which AI service we should start with?",
      a: "We run a short discovery process to evaluate your highest-friction workflows, data readiness, and ROI potential, then prioritize the service track with the fastest business impact.",
    },
    {
      q: "Can you work with our existing stack and internal team?",
      a: "Yes. Our delivery model is stack-aware and collaborative. We integrate with your current systems and work alongside your engineering, product, and operations teams.",
    },
    {
      q: "What timeline should we expect for initial value delivery?",
      a: "Most clients see first measurable outcomes within 8-12 weeks, depending on integration complexity, data quality, and stakeholder availability.",
    },
    {
      q: "How do you handle security and compliance requirements?",
      a: "Security and governance are built into architecture and delivery from day one, including access controls, auditability, and compliance-aligned deployment patterns.",
    },
    {
      q: "Do you provide post-launch support and optimization?",
      a: "Absolutely. We offer managed optimization for model quality, performance monitoring, cost controls, and feature expansion after go-live.",
    },
  ];

  return (
    <SitePageMain>
      <PageHero
        label="Services"
        title="AI and Software Engineering Services for Defined Outcomes"
        description="From discovery through production: scoped engagements, direct access to delivery leadership, and milestones tied to acceptance criteria and operational metrics."
        primaryCTA={{ text: "Contact us", href: "#page-contact" }}
        image={SERVICES_LANDING_HERO_IMAGE}
      />

      <ServicesGrid4x4
        services={services}
        id="services-catalog"
        eyebrow="Coverage"
        title="Coverage across service delivery tracks"
        lead="Explore delivery tracks aligned to priority workflows. Each track maintains engineering rigor proportionate to production risk."
        viewAllHref={undefined}
        className="!border-t-0"
      />

      <PageStandardSections
        pageKey="services"
        contactContext="Services Page"
        beforeCta={
          <UbuntuListingSection
            id="services-faq"
            eyebrow="Assurance"
            title="Assurance for enterprise expectations"
            lead="Frequently asked questions on service selection, timelines, security, and post-launch support."
            variant="alt"
          >
            <FAQSection faqs={serviceFaqs} bare />
          </UbuntuListingSection>
        }
      />
    </SitePageMain>
  );
}
