import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useReducedMotion } from "framer-motion";
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
import { COMPANY_LOGO_PATH } from "../../../lib/company";
import UbuntuLink from "../../ubuntu/UbuntuLink";
import SectionPatternBackground from "../../SectionPatternBackground";
import { usePatternSectionHover } from "../../../hooks/usePatternSectionHover";
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
              src={COMPANY_LOGO_PATH}
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
  const items = HOME_DOMAINS.items;
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: "-10%" });
  const prefersReducedMotion = useReducedMotion();
  const { sectionRef, onPointerMove, onPointerLeave } = usePatternSectionHover();

  const headerMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section
      ref={sectionRef}
      id={HOME_DOMAINS.id}
      data-testid="home-industries"
      className="ubuntu-section-block ubuntu-pattern-section ubuntu-pattern-section--cta ubuntu-section--dark ubuntu-industries-band border-b border-[#d9d9d9]"
      aria-labelledby={`${HOME_DOMAINS.id}-heading`}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <SectionPatternBackground variant="cta" />
      <div ref={contentRef} className="ubuntu-container relative z-10">
        <motion.div
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          {...headerMotion}
        >
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#e8b4b8]">
              {HOME_DOMAINS.eyebrow}
            </p>
            <h2 id={`${HOME_DOMAINS.id}-heading`} className="ubuntu-section-title text-white">
              {HOME_DOMAINS.title}
            </h2>
            {HOME_DOMAINS.lead && (
              <p className="ubuntu-lead mt-3 text-white/90">{HOME_DOMAINS.lead}</p>
            )}
          </div>
          {HOME_DOMAINS.viewAllHref && (
            <UbuntuLink to={HOME_DOMAINS.viewAllHref} muted className="shrink-0 !text-[#e8b4b8]">
              {HOME_DOMAINS.viewAllLabel}
            </UbuntuLink>
          )}
        </motion.div>

        <ul className="ubuntu-industries-band__grid mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:mt-10 lg:grid-cols-7">
          {items.map((item, index) => {
            const Icon = item.icon ?? INDUSTRY_ICONS[item.iconKey] ?? BarChart3;
            const itemMotion = prefersReducedMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 32, scale: 0.88 },
                  animate: isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 32, scale: 0.88 },
                  transition: {
                    duration: 0.55,
                    delay: 0.12 + index * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  },
                };

            return (
              <motion.li
                key={item.slug ?? item.title}
                className="min-w-0"
                {...itemMotion}
              >
                <Link
                  to={item.href}
                  data-testid={`home-industry-link-${item.slug}`}
                  className="ubuntu-industries-band__link group flex h-full min-h-[7.5rem] flex-col items-center justify-center gap-3 px-3 py-5 text-center sm:min-h-[8.5rem] sm:px-4"
                >
                  <span className="ubuntu-industries-band__icon flex h-11 w-11 items-center justify-center border border-white/25 bg-[#8b1538]/80 text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="text-sm font-medium leading-snug text-white">{item.title}</span>
                </Link>
              </motion.li>
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
