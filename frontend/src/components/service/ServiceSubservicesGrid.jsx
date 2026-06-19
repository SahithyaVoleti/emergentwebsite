import { useCallback, useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { SECTION_LABEL } from "../../data/sectionLabels";
import { paletteAccentIndex } from "../../lib/brandPalette";

const SLIDE_INTERVAL_MS = 4500;

/**
 * Scope of delivery — left synced copy, right vertical image carousel (compact split).
 */
export default function ServiceSubservicesGrid({
  service,
  id = "scope-of-delivery",
  eyebrow = SECTION_LABEL.scope,
  title,
  lead = "Service modules structured for rapid time-to-value with clear boundaries per track.",
  className = "!border-t-0",
}) {
  const subs = service?.subservices ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState(null);
  const [hoverPaused, setHoverPaused] = useState(false);

  const pausedRef = useRef(false);
  const carouselApiRef = useRef(null);
  const subCountRef = useRef(subs.length);

  const Icon = service.icon;
  const sectionTitle = title ?? `Scope of delivery for ${service.title}`;
  const activeSub = subs[activeIndex];
  const previewItems = (activeSub?.items ?? []).slice(0, 4);

  subCountRef.current = subs.length;
  pausedRef.current = hoverPaused;
  carouselApiRef.current = carouselApi;

  const onCarouselSelect = useCallback(() => {
    const api = carouselApiRef.current;
    if (!api) return;
    setActiveIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!carouselApi) return undefined;
    onCarouselSelect();
    carouselApi.on("select", onCarouselSelect);
    carouselApi.on("reInit", onCarouselSelect);
    return () => {
      carouselApi.off("select", onCarouselSelect);
      carouselApi.off("reInit", onCarouselSelect);
    };
  }, [carouselApi, onCarouselSelect]);

  useEffect(() => {
    if (!carouselApi || subs.length <= 1) return undefined;

    const tick = () => {
      if (pausedRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const api = carouselApiRef.current;
      const count = subCountRef.current;
      if (!api || count <= 1) return;

      const next = (api.selectedScrollSnap() + 1) % count;
      api.scrollTo(next);
    };

    const timer = window.setInterval(tick, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [carouselApi, subs.length]);

  const goToSlide = (index) => {
    carouselApi?.scrollTo(index);
  };

  const carouselNavPrevClass =
    "z-10 h-8 w-8 rotate-90 border-[#d9d9d9] bg-white text-[#33415c] shadow-sm hover:border-[#0353a4] hover:bg-[#eef4fc] disabled:opacity-40 left-1/2 -translate-x-1/2 -top-1 lg:left-auto lg:right-0 lg:top-1/4 lg:-translate-y-1/2 lg:translate-x-0";
  const carouselNavNextClass =
    "z-10 h-8 w-8 rotate-90 border-[#d9d9d9] bg-white text-[#33415c] shadow-sm hover:border-[#0353a4] hover:bg-[#eef4fc] disabled:opacity-40 bottom-0 left-1/2 -translate-x-1/2 lg:bottom-auto lg:left-auto lg:right-0 lg:top-3/4 lg:-translate-y-1/2 lg:translate-x-0";

  if (!subs.length) return null;

  return (
    <section
      id={id}
      className={`ubuntu-section-block ubuntu-scope-carousel border-y border-[#d9d9d9] bg-white ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="ubuntu-container">
        <div className="ubuntu-scope-carousel__header mb-5 max-w-3xl sm:mb-6">
          {eyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#5c677d]">
              {eyebrow}
            </p>
          )}
          <h2 id={`${id}-heading`} className="ubuntu-section-title !mb-2 text-[#002855]">
            {sectionTitle}
          </h2>
          {lead && <p className="ubuntu-lead mt-0 text-[#33415c]">{lead}</p>}
        </div>

        <div
          className="ubuntu-scope-carousel__split grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8"
          onMouseEnter={() => setHoverPaused(true)}
          onMouseLeave={() => setHoverPaused(false)}
        >
          {/* Left — copy synced to active module */}
          <div className="ubuntu-scope-carousel__detail flex flex-col justify-center lg:col-span-5">
            {activeSub && (
              <div key={activeIndex} className="ubuntu-scope-carousel__detail-panel">
                <h3 className="text-xl font-medium leading-snug text-[#002855] sm:text-2xl">
                  {activeSub.title}
                </h3>
                {activeSub.desc && (
                  <p className="mt-3 text-sm leading-relaxed text-[#7d8597] sm:text-base">
                    {activeSub.desc}
                  </p>
                )}
                {previewItems.length > 0 && (
                  <ul className="ubuntu-bullet-list mt-4 text-sm text-[#7d8597]">
                    {previewItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          {/* Right — vertical image carousel */}
          <div className="ubuntu-scope-carousel__stage relative lg:col-span-7">
            <Carousel
              orientation="vertical"
              opts={{ align: "start", loop: true }}
              setApi={setCarouselApi}
              className="relative w-full pr-10 sm:pr-12 lg:pr-14"
            >
              <CarouselContent className="-mt-1 h-[14rem] sm:h-[16rem] md:h-[18rem] lg:h-[20rem]">
                {subs.map((sub, index) => (
                  <CarouselItem key={sub.title} className="basis-[72%] pt-1 sm:basis-[68%] lg:basis-[65%]">
                    <article
                      data-testid={`subservice-grid-card-${index}`}
                      className="h-full p-0.5"
                    >
                      <button
                        type="button"
                        data-palette-accent={paletteAccentIndex(index)}
                        className="ubuntu-scope-carousel__slide group relative h-full w-full overflow-hidden border border-[#e5e5e5] bg-[#eee] text-left transition-colors hover:border-[color-mix(in_srgb,var(--item-accent)_55%,#e5e5e5)]"
                        onClick={() => goToSlide(index)}
                        aria-label={sub.title}
                        aria-current={activeIndex === index ? "true" : undefined}
                      >
                        <img
                          src={service.heroImage}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                          decoding="async"
                        />
                        {Icon && (
                          <span className="ubuntu-palette-icon absolute left-2 top-2 flex h-8 w-8 items-center justify-center sm:left-3 sm:top-3">
                            <Icon size={16} strokeWidth={2} aria-hidden />
                          </span>
                        )}
                        <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/55 to-transparent px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white sm:px-4 sm:py-3">
                          {sub.title}
                        </span>
                      </button>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className={carouselNavPrevClass} />
              <CarouselNext className={carouselNavNextClass} />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
