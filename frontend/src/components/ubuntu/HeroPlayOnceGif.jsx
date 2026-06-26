import { useEffect, useRef, useState } from "react";
import { GIF_PLAY_ONCE_OBSERVER, gifPlaySrc } from "../../lib/gifPlayback";

/**
 * Plays a GIF once when the element enters view (hero-aligned timing everywhere).
 */
export default function HeroPlayOnceGif({
  src,
  className,
  wrapClassName = "ubuntu-hero-transformation__gif-wrap",
}) {
  const containerRef = useRef(null);
  const [gifSrc, setGifSrc] = useState(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    let hasStarted = false;

    const startPlayback = () => {
      if (hasStarted) return;
      hasStarted = true;
      setGifSrc(gifPlaySrc(src));
    };

    if (typeof IntersectionObserver === "undefined") {
      startPlayback();
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startPlayback();
          observer.disconnect();
        }
      },
      GIF_PLAY_ONCE_OBSERVER
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  return (
    <div ref={containerRef} className={wrapClassName} aria-hidden="true">
      {gifSrc ? (
        <img
          src={gifSrc}
          alt=""
          className={className}
          draggable={false}
          decoding="async"
        />
      ) : null}
    </div>
  );
}
