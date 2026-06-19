import MockupFrame from "./MockupFrame";
import SectionPatternBackground from "../SectionPatternBackground";
import { usePatternSectionHover } from "../../hooks/usePatternSectionHover";

export default function UbuntuSplitLayout({
  image,
  imageAlt,
  imagePosition = "right",
  mockupVariant = "browser",
  variant = "default",
  /** @type {"hero" | "cta" | null} */
  pattern,
  id,
  testId,
  className = "",
  children,
  belowContent,
  mediaSlot,
  mediaClassName = "",
}) {
  const patternVariant = pattern ?? (variant === "dark" ? "cta" : null);
  const isHero = patternVariant === "hero";
  const isCta = patternVariant === "cta";
  const isPatternSection = isHero || isCta;

  const sectionClass = [
    "ubuntu-section-block",
    isPatternSection && "ubuntu-pattern-section",
    isHero && "ubuntu-pattern-section--hero",
    isCta && "ubuntu-pattern-section--cta",
    variant === "alt" && !isPatternSection && "ubuntu-section--alt",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const imageFirst = imagePosition === "left";
  const { sectionRef, onPointerMove, onPointerLeave } = usePatternSectionHover();

  const media = mediaSlot ? (
    <div className={["ubuntu-split__media", mediaClassName].filter(Boolean).join(" ")}>
      {mediaSlot}
    </div>
  ) : image ? (
    <div className="ubuntu-split__media">
      <MockupFrame src={image} alt={imageAlt} variant={mockupVariant} />
    </div>
  ) : null;

  const content = <div className="ubuntu-split__content">{children}</div>;

  return (
    <section
      ref={isPatternSection ? sectionRef : undefined}
      id={id}
      data-testid={testId}
      className={sectionClass}
      onPointerMove={isPatternSection ? onPointerMove : undefined}
      onPointerLeave={isPatternSection ? onPointerLeave : undefined}
    >
      {isPatternSection && <SectionPatternBackground variant={patternVariant} />}
      <div className="ubuntu-container relative z-10">
        <div
          className={`ubuntu-split ${imageFirst ? "ubuntu-split--image-left" : "ubuntu-split--image-right"}`}
        >
          {imageFirst ? (
            <>
              {media}
              {content}
            </>
          ) : (
            <>
              {content}
              {media}
            </>
          )}
        </div>
        {belowContent && <div className="ubuntu-split__below">{belowContent}</div>}
      </div>
    </section>
  );
}
