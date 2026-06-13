import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.replace("#", "");
    let attempts = 0;
    const maxAttempts = 40;

    const tryScroll = () => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (attempts++ < maxAttempts) {
        window.requestAnimationFrame(tryScroll);
        return;
      }
      window.scrollTo(0, 0);
    };

    tryScroll();
  }, [pathname, hash]);
  return null;
}
