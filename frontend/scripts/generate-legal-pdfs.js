/**
 * Attempts to generate legal PDFs when Python + reportlab are available.
 * Non-blocking: committed PDFs in public/legal-templates/ are used as fallback.
 */
import { spawnSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templateDir = path.join(__dirname, "..", "public", "legal-templates");
const script = path.join(templateDir, "generate_legal_pdfs.py");

const result = spawnSync("python3", [script], {
  cwd: templateDir,
  encoding: "utf8",
});

if (result.status === 0) {
  console.log("Legal PDFs generated.");
} else {
  console.warn(
    "Legal PDF generation skipped (python3/reportlab unavailable). Using committed PDFs."
  );
}
