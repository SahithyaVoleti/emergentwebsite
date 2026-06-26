import { useEffect, useRef, useState } from "react";

export default function HeroPlayOnceGif({ src, className }) {
  const containerRef = useRef(null);
  const [gifSrc, setGifSrc] = useState(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    let hasStarted = false;

    const startPlayback = () => {
      if (hasStarted) return;
      hasStarted = true;
      setGifSrc(`${src}?play=${Date.now()}`);
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
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  return (
    <div ref={containerRef} className="ubuntu-hero-transformation__gif-wrap" aria-hidden="true">
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
