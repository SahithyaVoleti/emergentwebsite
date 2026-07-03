import { useEffect, useMemo, useRef, useState } from "react";

/** Split "6+" / "100%" into prefix, numeric target, and suffix. */
function parseValue(value) {
  const str = String(value);
  const match = str.match(/^(\D*?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { prefix, target: parseFloat(numStr), suffix, decimals };
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Animated count-up for stat values. Starts at zero and eases up to the target
 * the first time it scrolls into view. Non-numeric values render unchanged, and
 * reduced-motion users see the final value immediately.
 */
export default function CountUpValue({ value, duration = 1400, className }) {
  const parsed = useMemo(() => parseValue(value), [value]);
  const ref = useRef(null);
  const [display, setDisplay] = useState(() =>
    parsed ? `${parsed.prefix}0${parsed.suffix}` : String(value)
  );

  useEffect(() => {
    if (!parsed) {
      setDisplay(String(value));
      return undefined;
    }

    const format = (n) => `${parsed.prefix}${n.toFixed(parsed.decimals)}${parsed.suffix}`;
    const el = ref.current;

    if (!el || prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      setDisplay(format(parsed.target));
      return undefined;
    }

    let raf = 0;
    let started = false;

    const run = () => {
      const start = performance.now();
      const step = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(format(parsed.target * eased));
        if (t < 1) {
          raf = requestAnimationFrame(step);
        } else {
          setDisplay(format(parsed.target));
        }
      };
      raf = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true;
            run();
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [parsed, duration, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
