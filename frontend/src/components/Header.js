import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      data-testid="header"
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-slate-200"
    >
      <div className="relative flex items-center justify-between h-16 w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <Link
          to="/"
          data-testid="header-logo"
          className="relative z-10 text-xl font-extrabold tracking-tighter truncate max-w-[45%] sm:max-w-none"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif", color: "#0B1B3D" }}
        >
          NeuralTrix AI
        </Link>

        <nav
          className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex lg:items-center lg:gap-4 xl:gap-6"
          aria-label="Main"
        >
          <div className="pointer-events-auto flex items-center gap-4 xl:gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  location.pathname.startsWith(l.href)
                    ? "text-[#2563EB]"
                    : "text-slate-600 hover:text-[#0B1B3D]"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="relative z-10 flex items-center justify-end gap-2 shrink-0">
          <Button
            data-testid="header-cta-button"
            asChild
            className="hidden lg:inline-flex bg-[#0B1B3D] text-white hover:bg-[#0B1B3D]/90 rounded-sm px-4 xl:px-5 py-2 text-sm font-semibold"
          >
            <Link to={location.pathname === "/" ? "/#contact" : "/contact"}>Talk to AI Experts</Link>
          </Button>
          <button
            data-testid="mobile-menu-toggle"
            className="lg:hidden p-2 text-[#0B1B3D]"
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
        <div data-testid="mobile-menu" className="lg:hidden bg-white border-t border-slate-200 px-4 sm:px-6 lg:px-10 xl:px-14 pb-6">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-slate-600 hover:text-[#0B1B3D] border-b border-slate-100"
            >
              {l.label}
            </Link>
          ))}
          <Button
            data-testid="mobile-cta-button"
            asChild
            className="w-full mt-4 bg-[#0B1B3D] text-white hover:bg-[#0B1B3D]/90 rounded-sm text-sm font-semibold"
          >
            <Link to="/" onClick={() => setMobileOpen(false)}>Talk to AI Experts</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
