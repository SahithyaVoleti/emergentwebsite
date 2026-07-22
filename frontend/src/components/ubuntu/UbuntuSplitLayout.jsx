import MockupFrame from "./MockupFrame";
import { splitLayoutContentForMedia } from "../../lib/splitLayoutContent";
import { sectionBlockClass } from "../../lib/sectionBands";

export default function UbuntuSplitLayout({
  image,
  imageAlt,
  imagePosition = "right",
  mockupVariant = "plain",
  variant = "default",
  /** @deprecated Pattern backgrounds removed — prop retained for call-site compatibility */
  pattern: _pattern,
  id,
  testId,
  className = "",
  children,
  belowContent,
  mediaSlot,
  mediaClassName = "",
}) {
  const sectionClass = sectionBlockClass(className);

  const imageFirst = imagePosition === "left";
  const hasMedia = Boolean(mediaSlot || image);
  const { intro, body, structured: hasTitleSplit } = splitLayoutContentForMedia(children);
  const structured = Boolean(hasMedia && hasTitleSplit);

  const media = mediaSlot ? (
    <div className={["ubuntu-split__media", mediaClassName].filter(Boolean).join(" ")}>
      {mediaSlot}
    </div>
  ) : image ? (
    <div className="ubuntu-split__media">
      <MockupFrame src={image} alt={imageAlt ?? ""} variant={mockupVariant} />
    </div>
  ) : null;

  const splitClass = [
    "ubuntu-split",
    structured && "ubuntu-split--structured",
    imageFirst ? "ubuntu-split--image-left" : "ubuntu-split--image-right",
  ]
    .filter(Boolean)
    .join(" ");

  const copyNode = structured ? (
    <div className="ubuntu-split__copy">
      {intro?.length > 0 ? <div className="ubuntu-split__intro">{intro}</div> : null}
      {Array.isArray(body) && body.length > 0 ? <div className="ubuntu-split__body">{body}</div> : null}
    </div>
  ) : null;

  const bodyNode = structured ? copyNode : (
    <div className="ubuntu-split__content">{children}</div>
  );

  const splitChildren = structured ? (
    imageFirst ? (
      <>
        {media}
        {bodyNode}
      </>
    ) : (
      <>
        {bodyNode}
        {media}
      </>
    )
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
    <section
      id={id}
      data-testid={testId}
      className={sectionClass}
    >
      <div className="ubuntu-container relative z-10">
        <div className={splitClass}>{splitChildren}</div>
        {belowContent && <div className="ubuntu-split__below">{belowContent}</div>}
      </div>
    </section>
  );
}
