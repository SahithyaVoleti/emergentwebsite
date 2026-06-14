import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BorderBeam({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = "#8b1538",
  colorTo = "#e8b4b8",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 2,
}) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div
      className={cn("ubuntu-border-beam-mask pointer-events-none absolute inset-0", className)}
      style={{ "--border-beam-width": `${borderWidth}px` }}
      aria-hidden="true"
    >
      {reducedMotion ? (
        <div
          className="ubuntu-border-beam-glow absolute inset-0 opacity-40"
          style={{
            background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
            ...style,
          }}
        />
      ) : (
        <motion.div
          className="ubuntu-border-beam-glow absolute aspect-square"
          style={{
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
            ...style,
          }}
          initial={{ offsetDistance: `${initialOffset}%` }}
          animate={{
            offsetDistance: reverse
              ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
              : [`${initialOffset}%`, `${100 + initialOffset}%`],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration,
            delay: -delay,
            ...transition,
          }}
        />
      )}
    </div>
  );
}
