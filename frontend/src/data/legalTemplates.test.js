import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { ALL_LEGAL_TEMPLATE_FILES } from "./legalTemplates";

const publicDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "..",
  "public"
);

describe("legalTemplates", () => {
  it("has all template PDF files in public/", () => {
    for (const href of ALL_LEGAL_TEMPLATE_FILES) {
      const filePath = path.join(publicDir, href.replace(/^\//, ""));
      expect(fs.existsSync(filePath), `Missing ${href}`).toBe(true);
    }
  });
});
