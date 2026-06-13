import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import SiteNavLink from "./ubuntu/SiteNavLink";
import { useSiteNavScroll } from "../hooks/useSiteNavScroll";
import { usePatternSectionHover } from "../hooks/usePatternSectionHover";
import SectionPatternBackground from "./SectionPatternBackground";
import { COMPANY_LOGO_PATH, COMPANY_NAME } from "../lib/company";
import {
  headerCompanyLinks,
  industryNavLinks,
  serviceNavLinks,
  solutionNavLinks,
} from "../lib/siteNav";

function navLinkClass(isActive) {
  return `ubuntu-nav-link inline-flex items-center gap-1 whitespace-nowrap ${isActive ? "ubuntu-nav-link--active" : ""}`;
}

export default function Header({ embedded = false, shell = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isNavCentered = useSiteNavScroll(shell);
  const { sectionRef: navRef, onPointerMove, onPointerLeave } = usePatternSectionHover();

  const renderDesktopDropdown = (label, links, basePath) => {
    const isActive = location.pathname.startsWith(basePath);

    return (
      <div className="relative group">
        <button
          type="button"
          data-testid={`nav-link-${label.toLowerCase()}`}
          className={navLinkClass(isActive)}
          aria-haspopup="menu"
          aria-expanded={false}
        >
          {label}
          <ChevronDown size={14} className="opacity-60 transition-transform group-hover:rotate-180" />
        </button>
        <div className="ubuntu-nav-dropdown" role="menu">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              data-testid={`${label.toLowerCase()}-dropdown-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              className={`block px-3 py-2 transition-colors ${
                location.pathname === link.href ? "ubuntu-nav-dropdown__active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  const isSiteNav = embedded || shell;

  const headerClass = [
    "ubuntu-chrome-header",
    isSiteNav && "ubuntu-chrome-header--site-nav",
    shell && "ubuntu-chrome-header--fixed",
    shell && !isNavCentered && "ubuntu-chrome-header--at-top",
    shell && isNavCentered && "ubuntu-chrome-header--centered ubuntu-chrome-header--pattern",
    embedded && !shell && "sticky top-0 z-[100]",
    !isSiteNav && "sticky top-0 z-[100]",
  ]
    .filter(Boolean)
    .join(" ");

  const bar = (
    <>
      <div className="ubuntu-chrome-header__bar relative z-10 mx-auto flex h-14 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" data-testid="header-logo" className="flex shrink-0 items-center">
          <img
            src={COMPANY_LOGO_PATH}
            alt={COMPANY_NAME}
            className="h-9 w-auto max-w-[11rem] object-contain object-left sm:h-10 sm:max-w-[14rem]"
          />
        </Link>

        <nav className="mx-4 hidden flex-1 items-center justify-center xl:flex" aria-label="Main">
          <div className="flex items-center gap-6 xl:gap-8">
            {renderDesktopDropdown("Services", serviceNavLinks, "/services")}
            {renderDesktopDropdown("Solutions", solutionNavLinks, "/solutions")}
            {renderDesktopDropdown("Industries", industryNavLinks, "/industries")}
            <div className="relative group">
              <button
                type="button"
                data-testid="nav-link-company"
                className={navLinkClass(headerCompanyLinks.some((l) => location.pathname.startsWith(l.href)))}
                aria-haspopup="menu"
                aria-expanded={false}
              >
                Company
                <ChevronDown size={14} className="opacity-60 transition-transform group-hover:rotate-180" />
              </button>
              <div className="ubuntu-nav-dropdown" role="menu">
                {headerCompanyLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    data-testid={`company-dropdown-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    className={`block px-3 py-2 transition-colors ${
                      location.pathname.startsWith(link.href) ? "ubuntu-nav-dropdown__active" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/blog"
              data-testid="nav-link-blog"
              className={navLinkClass(location.pathname.startsWith("/blog"))}
            >
              Blog
            </Link>
          </div>
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-3">
          <SiteNavLink
            href="/#page-contact"
            data-testid="header-cta-button"
            primary
            showArrow={false}
            className="ubuntu-chrome-header__cta-desktop hidden xl:inline-flex"
          >
            Contact us
          </SiteNavLink>

          <button
            data-testid="mobile-menu-toggle"
            className="rounded-none p-2 text-[#333] transition-colors hover:text-[#8b1538] xl:hidden"
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          data-testid="mobile-menu"
          className="ubuntu-chrome-header__mobile-menu relative z-10 max-h-[calc(100vh-3.5rem)] overflow-y-auto border-t border-[#d9d9d9]/40 bg-[#fafafa]/95 px-4 pb-6 backdrop-blur-sm sm:px-6 xl:hidden"
        >
          {[
            { title: "Services", links: serviceNavLinks },
            { title: "Solutions", links: solutionNavLinks },
            { title: "Industries", links: industryNavLinks },
            { title: "Company", links: headerCompanyLinks },
          ].map((group) => (
            <div key={group.title} className="pt-3">
              <p className="py-2 text-xs font-medium uppercase tracking-wide text-[#666]">{group.title}</p>
              {group.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block border-b border-[#e5e5e5] py-3 pl-2 text-sm text-[#333] hover:text-[#8b1538]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            to="/blog"
            onClick={() => setMobileOpen(false)}
            className="block border-b border-[#e5e5e5] py-3 text-sm text-[#333] hover:text-[#8b1538]"
          >
            Blog
          </Link>
          <SiteNavLink
            href="/#page-contact"
            data-testid="mobile-cta-button"
            onClick={() => setMobileOpen(false)}
            primary
            showArrow={false}
            className="mt-6 w-full"
          >
            Contact us
          </SiteNavLink>
        </div>
      )}
    </>
  );

  if (embedded || shell) {
    return (
      <nav
        ref={shell ? navRef : undefined}
        data-testid="header"
        className={headerClass}
        aria-label="Main"
        onPointerMove={shell && isNavCentered ? onPointerMove : undefined}
        onPointerLeave={shell && isNavCentered ? onPointerLeave : undefined}
      >
        {shell && isNavCentered && <SectionPatternBackground variant="nav" />}
        {bar}
      </nav>
    );
  }

  return (
    <header data-testid="header" className={headerClass}>
      {bar}
    </header>
  );
}
