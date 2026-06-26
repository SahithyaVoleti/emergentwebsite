import UbuntuSectionShell from "./UbuntuSectionShell";
import SectionEyebrow from "./SectionEyebrow";
import SectionTitle from "./SectionTitle";

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
          {leftEyebrow && <SectionEyebrow>{leftEyebrow}</SectionEyebrow>}
          {leftTitle && <SectionTitle as="h2" title={leftTitle} />}
          {leftBody && <p className="ubuntu-body mt-4">{leftBody}</p>}
        </div>
        <div>
          {rightEyebrow && <SectionEyebrow>{rightEyebrow}</SectionEyebrow>}
          {rightTitle && <SectionTitle as="h2" title={rightTitle} />}
          {rightBody && <p className="ubuntu-body mt-4">{rightBody}</p>}
        </div>
      </div>
    </UbuntuSectionShell>
  );
}
