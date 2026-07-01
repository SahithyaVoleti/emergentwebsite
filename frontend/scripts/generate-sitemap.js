/**
 * Generates public/sitemap.xml from static routes and data slugs.
 * Run: node scripts/generate-sitemap.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = process.env.SITE_URL || process.env.VITE_SITE_URL || "https://neuraltrix.ai";
const lastmod = new Date().toISOString().slice(0, 10);

const staticRoutes = [
  "/",
  "/services",
  "/solutions",
  "/industries",
  "/about",
  "/security",
  "/blog",
  "/research-innovation",
  "/privacy-policy",
  "/terms-and-conditions",
];

function loadSlugs(file) {
  const content = fs.readFileSync(file, "utf8");
  const matches = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)];
  return matches.map((m) => m[1]);
}

const root = path.join(__dirname, "..");
const dataDir = path.join(root, "src", "data");

const serviceSlugs = loadSlugs(path.join(dataDir, "services.js"));
const solutionSlugs = loadSlugs(path.join(dataDir, "solutions.js"));
const industrySlugs = loadSlugs(path.join(dataDir, "industries.js"));
const caseStudySlugs = loadSlugs(path.join(dataDir, "caseStudies.js"));
const blogSlugs = loadSlugs(path.join(dataDir, "blog.js"));

const urls = [
  ...staticRoutes,
  ...serviceSlugs.map((s) => `/services/${s}`),
  ...solutionSlugs.map((s) => `/solutions/${s}`),
  ...industrySlugs.map((s) => `/industries/${s}`),
  ...caseStudySlugs.map((s) => `/case-studies/${s}`),
  ...blogSlugs.map((s) => `/blog/${s}`),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (route) => `  <url>
    <loc>${BASE_URL}${route === "/" ? "" : route}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(root, "public", "sitemap.xml"), xml);
console.log(`Wrote sitemap with ${urls.length} URLs`);
