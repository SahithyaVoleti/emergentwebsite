import { useParams, Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import UbuntuMetricGrid from "../components/ubuntu/UbuntuMetricGrid";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import { getClientCaseStudyBySlug } from "../data/clientCaseStudies";

export default function ClientCaseStudyDetail() {
  const { slug } = useParams();
  const study = getClientCaseStudyBySlug(slug);

  if (!study) {
    return (
      <SitePageMain>
        <div className="ubuntu-container flex min-h-[50vh] flex-col items-center justify-center py-16">
          <h1 className="ubuntu-section-title">Case study not found</h1>
          <Link to="/our-work/case-studies" className="mt-4 text-[#d1511f] hover:underline">
            Back to case studies
          </Link>
        </div>
      </SitePageMain>
    );
  }

  const { customerOverview, businessChallenges, solutionOverview, industryImpact } = study;

  return (
    <SitePageMain>
      <PageHero
        significance="detail"
        title={study.heroTitle}
        description={study.heroDesc}
        primaryCTA={{ text: "Discuss this deployment", href: "#page-contact" }}
        secondaryCTA={{ text: "All case studies", href: "/our-work/case-studies" }}
        image={study.heroImage}
      />

      <UbuntuPageSection
        variant="alt"
        eyebrow="Customer overview"
        title={customerOverview.clientName}
        lead={`${customerOverview.industry} · ${customerOverview.location} · ${customerOverview.size}`}
        bullets={customerOverview.highlights}
        belowContent={
          <p className="ubuntu-body mt-6 max-w-3xl text-[var(--site-text-muted)]">
            {customerOverview.body}
          </p>
        }
      />

      <UbuntuPageSection
        eyebrow="Business challenges"
        title={businessChallenges.title}
        lead={businessChallenges.lead}
        bullets={businessChallenges.items}
      />

      <UbuntuPageSection
        variant="alt"
        eyebrow="Solution overview"
        title={solutionOverview.title}
        lead={solutionOverview.lead}
        image={study.image ?? study.heroImage}
        imageAlt={study.imageAlt ?? study.title}
        bullets={solutionOverview.features}
        belowContent={
          <p className="ubuntu-body mt-6 max-w-3xl text-[var(--site-text-muted)]">
            {solutionOverview.body}
          </p>
        }
      />

      <UbuntuMetricGrid
        eyebrow="Industry impact"
        title={industryImpact.title}
        lead={`${industryImpact.lead} ${industryImpact.body}`}
        columns={2}
        items={industryImpact.metrics.map((item) => ({
          metric: item.value,
          label: item.label,
        }))}
      />

      <PageStandardSections
        pageKey="detail"
        contactContext={`Case study: ${study.title}`}
        includeMethodology={false}
        includeOutcomes={false}
        includeAssurance={false}
        ctaOverrides={{
          title: "Next Step for a similar deployment",
          description:
            "Share your operational constraints and timeline. We will map this delivery pattern—or an adjusted version—to your systems, policies, and success measures.",
        }}
      />
    </SitePageMain>
  );
}
