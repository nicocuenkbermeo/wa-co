import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_archive-v1/", "/api/"],
      },
    ],
    sitemap: "https://agency-wa.co/sitemap.xml",
    host: "https://agency-wa.co",
  };
}
