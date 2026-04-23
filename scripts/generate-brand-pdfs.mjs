import { createServer } from "node:http";
import { readFile, stat, writeFile, mkdir, readdir } from "node:fs/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";
import { PDFDocument } from "pdf-lib";
import archiver from "archiver";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = resolve(__dirname, "..");
const DS_DIR = join(ROOT, "public", "design-system");
const OUT_DIR = join(ROOT, "public", "brand");

const CHROME_PATHS = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
];

const PAGES = [
  { slug: "01-brand", title: "Fundamentos de marca" },
  { slug: "02-logo", title: "Logo y lettermark" },
  { slug: "03-color", title: "Paleta cromática" },
  { slug: "04-typography", title: "Sistema tipográfico" },
  { slug: "05-spacing", title: "Grilla y espaciado" },
  { slug: "06-components", title: "Componentes" },
  { slug: "07-iconography", title: "Iconografía" },
  { slug: "08-patterns", title: "Patrones y texturas" },
  { slug: "09-applications", title: "Aplicaciones" },
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
    try {
      await stat(p);
      return p;
    } catch {}
  }
  throw new Error("Chrome not found. Install Google Chrome or set CHROME_PATH env.");
}

function startStaticServer(rootDir) {
  return new Promise((resolvePromise) => {
    const server = createServer(async (req, res) => {
      try {
        let urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
        if (urlPath === "/" || urlPath === "") urlPath = "/index.html";
        const filePath = join(rootDir, urlPath);
        if (!filePath.startsWith(rootDir)) {
          res.writeHead(403).end("forbidden");
          return;
        }
        const data = await readFile(filePath);
        const mime = MIME[extname(filePath).toLowerCase()] || "application/octet-stream";
        res.writeHead(200, { "Content-Type": mime, "Cache-Control": "no-store" });
        res.end(data);
      } catch (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("not found: " + req.url);
      }
    });
    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address();
      resolvePromise({ server, port });
    });
  });
}

async function renderPdf(browser, url, outPath) {
  const page = await browser.newPage();
  await page.emulateMediaType("screen");
  await page.setViewport({ width: 1280, height: 1800, deviceScaleFactor: 2 });
  await page.goto(url, { waitUntil: "networkidle0", timeout: 120_000 });
  await page.evaluate(async () => {
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
    await new Promise((r) => setTimeout(r, 400));
  });
  await page.pdf({
    path: outPath,
    format: "A4",
    printBackground: true,
    margin: { top: "16mm", right: "14mm", bottom: "16mm", left: "14mm" },
    preferCSSPageSize: false,
  });
  await page.close();
}

async function mergePdfs(inputs, outPath) {
  const merged = await PDFDocument.create();
  for (const input of inputs) {
    const bytes = await readFile(input);
    const src = await PDFDocument.load(bytes);
    const pages = await merged.copyPages(src, src.getPageIndices());
    pages.forEach((p) => merged.addPage(p));
  }
  const out = await merged.save();
  await writeFile(outPath, out);
}

async function zipAssets(pdfFiles, dsAssetsDir, outZip) {
  return new Promise((resolvePromise, rejectPromise) => {
    const output = createWriteStream(outZip);
    const archive = archiver("zip", { zlib: { level: 9 } });
    output.on("close", () => resolvePromise(archive.pointer()));
    archive.on("error", rejectPromise);
    archive.pipe(output);
    for (const f of pdfFiles) archive.file(f, { name: `pdfs/${f.split(/[\\/]/).pop()}` });
    archive.directory(dsAssetsDir, "assets");
    archive.finalize();
  });
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const executablePath = process.env.CHROME_PATH || (await findChrome());
  console.log(`[brand] using chrome: ${executablePath}`);

  const { server, port } = await startStaticServer(DS_DIR);
  console.log(`[brand] static server on http://127.0.0.1:${port}`);

  const browser = await puppeteer.launch({
    executablePath,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const pdfPaths = [];
  try {
    for (const p of PAGES) {
      const url = `http://127.0.0.1:${port}/${p.slug}.html`;
      const outPath = join(OUT_DIR, `${p.slug}.pdf`);
      console.log(`[brand] → ${p.slug}`);
      await renderPdf(browser, url, outPath);
      pdfPaths.push(outPath);
    }
  } finally {
    await browser.close();
    server.close();
  }

  const mergedOut = join(OUT_DIR, "wa-co-brandbook-completo.pdf");
  await mergePdfs(pdfPaths, mergedOut);
  console.log(`[brand] merged → ${mergedOut}`);

  const zipOut = join(OUT_DIR, "wa-co-brand-assets.zip");
  const bytes = await zipAssets([...pdfPaths, mergedOut], join(DS_DIR, "assets"), zipOut);
  console.log(`[brand] zip → ${zipOut} (${(bytes / 1024 / 1024).toFixed(2)} MB)`);

  const files = await readdir(OUT_DIR);
  console.log(`[brand] done. files in public/brand:`);
  for (const f of files) console.log(`  - ${f}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
