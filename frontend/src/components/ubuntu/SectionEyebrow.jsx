/** Standard section label — matches hero chrome eyebrow color. */
export default function SectionEyebrow({ children, className = "", id }) {
  if (!children) return null;

  return (
    <p id={id} className={["ubuntu-section-eyebrow", className].filter(Boolean).join(" ")}>
      {children}
    </p>
  );
}
