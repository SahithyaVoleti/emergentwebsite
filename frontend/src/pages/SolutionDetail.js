import { useParams, Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import FAQSection from "../components/FAQSection";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import ArchitecturalShowcase from "../components/ArchitecturalShowcase";
import UbuntuProcessMethodologyStrip from "../components/ubuntu/UbuntuProcessMethodologyStrip";
import SolutionAgentOverview from "../components/solution/SolutionAgentOverview";
import { FlatTechStackPanel } from "../components/CategorizedTechStackSection";
import TechStackLogoGrid from "../components/TechStackLogoGrid";
import solutions from "../data/solutions";
import { getSolutionProductName } from "../lib/solutionDisplay";
import { SECTION_LABEL } from "../data/sectionLabels";
import { SITE_ASSURANCE_MEDIA } from "../data/brandAssets";

const AGENT_DEPLOYMENT_STEPS = [
  { value: "01", label: "Discovery & scoping" },
  { value: "02", label: "Integration design" },
  { value: "03", label: "Agent configuration" },
  { value: "04", label: "Validation & pilot" },
  { value: "05", label: "Production rollout" },
];

const ASSURANCE_BULLETS = [
  "Scoped access—agents only reach data and tools you approve",
  "Human review on high-impact actions and escalations",
  "Audit logs suitable for security and compliance review",
  "Staging and rollback paths before production changes",
];

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

  const productName = getSolutionProductName(solution);

  return (
    <SitePageMain>
      <PageHero
        significance="detail"
        title={solution.heroTitle}
        description={solution.heroDesc}
        primaryCTA={{ text: "Contact us", href: "#page-contact" }}
        secondaryCTA={{ text: "View capabilities", href: "#agent-capabilities" }}
        image={solution.heroImage}
      />

      <SolutionAgentOverview solution={solution} />

      <ArchitecturalShowcase
        id="agent-capabilities"
        eyebrow={SECTION_LABEL.modules}
        title={`Capabilities for ${productName}`}
        description={`Core agent modules for ${solution.cardDescriptor}—scoped for integration within your applications and governance model.`}
        capabilities={solution.features}
      />

      <UbuntuPageSection
        id="solution-tech-stack"
        eyebrow={SECTION_LABEL.technology}
        title={`Technology foundation for ${productName}`}
        lead="Representative tools and integrations for this agent. Final selections follow your security and procurement policies."
        variant="alt"
        belowContent={
          <FlatTechStackPanel
            title="Integrated stack"
            intro="Platforms and frameworks commonly connected during agent deployment."
          >
            <TechStackLogoGrid items={solution.tech} />
          </FlatTechStackPanel>
        }
      />

      <UbuntuProcessMethodologyStrip
        id="solution-methodology"
        eyebrow={SECTION_LABEL.methodology}
        title={`Methodology for ${productName} deployment`}
        lead="This methodology sequences discovery, integration, validation, and rollout with explicit checkpoints at each stage."
        steps={AGENT_DEPLOYMENT_STEPS}
      />

      <UbuntuPageSection
        id="solution-assurance"
        eyebrow={SECTION_LABEL.controls}
        title={`Assurance for ${productName} rollouts`}
        lead="This assurance model defines permissions, audit logging, and human oversight from the initial pilot phase."
        variant="default"
        bullets={ASSURANCE_BULLETS}
        image={SITE_ASSURANCE_MEDIA.src}
        imageAlt={SITE_ASSURANCE_MEDIA.alt}
        mockupVariant="plain"
      />

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
        beforeCta={<FAQSection faqs={solution.faqs} />}
      />
    </SitePageMain>
  );
}
