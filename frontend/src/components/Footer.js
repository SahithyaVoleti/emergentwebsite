import { ArrowUp, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import SiteNavLink from "./ubuntu/SiteNavLink";
import { COMPANY_FOUNDED_LABEL } from "../lib/company";
import { FOOTER_COLUMNS, LEGAL_LINKS, SOCIAL_LINKS } from "../data/siteNav";
import { BRAND_LOGO_ALT, BRAND_LOGO_FULL } from "../data/brandAssets";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      data-testid="footer"
      className="ubuntu-chrome-footer"
    >
      <div className="ubuntu-chrome-footer__inner relative z-10 py-5 sm:py-6">
        <div className="grid grid-cols-2 gap-4 gap-y-5 sm:grid-cols-4 lg:gap-6">
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <Link to="/" className="mb-2 inline-block">
              <img
                src={BRAND_LOGO_FULL}
                alt={BRAND_LOGO_ALT}
                className="h-7 w-auto max-w-[11rem] object-contain object-left"
              />
            </Link>
            <p className="ubuntu-footer-meta max-w-xs text-xs leading-snug">
              AI product transformation and SaaS engineering for enterprise programs.
            </p>
            <div className="mt-2 flex items-center gap-2" aria-label="Social links">
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
                    <SiteNavLink href={link.href} className="ubuntu-footer-link" muted showArrow={false}>
                      {link.label}
                    </SiteNavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
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
