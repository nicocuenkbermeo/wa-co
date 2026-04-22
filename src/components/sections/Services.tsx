"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Workflow,
  Bot,
  LineChart,
  Sparkles,
  Code2,
} from "lucide-react";

const services = [
  {
    num: "01",
    title: "Chatbots IA para WhatsApp",
    desc: "Atención 24/7 que cotiza, responde dudas y captura leads con la voz de tu marca. Integrado directo a WhatsApp Business.",
    icon: MessageSquare,
    featured: true,
  },
  {
    num: "02",
    title: "Automatizaciones n8n",
    desc: "Conectamos WhatsApp, Gmail, Sheets y tu CRM. El trabajo repetitivo deja de existir.",
    icon: Workflow,
  },
  {
    num: "03",
    title: "Agentes IA personalizados",
    desc: "Asistentes entrenados con el conocimiento de tu empresa — ventas, soporte, operaciones.",
    icon: Bot,
  },
  {
    num: "04",
    title: "Dashboards & Analytics",
    desc: "Métricas reales en tiempo real para que decidas con datos, no con intuición.",
    icon: LineChart,
  },
  {
    num: "05",
    title: "Consultoría de IA",
    desc: "Diagnóstico de procesos + roadmap de automatización para PyMEs.",
    icon: Sparkles,
  },
  {
    num: "06",
    title: "Desarrollo a medida",
    desc: "Apps web Next.js, APIs, integraciones. Cuando lo estándar no alcanza.",
    icon: Code2,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 px-6 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Head */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex items-end justify-between gap-8 pb-6 border-b border-[var(--border-subtle)]"
        >
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--paez-300)] mb-4">
              · Servicios
            </p>
            <h2 className="font-display text-[clamp(34px,4.6vw,60px)] leading-[1.05] tracking-[-0.02em] text-[var(--text-primary)] max-w-3xl">
              Todo lo que tu negocio necesita para{" "}
              <em className="italic text-[var(--paez-300)]">fluir solo</em>.
            </h2>
          </div>
          <span className="hidden md:block font-mono text-xs tracking-[0.1em] text-[var(--text-faint)] shrink-0">
            6 / capacidades
          </span>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[var(--border-subtle)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group relative bg-[var(--bg-secondary)] p-8 md:p-10 flex flex-col gap-4 min-h-[300px] transition-colors duration-300 hover:bg-[var(--bg-card)] ${
                  service.featured ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.1em] text-[var(--text-faint)]">
                    {service.num}
                  </span>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--paez-800)]/20 border border-[var(--paez-700)]/30 transition-colors group-hover:bg-[var(--paez-800)]/40">
                    <Icon
                      className="w-4 h-4 text-[var(--paez-300)]"
                      strokeWidth={1.6}
                    />
                  </div>
                </div>

                <h3 className="font-display text-[28px] leading-[1.1] tracking-[-0.01em] text-[var(--text-primary)] mt-auto">
                  {service.title}
                </h3>

                <p className="text-[15px] leading-[1.6] text-[var(--text-secondary)]">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
