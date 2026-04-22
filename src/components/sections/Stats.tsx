"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "24 / 7",
    label: "Automatización continua",
    body: "Tu chatbot no duerme. Tu agente no se enferma. El flujo no se cansa.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path d="M32 12 L32 32 L46 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "−80%",
    label: "Tiempo manual",
    body: "Tareas repetitivas que tomaban horas ahora se resuelven en segundos.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <path d="M12 48 L26 30 L36 38 L52 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="30" r="2" fill="currentColor" />
        <circle cx="36" cy="38" r="2" fill="currentColor" />
        <circle cx="52" cy="18" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "100%",
    label: "Trazabilidad",
    body: "Cada mensaje, cada lead, cada acción con timestamp, intención y siguiente paso.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <rect x="14" y="14" width="36" height="36" rx="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path d="M22 26 L42 26 M22 32 L42 32 M22 38 L34 38" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "+ 20",
    label: "Clientes activos",
    body: "PyMEs, SaaS, real estate, dotación B2B. Todos con sistemas en producción.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <circle cx="24" cy="26" r="8" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="40" cy="26" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 50 C 10 40, 18 36, 24 36 C 30 36, 38 40, 38 50" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M34 50 C 34 44, 40 42, 44 42 C 50 42, 54 46, 54 50" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "7 días",
    label: "Entrega Starter",
    body: "Del briefing al go-live. Sin re-inventar la rueda: usamos lo que ya probamos.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <rect x="12" y="18" width="40" height="34" rx="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 28 L52 28" stroke="currentColor" strokeWidth="1.4" />
        <path d="M22 14 L22 22 M42 14 L42 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="32" cy="40" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "E2E",
    label: "Pipeline IA",
    body: "Desde el webhook hasta el post. De la API al WhatsApp. Sin trozos sueltos.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <circle cx="16" cy="32" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="48" cy="32" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="32" cy="18" r="5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="32" cy="46" r="5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M22 32 L27 32 M37 32 L42 32 M32 23 L32 27 M32 37 L32 41" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Stats() {
  return (
    <section
      id="numeros"
      className="relative py-24 md:py-36 bg-[var(--bg-cream)] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-24 max-w-3xl"
        >
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--paez-800)] mb-6">
            — En números
          </p>
          <h2
            className="font-display font-normal text-[var(--text-primary)] leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(36px, 5.2vw, 80px)", textWrap: "balance" }}
          >
            Datos, no{" "}
            <em className="italic text-[var(--paez-800)]">promesas</em>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[var(--paez-800)]"
            >
              {s.icon}
              <p
                className="font-display font-normal text-[var(--text-primary)] leading-[0.95] tracking-[-0.02em] mt-6"
                style={{ fontSize: "clamp(48px, 5vw, 84px)" }}
              >
                {s.number}
              </p>
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--paez-800)] mt-3">
                {s.label}
              </p>
              <p className="mt-4 text-[15px] leading-[1.6] text-[var(--text-secondary)] max-w-[32ch]">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
