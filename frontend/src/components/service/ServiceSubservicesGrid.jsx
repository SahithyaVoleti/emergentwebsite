import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { SECTION_LABEL } from "../../data/sectionLabels";
import SectionEyebrow from "../ubuntu/SectionEyebrow";
import SectionTitle from "../ubuntu/SectionTitle";

const MAX_DELIVERABLES = 8;

/**
 * Enterprise capability scope — left navigation with structured detail panel.
 */
export default function ServiceSubservicesGrid({
  service,
  id = "scope-of-delivery",
  eyebrow = SECTION_LABEL.scope,
  title,
  lead = "Capability areas organized for accountable delivery—with defined scope, controls, and measurable outcomes per module.",
  className = "!border-t-0",
}) {
  const subs = service?.subservices ?? [];
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionTitle = title ?? `Capabilities for ${service.catalogTitle ?? service.title}`;
  const activeSub = subs[activeIndex] ?? subs[0];
  const deliverables = activeSub?.items ?? [];
  const visibleDeliverables = deliverables.slice(0, MAX_DELIVERABLES);
  const remainingCount = deliverables.length - visibleDeliverables.length;

  if (!subs.length) return null;

  return (
    <section
      id={id}
      className={`ubuntu-section-block ubuntu-capability-grid-section border-y border-[#d9d9d9] bg-white ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="ubuntu-container">
        <div className="mb-6 max-w-3xl sm:mb-8">
          {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
          <SectionTitle id={`${id}-heading`} className="!mb-2" title={sectionTitle} />
          {lead && <p className="ubuntu-lead mt-0">{lead}</p>}
        </div>

        <div className="ubuntu-capability-grid">
          <nav className="ubuntu-capability-grid__nav" aria-label="Capability areas">
            <ul className="ubuntu-capability-grid__nav-list">
              {subs.map((sub, index) => {
                const isActive = index === activeIndex;
                return (
                  <li key={sub.title}>
                    <button
                      type="button"
                      data-testid={`subservice-grid-card-${index}`}
                      className={[
                        "ubuntu-capability-grid__nav-item",
                        isActive && "ubuntu-capability-grid__nav-item--active",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => setActiveIndex(index)}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span className="ubuntu-capability-grid__nav-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="ubuntu-capability-grid__nav-label">{sub.title}</span>
                      <ChevronRight
                        size={16}
                        className="ubuntu-capability-grid__nav-chevron"
                        aria-hidden
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="ubuntu-capability-grid__detail">
            {activeSub && (
              <div key={activeIndex} className="ubuntu-capability-grid__detail-inner">
                <div className="ubuntu-capability-grid__detail-head">
                  <div className="ubuntu-capability-grid__detail-meta">
                    <p className="ubuntu-capability-grid__detail-eyebrow">
                      Capability {String(activeIndex + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <h3 className="ubuntu-capability-grid__detail-title">{activeSub.title}</h3>
                  {activeSub.desc && (
                    <p className="ubuntu-capability-grid__detail-lead">{activeSub.desc}</p>
                  )}
                </div>

                {visibleDeliverables.length > 0 && (
                  <div className="ubuntu-capability-grid__detail-card">
                    <h4 className="ubuntu-capability-grid__detail-card-title">Key deliverables</h4>
                    <ul className="ubuntu-capability-grid__detail-list">
                      {visibleDeliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {remainingCount > 0 && (
                      <p className="mt-3 text-xs text-[#7d8597]">
                        Plus {remainingCount} additional deliverable{remainingCount === 1 ? "" : "s"} in full engagement scope.
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
