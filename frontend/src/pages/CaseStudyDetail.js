import { useParams, Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import FAQSection from "../components/FAQSection";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import UbuntuMetricGrid from "../components/ubuntu/UbuntuMetricGrid";
import UbuntuSplitCopy from "../components/ubuntu/UbuntuSplitCopy";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import TestimonialsSection from "../components/TestimonialsSection";
import RelatedBlog from "../components/RelatedBlog";
import caseStudies from "../data/caseStudies";
import TechStackLogoGrid from "../components/TechStackLogoGrid";
import { FlatTechStackPanel } from "../components/CategorizedTechStackSection";
import { TRACEFOLD } from "../lib/tracefoldLabel";
import { getSiteMockup } from "../data/siteMockups";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    return (
      <SitePageMain>
        <div className="ubuntu-container flex min-h-[50vh] flex-col items-center justify-center py-16">
          <h1 className="ubuntu-section-title">Scenario not found</h1>
          <Link to="/case-studies" className="mt-4 text-[#8b1538] hover:underline">
            Back to case studies
          </Link>
        </div>
      </SitePageMain>
    );
  }

  const coverageMockup = getSiteMockup("dashboard");

  return (
    <SitePageMain>
      <PageHero
        label={cs.industry}
        title={cs.heroTitle}
        description={cs.heroDesc}
        primaryCTA={{ text: "Discuss this pattern", href: "#page-contact" }}
        secondaryCTA={{ text: `All ${TRACEFOLD} narratives`, href: "/case-studies" }}
        image={cs.heroImage}
      />

      <UbuntuPageSection
        variant="alt"
        eyebrow="Assurance"
        title={`${TRACEFOLD} delivery pattern`}
        lead="This page describes a representative delivery narrative aligned with NeuralTrix services—not a claim about a specific completed customer program."
      />

      <UbuntuMetricGrid
        eyebrow="Methodology"
        title="Methodology for scoping this scenario"
        lead="These dimensions are planning lenses for a pilot, not guaranteed results from a prior engagement."
        items={cs.results.map((r) => ({
          metric: r.metric,
          label: r.label,
          desc: r.desc,
        }))}
      />

      <UbuntuSplitCopy
        leftEyebrow="Coverage"
        leftTitle="The challenge"
        leftBody={cs.challenge}
        rightTitle="Delivery approach"
        rightBody={cs.solution}
      />

      <UbuntuPageSection
        eyebrow="Coverage"
        title="Capability areas we typically implement"
        lead="Tools and patterns referenced in this delivery narrative for planning and estimation."
        image={coverageMockup.src}
        imageAlt={coverageMockup.alt}
        bullets={cs.features}
        belowContent={
          <div className="mt-8 max-w-xl">
            <FlatTechStackPanel title="Technology stack" intro="Representative stack for this scenario.">
              <TechStackLogoGrid
                items={cs.techStack}
                marqueeColumnCap={3}
                marqueeColumnHeightClassName="h-40 min-h-[10rem]"
                className="w-full"
              />
            </FlatTechStackPanel>
          </div>
        }
      />

      <PageStandardSections
        pageKey="detail"
        contactContext={`${TRACEFOLD}: ${cs.title}`}
        includeMethodology={false}
        includeOutcomes={false}
        ctaOverrides={{
          title: "Next Step for Your Roadmap",
          description:
            "Share your constraints and timeline; we map this pattern, or an adjusted variant, to your systems, governance model, and success measures.",
        }}
        beforeCta={
          <>
            <TestimonialsSection title="How we engage new partners" />
            <FAQSection faqs={cs.faqs} />
            <RelatedBlog />
          </>
        }
      />
    </SitePageMain>
  );
}
