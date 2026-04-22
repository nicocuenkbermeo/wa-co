"use client";

import { motion } from "framer-motion";

const plans = [
  {
    num: "·i",
    name: "Starter",
    tagline: "PyME empezando a automatizar",
    setup: "600",
    mrr: "150",
    features: [
      "Chatbot de WhatsApp con IA",
      "Respuestas 24/7 a preguntas frecuentes",
      "Captura de leads a Google Sheets",
      "Setup Evolution API + n8n",
      "Entrega en 7 días",
    ],
    popular: false,
  },
  {
    num: "·ii",
    name: "Pro",
    tagline: "Ventas + agenda + IA completa",
    setup: "1,500",
    mrr: "300",
    features: [
      "Todo lo de Starter",
      "Cotización automática con reglas custom",
      "Agendamiento automático (Calendar)",
      "Integración CRM / Sheets avanzado",
      "Dashboard de métricas en vivo",
      "Soporte 90 días + ajustes mensuales",
      "Entrega en 10 días",
    ],
    popular: true,
  },
  {
    num: "·iii",
    name: "Bundle",
    tagline: "Web + chatbot + automatización",
    setup: "3,500",
    mrr: "400",
    features: [
      "Sitio multi-página premium",
      "Chatbot Pro completo",
      "Automatizaciones n8n custom",
      "Dashboard unificado",
      "Soporte prioritario",
      "Revisiones ilimitadas 90 días",
      "Entrega en 21 días",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="precios"
      className="relative py-32 md:py-48 bg-[var(--ink-950)] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-center gap-6 mb-10">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--paez-300)]">
              06 — Inversión
            </span>
            <span className="flex-1 h-px bg-[var(--border-subtle)]" />
          </div>

          <h2
            className="font-display font-normal text-[var(--text-primary)] leading-[0.95] tracking-[-0.025em] max-w-[20ch]"
            style={{ fontSize: "clamp(44px, 6.5vw, 110px)", textWrap: "balance" }}
          >
            Setup <em className="italic text-[var(--paez-300)]">+</em> mensualidad.
            <br />
            <em className="italic text-[var(--paez-300)]">Sin</em> sorpresas.
          </h2>
          <p className="mt-8 max-w-[56ch] text-[16px] leading-[1.65] text-[var(--text-secondary)]">
            Inversión inicial que cubre implementación y go-live. Mensualidad
            que incluye mantenimiento, tokens de IA, ajustes y soporte. Precios
            en USD.
          </p>
        </motion.div>

        <div className="border-t border-[var(--border-subtle)]">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative grid md:grid-cols-[80px_1fr_auto] gap-8 md:gap-12 items-start py-12 md:py-16 border-b border-[var(--border-subtle)] ${
                plan.popular ? "bg-[var(--paez-950)]/50" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute top-5 right-6 font-mono text-[10px] tracking-[0.22em] uppercase font-medium text-[var(--ink-950)] bg-[var(--paez-300)] px-3 py-1 rounded-full">
                  · Flagship
                </span>
              )}

              <div>
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--paez-400)]">
                  {plan.num}
                </span>
              </div>

              <div className="min-w-0">
                <h3
                  className="font-display font-normal text-[var(--text-primary)] leading-[0.95] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(44px, 5.5vw, 88px)" }}
                >
                  {plan.name}
                </h3>
                <p className="mt-3 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--text-muted)]">
                  {plan.tagline}
                </p>

                <ul className="mt-8 space-y-2.5 max-w-[50ch]">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-[15px] leading-[1.55] text-[var(--text-secondary)]"
                    >
                      <span className="font-mono text-[11px] text-[var(--paez-400)] mt-1.5 shrink-0">
                        +
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:text-right md:min-w-[220px]">
                <div className="flex md:justify-end items-baseline gap-1.5">
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--text-faint)]">
                    USD
                  </span>
                  <span
                    className="font-display font-normal text-[var(--text-primary)] leading-none tracking-[-0.02em]"
                    style={{ fontSize: "clamp(48px, 6vw, 96px)" }}
                  >
                    {plan.setup}
                  </span>
                </div>
                <p className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-faint)]">
                  setup único
                </p>

                <div className="mt-5 flex md:justify-end items-baseline gap-1.5">
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-faint)]">
                    +
                  </span>
                  <span
                    className="font-display italic text-[var(--paez-300)] leading-none tracking-[-0.01em]"
                    style={{ fontSize: "clamp(24px, 3vw, 44px)" }}
                  >
                    {plan.mrr}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-faint)]">
                    / mes
                  </span>
                </div>

                <a
                  href="#contacto"
                  className="mt-8 inline-flex md:float-right items-center gap-3 rounded-full pl-5 pr-4 py-3 font-mono text-[10px] tracking-[0.22em] uppercase font-medium transition-all border border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--paez-300)] hover:text-[var(--paez-300)]"
                >
                  Empezar
                  <span className="inline-block w-5 h-px bg-current" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center text-[15px] text-[var(--text-secondary)]"
        >
          ¿Necesitas algo personalizado?{" "}
          <a
            href="#contacto"
            className="font-display italic text-xl text-[var(--paez-300)] underline underline-offset-[6px] decoration-[var(--paez-800)] transition-colors hover:decoration-[var(--paez-300)] ml-1"
          >
            hablemos →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
