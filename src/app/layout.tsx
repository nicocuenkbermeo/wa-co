import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
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
    <html
      lang="es"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
