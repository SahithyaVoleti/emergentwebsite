import { useParams, Link } from "react-router-dom";
import { BookOpen, Share2 } from "lucide-react";
import PageHero from "../components/PageHero";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import UbuntuListingSection from "../components/ubuntu/UbuntuListingSection";
import blogArticles from "../data/blog";
import { getServiceLabelsForArticle } from "../lib/blogByService";

export default function BlogDetail() {
  const { slug } = useParams();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <SitePageMain>
        <div className="ubuntu-container flex min-h-[50vh] flex-col items-center justify-center py-16">
          <h1 className="ubuntu-section-title">Article not found</h1>
          <Link to="/blog" className="mt-4 text-[#d1511f] hover:underline">
            Back to blog
          </Link>
        </div>
      </SitePageMain>
    );
  }

  const headings = article.content.filter((b) => b.type === "heading");
  const meta = `${article.date} · ${article.readTime}`;
  const serviceLinks = getServiceLabelsForArticle(article);
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(article.title);

  return (
    <SitePageMain>
      <PageHero
        significance="detail"
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
                <h4 className="mb-4 flex items-center gap-2 text-sm font-medium text-[#2d2d2d]">
                  <BookOpen size={14} aria-hidden /> Table of contents
                </h4>
                <nav className="space-y-2 border-l border-[#d9d9d9] pl-3">
                  {headings.map((h, i) => (
                    <a
                      key={i}
                      href={`#heading-${i}`}
                      className="block py-1 text-sm text-[#7d8597] transition-colors hover:text-[#b8451a]"
                    >
                      {h.text}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 border-t border-[#d9d9d9] pt-6">
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-medium text-[#2d2d2d]">
                    <Share2 size={14} aria-hidden /> Share
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-[#d9d9d9] bg-white px-3 py-1.5 text-xs text-[#7d8597] transition-colors hover:border-[#d1511f]"
                    >
                      Twitter
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-[#d9d9d9] bg-white px-3 py-1.5 text-xs text-[#7d8597] transition-colors hover:border-[#d1511f]"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
                      className="border border-[#d9d9d9] bg-white px-3 py-1.5 text-xs text-[#7d8597] transition-colors hover:border-[#d1511f]"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-3">
              <p className="text-sm font-medium uppercase tracking-wide text-[#7d8597]">{article.category}</p>
              <h1 className="ubuntu-section-title mt-2">{article.title}</h1>
              <p className="ubuntu-lead mt-3 text-[#7d8597]">{meta}</p>
              {serviceLinks?.length > 0 ? (
                <p className="ubuntu-body mt-4 text-sm text-[#7d8597]">
                  Related services:{" "}
                  {serviceLinks.map((link, index) => (
                    <span key={link.href}>
                      {index > 0 ? ", " : null}
                      <Link to={link.href} className="text-[#d1511f] hover:underline">
                        {link.label}
                      </Link>
                    </span>
                  ))}
                </p>
              ) : null}

              <article className="ubuntu-prose mt-10 max-w-none">
                {article.content.map((block, i) => {
                  const headingIndex = headings.indexOf(block);
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={i}
                        id={`heading-${headingIndex}`}
                        className="mt-10 scroll-mt-24 text-xl font-medium text-[#2d2d2d] first:mt-0"
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
                    <p className="text-sm font-medium text-[#2d2d2d]">NeuralTrix AI Engineering Team</p>
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
          title: "Next Step for related inquiries",
          description:
            "Share your scenario for orientation on implementation options, tradeoffs, and sequencing decisions appropriate to your environment.",
          buttonText: "Contact us",
        }}
        beforeCta={
          serviceLinks.length > 0 ? (
            <UbuntuListingSection
              title="More in News & Media"
              lead="Browse additional articles grouped by the service lines this article supports."
            >
              <div className="flex flex-wrap gap-3">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.slug}
                    to={service.href}
                    className="inline-flex items-center border border-[#d9d9d9] bg-white px-4 py-2.5 text-sm font-medium text-[#2d2d2d] transition-colors hover:border-[#d1511f] hover:text-[#d1511f]"
                  >
                    {service.label}
                  </Link>
                ))}
                <Link
                  to="/blog"
                  className="inline-flex items-center border border-[#d9d9d9] bg-white px-4 py-2.5 text-sm font-medium text-[#d1511f] transition-colors hover:border-[#d1511f]"
                >
                  View all articles
                </Link>
              </div>
            </UbuntuListingSection>
          ) : null
        }
      />
    </SitePageMain>
  );
}
