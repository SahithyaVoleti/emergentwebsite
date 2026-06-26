import SitePageChrome from "./ubuntu/SitePageChrome";
import UbuntuLightSplitHero from "./ubuntu/UbuntuLightSplitHero";
import { getSiteMockup } from "../data/siteMockups";
import {
  ABOUT_HERO_IMAGE,
  CAREERS_HERO_IMAGE,
  DEFAULT_PAGE_HERO_IMAGE,
  LISTING_PAGE_HERO_IMAGES,
} from "../lib/heroImageThemes";
import { DECORATIVE_ALT } from "../lib/decorativeMedia";

const ILLUSTRATION_KEY_IMAGES = {
  blog: LISTING_PAGE_HERO_IMAGES.blog,
  research: LISTING_PAGE_HERO_IMAGES.research,
  industries: LISTING_PAGE_HERO_IMAGES.industries,
  caseStudies: LISTING_PAGE_HERO_IMAGES.caseStudies,
  solutions: LISTING_PAGE_HERO_IMAGES.solutions,
  services: LISTING_PAGE_HERO_IMAGES.services,
  careers: CAREERS_HERO_IMAGE,
  about: ABOUT_HERO_IMAGE,
};

const ILLUSTRATION_KEY_MOCKUPS = {
  blog: "chat",
  research: "pipeline",
  industries: "cloud",
  caseStudies: "dashboard",
  solutions: "pipeline",
  services: "code",
  careers: "careers",
  about: "collaboration",
};

function resolveHeroMedia({ image, video, illustrationKey, alt, variant }) {
  if (video) {
    return {
      src: video,
      alt: alt ?? DECORATIVE_ALT,
      mediaType: "video",
      variant,
    };
  }

  if (image) {
    return {
      src: image,
      alt: alt ?? DECORATIVE_ALT,
      mediaType: "image",
      variant,
    };
  }

  if (illustrationKey) {
    const mockupKey = ILLUSTRATION_KEY_MOCKUPS[illustrationKey];
    if (mockupKey) {
      const mockup = getSiteMockup(mockupKey);
      return {
        src: mockup.src,
        alt: mockup.alt,
        mediaType: mockup.mediaType ?? "image",
        playOnce: mockup.playOnce,
      };
    }

    const fallbackImage = ILLUSTRATION_KEY_IMAGES[illustrationKey];
    if (fallbackImage) {
      return {
        src: fallbackImage,
        alt: alt ?? DECORATIVE_ALT,
        mediaType: "image",
      };
    }
  }

  return {
    src: DEFAULT_PAGE_HERO_IMAGE,
    alt: alt ?? DECORATIVE_ALT,
    mediaType: "image",
  };
}

/**
 * Standard page hero — homepage light-split layout across all routes.
 * @param {"primary" | "detail" | "utility"} [significance]
 */
export default function PageHero({
  image,
  video,
  illustrationKey,
  imageVariant,
  significance = "primary",
  label,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  hideContent,
  alt,
}) {
  const media =
    significance === "utility"
      ? null
      : resolveHeroMedia({ image, video, illustrationKey, alt, variant: imageVariant });

  return (
    <SitePageChrome
      variant="light-split"
      significance={significance}
    >
      <UbuntuLightSplitHero
        embedded
        significance={significance}
        badge={label}
        title={title}
        description={description}
        primaryCTA={primaryCTA}
        secondaryCTA={secondaryCTA}
        media={media}
        hideContent={hideContent}
      />
    </SitePageChrome>
  );
}
