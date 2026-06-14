import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import UbuntuListingSection from "./UbuntuListingSection";
import { SECTION_LABEL } from "../../data/sectionLabels";

export default function UbuntuBlogGrid({
  articles = [],
  id = "blog-catalog",
  eyebrow = SECTION_LABEL.blog,
  title = "Articles and resources",
  lead = "Practical notes on tools, models, and delivery discipline for technical and program stakeholders.",
  className = "!border-t-0",
}) {
  if (!articles.length) return null;

  return (
    <UbuntuListingSection id={id} eyebrow={eyebrow} title={title} lead={lead} className={className}>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to={`/blog/${article.slug}`}
            data-testid={`blog-link-${article.slug}`}
            className="group flex h-full flex-col overflow-hidden border border-[#d9d9d9] bg-white transition-colors hover:border-[#8b1538]"
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
              <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-[#666]">
                <span className="font-semibold uppercase tracking-wide text-[#8b1538]">
                  {article.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} aria-hidden />
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-base font-medium leading-snug text-[#111] group-hover:text-[#8b1538]">
                {article.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#555]">{article.excerpt}</p>
              <span className="mt-4 text-sm font-medium text-[#8b1538]">Read article →</span>
            </div>
          </Link>
        ))}
      </div>
    </UbuntuListingSection>
  );
}
