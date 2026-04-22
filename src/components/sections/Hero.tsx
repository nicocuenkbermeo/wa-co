"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[92svh] flex items-center justify-center overflow-hidden bg-[var(--bg-primary)] text-center"
    >
      {/* Soft radial background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,182,40,0.12), transparent 60%)",
            "radial-gradient(ellipse 70% 40% at 50% 100%, rgba(63,107,64,0.08), transparent 70%)",
          ].join(", "),
        }}
      />

      {/* Topographic hairlines (very subtle) */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.11]"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke="var(--paez-800)" strokeWidth="0.5">
          {Array.from({ length: 20 }).map((_, i) => (
            <path
              key={i}
              d={`M -80 ${100 + i * 42} Q 400 ${40 + i * 40}, 800 ${100 + i * 44} T 1700 ${80 + i * 42}`}
            />
          ))}
        </g>
      </svg>

      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-10 pt-28 pb-24">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-mono text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-[var(--paez-800)] mb-10"
        >
          — Agencia de IA · Neiva · Huila · Colombia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-normal text-[var(--text-primary)] leading-[1.04] tracking-[-0.02em]"
          style={{
            fontSize: "clamp(40px, 6.2vw, 104px)",
            textWrap: "balance",
          }}
        >
          Automatizaciones que corren solas.
          Equipos que vuelven a <em className="italic text-[var(--paez-800)]">pensar</em>.
          Conoce wa.co.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mx-auto mt-12 max-w-[52ch] text-[16px] md:text-[18px] leading-[1.65] text-[var(--text-secondary)]"
        >
          Construimos chatbots, agentes IA y flujos que trabajan por ti.
          Desde el Huila para PyMEs de Colombia y LATAM que quieren que
          su negocio corra — de día, de noche, siempre.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contacto" className="btn-pill btn-primary">
            Agendar llamada
          </a>
          <a href="#servicios" className="btn-pill btn-secondary">
            Ver capacidades
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-faint)]">
          ↓ continúa
        </span>
      </motion.div>
    </section>
  );
}
