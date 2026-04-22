"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Cotizador WhatsApp B2B",
    client: "Dotación empresarial · Colombia",
    result: "−80% tiempo manual · respuesta <10s · 24/7",
    tag: "Chatbot IA",
    viz: "chat",
  },
  {
    title: "Portal inmobiliario LATAM",
    client: "Real estate multi-ciudad internacional",
    result: "Pipeline de leads automatizado desde cero",
    tag: "Web App",
    viz: "grid",
  },
  {
    title: "Plataforma pronósticos MLB",
    client: "SaaS data real-time + contenido automático",
    result: "Pipeline picks → TikTok sin intervención manual",
    tag: "SaaS",
    viz: "pulse",
  },
  {
    title: "Asistente ventas IA",
    client: "Atención 24/7 + cotización + agenda",
    result: "Respuesta automática 24/7 · trazabilidad 100%",
    tag: "Automatización",
    viz: "flow",
  },
];

function ProjectViz({ viz }: { viz: string }) {
  const base = "absolute inset-0 flex items-center justify-center text-[var(--paez-300)]";
  if (viz === "chat")
    return (
      <div className={base}>
        <svg viewBox="0 0 200 120" className="w-2/3 opacity-70">
          <rect x="20" y="20" width="90" height="28" rx="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <rect x="90" y="58" width="100" height="28" rx="14" fill="currentColor" opacity="0.8" />
          <rect x="20" y="94" width="70" height="14" rx="7" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        </svg>
      </div>
    );
  if (viz === "grid")
    return (
      <div className={base}>
        <svg viewBox="0 0 200 120" className="w-2/3 opacity-60">
          {[...Array(4)].map((_, i) => [...Array(6)].map((__, j) => (
            <rect key={`${i}-${j}`} x={10 + j * 30} y={10 + i * 25} width="26" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1" opacity={0.3 + ((i + j) % 3) * 0.2} />
          )))}
        </svg>
      </div>
    );
  if (viz === "pulse")
    return (
      <div className={base}>
        <svg viewBox="0 0 200 120" className="w-3/4 opacity-70">
          <path d="M 0 60 L 40 60 L 50 30 L 65 90 L 80 50 L 100 60 L 140 60 L 150 25 L 165 95 L 180 55 L 200 60" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  return (
    <div className={base}>
      <svg viewBox="0 0 200 120" className="w-2/3 opacity-70">
        <circle cx="40" cy="60" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="30" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="90" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="160" cy="60" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M 58 60 L 86 35 M 58 60 L 86 85 M 114 35 L 142 55 M 114 85 L 142 65" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.5" />
      </svg>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portafolio" className="relative py-24 md:py-32 bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex items-end justify-between gap-8 pb-6 border-b border-[var(--border-subtle)]"
        >
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--paez-300)] mb-4">
              · Casos
            </p>
            <h2 className="font-display text-[clamp(34px,4.6vw,60px)] leading-[1.05] tracking-[-0.02em] text-[var(--text-primary)]">
              Sistemas que <em className="italic text-[var(--paez-300)]">corren solos</em>.
            </h2>
          </div>
          <span className="hidden md:block font-mono text-xs tracking-[0.1em] text-[var(--text-faint)] shrink-0">
            4 / activos
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              href="#contacto"
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] transition-all duration-300 hover:border-[var(--paez-700)]/60 hover:-translate-y-1"
            >
              <div className="relative h-56 bg-[var(--bg-card)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--paez-950)]/40 via-transparent to-[var(--paez-800)]/10" />
                <ProjectViz viz={project.viz} />
                <ArrowUpRight className="absolute top-5 right-5 h-5 w-5 text-[var(--text-faint)] transition-all group-hover:text-[var(--paez-300)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              <div className="p-7">
                <span className="inline-block rounded-full px-3 py-1 font-mono text-[11px] tracking-[0.1em] uppercase bg-[var(--paez-800)]/25 text-[var(--paez-300)] border border-[var(--paez-700)]/30">
                  {project.tag}
                </span>

                <h3 className="mt-4 font-display text-2xl leading-tight tracking-[-0.01em] text-[var(--text-primary)]">
                  {project.title}
                </h3>

                <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {project.client}
                </p>

                <p className="mt-4 text-sm font-medium text-[var(--paez-300)] font-mono tracking-tight">
                  → {project.result}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
