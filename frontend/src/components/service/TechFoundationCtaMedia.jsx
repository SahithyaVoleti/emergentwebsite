import { useEffect, useState } from "react";
import { BorderBeam } from "@/components/ui/border-beam";
import { getTechFoundationIcon } from "../../lib/techFoundationIcons";
import {
  getSimpleIconColoredImageUrl,
  getTechIconVisualKey,
  dedupeTechNamesByIcon,
  techNameToSimpleIconSlug,
} from "../../lib/serviceTechStackSlugs";
import MockupFrame from "../ubuntu/MockupFrame";

export function splitTechIntoColumns(items, columnCount = 3) {
  const unique = dedupeTechNamesByIcon(items);
  if (unique.length === 0) return [];

  const minPerColumn = 2;
  const maxColumns = Math.max(1, Math.floor(unique.length / minPerColumn));
  const effectiveColumns = Math.min(columnCount, maxColumns, unique.length);

  const buckets = Array.from({ length: effectiveColumns }, () => []);
  unique.forEach((item, index) => {
    buckets[index % effectiveColumns].push(item);
  });
  return buckets;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

function columnMarqueeClass(columnIndex) {
  const mod = columnIndex % 3;
  if (mod === 0) return "partner-marquee-v";
  if (mod === 1) return "partner-marquee-v partner-marquee-v-slow partner-marquee-v-reverse";
  return "partner-marquee-v partner-marquee-v-fast";
}

function TechFloatingCard({ name }) {
  const slug = techNameToSimpleIconSlug(name);
  const [imgFailed, setImgFailed] = useState(false);
  const Icon = getTechFoundationIcon(name);

  return (
    <div className="ubuntu-tech-foundation-cta__card" aria-label={name} title={name}>
      {slug && !imgFailed ? (
        <img
          src={getSimpleIconColoredImageUrl(slug)}
          alt=""
          className="ubuntu-tech-foundation-cta__card-img"
          loading="lazy"
          decoding="async"
          draggable={false}
          onError={() => setImgFailed(true)}
        />
      ) : (
        <Icon className="ubuntu-tech-foundation-cta__card-svg ubuntu-tech-foundation-cta__card-svg--fallback" />
      )}
    </div>
  );
}

function TechMarqueeColumn({ column, columnIndex, loopForAnimation }) {
  const items =
    loopForAnimation && column.length > 1 ? [...column, ...column] : column;

  return (
    <div
      className={`ubuntu-tech-foundation-cta__column ubuntu-tech-foundation-cta__column--${columnIndex}`}
    >
      <div
        className={`${columnMarqueeClass(columnIndex)} ubuntu-tech-foundation-cta__marquee${
          loopForAnimation && column.length > 1 ? "" : " ubuntu-tech-foundation-cta__marquee--static"
        }`}
      >
        {items.map((name, itemIndex) => (
          <TechFloatingCard
            key={`${getTechIconVisualKey(name)}-${itemIndex}`}
            name={name}
          />
        ))}
      </div>
    </div>
  );
}

function TechMarqueePanel({ columns, loopForAnimation }) {
  return (
    <div className="ubuntu-tech-foundation-cta__marquee-panel">
      <div className="ubuntu-tech-foundation-cta__glow" aria-hidden />
      <div
        className="ubuntu-tech-foundation-cta__columns"
        style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
      >
        {columns.map((column, columnIndex) => (
          <TechMarqueeColumn
            key={`col-${columnIndex}`}
            column={column}
            columnIndex={columnIndex}
            loopForAnimation={loopForAnimation}
          />
        ))}
      </div>
    </div>
  );
}

/** Browser mockup with scrolling tech stack cards (shared homepage + service CTA). */
export default function TechFoundationCtaMedia({ techNames = [] }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const uniqueNames = dedupeTechNamesByIcon(techNames);
  if (!uniqueNames.length) return null;

  const columns = splitTechIntoColumns(uniqueNames, 3);
  const loopForAnimation = !prefersReducedMotion;

  return (
    <div className="ubuntu-tech-foundation-cta__mockup relative overflow-hidden">
      <MockupFrame screenClassName="ubuntu-tech-foundation-cta__screen">
        <TechMarqueePanel columns={columns} loopForAnimation={loopForAnimation} />
      </MockupFrame>
      <BorderBeam duration={8} size={100} colorFrom="#8b1538" colorTo="#e8b4b8" borderWidth={2} />
    </div>
  );
}
