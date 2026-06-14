import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { SECTION_LABEL } from "../../data/sectionLabels";

function splitItems(items = []) {
  const mid = Math.ceil(items.length / 2);
  return {
    scope: items.slice(0, mid),
    governance: items.slice(mid),
  };
}

function buildAgentNote(cap) {
  const deploys = cap.deploysIn
    ? `Deploys inside ${cap.deploysIn}. `
    : "";
  return `${deploys}We customize this industry ready agent to your applications, permissions, and approval rules before production rollout.`;
}

function buildEngagementNote(cap, serviceTitle) {
  const track = serviceTitle ? `${serviceTitle} programs` : "this service track";
  return `Within ${track}, the ${cap.title} module is scoped with defined inputs, acceptance tests, and handover artifacts. We align milestones to your integration surface, data boundaries, and operational ownership before build begins.`;
}

function buildOutcomesNote(cap) {
  return `Teams typically measure progress on ${cap.title.toLowerCase()} through agreed offline metrics, integration checkpoints, and production readiness gates tied to your risk profile.`;
}

/**
 * Homepage-style capability band — left nav list + rich detail panel (Ubuntu theme).
 */
export default function UbuntuCapabilityGrid({
  capabilities = [],
  eyebrow = SECTION_LABEL.modules,
  title = "Functional capabilities",
  lead,
  id = "capabilities",
  variant = "alt",
  className = "",
  serviceTitle,
  serviceIcon: ServiceIcon,
  detailImage,
  contactHref = "#page-contact",
  presentation = "module",
}) {
  const [active, setActive] = useState(0);
  if (!capabilities?.length) return null;

  const activeCap = capabilities[active] ?? capabilities[0];
  const detailItems = activeCap.items ?? [];
  const { scope, governance } = splitItems(detailItems);
  const isIndustryAgent = presentation === "industry-agent";
  const itemLabel = isIndustryAgent ? "Agent" : "Module";
  const itemIndex = String(active + 1).padStart(2, "0");
  const itemTotal = String(capabilities.length).padStart(2, "0");

  const sectionClass = [
    "ubuntu-section-block border-b border-[#d9d9d9]",
    variant === "alt" ? "ubuntu-section--alt" : "bg-white",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={sectionClass} aria-labelledby={`${id}-heading`}>
      <div className="ubuntu-container">
        <div className="max-w-3xl text-left">
          {eyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#666]">
              {eyebrow}
            </p>
          )}
          <h2 id={`${id}-heading`} className="ubuntu-section-title text-[#111]">
            {title}
          </h2>
          {lead && <p className="ubuntu-lead mt-4 max-w-3xl text-[#333]">{lead}</p>}
        </div>

        <div className="ubuntu-capability-grid mt-8">
          <nav
            className="ubuntu-capability-grid__nav"
            aria-label={isIndustryAgent ? "Industry ready agents" : "Service modules"}
          >
            <ul className="ubuntu-capability-grid__nav-list">
              {capabilities.map((cap, i) => {
                const isActive = active === i;
                const indexLabel = String(i + 1).padStart(2, "0");

                return (
                  <li key={cap.title ?? i}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-current={isActive ? "true" : undefined}
                      className={`ubuntu-capability-grid__nav-item${
                        isActive ? " ubuntu-capability-grid__nav-item--active" : ""
                      }`}
                    >
                      <span className="ubuntu-capability-grid__nav-index" aria-hidden>
                        {indexLabel}
                      </span>
                      <span className="ubuntu-capability-grid__nav-label">{cap.title}</span>
                      <ChevronRight
                        size={16}
                        strokeWidth={2}
                        className="ubuntu-capability-grid__nav-chevron"
                        aria-hidden
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <article
            key={activeCap.title}
            className="ubuntu-capability-grid__detail"
            aria-labelledby={`${id}-detail-heading`}
          >
            <div className="ubuntu-capability-grid__detail-inner">
              <header className="ubuntu-capability-grid__detail-head">
                <div className="ubuntu-capability-grid__detail-meta">
                  {ServiceIcon && (
                    <span className="ubuntu-capability-grid__detail-icon" aria-hidden>
                      <ServiceIcon size={18} strokeWidth={2} />
                    </span>
                  )}
                  <p className="ubuntu-capability-grid__detail-eyebrow">
                    {itemLabel} {itemIndex} of {itemTotal}
                  </p>
                </div>
                <h3 id={`${id}-detail-heading`} className="ubuntu-capability-grid__detail-title">
                  {activeCap.title}
                </h3>
                {activeCap.desc && (
                  <p className="ubuntu-capability-grid__detail-lead">{activeCap.desc}</p>
                )}
                {isIndustryAgent ? (
                  <p className="ubuntu-capability-grid__detail-body">
                    {buildAgentNote(activeCap)}
                  </p>
                ) : (
                  <>
                    <p className="ubuntu-capability-grid__detail-body">
                      {buildEngagementNote(activeCap, serviceTitle)}
                    </p>
                    <p className="ubuntu-capability-grid__detail-body">
                      {buildOutcomesNote(activeCap)}
                    </p>
                  </>
                )}
              </header>

              {detailItems.length > 0 && (
                <div className="ubuntu-capability-grid__detail-columns">
                  <div className="ubuntu-capability-grid__detail-card">
                    <h4 className="ubuntu-capability-grid__detail-card-title">Scope includes</h4>
                    <ul className="ubuntu-capability-grid__detail-list">
                      {scope.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="ubuntu-capability-grid__detail-card">
                    <h4 className="ubuntu-capability-grid__detail-card-title">
                      Governance and handover
                    </h4>
                    <ul className="ubuntu-capability-grid__detail-list">
                      {governance.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {detailImage && (
                <div className="ubuntu-capability-grid__detail-visual">
                  <img
                    src={detailImage}
                    alt=""
                    className="ubuntu-capability-grid__detail-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="ubuntu-capability-grid__detail-visual-copy">
                    <p className="ubuntu-capability-grid__detail-card-title">Delivery context</p>
                    <p className="ubuntu-capability-grid__detail-visual-text">
                      Each module maps to a defined workstream with documented boundaries,
                      integration points, and acceptance criteria before production promotion.
                    </p>
                  </div>
                </div>
              )}

              <div className="ubuntu-capability-grid__detail-cta">
                <Link to={contactHref} className="ubuntu-btn-primary">
                  Discuss {activeCap.title}
                </Link>
                <Link to={contactHref} className="ubuntu-link-muted">
                  {isIndustryAgent ? "Request this industry ready agent" : "Request a scoped briefing"}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
