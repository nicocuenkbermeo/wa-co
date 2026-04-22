"use client";

import { motion } from "framer-motion";

const cases = [
  {
    num: "01",
    title: "Cotizador WhatsApp B2B",
    client: "Dotación empresarial",
    location: "Huila · Colombia",
    result: "−80% tiempo manual",
    secondary: "Respuesta <10s · 24/7",
    body: "Bot IA detecta intención de cotizar, calcula precio final con reglas custom y responde en <10 segundos. La dueña recuperó 3 horas al día y dejó de vivir pegada al WhatsApp.",
    tag: "Chatbot IA",
  },
  {
    num: "02",
    title: "Portal Inmobiliario LATAM",
    client: "Real Estate internacional",
    location: "Multi-país",
    result: "Pipeline E2E",
    secondary: "Leads captados sin fuga",
    body: "Portal multi-ciudad con búsqueda avanzada, captura de leads y ruteo automático a agentes por zona geográfica. Presencia digital desde cero.",
    tag: "Web App",
  },
  {
    num: "03",
    title: "Plataforma Pronósticos MLB",
    client: "SaaS de datos deportivos",
    location: "LATAM",
    result: "0 horas humanas",
    secondary: "Pipeline picks → TikTok auto",
    body: "Contenido de TikTok automatizado de punta a punta: data real-time → script IA → imagen generada → publicación. El founder volvió a estrategia.",
    tag: "SaaS",
  },
  {
    num: "04",
    title: "Asistente de Ventas IA",
    client: "Servicios profesionales",
    location: "Colombia",
    result: "100% trazabilidad",
    secondary: "24/7 + agenda auto",
    body: "Atención automática 24/7, cotización guiada, agendamiento en Calendar. Ningún lead se cae: todos tienen timestamp, intención y próxima acción.",
    tag: "Automatización",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portafolio"
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
              04 — Casos
            </span>
            <span className="flex-1 h-px bg-[var(--border-subtle)]" />
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--text-faint)]">
              04 / producción
            </span>
          </div>

          <h2
            className="font-display font-normal text-[var(--text-primary)] leading-[0.95] tracking-[-0.025em] max-w-[20ch]"
            style={{ fontSize: "clamp(44px, 6.5vw, 110px)", textWrap: "balance" }}
          >
            Sistemas que{" "}
            <em className="italic text-[var(--paez-300)]">corren solos</em>
            <br />— desde ayer.
          </h2>
          <p className="mt-8 max-w-[56ch] text-[16px] leading-[1.65] text-[var(--text-secondary)]">
            Casos reales en producción. Identidades bajo NDA; stack, métricas y
            trayectoria verificables al demo.
          </p>
        </motion.div>

        <div className="border-t border-[var(--border-subtle)]">
          {cases.map((c, i) => (
            <motion.a
              key={c.num}
              href="#contacto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group block border-b border-[var(--border-subtle)] py-12 md:py-20 transition-colors hover:bg-[var(--paez-950)]/40"
            >
              <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-16 items-start">
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--paez-400)] pt-4">
                  {c.num}
                </span>

                <div className="min-w-0">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--text-faint)]">
                    [{c.tag}]
                  </span>
                  <h3
                    className="mt-4 font-display font-normal text-[var(--text-primary)] leading-[0.98] tracking-[-0.02em] transition-colors group-hover:text-[var(--paez-200)]"
                    style={{ fontSize: "clamp(36px, 5vw, 80px)" }}
                  >
                    {c.title}
                  </h3>
                  <p className="mt-4 font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--text-muted)]">
                    {c.client} — {c.location}
                  </p>
                  <p className="mt-6 max-w-[60ch] text-[15px] md:text-[16px] leading-[1.65] text-[var(--text-secondary)]">
                    {c.body}
                  </p>
                </div>

                <div className="md:text-right md:min-w-[180px]">
                  <span
                    className="font-display italic text-[var(--paez-300)] leading-none tracking-[-0.02em] inline-block"
                    style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
                  >
                    {c.result}
                  </span>
                  <p className="mt-3 font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--text-faint)]">
                    {c.secondary}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
