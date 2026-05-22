/**
 * Same page root as homepage — stacked ubuntu-section-block bands inside fixed-nav shell.
 */
export default function SitePageMain({ children, className = "" }) {
  return (
    <main className={`ubuntu-home-page relative z-10 bg-white ${className}`.trim()}>{children}</main>
  );
}
