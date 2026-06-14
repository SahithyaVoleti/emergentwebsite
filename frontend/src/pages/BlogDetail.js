import { useParams, Link } from "react-router-dom";
import { BookOpen, Share2 } from "lucide-react";
import PageHero from "../components/PageHero";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import UbuntuListingSection from "../components/ubuntu/UbuntuListingSection";
import blogArticles from "../data/blog";

export default function BlogDetail() {
  const { slug } = useParams();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <SitePageMain>
        <div className="ubuntu-container flex min-h-[50vh] flex-col items-center justify-center py-16">
          <h1 className="ubuntu-section-title">Article not found</h1>
          <Link to="/blog" className="mt-4 text-[#8b1538] hover:underline">
            Back to blog
          </Link>
        </div>
      </SitePageMain>
    );
  }

  const headings = article.content.filter((b) => b.type === "heading");
  const meta = `${article.date} · ${article.readTime}`;
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(article.title);

  return (
    <SitePageMain>
      <PageHero
        label={article.category}
        title={article.title}
        description={meta}
        image={article.image}
        primaryCTA={{ text: "Contact us", href: "#page-contact" }}
        secondaryCTA={{ text: "Back to blog", href: "/blog" }}
      />

      <section className="ubuntu-section-block border-b border-[#d9d9d9] bg-white">
        <div className="ubuntu-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <h4 className="mb-4 flex items-center gap-2 text-sm font-medium text-[#111]">
                  <BookOpen size={14} aria-hidden /> Table of contents
                </h4>
                <nav className="space-y-2 border-l border-[#d9d9d9] pl-3">
                  {headings.map((h, i) => (
                    <a
                      key={i}
                      href={`#heading-${i}`}
                      className="block py-1 text-sm text-[#555] transition-colors hover:text-[#8b1538]"
                    >
                      {h.text}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 border-t border-[#d9d9d9] pt-6">
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-medium text-[#111]">
                    <Share2 size={14} aria-hidden /> Share
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-[#d9d9d9] bg-[#fafafa] px-3 py-1.5 text-xs text-[#555] transition-colors hover:border-[#8b1538]"
                    >
                      Twitter
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-[#d9d9d9] bg-[#fafafa] px-3 py-1.5 text-xs text-[#555] transition-colors hover:border-[#8b1538]"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
                      className="border border-[#d9d9d9] bg-[#fafafa] px-3 py-1.5 text-xs text-[#555] transition-colors hover:border-[#8b1538]"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-3">
              <article className="ubuntu-prose max-w-none">
                {article.content.map((block, i) => {
                  const headingIndex = headings.indexOf(block);
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={i}
                        id={`heading-${headingIndex}`}
                        className="ubuntu-section-title mt-10 scroll-mt-24 text-2xl first:mt-0"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  return (
                    <p key={i} className="ubuntu-body mb-6">
                      {block.text}
                    </p>
                  );
                })}
              </article>

              <div className="mt-12 border-t border-[#d9d9d9] pt-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#111] text-sm font-medium text-white">
                    NT
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#111]">NeuralTrix AI Engineering Team</p>
                    <p className="ubuntu-body mt-2">
                      Editorial notes from delivery teams translating enterprise AI field experience
                      into practical implementation guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageStandardSections
        pageKey="detail"
        contactContext="Blog Article"
        includeMethodology={false}
        includeOutcomes={false}
        ctaOverrides={{
          title: "Get started with related questions",
          description:
            "Share your scenario for orientation on implementation options, tradeoffs, and sequencing decisions appropriate to your environment.",
          buttonText: "Contact us",
        }}
        beforeCta={
          <UbuntuListingSection
            title="Related articles"
            lead="Additional articles on tools, delivery, and governance topics."
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {blogArticles
                .filter((a) => a.slug !== slug)
                .slice(0, 6)
                .map((a) => (
                  <Link
                    key={a.slug}
                    to={`/blog/${a.slug}`}
                    className="ubuntu-blog-compact-card group flex min-h-[18rem] flex-col"
                  >
                    <div className="relative aspect-[4/3] shrink-0 overflow-hidden border border-[#e5e5e5] bg-[#eee]">
                      <img
                        src={a.image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <span className="absolute bottom-3 left-3 border border-[#e5e5e5]/80 bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#555]">
                        {a.category}
                      </span>
                    </div>
                    <h3 className="ubuntu-blog-compact-card__title mt-4 text-center text-base font-medium leading-snug text-[#111] transition-colors group-hover:text-[#8b1538]">
                      {a.title}
                    </h3>
                  </Link>
                ))}
            </div>
          </UbuntuListingSection>
        }
      />
    </SitePageMain>
  );
}
