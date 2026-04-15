"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "\u00bfCu\u00e1nto tiempo toma crear mi sitio web?",
    answer:
      "Dependiendo del plan, entre 5 y 15 d\u00edas h\u00e1biles. Nuestro proceso optimizado con IA nos permite entregar mucho m\u00e1s r\u00e1pido que agencias tradicionales.",
  },
  {
    question: "\u00bfQu\u00e9 incluye el soporte post-lanzamiento?",
    answer:
      "Todos los planes incluyen soporte t\u00e9cnico. El Plan B\u00e1sico incluye 7 d\u00edas, Profesional 30 d\u00edas, y Empresa 90 d\u00edas. Esto cubre correcciones, ajustes menores y asistencia t\u00e9cnica.",
  },
  {
    question: "\u00bfPuedo ver avances durante el proceso?",
    answer:
      "Absolutamente. Compartimos un enlace de preview donde puedes ver tu sitio en tiempo real mientras lo construimos. Tus comentarios son bienvenidos en cada etapa.",
  },
  {
    question:
      "\u00bfEl chatbot de WhatsApp funciona con mi n\u00famero actual?",
    answer:
      "S\u00ed, configuramos el chatbot con tu n\u00famero de WhatsApp Business. Solo necesitamos acceso a tu cuenta de Meta Business para la integraci\u00f3n.",
  },
  {
    question: "\u00bfQu\u00e9 pasa si no me gusta el dise\u00f1o?",
    answer:
      "El Plan Profesional y Empresa incluyen revisiones ilimitadas. Iteramos hasta que est\u00e9s 100% satisfecho. Tu visi\u00f3n es nuestra prioridad.",
  },
  {
    question: "\u00bfOfrecen facturaci\u00f3n en pesos colombianos?",
    answer:
      "S\u00ed, manejamos facturaci\u00f3n en COP y USD. Podemos ajustar los pagos a tu moneda preferida.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
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
            PREGUNTAS FRECUENTES
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold leading-tight"
            style={{ color: "#FAFAFA" }}
          >
            Resolvemos tus dudas
          </h2>
        </motion.div>

        {/* Accordion */}
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
                key={faq.question}
                className="py-5"
                style={{ borderBottom: "1px solid #222222" }}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-base md:text-lg font-medium"
                    style={{ color: "#FAFAFA" }}
                  >
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      className="w-5 h-5"
                      style={{ color: "#A1A1A1" }}
                      strokeWidth={2}
                    />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p
                        className="pt-3 text-sm md:text-base leading-relaxed"
                        style={{ color: "#A1A1A1" }}
                      >
                        {faq.answer}
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
