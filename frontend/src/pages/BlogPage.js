import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageHero from "../components/PageHero";
import UbuntuBlogServiceCatalog from "../components/ubuntu/UbuntuBlogServiceCatalog";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";

export default function BlogPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <SitePageMain>
      <PageHero
        label="News & Media"
        title="Technical and Operational Notes from Enterprise AI Delivery"
        description="Practical articles on tools, models, and delivery discipline—organized by service line for program and engineering stakeholders."
        primaryCTA={{ text: "Browse by service line", href: "#blog-service-catalog" }}
        illustrationKey="blog"
      />

      <UbuntuBlogServiceCatalog
        title="Articles by service line"
        lead="Technical and operational notes grouped by service offering, with deep links to each service-line section."
      />

      <PageStandardSections
        pageKey="blog"
        contactContext="Blog Page"
        includeMethodology={false}
        includeOutcomes={false}
        includeAssurance={false}
      />
    </SitePageMain>
  );
}
