"use client";

import NumberCounter from "../lib/NumberCounter";
import Reveal from "../lib/Reveal";
import { T } from "../tokens";

const STATS = [
  { n: "37", label: "municipios", sub: "del Huila" },
  { n: "1.2M", label: "habitantes", sub: "mercado local" },
  { n: "24/7", label: "operación", sub: "chatbot corriendo" },
  { n: "∞", label: "repeticiones", sub: "que un flujo elimina" },
];

export default function Cifras() {
  return (
    <section
      id="cifras"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: T.selva, color: T.cream }}
    >
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p
            className="mb-10 text-[12px] uppercase tracking-[0.3em] md:text-[13px]"
            style={{ color: T.yellow, fontFamily: "var(--font-unbounded)", fontWeight: 400 }}
          >
            · El territorio que nos forma
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="mb-16 leading-[0.92] tracking-[-0.025em] md:mb-24"
            style={{
              fontFamily: "var(--font-unbounded)",
              fontWeight: 200,
              fontSize: "clamp(34px, 5.5vw, 78px)",
              color: T.yellow,
              textWrap: "balance",
              maxWidth: "22ch",
            }}
          >
            37 municipios. 1.2M personas.{" "}
            <em style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", color: T.cream }}>
              Un río madre.
            </em>
            <br />
            Miles de PyMEs — perdiendo horas en tareas que un agente IA resuelve dormido.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-4 gap-y-14 md:grid-cols-4 md:gap-x-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.15 + i * 0.1}>
              <div className="border-t pt-5" style={{ borderColor: `${T.yellow}55` }}>
                <NumberCounter
                  value={s.n}
                  className="block leading-none"
                  style={{
                    fontFamily: "var(--font-unbounded)",
                    fontWeight: 200,
                    fontSize: "clamp(50px, 8vw, 112px)",
                    color: T.cream,
                    letterSpacing: "-0.04em",
                  }}
                />
                <div className="mt-4">
                  <div
                    className="text-[13px] uppercase tracking-[0.22em]"
                    style={{ color: T.yellow, fontWeight: 500 }}
                  >
                    {s.label}
                  </div>
                  <div
                    className="mt-1 text-[13px]"
                    style={{
                      color: `${T.cream}aa`,
                      fontFamily: "var(--font-fraunces)",
                      fontStyle: "italic",
                    }}
                  >
                    {s.sub}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <svg
        aria-hidden
        className="absolute -right-10 -top-10 hidden opacity-25 md:block"
        width="320"
        height="320"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M100 10 C 150 40, 170 90, 150 150 C 130 180, 80 190, 50 160 C 20 130, 30 70, 60 40 C 75 25, 85 15, 100 10 Z"
          fill={T.yellow}
        />
        <path d="M100 20 L 100 180" stroke={T.selva} strokeWidth="2" />
        {[...Array(8)].map((_, i) => (
          <path
            key={i}
            d={`M 100 ${40 + i * 18} Q ${70 - i * 4} ${50 + i * 18}, ${55 - i * 3} ${65 + i * 18}`}
            stroke={T.selva}
            strokeWidth="1.5"
            fill="none"
          />
        ))}
      </svg>
    </section>
  );
}
