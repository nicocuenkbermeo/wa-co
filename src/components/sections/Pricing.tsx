"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  tagline: string;
  price: string;
  features: string[];
  popular: boolean;
}

const plans: Plan[] = [
  {
    name: "Plan B\u00e1sico",
    tagline: "Ideal para empezar",
    price: "$800 USD",
    features: [
      "Landing page",
      "Dise\u00f1o responsive",
      "SEO b\u00e1sico",
      "1 revisi\u00f3n",
      "Entrega en 5 d\u00edas",
    ],
    popular: false,
  },
  {
    name: "Plan Profesional",
    tagline: "Para crecer de verdad",
    price: "$1,500 USD",
    features: [
      "Sitio multi-p\u00e1gina (hasta 5)",
      "Dise\u00f1o premium",
      "SEO avanzado",
      "Revisiones ilimitadas",
      "Entrega en 10 d\u00edas",
      "Soporte 30 d\u00edas",
    ],
    popular: true,
  },
  {
    name: "Plan Empresa",
    tagline: "Todo incluido",
    price: "$3,000 USD",
    features: [
      "Sitio completo + Blog",
      "Chatbot WhatsApp IA",
      "Automatizaci\u00f3n n8n",
      "SEO + Analytics",
      "Revisiones ilimitadas",
      "Soporte 90 d\u00edas",
    ],
    popular: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function Pricing() {
  return (
    <section id="precios" className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p
            className="text-sm uppercase tracking-widest mb-4"
            style={{ color: "#D4A853" }}
          >
            PLANES
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold leading-tight"
            style={{ color: "#FAFAFA" }}
          >
            Inversi&oacute;n clara, sin sorpresas
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`rounded-2xl p-8 relative ${
                plan.popular ? "md:-mt-4 md:mb-[-16px]" : ""
              }`}
              style={{
                backgroundColor: "#161616",
                border: plan.popular
                  ? "2px solid #4A9D6E"
                  : "1px solid #222222",
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: "#4A9D6E", color: "#FAFAFA" }}
                >
                  Popular
                </div>
              )}

              <p className="text-sm font-medium mb-1" style={{ color: "#A1A1A1" }}>
                {plan.tagline}
              </p>
              <h3
                className="text-xl font-semibold mb-5"
                style={{ color: "#FAFAFA" }}
              >
                {plan.name}
              </h3>

              <div className="mb-6">
                <span className="text-xs" style={{ color: "#A1A1A1" }}>
                  Desde
                </span>
                <p
                  className="font-display text-4xl font-bold"
                  style={{ color: "#FAFAFA" }}
                >
                  {plan.price}
                </p>
              </div>

              <div
                className="h-px w-full mb-6"
                style={{ backgroundColor: "#222222" }}
              />

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: "#4A9D6E" }}
                      strokeWidth={2.5}
                    />
                    <span className="text-sm" style={{ color: "#FAFAFA" }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`block w-full text-center rounded-lg py-3 text-sm font-semibold transition-all ${
                  plan.popular
                    ? "text-white shadow-lg"
                    : "text-white"
                }`}
                style={
                  plan.popular
                    ? {
                        backgroundColor: "#4A9D6E",
                        boxShadow: "0 8px 24px rgba(74,157,110,0.25)",
                      }
                    : {
                        border: "1px solid #222222",
                        backgroundColor: "transparent",
                        color: "#FAFAFA",
                      }
                }
              >
                Empezar ahora
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-base" style={{ color: "#A1A1A1" }}>
            &iquest;Necesitas algo personalizado?{" "}
            <a
              href="#contacto"
              className="font-semibold underline underline-offset-4 transition-colors hover:opacity-80"
              style={{ color: "#D4A853" }}
            >
              Hablemos
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
