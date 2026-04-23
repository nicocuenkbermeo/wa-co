// wa.co Design System — tokens oficiales (Páez · Tierra · Guayaba · Agua · Ink warm)
// Ver: public/design-system/styles/tokens.css

export const T = {
  // ── Páez (primary: río amarillo sol → verde selva) ──
  paez50: "#fbf8e8",
  paez100: "#f5efc4",
  paez200: "#ecde86",
  paez300: "#e0c94a",
  paez400: "#d4b628", // sol / amarillo río
  paez500: "#b8a02a",
  paez600: "#8a8a36",
  paez700: "#5f7a3c", // oliva transición — usar dentro de <em> en light
  paez800: "#3f6b40", // verde selva · brand primary light
  paez900: "#2b4a2e",
  paez950: "#172a1a",

  // ── Tierra (valle · ocre cálido) ──
  tierra100: "#f2e8d4",
  tierra200: "#e5d1a8",
  tierra300: "#d4b47a",
  tierra400: "#c29659", // ocre principal
  tierra500: "#a87a42",
  tierra700: "#6b4a2c",

  // ── Guayaba (accent cálido) ──
  guayaba100: "#fcd9c5",
  guayaba300: "#f08a52",
  guayaba400: "#e66a2e",
  guayaba500: "#c4511f",
  guayaba600: "#9a3d18",

  // ── Agua (info / Magdalena) ──
  agua100: "#cde3e1",
  agua300: "#6ba099",
  agua400: "#4a837c",
  agua500: "#346863",

  // ── Ink warm (grises cálidos, temperatura verdosa) ──
  ink0: "#fdfcf7", // papel cálido — nunca blanco puro
  ink50: "#f7f5ed",
  ink100: "#ecebe1",
  ink200: "#d9d7c9",
  ink300: "#b8b6a6",
  ink400: "#8f8d7e",
  ink500: "#6c6a5d",
  ink600: "#4d4c42",
  ink700: "#36352e",
  ink800: "#23221d",
  ink900: "#14130f",
  ink950: "#0a0a08",

  // ── Semánticos (light-first, el home vive en papel cálido) ──
  paper: "#fdfcf7",
  paperSoft: "#f7f5ed",
  surface: "#ffffff",
  surfaceAlt: "#f7f5ed",
  fg: "#14130f",
  fgMuted: "#4d4c42",
  fgSubtle: "#6c6a5d",
  fgFaint: "#8f8d7e",
  border: "#d9d7c9",
  borderStrong: "#b8b6a6",
  borderSubtle: "#ecebe1",
  brand: "#3f6b40", // selva
  brandAlt: "#d4b628", // sol
  accent: "#e66a2e", // guayaba

  // ── Gradientes firma ──
  paezGradient: "linear-gradient(95deg, #e2c728 0%, #c8bd36 35%, #93a64a 65%, #5f8a52 100%)",
  paezGradientSoft: "linear-gradient(95deg, #ecde86 0%, #c8cf7a 50%, #8fb082 100%)",

  // ── Alias de compatibilidad (mapeo a DS — NO agregar colores ajenos) ──
  cream: "#fdfcf7",
  creamSoft: "#f7f5ed",
  creamDeep: "#f2e8d4",
  selva: "#3f6b40",
  selvaDeep: "#2b4a2e",
  ink: "#14130f",
  obsidian: "#0a0a08",
  night: "#14130f",
  slate: "#23221d",
  stardust: "#36352e",
  ghost: "#8f8d7e",
  yellow: "#d4b628", // sol (ex fluor amarillo ajeno al DS)
  orange: "#c29659", // tierra
  fire: "#e66a2e", // guayaba
  cyan: "#6ba099", // agua (ex cyan eléctrico ajeno al DS)
  pitaya: "#c4511f", // guayaba-500
  violet: "#5f7a3c", // oliva paez-700 (violet eliminado del DS)
  aqua: "#4a837c",
} as const;

// ── Easings y duraciones oficiales ──
export const EASE = {
  out: [0.22, 1, 0.36, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  flow: [0.4, 0, 0.2, 1] as const,
};
export const DUR = {
  fast: 0.14,
  base: 0.24,
  slow: 0.42,
  river: 2.0,
};

// ── Radii ──
export const R = {
  xs: 4,
  sm: 6,
  md: 10,
  lg: 16,
  xl: 24,
  xxl: 32,
  pill: 999,
};

// ── Sombras "niebla andina" ──
export const SHADOW = {
  xs: "0 1px 2px rgba(20,19,15,0.04)",
  sm: "0 2px 6px rgba(20,19,15,0.06), 0 1px 2px rgba(20,19,15,0.04)",
  md: "0 6px 16px rgba(20,19,15,0.08), 0 2px 4px rgba(20,19,15,0.04)",
  lg: "0 16px 40px rgba(20,19,15,0.10), 0 4px 8px rgba(20,19,15,0.05)",
  xl: "0 32px 80px rgba(20,19,15,0.14), 0 8px 16px rgba(20,19,15,0.06)",
  glow: "0 0 0 4px rgba(226,199,40,0.18)",
};

export const WHATSAPP_LINK =
  "https://wa.me/573163836881?text=Hola,%20quiero%20hablar%20con%20wa.co";
export const CALENDLY_LINK = "https://cal.com/agency-wa";
export const EMAIL = "hola@agency-wa.co";
