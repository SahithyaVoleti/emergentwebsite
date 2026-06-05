/** Minimal route loading placeholder — avoids layout jump on lazy pages. */
export default function RouteFallback() {
  return (
    <div
      className="ubuntu-section-block min-h-[40vh] bg-white"
      aria-busy="true"
      aria-label="Loading page"
    />
  );
}
