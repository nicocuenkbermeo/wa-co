"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto tiempo toma implementar un chatbot?",
    a: "Plan Starter entre 5 y 7 días hábiles. Pro entre 10 y 14 días. Nuestro proceso está optimizado — no reinventamos la rueda, reutilizamos componentes probados en producción con otros clientes.",
  },
  {
    q: "¿Qué incluye la mensualidad?",
    a: "Hosting del flujo, tokens de IA (OpenAI), mantenimiento, ajustes menores, monitoreo 24/7, y reuniones mensuales de optimización. No hay costos ocultos — si algo se rompe, lo arreglamos.",
  },
  {
    q: "¿El chatbot funciona con mi número actual de WhatsApp?",
    a: "Sí. Configuramos sobre tu cuenta de WhatsApp Business. Solo necesitamos acceso temporal a tu Meta Business Suite para la integración. Tu número sigue siendo tuyo.",
  },
  {
    q: "¿Qué pasa si el bot se equivoca?",
    a: "Todos los flujos tienen un modo de escalamiento a humano. Si el bot detecta que no sabe responder, te avisa por WhatsApp o correo para que tomes el caso. Los primeros 30 días revisamos conversaciones juntos para calibrar.",
  },
  {
    q: "¿Puedo ver el flujo en tiempo real mientras lo construyen?",
    a: "Claro. Compartimos acceso al n8n y a un dashboard de pruebas. Puedes ver cada mensaje que entra y sale mientras iteramos.",
  },
  {
    q: "¿Aceptan pagos en pesos colombianos?",
    a: "Sí. Facturamos en COP o USD según prefieras. Para clientes Colombia normalmente usamos COP con transferencia bancaria o PSE.",
  },
  {
    q: "¿Trabajan con empresas fuera de Colombia?",
    a: "Sí. Aunque estamos enraizados en el Huila, trabajamos con clientes en LATAM y USA. Todas las reuniones son remotas y el soporte es 24/7 por WhatsApp.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-8 bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-3xl pb-6 border-b border-[var(--border-subtle)]"
        >
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--paez-300)] mb-4">
            · Preguntas
          </p>
          <h2 className="font-display text-[clamp(34px,4.6vw,60px)] leading-[1.05] tracking-[-0.02em] text-[var(--text-primary)]">
            Resolvemos tus <em className="italic text-[var(--paez-300)]">dudas</em>.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="border-b border-[var(--border-subtle)] last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-start justify-between gap-6 text-left py-6 group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs tracking-[0.1em] text-[var(--text-faint)] mt-1 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl md:text-2xl leading-[1.25] text-[var(--text-primary)] tracking-[-0.01em]">
                      {faq.q}
                    </span>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="shrink-0 mt-1.5"
                  >
                    <Plus
                      className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--paez-300)] transition-colors"
                      strokeWidth={1.5}
                    />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pl-10 pb-6 pr-12 text-base leading-[1.65] text-[var(--text-secondary)]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
