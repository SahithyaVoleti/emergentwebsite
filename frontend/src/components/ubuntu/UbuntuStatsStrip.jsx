import CountUpValue from "./CountUpValue";
import { nextSectionBandClass } from "../../lib/sectionBands";

/**
 * Light stats band — same visual as homepage startup stats strip.
 */
export default function UbuntuStatsStrip({
  stats = [],
  id = "page-stats",
  className = "",
  testId,
  animate = false,
}) {
  if (!stats.length) return null;

  const colClass =
    stats.length === 4
      ? "ubuntu-stats-cta-strip__grid--cols-4 sm:grid-cols-2 lg:grid-cols-4"
      : stats.length <= 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-3 lg:grid-cols-5";

  return (
    <section
      id={id}
      data-testid={testId}
      className={`ubuntu-stats-cta-strip ${nextSectionBandClass()} border-y border-[#dce8f5] ${className}`}
      aria-label="Program statistics"
    >
      <div className="ubuntu-container relative z-10">
        <ul
          className={`ubuntu-stats-cta-strip__grid grid grid-cols-2 justify-items-stretch gap-y-6 ${colClass}`}
        >
          {stats.map((stat) => (
            <li
              key={`${stat.value}-${stat.label}`}
              className="ubuntu-stats-cta-strip__item flex min-h-0 w-full flex-col items-center justify-center text-center"
            >
              <p className="ubuntu-stats-cta-strip__value">
                {animate ? <CountUpValue value={stat.value} /> : stat.value}
              </p>
              <p className="ubuntu-stats-cta-strip__label">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
