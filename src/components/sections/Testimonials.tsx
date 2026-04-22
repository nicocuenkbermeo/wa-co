"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "El bot responde cotizaciones en menos de diez segundos a cualquier hora. Recuperé tres horas al día y dejé de vivir pegada al teléfono.",
    client: "Dueña — Dotación empresarial B2B",
    location: "Huila, Colombia",
  },
  {
    quote:
      "El pipeline de leads está automatizado punta a punta. Formulario, CRM, seguimiento. Los leads dejaron de perderse entre correos sin responder.",
    client: "CEO — Real Estate LATAM",
    location: "Internacional",
  },
  {
    quote:
      "El contenido de TikTok se publica solo: data real-time, script IA, imagen, publicación. Volví a concentrarme en estrategia, no en operación.",
    client: "Fundador — SaaS deportivo",
    location: "LATAM",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative py-24 md:py-40 bg-[var(--bg-cream)] overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--paez-800)] mb-6">
            — En sus palabras
          </p>
          <h2
            className="font-display font-normal text-[var(--text-primary)] leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(36px, 5.2vw, 80px)", textWrap: "balance" }}
          >
            Lo dicen los que ya{" "}
            <em className="italic text-[var(--paez-800)]">dejaron de operar</em>.
          </h2>
        </motion.div>

        <div className="space-y-20 md:space-y-24">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.client}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl mx-auto text-center"
            >
              <span
                className="font-display italic text-[var(--paez-300)] leading-none block"
                style={{ fontSize: "clamp(72px, 10vw, 140px)" }}
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote
                className="font-display font-normal italic text-[var(--text-primary)] leading-[1.25] tracking-[-0.01em] mt-[-40px]"
                style={{ fontSize: "clamp(22px, 2.8vw, 40px)", textWrap: "balance" }}
              >
                {t.quote}
              </blockquote>
              <figcaption className="mt-10 flex items-center justify-center gap-4 flex-wrap">
                <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--paez-800)]">
                  {t.client}
                </span>
                <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--text-faint)]">
                  — {t.location}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
