"use client";

import { motion } from "framer-motion";
import Lettermark from "@/components/shared/Lettermark";

const WA_LINK =
  "https://wa.me/573163836881?text=Hola,%20quiero%20hablar%20con%20wa.co";

export default function CTASection() {
  return (
    <section
      id="contacto"
      className="relative w-full py-40 md:py-56 overflow-hidden bg-[var(--ink-950)]"
    >
      {/* Huge lettermark watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06]"
      >
        <Lettermark height="70vh" variant="gradient" />
      </div>

      {/* Topo */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.10]"
        viewBox="0 0 1600 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke="var(--paez-300)" strokeWidth="0.6">
          {Array.from({ length: 9 }).map((_, i) => (
            <path
              key={i}
              d={`M -80 ${100 + i * 50} Q 400 ${30 + i * 48}, 800 ${100 + i * 52} T 1700 ${80 + i * 50}`}
            />
          ))}
        </g>
      </svg>

      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,182,40,0.10), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          <span className="flex-1 h-px bg-[var(--border-subtle)] max-w-[200px]" />
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--paez-300)]">
            08 — Empezar
          </span>
          <span className="flex-1 h-px bg-[var(--border-subtle)] max-w-[200px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-normal text-[var(--text-primary)] leading-[0.9] tracking-[-0.03em] mx-auto max-w-[16ch]"
          style={{ fontSize: "clamp(64px, 12vw, 200px)", textWrap: "balance" }}
        >
          Que <em className="italic text-[var(--paez-300)]">corra</em>
          <br />
          solo.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-[17px] md:text-[19px] text-[var(--text-secondary)] max-w-[48ch] mx-auto leading-[1.6]"
        >
          Agenda una llamada de 30 minutos. Diagnóstico gratis: qué automatizar
          primero, dónde está el mayor retorno. Sin compromiso.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 rounded-full bg-[var(--paez-300)] hover:bg-[var(--paez-200)] pl-7 pr-5 py-4 font-mono text-[11px] md:text-[12px] tracking-[0.22em] uppercase font-medium text-[var(--ink-950)] transition-all"
          >
            Escribir por WhatsApp
            <span className="inline-block w-7 h-px bg-[var(--ink-950)] transition-all group-hover:w-12" />
          </a>

          <a
            href="mailto:hola@agency-wa.co"
            className="font-mono text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-[var(--text-secondary)] hover:text-[var(--paez-300)] transition-colors border-b border-[var(--border-strong)] hover:border-[var(--paez-300)] pb-1"
          >
            hola@agency-wa.co
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[var(--text-faint)]"
        >
          · Respuesta en menos de 4 horas — Neiva, Huila, Colombia ·
        </motion.p>
      </div>
    </section>
  );
}
