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
import RelatedBlog from "../components/RelatedBlog";
import RelatedCaseStudies from "../components/RelatedCaseStudies";
import TechStackLogoGrid from "../components/TechStackLogoGrid";
import { FlatTechStackPanel } from "../components/CategorizedTechStackSection";
import solutions from "../data/solutions";
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
          <Link to="/solutions" className="mt-4 text-[#8b1538] hover:underline">
            Back to solutions
          </Link>
        </div>
      </SitePageMain>
    );
  }

  const overviewMockup = getSiteMockup("dashboard");
  const methodologyMockup = getSiteMockup("code");

  return (
    <SitePageMain>
      <PageHero
        label="Solutions"
        title={solution.heroTitle}
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
          title={`${solution.title} overview`}
          lead={solution.overview}
          image={overviewMockup.src}
          imageAlt={overviewMockup.alt}
          belowContent={
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <FlatTechStackPanel title="Technology stack" intro="Tools commonly integrated for this accelerator.">
                <TechStackLogoGrid items={solution.tech} compact className="w-full" />
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
          title={`Rollout steps for ${solution.title}`}
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
          title={`Assurance for ${solution.title} rollouts`}
          lead="Measurable checkpoints, permission scoping, and documented handover for accelerator deployments."
        />
      </div>

      <PageStandardSections
        pageKey="detail"
        contactContext={solution.title}
        includeMethodology={false}
        includeOutcomes={false}
        includeAssurance={false}
        ctaOverrides={{
          title: `Get started with ${solution.title}`,
          description:
            "Assess integration effort, governance fit, and operational impact for your environment and stakeholder model.",
          mockupKey: "dashboard",
        }}
        beforeCta={
          <>
            <RelatedCaseStudies />
            <TestimonialsSection title="Engagement principles for new partners" />
            <FAQSection faqs={solution.faqs} />
            <RelatedBlog />
          </>
        }
      />
    </SitePageMain>
  );
}
