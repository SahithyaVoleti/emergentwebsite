import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import blogArticles from "../data/blog";
import { SECTION_LABEL } from "../data/sectionLabels";
import UbuntuSectionShell from "./ubuntu/UbuntuSectionShell";
import UbuntuLink from "./ubuntu/UbuntuLink";

export default function RelatedBlog({ title }) {
  return (
    <UbuntuSectionShell data-testid="related-blog-section">
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#5c677d]">
            {SECTION_LABEL.articles}
          </p>
          <h2 className="ubuntu-section-title">{title || "Related articles"}</h2>
        </div>
        <UbuntuLink to="/blog" muted className="flex-shrink-0">
          View all articles
        </UbuntuLink>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {blogArticles.slice(0, 3).map((article) => (
          <Link
            key={article.slug}
            to={`/blog/${article.slug}`}
            className="group flex h-full flex-col overflow-hidden border border-[#d9d9d9] bg-white transition-colors hover:border-[#0466c8]"
          >
            <div className="aspect-[16/10] overflow-hidden bg-[#eee]">
              <img
                src={article.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="mb-2 flex items-center gap-2 text-xs text-[#5c677d]">
                <span className="font-semibold uppercase tracking-wide text-[#0466c8]">
                  {article.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} aria-hidden />
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-base font-medium leading-snug text-[#002855] group-hover:text-[#0353a4]">
                {article.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </UbuntuSectionShell>
  );
}
