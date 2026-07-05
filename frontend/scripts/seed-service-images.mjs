import { getServiceImageDownloadMap } from "../src/data/serviceImages.js";
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
  console.log(`Seeding ${entries.length} remote service images...`);

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
