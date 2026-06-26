/**
 * Band-level section heading — same weight and color system as the page hero title.
 * Optional accent: { before, accent, after } with orange accent word (hero pattern).
 */
export function renderSectionTitle(title) {
  if (!title) return null;

  if (typeof title === "object" && title.accent != null) {
    return (
      <>
        {title.before}{" "}
        <span className="ubuntu-section-title__accent">{title.accent}</span>{" "}
        {title.after}
      </>
    );
  }

  return title;
}

export default function SectionTitle({
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
