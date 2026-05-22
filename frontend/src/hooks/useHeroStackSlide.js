import { useCallback, useEffect, useRef, useState } from "react";

const HEADER_PX = 56;

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

/**
 * Scroll progress through the hero stack (0 → 1) drives CTA translateY onto the hero.
 */
export function useHeroStackSlide() {
  const scrollerRef = useRef(null);
  const [translateY, setTranslateY] = useState(0);
  const [isPinned, setIsPinned] = useState(false);

  const update = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const rect = scroller.getBoundingClientRect();
    const vh = window.innerHeight;
    const scrollRange = scroller.offsetHeight - vh;

    if (scrollRange <= 0) {
      setTranslateY(0);
      setIsPinned(false);
      return;
    }

    const scrolled = Math.min(Math.max(HEADER_PX - rect.top, 0), scrollRange);
    const progress = easeOutCubic(scrolled / scrollRange);

    const startY = 96;
    const endY = -200;
    setTranslateY(startY + (endY - startY) * progress);
    setIsPinned(rect.top <= HEADER_PX && rect.bottom > vh * 0.35);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setTranslateY(-96);
      return undefined;
    }

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [update]);

  return { scrollerRef, translateY, isPinned };
}
