"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section
      id="manifiesto"
      className="relative py-32 md:py-48 overflow-hidden bg-[var(--paez-950)]"
    >
      {/* Topo */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.10]"
        viewBox="0 0 1600 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke="var(--paez-300)" strokeWidth="0.6">
          {Array.from({ length: 10 }).map((_, i) => (
            <path
              key={i}
              d={`M -80 ${80 + i * 50} Q 400 ${20 + i * 48}, 800 ${80 + i * 52} T 1700 ${60 + i * 50}`}
            />
          ))}
        </g>
      </svg>

      <div className="mx-auto max-w-7xl px-6 md:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24 flex items-center gap-6"
        >
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--paez-300)]">
            01 — Manifiesto
          </span>
          <span className="flex-1 h-px bg-[var(--paez-800)]/40" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-normal text-[var(--text-primary)] leading-[1.05] tracking-[-0.025em] max-w-[22ch]"
          style={{ fontSize: "clamp(40px, 7vw, 110px)", textWrap: "balance" }}
        >
          Raíces{" "}
          <em className="italic text-[var(--paez-300)]">locales</em>.
          <br />
          Tecnología{" "}
          <em className="italic text-[var(--paez-300)]">global</em>.
          <br />
          Automatización{" "}
          <em className="italic paez-gradient-text">con alma</em>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-20 md:mt-28 grid md:grid-cols-3 gap-12 md:gap-16 border-t border-[var(--paez-800)]/40 pt-12"
        >
          {[
            {
              num: "·i",
              title: "Enraizada",
              body: "Trabajamos desde Neiva. Conocemos el ritmo de las PyMEs colombianas porque somos una. Ningún pitch de Silicon Valley — solo soluciones que funcionan.",
            },
            {
              num: "·ii",
              title: "Invisible",
              body: "La marca no es una persona. No hay fotos del fundador. El producto habla. Porque lo que compras es un sistema que corre, no un ego.",
            },
            {
              num: "·iii",
              title: "Corriente",
              body: "Como el Magdalena, no paramos. Tu chatbot no duerme. Tu agente no se enferma. El flujo no se cansa. Esa es la promesa.",
            },
          ].map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--paez-400)]">
                {pillar.num}
              </span>
              <h3 className="mt-5 font-display text-3xl md:text-4xl italic text-[var(--text-primary)] leading-[1.1]">
                {pillar.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.65] text-[var(--text-secondary)] max-w-[36ch]">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
