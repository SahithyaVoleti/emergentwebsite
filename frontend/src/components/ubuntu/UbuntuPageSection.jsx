import UbuntuLink from "./UbuntuLink";
import UbuntuSplitLayout from "./UbuntuSplitLayout";
import { useSectionMediaPosition } from "./SectionMediaContext";

function SectionCopy({
  eyebrow,
  title,
  lead,
  body,
  bullets = [],
  logos,
  learnMore,
  contact,
}) {
  return (
    <>
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">{eyebrow}</p>
      )}
      {title && <h2 className="ubuntu-section-title">{title}</h2>}
      {lead && <p className="ubuntu-lead">{lead}</p>}
      {body && <p className="ubuntu-body mb-4">{body}</p>}
      {bullets.length > 0 && (
        <ul className="ubuntu-bullet-list">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {logos?.length > 0 && (
        <div className="ubuntu-logo-row" aria-label="Technology partners">
          {logos.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      )}
      {(learnMore || contact) && (
        <div className="ubuntu-cta-row">
          {learnMore && (
            <UbuntuLink to={learnMore.href} muted>
              {learnMore.label}
            </UbuntuLink>
          )}
          {contact && <UbuntuLink to={contact.href}>{contact.label}</UbuntuLink>}
        </div>
      )}
    </>
  );
}

/**
 * Standard ubuntu.com topic band with optional mockup image (auto-alternates side when image provided).
 */
export default function UbuntuPageSection({
  id,
  eyebrow,
  title,
  lead,
  body,
  bullets = [],
  learnMore,
  contact,
  variant = "default",
  logos,
  image,
  imageAlt,
  imagePosition,
  mockupVariant = "browser",
  belowContent,
  children,
}) {
  const nextPosition = useSectionMediaPosition();
  const resolvedPosition = imagePosition ?? nextPosition();

  const copy = (
    <SectionCopy
      eyebrow={eyebrow}
      title={title}
      lead={lead}
      body={body}
      bullets={bullets}
      logos={logos}
      learnMore={learnMore}
      contact={contact}
    />
  );

  if (!image) {
    const sectionClass =
      variant === "alt"
        ? "ubuntu-section-block ubuntu-section--alt border-b border-[#d9d9d9]"
        : variant === "dark"
          ? "ubuntu-section-block ubuntu-section--dark border-b border-[#d9d9d9]"
          : "ubuntu-section-block border-b border-[#d9d9d9] bg-white";

    return (
      <section id={id} data-testid={id ? `ubuntu-section-${id}` : undefined} className={sectionClass}>
        <div className="ubuntu-container">
          {copy}
          {children}
          {belowContent}
        </div>
      </section>
    );
  }

  return (
    <UbuntuSplitLayout
      id={id}
      testId={id ? `ubuntu-section-${id}` : undefined}
      variant={variant}
      image={image}
      imageAlt={imageAlt}
      imagePosition={resolvedPosition}
      mockupVariant={mockupVariant}
      belowContent={
        belowContent || children ? (
          <>
            {children}
            {belowContent}
          </>
        ) : undefined
      }
    >
      {copy}
    </UbuntuSplitLayout>
  );
}
