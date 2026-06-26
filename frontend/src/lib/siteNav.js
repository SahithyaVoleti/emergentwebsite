import services, { servicesForDisplay } from "../data/services";
import solutions from "../data/solutions";
import industries from "../data/industries";
import { getSolutionNavLabel } from "./solutionDisplay";

export const serviceNavLinks = servicesForDisplay(services).map((service) => ({
  label: service.title,
  href: `/services/${service.slug}`,
}));

export const solutionNavLinks = solutions.map((solution) => ({
  label: getSolutionNavLabel(solution),
  href: `/solutions/${solution.slug}`,
}));

export const industryNavLinks = industries.map((industry) => ({
  label: industry.title,
  href: `/industries/${industry.slug}`,
}));

/** Shared company destinations — single source for header and footer. */
export const companyNavLinks = [
  { label: "About", href: "/about", headerLabel: "About Us" },
  {
    label: "Research & Innovation",
    href: "/research-innovation",
    headerLabel: "Research & Innovation",
  },
  { label: "Blog", href: "/blog", headerLabel: "News & Media" },
  { label: "Contact", href: "/#page-contact" },
];

export const headerCompanyLinks = [
  ...companyNavLinks.map(({ label, href, headerLabel }) => ({
    label: headerLabel ?? label,
    href,
  })),
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export const footerCompanyLinks = companyNavLinks.map(({ label, href }) => ({ label, href }));

export const footerLegalLinks = [
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms-and-conditions" },
];

export const footerColumns = [
  { title: "Services", links: serviceNavLinks },
  { title: "Solutions", links: solutionNavLinks },
  { title: "Company", links: footerCompanyLinks },
  { title: "Industries", links: industryNavLinks },
];

/** @deprecated Use serviceNavLinks */
export const footerServiceLinks = serviceNavLinks;
/** @deprecated Use solutionNavLinks */
export const footerSolutionLinks = solutionNavLinks;
/** @deprecated Use industryNavLinks */
export const footerIndustryLinks = industryNavLinks;
