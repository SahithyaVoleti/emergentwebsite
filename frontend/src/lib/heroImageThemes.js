/**
 * High-resolution AI / enterprise IT hero imagery (Unsplash).
 * Used with HeroAnimatedBackdrop (Ken Burns + subtle “digital pulse”).
 * `ixlib` + `ixid` pattern matches Unsplash’s hotlink expectations and improves load reliability.
 */
export const hq = (photoPath) =>
  `https://images.unsplash.com/${photoPath}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80`;

/** Architecture / diagram-style visual for industry overview panels (not hero duplicate). */
export const INDUSTRY_ARCHITECTURE_IMAGE = hq("photo-1558494949-ef010cbdcc31");

/** Homepage: flagship abstract AI / neural aesthetic */
export const HOME_HERO_IMAGE = hq("photo-1677442136019-21780ecad995");

/** Fallback when `PageHero` is used without an `image` prop */
export const DEFAULT_PAGE_HERO_IMAGE = HOME_HERO_IMAGE;

/** Services listing (`/services`): engineering delivery & AI consulting */
export const SERVICES_LANDING_HERO_IMAGE = hq("photo-1518980120692-3cfe64c152d0");

/** Listing pages */
export const LISTING_PAGE_HERO_IMAGES = {
  /** Solutions: data intelligence & product innovation */
  solutions: hq("photo-1551288049-bebda4e38f71"),
  /** Industries: global enterprise connectivity */
  industries: hq("photo-1451187580459-43490279c0fa"),
  /** Case studies: outcomes & analytics */
  caseStudies: hq("photo-1460925895917-afdab827c52f"),
  /** Blog: engineering insights & editorial */
  blog: hq("photo-1517694712202-14dd9538aa97"),
  research: hq("photo-1555949963-aa79dcee981c"),
  services: SERVICES_LANDING_HERO_IMAGE,
};

/** Company pages */
export const ABOUT_HERO_IMAGE = hq("photo-1522071820081-4ef5e1c0b612");
export const CAREERS_HERO_IMAGE = hq("photo-1521737711867-e3b97375f902");

/** Product / solution detail pages — local product infographic assets */
export const SOLUTION_HERO_IMAGES = {
  "agent-kavacha": "/media/products/agent-kavacha.png",
  "agent-janseva": "/media/products/agent-janseva.png",
  "agent-shodh": "/media/products/agent-shodh.png",
  "agent-bhumi": "/media/products/agent-bhumi.png",
  "agent-vidya": "/media/products/agent-vidya.png",
  "agent-arogya": "/media/products/agent-arogya.png",
  "agent-yatra": "/media/products/agent-yatra.png",
  "agent-nyaya": "/media/products/agent-nyaya.png",
  "agent-artha": "/media/products/agent-artha.png",
  "agent-krishi": "/media/products/agent-krishi.png",
};

/**
 * Industry verticals; indices referenced by `industries` data (not strictly display order)
 */
export const INDUSTRY_HERO_IMAGES = [
  hq("photo-1556742049-0cfed4f6a45d"),
  hq("photo-1576091160399-112ba8d25d1d"),
  hq("photo-1563013544-824ae1b704d3"),
  hq("photo-1503676260728-1c00da094a0b"),
  hq("photo-1511512578047-dfb367046420"),
  hq("photo-1560518883-ce09059eeffa"),
  hq("photo-1581091226825-a6a2a5aee158"),
  hq("photo-1625246333195-78dbf3b962f5"),
  hq("photo-1532187863486-ab9ffa644140"),
  hq("photo-1450101499163-c8848c66ca85"),
];

/** Case study detail heroes — order matches `caseStudies` array. */
export const CASE_STUDY_HERO_IMAGES = [
  hq("photo-1503676260728-1c00da094a0b"),
  hq("photo-1576091160399-112ba8d25d1f"),
  hq("photo-1554224155-6726b3ff858f"),
  hq("photo-1441986300917-64674bd600d8"),
  hq("photo-1536240478700-b869070f9279"),
  hq("photo-1581091226825-a6a2a5aee158"),
  hq("photo-1560518883-ce09059eeffa"),
  hq("photo-1625246333195-78dbf3b962f5"),
  hq("photo-1532187863486-ab9ffa644140"),
  hq("photo-1450101499163-c8848c66ca85"),
];

/** Blog listing cards + article heroes */
export const BLOG_ARTICLE_HERO_IMAGES = {
  "augment-code-vs-cursor": hq("photo-1555949963-aa79dcee981c"),
  "claude-vs-chatgpt-coding": hq("photo-1677442136019-21780ecad995"),
  "top-vibe-coding-tools": hq("photo-1461749280684-dccba630e2f6"),
};

/**
 * Services listing heroes; order matches `services` array:
 * Applied AI, Generative AI, Custom software, Mobile, Agents, LLM, DevOps, Data
 *
 * Themes: neural/AI · generative robotics · IDE & code · mobile · automation/robotics ·
 * engineering workspace (LLM) · CI/CD & keyboards · analytics dashboards
 */
export const SERVICES_HERO_IMAGES = [
  hq("photo-1677442136019-21780ecad995"),
  hq("photo-1620712943543-bcc4688e7485"),
  hq("photo-1461749280684-dccba630e2f6"),
  hq("photo-1512941937669-90a1b58e7e9c"),
  hq("photo-1555949963-aa79dcee981c"),
  hq("photo-1517694712202-14dd9538aa97"),
  hq("photo-1558494949-ef010cbdcc31"),
  hq("photo-1551288049-bebda4e38f71"),
];
