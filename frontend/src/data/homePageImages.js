import {
  HOME_HERO_IMAGE,
  SERVICES_LANDING_HERO_IMAGE,
  LISTING_PAGE_HERO_IMAGES,
  ABOUT_HERO_IMAGE,
  SERVICES_HERO_IMAGES,
  SOLUTION_HERO_IMAGES,
  CASE_STUDY_HERO_IMAGES,
} from "../lib/heroImageThemes";

/** Section imagery for homepage split layouts (Unsplash, enterprise / AI themes). */
export const HOME_SECTION_IMAGES = {
  hero: {
    src: HOME_HERO_IMAGE,
    alt: "Abstract visualization of neural networks and data flows",
  },
  "enterprise-intro": {
    src: SERVICES_LANDING_HERO_IMAGE,
    alt: "Engineering team collaborating on software delivery",
  },
  blog: {
    src: LISTING_PAGE_HERO_IMAGES.blog,
    alt: "Developer workspace with code and technical documentation",
  },
  energize: {
    src: ABOUT_HERO_IMAGE,
    alt: "Professional team discussion in a modern office",
  },
  "artificial-intelligence": {
    src: SERVICES_HERO_IMAGES[0],
    alt: "Machine learning and applied AI engineering environment",
  },
  "generative-ai": {
    src: SERVICES_HERO_IMAGES[1],
    alt: "Generative AI and automation robotics concept",
  },
  "custom-software": {
    src: SERVICES_HERO_IMAGES[2],
    alt: "Software development and integrated engineering tools",
  },
  devops: {
    src: SERVICES_HERO_IMAGES[6],
    alt: "Platform engineering, CI/CD, and cloud infrastructure",
  },
  "data-engineering": {
    src: SERVICES_HERO_IMAGES[7],
    alt: "Data analytics dashboards and pipeline monitoring",
  },
  assurance: {
    src: SERVICES_HERO_IMAGES[5],
    alt: "Secure engineering workspace with governance controls",
  },
  "enterprise-efficiency": {
    src: LISTING_PAGE_HERO_IMAGES.caseStudies,
    alt: "Business analytics and measurable delivery outcomes",
  },
  "databrain-ai": {
    src: SOLUTION_HERO_IMAGES["databrain-ai"],
    alt: "Document intelligence and knowledge retrieval systems",
  },
  "medimind-ai": {
    src: SOLUTION_HERO_IMAGES["medimind-ai"],
    alt: "Healthcare technology and clinical workflow systems",
  },
  "intellibot-ai": {
    src: SOLUTION_HERO_IMAGES["intellibot-ai"],
    alt: "Enterprise knowledge search and semantic interfaces",
  },
  methodology: {
    src: CASE_STUDY_HERO_IMAGES[0],
    alt: "Structured delivery process from discovery through operations",
  },
  coverage: {
    src: LISTING_PAGE_HERO_IMAGES.industries,
    alt: "Enterprise connectivity across industries and stakeholders",
  },
  "next-step": {
    src: CASE_STUDY_HERO_IMAGES[1],
    alt: "Consultation and initiative planning with enterprise teams",
  },
};

export function getHomeSectionImage(id) {
  return HOME_SECTION_IMAGES[id] ?? null;
}
