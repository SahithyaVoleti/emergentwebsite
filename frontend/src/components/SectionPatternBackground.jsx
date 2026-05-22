/**
 * Animated decorative backgrounds — hero, CTA, scrolled navbar, services.
 * Pointer spotlight is driven on the parent via usePatternSectionHover.
 */
export default function SectionPatternBackground({ variant = "hero" }) {
  return (
    <div
      className={`ubuntu-pattern-layer ubuntu-pattern-layer--${variant}`}
      aria-hidden="true"
    />
  );
}
