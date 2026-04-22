"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "¿Cuánto tiempo toma implementar un chatbot?",
    a: "Plan Starter entre 5 y 7 días hábiles. Pro entre 10 y 14 días. Nuestro proceso está optimizado — reutilizamos componentes probados en producción con otros clientes.",
  },
  {
    q: "¿Qué incluye la mensualidad?",
    a: "Hosting del flujo, tokens de IA, mantenimiento, ajustes menores, monitoreo 24/7 y reuniones mensuales de optimización. Sin costos ocultos.",
  },
  {
    q: "¿El chatbot funciona con mi número actual de WhatsApp?",
    a: "Sí. Configuramos sobre tu cuenta de WhatsApp Business. Solo necesitamos acceso temporal a tu Meta Business Suite para la integración.",
  },
  {
    q: "¿Qué pasa si el bot se equivoca?",
    a: "Todos los flujos tienen modo de escalamiento a humano. Si el bot detecta que no sabe responder, te avisa. Los primeros 30 días revisamos conversaciones juntos para calibrar.",
  },
  {
    q: "¿Puedo ver el flujo mientras lo construyen?",
    a: "Sí. Compartimos acceso al n8n y a un dashboard de pruebas. Puedes ver cada mensaje que entra y sale mientras iteramos.",
  },
  {
    q: "¿Aceptan pagos en pesos colombianos?",
    a: "Sí. Facturamos en COP o USD. Para clientes Colombia normalmente usamos COP con transferencia bancaria o PSE.",
  },
  {
    q: "¿Trabajan con empresas fuera de Colombia?",
    a: "Sí. Estamos enraizados en el Huila pero trabajamos con clientes en LATAM y USA. Reuniones remotas, soporte 24/7 por WhatsApp.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-40 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20 max-w-3xl"
        >
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--paez-800)] mb-6">
            — Preguntas
          </p>
          <h2
            className="font-display font-normal text-[var(--text-primary)] leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(36px, 5.2vw, 80px)", textWrap: "balance" }}
          >
            Resolvemos{" "}
            <em className="italic text-[var(--paez-800)]">dudas</em>.
          </h2>
        </motion.div>

        <div className="border-t border-[var(--border-subtle)]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="border-b border-[var(--border-subtle)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-start justify-between gap-8 text-left py-7 md:py-8 group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-5 md:gap-8 flex-1 min-w-0">
                    <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--text-faint)] mt-3 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="font-display font-normal text-[var(--text-primary)] leading-[1.15] tracking-[-0.015em] transition-colors group-hover:text-[var(--paez-800)]"
                      style={{ fontSize: "clamp(20px, 2.2vw, 30px)" }}
                    >
                      {faq.q}
                    </span>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="shrink-0 mt-3 w-8 h-8 flex items-center justify-center"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--paez-800)] transition-colors"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    >
                      <path d="M 10 3 L 10 17 M 3 10 L 17 10" strokeLinecap="round" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pl-12 md:pl-20 pb-8 pr-12 text-[16px] leading-[1.7] text-[var(--text-secondary)] max-w-[60ch]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
