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
        ))}
      </div>
    </UbuntuListingSection>
  );
}
