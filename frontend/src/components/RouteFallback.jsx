/** Minimal route loading placeholder — avoids layout jump on lazy pages. */
export default function RouteFallback() {
  return (
    <div
      className="ubuntu-section-block ubuntu-section--dark min-h-[40vh]"
      aria-busy="true"
      aria-label="Loading page"
    />
  );
}
