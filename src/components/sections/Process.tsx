"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    body: "Mapeamos procesos repetitivos. Identificamos dónde la IA da más retorno. Escribimos un plan antes de tocar código.",
    deliver: "Roadmap + estimado",
    duration: "3 días",
  },
  {
    num: "02",
    title: "Construcción",
    body: "Armamos el flujo conectado a tus herramientas. Pruebas en staging — ves el progreso en vivo.",
    deliver: "Sistema funcional",
    duration: "5–10 días",
  },
  {
    num: "03",
    title: "Lanzamiento",
    body: "Puesta en producción. Capacitación a tu equipo. Primeros usuarios reales pasan por el sistema.",
    deliver: "Go-live supervisado",
    duration: "2 días",
  },
  {
    num: "04",
    title: "Corriente",
    body: "Mes a mes optimizamos con datos reales. El sistema aprende. Nosotros cuidamos el cauce.",
    deliver: "Mejora continua",
    duration: "Mensual",
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      className="relative py-24 md:py-40 bg-[var(--bg-secondary)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--paez-800)] mb-6">
            — Proceso
          </p>
          <h2
            className="font-display font-normal text-[var(--text-primary)] leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(36px, 5.2vw, 80px)", textWrap: "balance" }}
          >
            De idea a sistema{" "}
            <em className="italic text-[var(--paez-800)]">corriendo</em>.
          </h2>
          <p className="mt-6 text-[16px] leading-[1.65] text-[var(--text-secondary)] max-w-[54ch]">
            Trabajamos como un río: empieza pequeño, toma forma, crece con tu
            negocio. Cuatro fases claras, sin sorpresas.
          </p>
        </motion.div>

        <div className="border-t border-[var(--border-subtle)]">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid md:grid-cols-[100px_1fr_200px_140px] gap-6 md:gap-10 items-start py-10 md:py-14 border-b border-[var(--border-subtle)]"
            >
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--paez-800)]">
                {step.num}
              </span>

              <div>
                <h3
                  className="font-display font-normal text-[var(--text-primary)] leading-[1.05] tracking-[-0.015em]"
                  style={{ fontSize: "clamp(30px, 3.8vw, 56px)" }}
                >
                  {step.title}
                </h3>
                <p className="mt-4 max-w-[52ch] text-[15px] md:text-[16px] leading-[1.65] text-[var(--text-secondary)]">
                  {step.body}
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-faint)]">
                  Entregable
                </p>
                <p className="mt-2 text-[14px] text-[var(--text-primary)]">
                  {step.deliver}
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-faint)]">
                  Duración
                </p>
                <p className="mt-2 font-display italic text-2xl text-[var(--paez-800)] leading-none">
                  {step.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
