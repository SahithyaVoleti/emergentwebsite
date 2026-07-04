import { Link } from "react-router-dom";
import SectionEyebrow from "./SectionEyebrow";
import SectionTitle from "./SectionTitle";

/**
 * Featured portfolio case study — large screenshot with an overlapping dark
 * content card (badge, title, description, key metrics, and a link).
 */
export default function PortfolioFeatureShowcase({
  id = "portfolio-feature",
  sectionEyebrow,
  sectionTitle,
  sectionLead,
  badge = "Case Study",
  title,
  description,
  metrics = [],
  image,
  imageAlt = "",
  href = "/#page-contact",
  linkLabel = "View More",
  variant = "default",
  mediaPosition = "right",
}) {
  const sectionClass = [
    "ubuntu-section-block border-b border-[#d9d9d9]",
    variant === "alt" ? "ubuntu-section--alt" : "bg-white",
  ]
    .filter(Boolean)
    .join(" ");

  const featureClass = [
    "portfolio-feature",
    mediaPosition === "left" && "portfolio-feature--media-left",
  ]
    .filter(Boolean)
    .join(" ");

  const hasHeader = sectionEyebrow || sectionTitle || sectionLead;

  return (
    <section
      id={id}
      className={sectionClass}
      aria-labelledby={sectionTitle && id ? `${id}-heading` : undefined}
    >
      <div className="ubuntu-container">
        {hasHeader && (
          <div className="mb-8 max-w-3xl">
            {sectionEyebrow && <SectionEyebrow>{sectionEyebrow}</SectionEyebrow>}
            {sectionTitle && (
              <SectionTitle id={id ? `${id}-heading` : undefined} title={sectionTitle} />
            )}
            {sectionLead && <p className="ubuntu-lead mt-3">{sectionLead}</p>}
          </div>
        )}

        <div className={featureClass}>
          {image && (
            <div className="portfolio-feature__media">
              <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
            </div>
          )}

          <div className="portfolio-feature__card">
            {badge && <span className="portfolio-feature__badge">{badge}</span>}
            {title && <h3 className="portfolio-feature__title">{title}</h3>}
            {description && <p className="portfolio-feature__desc">{description}</p>}

            {metrics.length > 0 && (
              <ul className="portfolio-feature__metrics">
                {metrics.map((metric) => (
                  <li key={metric.label} className="portfolio-feature__metric">
                    <span className="portfolio-feature__metric-value">{metric.value}</span>
                    <span className="portfolio-feature__metric-label">{metric.label}</span>
                  </li>
                ))}
              </ul>
            )}

            {href && (
              <Link to={href} className="portfolio-feature__link">
                {linkLabel}
                <span aria-hidden="true"> →</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
