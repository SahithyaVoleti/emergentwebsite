/**
 * Decorative product mockup frame (browser chrome) around section imagery.
 */
export default function MockupFrame({
  src,
  alt = "",
  variant = "browser",
  children,
  screenClassName = "",
}) {
  if (variant === "plain") {
    if (!src) return null;
    return (
      <img src={src} alt={alt} loading="lazy" decoding="async" className="ubuntu-split__img" />
    );
  }

  if (!src && !children) return null;

  return (
    <div className="ubuntu-mockup" data-variant={variant}>
      <div className="ubuntu-mockup__chrome" aria-hidden="true">
        <span className="ubuntu-mockup__dot" />
        <span className="ubuntu-mockup__dot" />
        <span className="ubuntu-mockup__dot" />
        <span className="ubuntu-mockup__bar" />
      </div>
      <div className={["ubuntu-mockup__screen", screenClassName].filter(Boolean).join(" ")}>
        {children ??
          (src ? (
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="ubuntu-mockup__img"
            />
          ) : null)}
      </div>
    </div>
  );
}
