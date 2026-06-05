import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import UbuntuLink from "./UbuntuLink";
import ProductCardHeading from "./ProductCardHeading";

/**
 * Shared horizontal carousel for services, solutions, or similar catalog items.
 */
export default function ProductHorizontalSlider({
  items = [],
  id = "product-slider",
  eyebrow = "Coverage",
  title,
  lead,
  viewAllHref,
  viewAllLabel = "View all",
  autoAdvanceMs = 5000,
  className = "",
  hrefFor = (item) => `#${item.slug}`,
  testIdPrefix = "product-slide",
}) {
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
    if (!api || !autoAdvanceMs) return;
    const intervalId = setInterval(() => api.scrollNext(), autoAdvanceMs);
    return () => clearInterval(intervalId);
  }, [api, autoAdvanceMs]);

  if (!items.length) return null;

  return (
    <section
      id={id}
      className={`ubuntu-section-block ubuntu-services-slider border-y border-[#d9d9d9] bg-white ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="ubuntu-container">
        <div className="mb-8 max-w-3xl md:mb-10">
          {eyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#666]">{eyebrow}</p>
          )}
          <h2 id={`${id}-heading`} className="ubuntu-section-title">
            {title}
          </h2>
          {lead && <p className="ubuntu-lead mt-3">{lead}</p>}
        </div>

        <div className="ubuntu-services-slider__frame relative">
          <button
            type="button"
            className="ubuntu-services-slider__nav ubuntu-services-slider__nav--prev"
            onClick={() => api?.scrollPrev()}
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} strokeWidth={2} aria-hidden />
          </button>
          <button
            type="button"
            className="ubuntu-services-slider__nav ubuntu-services-slider__nav--next"
            onClick={() => api?.scrollNext()}
            aria-label="Next slide"
          >
            <ChevronRight size={22} strokeWidth={2} aria-hidden />
          </button>

          <Carousel setApi={setApi} opts={{ align: "start", loop: true, dragFree: false }} className="w-full">
            <CarouselContent className="-ml-4 pb-2">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <CarouselItem
                    key={item.slug}
                    className="pl-4 basis-[78%] sm:basis-[52%] md:basis-[38%] lg:basis-[30%] xl:basis-[24%]"
                  >
                    <Link
                      to={hrefFor(item)}
                      data-testid={`${testIdPrefix}-${item.slug}`}
                      className="ubuntu-services-slider__card ubuntu-product-slider-card group flex h-full min-h-[300px] flex-col overflow-hidden border border-[#e5e5e5] bg-white transition-colors hover:border-[#8b1538]/50"
                    >
                      <div className="ubuntu-product-slider-card__media relative min-h-[200px] flex-1 overflow-hidden bg-[#1a1a1a]">
                        <img
                          src={item.heroImage}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                          decoding="async"
                        />
                        {Icon && (
                          <span className="absolute left-3 top-3 z-10 flex h-9 w-9 items-center justify-center bg-[#8b1538] text-white">
                            <Icon size={18} strokeWidth={2} aria-hidden />
                          </span>
                        )}
                      </div>
                      <div className="shrink-0 border-t border-[#e5e5e5] bg-white py-4 sm:py-5 group-hover:bg-[#fafafa]">
                        <ProductCardHeading
                          descriptor={item.cardDescriptor}
                          className="group-hover:[&_.ubuntu-product-card__heading-text]:text-[#8b1538]"
                        >
                          {item.title}
                        </ProductCardHeading>
                      </div>
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2" role="tablist" aria-label="Slide navigation">
              {items.map((item, index) => (
                <button
                  key={item.slug}
                  type="button"
                  role="tab"
                  aria-selected={current === index}
                  aria-label={`Go to ${item.title}`}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    current === index ? "w-8 bg-[#8b1538]" : "w-2.5 bg-[#d9d9d9] hover:bg-[#bbb]"
                  }`}
                />
              ))}
            </div>
            {viewAllHref && (
              <UbuntuLink to={viewAllHref} muted>
                {viewAllLabel}
              </UbuntuLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
