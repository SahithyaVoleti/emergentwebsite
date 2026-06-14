import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  GraduationCap,
  ShoppingCart,
  Gamepad2,
  Landmark,
  Factory,
  Building2,
  BarChart3,
} from "lucide-react";
import blogArticles from "../../../data/blog";
import { HOME_BLOGS_BAND, HOME_DOMAINS } from "../../../data/homePageSections";
import UbuntuLink from "../../ubuntu/UbuntuLink";
import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";

const INDUSTRY_ICONS = {
  healthcare: Heart,
  education: GraduationCap,
  commerce: ShoppingCart,
  media: Gamepad2,
  fintech: Landmark,
  operations: Factory,
  proptech: Building2,
  analytics: BarChart3,
};

const articleBySlug = Object.fromEntries(blogArticles.map((a) => [a.slug, a]));

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
        <p className="mt-4 flex-1 text-sm leading-relaxed text-[#555] sm:text-base">
          {post.excerpt}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#e5e5e5] pt-6">
          <div className="flex items-center gap-3">
            <img
              src="/neuraltrix-logo.svg"
              alt=""
              className="h-10 w-10 rounded-full border border-[#e5e5e5] bg-white object-cover"
            />
            <div>
              <p className="text-sm font-medium text-[#111]">NeuralTrix AI</p>
              <p className="text-xs text-[#666]">Engineering insights</p>
            </div>
          </div>
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

export function UbuntuHomeIndustries() {
  return (
    <section
      id={HOME_DOMAINS.id}
      data-testid="home-industries"
      className="ubuntu-section-block border-b border-[#d9d9d9] bg-white"
      aria-labelledby={`${HOME_DOMAINS.id}-heading`}
    >
      <div className="ubuntu-container">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#666]">
          {HOME_DOMAINS.eyebrow}
        </p>
        <h2 id={`${HOME_DOMAINS.id}-heading`} className="ubuntu-section-title text-[#111]">
          {HOME_DOMAINS.title}
        </h2>
        {HOME_DOMAINS.lead && (
          <p className="ubuntu-lead mt-4 max-w-3xl text-[#333]">{HOME_DOMAINS.lead}</p>
        )}
        <ul className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {HOME_DOMAINS.items.map((item) => {
            const Icon = INDUSTRY_ICONS[item.icon] ?? BarChart3;
            return (
              <li key={item.title}>
                <Link
                  to={item.href}
                  className="ubuntu-industry-icon-card group flex flex-col items-center text-center"
                >
                  <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-2 border-[#8b1538] bg-white transition-colors group-hover:border-[#7a1528] group-hover:bg-[#fafafa] sm:h-20 sm:w-20">
                    <Icon
                      className="h-8 w-8 text-[#8b1538] transition-colors group-hover:text-[#7a1528] sm:h-9 sm:w-9"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </span>
                  <span className="mt-4 text-sm font-medium leading-snug text-[#111] transition-colors group-hover:text-[#8b1538] sm:text-base">
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function UbuntuHomeBlogs({ config }) {
  const band = { ...HOME_BLOGS_BAND, ...config };
  const slugs = band.slugs ?? HOME_BLOGS_BAND.slugs;
  const blogPosts = slugs.map((slug) => articleBySlug[slug]).filter(Boolean);
  const featuredPost = blogPosts[0];
  const carouselPosts = blogPosts;

  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || !band.autoAdvanceMs) return;
    const intervalId = setInterval(() => api.scrollNext(), band.autoAdvanceMs);
    return () => clearInterval(intervalId);
  }, [api, band.autoAdvanceMs]);

  return (
    <section
      id={band.id}
      data-testid="home-blogs-band"
      className="ubuntu-section-block border-b border-[#d9d9d9] bg-white"
      aria-labelledby={`${band.id}-heading`}
    >
      <div className="ubuntu-container">
        <div className="mb-8 flex flex-col gap-4 md:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl text-left">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#666]">
              {band.eyebrow}
            </p>
            <h2 id={`${band.id}-heading`} className="ubuntu-section-title text-[#111]">
              {band.title}
            </h2>
            {band.lead && <p className="ubuntu-lead mt-3 text-[#333]">{band.lead}</p>}
          </div>
          {band.viewAllHref && (
            <UbuntuLink to={band.viewAllHref} muted className="flex-shrink-0 self-start lg:self-auto">
              {band.viewAllLabel}
            </UbuntuLink>
          )}
        </div>

        {featuredPost && (
          <div className="mb-8 md:mb-10">
            <BlogFeaturedCard post={featuredPost} />
          </div>
        )}

        {carouselPosts.length > 0 && (
          <div className="ubuntu-blog-carousel__frame relative">
            <Carousel
              setApi={setApi}
              opts={{ align: "start", loop: true, dragFree: false, containScroll: "trimSnaps" }}
              className="ubuntu-blog-carousel w-full overflow-hidden"
            >
              <CarouselContent className="!ml-0 items-stretch">
                {carouselPosts.map((post) => (
                  <CarouselItem
                    key={post.slug}
                    className="!basis-full !pl-0 flex min-w-0 sm:!basis-1/2 lg:!basis-1/3"
                  >
                    <BlogCompactCard post={post} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="mt-8 flex justify-center">
              <div
                className="ubuntu-solutions-carousel__indicators flex items-center justify-center gap-2"
                role="tablist"
                aria-label="Blog slides"
              >
                {carouselPosts.map((post, index) => (
                  <button
                    key={post.slug}
                    type="button"
                    role="tab"
                    aria-selected={current === index}
                    aria-label={post.title}
                    onClick={() => api?.scrollTo(index)}
                    className={`ubuntu-solutions-carousel__indicator ${
                      current === index ? "ubuntu-solutions-carousel__indicator--active" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
