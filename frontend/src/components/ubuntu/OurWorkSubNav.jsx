import { NavLink, useLocation } from "react-router-dom";
import { OUR_WORK_NAV, isOurWorkNavActive } from "../../data/ourWorkNav";

/** Sub-navigation for Our Work — Products and Case Studies. */
export default function OurWorkSubNav({ className = "" }) {
  const { pathname } = useLocation();

  return (
    <nav
      className={["our-work-subnav", className].filter(Boolean).join(" ")}
      aria-label="Our Work sections"
    >
      <ul className="our-work-subnav__list">
        {OUR_WORK_NAV.map((item) => {
          const active = isOurWorkNavActive(pathname, item);
          return (
            <li key={item.href}>
              <NavLink
                to={item.href}
                end={item.href === "/our-work"}
                className={`our-work-subnav__link${active ? " our-work-subnav__link--active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
