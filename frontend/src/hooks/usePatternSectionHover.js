import { useCallback, useRef } from "react";

/** Tracks cursor over pattern sections for animated hover spotlight CSS vars. */
export function usePatternSectionHover() {
  const sectionRef = useRef(null);

  const onPointerMove = useCallback((e) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--pattern-hover-x", `${x}%`);
    el.style.setProperty("--pattern-hover-y", `${y}%`);
    el.classList.add("ubuntu-pattern-section--is-hovered");
  }, []);

  const onPointerLeave = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.style.setProperty("--pattern-hover-x", "50%");
    el.style.setProperty("--pattern-hover-y", "50%");
    el.classList.remove("ubuntu-pattern-section--is-hovered");
  }, []);

  return { sectionRef, onPointerMove, onPointerLeave };
}
