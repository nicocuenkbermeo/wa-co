"use client";

import { motion } from "framer-motion";
import MagneticButton from "../lib/MagneticButton";
import AnimatedLettermark from "../icons/AnimatedLettermark";
import { T, SHADOW, WHATSAPP_LINK } from "../tokens";

const KPIS = [
  { kpi: "24/7", label: "Operando sin humanos" },
  { kpi: "+400h", label: "Liberadas por año" },
  { kpi: "$0", label: "Leads perdidos de madrugada" },
  { kpi: "1", label: "Cerebro — muchos canales" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{ background: T.paper, color: T.fg }}
    >
      <PaperBackdrop />

      <div className="relative mx-auto max-w-[1240px] px-5 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
        {/* Lettermark + meta river row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-10 flex items-end justify-between gap-6"
        >
          <AnimatedLettermark height={72} label={false} tone="dark" />
          <div className="hidden md:flex items-center gap-3">
            <RiverChip>Magdalena</RiverChip>
            <RiverChip>Páez</RiverChip>
            <RiverChip>Suaza</RiverChip>
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mb-8 flex items-center gap-3"
        >
          <span
            className="inline-flex h-[6px] w-[6px] rounded-full"
            style={{ background: T.paez400, boxShadow: `0 0 0 4px ${T.paez400}33` }}
          />
          <span
            className="font-mono uppercase"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.28em",
              color: T.fgMuted,
            }}
          >
            Agencia IA · Neiva — Huila · operando 24/7
          </span>
        </motion.div>

        {/* Headline — DS rule: sans para texto principal, serif italic SOLO para el em destacado */}
        <h1
          className="relative leading-[0.95]"
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            fontSize: "clamp(44px, 9vw, 128px)",
            letterSpacing: "-0.025em",
            color: T.fg,
            textWrap: "balance",
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="block"
          >
            Construimos
          </motion.span>
          <motion.em
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="block"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 400,
              color: T.paez700,
              letterSpacing: "-0.03em",
            }}
          >
            inteligencia
          </motion.em>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            que trabaja.
          </motion.span>
        </h1>

        {/* Lead + CTAs */}
        <div className="relative mt-14 grid gap-10 md:mt-20 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: 19,
              lineHeight: 1.5,
              color: T.fgMuted,
              maxWidth: "54ch",
              textWrap: "pretty",
            }}
          >
            Agentes, chatbots y flujos <em style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: T.paez700 }}>n8n</em> que hacen el trabajo
            silencioso — mientras tu equipo duerme. Diseñado en el Huila.
            Desplegado en la nube. Corre para toda LATAM.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start gap-3 md:col-span-5 md:items-end md:justify-end"
          >
            <MagneticButton
              as="a"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[52px] items-center gap-3 px-8 font-medium"
              style={{
                borderRadius: 999,
                background: T.paezGradient,
                color: T.ink900,
                fontSize: 14,
                letterSpacing: "0",
                boxShadow: SHADOW.md,
                fontWeight: 600,
              }}
            >
              Agendar llamada
              <span aria-hidden>→</span>
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#capacidades"
              className="inline-flex h-[44px] items-center gap-3 px-6"
              style={{
                borderRadius: 999,
                background: "transparent",
                color: T.fg,
                fontSize: 14,
                fontWeight: 500,
                border: `1px solid ${T.borderStrong}`,
              }}
            >
              Ver capacidades
            </MagneticButton>
          </motion.div>
        </div>

        {/* KPIs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-20 grid gap-4 md:mt-28 md:grid-cols-4"
        >
          {KPIS.map((it) => (
            <div
              key={it.label}
              className="group relative overflow-hidden p-6 transition-all duration-500 hover:-translate-y-[2px]"
              style={{
                background: T.surface,
                border: `1px solid ${T.border}`,
                borderRadius: 16,
                boxShadow: SHADOW.sm,
              }}
            >
              <div
                aria-hidden
                className="absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-[0.14] transition-opacity duration-500 group-hover:opacity-25"
                style={{ background: T.paezGradient, filter: "blur(30px)" }}
              />
              <div
                className="relative"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: 48,
                  lineHeight: 1,
                  letterSpacing: "-0.025em",
                  color: T.fg,
                }}
              >
                {it.kpi}
              </div>
              <div
                className="relative mt-3 uppercase"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  color: T.fgMuted,
                }}
              >
                {it.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function RiverChip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-1"
      style={{
        border: `1px solid ${T.border}`,
        background: T.surface,
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: T.fgMuted,
        letterSpacing: "0.12em",
      }}
    >
      <span
        aria-hidden
        className="h-[6px] w-[6px] rounded-full"
        style={{ background: T.paez600 }}
      />
      {children}
    </span>
  );
}

// Fondo papel con patrón río (pat-rio del DS): radial glow paez + ondas SVG horizontales
function PaperBackdrop() {
  return (
    <>
      {/* Glow radial suave Páez */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(60% 55% at 80% 20%, ${T.paez200}55, transparent 60%), radial-gradient(55% 60% at 10% 80%, ${T.paez100}66, transparent 65%)`,
        }}
      />

      {/* Grid mono 24px muy sutil — pat-grid del DS */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,19,15,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(20,19,15,0.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 35%, black 40%, transparent 85%)",
        }}
      />

      {/* Ondas del río al fondo (pat-rio) */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 w-full"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        style={{ height: 220, opacity: 0.35 }}
      >
        <defs>
          <linearGradient id="river-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={T.paez300} stopOpacity="0" />
            <stop offset="0.5" stopColor={T.paez600} stopOpacity="0.5" />
            <stop offset="1" stopColor={T.paez800} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M0 ${70 + i * 24} C 200 ${50 + i * 24}, 400 ${90 + i * 24}, 600 ${70 + i * 24} S 1000 ${50 + i * 24}, 1200 ${70 + i * 24}`}
            stroke="url(#river-grad)"
            strokeWidth={1.2}
            fill="none"
          />
        ))}
      </svg>
    </>
  );
}
