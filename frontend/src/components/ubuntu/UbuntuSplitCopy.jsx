import UbuntuSectionShell from "./UbuntuSectionShell";

/** Two-column copy band (challenge/solution, overview blocks). */
export default function UbuntuSplitCopy({
  leftEyebrow,
  leftTitle,
  leftBody,
  rightEyebrow,
  rightTitle,
  rightBody,
  id,
  variant = "alt",
}) {
  return (
    <UbuntuSectionShell id={id} variant={variant}>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          {leftEyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
              {leftEyebrow}
            </p>
          )}
          {leftTitle && <h2 className="ubuntu-section-title text-2xl">{leftTitle}</h2>}
          {leftBody && <p className="ubuntu-body mt-4">{leftBody}</p>}
        </div>
        <div>
          {rightEyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
              {rightEyebrow}
            </p>
          )}
          {rightTitle && <h2 className="ubuntu-section-title text-2xl">{rightTitle}</h2>}
          {rightBody && <p className="ubuntu-body mt-4">{rightBody}</p>}
        </div>
      </div>
    </UbuntuSectionShell>
  );
}
