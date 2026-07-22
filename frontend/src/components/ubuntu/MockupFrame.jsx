/**
 * Decorative product mockup frame (browser chrome) around section imagery.
 */
import HeroPlayOnceGif from "./HeroPlayOnceGif";
import { isGifSrc } from "../../lib/isGifSrc";

export default function MockupFrame({
  src,
  alt = "",
  variant = "plain",
  children,
  screenClassName = "",
}) {
  if (variant === "plain") {
    if (!src) return null;
    if (isGifSrc(src)) {
      return (
        <HeroPlayOnceGif
          src={src}
          wrapClassName="ubuntu-mockup__gif-wrap"
          className="ubuntu-mockup__gif-img"
        />
      );
    }
    return (
      <img src={src} alt={alt} loading="lazy" decoding="async" className="ubuntu-split__img" />
    );
  }

  if (!src && !children) return null;

  const screenClasses = [
    "ubuntu-mockup__screen",
    isGifSrc(src) ? "ubuntu-mockup__screen--gif" : "ubuntu-mockup__screen--static",
    screenClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="ubuntu-mockup" data-variant={variant}>
      <div className="ubuntu-mockup__chrome" aria-hidden="true">
        <span className="ubuntu-mockup__dot" />
        <span className="ubuntu-mockup__dot" />
        <span className="ubuntu-mockup__dot" />
        <span className="ubuntu-mockup__bar" />
      </div>
      <div className={screenClasses}>
        {children ??
          (src ? (
            isGifSrc(src) ? (
              <HeroPlayOnceGif
                src={src}
                wrapClassName="ubuntu-mockup__gif-wrap"
                className="ubuntu-mockup__gif-img"
              />
            ) : (
              <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                className="ubuntu-mockup__img"
              />
            )
          ) : null)}
      </div>
    </div>
  );
}
