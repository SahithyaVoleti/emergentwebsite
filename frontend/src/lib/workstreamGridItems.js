/** Map catalog workstream/subservice rows to icon-grid items. */
export function toWorkstreamGridItems(items = []) {
  return items.map((item) => ({
    title: item.title,
    href: item.href ?? (item.id ? `/services/${item.id}` : undefined),
    icon: item.icon,
  }));
}
