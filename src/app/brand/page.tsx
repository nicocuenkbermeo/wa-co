import type { Metadata } from "next";
import BrandPage from "@/components/brand/BrandPage";

export const metadata: Metadata = {
  title: "Identidad wa.co — Brand Book 2026",
  description:
    "Sistema de identidad visual de wa.co — cartografía fluvial del Huila aplicada a una agencia de IA. Descarga el brand book completo, hojas por sección y pack de assets.",
  openGraph: {
    title: "Identidad wa.co — Brand Book 2026",
    description:
      "Sistema de identidad visual de wa.co. Cartografía fluvial del Huila + IA. Descargable.",
    url: "https://agency-wa.co/brand",
    siteName: "wa.co agency",
    type: "website",
    locale: "es_CO",
  },
  alternates: { canonical: "https://agency-wa.co/brand" },
};

export default function Page() {
  return <BrandPage />;
}
