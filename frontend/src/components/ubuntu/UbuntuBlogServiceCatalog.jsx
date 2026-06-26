import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { SECTION_LABEL } from "../../data/sectionLabels";
import { getBlogCatalogByService, serviceArticlesSectionId } from "../../lib/blogByService";

function ServiceArticleCard({ article }) {
  return (
    <Link
      to={`/blog/${article.slug}`}
      data-testid={`blog-link-${article.slug}`}
      className="group flex h-full flex-col overflow-hidden border border-[#d9d9d9] bg-white transition-colors hover:border-[#5c5c5c]"
    >
      <div className="aspect-[16/10] overflow-hidden bg-[#eee]">
        <img
          src={article.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-[#6b6b6b]">
          <span className="font-semibold uppercase tracking-wide text-[#5c5c5c]">
            {article.category}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={12} aria-hidden />
            {article.readTime}
          </span>
        </div>
        <h3 className="text-base font-medium leading-snug text-[#2d2d2d] group-hover:text-[#4a4a4a]">
          {article.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[#7d8597]">{article.excerpt}</p>
        <span className="mt-4 text-sm font-medium text-[#5c5c5c]">Read article →</span>
      </div>
    </Link>
  );
}

/**
 * News & Media catalog — articles grouped by service offering.
 */
export default function UbuntuBlogServiceCatalog({
  id = "blog-service-catalog",
  title = "Articles by service line",
  lead = "Technical and operational notes grouped by the service offerings they support.",
  className = "!border-t-0",
}) {
  const sections = getBlogCatalogByService();

  if (!sections.length) return null;

  return (
    <div id={id} className={className}>
      <section
        className="ubuntu-section-block border-b border-[#d9d9d9] bg-white"
        aria-labelledby={`${id}-heading`}
      >
        <div className="ubuntu-container">
          <div className="mb-8 max-w-3xl md:mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#8b4c6e]">
              {SECTION_LABEL.blog}
            </p>
            <h2 id={`${id}-heading`} className="ubuntu-section-title text-[#2d2d2d]">
              {title}
            </h2>
            {lead && <p className="ubuntu-lead mt-3 text-[#4a4a4a]">{lead}</p>}
          </div>
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.slug}
          id={serviceArticlesSectionId(section.slug)}
          className={`ubuntu-section-block border-b border-[#d9d9d9] bg-white scroll-mt-24 ${
            index === 0 ? "!border-t-0" : ""
          }`}
          aria-labelledby={`${id}-${section.slug}-heading`}
        >
          <div className="ubuntu-container">
            <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                {section.pillar && (
                  <p className="mb-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-[#8b4c6e]">
                    {section.pillar}
                  </p>
                )}
                <h3
                  id={`${id}-${section.slug}-heading`}
                  className="text-xl font-medium text-[#2d2d2d] sm:text-2xl"
                >
                  {section.title}
                </h3>
              </div>
              <Link
                to={section.href}
                className="text-sm font-medium text-[#d1511f] hover:underline"
              >
                View service offering →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {section.articles.map((article) => (
                <ServiceArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
