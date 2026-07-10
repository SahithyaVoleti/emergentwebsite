import { useParams, Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import FAQSection from "../components/FAQSection";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import ServicesPillarCatalog from "../components/ubuntu/ServicesPillarCatalog";
import ArchitecturalShowcase from "../components/ArchitecturalShowcase";
import UbuntuProcessMethodologyStrip from "../components/ubuntu/UbuntuProcessMethodologyStrip";
import TestimonialsSection from "../components/TestimonialsSection";
import CategorizedTechStackSection from "../components/CategorizedTechStackSection";
import industries from "../data/industries";
import { INDUSTRY_ARCHITECTURE_IMAGE } from "../lib/heroImageThemes";
import { toMethodologyStripSteps } from "../lib/processSteps";
import { SECTION_LABEL } from "../data/sectionLabels";
import { SITE_ASSURANCE_MEDIA } from "../data/brandAssets";

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return (
      <SitePageMain>
        <div className="ubuntu-container flex min-h-[50vh] flex-col items-center justify-center py-16">
          <h1 className="ubuntu-section-title">Industry not found</h1>
          <Link to="/industries" className="mt-4 text-[#d1511f] hover:underline">
            Back to industries
          </Link>
        </div>
      </SitePageMain>
    );
  }

  const methodologySteps = toMethodologyStripSteps(industry.process);

  const overviewBullets = industry.highlights ?? [
    "AI-enabled capabilities inside sector line-of-business applications",
    "Modernization paths for legacy business software",
    "Controls aligned to how your industry reviews change",
  ];

  return (
    <SitePageMain>
      <PageHero
        significance="detail"
        title={industry.heroTitle}
        description={industry.heroDesc}
        primaryCTA={{
          text: "Discuss your applications",
          href: "#page-contact",
          contactIntent: "consultation",
        }}
        secondaryCTA={{ text: "View industry product modules", href: "#industry-product-modules" }}
        image={industry.heroImage}
      />

      <div id="capabilities">
        <UbuntuPageSection
          eyebrow={SECTION_LABEL.sectorContext}
          title={`Coverage for ${industry.title} applications`}
          lead={industry.overview}
          image={INDUSTRY_ARCHITECTURE_IMAGE}
          imageAlt=""
          bullets={overviewBullets}
        />

        <ArchitecturalShowcase
          id="industry-product-modules"
          eyebrow={SECTION_LABEL.industryAgents}
          title="Industry product modules"
          description={`Defined product modules for ${industry.title}—scoped for customization and deployment within sector application estates.`}
          capabilities={industry.industryProductModules ?? industry.industryReadyAgents}
          presentation="industry-product"
        />

        {methodologySteps.length > 0 && (
          <UbuntuProcessMethodologyStrip
            id="industry-methodology"
            eyebrow={SECTION_LABEL.methodology}
            title={`Methodology for ${industry.title} programs`}
            lead="This methodology assesses existing applications, designs workflow-aligned automation, integrates with line-of-business systems, and expands under governed pilot criteria."
            steps={methodologySteps}
          />
        )}

        <ServicesPillarCatalog
          id="industry-services"
          variant="cards"
          eyebrow={SECTION_LABEL.services}
          title={`Services for ${industry.title}`}
          lead="Four main disciplines—open each area to review services scoped for sector-specific systems and governance requirements."
          viewAllHref="/services"
          viewAllLabel="View all services"
        />

        <UbuntuPageSection
          id="industry-assurance"
          eyebrow={SECTION_LABEL.controls}
          title={`Assurance for ${industry.title} applications`}
          lead="This assurance model defines permissions, audit logging, and human oversight from the initial pilot phase in regulated and operational environments."
          variant="alt"
          bullets={[
            "Scoped access—modules only reach data and tools you approve",
            "Human review on high-impact actions inside your applications",
            "Audit logs suitable for sector security and compliance review",
            "Staging and rollback before changes hit production users",
          ]}
          image={SITE_ASSURANCE_MEDIA.src}
          imageAlt={SITE_ASSURANCE_MEDIA.alt}
          mockupVariant="plain"
        />

        <CategorizedTechStackSection
          dataTestId="industry-tech-stack"
          title={`Technology foundation for ${industry.title} programs`}
          intro="Representative models, frameworks, and infrastructure for sector programs. Final selections follow your security and procurement policies."
          categories={[
            {
              title: "AI & integration frameworks",
              techs: ["GPT-4o", "Claude 3.5", "LangChain", "LangGraph", "CrewAI", "Vector DBs"],
            },
            {
              title: "Application integration",
              techs: ["REST APIs", "GraphQL", "Webhooks", "FHIR/HL7", "LTI", "OAuth 2.0"],
            },
            {
              title: "Data & pipelines",
              techs: ["PostgreSQL", "Snowflake", "Kafka", "Airflow", "Redis", "MongoDB"],
            },
            {
              title: "Cloud & deployment",
              techs: ["AWS", "Azure", "Docker", "Kubernetes", "On-premise", "Edge"],
            },
          ]}
        />
      </div>

      <PageStandardSections
        pageKey="detail"
        contactContext={`Industry: ${industry.title}`}
        includeMethodology={false}
        includeOutcomes={false}
        includeAssurance={false}
        ctaOverrides={{
          title: `Next Step for ${industry.title} programs`,
          description:
            "Share your application estate and program priorities. We will propose a governed pilot aligned to sector requirements and review cycles.",
          mockupKey: "cloud",
        }}
        beforeCta={
          <>
            <TestimonialsSection title={`Engagement principles for ${industry.title} programs`} />
            <FAQSection faqs={industry.faqs} />
          </>
        }
      />
    </SitePageMain>
  );
}
