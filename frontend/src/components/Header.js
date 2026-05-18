import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CONTACT_TOPIC, contactFormTo } from "../lib/contactIntent";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";
import services from "../data/services";
import solutions from "../data/solutions";
import industries from "../data/industries";

const servicesLinks = services.map((s) => ({ label: s.title, href: `/services/${s.slug}` }));

const solutionsLinks = solutions.map((s) => ({ label: s.title, href: `/solutions/${s.slug}` }));

const industriesLinks = industries.map((i) => ({ label: i.title, href: `/industries/${i.slug}` }));

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Technology Partners", href: "/partners" },
  { label: "Security", href: "/security" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Legal Templates", href: "/legal-templates" },
  { label: "Careers", href: "/careers" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const renderDesktopDropdown = (label, links, basePath) => {
    const isActive = location.pathname.startsWith(basePath);

    return (
      <div className="relative group">
        <button
          type="button"
          data-testid={`nav-link-${label.toLowerCase()}`}
          className={`inline-flex items-center gap-1 text-[15px] font-semibold transition-colors whitespace-nowrap ${
            isActive ? "text-[#0052CC]" : "text-[#42526E] group-hover:text-[#172B4D]"
          }`}
        >
          {label}
          <ChevronDown size={14} className="transition-transform group-hover:rotate-180 opacity-70" />
        </button>
        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-0 mt-2 w-64 rounded-md border border-slate-200 bg-white shadow-xl p-2 z-50 max-h-[70vh] overflow-y-auto">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              data-testid={`${label.toLowerCase()}-dropdown-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              className={`block rounded-md px-3 py-2 text-[14px] transition-colors ${
                location.pathname === link.href
                  ? "text-[#0052CC] bg-blue-50 font-semibold"
                  : "text-[#42526E] hover:text-[#172B4D] hover:bg-slate-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <header
      data-testid="header"
      className="sticky top-0 z-[100] backdrop-blur-xl bg-white/95 border-b border-slate-200/80 shadow-sm"
    >
      <div className="relative flex items-center justify-between h-16 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <Link
          to="/"
          data-testid="header-logo"
          className="relative z-10 flex items-center shrink-0"
        >
          <img 
            src="/neuraltrix-logo.jpeg" 
            alt="NeuralTrix AI" 
            className="h-8 w-auto object-contain"
          />
        </Link>

        <nav
          className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 xl:flex xl:items-center xl:gap-8"
          aria-label="Main"
        >
          <div className="pointer-events-auto flex items-center gap-6 xl:gap-8">
            {renderDesktopDropdown("Service Portfolio", servicesLinks, "/services")}
            {renderDesktopDropdown("System Solutions", solutionsLinks, "/solutions")}
            {renderDesktopDropdown("Industries Served", industriesLinks, "/industries")}
            {(() => {
              const companyActive = companyLinks.some((l) => location.pathname.startsWith(l.href));
              return (
                <div className="relative group">
                  <button
                    type="button"
                    data-testid="nav-link-company"
                    className={`inline-flex items-center gap-1 text-[15px] font-semibold transition-colors whitespace-nowrap ${
                      companyActive ? "text-[#0052CC]" : "text-[#42526E] group-hover:text-[#172B4D]"
                    }`}
                  >
                    Corporate Identity
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180 opacity-70" />
                  </button>
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-0 mt-2 w-64 rounded-md border border-slate-200 bg-white shadow-xl p-2 z-50 max-h-[70vh] overflow-y-auto">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        data-testid={`company-dropdown-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                        className={`block rounded-md px-3 py-2 text-[14px] transition-colors ${
                          location.pathname.startsWith(link.href)
                            ? "text-[#0052CC] bg-blue-50 font-semibold"
                            : "text-[#42526E] hover:text-[#172B4D] hover:bg-slate-50"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })()}
            {(() => {
              const isActive = location.pathname.startsWith("/blog");
              return (
                <Link
                  to="/blog"
                  data-testid="nav-link-blog"
                  className={`text-[15px] font-semibold transition-colors whitespace-nowrap ${
                    isActive ? "text-[#0052CC]" : "text-[#42526E] hover:text-[#172B4D]"
                  }`}
                >
                  Technical Insights
                </Link>
              );
            })()}
          </div>
        </nav>

        <div className="relative z-10 flex items-center justify-end gap-3 shrink-0">
          <Button
            data-testid="header-cta-button"
            asChild
            className="bg-[#0052CC] text-white hover:bg-[#0052CC]/90 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold shadow-lg shadow-blue-500/10 transition-all hover:scale-105 active:scale-95"
          >
            <Link 
              to="/#page-contact"
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  document.getElementById("page-contact")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact us
            </Link>
          </Button>
          <button
            data-testid="mobile-menu-toggle"
            className="xl:hidden p-2 text-[#172B4D] hover:bg-slate-50 rounded-md transition-colors"
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div 
          data-testid="mobile-menu" 
          className="xl:hidden bg-white border-t border-slate-200 px-4 sm:px-6 pb-6 max-h-[calc(100vh-4.5rem)] overflow-y-auto shadow-inner"
        >
          <div className="pt-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider py-2">Service Portfolio</p>
            {servicesLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 pl-3 text-sm font-semibold text-[#42526E] hover:text-[#0052CC] border-b border-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider py-2">System Solutions</p>
            {solutionsLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 pl-3 text-sm font-semibold text-[#42526E] hover:text-[#0052CC] border-b border-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider py-2">Industries Served</p>
            {industriesLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 pl-3 text-sm font-semibold text-[#42526E] hover:text-[#0052CC] border-b border-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider py-2">Corporate Identity</p>
            {companyLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 pl-3 text-sm font-semibold text-[#42526E] hover:text-[#0052CC] border-b border-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            to="/blog"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-sm font-semibold text-[#42526E] hover:text-[#0052CC] border-b border-slate-100"
          >
            Technical Insights
          </Link>
          <Button
            data-testid="mobile-cta-button"
            asChild
            className="w-full mt-4 bg-[#0052CC] text-white hover:bg-[#0052CC]/90 rounded-full py-3 text-base font-bold shadow-lg shadow-blue-500/10"
          >
            <Link
              to="/#page-contact"
              onClick={() => {
                setMobileOpen(false);
                setTimeout(() => {
                  document.getElementById("page-contact")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
            >
              Contact us
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
