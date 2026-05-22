import { createContext, useCallback, useContext, useMemo, useRef } from "react";
import { homeImagePosition } from "../../lib/homeImagePosition";

const SectionMediaContext = createContext(null);

export function SectionMediaProvider({ children, startIndex = 1 }) {
  const indexRef = useRef(startIndex);

  const nextPosition = useCallback(() => homeImagePosition(indexRef.current++), []);

  const value = useMemo(() => ({ nextPosition }), [nextPosition]);

  return (
    <SectionMediaContext.Provider value={value}>{children}</SectionMediaContext.Provider>
  );
}

export function useSectionMediaPosition() {
  const ctx = useContext(SectionMediaContext);
  return ctx?.nextPosition ?? (() => "right");
}
