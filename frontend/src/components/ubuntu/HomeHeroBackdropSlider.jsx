import { useEffect, useState } from "react";

/**
 * Auto-rotating, semi-transparent hero backdrop.
 * Cross-fades between images on a fixed interval; respects reduced-motion.
 */
export default function HomeHeroBackdropSlider({ images = [], interval = 6000 }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return undefined;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  if (!images.length) return null;

  return (
    <div className="ubuntu-home-hero-banner__backdrop" aria-hidden="true">
      {images.map((src, index) => (
        <div
          key={src}
          className={[
            "ubuntu-home-hero-banner__slide",
            index === active ? "is-active" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          style={{ backgroundImage: `url("${src}")` }}
        />
      ))}
    </div>
  );
}
