"use client";

import { motion } from "framer-motion";

const cases = [
  {
    sigla: "DO",
    title: "Cotizador WhatsApp B2B",
    sector: "Dotación empresarial",
    location: "Huila, Colombia",
    body: "Bot con IA que detecta intención de cotizar, calcula precio con reglas custom y responde en menos de 10 segundos.",
    metric: "−80%",
    metricLabel: "Tiempo manual",
    bg: "linear-gradient(135deg, #3f6b40 0%, #172a1a 100%)",
    textColor: "#fdfcf7",
  },
  {
    sigla: "RE",
    title: "Portal inmobiliario LATAM",
    sector: "Real estate internacional",
    location: "Multi-país",
    body: "Portal multi-ciudad con búsqueda avanzada, captura de leads y ruteo automático a agentes por zona geográfica.",
    metric: "100%",
    metricLabel: "Trazabilidad",
    bg: "linear-gradient(135deg, #d4b628 0%, #8a8a36 100%)",
    textColor: "#172a1a",
  },
  {
    sigla: "ML",
    title: "Plataforma pronósticos MLB",
    sector: "SaaS datos deportivos",
    location: "LATAM",
    body: "Pipeline end-to-end: data real-time → script IA → imagen generada → publicación TikTok. Cero intervención manual.",
    metric: "E2E",
    metricLabel: "Pipeline IA",
    bg: "linear-gradient(135deg, #e66a2e 0%, #c4511f 100%)",
    textColor: "#fdfcf7",
  },
  {
    sigla: "AS",
    title: "Asistente de ventas IA",
    sector: "Servicios profesionales",
    location: "Colombia",
    body: "Atención 24/7 + cotización guiada + agendamiento en Calendar. Ningún lead se cae.",
    metric: "24 / 7",
    metricLabel: "Siempre activo",
    bg: "linear-gradient(135deg, #5f7a3c 0%, #3f6b40 100%)",
    textColor: "#fdfcf7",
  },
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="relative py-24 md:py-40 bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20 max-w-3xl"
        >
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--paez-800)] mb-6">
            — Casos en producción
          </p>
          <h2
            className="font-display font-normal text-[var(--text-primary)] leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(36px, 5.2vw, 80px)", textWrap: "balance" }}
          >
            Sistemas que{" "}
            <em className="italic text-[var(--paez-800)]">corren solos</em>
            , hoy.
          </h2>
          <p className="mt-6 text-[16px] leading-[1.65] text-[var(--text-secondary)] max-w-[56ch]">
            Casos reales con métricas verificables. Identidades bajo NDA; stack,
            arquitectura y resultados se muestran al demo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {cases.map((c, i) => (
            <motion.a
              href="#contacto"
              key={c.sigla}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative block rounded-3xl overflow-hidden min-h-[420px] flex flex-col justify-between p-8 md:p-12 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(20,19,15,0.18)]"
              style={{ background: c.bg, color: c.textColor }}
            >
              <div className="flex items-start justify-between">
                <span
                  className="font-display italic leading-none opacity-90"
                  style={{ fontSize: "clamp(72px, 8vw, 120px)", color: c.textColor }}
                >
                  {c.sigla}
                </span>
                <div className="text-right">
                  <span
                    className="font-display italic leading-none block"
                    style={{ fontSize: "clamp(36px, 4vw, 60px)", color: c.textColor }}
                  >
                    {c.metric}
                  </span>
                  <span
                    className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-70 mt-2 block"
                    style={{ color: c.textColor }}
                  >
                    {c.metricLabel}
                  </span>
                </div>
              </div>

              <div>
                <h3
                  className="font-display font-normal leading-[1.1] tracking-[-0.015em] mb-4"
                  style={{
                    fontSize: "clamp(26px, 3.2vw, 42px)",
                    color: c.textColor,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-70 mb-5"
                  style={{ color: c.textColor }}
                >
                  {c.sector} · {c.location}
                </p>
                <p
                  className="text-[14px] md:text-[15px] leading-[1.6] opacity-90 max-w-[46ch]"
                  style={{ color: c.textColor }}
                >
                  {c.body}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
