/** Our Work hub — sub-navigation for Products and Case Studies. */
export const OUR_WORK_NAV = [
  { label: "Overview", href: "/our-work", matchPaths: ["/our-work"] },
  {
    label: "Products",
    href: "/our-work/products",
    matchPaths: ["/our-work/products"],
  },
  {
    label: "Case Studies",
    href: "/our-work/case-studies",
    matchPaths: ["/our-work/case-studies"],
  },
];

export function isOurWorkNavActive(pathname, item) {
  const path = pathname.replace(/\/$/, "") || "/";
  return item.matchPaths.some((match) => {
    const base = match.replace(/\/$/, "") || "/";
    if (item.href === "/our-work") {
      return path === base;
    }
    return path === base || path.startsWith(`${base}/`);
  });
}
