"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Responde cotizaciones en menos de diez segundos a cualquier hora. Recuperé tres horas al día y dejé de vivir pegada al WhatsApp.",
    client: "Dueña — Dotación empresarial B2B",
    location: "Huila · Colombia",
    metric: "−80%",
    metricLabel: "tiempo manual",
  },
  {
    quote:
      "Pipeline de leads automatizado desde cero. Formulario, CRM, seguimiento. Los leads dejaron de perderse en correos sin responder.",
    client: "CEO — Real Estate LATAM",
    location: "Internacional",
    metric: "100%",
    metricLabel: "trazabilidad",
  },
  {
    quote:
      "Contenido de TikTok automatizado de punta a punta. Data real-time, script IA, imagen, publicación. Volví a pensar en estrategia.",
    client: "Fundador — SaaS deportivo",
    location: "LATAM",
    metric: "E2E",
    metricLabel: "pipeline",
  },
];

const industries = [
  "Dotación B2B",
  "Real Estate",
  "SaaS",
  "E-commerce",
  "Clínicas",
  "Asesorías legales",
  "Restaurantes",
  "Inmobiliarias",
  "Agencias de viajes",
  "Academias",
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative py-32 md:py-48 bg-[var(--paez-950)] overflow-hidden"
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
              05 — Testimonios
            </span>
            <span className="flex-1 h-px bg-[var(--paez-800)]/40" />
          </div>

          <h2
            className="font-display font-normal text-[var(--text-primary)] leading-[0.95] tracking-[-0.025em] max-w-[18ch]"
            style={{ fontSize: "clamp(44px, 6.5vw, 110px)", textWrap: "balance" }}
          >
            Métricas reales,
            <br />
            <em className="italic text-[var(--paez-300)]">no promesas</em>.
          </h2>
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.client}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-20 items-start border-t border-[var(--paez-800)]/40 pt-12"
            >
              <div className="md:sticky md:top-32">
                <span
                  className="font-display italic text-[var(--paez-300)] leading-none block tracking-[-0.02em]"
                  style={{ fontSize: "clamp(72px, 10vw, 160px)" }}
                >
                  {t.metric}
                </span>
                <p className="mt-3 font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--text-faint)]">
                  {t.metricLabel}
                </p>
              </div>

              <div>
                <span
                  className="font-display italic text-[var(--paez-400)]/30 leading-none block"
                  style={{ fontSize: "clamp(72px, 8vw, 140px)" }}
                  aria-hidden
                >
                  &ldquo;
                </span>
                <blockquote
                  className="font-display font-normal italic text-[var(--text-primary)] leading-[1.15] tracking-[-0.01em] mt-[-30px]"
                  style={{ fontSize: "clamp(26px, 3vw, 44px)", textWrap: "balance" }}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-4 flex-wrap">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--paez-300)]">
                    {t.client}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--text-faint)]">
                    — {t.location}
                  </span>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>

        {/* Marquee de industrias */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-32 md:mt-40 overflow-hidden"
        >
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-center mb-10 text-[var(--text-faint)]">
            · Industrias donde replicamos el modelo ·
          </p>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[var(--paez-950)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[var(--paez-950)] to-transparent" />
            <div className="marquee-track flex gap-14">
              {[...industries, ...industries].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="shrink-0 font-display italic text-3xl md:text-5xl text-[var(--text-secondary)] whitespace-nowrap"
                >
                  {name}
                  <span className="text-[var(--paez-400)] ml-14">·</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marqueeScroll 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
