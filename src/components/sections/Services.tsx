"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Chatbots de WhatsApp con IA",
    tag: "Conversacional",
    body: "Atención 24/7 que cotiza, responde, agenda y captura leads. Con la voz de tu marca, integrado directo a WhatsApp Business.",
    stack: "OpenAI · n8n · Evolution API",
  },
  {
    num: "02",
    title: "Automatizaciones n8n",
    tag: "Flujo",
    body: "Conectamos WhatsApp, Gmail, Sheets, tu CRM y más. El trabajo repetitivo deja de existir — se hace solo, en background.",
    stack: "n8n · Webhooks · APIs",
  },
  {
    num: "03",
    title: "Agentes IA personalizados",
    tag: "Autónomo",
    body: "Asistentes entrenados con el conocimiento de tu empresa. Ventas, soporte, operaciones — disponibles siempre, consistentes siempre.",
    stack: "GPT-4o · Claude · RAG",
  },
  {
    num: "04",
    title: "Dashboards en tiempo real",
    tag: "Visibilidad",
    body: "Métricas reales en vivo para decidir con datos, no con intuición. Observabilidad end-to-end de cada flujo que corremos.",
    stack: "Next.js · Supabase · Charts",
  },
  {
    num: "05",
    title: "Consultoría de IA",
    tag: "Estrategia",
    body: "Diagnóstico de procesos + roadmap de automatización. Identificamos dónde la IA da más ROI antes de construir nada.",
    stack: "Workshop · Auditoría · Plan",
  },
  {
    num: "06",
    title: "Desarrollo a medida",
    tag: "Custom",
    body: "Apps Next.js, APIs, integraciones profundas. Cuando lo estándar no alcanza, construimos exactamente lo que tu negocio necesita.",
    stack: "Next.js · TypeScript · Vercel",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-32 md:py-48 bg-[var(--ink-950)] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-28 flex items-start justify-between gap-8 flex-wrap"
        >
          <div className="flex items-center gap-6 w-full">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--paez-300)]">
              02 — Capacidades
            </span>
            <span className="flex-1 h-px bg-[var(--border-subtle)]" />
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--text-faint)]">
              06 / 06
            </span>
          </div>

          <h2
            className="font-display font-normal text-[var(--text-primary)] leading-[0.95] tracking-[-0.025em] max-w-[18ch] mt-10"
            style={{ fontSize: "clamp(44px, 6.5vw, 110px)", textWrap: "balance" }}
          >
            Seis formas de{" "}
            <em className="italic text-[var(--paez-300)]">dejar</em>
            <br />
            que corra solo.
          </h2>
        </motion.div>

        {/* Editorial list — no cards, pure typography */}
        <div className="border-t border-[var(--border-subtle)]">
          {services.map((service, i) => (
            <motion.a
              href="#contacto"
              key={service.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group block border-b border-[var(--border-subtle)] py-10 md:py-14 transition-colors hover:bg-[var(--paez-950)]/30"
            >
              <div className="grid grid-cols-[auto_1fr] md:grid-cols-[80px_1fr_auto] gap-6 md:gap-12 items-start">
                <span className="font-mono text-[11px] md:text-[12px] tracking-[0.18em] uppercase text-[var(--paez-400)] pt-2">
                  {service.num}
                </span>

                <div className="min-w-0">
                  <div className="flex items-baseline gap-4 flex-wrap">
                    <h3
                      className="font-display font-normal text-[var(--text-primary)] leading-[0.98] tracking-[-0.02em] transition-colors group-hover:text-[var(--paez-200)]"
                      style={{ fontSize: "clamp(32px, 4.4vw, 68px)" }}
                    >
                      {service.title}
                    </h3>
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-faint)]">
                      [{service.tag}]
                    </span>
                  </div>
                  <p className="mt-5 max-w-[58ch] text-[15px] md:text-[16px] leading-[1.6] text-[var(--text-secondary)]">
                    {service.body}
                  </p>
                  <p className="mt-4 font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--text-faint)]">
                    stack — {service.stack}
                  </p>
                </div>

                <svg
                  viewBox="0 0 24 24"
                  className="hidden md:block shrink-0 w-6 h-6 mt-4 text-[var(--text-faint)] transition-all group-hover:text-[var(--paez-300)] group-hover:translate-x-1 group-hover:-translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M5 19 L 19 5 M 19 5 L 8 5 M 19 5 L 19 16" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
