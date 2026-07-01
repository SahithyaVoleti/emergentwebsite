/**
 * Band-level section heading — same thin weight and size as the homepage hero title.
 * Accent: { before, accent, after } or "before|accent|after" with orange highlight.
 */
export function renderSectionTitle(title) {
  if (!title) return null;

  if (typeof title === "object" && title.accent != null) {
    return (
      <>
        {title.before}{title.before ? " " : null}
        <span className="ubuntu-section-title__accent">{title.accent}</span>
        {title.after ? ` ${title.after}` : null}
      </>
    );
  }

  if (typeof title === "string" && title.includes("|")) {
    const [before = "", accent = "", after = ""] = title.split("|").map((part) => part.trim());
    if (accent) {
      return (
        <>
          {before}
          {before ? " " : null}
          <span className="ubuntu-section-title__accent">{accent}</span>
          {after ? ` ${after}` : null}
        </>
      );
    }
  }

  return title;
}

function SectionTitle({
  as: Tag = "h2",
  id,
  className = "",
  children,
  title,
  ...props
}) {
  const content = title ?? children;
  if (!content) return null;

  return (
    <Tag
      id={id}
      className={["ubuntu-section-title", className].filter(Boolean).join(" ")}
      {...props}
    >
      {renderSectionTitle(content)}
    </Tag>
  );
}

SectionTitle.displayName = "SectionTitle";

export default SectionTitle;
