import { useMemo } from "react";
import TechStackRibbon from "../TechStackRibbon";
import { getPlatformsFeaturedTechNames } from "../../lib/serviceTechStackSlugs";

/**
 * Compact sliding tech stack band — Platforms listing only (/solutions).
 * Uses hero content width and CTA-style background treatment.
 */
export default function PlatformsTechRibbon({
  id = "platforms-tech-ribbon",
  className = "",
}) {
  const items = useMemo(() => getPlatformsFeaturedTechNames(), []);

  if (!items.length) return null;

  return (
    <section
      id={id}
      data-testid="platforms-tech-ribbon"
      className={`ubuntu-platforms-tech-ribbon ubuntu-stats-cta-strip ${className}`.trim()}
      aria-label="Technology stack"
    >
      <div className="ubuntu-stats-dots-layer" aria-hidden="true" />
      <div className="ubuntu-container relative z-10">
        <div className="ubuntu-platforms-tech-ribbon__track">
          <TechStackRibbon
            items={items}
            compact
            speed="slow"
            className="ubuntu-tech-ribbon--compact"
          />
        </div>
      </div>
    </section>
  );
}
