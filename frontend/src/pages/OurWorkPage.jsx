import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import OurWorkSubNav from "../components/ubuntu/OurWorkSubNav";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

export default function OurWorkPage() {
  return (
    <SitePageMain>
      <PageHero
        title="Our Work for |enterprise delivery|"
        description="Explore production-ready platform products and client case studies that document measurable outcomes across education, healthcare, workforce operations, and regulated outreach programs."
        primaryCTA={{ text: "View products", href: "/our-work/products" }}
        secondaryCTA={{ text: "View case studies", href: "/our-work/case-studies" }}
        image={LISTING_PAGE_HERO_IMAGES.solutions}
      />

      <OurWorkSubNav className="our-work-subnav--band" />

      <section className="ubuntu-section-block" aria-labelledby="our-work-paths-heading">
        <div className="ubuntu-container">
          <h2 id="our-work-paths-heading" className="ubuntu-section-title">
            Products and validated client outcomes
          </h2>
          <p className="ubuntu-lead mt-3 max-w-3xl">
            This section separates platform products from delivery case studies—so you can review
            capabilities and measured client results independently.
          </p>

          <div className="our-work-hub__grid mt-10">
            <Link to="/our-work/products" className="our-work-hub__card">
              <p className="our-work-hub__eyebrow">Products</p>
              <h3 className="our-work-hub__title">Platform products</h3>
              <p className="our-work-hub__text">
                LeadCliques, StaffCliques, ProcSquare, SchoolTrix, Talentrix, MedClues, and
                TeleBuddy—production dashboards and mobile modules for enterprise workflows.
              </p>
              <span className="our-work-hub__cta">View products →</span>
            </Link>

            <Link to="/our-work/case-studies" className="our-work-hub__card">
              <p className="our-work-hub__eyebrow">Case Studies</p>
              <h3 className="our-work-hub__title">Client delivery outcomes</h3>
              <p className="our-work-hub__text">
                Documented deployments showing how each product resolved operational challenges
                for education, healthcare, BPO, and outreach programs in Andhra Pradesh.
              </p>
              <span className="our-work-hub__cta">View case studies →</span>
            </Link>
          </div>
        </div>
      </section>

      <PageStandardSections
        pageKey="ourWork"
        contactContext="Our Work Page"
        includeMethodology={false}
        includeOutcomes={false}
        includeAssurance={false}
      />
    </SitePageMain>
  );
}
