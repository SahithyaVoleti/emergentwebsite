import { ArrowUp, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY_FOUNDED_LABEL } from "../lib/company";
import SectionPatternBackground from "./SectionPatternBackground";
import { usePatternSectionHover } from "../hooks/usePatternSectionHover";
import { FOOTER_COLUMNS, LEGAL_LINKS, SOCIAL_LINKS } from "../data/siteNav";

export default function Footer() {
  const { sectionRef, onPointerMove, onPointerLeave } = usePatternSectionHover();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={sectionRef}
      data-testid="footer"
      className="ubuntu-chrome-footer ubuntu-pattern-section ubuntu-pattern-section--hero"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <SectionPatternBackground variant="hero" />
      <div className="ubuntu-chrome-footer__inner relative z-10 py-8 sm:py-10">
        <div className="grid grid-cols-2 gap-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link to="/" className="mb-3 inline-block">
              <img
                src="/neuraltrix-logo.svg"
                alt="NeuralTrix AI"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="ubuntu-footer-meta max-w-xs text-sm leading-snug">
              Applied AI engineering and software delivery for enterprise programs.
            </p>
            <div className="mt-3 flex items-center gap-2.5" aria-label="Social links">
              {SOCIAL_LINKS.linkedin ? (
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ubuntu-footer-social"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} aria-hidden />
                </a>
              ) : null}
              {SOCIAL_LINKS.twitter ? (
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ubuntu-footer-social"
                  aria-label="Twitter"
                >
                  <Twitter size={16} aria-hidden />
                </a>
              ) : null}
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h4 className="ubuntu-footer-heading">{column.title}</h4>
              <ul className="ubuntu-footer-list">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="ubuntu-footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="ubuntu-footer-meta text-xs">
            © {new Date().getFullYear()} NeuralTrix AI. Founded {COMPANY_FOUNDED_LABEL}.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.label} to={link.href} className="ubuntu-footer-link text-xs">
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={scrollToTop}
              className="ubuntu-footer-social"
              aria-label="Back to top"
            >
              <ArrowUp size={16} aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
