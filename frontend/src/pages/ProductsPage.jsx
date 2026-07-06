import PageHero from "../components/PageHero";
import OurWorkSubNav from "../components/ubuntu/OurWorkSubNav";
import PortfolioFeatureShowcase from "../components/ubuntu/PortfolioFeatureShowcase";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import { getPortfolioProducts } from "../data/portfolioProducts";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

export default function ProductsPage() {
  const products = getPortfolioProducts();

  return (
    <SitePageMain>
      <PageHero
        title="Platform products for |enterprise workflows|"
        description="Production-ready dashboards and mobile modules for admissions, workforce monitoring, proctoring, institution management, recruitment, hospital operations, and IVR outreach."
        primaryCTA={{ text: "Browse products", href: "#featured-product-leadcliques" }}
        secondaryCTA={{ text: "View case studies", href: "/our-work/case-studies" }}
        image={LISTING_PAGE_HERO_IMAGES.solutions}
      />

      <OurWorkSubNav className="our-work-subnav--band" />

      {products.map((product) => (
        <PortfolioFeatureShowcase
          key={product.id}
          id={product.id}
          productLabel={product.productLabel}
          title={product.title}
          description={product.description}
          metrics={product.metrics}
          image={product.image}
          imageAlt={product.imageAlt}
          images={product.images}
          autoAdvanceMs={product.autoAdvanceMs}
          href="/#page-contact"
          linkLabel="Discuss this product →"
          imagePosition={product.imagePosition}
        />
      ))}

      <PageStandardSections
        pageKey="ourWork"
        contactContext="Our Work — Products"
        includeMethodology={false}
        includeOutcomes={false}
        includeAssurance={false}
      />
    </SitePageMain>
  );
}
