"use client";

import { motion } from "framer-motion";
import Lettermark from "@/components/shared/Lettermark";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-[var(--ink-950)]"
    >
      {/* Gigantic lettermark watermark behind everything */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.14]"
      >
        <Lettermark height="80vh" variant="gradient" />
      </motion.div>

      {/* Topographic curves */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.08]"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke="var(--paez-300)" strokeWidth="0.7">
          {Array.from({ length: 14 }).map((_, i) => (
            <path
              key={i}
              d={`M -80 ${200 + i * 45} Q 300 ${120 + i * 42}, 700 ${180 + i * 44} T 1400 ${150 + i * 45} T 1800 ${200 + i * 46}`}
            />
          ))}
        </g>
      </svg>

      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(212,182,40,0.08), transparent 70%)",
        }}
      />

      {/* TOP — small eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-28 md:top-32 left-0 right-0"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between">
          <span className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[var(--text-muted)]">
            Est. 2026 — Neiva, Huila — Colombia
          </span>
          <span className="hidden md:inline font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--text-muted)]">
            · Vol. 01 ·
          </span>
        </div>
      </motion.div>

      {/* CENTER — huge editorial headline */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 md:px-10 pb-20 md:pb-32 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--paez-300)] mb-8"
        >
          — Un sistema que corre solo
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-normal text-[var(--text-primary)] leading-[0.88] tracking-[-0.03em]"
          style={{
            fontSize: "clamp(72px, 15vw, 220px)",
            textWrap: "balance",
          }}
        >
          Nace del <em className="italic text-[var(--paez-300)]">agua</em>.
          <br />
          Corre como <em className="italic paez-gradient-text">IA</em>.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 md:mt-20 grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-end"
        >
          <p className="max-w-[44ch] text-[17px] md:text-[19px] leading-[1.5] text-[var(--text-secondary)]">
            Agencia de inteligencia artificial enraizada en el Huila.
            Construimos chatbots, agentes y flujos que trabajan por ti — mientras
            tú vuelves a hacer lo que importa.
          </p>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--paez-300)] hover:bg-[var(--paez-200)] pl-6 pr-5 py-4 font-mono text-[11px] tracking-[0.22em] uppercase font-medium text-[var(--ink-950)] transition-all"
            >
              Empezar
              <span className="inline-block w-6 h-px bg-[var(--ink-950)] transition-all group-hover:w-10" />
            </a>
            <a
              href="#servicios"
              className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--text-secondary)] hover:text-[var(--paez-300)] transition-colors border-b border-[var(--border-strong)] hover:border-[var(--paez-300)] pb-1"
            >
              Ver servicios
            </a>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM — meta bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="relative z-10 border-t border-[var(--border-subtle)] bg-[var(--ink-950)]/60 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-5 flex flex-wrap items-center justify-between gap-x-10 gap-y-3 font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[var(--text-muted)]">
          <span>
            <b className="text-[var(--paez-300)] font-medium">24/7</b> automatización
          </span>
          <span>
            <b className="text-[var(--paez-300)] font-medium">+20</b> clientes activos
          </span>
          <span>
            <b className="text-[var(--paez-300)] font-medium">−80%</b> tiempo manual
          </span>
          <span>
            <b className="text-[var(--paez-300)] font-medium">E2E</b> pipeline IA
          </span>
          <span className="hidden md:inline">
            ↓ scroll para leer
          </span>
        </div>
      </motion.div>
    </section>
  );
}
