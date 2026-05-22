import { useParams, Link } from "react-router-dom";
import { Brain, Database, Code2, Zap, GitBranch, BarChart3 } from "lucide-react";
import PageHero from "../components/PageHero";
import FAQSection from "../components/FAQSection";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import UbuntuDetailNav from "../components/ubuntu/UbuntuDetailNav";
import ServicesGrid4x4 from "../components/ubuntu/ServicesGrid4x4";
import ArchitecturalShowcase from "../components/ArchitecturalShowcase";
import MethodologyFlowchart from "../components/MethodologyFlowchart";
import RelatedCaseStudies from "../components/RelatedCaseStudies";
import TestimonialsSection from "../components/TestimonialsSection";
import RelatedBlog from "../components/RelatedBlog";
import CategorizedTechStackSection from "../components/CategorizedTechStackSection";
import industries from "../data/industries";
import services from "../data/services";
import { INDUSTRY_ARCHITECTURE_IMAGE } from "../lib/heroImageThemes";
import { getSiteMockup } from "../data/siteMockups";

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
        { icon: Database, label: "Data discovery", desc: "Map inputs and legacy constraints." },
        { icon: Brain, label: "Model selection", desc: "Align models to sector risk." },
        { icon: Zap, label: "Pilot deployment", desc: "Validate on representative workloads." },
      ];

  return (
    <SitePageMain>
      <PageHero
        label="Industries"
        title={industry.heroTitle}
        description={industry.heroDesc}
        primaryCTA={{
          text: "Get industry assessment",
          href: "#page-contact",
          contactIntent: "consultation",
        }}
        secondaryCTA={{ text: "View capabilities", href: "#capabilities" }}
        image={industry.heroImage}
      />

      <div id="capabilities">
        <UbuntuDetailNav to="/industries" label="All industries" testId="back-to-industries" />

        <UbuntuPageSection
          eyebrow="Coverage"
          title={`Coverage across ${industry.title}`}
          lead={industry.overview}
          image={INDUSTRY_ARCHITECTURE_IMAGE}
          imageAlt={`${industry.title} reference architecture`}
          bullets={[
            "Priority focus: operational accuracy and throughput",
            "Deployment path: hardened enterprise infrastructure",
            "Controls aligned to sector review and audit habits",
          ]}
        />

        <ArchitecturalShowcase
          title={`Coverage across AI capabilities for ${industry.title}`}
          description="Typical capability bundles we scope with sector stakeholders—not a fixed SKU sold as a single bundle."
          capabilities={industry.features}
        />

        <UbuntuPageSection
          eyebrow="Methodology"
          title={`Methodology for ${industry.title} delivery phases`}
          lead="This methodology sequences discovery through scale so security and operational checkpoints occur before irreversible commitments."
          image={methodologyMockup.src}
          imageAlt={methodologyMockup.alt}
          belowContent={<MethodologyFlowchart steps={processSteps} />}
        />

        <RelatedCaseStudies
          showLabel
          industryFilter={industry.title}
          title={`Coverage across ${industry.title} scenarios`}
        />

        <ServicesGrid4x4
          services={services.slice(0, 8)}
          id="industry-services"
          eyebrow="Coverage"
          title={`Service tracks for ${industry.title}`}
          lead="Delivery tracks commonly scoped for this sector. Select a card for full scope and methodology."
          viewAllHref="/services"
          viewAllLabel="View all services"
        />

        <UbuntuPageSection
          eyebrow="Assurance"
          title="Assurance for security and compliance posture"
          lead="This assurance model states control patterns we design toward; specific certifications are agreed per engagement."
          variant="alt"
          bullets={[
            "Zero-trust data access protocols",
            "PII and PHI masking aligned to policy",
            "Staging environments with audit logging",
            "Immutable traceability for sensitive workflows",
          ]}
        />

        <CategorizedTechStackSection
          dataTestId="industry-tech-stack"
          title={`Reference technology stack for ${industry.title}`}
          intro="Example groupings for planning and architecture discussions. Final selection follows your constraints and procurement rules."
          categories={[
            {
              title: "AI & ML models",
              techs: ["GPT-4o", "Claude 3.5", "TensorFlow", "PyTorch", "LangChain", "Vector DBs"],
            },
            {
              title: "Languages & frameworks",
              techs: ["Python / FastAPI", "Node.js", "Java Spring", "Go-Micro", "GraphQL", "REST"],
            },
            {
              title: "Data & pipelines",
              techs: ["Snowflake", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Apache Airflow"],
            },
            {
              title: "Cloud & deployment",
              techs: ["AWS / Azure", "Docker", "Kubernetes", "Terraform", "CI/CD", "Serverless"],
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
          title: `Next Step for ${industry.title} Programs`,
          description:
            "Schedule a consultation to align use cases, controls, and milestones to your operating context and governance model.",
          mockupKey: "cloud",
        }}
        beforeCta={
          <>
            <TestimonialsSection title={`Engagement: ${industry.title}`} />
            <RelatedBlog title={`Articles: ${industry.title}`} />
            <FAQSection faqs={industry.faqs} />
          </>
        }
      />
    </SitePageMain>
  );
}
