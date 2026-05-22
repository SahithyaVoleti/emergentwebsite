import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import UbuntuSectionShell from "./UbuntuSectionShell";

export default function UbuntuDetailNav({ to, label, testId }) {
  return (
    <UbuntuSectionShell className="!py-0 border-b border-[#d9d9d9]">
      <div className="py-4">
        <Link
          to={to}
          data-testid={testId}
          className="inline-flex items-center gap-2 text-sm text-[#666] transition-colors hover:text-[#8b1538]"
        >
          <ArrowLeft size={14} aria-hidden />
          {label}
        </Link>
      </div>
    </UbuntuSectionShell>
  );
}
