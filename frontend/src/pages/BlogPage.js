import PageHero from "../components/PageHero";
import UbuntuBlogCatalogBand from "../components/ubuntu/UbuntuBlogCatalogBand";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import blogArticles from "../data/blog";

export default function BlogPage() {
  return (
    <SitePageMain>
      <PageHero
        label="Blog and resources"
        title="Technical and Operational Notes from Enterprise AI Delivery"
        description="Practical articles on tools, models, and delivery discipline, useful whether you engage NeuralTrix next month or are still building an internal business case."
        primaryCTA={{ text: "Request information", href: "#page-contact" }}
        illustrationKey="blog"
      />

      <UbuntuBlogCatalogBand articles={blogArticles} />

      <PageStandardSections pageKey="blog" contactContext="Blog Page" />
    </SitePageMain>
  );
}
