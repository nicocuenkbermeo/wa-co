"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Reveal from "../lib/Reveal";
import { T } from "../tokens";

type Testimonio = {
  quote: string;
  author: string;
  role: string;
  rotation: number;
  pin: string;
};

const TESTIMONIOS: Testimonio[] = [
  {
    quote:
      "El chatbot contesta a las 3am. Abrimos en la mañana y ya hay 4 cotizaciones listas para mandar. Antes se perdían.",
    author: "Gerente Comercial",
    role: "Dotaciones · Colombia",
    rotation: -2.5,
    pin: T.fire,
  },
  {
    quote:
      "Nos entregaron en 3 semanas lo que otra agencia nos pedía 3 meses y tres veces el presupuesto. Sin drama, sin reuniones de más.",
    author: "Fundadora",
    role: "PyME Retail · Neiva",
    rotation: 1.8,
    pin: T.yellow,
  },
  {
    quote:
      "La diferencia es que wa.co no te deja con 'funciona en mi máquina'. Hacen monitoreo, y si algo se cae, lo arreglan antes.",
    author: "Director de Operaciones",
    role: "Consumer Sports",
    rotation: -1.2,
    pin: T.cyan,
  },
  {
    quote:
      "Me liberaron tiempo real. Dejé de copiar y pegar cotizaciones — ahora atiendo clientes que antes ni miraba.",
    author: "Vendedor Senior",
    role: "Dotaciones · Colombia",
    rotation: 2.4,
    pin: T.pitaya,
  },
];

export default function Testimonios() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{ background: T.cream }}>
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-16 grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em]" style={{ color: T.fire, fontWeight: 500 }}>
              · Testimonios
            </p>
            <div className="font-mono text-[12px] leading-[1.6]" style={{ color: `${T.ink}88` }}>
              Voces reales.
              <br />
              Sin marketing filter —<br />
              sólo negocios que corren.
            </div>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-8">
            <h2
              className="leading-[0.92] tracking-[-0.03em]"
              style={{
                fontFamily: "var(--font-unbounded)",
                fontWeight: 200,
                fontSize: "clamp(36px, 6vw, 82px)",
                color: T.ink,
                textWrap: "balance",
              }}
            >
              Lo que dicen los que{" "}
              <em style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", color: T.selva }}>
                ya dejaron
              </em>{" "}
              de apagar incendios.
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          <div
            className="scrollbar-hide -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-10 pl-5 pr-5 md:-mx-10 md:gap-8 md:pl-10 md:pr-10"
            role="region"
            aria-label="Testimonios de clientes"
          >
            {TESTIMONIOS.map((t, i) => (
              <PolaroidCard key={i} {...t} />
            ))}
            <div className="shrink-0" aria-hidden style={{ width: 1 }} />
          </div>
          <div className="mt-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em]" style={{ color: `${T.ink}99` }}>
            <span>Desliza →</span>
            <span className="h-[1px] flex-1" style={{ background: `${T.ink}22` }} aria-hidden />
            <span>{TESTIMONIOS.length} voces</span>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>
    </section>
  );
}

function PolaroidCard({ quote, author, role, rotation, pin }: Testimonio) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <motion.article
      ref={ref}
      className="relative shrink-0 snap-center"
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      animate={inView ? { opacity: 1, y: 0, rotate: rotation } : undefined}
      whileHover={{ rotate: 0, y: -6 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      style={{
        width: "min(88vw, 420px)",
        background: "#FFFDF4",
        border: `1px solid ${T.ink}1a`,
        padding: "28px 28px 56px",
        boxShadow: `0 12px 40px rgba(10,10,8,0.08)`,
      }}
    >
      <span
        aria-hidden
        className="absolute left-1/2 top-[-12px] h-6 w-6 -translate-x-1/2 rounded-full"
        style={{ background: pin, border: `1.5px solid ${T.ink}`, boxShadow: `0 2px 6px rgba(10,10,8,0.25)` }}
      />
      <svg width="28" height="22" viewBox="0 0 28 22" fill="none" aria-hidden style={{ color: pin }}>
        <path
          d="M0 22V11C0 4.9 4.9 0 11 0V5C7.7 5 5 7.7 5 11H11V22H0zM17 22V11C17 4.9 21.9 0 28 0V5C24.7 5 22 7.7 22 11H28V22H17z"
          fill="currentColor"
        />
      </svg>
      <p
        className="mt-5 text-[17px] leading-[1.5]"
        style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, color: `${T.ink}e6` }}
      >
        {quote}
      </p>
      <div className="mt-7 flex items-end justify-between">
        <div>
          <div
            className="text-[13px] tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-unbounded)", fontWeight: 500, color: T.ink }}
          >
            {author}
          </div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: `${T.ink}77` }}>
            {role}
          </div>
        </div>
        <div className="font-mono text-[10px] tracking-[0.18em]" style={{ color: `${T.ink}99` }}>
          verificado
        </div>
      </div>
    </motion.article>
  );
}
