// v4-home tokens — mapeo del DS wa.co (paper + Páez) a los slots del v4 original.
// Re-exportamos T, SHADOW, etc. del DS oficial y añadimos alias v4.
export { T, EASE, DUR, R, SHADOW, WHATSAPP_LINK, CALENDLY_LINK, EMAIL } from "../v2-home/tokens";
import { T as BASE } from "../v2-home/tokens";

// Alias semánticos v4 → DS paper (light-first)
export const V4 = {
  // Fondos (de oscuro a papel)
  bg0: BASE.paper,              // #fdfcf7
  bg1: BASE.paperSoft,          // #f7f5ed
  bg2: BASE.ink50,
  bg3: BASE.ink100,
  bgCard: "#ffffff",            // tarjetas limpias sobre papel

  // Texto
  fg: BASE.fg,                  // ink900
  fg2: BASE.ink800,
  fgMuted: BASE.fgMuted,
  fgDim: BASE.ink500,
  fgFaint: BASE.ink400,

  // Acentos (Páez + tierra reemplazan gold + violet)
  gold: BASE.paez400,           // #d4b628 sol
  goldSoft: BASE.paez300,
  goldDeep: BASE.paez500,
  olive: BASE.paez700,          // oliva transición
  selva: BASE.paez800,          // verde selva (brand)
  violet: BASE.paez700,         // violet del v4 → oliva del DS
  terracotta: BASE.guayaba400,  // acento cálido
  emerald: BASE.agua400,        // estado/online

  // Bordes warm
  border: "rgba(20,19,15,0.07)",
  border2: "rgba(20,19,15,0.11)",
  border3: "rgba(20,19,15,0.18)",

  // Gradientes firma
  paezGrad: BASE.paezGradient,
  paezGradSoft: BASE.paezGradientSoft,

  // Sombras niebla andina
  shadowLg: "0 32px 80px rgba(20,19,15,0.14), 0 8px 16px rgba(20,19,15,0.06)",
  shadowGlow: "0 0 60px -10px rgba(212,182,40,0.35)",
} as const;

// Familias tipográficas (usan las vars globales definidas en layout/fonts)
export const F = {
  display: "var(--font-display), 'Instrument Serif', Georgia, serif",
  body: "var(--font-body), 'Instrument Sans', system-ui, sans-serif",
  mono: "var(--font-mono), 'JetBrains Mono', ui-monospace, monospace",
};
