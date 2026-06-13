import { useParams, Link } from "react-router-dom";
import { Brain, Database, Code2, Zap } from "lucide-react";
import PageHero from "../components/PageHero";
import FAQSection from "../components/FAQSection";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import UbuntuDetailNav from "../components/ubuntu/UbuntuDetailNav";
import ArchitecturalShowcase from "../components/ArchitecturalShowcase";
import TestimonialsSection from "../components/TestimonialsSection";
import RelatedBlog from "../components/RelatedBlog";
import {
  SolutionMethodologySection,
  SolutionOverviewSection,
  SolutionPilotTimeline,
} from "../components/solution/SolutionDetailSections";
import solutions from "../data/solutions";

const PILOT_WEEKS = [
  { week: "1–2", label: "Discovery", desc: "Data boundaries, integration map, acceptance tests." },
  { week: "3–4", label: "Configure", desc: "Accelerator modules wired to your environment." },
  { week: "5–6", label: "Validate", desc: "Stakeholder review on representative workloads." },
  { week: "7–8", label: "Hand over", desc: "Runbooks, access docs, expand/stop decision." },
];

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

  const heroTitle = solution.cardDescriptor
    ? `${solution.title}: ${solution.cardDescriptor}`
    : solution.heroTitle;

  const methodologySteps = [
    {
      icon: Database,
      label: "Connect data",
      desc: "Link sources through permission-aware connectors.",
    },
    { icon: Code2, label: "Configure scope", desc: "Define behavior and roles for your pilot." },
    { icon: Brain, label: "Validate logic", desc: "Review responses against agreed eval sets." },
    { icon: Zap, label: "Hand over", desc: "Monitor usage and iterate within pilot bounds." },
  ];

  return (
    <SitePageMain>
      <PageHero
        label={solution.cardDescriptor ?? "Solutions"}
        title={heroTitle}
        description={`${solution.heroDesc} Not a standalone SaaS product—accelerator modules we deploy into your environment during scoped pilots.`}
        primaryCTA={{
          text: "Start a pilot",
          href: "#page-contact",
          contactIntent: "consultation",
        }}
        secondaryCTA={{ text: "View capabilities", href: "#capabilities" }}
        image={solution.heroImage}
      />

      <div id="capabilities">
        <UbuntuDetailNav to="/solutions" label="All solutions" testId="back-to-solutions" />

        <SolutionOverviewSection solution={solution} />

        <SolutionPilotTimeline weeks={PILOT_WEEKS} />

        <ArchitecturalShowcase
          title="What's included in the accelerator"
          description="Functional modules configured during pilot—not a exhaustive product catalog."
          capabilities={solution.features}
        />

        <SolutionMethodologySection steps={methodologySteps} />
      </div>

      <PageStandardSections
        pageKey="detail"
        contactContext={solution.title}
        includeMethodology={false}
        includeOutcomes={false}
        includeAssurance={false}
        ctaOverrides={{
          title: `Next step for ${solution.title}`,
          description:
            "Brief us on your environment. We map accelerator fit, integration effort, and a proportionate pilot scope.",
          buttonText: "Start a pilot",
          contactIntent: "consultation",
          mockupKey: "dashboard",
        }}
        beforeCta={
          <>
            <TestimonialsSection title="How we engage on accelerator programs" />
            <FAQSection faqs={solution.faqs} />
            <RelatedBlog />
          </>
        }
      />
    </SitePageMain>
  );
}
