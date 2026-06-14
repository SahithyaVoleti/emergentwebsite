import { Link } from "react-router-dom";
import { SECTION_LABEL } from "../../data/sectionLabels";
function BlogFeaturedCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="ubuntu-blog-featured group grid overflow-hidden border border-[#e5e5e5] bg-white transition-colors hover:border-[#8b1538]/50 md:grid-cols-2"
    >
      <div className="relative min-h-[14rem] overflow-hidden bg-[#eee] md:min-h-[20rem]">
        <img
          src={post.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="eager"
          decoding="async"
        />
      </div>
      <div className="flex flex-col bg-[#fafafa] p-6 sm:p-8 md:p-10">
        <h3 className="text-xl font-medium leading-snug text-[#111] transition-colors group-hover:text-[#8b1538] sm:text-2xl">
          {post.title}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-[#555] sm:text-base">{post.excerpt}</p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#e5e5e5] pt-6">
          <p className="text-xs text-[#666]">{post.readTime}</p>
          <span className="border border-[#e5e5e5] bg-white px-3 py-1 text-xs font-medium text-[#555]">
            {post.category}
          </span>
        </div>
      </div>
    </Link>
  );
}

function BlogCompactCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      data-testid={`blog-link-${post.slug}`}
      className="ubuntu-blog-compact-card group flex h-full min-h-[18rem] flex-col"
    >
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden border border-[#e5e5e5] bg-[#eee]">
        <img
          src={post.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute bottom-3 left-3 border border-[#e5e5e5]/80 bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#555]">
          {post.category}
        </span>
      </div>
      <h3 className="ubuntu-blog-compact-card__title mt-4 text-center text-base font-medium leading-snug text-[#111] transition-colors group-hover:text-[#8b1538]">
        {post.title}
      </h3>
    </Link>
  );
}

/**
 * Blog listing — homepage blogs band layout (featured + compact grid).
 */
export default function UbuntuBlogCatalogBand({
  articles = [],
  id = "blog-catalog",
  eyebrow = SECTION_LABEL.blog,
  title = "Articles and resources",
  lead = "Practical notes on tools, models, and delivery discipline for technical and program stakeholders.",
  className = "!border-t-0",
}) {
  if (!articles.length) return null;

  const [featured, ...rest] = articles;

  return (
    <section
      id={id}
      className={`ubuntu-section-block border-b border-[#d9d9d9] bg-white ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="ubuntu-container">
        <div className="mb-8 flex flex-col gap-4 md:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl text-left">
            {eyebrow && (
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#666]">
                {eyebrow}
              </p>
            )}
            <h2 id={`${id}-heading`} className="ubuntu-section-title text-[#111]">
              {title}
            </h2>
            {lead && <p className="ubuntu-lead mt-3 text-[#333]">{lead}</p>}
          </div>
        </div>

        {featured && (
          <div className="mb-8 md:mb-10">
            <BlogFeaturedCard post={featured} />
          </div>
        )}

        {rest.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {rest.map((post) => (
              <BlogCompactCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
