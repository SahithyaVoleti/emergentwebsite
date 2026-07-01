import { useEffect, useState } from "react";

const SCROLL_THRESHOLD_PX = 20;

/** True once the user has scrolled past the top — drives centered floating navbar. */
export function useSiteNavScroll(enabled = true) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!enabled) return undefined;

    const update = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [enabled]);

  return isScrolled;
}
