import PageHero from "../components/PageHero";
import UbuntuBlogCatalogBand from "../components/ubuntu/UbuntuBlogCatalogBand";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import blogArticles from "../data/blog";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

const ENGINEERING_CATEGORIES = ["Delivery", "Engineering"];

function sortArticles(articles) {
  return [...articles].sort((a, b) => {
    const aFeatured = ENGINEERING_CATEGORIES.includes(a.category) ? 0 : 1;
    const bFeatured = ENGINEERING_CATEGORIES.includes(b.category) ? 0 : 1;
    if (aFeatured !== bFeatured) return aFeatured - bFeatured;
    return 0;
  });
}

export default function BlogPage() {
  const sorted = sortArticles(blogArticles);

  return (
    <SitePageMain>
      <PageHero
        label="Blog and resources"
        title="Engineering and delivery notes from NeuralTrix"
        description="Pilot playbooks, RAG eval checklists, and pricing frameworks—plus practical notes on tools when they affect delivery decisions."
        primaryCTA={{ text: "Start a pilot", href: "#page-contact", contactIntent: "consultation" }}
        secondaryCTA={{ text: "How we work", href: "/testimonials" }}
        image={LISTING_PAGE_HERO_IMAGES?.blog}
        illustrationKey="blog"
      />

      <UbuntuBlogCatalogBand
        articles={sorted}
        eyebrow="Articles"
        title="Engineering · Delivery · Tools"
        lead="Delivery and engineering posts appear first. Tool comparisons are included when they inform governance or workflow decisions."
      />

      <PageStandardSections
        pageKey="blog"
        contactContext="Blog Page"
        includeAssurance={false}
      />
    </SitePageMain>
  );
}
