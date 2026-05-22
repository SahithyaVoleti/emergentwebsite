/**
 * Fixed top banner with horizontally scrolling notice text.
 */
const MESSAGE = "This website is currently under development. The content/images presented here is for reference purposes only and should not be considered final or legally valid.";

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
      <div className="flex w-max animate-marquee-ribbon items-center py-1">
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
      aria-live="polite"
      className={`ubuntu-chrome-ribbon w-full ${embedded ? "ubuntu-chrome-ribbon--embedded" : "relative z-[60]"}`}
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
