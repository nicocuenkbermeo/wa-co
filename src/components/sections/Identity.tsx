"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Lettermark from "@/components/shared/Lettermark";

const rivers = [
  { name: "Río Magdalena", length: "1,528 km" },
  { name: "Río Páez", length: "173 km" },
  { name: "Río Suaza", length: "120 km" },
  { name: "Río La Plata", length: "88 km" },
];

export default function Identity() {
  return (
    <section
      id="identidad"
      className="relative py-28 md:py-44 bg-[var(--paez-950)] overflow-hidden"
    >
      {/* Topographic curves dense */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.12]"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke="var(--paez-300)" strokeWidth="0.6">
          {Array.from({ length: 20 }).map((_, i) => (
            <path
              key={i}
              d={`M -80 ${60 + i * 46} Q 400 ${10 + i * 44}, 800 ${60 + i * 48} T 1700 ${40 + i * 46}`}
            />
          ))}
        </g>
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 md:gap-20 items-center">
          {/* Left — editorial copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--paez-300)] mb-6">
              — Identidad
            </p>
            <h2
              className="font-display font-normal text-[#fdfcf7] leading-[1.02] tracking-[-0.02em]"
              style={{ fontSize: "clamp(38px, 5.8vw, 96px)", textWrap: "balance" }}
            >
              Las letras del logo{" "}
              <em className="italic text-[var(--paez-300)]">salen del agua</em>.
            </h2>

            <p className="mt-10 max-w-[52ch] text-[16px] md:text-[17px] leading-[1.7] text-[#ecebe1]">
              La &ldquo;w&rdquo; de wa.co no es una letra: son cuatro ríos del Huila
              superpuestos. Magdalena, Páez, Suaza y La Plata. La
              &ldquo;a&rdquo; es el destino — donde convergen. Nada decorativo:
              cada curva viene de coordenadas reales.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-4 max-w-md">
              {rivers.map((r) => (
                <div key={r.name} className="border-t border-[var(--paez-800)]/60 pt-3">
                  <p className="font-display italic text-xl text-[var(--paez-300)] leading-none">
                    {r.name}
                  </p>
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#b8b6a6] mt-2">
                    {r.length}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/design-system/index.html"
                className="btn-pill inline-flex items-center gap-3 bg-[var(--paez-300)] hover:bg-[var(--paez-200)] text-[var(--paez-950)]"
              >
                Conocer la identidad
                <span className="inline-block w-5 h-px bg-current" />
              </Link>
            </div>
          </motion.div>

          {/* Right — lettermark showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative" style={{ animation: "breathe 6s ease-in-out infinite" }}>
              <div className="absolute inset-0 blur-[60px] opacity-50 paez-gradient-bg rounded-full" />
              <Lettermark height={300} className="relative" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
