"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Responde cotizaciones en menos de 10 segundos a cualquier hora. La dueña recuperó 3 horas al día y dejó de vivir pegada al WhatsApp.",
    client: "Dotación empresarial B2B",
    location: "Huila · Colombia",
    metric: "−80%",
    metricLabel: "tiempo manual",
  },
  {
    quote:
      "Pipeline de leads automatizado desde cero. Formulario → CRM → seguimiento sin intervención humana. Los leads no se pierden más.",
    client: "Real estate LATAM",
    location: "Internacional",
    metric: "100%",
    metricLabel: "trazabilidad",
  },
  {
    quote:
      "Contenido de TikTok automatizado de punta a punta — data real-time → script IA → imagen → listo para publicar.",
    client: "SaaS pronósticos deportivos",
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
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 md:py-32 px-6 md:px-8 bg-[var(--bg-secondary)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16 pb-6 border-b border-[var(--border-subtle)]"
        >
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--paez-300)] mb-4">
            · Resultados
          </p>
          <h2 className="font-display text-[clamp(34px,4.6vw,60px)] leading-[1.05] tracking-[-0.02em] text-[var(--text-primary)]">
            Métricas reales, <em className="italic text-[var(--paez-300)]">no promesas</em>.
          </h2>
          <p className="mt-6 text-lg text-[var(--text-secondary)] leading-[1.6]">
            Casos en producción. Identidades bajo NDA, métricas y stack verificables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl p-8 bg-[var(--bg-primary)] border border-[var(--border)] transition-colors hover:border-[var(--paez-700)]/50"
            >
              {/* Big quote glyph */}
              <span className="font-display text-7xl leading-none italic text-[var(--paez-800)]/40 absolute top-4 right-6 select-none">
                &ldquo;
              </span>

              {/* Metric chip */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-display text-4xl italic text-[var(--paez-300)] leading-none">
                  {t.metric}
                </span>
                <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-[var(--text-muted)]">
                  {t.metricLabel}
                </span>
              </div>

              <p className="text-[15px] leading-[1.65] text-[var(--text-primary)] mb-6">
                {t.quote}
              </p>

              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <p className="text-sm text-[var(--text-primary)] font-medium">{t.client}</p>
                <p className="font-mono text-[11px] tracking-[0.1em] text-[var(--text-faint)] mt-1">
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 overflow-hidden"
        >
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-center mb-6 text-[var(--text-muted)]">
            · Industrias donde replicamos el modelo ·
          </p>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[var(--bg-secondary)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[var(--bg-secondary)] to-transparent" />

            <div className="marquee-track flex gap-3">
              {[...industries, ...industries].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="shrink-0 rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-secondary)]"
                >
                  {name}
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
          animation: marqueeScroll 25s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
