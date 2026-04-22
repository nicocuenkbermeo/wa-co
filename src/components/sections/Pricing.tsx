"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "PyME empezando a automatizar",
    setup: "600",
    mrr: "150",
    features: [
      "Chatbot WhatsApp con IA",
      "Respuestas 24/7 a preguntas frecuentes",
      "Captura de leads a Google Sheets",
      "Setup Evolution API + n8n",
      "Entrega en 7 días",
    ],
    popular: false,
  },
  {
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
    <section id="precios" className="relative py-24 md:py-40 bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20 max-w-3xl"
        >
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--paez-800)] mb-6">
            — Inversión
          </p>
          <h2
            className="font-display font-normal text-[var(--text-primary)] leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(36px, 5.2vw, 80px)", textWrap: "balance" }}
          >
            Setup + mensualidad.
            <br />
            <em className="italic text-[var(--paez-800)]">Sin</em> sorpresas.
          </h2>
          <p className="mt-6 text-[16px] leading-[1.65] text-[var(--text-secondary)] max-w-[54ch]">
            Inversión inicial que cubre implementación y go-live. Mensualidad
            que incluye mantenimiento, tokens de IA, ajustes y soporte. Precios
            en USD.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative rounded-3xl p-8 md:p-10 flex flex-col ${
                plan.popular
                  ? "bg-[var(--paez-950)] text-[#fdfcf7] md:-mt-6 md:pb-12"
                  : "bg-[var(--bg-secondary)] border border-[var(--border-subtle)]"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.22em] uppercase font-medium whitespace-nowrap bg-[var(--paez-400)] text-[var(--paez-950)] px-4 py-1.5 rounded-full">
                  Flagship
                </span>
              )}

              <p className={`font-mono text-[11px] tracking-[0.22em] uppercase mb-4 ${plan.popular ? "text-[var(--paez-300)]" : "text-[var(--paez-800)]"}`}>
                {plan.tagline}
              </p>
              <h3
                className={`font-display font-normal leading-[0.95] tracking-[-0.02em] ${plan.popular ? "text-[#fdfcf7]" : "text-[var(--text-primary)]"}`}
                style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
              >
                {plan.name}
              </h3>

              <div className={`mt-8 pb-6 border-b ${plan.popular ? "border-[var(--paez-800)]" : "border-[var(--border-subtle)]"}`}>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-current opacity-60">
                    USD
                  </span>
                  <span
                    className="font-display font-normal leading-none tracking-[-0.02em]"
                    style={{ fontSize: "clamp(48px, 5vw, 72px)" }}
                  >
                    {plan.setup}
                  </span>
                </div>
                <p className="mt-1 font-mono text-[10px] tracking-[0.22em] uppercase text-current opacity-50">
                  setup único
                </p>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-current opacity-60">
                    +
                  </span>
                  <span
                    className={`font-display italic leading-none ${plan.popular ? "text-[var(--paez-300)]" : "text-[var(--paez-800)]"}`}
                    style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
                  >
                    {plan.mrr}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-current opacity-60">
                    / mes
                  </span>
                </div>
              </div>

              <ul className="mt-6 space-y-3 grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] leading-[1.55]">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${plan.popular ? "text-[var(--paez-300)]" : "text-[var(--paez-800)]"}`}
                      strokeWidth={2.4}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`mt-10 btn-pill justify-center ${
                  plan.popular ? "btn-primary" : "btn-secondary"
                }`}
              >
                Empezar
              </a>
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
          ¿Algo personalizado?{" "}
          <a
            href="#contacto"
            className="font-display italic text-xl text-[var(--paez-800)] underline underline-offset-[6px] decoration-[var(--paez-300)] transition-colors hover:decoration-[var(--paez-800)] ml-1"
          >
            hablemos →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
