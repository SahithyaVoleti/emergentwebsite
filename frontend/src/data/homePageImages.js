import {
  HOME_HERO_IMAGE,
  SERVICES_LANDING_HERO_IMAGE,
  LISTING_PAGE_HERO_IMAGES,
  ABOUT_HERO_IMAGE,
  SERVICES_HERO_IMAGES,
  SOLUTION_HERO_IMAGES,
  CASE_STUDY_HERO_IMAGES,
} from "../lib/heroImageThemes";
import { DECORATIVE_ALT } from "../lib/decorativeMedia";

/** Section imagery for homepage split layouts. */
export const HOME_SECTION_IMAGES = {
  hero: { src: HOME_HERO_IMAGE, alt: DECORATIVE_ALT },
  "enterprise-intro": { src: SERVICES_LANDING_HERO_IMAGE, alt: DECORATIVE_ALT },
  blog: { src: LISTING_PAGE_HERO_IMAGES.blog, alt: DECORATIVE_ALT },
  energize: { src: ABOUT_HERO_IMAGE, alt: DECORATIVE_ALT },
  "artificial-intelligence": { src: SERVICES_HERO_IMAGES[0], alt: DECORATIVE_ALT },
  "generative-ai": { src: SERVICES_HERO_IMAGES[1], alt: DECORATIVE_ALT },
  "custom-software": { src: SERVICES_HERO_IMAGES[2], alt: DECORATIVE_ALT },
  devops: { src: SERVICES_HERO_IMAGES[6], alt: DECORATIVE_ALT },
  "data-engineering": { src: SERVICES_HERO_IMAGES[7], alt: DECORATIVE_ALT },
  assurance: { src: SERVICES_HERO_IMAGES[5], alt: DECORATIVE_ALT },
  "enterprise-efficiency": { src: LISTING_PAGE_HERO_IMAGES.caseStudies, alt: DECORATIVE_ALT },
  "agent-kavacha": { src: SOLUTION_HERO_IMAGES["agent-kavacha"], alt: "Agent Kavacha — real-time transaction monitoring" },
  "agent-arogya": { src: SOLUTION_HERO_IMAGES["agent-arogya"], alt: "Agent Arogya — clinical documentation" },
  "agent-vidya": { src: SOLUTION_HERO_IMAGES["agent-vidya"], alt: "Agent Vidya — educator copilot" },
  methodology: { src: CASE_STUDY_HERO_IMAGES[0], alt: DECORATIVE_ALT },
  coverage: { src: LISTING_PAGE_HERO_IMAGES.industries, alt: DECORATIVE_ALT },
  "next-step": { src: CASE_STUDY_HERO_IMAGES[1], alt: DECORATIVE_ALT },
};

export function getHomeSectionImage(id) {
  return HOME_SECTION_IMAGES[id] ?? null;
}
