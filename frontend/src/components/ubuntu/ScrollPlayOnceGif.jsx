import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Plays a GIF once after the user scrolls and the element is in view, then freezes on the last frame.
 */
export default function ScrollPlayOnceGif({
  src,
  className = "ubuntu-split__img",
  playbackMs = 8000,
}) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const hasStartedRef = useRef(false);
  const hasScrolledRef = useRef(false);
  const [gifSrc, setGifSrc] = useState(null);
  const [frozenSrc, setFrozenSrc] = useState(null);

  const tryStart = useCallback(() => {
    if (hasStartedRef.current || !hasScrolledRef.current || frozenSrc) return;

    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > window.innerHeight * 0.05;
    if (!inView) return;

    hasStartedRef.current = true;
    setGifSrc(`${src}?play=${Date.now()}`);
  }, [frozenSrc, src]);

  useEffect(() => {
    const onScroll = () => {
      hasScrolledRef.current = true;
      tryStart();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [tryStart]);

  useEffect(() => {
    if (!gifSrc || !playbackMs) return undefined;

    const timer = window.setTimeout(() => {
      const img = imgRef.current;
      if (!img?.naturalWidth) return;

      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      canvas.getContext("2d")?.drawImage(img, 0, 0);
      setFrozenSrc(canvas.toDataURL("image/png"));
      setGifSrc(null);
    }, playbackMs);

    return () => window.clearTimeout(timer);
  }, [gifSrc, playbackMs]);

  return (
    <div ref={containerRef} className="ubuntu-split__gif-wrap" aria-hidden="true">
      {frozenSrc ? (
        <img src={frozenSrc} alt="" className={className} draggable={false} decoding="async" />
      ) : gifSrc ? (
        <img
          ref={imgRef}
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
