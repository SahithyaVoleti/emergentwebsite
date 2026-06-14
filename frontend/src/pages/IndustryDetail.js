import { useParams, Link } from "react-router-dom";
import { Brain, Database, Code2, Zap, GitBranch, BarChart3 } from "lucide-react";
import PageHero from "../components/PageHero";
import FAQSection from "../components/FAQSection";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import ServicesGrid4x4 from "../components/ubuntu/ServicesGrid4x4";
import ArchitecturalShowcase from "../components/ArchitecturalShowcase";
import MethodologyFlowchart from "../components/MethodologyFlowchart";
import RelatedCaseStudies from "../components/RelatedCaseStudies";
import TestimonialsSection from "../components/TestimonialsSection";
import RelatedBlog from "../components/RelatedBlog";
import CategorizedTechStackSection from "../components/CategorizedTechStackSection";
import industries from "../data/industries";
import services, { servicesForDisplay } from "../data/services";
import { INDUSTRY_ARCHITECTURE_IMAGE } from "../lib/heroImageThemes";
import { getSiteMockup } from "../data/siteMockups";
import { SECTION_LABEL } from "../data/sectionLabels";

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return (
      <SitePageMain>
        <div className="ubuntu-container flex min-h-[50vh] flex-col items-center justify-center py-16">
          <h1 className="ubuntu-section-title">Industry not found</h1>
          <Link to="/industries" className="mt-4 text-[#8b1538] hover:underline">
            Back to industries
          </Link>
        </div>
      </SitePageMain>
    );
  }

  const methodologyMockup = getSiteMockup("code");
  const processSteps = industry.process?.length
    ? industry.process.map((p, idx) => ({
        icon: [Database, GitBranch, Brain, Code2, Zap, BarChart3][idx % 6],
        label: p.step,
        desc: p.desc,
      }))
    : [
        { icon: Database, label: "Map your applications", desc: "List the software your teams use today." },
        { icon: Brain, label: "Design industry agents", desc: "Define agents for your sector workflows." },
        { icon: Zap, label: "Pilot inside one app", desc: "Embed agents and measure real usage." },
      ];

  const overviewBullets = industry.highlights ?? [
    "AI agents inside applications your sector already runs",
    "Modernization paths for legacy business software",
    "Controls aligned to how your industry reviews change",
  ];

  return (
    <SitePageMain>
      <PageHero
        label="Industries"
        title={industry.heroTitle}
        description={industry.heroDesc}
        primaryCTA={{
          text: "Discuss your applications",
          href: "#page-contact",
          contactIntent: "consultation",
        }}
        secondaryCTA={{ text: "See industry ready agents", href: "#industry-ready-agents" }}
        image={industry.heroImage}
      />

      <div id="capabilities">
        <UbuntuPageSection
          eyebrow={SECTION_LABEL.sectorContext}
          title={`Agents and apps in ${industry.title}`}
          lead={industry.overview}
          image={INDUSTRY_ARCHITECTURE_IMAGE}
          imageAlt={`${industry.title} AI agents in applications`}
          bullets={overviewBullets}
        />

        <ArchitecturalShowcase
          id="industry-ready-agents"
          eyebrow={SECTION_LABEL.industryAgents}
          title="Industry ready agents"
          description={`Proposed AI agents for ${industry.title}—ready to scope, customize, and deploy inside your sector applications.`}
          capabilities={industry.industryReadyAgents}
          presentation="industry-agent"
        />

        <UbuntuPageSection
          eyebrow={SECTION_LABEL.delivery}
          title={`Delivery steps for ${industry.title}`}
          lead="We start with the applications you run, design agents for real workflows, embed them in your software, and expand when pilots prove value."
          image={methodologyMockup.src}
          imageAlt={methodologyMockup.alt}
          belowContent={<MethodologyFlowchart steps={processSteps} />}
        />

        <RelatedCaseStudies
          showLabel
          industryFilter={industry.title}
          title={`Production test cases in ${industry.title}`}
        />

        <ServicesGrid4x4
          services={servicesForDisplay(services)}
          id="industry-services"
          eyebrow={SECTION_LABEL.services}
          title={`Services for ${industry.title}`}
          lead="AI agents, app modernization, copilots, and supporting engineering—scoped for applications in your sector."
          viewAllHref="/services"
          viewAllLabel="View all services"
        />

        <UbuntuPageSection
          eyebrow={SECTION_LABEL.controls}
          title={`Assurance for ${industry.title} applications`}
          lead="Agents in regulated and operational environments need clear permissions, logs, and human oversight—we build those in from the first pilot."
          variant="alt"
          bullets={[
            "Scoped access—agents only reach data and tools you approve",
            "Human review on high-impact actions inside your applications",
            "Audit logs suitable for sector security and compliance review",
            "Staging and rollback before changes hit production users",
          ]}
        />

        <CategorizedTechStackSection
          dataTestId="industry-tech-stack"
          title={`Technology for ${industry.title} agents`}
          intro="Typical models, frameworks, and infrastructure for agents embedded in sector applications. Final choices follow your security and procurement rules."
          categories={[
            {
              title: "AI & agent frameworks",
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
          title: `Get started with ${industry.title} agents`,
          description:
            "Tell us which applications you run and where you want AI agents or modernization. We will propose a pilot sized to your sector and review cycle.",
          mockupKey: "cloud",
        }}
        beforeCta={
          <>
            <TestimonialsSection title={`Engagement principles for ${industry.title} programs`} />
            <RelatedBlog title={`Articles: ${industry.title}`} />
            <FAQSection faqs={industry.faqs} />
          </>
        }
      />
    </SitePageMain>
  );
}
