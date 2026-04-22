import type { Metadata } from "next";
import {
  Instrument_Sans,
  Playfair_Display,
  JetBrains_Mono,
  Unbounded,
  Fraunces,
} from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agency-wa.co"),
  title: "wa.co — Un sistema que fluye como el río",
  description:
    "Agencia de IA enraizada en el Huila. Chatbots de WhatsApp, agentes IA y flujos n8n que trabajan 24/7 para PyMEs de Colombia y LATAM.",
  keywords: [
    "agencia IA",
    "automatización",
    "chatbot WhatsApp",
    "n8n",
    "agentes IA",
    "Claude",
    "Colombia",
    "Huila",
    "Neiva",
    "PyMEs LATAM",
  ],
  openGraph: {
    title: "wa.co — Un sistema que fluye como el río",
    description:
      "Chatbots WhatsApp, agentes IA y n8n para PyMEs. Enraizada en el Huila, corre en toda LATAM.",
    url: "https://agency-wa.co",
    siteName: "wa.co agency",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "wa.co — Un sistema que fluye como el río",
    description: "Agencia de IA enraizada en el Huila.",
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
      className={`${instrumentSans.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} ${unbounded.variable} ${fraunces.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
