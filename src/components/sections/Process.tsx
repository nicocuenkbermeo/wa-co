"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "i.",
    title: "Diagnóstico",
    verb: "Escuchar",
    body: "Mapeamos tus procesos repetitivos. Identificamos dónde la IA da más ROI. Escribimos un plan antes de tocar código.",
    deliver: "Roadmap + estimado",
    duration: "3 días",
  },
  {
    num: "ii.",
    title: "Construcción",
    verb: "Construir",
    body: "Armamos el flujo conectado a tus herramientas. Pruebas en staging, tú ves el progreso en vivo en n8n y Sheets.",
    deliver: "Sistema funcional",
    duration: "5–10 días",
  },
  {
    num: "iii.",
    title: "Lanzamiento",
    verb: "Encender",
    body: "Puesta en producción. Capacitación a tu equipo. Primeros usuarios reales pasan por el sistema y calibramos juntos.",
    deliver: "Go-live supervisado",
    duration: "2 días",
  },
  {
    num: "iv.",
    title: "Corriente",
    verb: "Cuidar",
    body: "Mes a mes optimizamos con datos reales. El sistema aprende. Tu negocio gana consistencia. Nosotros cuidamos el cauce.",
    deliver: "Mejora continua",
    duration: "Mensual",
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      className="relative py-32 md:py-48 bg-[var(--paez-950)] overflow-hidden"
    >
      {/* Vertical river SVG */}
      <svg
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2 h-full w-[600px] opacity-[0.12] hidden lg:block"
        viewBox="0 0 600 1200"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M 300 0 C 200 200, 400 400, 300 600 S 200 1000, 300 1200"
          fill="none"
          stroke="var(--paez-300)"
          strokeWidth="1"
          strokeDasharray="2 6"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-6 md:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-center gap-6 mb-10">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--paez-300)]">
              03 — Proceso
            </span>
            <span className="flex-1 h-px bg-[var(--paez-800)]/40" />
          </div>

          <h2
            className="font-display font-normal text-[var(--text-primary)] leading-[0.95] tracking-[-0.025em] max-w-[18ch]"
            style={{ fontSize: "clamp(44px, 6.5vw, 110px)", textWrap: "balance" }}
          >
            Como un <em className="italic text-[var(--paez-300)]">río</em>:
            <br />
            empieza pequeño,
            <br />
            toma <em className="italic paez-gradient-text">forma</em>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20 md:gap-y-28">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative ${
                i % 2 === 1 ? "md:mt-24" : ""
              }`}
            >
              <div className="flex items-start gap-6 md:gap-10">
                <span className="font-display text-6xl md:text-8xl italic text-[var(--paez-400)] leading-none shrink-0 pt-1">
                  {step.num}
                </span>
                <div className="min-w-0 pt-2">
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--paez-300)]">
                    {step.verb}
                  </span>
                  <h3
                    className="font-display font-normal mt-2 text-[var(--text-primary)] leading-[0.98] tracking-[-0.02em]"
                    style={{ fontSize: "clamp(36px, 4.2vw, 64px)" }}
                  >
                    {step.title}
                  </h3>
                </div>
              </div>

              <p className="mt-8 md:ml-24 max-w-[40ch] text-[16px] leading-[1.65] text-[var(--text-secondary)]">
                {step.body}
              </p>

              <div className="mt-6 md:ml-24 flex gap-8 pt-5 border-t border-[var(--paez-800)]/40">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-faint)]">
                    Entregable
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-primary)]">{step.deliver}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-faint)]">
                    Duración
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-primary)]">{step.duration}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
