import { useMemo } from "react";
import { TechBrandMark } from "../TechBrandIcon";
import SectionEyebrow from "./SectionEyebrow";
import SectionTitle from "./SectionTitle";
import { sectionBlockClass } from "../../lib/sectionBands";

/**
 * Auto-scrolling technology ribbon — heading aligned inside the container;
 * the logo track starts flush with the title margin and fades on the trailing edge.
 */
export default function TechStackRibbonSection({
  id = "tech-stack",
  testId = "tech-stack-ribbon",
  eyebrow = "Technology stack",
  title = "The stack behind our |AI delivery|",
  lead,
  techNames = [],
  className = "",
}) {
  const names = useMemo(
    () => techNames.map((name) => String(name).trim()).filter(Boolean),
    [techNames]
  );

  if (!names.length) return null;

  const track = [...names, ...names];

  return (
    <section
      id={id}
      data-testid={testId}
      className={sectionBlockClass("ubuntu-tech-ribbon border-y border-[#d9d9d9]", className)}
      aria-labelledby={`${id}-heading`}
    >
      <div className="ubuntu-container">
        <div className="max-w-3xl">
          {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
          <SectionTitle id={`${id}-heading`} title={title} />
          {lead && <p className="ubuntu-lead mt-3">{lead}</p>}
        </div>

        <div
          className="ubuntu-tech-ribbon__viewport mt-8 lg:mt-10"
          role="list"
          aria-label="Technologies we work with"
        >
          <div className="animate-marquee ubuntu-tech-ribbon__track">
            {track.map((name, index) => (
              <TechBrandMark
                key={`${name}-${index}`}
                name={name}
                className="ubuntu-tech-ribbon__item"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
