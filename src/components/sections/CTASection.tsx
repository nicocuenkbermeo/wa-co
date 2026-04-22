"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Lettermark from "@/components/shared/Lettermark";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 * i,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const WA_LINK =
  "https://wa.me/573163836881?text=Hola,%20quiero%20hablar%20con%20wa.co";

export default function CTASection() {
  return (
    <section id="contacto" className="relative w-full py-32 md:py-40 overflow-hidden bg-[var(--bg-primary)]">
      {/* Background mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(212,182,40,0.08) 0%, transparent 70%)",
            "radial-gradient(ellipse 60% 40% at 30% 70%, rgba(63,107,64,0.14) 0%, transparent 70%)",
          ].join(", "),
        }}
      />

      {/* Topographic */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.14]"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke="var(--paez-700)" strokeWidth="0.6">
          <path d="M -50 200 Q 300 120, 600 200 T 1250 180" />
          <path d="M -50 260 Q 300 180, 600 260 T 1250 240" />
          <path d="M -50 320 Q 300 240, 600 320 T 1250 300" />
          <path d="M -50 380 Q 300 300, 600 380 T 1250 360" />
          <path d="M -50 440 Q 300 360, 600 440 T 1250 420" />
        </g>
      </svg>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          className="flex justify-center mb-10"
        >
          <div className="relative" style={{ animation: "breathe 6s ease-in-out infinite" }}>
            <div className="absolute inset-0 blur-[40px] opacity-30 paez-gradient-bg rounded-full" />
            <Lettermark height={80} className="relative" />
          </div>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
          className="font-display text-[clamp(40px,6vw,80px)] leading-[1.02] tracking-[-0.02em] text-[var(--text-primary)]"
        >
          Tu sistema, <em className="italic text-[var(--paez-300)]">corriendo solo</em>.
          <br />
          Empieza esta semana.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={2}
          className="mt-8 text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-[1.6]"
        >
          Agenda una llamada de 30 minutos. Te diagnosticamos gratis qué automatizar
          primero y dónde está el mayor retorno.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={3}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--paez-800)] hover:bg-[var(--paez-700)] px-8 py-4 text-base font-medium text-white transition-all shadow-[0_8px_24px_rgba(63,107,64,0.4)] hover:shadow-[0_12px_40px_rgba(63,107,64,0.55)]"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={1.8} />
            Escribir por WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <a
            href="mailto:hola@wa.co"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-8 py-4 text-base font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--paez-400)] hover:text-[var(--paez-300)]"
          >
            hola@wa.co
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={4}
          className="mt-10 font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--text-faint)]"
        >
          · Respuesta en menos de 4 horas · Neiva, Huila · Colombia ·
        </motion.p>
      </div>
    </section>
  );
}
