import { useParams, Link } from "react-router-dom";
import { Brain, Database, Code2, Zap } from "lucide-react";
import PageHero from "../components/PageHero";
import FAQSection from "../components/FAQSection";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import ArchitecturalShowcase from "../components/ArchitecturalShowcase";
import MethodologyFlowchart from "../components/MethodologyFlowchart";
import DomainAssurance from "../components/DomainAssurance";
import TestimonialsSection from "../components/TestimonialsSection";
import { FlatTechStackPanel } from "../components/CategorizedTechStackSection";
import TechStackLogoGrid from "../components/TechStackLogoGrid";
import solutions from "../data/solutions";
import { getSolutionProductName } from "../lib/solutionDisplay";
import { getSiteMockup } from "../data/siteMockups";
import { SECTION_LABEL } from "../data/sectionLabels";

export default function SolutionDetail() {
  const { slug } = useParams();
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    return (
      <SitePageMain>
        <div className="ubuntu-container flex min-h-[50vh] flex-col items-center justify-center py-16">
          <h1 className="ubuntu-section-title">Solution not found</h1>
          <Link to="/solutions" className="mt-4 text-[#d1511f] hover:underline">
            Back to solutions
          </Link>
        </div>
      </SitePageMain>
    );
  }

  const overviewMockup = getSiteMockup("dashboard");
  const methodologyMockup = getSiteMockup("code");

  const productName = getSolutionProductName(solution);
  const brandName = solution.brandName || solution.title;

  return (
    <SitePageMain>
      <PageHero
        significance="detail"
        label={brandName ? `${brandName} · SaaS product` : "Products"}
        title={solution.heroTitle || productName}
        description={solution.heroDesc}
        primaryCTA={{
          text: "Request a briefing",
          href: "#page-contact",
          contactIntent: "consultation",
        }}
        secondaryCTA={{ text: "View capabilities", href: "#capabilities" }}
        image={solution.heroImage}
      />

      <div id="capabilities">
        <UbuntuPageSection
          eyebrow={SECTION_LABEL.overview}
          title={`${productName} overview`}
          lead={solution.overview}
          image={overviewMockup.src}
          imageAlt={overviewMockup.alt}
          belowContent={
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <FlatTechStackPanel title="Technology stack" intro="Tools commonly integrated for this accelerator.">
                <TechStackLogoGrid items={solution.tech} />
              </FlatTechStackPanel>
            </div>
          }
        />

        <ArchitecturalShowcase
          eyebrow={SECTION_LABEL.modules}
          title="Solution modules"
          description="Pre-built modules structured to shorten time-to-value while keeping architecture and operations maintainable."
          capabilities={solution.features}
        />

        <UbuntuPageSection
          eyebrow={SECTION_LABEL.methodology}
          title={`Rollout steps for ${productName}`}
          lead="We sequence connectivity, configuration, validation, and rollout with explicit checkpoints."
          image={methodologyMockup.src}
          imageAlt={methodologyMockup.alt}
          belowContent={
            <MethodologyFlowchart
              steps={[
                {
                  icon: Database,
                  label: "Connect data",
                  desc: "Link existing sources through secure permission-aware connectors.",
                },
                { icon: Code2, label: "Configure scope", desc: "Define AI behavior and roles to your needs." },
                { icon: Brain, label: "Validate logic", desc: "Review and validate ground-truth responses at scale." },
                { icon: Zap, label: "Scale output", desc: "Go live, monitor usage, and iterate on quality." },
              ]}
            />
          }
        />

        <DomainAssurance
          title={`Assurance for ${productName} rollouts`}
          lead="Measurable checkpoints, permission scoping, and documented handover for accelerator deployments."
        />
      </div>

      <PageStandardSections
        pageKey="detail"
        contactContext={productName}
        includeMethodology={false}
        includeOutcomes={false}
        includeAssurance={false}
        ctaOverrides={{
          title: `Next Step for ${productName}`,
          description:
            "Assess integration effort, governance fit, and operational impact for your environment and stakeholder model.",
          mockupKey: "dashboard",
        }}
        beforeCta={
          <>
            <TestimonialsSection title="Engagement principles for new partners" />
            <FAQSection faqs={solution.faqs} />
          </>
        }
      />
    </SitePageMain>
  );
}
