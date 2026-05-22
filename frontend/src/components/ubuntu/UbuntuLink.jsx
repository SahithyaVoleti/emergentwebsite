import { Link } from "react-router-dom";

export default function UbuntuLink({ to, children, className = "", muted = false, onClick }) {
  const isHash = to?.startsWith("/#") || to?.startsWith("#");
  const classes = `${muted ? "ubuntu-link-muted" : "ubuntu-link"} ${className}`.trim();

  const content = (
    <>
      {children}
      <span aria-hidden="true"> ›</span>
    </>
  );

  if (isHash) {
    const hash = to.includes("#") ? to.split("#")[1] : to;
    return (
      <a
        href={`#${hash}`}
        className={classes}
        onClick={(e) => {
          const el = document.getElementById(hash);
          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth" });
          }
          onClick?.(e);
        }}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}
