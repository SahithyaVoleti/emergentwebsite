import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { paletteAccentIndex } from "../../lib/brandPalette";

function resolveCardTo(href) {
  if (!href || !href.includes("#")) return href;
  const hashIndex = href.indexOf("#");
  const pathname = href.slice(0, hashIndex) || "/";
  const hash = href.slice(hashIndex);
  return { pathname, hash };
}

/**
 * Main service (pillar) cards in an auto-advancing, looping carousel.
 * Cards are taller than the grid variant and carry a one-line tagline.
 * Auto-advance pauses on hover/focus and honours reduced-motion.
 */
export default function ServicePillarCarousel({ items = [], autoAdvanceMs = 4500 }) {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [snapCount, setSnapCount] = useState(items.length);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (!api) return undefined;
    const sync = () => {
      setCurrent(api.selectedScrollSnap());
      setSnapCount(api.scrollSnapList().length);
    };
    sync();
    api.on("select", sync);
    api.on("reInit", sync);
    return () => {
      api.off("select", sync);
      api.off("reInit", sync);
    };
  }, [api]);

  useEffect(() => {
    if (!api || !autoAdvanceMs) return undefined;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const id = setInterval(() => {
      if (!pausedRef.current) api.scrollNext();
    }, autoAdvanceMs);
    return () => clearInterval(id);
  }, [api, autoAdvanceMs]);

  if (!items.length) return null;

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <div
      className="ubuntu-pillar-carousel"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
    >
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true, containScroll: "trimSnaps" }}
        className="ubuntu-pillar-carousel__viewport"
        aria-label="Core service disciplines"
      >
        <CarouselContent className="ubuntu-pillar-carousel__track !ml-0">
          {items.map((item, index) => (
            <CarouselItem
              key={item.key ?? item.id}
              className="ubuntu-pillar-carousel__cell !pl-0 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <Link
                to={resolveCardTo(item.href)}
                id={item.id}
                data-testid={item.testId ?? `main-service-card-${item.id}`}
                data-palette-accent={paletteAccentIndex(index)}
                className="ubuntu-pillar-carousel__card group"
                aria-label={item.label ?? item.title}
              >
                {item.cardImage ? (
                  <div className="ubuntu-pillar-carousel__media">
                    <img src={item.cardImage} alt="" loading="lazy" decoding="async" />
                  </div>
                ) : null}
                <div className="ubuntu-pillar-carousel__body">
                  <h3 className="ubuntu-pillar-carousel__title">{item.label ?? item.title}</h3>
                  {item.tagline ? (
                    <p className="ubuntu-pillar-carousel__desc">{item.tagline}</p>
                  ) : null}
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {snapCount > 1 ? (
        <div className="ubuntu-pillar-carousel__dots" role="tablist" aria-label="Service slides">
          {Array.from({ length: snapCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={current === index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className={`ubuntu-pillar-carousel__dot ${current === index ? "is-active" : ""}`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
