import { getServiceImageDownloadMap } from "../src/data/serviceImages.js";
import { SERVICE_IMAGE_SPECS } from "../src/data/serviceImageSpecs.js";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicRoot = path.resolve(__dirname, "../public");
const downloadMap = getServiceImageDownloadMap();

async function download(url, destPath) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  await mkdir(path.dirname(destPath), { recursive: true });
  await writeFile(destPath, buffer);
}

async function main() {
  const entries = Object.entries(downloadMap);
  console.log(`Seeding ${entries.length} title-matched service images...`);

  for (const spec of SERVICE_IMAGE_SPECS) {
    process.stdout.write(`  ${spec.kind.padEnd(11)} ${spec.title}\n`);
  }

  console.log("");

  for (const [relativePath, url] of entries) {
    const destPath = path.join(publicRoot, relativePath.replace(/^\//, ""));
    process.stdout.write(`→ ${relativePath}\n`);
    await download(url, destPath);
  }

  console.log("Done.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
