"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../lib/Reveal";
import MagneticButton from "../lib/MagneticButton";
import { T, WHATSAPP_LINK } from "../tokens";

type Plan = {
  code: string;
  name: string;
  tag: string;
  setupUsd: number;
  mrrUsd: number;
  features: string[];
  highlight?: boolean;
  accent: string;
};

const PLANS: Plan[] = [
  {
    code: "01",
    name: "Landing Express",
    tag: "Emprendedor · MVP",
    setupUsd: 800,
    mrrUsd: 30,
    features: ["Landing 1 página", "Dominio + deploy", "SEO básico", "Formulario WhatsApp", "1 mes soporte"],
    accent: T.cyan,
  },
  {
    code: "02",
    name: "E-commerce Pro",
    tag: "Tienda online",
    setupUsd: 2000,
    mrrUsd: 80,
    features: ["Catálogo hasta 50 productos", "Pagos Wompi + Stripe", "Carrito recuperación", "Panel admin", "Métricas mensuales"],
    accent: T.orange,
  },
  {
    code: "03",
    name: "Chatbot Starter",
    tag: "PyME · empezar a automatizar",
    setupUsd: 600,
    mrrUsd: 150,
    features: ["WhatsApp Business API", "Flujo de atención + FAQ", "Derivación a humano", "Integración 1 tool", "Reporte semanal"],
    accent: T.pitaya,
  },
  {
    code: "04",
    name: "Chatbot Pro",
    tag: "Flagship · volumen real",
    setupUsd: 1500,
    mrrUsd: 300,
    features: [
      "WhatsApp + agentes IA (Claude + GPT)",
      "Cotización + agenda automática",
      "Router multi-canal",
      "CRM 2-way sync",
      "Dashboard operativo en vivo",
      "Iteración mensual",
    ],
    highlight: true,
    accent: T.yellow,
  },
  {
    code: "05",
    name: "Bundle Completo",
    tag: "Web + Chatbot + Automatización",
    setupUsd: 3500,
    mrrUsd: 400,
    features: [
      "Landing o e-commerce",
      "Chatbot Pro incluido",
      "3 automatizaciones n8n",
      "Dashboards IA semanales",
      "Slot de consultoría mensual",
    ],
    accent: T.fire,
  },
];

const COP_RATE = 4100;

export default function Pricing() {
  const [currency, setCurrency] = useState<"USD" | "COP">("USD");

  return (
    <section id="pricing" className="relative overflow-hidden py-24 md:py-32" style={{ background: T.cream }}>
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-16 grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em]" style={{ color: T.selva, fontWeight: 500 }}>
              · Precios
            </p>
            <div className="font-mono text-[12px] leading-[1.6]" style={{ color: `${T.ink}88` }}>
              Cinco puntos de entrada.
              <br />
              Desde MVP hasta bundle completo.
              <br />
              Precios públicos, sin tira y afloja.
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-8">
            <h2
              className="leading-[0.92] tracking-[-0.03em]"
              style={{
                fontFamily: "var(--font-unbounded)",
                fontWeight: 200,
                fontSize: "clamp(36px, 6vw, 82px)",
                color: T.ink,
                textWrap: "balance",
              }}
            >
              Paga setup una vez.{" "}
              <em style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", color: T.selva }}>
                El sistema corre
              </em>{" "}
              todos los meses.
            </h2>
            <div className="mt-10 inline-flex items-center gap-2 rounded-full border p-1" style={{ borderColor: `${T.ink}33` }}>
              {(["USD", "COP"] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className="relative rounded-full px-5 py-2 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors"
                  style={{
                    color: currency === c ? T.cream : T.ink,
                  }}
                  aria-pressed={currency === c}
                >
                  {currency === c && (
                    <motion.span
                      layoutId="currency-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: T.ink }}
                      transition={{ type: "spring", stiffness: 320, damping: 26 }}
                    />
                  )}
                  <span className="relative">{c}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-12">
          {PLANS.map((p, i) => (
            <Reveal
              key={p.code}
              delay={i * 0.06}
              className={
                p.highlight
                  ? "md:col-span-6 lg:col-span-5"
                  : i === 0
                  ? "md:col-span-6 lg:col-span-7"
                  : i === 4
                  ? "md:col-span-12 lg:col-span-7"
                  : "md:col-span-6 lg:col-span-5"
              }
            >
              <PlanCard plan={p} currency={currency} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function formatCurrency(value: number, currency: "USD" | "COP"): string {
  if (currency === "USD") return `$${value.toLocaleString("en-US")} USD`;
  const cop = Math.round((value * COP_RATE) / 1000) * 1000;
  return `$${cop.toLocaleString("es-CO")} COP`;
}

function PlanCard({ plan, currency }: { plan: Plan; currency: "USD" | "COP" }) {
  const isHi = !!plan.highlight;
  return (
    <article
      className="relative flex h-full flex-col justify-between overflow-hidden p-8 md:p-10"
      style={{
        background: isHi ? T.selva : "#FFFDF4",
        color: isHi ? T.cream : T.ink,
        border: `1.5px solid ${isHi ? T.yellow : `${T.ink}22`}`,
        borderRadius: 4,
        minHeight: 440,
      }}
    >
      {isHi && (
        <div
          className="absolute right-5 top-5 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em]"
          style={{ background: T.yellow, color: T.ink, fontWeight: 600 }}
        >
          Flagship
        </div>
      )}
      <div>
        <div className="mb-8 flex items-center justify-between">
          <span className="font-mono text-[11px] tracking-[0.3em]" style={{ color: plan.accent }}>
            ({plan.code})
          </span>
          <span
            className="text-[10px] uppercase tracking-[0.22em]"
            style={{ color: isHi ? `${T.cream}aa` : `${T.ink}99` }}
          >
            {plan.tag}
          </span>
        </div>

        <h3
          className="mb-6 leading-[0.95] tracking-[-0.02em]"
          style={{
            fontFamily: "var(--font-unbounded)",
            fontWeight: 300,
            fontSize: "clamp(30px, 3.6vw, 48px)",
            color: isHi ? T.cream : T.ink,
          }}
        >
          {plan.name}
        </h3>

        <div className="mb-8 flex items-baseline gap-3">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`setup-${currency}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
              style={{
                fontFamily: "var(--font-unbounded)",
                fontWeight: 200,
                fontSize: "clamp(34px, 4vw, 56px)",
                color: isHi ? T.yellow : T.ink,
                letterSpacing: "-0.02em",
              }}
            >
              {formatCurrency(plan.setupUsd, currency)}
            </motion.div>
          </AnimatePresence>
        </div>
        <div
          className="mb-8 text-[13px]"
          style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", color: isHi ? `${T.cream}cc` : `${T.ink}99` }}
        >
          setup único · luego{" "}
          <span style={{ fontStyle: "normal", fontWeight: 500 }}>
            {formatCurrency(plan.mrrUsd, currency)}/mes
          </span>
        </div>

        <ul className="space-y-2.5" style={{ color: isHi ? `${T.cream}dd` : `${T.ink}cc` }}>
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-[14px] leading-[1.5]">
              <span aria-hidden className="mt-[9px] block h-[2px] w-3 shrink-0" style={{ background: plan.accent }} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <MagneticButton
          as="a"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em]"
          style={{
            background: isHi ? T.yellow : T.ink,
            color: isHi ? T.ink : T.cream,
          }}
        >
          Empezar
          <span aria-hidden>→</span>
        </MagneticButton>
      </div>
    </article>
  );
}
