import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import UbuntuLink from "./UbuntuLink";
import UbuntuSplitLayout from "./UbuntuSplitLayout";
import MockupFrame from "./MockupFrame";
import SectionEyebrow from "./SectionEyebrow";
import SectionTitle from "./SectionTitle";
import { SECTION_LABEL } from "../../data/sectionLabels";

/**
 * Agentic solutions carousel — copy on the left, product slides inside a browser mockup on the right.
 */
export default function SolutionsAcceleratorCarousel({
  items = [],
  id = "solutions-slider",
  eyebrow = SECTION_LABEL.accelerators,
  title,
  lead,
  viewAllHref = "/solutions",
  viewAllLabel = "View all agents",
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

  const activeItem = items[current] ?? items[0];
  const activeHref = hrefFor(activeItem);
  const activeDescriptor = activeItem.brandName
    ? `${activeItem.brandName}${activeItem.cardDescriptor ? ` · ${activeItem.cardDescriptor}` : ""}`
    : activeItem.cardDescriptor || activeItem.domain;

  const indicators = (
    <div
      className="ubuntu-solutions-carousel__indicators flex items-center justify-center gap-2"
      role="tablist"
      aria-label="Agent slides"
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
  );

  const carousel = (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", loop: true, dragFree: false, containScroll: "trimSnaps" }}
      className="ubuntu-solutions-carousel__carousel w-full h-full overflow-hidden"
      aria-roledescription="carousel"
    >
      <CarouselContent className="!ml-0 h-full">
        {items.map((item, index) => (
          <CarouselItem
            key={item.slug}
            className="!basis-full !pl-0 min-w-0 w-full max-w-full shrink-0 grow-0 h-full"
          >
            <Link
              to={hrefFor(item)}
              data-testid={`${testIdPrefix}-${item.slug}`}
              className="ubuntu-solutions-carousel__slide group block w-full overflow-hidden bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5c5c5c]"
              aria-label={`${item.title}: ${item.brandName || item.cardDescriptor || item.domain || ""}`}
            >
              <div className="ubuntu-solutions-carousel__media">
                <img
                  src={item.heroImage}
                  alt=""
                  className="ubuntu-solutions-carousel__image"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );

  return (
    <UbuntuSplitLayout
      id={id}
      testId="solutions-accelerator-carousel"
      className={`ubuntu-solutions-carousel border-y border-[#d9d9d9] bg-white ${className}`}
      imagePosition="right"
      mockupVariant="browser"
      mediaClassName="ubuntu-solutions-carousel__mockup-wrap"
      mediaSlot={
        <MockupFrame variant="browser" screenClassName="ubuntu-solutions-carousel__mockup-screen">
          <div className="ubuntu-solutions-carousel__mockup-inner">
            {carousel}
            {indicators}
          </div>
        </MockupFrame>
      }
    >
      {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
      <SectionTitle id={`${id}-heading`} title={title} />
      {lead && <p className="ubuntu-lead mt-3">{lead}</p>}

      <div className="ubuntu-solutions-carousel__detail" key={activeItem.slug}>
        {activeDescriptor && (
          <p className="ubuntu-solutions-carousel__descriptor">{activeDescriptor}</p>
        )}
        <h3 className="ubuntu-solutions-carousel__title">{activeItem.title}</h3>
        <p className="ubuntu-solutions-carousel__text">
          {activeItem.shortDesc || activeItem.summary || activeItem.heroDesc}
        </p>
        <Link to={activeHref} className="ubuntu-solutions-carousel__cta">
          Explore →
        </Link>
      </div>

      {viewAllHref && (
        <div className="mt-6">
          <UbuntuLink to={viewAllHref} muted>
            {viewAllLabel}
          </UbuntuLink>
        </div>
      )}
    </UbuntuSplitLayout>
  );
}
