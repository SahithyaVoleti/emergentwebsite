/**
 * Site-wide development notice — scrolling marquee on all public pages.
 * Wording is intentionally non-reliance / non-offer; not legal advice.
 */
export const DEVELOPMENT_RIBBON_MESSAGE =
  "Official notice from the Office of the Chief Executive Officer, NeuralTrix AI: This website is published in a pre-release development phase and remains subject to revision. All narrative, visual assets, logos, and third-party references are interim placeholders furnished solely for design and stakeholder review. They shall not be construed as final product representations, commercial offers, or legally binding commitments. No party may rely upon this site for contractual, compliance, intellectual property, or licensing determinations.";

const MESSAGE = DEVELOPMENT_RIBBON_MESSAGE;

function ScrollingTrack() {
  const chunk = (
    <>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <span key={i} className="inline-block shrink-0 px-6">
          {MESSAGE}
          <span className="mx-3 text-[#999]" aria-hidden>
            ·
          </span>
        </span>
      ))}
    </>
  );

  return (
    <div className="h-9 w-full overflow-hidden">
      <div className="ubuntu-chrome-ribbon__track flex w-max animate-marquee-ribbon items-center py-1">
        <div className="flex shrink-0">{chunk}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {chunk}
        </div>
      </div>
    </div>
  );
}

export default function DevelopmentRibbon({ embedded = false }) {
  return (
    <div
      role="status"
      aria-label="Site development notice"
      aria-live="polite"
      data-testid="development-ribbon"
      className={`ubuntu-chrome-ribbon w-full ${
        embedded ? "ubuntu-chrome-ribbon--embedded" : "ubuntu-chrome-ribbon--fixed"
      }`}
    >
      <div className="hidden h-9 items-center justify-center px-4 motion-reduce:flex">
        <p className="ubuntu-chrome-ribbon__inner text-center text-xs font-normal sm:text-sm">{MESSAGE}</p>
      </div>
      <div className="motion-reduce:hidden">
        <ScrollingTrack />
      </div>
    </div>
  );
}
