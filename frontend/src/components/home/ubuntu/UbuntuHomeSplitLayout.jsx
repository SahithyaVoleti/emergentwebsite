/**
 * Two-column section: copy on one side, image on the other (ubuntu.com event-band pattern).
 * Stacks on small screens with image above content.
 */
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

  const content = <div className="ubuntu-split__content">{children}</div>;

  return (
    <section id={id} data-testid={testId} className={sectionClass}>
      <div className="ubuntu-container">
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
