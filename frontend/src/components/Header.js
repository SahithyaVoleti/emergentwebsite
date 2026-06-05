import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { getNavDropdownIcon, NAV_VIEW_ALL_ICON } from "../data/navDropdownIcons";
import { useSiteNavScroll } from "../hooks/useSiteNavScroll";
import { usePatternSectionHover } from "../hooks/usePatternSectionHover";
import SectionPatternBackground from "./SectionPatternBackground";
import { CONTACT_TOPIC, contactFormTo } from "../lib/contactIntent";
import {
  SERVICES_NAV,
  PRODUCTS_NAV,
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
  "block border-b border-[#e5e5e5] py-3 text-sm text-[#333] hover:text-[#8b1538]";

const DROPDOWN_NAV = {
  services: SERVICES_NAV,
  products: PRODUCTS_NAV,
  industries: INDUSTRIES_NAV,
  company: COMPANY_NAV,
};

export default function Header({ embedded = false, shell = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSections, setOpenMobileSections] = useState({});
  const location = useLocation();
  const isNavCentered = useSiteNavScroll(shell);
  const { sectionRef: navRef, onPointerMove, onPointerLeave } = usePatternSectionHover();

  const demoHref = contactFormTo(
    location.pathname,
    PRIMARY_NAV_CTA.topic === "consultation"
      ? CONTACT_TOPIC.CONSULTATION
      : CONTACT_TOPIC.CONTACT
  );

  const toggleMobileSection = (key) => {
    setOpenMobileSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderDropdownLink = (link, testIdPrefix, onNavigate) => {
    const linkActive = isPathActive(location.pathname, link.href);
    const Icon = getNavDropdownIcon(link.href);

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
    const { label, basePath, testId: testIdPrefix, viewAllLabel, dropdownVariant } = item;
    const isActive = isNavSectionActive(location.pathname, basePath, links);
    const ViewAllIcon = NAV_VIEW_ALL_ICON;
    const dropdownClass =
      dropdownVariant === "wide" ? "ubuntu-nav-dropdown ubuntu-nav-dropdown--wide" : "ubuntu-nav-dropdown";

    return (
      <div key={key} className="ubuntu-nav-dropdown-group relative group">
        <button
          type="button"
          data-testid={`nav-link-${testIdPrefix}`}
          className={`${navLinkClass(isActive)} ubuntu-nav-dropdown-group__trigger`}
          aria-label={`${label} menu`}
          aria-haspopup="menu"
        >
          {label}
          <ChevronDown size={14} className="ubuntu-nav-dropdown-group__chevron" aria-hidden />
        </button>
        <div className={dropdownClass} role="menu" aria-label={label}>
          <div className="ubuntu-nav-dropdown__panel">
            <ul className="ubuntu-nav-dropdown__list" role="none">
              {links.map((link) => renderDropdownLink(link, testIdPrefix))}
            </ul>
            <div className="ubuntu-nav-dropdown__separator" role="separator" />
            <Link
              to={basePath}
              role="menuitem"
              data-testid={`${testIdPrefix}-dropdown-view-all`}
              className="ubuntu-nav-dropdown__link ubuntu-nav-dropdown__view-all"
            >
              <ViewAllIcon size={16} className="ubuntu-nav-dropdown__icon" aria-hidden />
              <span className="ubuntu-nav-dropdown__label">{viewAllLabel}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const renderMobileAccordion = (key, item, links) => {
    const { basePath, testId: testIdPrefix, viewAllLabel, label: title } = item;
    const isOpen = !!openMobileSections[key];
    const sectionActive = isNavSectionActive(location.pathname, basePath, links);
    const ViewAllIcon = NAV_VIEW_ALL_ICON;

    return (
      <div key={key} className="border-b border-[#e5e5e5]">
        <button
          type="button"
          className={`ubuntu-nav-mobile-trigger flex w-full items-center justify-between py-3 text-left text-sm font-medium ${
            isOpen ? "ubuntu-nav-mobile-trigger--open" : "text-[#333]"
          }`}
          onClick={() => toggleMobileSection(key)}
          aria-expanded={isOpen}
        >
          <span className={sectionActive && !isOpen ? "text-[#8b1538]" : ""}>{title}</span>
          <ChevronDown
            size={16}
            className={`ubuntu-nav-mobile-trigger__chevron ${isOpen ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
        {isOpen && (
          <div className="ubuntu-nav-mobile-panel">
            <ul className="ubuntu-nav-dropdown__list" role="none">
              {links.map((link) => renderDropdownLink(link, testIdPrefix, () => setMobileOpen(false)))}
            </ul>
            <div className="ubuntu-nav-dropdown__separator" role="separator" />
            <Link
              to={basePath}
              onClick={() => setMobileOpen(false)}
              data-testid={`${testIdPrefix}-dropdown-view-all`}
              className="ubuntu-nav-dropdown__link ubuntu-nav-dropdown__view-all"
            >
              <ViewAllIcon size={16} className="ubuntu-nav-dropdown__icon" aria-hidden />
              <span className="ubuntu-nav-dropdown__label">{viewAllLabel}</span>
            </Link>
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
        onClick={() => setMobileOpen(false)}
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
            src="/neuraltrix-logo.jpeg"
            alt="NeuralTrix AI"
            className="h-8 w-auto object-contain"
          />
        </Link>

        <nav className="mx-2 hidden flex-1 items-center justify-center xl:flex" aria-label="Main">
          <div className="flex items-center gap-4 xl:gap-5">
            {TOP_NAV_ORDER.map(renderDesktopNavItem)}
          </div>
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-3">
          <Link
            to={demoHref}
            data-testid="header-cta-button"
            className="ubuntu-btn-primary ubuntu-chrome-header__cta-desktop hidden xl:inline-flex"
          >
            {PRIMARY_NAV_CTA.label}
          </Link>

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
          {TOP_NAV_ORDER.map(renderMobileNavItem)}

          <Link
            to={demoHref}
            data-testid="mobile-cta-button"
            onClick={() => setMobileOpen(false)}
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
