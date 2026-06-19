import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToElementId } from "../lib/siteNavigation";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      scrollToElementId(id, { retry: true });
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
