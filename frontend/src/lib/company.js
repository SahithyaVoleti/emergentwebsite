/** Canonical company facts used across marketing copy */
export const COMPANY_NAME = "NeuralTrix AI";
export const COMPANY_SHORT_NAME = "NeuralTrix";
export const COMPANY_FOUNDED_LABEL = "January 12, 2026";
export const COMPANY_FOUNDED_SHORT = "Jan 12, 2026";
export const COMPANY_LOGO_PATH = "/neuraltrix-logo.jpeg";

export const COMPANY_TAGLINE =
  "Applied AI engineering and software delivery for enterprise programs.";

export const PRIMARY_CTA_LABEL = "Start a pilot";
export const SECONDARY_CTA_LABEL = "View services";
export const COMPANY_PROOF_LINE =
  "Senior-led delivery · Pilot-scoped programs · Documented handover artifacts";

export const DEFAULT_PAGE_TITLE = `${COMPANY_NAME} | AI Consulting & Software Development`;
export const DEFAULT_META_DESCRIPTION =
  "NeuralTrix AI provides applied AI engineering, custom software, and enterprise AI delivery for organizations that require accountable execution and production-grade systems.";

/** One sentence for letter-style intros */
export const COMPANY_STARTUP_PITCH =
  "NeuralTrix AI provides applied AI engineering and software delivery for organizations that require accountable execution, documented outcomes, and production-grade systems.";

export const COMPANY_CONTACT = {
  email: "neuraltrixai@yahoo.com",
  phone: "+91 81424 38759",
  phoneE164: "918142438759",
  addressLine1: "N-Block, Vignan University",
  addressLine2: "Guntur, Andhra Pradesh, India",
};

export const COMPANY_SOCIAL = {
  linkedin: "https://www.linkedin.com/company/neuraltrix-ai",
  twitter: "https://twitter.com/neuraltrixai",
};

/** Use COMPANY_NAME on first mention; COMPANY_SHORT_NAME thereafter in body copy. */
export function formatCompanyName({ formal = false } = {}) {
  return formal ? COMPANY_NAME : COMPANY_SHORT_NAME;
}
