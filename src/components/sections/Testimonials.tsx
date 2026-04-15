"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "WA.CO transform\u00f3 nuestra presencia digital. El sitio qued\u00f3 incre\u00edble y el chatbot nos ahorra horas de trabajo.",
    name: "Mar\u00eda L\u00f3pez",
    role: "Gerente, TodoCamisas",
    initials: "ML",
  },
  {
    quote:
      "Profesionales, r\u00e1pidos y con un ojo para el detalle impresionante. Superaron todas nuestras expectativas.",
    name: "Carlos M\u00e9ndez",
    role: "Director, Almer\u00eda US",
    initials: "CM",
  },
  {
    quote:
      "El chatbot de WhatsApp cambi\u00f3 completamente nuestra atenci\u00f3n al cliente. Respuestas instant\u00e1neas 24/7.",
    name: "Andrea Ruiz",
    role: "Fundadora, TechStore",
    initials: "AR",
  },
];

const clientNames = [
  "TodoCamisas",
  "Almer\u00eda US",
  "TechStore",
  "A Lo Profundo",
  "FreshMarket",
  "Conexi\u00f3n Digital",
  "MiTienda.co",
  "AgroTech",
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

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 md:py-32 px-6 md:px-8">
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
            TESTIMONIOS
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold leading-tight"
            style={{ color: "#FAFAFA" }}
          >
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "#161616",
                border: "1px solid #222222",
              }}
            >
              <Quote
                className="w-8 h-8 mb-5"
                style={{ color: "#D4A853" }}
                strokeWidth={1.5}
              />

              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "#FAFAFA" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div
                className="h-px w-full mb-6"
                style={{ backgroundColor: "#222222" }}
              />

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
                  style={{ backgroundColor: "#4A9D6E", color: "#FAFAFA" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#FAFAFA" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "#A1A1A1" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 overflow-hidden"
        >
          <p
            className="text-xs uppercase tracking-widest text-center mb-6"
            style={{ color: "#A1A1A1" }}
          >
            Empresas que conf&iacute;an en nosotros
          </p>
          <div className="relative">
            {/* Fade edges */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
              style={{
                background:
                  "linear-gradient(to right, #0A0A0A, transparent)",
              }}
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
              style={{
                background:
                  "linear-gradient(to left, #0A0A0A, transparent)",
              }}
            />

            <div className="marquee-track flex gap-4">
              {[...clientNames, ...clientNames].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="shrink-0 rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap"
                  style={{
                    backgroundColor: "#161616",
                    border: "1px solid #222222",
                    color: "#A1A1A1",
                  }}
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
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          animation: marqueeScroll 25s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
