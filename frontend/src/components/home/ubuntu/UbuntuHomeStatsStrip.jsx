import { HOME_STARTUP_STATS } from "../../../data/homePageSections";

/**
 * Compact dark stats band — dotted animated background, no heading copy.
 */
export default function UbuntuHomeStatsStrip({ stats = HOME_STARTUP_STATS, id = "startup-stats" }) {
  if (!stats.length) return null;

  const colClass =
    stats.length <= 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : "sm:grid-cols-3 lg:grid-cols-5";

  return (
    <section
      id={id}
      data-testid="home-startup-stats"
      className="ubuntu-stats-cta-strip border-y border-[#2a2a2a]"
      aria-label="Program statistics"
    >
      <div className="ubuntu-stats-dots-layer" aria-hidden="true" />
      <div className="ubuntu-container relative z-10">
        <ul className={`ubuntu-stats-cta-strip__grid grid grid-cols-2 justify-items-center gap-y-6 ${colClass}`}>
          {stats.map((stat) => (
            <li key={stat.label} className="ubuntu-stats-cta-strip__item flex w-full flex-col items-center text-center">
              <p className="ubuntu-stats-cta-strip__value">{stat.value}</p>
              <p className="ubuntu-stats-cta-strip__label">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
