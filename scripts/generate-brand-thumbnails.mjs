import { createServer } from "node:http";
import { readFile, stat, mkdir } from "node:fs/promises";
import { extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = resolve(__dirname, "..");
const DS_DIR = join(ROOT, "public", "design-system");
const OUT_DIR = join(ROOT, "public", "brand", "thumbs");

const CHROME_PATHS = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
];

const PAGES = [
  "01-brand",
  "02-logo",
  "03-color",
  "04-typography",
  "05-spacing",
  "06-components",
  "07-iconography",
  "08-patterns",
  "09-applications",
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
  ".json": "application/json",
};

async function findChrome() {
  for (const p of CHROME_PATHS) {
    try { await stat(p); return p; } catch {}
  }
  throw new Error("Chrome not found");
}

function startStaticServer(rootDir) {
  return new Promise((res) => {
    const server = createServer(async (req, r) => {
      try {
        let urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
        if (urlPath === "/" || urlPath === "") urlPath = "/index.html";
        const filePath = join(rootDir, urlPath);
        if (!filePath.startsWith(rootDir)) { r.writeHead(403).end(); return; }
        const data = await readFile(filePath);
        const mime = MIME[extname(filePath).toLowerCase()] || "application/octet-stream";
        r.writeHead(200, { "Content-Type": mime });
        r.end(data);
      } catch {
        r.writeHead(404).end("not found");
      }
    });
    server.listen(0, "127.0.0.1", () => res({ server, port: server.address().port }));
  });
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const exe = process.env.CHROME_PATH || (await findChrome());
  const { server, port } = await startStaticServer(DS_DIR);
  const browser = await puppeteer.launch({ executablePath: exe, headless: "new", args: ["--no-sandbox"] });
  try {
    for (const slug of PAGES) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
      await page.goto(`http://127.0.0.1:${port}/${slug}.html`, { waitUntil: "networkidle0", timeout: 120_000 });
      await page.evaluate(async () => {
        if (document.fonts?.ready) await document.fonts.ready;
        await new Promise((r) => setTimeout(r, 400));
      });
      const out = join(OUT_DIR, `${slug}.jpg`);
      await page.screenshot({ path: out, type: "jpeg", quality: 82, clip: { x: 0, y: 0, width: 1440, height: 900 } });
      console.log(`[thumb] → ${slug}.jpg`);
      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
