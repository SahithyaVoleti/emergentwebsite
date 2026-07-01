import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { getNavDropdownIcon } from "../data/navDropdownIcons";
import { useSiteNavScroll } from "../hooks/useSiteNavScroll";
import { CONTACT_TOPIC, contactFormTo } from "../lib/contactIntent";
import {
  BRAND_LOGO_ALT,
  BRAND_LOGO_FULL,
  BRAND_LOGO_SYMBOL,
} from "../data/brandAssets";
import {
  SERVICES_PILLAR_NAV,
  SERVICES_NAV,
  PORTFOLIO_NAV,
  INDUSTRIES_NAV,
  COMPANY_NAV,
  PRIMARY_NAV_CTA,
  TOP_NAV,
  TOP_NAV_ORDER,
  isPathActive,
  isNavSectionActive,
} from "../data/siteNav";

function navLinkClass(isActive) {
  return `ubuntu-nav-link inline-flex items-center gap-1 whitespace-nowrap ${isActive ? "ubuntu-nav-link--active" : ""}`;
}

const mobileLinkClass =
  "block border-b border-[var(--site-border)] py-3.5 text-base text-white hover:text-[#b8451a]";

const DROPDOWN_NAV = {
  services: SERVICES_PILLAR_NAV,
  portfolio: PORTFOLIO_NAV,
  industries: INDUSTRIES_NAV,
  company: COMPANY_NAV,
};

/** All descendant links used to mark a nav section active (e.g. any service under What We Offer). */
const DROPDOWN_SECTION_LINKS = {
  services: SERVICES_NAV,
};

export default function Header({ embedded = false, shell = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSections, setOpenMobileSections] = useState({});
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const isNavCentered = useSiteNavScroll(shell);

  const demoHref = contactFormTo(
    location.pathname,
    PRIMARY_NAV_CTA.topic === "consultation"
      ? CONTACT_TOPIC.CONSULTATION
      : CONTACT_TOPIC.CONTACT
  );

  const toggleMobileSection = (key) => {
    setOpenMobileSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const closeNav = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setOpenMobileSections({});
  };

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setOpenMobileSections({});
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeNav();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const renderDropdownLink = (link, testIdPrefix, onNavigate) => {
    const linkActive = link.matchHrefs?.length
      ? link.matchHrefs.some((href) => isPathActive(location.pathname, href))
      : isPathActive(location.pathname, link.href);
    const Icon = getNavDropdownIcon(link.href, { pillar: link.pillar });

    return (
      <li key={`${link.label}-${link.href}`} role="none" className="ubuntu-nav-dropdown__item">
        <Link
          to={link.href}
          role="menuitem"
          onClick={onNavigate}
          data-testid={`${testIdPrefix}-dropdown-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
          className={`ubuntu-nav-dropdown__link${
            linkActive ? " ubuntu-nav-dropdown__link--active" : ""
          }`}
        >
          <Icon size={16} className="ubuntu-nav-dropdown__icon" aria-hidden />
          <span className="ubuntu-nav-dropdown__label">{link.label}</span>
        </Link>
      </li>
    );
  };

  const renderDesktopDropdown = (key, item, links) => {
    const { label, testId: testIdPrefix, dropdownVariant } = item;
    const sectionLinks = DROPDOWN_SECTION_LINKS[key] ?? links;
    const isActive = isNavSectionActive(location.pathname, item.basePath, sectionLinks);
    const dropdownClass = [
      "ubuntu-nav-dropdown",
      dropdownVariant === "wide" && "ubuntu-nav-dropdown--wide",
    ]
      .filter(Boolean)
      .join(" ");

    const menuId = `nav-dropdown-${testIdPrefix}`;

    return (
      <div
        key={key}
        className={[
          "ubuntu-nav-dropdown-group relative group",
          openDropdown === key && "is-open",
        ]
          .filter(Boolean)
          .join(" ")}
        onPointerEnter={() => setOpenDropdown(key)}
        onPointerLeave={() => setOpenDropdown(null)}
        onFocusCapture={() => setOpenDropdown(key)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setOpenDropdown(null);
        }}
      >
        <button
          type="button"
          data-testid={`nav-link-${testIdPrefix}`}
          className={`${navLinkClass(isActive)} ubuntu-nav-dropdown-group__trigger`}
          aria-label={`${label} menu`}
          aria-haspopup="menu"
          aria-expanded={openDropdown === key}
          aria-controls={menuId}
          onClick={() => setOpenDropdown(openDropdown === key ? null : key)}
        >
          {label}
          <ChevronDown size={14} className="ubuntu-nav-dropdown-group__chevron" aria-hidden />
        </button>
        <div className={dropdownClass} role="menu" aria-label={label} id={menuId}>
          <div className="ubuntu-nav-dropdown__panel">
            <ul className="ubuntu-nav-dropdown__list" role="none">
              {links.map((link) => renderDropdownLink(link, testIdPrefix, closeNav))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const renderMobileAccordion = (key, item, links) => {
    const { testId: testIdPrefix, label: title } = item;
    const isOpen = !!openMobileSections[key];
    const sectionLinks = DROPDOWN_SECTION_LINKS[key] ?? links;
    const sectionActive = isNavSectionActive(location.pathname, item.basePath, sectionLinks);

    const panelId = `nav-mobile-${testIdPrefix}`;

    return (
      <div key={key} className="border-b border-[var(--site-border)]">
        <button
          type="button"
          className={`ubuntu-nav-mobile-trigger flex w-full items-center justify-between py-3.5 text-left text-base font-medium text-white ${
            isOpen ? "ubuntu-nav-mobile-trigger--open" : ""
          }`}
          onClick={() => toggleMobileSection(key)}
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className={sectionActive && !isOpen ? "text-[#d1511f]" : ""}>{title}</span>
          <ChevronDown
            size={16}
            className={`ubuntu-nav-mobile-trigger__chevron ${isOpen ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
        {isOpen && (
          <div className="ubuntu-nav-mobile-panel" id={panelId}>
            <ul className="ubuntu-nav-dropdown__list" role="none">
              {links.map((link) => renderDropdownLink(link, testIdPrefix, closeNav))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  const renderDesktopNavItem = (key) => {
    const item = TOP_NAV[key];

    if (item.basePath) {
      return renderDesktopDropdown(key, item, DROPDOWN_NAV[key]);
    }

    return (
      <Link
        key={key}
        to={item.href}
        data-testid={`nav-link-${item.testId}`}
        className={navLinkClass(location.pathname.startsWith(item.href))}
        onClick={closeNav}
      >
        {item.label}
      </Link>
    );
  };

  const renderMobileNavItem = (key) => {
    const item = TOP_NAV[key];

    if (item.basePath) {
      return renderMobileAccordion(key, item, DROPDOWN_NAV[key]);
    }

    return (
      <Link
        key={key}
        to={item.href}
        onClick={closeNav}
        className={mobileLinkClass}
      >
        {item.label}
      </Link>
    );
  };

  const isSiteNav = embedded || shell;

  const headerClass = [
    "ubuntu-chrome-header",
    isSiteNav && "ubuntu-chrome-header--site-nav",
    shell && "ubuntu-chrome-header--fixed",
    shell && !isNavCentered && "ubuntu-chrome-header--at-top",
    shell && isNavCentered && "ubuntu-chrome-header--centered",
    shell && mobileOpen && isNavCentered && "ubuntu-chrome-header--menu-open",
    embedded && !shell && "sticky top-0 z-[100]",
    !isSiteNav && "sticky top-0 z-[100]",
  ]
    .filter(Boolean)
    .join(" ");

  const bar = (
    <>
      <div
        className={[
          "ubuntu-chrome-header__bar relative z-10 mx-auto flex h-16 items-center justify-between gap-4 xl:h-14",
          shell && isNavCentered && "ubuntu-chrome-header__bar--compact",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Link
          to="/"
          data-testid="header-logo"
          onClick={closeNav}
          className={[
            "ubuntu-chrome-header__logo-link",
            shell && isNavCentered && "ubuntu-chrome-header__logo-link--compact",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <img
            src={BRAND_LOGO_FULL}
            alt={BRAND_LOGO_ALT}
            className="ubuntu-chrome-header__logo ubuntu-chrome-header__logo--full"
            width={1160}
            height={215}
          />
          <img
            src={BRAND_LOGO_SYMBOL}
            alt={BRAND_LOGO_ALT}
            className="ubuntu-chrome-header__logo ubuntu-chrome-header__logo--symbol"
            width={469}
            height={532}
          />
        </Link>

        <nav
          className="mx-2 hidden flex-1 items-center justify-center xl:flex"
          aria-label="Main"
        >
          <div className="flex items-center gap-4 xl:gap-5">
            {TOP_NAV_ORDER.map(renderDesktopNavItem)}
          </div>
        </nav>

        <div
          className={[
            "ubuntu-chrome-header__actions flex shrink-0 items-center justify-end gap-3",
            shell && isNavCentered && "ubuntu-chrome-header__actions--compact",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <Link
            to={demoHref}
            data-testid="header-cta-button"
            className="ubuntu-btn-primary ubuntu-chrome-header__cta-desktop hidden xl:inline-flex"
          >
            {PRIMARY_NAV_CTA.label}
          </Link>

          <button
            data-testid="mobile-menu-toggle"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md p-2.5 text-white transition-colors hover:text-[#b8451a] xl:hidden"
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu-panel"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu-panel"
          data-testid="mobile-menu"
          className="ubuntu-chrome-header__mobile-menu relative z-10 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-[var(--site-border)] bg-[var(--site-bg-elevated)] px-4 pb-6 sm:px-6 xl:hidden xl:max-h-[calc(100vh-3.5rem)]"
        >
          {TOP_NAV_ORDER.map(renderMobileNavItem)}

          <Link
            to={demoHref}
            data-testid="mobile-cta-button"
            onClick={closeNav}
            className="ubuntu-btn-primary mt-6 w-full"
          >
            {PRIMARY_NAV_CTA.label}
          </Link>
        </div>
      )}
    </>
  );

  if (embedded || shell) {
    return (
      <header data-testid="header" className={headerClass}>
        {bar}
      </header>
    );
  }

  return (
    <header data-testid="header" className={headerClass}>
      {bar}
    </header>
  );
}
