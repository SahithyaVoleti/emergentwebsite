/**
 * Corporate card title: vertical rule + product name + optional English descriptor.
 */
export default function ProductCardHeading({ children, descriptor, className = "" }) {
  return (
    <div className={`ubuntu-product-card__heading flex items-stretch justify-start gap-3 px-3 sm:px-4 ${className}`}>
      <span className="ubuntu-product-card__heading-rule shrink-0" aria-hidden="true" />
      <div className="ubuntu-product-card__heading-copy min-w-0 flex-1">
        <h3 className="ubuntu-product-card__heading-text text-base font-medium text-[#002855] leading-snug sm:text-lg">
          {children}
        </h3>
        {descriptor ? (
          <p className="ubuntu-product-card__heading-desc mt-1 text-xs font-normal leading-snug text-[#5c677d] line-clamp-2 sm:text-sm">
            {descriptor}
          </p>
        ) : null}
      </div>
    </div>
  );
}
