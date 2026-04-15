"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * i,
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const bgStyle: React.CSSProperties = {
  background: [
    "linear-gradient(to bottom, rgba(74,157,110,0.10) 0%, #0A0A0A 100%)",
    "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(74,157,110,0.12) 0%, transparent 70%)",
  ].join(", "),
};

const WA_LINK =
  "https://wa.me/573163836881?text=Hola,%20quiero%20cotizar%20un%20proyecto";

export default function CTASection() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden" style={bgStyle}>
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#FAFAFA]"
        >
          ¿Listo para transformar tu presencia digital?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
          className="mt-6 text-lg text-[#A1A1A1]"
        >
          Agenda una llamada gratuita y te mostramos cómo podemos ayudarte a
          crecer.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={2}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-[#4A9D6E] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#3d8a5e]"
          >
            Agendar Llamada
            <ArrowRight className="h-5 w-5" />
          </a>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#4A9D6E] px-8 py-4 text-base font-semibold text-[#4A9D6E] transition-colors hover:bg-[#4A9D6E]/10"
          >
            <MessageCircle className="h-5 w-5" />
            Escribir por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
