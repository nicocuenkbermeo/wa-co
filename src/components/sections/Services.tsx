"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    sigla: "CH",
    title: "Chatbots WhatsApp",
    body: "Atención 24/7 con IA que cotiza, responde y captura leads. Integrado a WhatsApp Business, con tu voz de marca.",
    bg: "linear-gradient(135deg, #d4b628 0%, #b8a02a 100%)",
    textColor: "#172a1a",
  },
  {
    sigla: "n8",
    title: "Automatizaciones n8n",
    body: "Conectamos WhatsApp, Gmail, Sheets y tu CRM. El trabajo repetitivo se hace solo, en background.",
    bg: "linear-gradient(135deg, #3f6b40 0%, #2b4a2e 100%)",
    textColor: "#fdfcf7",
  },
  {
    sigla: "AG",
    title: "Agentes IA",
    body: "Asistentes entrenados con tu conocimiento. Ventas, soporte, operaciones — consistentes, siempre disponibles.",
    bg: "linear-gradient(135deg, #5f7a3c 0%, #3f6b40 100%)",
    textColor: "#fdfcf7",
  },
  {
    sigla: "DB",
    title: "Dashboards",
    body: "Métricas en vivo para decidir con datos. Observabilidad end-to-end de cada flujo que corremos.",
    bg: "linear-gradient(135deg, #e66a2e 0%, #c4511f 100%)",
    textColor: "#fdfcf7",
  },
  {
    sigla: "CO",
    title: "Consultoría IA",
    body: "Diagnóstico + roadmap. Identificamos dónde la IA da más ROI antes de escribir una línea de código.",
    bg: "linear-gradient(135deg, #f2e8d4 0%, #e5d1a8 100%)",
    textColor: "#172a1a",
  },
  {
    sigla: "DV",
    title: "Desarrollo a medida",
    body: "Apps Next.js, APIs, integraciones profundas. Cuando lo estándar no alcanza, construimos exactamente lo que necesitas.",
    bg: "linear-gradient(135deg, #172a1a 0%, #0a0a08 100%)",
    textColor: "#e0c94a",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-24 md:py-40 bg-[var(--bg-primary)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20 max-w-3xl"
        >
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--paez-800)] mb-6">
            — Capacidades
          </p>
          <h2
            className="font-display font-normal text-[var(--text-primary)] leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(36px, 5.2vw, 80px)", textWrap: "balance" }}
          >
            6 maneras de dejar que tu negocio{" "}
            <em className="italic text-[var(--paez-800)]">corra solo</em>.
          </h2>
          <p className="mt-6 text-[16px] md:text-[17px] leading-[1.65] text-[var(--text-secondary)] max-w-[58ch]">
            Cada capacidad ya está probada en producción con clientes reales.
            Combinables entre sí — el chatbot alimenta el dashboard, el agente
            dispara la automatización.
          </p>
        </motion.div>

        {/* Grid 3x2 — like a map of states */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, i) => (
            <motion.a
              href="#contacto"
              key={s.sigla}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative block rounded-3xl overflow-hidden p-8 md:p-10 min-h-[320px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(20,19,15,0.14)]"
              style={{
                background: s.bg,
                color: s.textColor,
              }}
            >
              <div className="flex items-start justify-between">
                <span
                  className="font-display text-7xl italic leading-none opacity-80"
                  style={{ color: s.textColor }}
                >
                  {s.sigla}
                </span>
                <span
                  className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60"
                  style={{ color: s.textColor }}
                >
                  {String(i + 1).padStart(2, "0")} / 06
                </span>
              </div>

              <div>
                <h3
                  className="font-display font-normal leading-[1.1] tracking-[-0.015em] mb-4"
                  style={{
                    fontSize: "clamp(24px, 2.6vw, 34px)",
                    color: s.textColor,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[14px] md:text-[15px] leading-[1.6] opacity-85 max-w-[38ch]"
                  style={{ color: s.textColor }}
                >
                  {s.body}
                </p>
                <span
                  className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase transition-all group-hover:gap-3"
                  style={{ color: s.textColor }}
                >
                  Saber más
                  <span className="inline-block w-5 h-px bg-current transition-all group-hover:w-8" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
