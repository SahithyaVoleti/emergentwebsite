import UbuntuSectionShell from "./UbuntuSectionShell";

/** Stats / results grid — ubuntu bordered cards */
export default function UbuntuMetricGrid({
  items = [],
  eyebrow,
  title,
  lead,
  id,
  variant = "default",
  columns = 4,
}) {
  if (!items.length) return null;

  const colClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "grid-cols-2 lg:grid-cols-4";

  return (
    <UbuntuSectionShell id={id} eyebrow={eyebrow} title={title} lead={lead} variant={variant}>
      <div className={`grid grid-cols-1 gap-4 ${colClass}`}>
        {items.map((item) => (
          <article
            key={item.label ?? item.title}
            className="border border-[#d9d9d9] bg-white p-5 text-center sm:text-left"
          >
            <p className="text-2xl font-medium text-[#111]">{item.value ?? item.metric}</p>
            <p className="mt-1 text-sm font-medium text-[#8b1538]">{item.label ?? item.title}</p>
            {item.desc && (
              <p className="mt-2 text-sm leading-relaxed text-[#555]">{item.desc}</p>
            )}
          </article>
        ))}
      </div>
    </UbuntuSectionShell>
  );
}
