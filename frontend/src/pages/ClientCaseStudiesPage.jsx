import PageHero from "../components/PageHero";
import OurWorkSubNav from "../components/ubuntu/OurWorkSubNav";
import PortfolioFeatureShowcase from "../components/ubuntu/PortfolioFeatureShowcase";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import { getClientCaseStudies } from "../data/clientCaseStudies";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

export default function ClientCaseStudiesPage() {
  const caseStudies = getClientCaseStudies();

  return (
    <SitePageMain>
      <PageHero
        title="Case studies for |measured client outcomes|"
        description="Documented deployments showing how platform products resolved operational challenges for education groups, hospitals, BPO centers, and statewide outreach programs."
        primaryCTA={{ text: "Browse case studies", href: "#case-study-leadcliques-education-enrollment" }}
        secondaryCTA={{ text: "View products", href: "/our-work/products" }}
        image={LISTING_PAGE_HERO_IMAGES.solutions}
      />

      <OurWorkSubNav className="our-work-subnav--band" />

      {caseStudies.map((study) => (
        <PortfolioFeatureShowcase
          key={study.slug}
          id={`case-study-${study.slug}`}
          productLabel={study.productLabel}
          title={study.title}
          description={study.description}
          metrics={study.metrics}
          image={study.image}
          imageAlt={study.imageAlt}
          images={study.images}
          autoAdvanceMs={study.autoAdvanceMs}
          href={`/our-work/case-studies/${study.slug}`}
          linkLabel="Explore →"
          imagePosition={study.imagePosition}
        />
      ))}

      <PageStandardSections
        pageKey="ourWork"
        contactContext="Our Work — Case Studies"
        includeMethodology={false}
        includeOutcomes={false}
        includeAssurance={false}
      />
    </SitePageMain>
  );
}
