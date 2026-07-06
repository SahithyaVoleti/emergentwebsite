import { Link } from "react-router-dom";
import { Brain } from "lucide-react";
import { paletteAccentIndex } from "../../lib/brandPalette";
import { assignUniqueScopeIcons } from "../../lib/scopeDeliveryIcons";

function resolveHref(item) {
  if (item.href) return item.href;
  if (item.slug) return `/industries/${item.slug}`;
  return undefined;
}

function GridTile({ item, Icon, index, href, testId }) {
  const title = item.title ?? item.name;
  const tile = (
    <article
      className="ubuntu-scope-grid__card"
      data-palette-accent={paletteAccentIndex(index)}
    >
      <div className="ubuntu-scope-grid__icon-wrap" aria-hidden>
        <Icon className="ubuntu-scope-grid__icon ubuntu-palette-icon-fill" strokeWidth={1.5} />
      </div>
      <h3 className="ubuntu-scope-grid__card-title">{title}</h3>
    </article>
  );

  if (!href) return tile;

  return (
    <Link
      to={href}
      data-testid={testId}
      className="ubuntu-scope-grid__link group block h-full"
    >
      {tile}
    </Link>
  );
}

/**
 * Compact 2×4 icon grid — label only (no card chrome or descriptions).
 */
export default function ModuleIconGrid({
  items = [],
  fallbackIcon = Brain,
  className = "",
  listClassName = "",
}) {
  if (!items.length) return null;

  const icons = assignUniqueScopeIcons(items, fallbackIcon);
  const listClasses = ["ubuntu-scope-grid__list", listClassName, className].filter(Boolean).join(" ");

  return (
    <ul className={listClasses}>
      {items.map((item, index) => {
        const title = item.title ?? item.name;
        const href = resolveHref(item);
        const testId = item.testId ?? (item.slug ? `industry-link-${item.slug}` : undefined);

        return (
          <li key={item.id ?? item.slug ?? title}>
            <GridTile
              item={item}
              Icon={icons[index]}
              index={index}
              href={href}
              testId={testId}
            />
          </li>
        );
      })}
    </ul>
  );
}
