import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const issues = [];

async function auditPage(page, path, checks) {
  const url = `${BASE}${path}`;
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);

  for (const check of checks) {
    try {
      await check(page, path);
    } catch (err) {
      issues.push({ path, error: err.message });
    }
  }
}

async function clickAndExpectHash(page, path, selector, expectedHashPart) {
  const before = page.url();
  await page.locator(selector).first().click({ timeout: 8000 });
  await page.waitForTimeout(1200);
  const after = page.url();
  const contact = await page.locator("#page-contact").count();
  if (!after.includes(expectedHashPart) && contact === 0) {
    throw new Error(`CTA ${selector} on ${path}: url ${before} -> ${after}, #page-contact count=${contact}`);
  }
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await auditPage(page, "/", [
  async (p) => {
    const hero = p.locator('[data-testid="hero-section"], [data-testid="page-hero"]').first();
    if ((await hero.count()) === 0) throw new Error("Missing hero section");
  },
  async (p) => {
    const logo = p.locator('header img[src*="neuraltrix-header-logo"], header img[src*="neuraltrix-logo-symbol"]');
    if ((await logo.count()) === 0) throw new Error("Header logo missing");
    const box = await logo.first().boundingBox();
    if (!box || box.width < 20) throw new Error("Header logo not visible");
  },
]);

await auditPage(page, "/solutions/agent-kavacha", [
  async (p, path) => {
    const faq = p.locator('[data-testid="faq-section"]');
    if ((await faq.count()) === 0) throw new Error("FAQ missing");
    const section = await faq.first().evaluate((el) => {
      const container = el.closest(".ubuntu-container");
      return {
        faqWidth: el.getBoundingClientRect().width,
        containerWidth: container?.getBoundingClientRect().width ?? 0,
        hasContainer: Boolean(container),
      };
    });
    if (!section.hasContainer) {
      throw new Error(`FAQ not inside ubuntu-container (width ${section.faqWidth})`);
    }
    if (section.containerWidth > 0 && section.faqWidth < section.containerWidth * 0.85) {
      throw new Error(`FAQ too narrow: ${section.faqWidth}px vs container ${section.containerWidth}px`);
    }
  },
  async (p, path) => {
    await clickAndExpectHash(p, path, '[data-testid="page-hero"] .ubuntu-btn-primary', "page-contact");
  },
]);

await auditPage(page, "/solutions", [
  async (p, path) => {
    await clickAndExpectHash(p, path, '[data-testid="page-hero"] .ubuntu-btn-primary', "page-contact");
  },
]);

await auditPage(page, "/about", [
  async (p, path) => {
    await p.goto(`${path}#careers`);
    await p.waitForTimeout(800);
    const careers = await p.locator("#careers").count();
    if (careers === 0) throw new Error("About careers anchor missing");
    await p.locator('[data-testid="filter-all"]').first().click();
  },
]);

await browser.close();

if (issues.length) {
  console.error("AUDIT FAILED:");
  for (const i of issues) console.error(`- ${i.path}: ${i.error}`);
  process.exit(1);
}

console.log("AUDIT PASSED: no critical issues found.");
