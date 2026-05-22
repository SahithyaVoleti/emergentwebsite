/**
 * Dark stats band — same visual as homepage startup stats strip.
 */
export default function UbuntuStatsStrip({ stats = [], id = "page-stats", className = "" }) {
  if (!stats.length) return null;

  return (
    <section
      id={id}
      className={`ubuntu-stats-cta-strip border-y border-[#2a2a2a] ${className}`}
      aria-label="Program statistics"
    >
      <div className="ubuntu-stats-dots-layer" aria-hidden="true" />
      <div className="ubuntu-container relative z-10">
        <ul className="ubuntu-stats-cta-strip__grid grid grid-cols-2 justify-items-center gap-y-6 sm:grid-cols-3 lg:grid-cols-4">
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="ubuntu-stats-cta-strip__item flex w-full flex-col items-center text-center"
            >
              <p className="ubuntu-stats-cta-strip__value">{stat.value}</p>
              <p className="ubuntu-stats-cta-strip__label">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
