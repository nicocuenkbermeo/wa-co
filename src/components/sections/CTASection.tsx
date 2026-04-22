"use client";

import { motion } from "framer-motion";
import Lettermark from "@/components/shared/Lettermark";

const WA_LINK =
  "https://wa.me/573163836881?text=Hola,%20quiero%20hablar%20con%20wa.co";

export default function CTASection() {
  return (
    <section
      id="contacto"
      className="relative w-full py-32 md:py-52 overflow-hidden bg-[var(--paez-400)]"
    >
      {/* Soft overlay of lettermark breathing */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.12]"
      >
        <Lettermark height="60vh" variant="currentColor" />
      </div>

      {/* Topographic */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.14]"
        viewBox="0 0 1600 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke="var(--paez-950)" strokeWidth="0.6">
          {Array.from({ length: 9 }).map((_, i) => (
            <path
              key={i}
              d={`M -80 ${100 + i * 50} Q 400 ${30 + i * 48}, 800 ${100 + i * 52} T 1700 ${80 + i * 50}`}
            />
          ))}
        </g>
      </svg>

      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--paez-950)] mb-10"
        >
          — Empezar
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-normal text-[var(--paez-950)] leading-[1] tracking-[-0.02em]"
          style={{ fontSize: "clamp(48px, 8vw, 128px)", textWrap: "balance" }}
        >
          Que <em className="italic">corra</em> solo.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 text-[16px] md:text-[18px] text-[var(--paez-950)]/80 max-w-[48ch] mx-auto leading-[1.6]"
        >
          Agenda una llamada de 30 minutos. Diagnóstico gratis: qué automatizar
          primero, dónde está el mayor retorno. Sin compromiso.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-secondary"
          >
            Escribir por WhatsApp
          </a>
          <a
            href="mailto:hola@agency-wa.co"
            className="font-mono text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-[var(--paez-950)] hover:text-[var(--paez-900)] transition-colors border-b border-[var(--paez-950)]/40 hover:border-[var(--paez-950)] pb-1"
          >
            hola@agency-wa.co
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--paez-950)]/70"
        >
          · Respuesta en menos de 4 horas · Neiva, Huila, Colombia ·
        </motion.p>
      </div>
    </section>
  );
}
