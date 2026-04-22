"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  tagline: string;
  setup: string;
  mrr: string;
  features: string[];
  popular: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    tagline: "PyME empezando a automatizar",
    setup: "$600",
    mrr: "$150",
    features: [
      "Chatbot WhatsApp con IA",
      "Respuestas 24/7 preguntas frecuentes",
      "Captura de leads a Google Sheets",
      "Setup Evolution API + n8n",
      "Entrega en 7 días",
    ],
    popular: false,
  },
  {
    name: "Pro",
    tagline: "Ventas + Agenda + IA completa",
    setup: "$1,500",
    mrr: "$300",
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
    name: "Bundle Total",
    tagline: "Web + Chatbot + Automatización",
    setup: "$3,500",
    mrr: "$400",
    features: [
      "Sitio multi-página premium",
      "Chatbot WhatsApp Pro completo",
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
    <section id="precios" className="py-24 md:py-32 px-6 md:px-8 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-3xl pb-6 border-b border-[var(--border-subtle)]"
        >
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--paez-300)] mb-4">
            · Planes
          </p>
          <h2 className="font-display text-[clamp(34px,4.6vw,60px)] leading-[1.05] tracking-[-0.02em] text-[var(--text-primary)]">
            Setup + mensualidad.{" "}
            <em className="italic text-[var(--paez-300)]">Sin sorpresas</em>.
          </h2>
          <p className="mt-6 text-lg text-[var(--text-secondary)] leading-[1.6]">
            Inversión inicial que cubre implementación y go-live. Mensualidad que incluye
            mantenimiento, tokens de IA, ajustes y soporte. Precios en USD.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.popular
                  ? "bg-gradient-to-b from-[var(--paez-950)] to-[var(--bg-card)] border-2 border-[var(--paez-700)] lg:-mt-4"
                  : "bg-[var(--bg-secondary)] border border-[var(--border)]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 font-mono text-[10px] tracking-[0.14em] uppercase font-medium whitespace-nowrap paez-gradient-bg text-[var(--ink-950)]">
                  Flagship
                </div>
              )}

              <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--text-muted)] mb-2">
                {plan.tagline}
              </p>
              <h3 className="font-display text-3xl leading-tight text-[var(--text-primary)] mb-6">
                {plan.name}
              </h3>

              <div className="mb-6 pb-6 border-b border-[var(--border-subtle)]">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl text-[var(--text-primary)] leading-none">
                    {plan.setup}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--text-muted)]">
                    USD · setup
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-3">
                  <span className="font-display text-2xl italic text-[var(--paez-300)] leading-none">
                    + {plan.mrr}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--text-muted)]">
                    USD / mes
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="w-4 h-4 mt-0.5 shrink-0 text-[var(--paez-300)]"
                      strokeWidth={2}
                    />
                    <span className="text-sm leading-[1.5] text-[var(--text-primary)]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`block w-full text-center rounded-full py-3.5 font-body text-sm font-medium transition-all ${
                  plan.popular
                    ? "bg-[var(--paez-800)] hover:bg-[var(--paez-700)] text-white shadow-[0_8px_24px_rgba(63,107,64,0.35)]"
                    : "border border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--paez-400)] hover:text-[var(--paez-300)]"
                }`}
              >
                Empezar
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-[15px] text-[var(--text-secondary)]">
            ¿Necesitas algo personalizado?{" "}
            <a
              href="#contacto"
              className="font-medium italic font-display text-lg text-[var(--paez-300)] underline underline-offset-4 decoration-[var(--paez-700)] transition-colors hover:decoration-[var(--paez-300)]"
            >
              Hablemos →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
