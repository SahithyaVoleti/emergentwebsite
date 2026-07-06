import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogArticles from "../../../data/blog";
import { BRAND_LOGO_SYMBOL } from "../../../data/brandAssets";
import { HOME_BLOGS_BAND, HOME_DOMAINS } from "../../../data/homePageSections";
import ModuleIconGrid from "../../service/ModuleIconGrid";
import UbuntuLink from "../../ubuntu/UbuntuLink";
import SectionEyebrow from "../../ubuntu/SectionEyebrow";
import SectionTitle from "../../ubuntu/SectionTitle";
import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";

const articleBySlug = Object.fromEntries(blogArticles.map((a) => [a.slug, a]));

function BlogFeaturedCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="ubuntu-blog-featured group grid overflow-hidden border border-[#e5e5e5] bg-white transition-colors hover:border-[#b8451a]/40 md:grid-cols-2"
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
      <div className="flex flex-col bg-white p-6 sm:p-8 md:p-10">
        <h3 className="text-xl font-medium leading-snug text-[#2d2d2d] transition-colors group-hover:text-[#b8451a] sm:text-2xl">
          {post.title}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-[#7d8597] sm:text-base">
          {post.excerpt}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#e5e5e5] pt-6">
          <div className="flex items-center gap-3">
            <img
              src={BRAND_LOGO_SYMBOL}
              alt=""
              className="h-10 w-10 rounded-full border border-[#e5e5e5] bg-white object-contain p-1"
            />
            <div>
              <p className="text-sm font-medium text-[#2d2d2d]">NeuralTrix AI</p>
              <p className="text-xs text-[#8b4c6e]">Engineering insights</p>
            </div>
          </div>
          <span className="border border-[#e5e5e5] bg-white px-3 py-1 text-xs font-medium text-[#7d8597]">
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
        <span className="absolute bottom-3 left-3 border border-[#e5e5e5]/80 bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#7d8597]">
          {post.category}
        </span>
      </div>
      <h3 className="ubuntu-blog-compact-card__title mt-4 text-center text-base font-medium leading-snug text-[#2d2d2d] transition-colors group-hover:text-[#b8451a]">
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
        <SectionEyebrow>{HOME_DOMAINS.eyebrow}</SectionEyebrow>
        <SectionTitle id={`${HOME_DOMAINS.id}-heading`} title={HOME_DOMAINS.title} />
        {HOME_DOMAINS.lead && (
          <p className="ubuntu-lead mt-4 max-w-3xl text-[#2d2d2d]">{HOME_DOMAINS.lead}</p>
        )}
        <ModuleIconGrid items={HOME_DOMAINS.items} listClassName="mt-8" />
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
            {band.eyebrow && <SectionEyebrow>{band.eyebrow}</SectionEyebrow>}
            <SectionTitle id={`${band.id}-heading`} title={band.title} />
            {band.lead && <p className="ubuntu-lead mt-3 text-[#2d2d2d]">{band.lead}</p>}
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
