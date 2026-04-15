import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "WA.CO — Agencia de Diseño Web & Automatización con IA",
  description:
    "Sitios web premium y automatización inteligente para tu negocio. Diseño web, chatbots WhatsApp, flujos n8n. Hechos en Colombia.",
  keywords: [
    "diseño web",
    "agencia digital",
    "automatización",
    "chatbot WhatsApp",
    "IA",
    "Colombia",
    "n8n",
  ],
  openGraph: {
    title: "WA.CO — Agencia de Diseño Web & Automatización con IA",
    description:
      "Sitios web premium y automatización inteligente para tu negocio.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
