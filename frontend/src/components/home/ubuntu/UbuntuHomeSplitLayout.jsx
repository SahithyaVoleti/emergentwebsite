/**
 * Two-column section: copy on one side, image on the other (ubuntu.com event-band pattern).
 * On small screens: eyebrow + title, then image, then remaining copy.
 */
import { splitLayoutContentAtTitle } from "../../../lib/splitLayoutContent";

export default function UbuntuHomeSplitLayout({
  image,
  imageAlt,
  imagePosition = "right",
  variant = "default",
  id,
  testId,
  children,
  belowContent,
}) {
  const sectionClass =
    variant === "alt"
      ? "ubuntu-section-block ubuntu-section--alt"
      : variant === "dark"
        ? "ubuntu-section-block ubuntu-section--dark"
        : "ubuntu-section-block";

  const imageFirst = imagePosition === "left";
  const { intro, body, structured } = splitLayoutContentAtTitle(children);

  const media = image ? (
    <div className="ubuntu-split__media">
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        decoding="async"
        className="ubuntu-split__img"
      />
    </div>
  ) : null;

  const splitClass = [
    "ubuntu-split",
    structured && "ubuntu-split--structured",
    imageFirst ? "ubuntu-split--image-left" : "ubuntu-split--image-right",
  ]
    .filter(Boolean)
    .join(" ");

  const introNode =
    structured && intro?.length > 0 ? (
      <div className="ubuntu-split__intro">{intro}</div>
    ) : null;

  const bodyNode = structured ? (
    body.length > 0 ? <div className="ubuntu-split__body">{body}</div> : null
  ) : (
    <div className="ubuntu-split__content">{children}</div>
  );

  const splitChildren = structured ? (
    <>
      {introNode}
      {media}
      {bodyNode}
    </>
  ) : imageFirst ? (
    <>
      {media}
      {bodyNode}
    </>
  ) : (
    <>
      {bodyNode}
      {media}
    </>
  );

  return (
    <section id={id} data-testid={testId} className={sectionClass}>
      <div className="ubuntu-container">
        <div className={splitClass}>{splitChildren}</div>
        {belowContent && <div className="ubuntu-split__below">{belowContent}</div>}
      </div>
    </section>
  );
}
