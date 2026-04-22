"use client";

import Reveal from "../lib/Reveal";
import SplitText from "../lib/SplitText";
import { MonsteraLeaf, VineNervure } from "../icons/Botanicals";
import { T } from "../tokens";

const PRINCIPLES = [
  {
    code: "i",
    title: "Founder invisible",
    body: "wa.co no es una persona, es un producto. Nada depende de que alguien conteste.",
  },
  {
    code: "ii",
    title: "Raíces locales",
    body: "Nacemos en el Huila. El río Magdalena nos enseñó cómo fluye un sistema que nunca para.",
  },
  {
    code: "iii",
    title: "Corre sola",
    body: "Todo lo que construimos se diseña para operar sin humanos en el loop — con el humano como supervisor, no operador.",
  },
  {
    code: "iv",
    title: "Automatización con alma",
    body: "La IA sirve al negocio del cliente, no al revés. Cada flujo se afina en terreno antes de prometer.",
  },
];

export default function Manifiesto() {
  return (
    <section id="proyecto" className="relative overflow-hidden py-24 md:py-32" style={{ background: T.creamDeep }}>
      <div className="pointer-events-none absolute -right-20 top-0 hidden md:block" style={{ zIndex: 0, opacity: 0.6 }}>
        <MonsteraLeaf size={320} rotate={40} />
      </div>
      <div className="pointer-events-none absolute -left-16 bottom-6 hidden md:block" style={{ zIndex: 0, opacity: 0.7 }}>
        <MonsteraLeaf size={260} rotate={-24} flipX />
      </div>
      <div className="pointer-events-none absolute bottom-20 left-[42%] hidden lg:block" style={{ zIndex: 0, opacity: 0.6 }}>
        <VineNervure width={420} />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-20 grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em]" style={{ color: T.fire, fontWeight: 500 }}>
              · Proyecto
            </p>
            <div className="font-mono text-[12px] leading-[1.6]" style={{ color: `${T.ink}88` }}>
              Manifiesto wa.co · 2026.
              <br />
              Cuatro principios que hacen
              <br />
              que cada implementación corra.
            </div>
          </Reveal>
          <div className="md:col-span-8">
            <h2
              className="leading-[0.9] tracking-[-0.03em]"
              style={{
                fontFamily: "var(--font-unbounded)",
                fontWeight: 200,
                fontSize: "clamp(36px, 6vw, 88px)",
                color: T.ink,
                textWrap: "balance",
              }}
            >
              <SplitText text="Una agencia que" as="span" stagger={0.04} />
              <br />
              <SplitText
                text="funciona como el río."
                as="span"
                stagger={0.04}
                delay={0.15}
                style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", fontWeight: 300, color: T.selva }}
              />
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.code} delay={i * 0.08}>
              <article
                className="h-full p-7"
                style={{
                  background: "#FFFDF4",
                  border: `1.5px solid ${T.ink}1f`,
                  borderRadius: 4,
                  minHeight: 260,
                }}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.32em]" style={{ color: T.selva }}>
                    {p.code}.
                  </span>
                  <span className="h-[1px] flex-1 ml-3" style={{ background: `${T.ink}22` }} />
                </div>
                <h3
                  className="mb-5 leading-[1.05] tracking-[-0.02em]"
                  style={{
                    fontFamily: "var(--font-unbounded)",
                    fontWeight: 300,
                    fontSize: "clamp(22px, 2.4vw, 30px)",
                    color: T.ink,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[14px] leading-[1.55]"
                  style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, color: `${T.ink}bb` }}
                >
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
