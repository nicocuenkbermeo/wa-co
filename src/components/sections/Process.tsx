"use client";

import { motion } from "framer-motion";
import { Search, Wrench, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    desc: "Mapeamos tus procesos repetitivos y encontramos dónde la IA da más ROI.",
    icon: Search,
  },
  {
    number: "02",
    title: "Construcción",
    desc: "Armamos el flujo — chatbot, agente o automatización — conectado a tus herramientas.",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Lanzamiento",
    desc: "Pruebas, ajustes y puesta en producción. Tu equipo lo usa desde el día 1.",
    icon: Zap,
  },
  {
    number: "04",
    title: "Mejora continua",
    desc: "Mensualmente optimizamos con datos reales. El sistema aprende y corre mejor.",
    icon: TrendingUp,
  },
];

export default function Process() {
  return (
    <section id="proceso" className="relative py-24 md:py-32 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--paez-300)] mb-4">
            · Proceso
          </p>
          <h2 className="font-display text-[clamp(34px,4.6vw,60px)] leading-[1.05] tracking-[-0.02em] text-[var(--text-primary)]">
            De idea a <em className="italic text-[var(--paez-300)]">sistema corriendo</em>
            <br />en 4 pasos.
          </h2>
          <p className="mt-6 text-lg text-[var(--text-secondary)] leading-[1.6] max-w-2xl">
            Trabajamos como un río: empezamos pequeño, tomamos forma, y crecemos con tu negocio.
          </p>
        </motion.div>

        <div className="relative mt-20">
          {/* Connecting line */}
          <div className="absolute left-6 top-0 hidden h-full w-px md:left-0 md:top-[46px] md:block md:h-px md:w-full bg-gradient-to-r from-transparent via-[var(--paez-700)]/40 to-transparent" />
          <div className="absolute left-6 top-0 block h-full w-px md:hidden bg-[var(--border)]" />

          <div className="relative grid gap-8 md:grid-cols-4 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-16 md:pl-0"
                >
                  {/* Dot */}
                  <div className="absolute left-[18px] top-6 z-10 h-3 w-3 rounded-full paez-gradient-bg md:left-1/2 md:-translate-x-1/2 md:top-[40px]" />

                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-primary)] p-6 md:mt-[80px] hover:border-[var(--paez-700)]/50 transition-colors">
                    <span className="font-display text-4xl leading-none text-[var(--paez-300)] italic">
                      {step.number}
                    </span>

                    <div className="mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--paez-800)]/20 border border-[var(--paez-700)]/30">
                      <Icon className="h-4 w-4 text-[var(--paez-300)]" strokeWidth={1.6} />
                    </div>

                    <h3 className="mt-5 font-display text-xl leading-tight text-[var(--text-primary)]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-[1.6] text-[var(--text-secondary)]">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
