import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://agency-wa.co";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#capacidades`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/#casos`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/#pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/#proyecto`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
