/**
 * Engagement CTA directly below the homepage hero — static layout (no scroll-driven slide).
 */
export default function UbuntuHomeHeroStack({ cta }) {
  return (
    <div className="ubuntu-hero-stack" data-testid="home-hero-stack">
      {cta}
    </div>
  );
}
