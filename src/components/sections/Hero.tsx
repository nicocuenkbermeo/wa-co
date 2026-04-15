"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

/* ── Hoisted static style objects (rendering-hoist-jsx) ── */

const meshStyle: React.CSSProperties = {
  background: [
    "radial-gradient(ellipse 60% 50% at 20% 40%, rgba(74,157,110,.18) 0%, transparent 70%)",
    "radial-gradient(ellipse 50% 60% at 80% 30%, rgba(212,168,83,.12) 0%, transparent 70%)",
    "radial-gradient(ellipse 70% 50% at 50% 80%, rgba(74,157,110,.10) 0%, transparent 70%)",
  ].join(", "),
  animation: "heroMesh 12s ease-in-out infinite alternate",
};

const dotGridStyle: React.CSSProperties = {
  backgroundImage: "radial-gradient(circle, #FAFAFA 1px, transparent 1px)",
  backgroundSize: "24px 24px",
};

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

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Animated gradient mesh background ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={meshStyle}
      />

      {/* ── Dot grid overlay ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={dotGridStyle}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-light"
        >
          <Zap className="h-4 w-4 fill-accent text-accent" />
          Entrega en 7 d&iacute;as
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="font-display text-5xl font-bold leading-[1.08] tracking-tight text-foreground md:text-7xl"
        >
          Tu pr&oacute;ximo sitio web, listo en{" "}
          <span className="text-accent">d&iacute;as</span> &mdash; no en meses
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mx-auto mt-6 max-w-2xl text-lg text-secondary md:text-xl"
        >
          Dise&ntilde;amos sitios web premium y automatizamos tu negocio con
          inteligencia artificial. R&aacute;pido, profesional y a precio justo.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-light hover:shadow-accent-light/25"
          >
            Empieza tu Proyecto
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <a
            href="#portafolio"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-secondary hover:text-secondary"
          >
            Ver Portafolio
          </a>
        </motion.div>

        {/* Trust indicator */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-8 text-sm text-muted"
        >
          M&aacute;s de 20 proyectos entregados en Colombia
        </motion.p>
      </div>
    </section>
  );
}
