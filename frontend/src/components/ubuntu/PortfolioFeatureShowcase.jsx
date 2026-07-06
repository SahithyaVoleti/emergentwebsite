import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import UbuntuSplitLayout from "./UbuntuSplitLayout";
import SectionEyebrow from "./SectionEyebrow";
import SectionTitle from "./SectionTitle";

/**
 * Portfolio case study — catalog-style split band with optional sliding media.
 */
export default function PortfolioFeatureShowcase({
  id = "portfolio-feature",
  sectionEyebrow,
  sectionTitle,
  sectionLead,
  productLabel,
  title,
  description,
  metrics = [],
  image,
  imageAlt = "",
  images,
  autoAdvanceMs = 5500,
  href = "/#page-contact",
  linkLabel = "Explore →",
  imagePosition = "left",
}) {
  const hasHeader = sectionEyebrow || sectionTitle || sectionLead;

  const slides = useMemo(() => {
    if (images?.length) return images;
    if (image) return [{ src: image, alt: imageAlt }];
    return [];
  }, [image, imageAlt, images]);

  const [api, setApi] = useState(null);
  const hasMultipleSlides = slides.length > 1;

  useEffect(() => {
    if (!api || !autoAdvanceMs || !hasMultipleSlides) return;
    const intervalId = setInterval(() => api.scrollNext(), autoAdvanceMs);
    return () => clearInterval(intervalId);
  }, [api, autoAdvanceMs, hasMultipleSlides]);

  const mediaSlot =
    slides.length > 0 ? (
      <div className="portfolio-spotlight__frame portfolio-spotlight__frame--carousel">
        {hasMultipleSlides ? (
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true, dragFree: false, containScroll: "trimSnaps" }}
            className="portfolio-spotlight__carousel w-full overflow-hidden"
            aria-label="Product screenshots"
          >
            <CarouselContent className="portfolio-spotlight__carousel-content !ml-0 h-full">
              {slides.map((slide, index) => (
                <CarouselItem
                  key={`${slide.src}-${index}`}
                  className="portfolio-spotlight__carousel-item !basis-full !pl-0 min-w-0 w-full max-w-full shrink-0 grow-0"
                >
                  <div className="portfolio-spotlight__slide">
                    <img
                      src={slide.src}
                      alt={slide.alt ?? ""}
                      width={3840}
                      height={2560}
                      loading="eager"
                      decoding={index === 0 ? "sync" : "async"}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      className="portfolio-spotlight__image"
                    />
                    {slide.label ? (
                      <span className="portfolio-spotlight__slide-label">{slide.label}</span>
                    ) : null}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <img
            src={slides[0].src}
            alt={slides[0].alt ?? ""}
            width={3840}
            height={2560}
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            className="portfolio-spotlight__image"
          />
        )}
      </div>
    ) : null;

  return (
    <UbuntuSplitLayout
      id={id}
      testId="portfolio-feature-showcase"
      className="portfolio-spotlight ubuntu-solutions-carousel border-b border-[rgba(255,255,255,0.08)]"
      imagePosition={imagePosition}
      mediaClassName="portfolio-spotlight__media-wrap"
      mediaSlot={mediaSlot}
    >
      {hasHeader && sectionEyebrow && <SectionEyebrow>{sectionEyebrow}</SectionEyebrow>}
      {hasHeader && sectionTitle && (
        <SectionTitle id={id ? `${id}-heading` : undefined} title={sectionTitle} />
      )}
      {hasHeader && sectionLead && <p className="ubuntu-lead mt-3">{sectionLead}</p>}

      <div className="portfolio-spotlight__detail">
        {productLabel && (
          <p className="ubuntu-solutions-carousel__descriptor">{productLabel}</p>
        )}
        {title && <h3 className="ubuntu-solutions-carousel__title">{title}</h3>}
        {description && <p className="portfolio-spotlight__text">{description}</p>}

        {metrics.length > 0 && (
          <ul className="portfolio-spotlight__metrics" aria-label="Key outcomes">
            {metrics.map((metric) => (
              <li key={metric.label} className="portfolio-spotlight__metric">
                <span className="portfolio-spotlight__metric-value">{metric.value}</span>
                <span className="portfolio-spotlight__metric-label">{metric.label}</span>
              </li>
            ))}
          </ul>
        )}

        {href && (
          <Link to={href} className="ubuntu-solutions-carousel__cta">
            {linkLabel}
          </Link>
        )}
      </div>
    </UbuntuSplitLayout>
  );
}
