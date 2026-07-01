import { useParams, Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import FAQSection from "../components/FAQSection";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import UbuntuMetricGrid from "../components/ubuntu/UbuntuMetricGrid";
import UbuntuSplitCopy from "../components/ubuntu/UbuntuSplitCopy";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import TestimonialsSection from "../components/TestimonialsSection";
import caseStudies from "../data/caseStudies";
import { FlatTechStackPanel } from "../components/CategorizedTechStackSection";
import TechStackLogoGrid from "../components/TechStackLogoGrid";
import { getSiteMockup } from "../data/siteMockups";
import { SECTION_LABEL } from "../data/sectionLabels";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    return (
      <SitePageMain>
        <div className="ubuntu-container flex min-h-[50vh] flex-col items-center justify-center py-16">
          <h1 className="ubuntu-section-title">Test case not found</h1>
          <Link to="/research-innovation#test-cases" className="mt-4 text-[#d1511f] hover:underline">
            Back to test cases
          </Link>
        </div>
      </SitePageMain>
    );
  }

  const coverageMockup = getSiteMockup("dashboard");

  return (
    <SitePageMain>
      <PageHero
        significance="detail"
        title={cs.heroTitle}
        description={cs.heroDesc}
        primaryCTA={{ text: "Discuss this pattern", href: "#page-contact" }}
        secondaryCTA={{ text: "All production test cases", href: "/research-innovation#test-cases" }}
        image={cs.heroImage}
      />

      <UbuntuPageSection
        variant="alt"
        eyebrow={SECTION_LABEL.productionTestCases}
        title={`${cs.title}`}
        lead={`Production test case for ${cs.industry}—developed and tested in live environments. ${cs.status ?? "Production-ready"}.`}
      />

      <UbuntuMetricGrid
        eyebrow={SECTION_LABEL.planning}
        title="Test results from live validation"
        lead="Measured dimensions from production and sandbox testing—not marketing estimates."
        items={cs.results.map((r) => ({
          metric: r.metric,
          label: r.label,
          desc: r.desc,
        }))}
      />

      <UbuntuSplitCopy
        leftEyebrow={SECTION_LABEL.challenge}
        leftTitle="The challenge"
        leftBody={cs.challenge}
        rightEyebrow={SECTION_LABEL.solution}
        rightTitle="Delivery approach"
        rightBody={cs.solution}
      />

      <UbuntuPageSection
        eyebrow={SECTION_LABEL.capabilities}
        title="What we implemented"
        lead="Capabilities shipped and validated in the production test case."
        image={coverageMockup.src}
        imageAlt={coverageMockup.alt}
        bullets={cs.features}
        belowContent={
          <div className="mt-8 max-w-xl">
            <FlatTechStackPanel title="Technology stack" intro="Stack used in this production test case.">
              <TechStackLogoGrid items={cs.techStack} />
            </FlatTechStackPanel>
          </div>
        }
      />

      <PageStandardSections
        pageKey="detail"
        contactContext={`Test case: ${cs.title}`}
        includeMethodology={false}
        includeOutcomes={false}
        ctaOverrides={{
          title: "Next Step for your validation program",
          description:
            "Share your constraints and timeline. We map this production test case, or an adjusted version, to your systems, policies, and success measures.",
        }}
        beforeCta={
          <>
            <TestimonialsSection title="Engagement principles for new partners" />
            <FAQSection faqs={cs.faqs} />
          </>
        }
      />
    </SitePageMain>
  );
}
