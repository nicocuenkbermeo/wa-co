import type { Metadata } from "next";
import { Instrument_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agency-wa.co"),
  title: "wa.co — Agencia de IA enraizada en el Huila",
  description:
    "Automatización con alma. Chatbots de WhatsApp, agentes IA, flujos n8n para PyMEs colombianas. Raíces locales, tecnología global.",
  keywords: [
    "agencia IA",
    "automatización",
    "chatbot WhatsApp",
    "n8n",
    "agentes IA",
    "Colombia",
    "Huila",
    "Neiva",
    "PyMEs",
  ],
  openGraph: {
    title: "wa.co — Un sistema que fluye como el río",
    description:
      "Agencia de IA enraizada en el Huila. Automatización con alma.",
    url: "https://agency-wa.co",
    siteName: "wa.co agency",
    type: "website",
    locale: "es_CO",
  },
  alternates: {
    canonical: "https://agency-wa.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${instrumentSans.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
