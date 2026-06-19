import SiteNavLink from "./SiteNavLink";

export default function UbuntuLink({ to, children, className = "", muted = false, onClick, contactIntent }) {
  return (
    <SiteNavLink
      href={to}
      contactIntent={contactIntent}
      muted={muted}
      className={className}
      onClick={onClick}
    >
      {children}
    </SiteNavLink>
  );
}
