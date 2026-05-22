import { ArrowUp, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY_FOUNDED_LABEL } from "../lib/company";
import SectionPatternBackground from "./SectionPatternBackground";
import { usePatternSectionHover } from "../hooks/usePatternSectionHover";

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Applied ML", href: "/services/artificial-intelligence" },
      { label: "GenAI & Copilots", href: "/services/generative-ai" },
      { label: "Platform Engineering", href: "/services/custom-software" },
      { label: "AI Agents", href: "/services/ai-agents" },
      { label: "LLM Lifecycle", href: "/services/llm-development" },
      { label: "Data Platform", href: "/services/data-engineering" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Smriti", href: "/solutions/databrain-ai" },
      { label: "Arogya", href: "/solutions/medimind-ai" },
      { label: "Pratibha", href: "/solutions/talentify-ai" },
      { label: "Samvad", href: "/solutions/quikbiz-ai" },
      { label: "Kosha", href: "/solutions/intellibot-ai" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/#page-contact" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Education", href: "/industries/education" },
      { label: "FinTech", href: "/industries/fintech" },
      { label: "Commerce", href: "/industries/retail" },
      { label: "Industrial", href: "/industries/manufacturing" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms-and-conditions" },
  { label: "Legal", href: "/legal-templates" },
];

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
                src="/neuraltrix-logo.jpeg"
                alt="NeuralTrix AI"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="ubuntu-footer-meta max-w-xs text-sm leading-snug">
              Applied AI engineering and software delivery for enterprise programs.
            </p>
            <div className="mt-3 flex items-center gap-2.5" aria-label="Social links">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ubuntu-footer-social"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} aria-hidden />
              </a>
              <a
                href="https://twitter.com"
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

        <hr className="ubuntu-footer-rule my-6" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="ubuntu-footer-meta text-xs sm:text-[0.8125rem]">
            &copy; {new Date().getFullYear()} NeuralTrix AI · Established {COMPANY_FOUNDED_LABEL}
            <span className="mx-2 hidden text-[#333]/25 sm:inline" aria-hidden="true">
              |
            </span>
            <span className="mt-2 flex flex-wrap gap-x-4 gap-y-1 sm:mt-0 sm:inline-flex">
              {legalLinks.map((link) => (
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
