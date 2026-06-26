import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import UbuntuLink from "./UbuntuLink";
import SectionEyebrow from "./SectionEyebrow";
import SectionTitle from "./SectionTitle";
import { SECTION_LABEL } from "../../data/sectionLabels";

/**
 * Solution accelerators carousel — one slide per accelerator (CoreUI CCarousel pattern:
 * full-width image, caption, indicators; auto-advance only).
 */
export default function SolutionsAcceleratorCarousel({
  items = [],
  id = "solutions-slider",
  eyebrow = SECTION_LABEL.accelerators,
  title,
  lead,
  viewAllHref = "/solutions",
  viewAllLabel = "View all accelerators",
  autoAdvanceMs = 6000,
  className = "",
  hrefFor = (item) => item.href ?? `/solutions/${item.slug}`,
  testIdPrefix = "solution-slide",
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
      data-testid="solutions-accelerator-carousel"
      className={`ubuntu-section-block ubuntu-services-slider ubuntu-solutions-carousel border-y border-[#d9d9d9] bg-white ${className}`}
      aria-labelledby={`${id}-heading`}
      aria-roledescription="carousel"
    >
      <div className="ubuntu-container">
        <div className="mb-8 max-w-3xl md:mb-10">
          {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
          <SectionTitle id={`${id}-heading`} title={title} />
          {lead && <p className="ubuntu-lead mt-3">{lead}</p>}
        </div>

        <div className="ubuntu-solutions-carousel__frame ubuntu-services-slider__frame relative">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true, dragFree: false, containScroll: "trimSnaps" }}
            className="ubuntu-solutions-carousel__carousel w-full overflow-hidden"
          >
            <CarouselContent className="!ml-0">
              {items.map((item, index) => (
                <CarouselItem
                  key={item.slug}
                  className="!basis-full !pl-0 min-w-0 w-full max-w-full shrink-0 grow-0"
                >
                  <Link
                    to={hrefFor(item)}
                    data-testid={`${testIdPrefix}-${item.slug}`}
                    className="ubuntu-solutions-carousel__slide group block w-full overflow-hidden border border-[#e5e5e5] bg-[#111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5c5c5c]"
                    aria-label={`${item.title}: ${item.brandName || item.cardDescriptor || item.domain || ""}`}
                  >
                    <div className="ubuntu-solutions-carousel__media">
                      <img
                        src={item.heroImage}
                        alt=""
                        className="ubuntu-solutions-carousel__image object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    </div>
                    <div
                      className="ubuntu-solutions-carousel__caption"
                      aria-roledescription="slide caption"
                    >
                      <p className="ubuntu-solutions-carousel__descriptor">
                        {item.brandName
                          ? `${item.brandName}${item.cardDescriptor ? ` · ${item.cardDescriptor}` : ""}`
                          : item.cardDescriptor || item.domain}
                      </p>
                      <h3 className="ubuntu-solutions-carousel__title">{item.title}</h3>
                      <p className="ubuntu-solutions-carousel__text">
                        {item.shortDesc || item.summary || item.heroDesc}
                      </p>
                      <span className="ubuntu-solutions-carousel__cta">Explore →</span>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="ubuntu-solutions-carousel__footer mt-6">
            <div
              className="ubuntu-solutions-carousel__indicators flex items-center justify-center gap-2"
              role="tablist"
              aria-label="Accelerator slides"
            >
              {items.map((item, index) => (
                <button
                  key={item.slug}
                  type="button"
                  role="tab"
                  aria-selected={current === index}
                  aria-label={`${item.title} — ${item.brandName || item.cardDescriptor || item.domain || ""}`}
                  onClick={() => api?.scrollTo(index)}
                  className={`ubuntu-solutions-carousel__indicator ${
                    current === index ? "ubuntu-solutions-carousel__indicator--active" : ""
                  }`}
                />
              ))}
            </div>
            {viewAllHref && (
              <div className="mt-4 flex justify-end">
                <UbuntuLink to={viewAllHref} muted>
                  {viewAllLabel}
                </UbuntuLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
