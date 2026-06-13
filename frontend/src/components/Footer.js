import { Link } from "react-router-dom";
import { ArrowUp, Linkedin, Twitter } from "lucide-react";
import SiteNavLink from "./ubuntu/SiteNavLink";
import {
  COMPANY_FOUNDED_LABEL,
  COMPANY_LOGO_PATH,
  COMPANY_NAME,
  COMPANY_SOCIAL,
  COMPANY_TAGLINE,
} from "../lib/company";
import { footerColumns, footerLegalLinks } from "../lib/siteNav";
import SectionPatternBackground from "./SectionPatternBackground";
import { usePatternSectionHover } from "../hooks/usePatternSectionHover";

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
                src={COMPANY_LOGO_PATH}
                alt={COMPANY_NAME}
                className="h-9 w-auto max-w-[11rem] object-contain object-left sm:h-10 sm:max-w-[14rem]"
              />
            </Link>
            <p className="ubuntu-footer-meta max-w-xs text-sm leading-snug">{COMPANY_TAGLINE}</p>
            <div className="mt-3 flex items-center gap-2.5" aria-label="Social links">
              <a
                href={COMPANY_SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ubuntu-footer-social"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} aria-hidden />
              </a>
              <a
                href={COMPANY_SOCIAL.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="ubuntu-footer-social"
                aria-label="Twitter"
              >
                <Twitter size={16} aria-hidden />
              </a>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="ubuntu-footer-heading">{column.title}</h4>
              <ul className="ubuntu-footer-list">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.href}`}>
                    <SiteNavLink href={link.href} className="ubuntu-footer-link" muted showArrow={false}>
                      {link.label}
                    </SiteNavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="ubuntu-footer-rule my-6" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="ubuntu-footer-meta text-xs sm:text-[0.8125rem]">
            &copy; {new Date().getFullYear()} {COMPANY_NAME} · Established {COMPANY_FOUNDED_LABEL}
            <span className="mx-2 hidden text-[#333]/25 sm:inline" aria-hidden="true">
              |
            </span>
            <span className="mt-2 flex flex-wrap gap-x-4 gap-y-1 sm:mt-0 sm:inline-flex">
              {footerLegalLinks.map((link) => (
                <Link key={link.href} to={link.href} className="ubuntu-footer-link">
                  {link.label}
                </Link>
              ))}
            </span>
          </p>

          <button
            data-testid="scroll-to-top"
            type="button"
            onClick={scrollToTop}
            className="ubuntu-footer-top inline-flex items-center gap-1.5 text-xs sm:text-sm"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} aria-hidden />
          </button>
        </div>
      </div>
    </footer>
  );
}
