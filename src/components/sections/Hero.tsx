"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Lettermark from "@/components/shared/Lettermark";

const meshStyle: React.CSSProperties = {
  background: [
    "radial-gradient(ellipse 60% 50% at 20% 40%, rgba(212,182,40,.14) 0%, transparent 70%)",
    "radial-gradient(ellipse 50% 60% at 80% 30%, rgba(63,107,64,.16) 0%, transparent 70%)",
    "radial-gradient(ellipse 70% 50% at 50% 80%, rgba(95,138,82,.10) 0%, transparent 70%)",
  ].join(", "),
  animation: "heroMesh 12s ease-in-out infinite alternate",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 * i,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Gradient mesh */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20" style={meshStyle} />

      {/* Topographic curves — Huila */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 w-full h-full opacity-[0.18]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke="var(--paez-700)" strokeWidth="0.6">
          <path d="M -50 300 Q 200 220, 400 280 T 800 260 T 1250 300" />
          <path d="M -50 340 Q 200 260, 400 320 T 800 300 T 1250 340" />
          <path d="M -50 380 Q 200 300, 400 360 T 800 340 T 1250 380" />
          <path d="M -50 420 Q 200 340, 400 400 T 800 380 T 1250 420" />
          <path d="M -50 460 Q 200 380, 400 440 T 800 420 T 1250 460" />
          <path d="M -50 500 Q 200 420, 400 480 T 800 460 T 1250 500" />
          <path d="M -50 540 Q 200 460, 400 520 T 800 500 T 1250 540" />
          <path d="M -50 580 Q 200 500, 400 560 T 800 540 T 1250 580" />
        </g>
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 py-20 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        {/* Left — Copy */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)]/60 px-3 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--paez-300)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--paez-400)]" />
            </span>
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--text-secondary)]">
              v1.0 · Abril 2026 · Disponible
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-display text-[clamp(44px,6.4vw,88px)] leading-[1.02] tracking-[-0.02em] text-[var(--text-primary)]"
          >
            Automatización que <em className="italic text-[var(--paez-300)]">fluye</em>
            <br />
            como el <em className="italic paez-gradient-text">río</em>.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-6 max-w-[46ch] text-lg leading-[1.6] text-[var(--text-secondary)]"
          >
            Agencia de IA enraizada en el Huila.
            Chatbots de WhatsApp, agentes IA y flujos{" "}
            <span className="font-mono text-[0.95em] text-[var(--paez-300)]">n8n</span>{" "}
            que dejan correr tu negocio solo — mientras tú vuelves a pensar.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--paez-800)] hover:bg-[var(--paez-700)] px-7 py-3.5 text-base font-medium text-white transition-all shadow-[0_8px_24px_rgba(63,107,64,0.35)] hover:shadow-[0_12px_32px_rgba(63,107,64,0.5)]"
            >
              Agendar llamada
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-strong)] px-7 py-3.5 text-base font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--paez-400)] hover:text-[var(--paez-300)]"
            >
              Ver servicios
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--text-muted)]"
          >
            <span><b className="text-[var(--text-primary)] font-medium">24/7</b> automatización</span>
            <span><b className="text-[var(--text-primary)] font-medium">+20</b> clientes activos</span>
            <span><b className="text-[var(--text-primary)] font-medium">Neiva</b> · Colombia</span>
          </motion.div>
        </div>

        {/* Right — Lettermark breathing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center md:justify-end"
        >
          <div
            className="relative"
            style={{ animation: "breathe 6s ease-in-out infinite" }}
          >
            <div className="absolute inset-0 blur-[60px] opacity-40 paez-gradient-bg rounded-full" />
            <Lettermark height={260} className="relative" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
