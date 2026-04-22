"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "../lib/Reveal";
import { T } from "../tokens";

type Step = {
  code: string;
  title: string;
  detail: string;
  accent: string;
  illustration: (color: string) => React.ReactNode;
};

const STEPS: Step[] = [
  {
    code: "01",
    title: "Diagnóstico",
    detail:
      "Una llamada de 30 min. Mapeamos tu operación, sacamos 3 cuellos de botella claros. Sin hablar de tecnología todavía — hablamos de lo que te quita tiempo.",
    accent: T.fire,
    illustration: (color) => <LeafIllustration color={color} />,
  },
  {
    code: "02",
    title: "Mapeo",
    detail:
      "Diagramamos el flujo actual y el flujo deseado. Definimos integraciones, costos y timeline. Si no cierran los números, te lo decimos antes de empezar.",
    accent: T.orange,
    illustration: (color) => <FlowIllustration color={color} />,
  },
  {
    code: "03",
    title: "Construcción",
    detail:
      "Montamos el flujo en n8n + IA. Pruebas en sandbox. Iteramos sobre data real tuya. Tú miras cómo corre antes de que salga a producción.",
    accent: T.yellow,
    illustration: (color) => <GearIllustration color={color} />,
  },
  {
    code: "04",
    title: "Lanzamiento",
    detail:
      "Paso a producción con monitoreo 24/7. Tú operas en sombra una semana antes de soltar a cliente real. Si algo falla, nosotros lo arreglamos antes de que tú te enteres.",
    accent: T.cyan,
    illustration: (color) => <RocketIllustration color={color} />,
  },
  {
    code: "05",
    title: "Iteración",
    detail:
      "Revisión mensual. Claude lee los logs y propone mejoras. Tú aprueba qué subir a producción. El sistema se vuelve más inteligente mes a mes.",
    accent: T.pitaya,
    illustration: (color) => <SpiralIllustration color={color} />,
  },
];

export default function Proceso() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(STEPS.length - 1) * 100}%`]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="proceso" ref={wrapperRef} className="relative" style={{ background: T.cream, height: `${STEPS.length * 85}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="mx-auto w-full max-w-[1400px] px-5 pt-28 md:px-10 md:pt-32">
          <Reveal>
            <div className="mb-6 flex items-center gap-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em]" style={{ color: T.selva, fontWeight: 500 }}>
                · Proceso
              </p>
              <div className="h-[1px] w-24" style={{ background: `${T.ink}33` }} aria-hidden />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="max-w-[18ch] leading-[0.92] tracking-[-0.03em]"
              style={{
                fontFamily: "var(--font-unbounded)",
                fontWeight: 200,
                fontSize: "clamp(32px, 5vw, 68px)",
                color: T.ink,
                textWrap: "balance",
              }}
            >
              De tu problema al{" "}
              <em style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", color: T.selva }}>
                sistema que fluye
              </em>{" "}
              en 2–4 semanas.
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-10 flex-1">
          <motion.div style={{ x }} className="flex h-full" aria-hidden>
            {STEPS.map((s) => (
              <div key={s.code} className="relative flex h-full w-screen shrink-0 items-center">
                <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-5 md:grid-cols-2 md:px-10">
                  <div className="order-2 md:order-1">
                    <div className="mb-8 flex items-center gap-4">
                      <span
                        className="flex h-[88px] w-[88px] items-center justify-center rounded-full"
                        style={{ background: s.accent, color: T.ink, border: `2px solid ${T.ink}` }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-unbounded)",
                            fontWeight: 300,
                            fontSize: 26,
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {s.code}
                        </span>
                      </span>
                      <div className="font-mono text-[11px] uppercase tracking-[0.3em]" style={{ color: `${T.ink}88` }}>
                        paso {s.code} / 05
                      </div>
                    </div>
                    <h3
                      className="mb-6 leading-[0.95] tracking-[-0.02em]"
                      style={{
                        fontFamily: "var(--font-unbounded)",
                        fontWeight: 300,
                        fontSize: "clamp(40px, 6vw, 88px)",
                        color: T.ink,
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="max-w-[52ch] text-[17px] leading-[1.55]"
                      style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400, color: `${T.ink}cc` }}
                    >
                      {s.detail}
                    </p>
                  </div>
                  <div className="order-1 flex items-center justify-center md:order-2">
                    <div className="relative">{s.illustration(s.accent)}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-10 md:px-10">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: `${T.ink}66` }}>
              Scroll horizontal
            </span>
            <div className="relative h-[2px] flex-1 overflow-hidden" style={{ background: `${T.ink}1a` }}>
              <motion.div style={{ width: progress }} className="absolute inset-y-0 left-0" aria-hidden>
                <div className="h-full w-full" style={{ background: T.selva }} />
              </motion.div>
            </div>
            <div className="flex gap-2">
              {STEPS.map((s) => (
                <span
                  key={s.code}
                  aria-hidden
                  className="font-mono text-[10px]"
                  style={{ color: `${T.ink}55` }}
                >
                  {s.code}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeafIllustration({ color }: { color: string }) {
  return (
    <svg width="clamp(220px, 28vw, 360px)" height="clamp(220px, 28vw, 360px)" viewBox="0 0 200 200" fill="none">
      <path
        d="M100 20 C 150 40, 170 90, 150 150 C 130 180, 80 190, 50 160 C 20 130, 30 70, 60 40 C 75 25, 85 15, 100 20 Z"
        fill={color}
      />
      <path d="M100 30 L 100 175" stroke={T.selva} strokeWidth="2" />
      {[...Array(7)].map((_, i) => (
        <path
          key={i}
          d={`M 100 ${50 + i * 18} Q ${72 - i * 3} ${60 + i * 18}, ${58 - i * 2} ${72 + i * 18}`}
          stroke={T.selva}
          strokeWidth="1.5"
          fill="none"
        />
      ))}
    </svg>
  );
}

function FlowIllustration({ color }: { color: string }) {
  return (
    <svg width="clamp(220px, 28vw, 360px)" height="clamp(220px, 28vw, 360px)" viewBox="0 0 200 200" fill="none">
      <rect x="20" y="20" width="50" height="50" rx="6" fill={color} stroke={T.ink} strokeWidth="2" />
      <rect x="130" y="20" width="50" height="50" rx="6" fill={T.cream} stroke={T.ink} strokeWidth="2" />
      <rect x="75" y="130" width="50" height="50" rx="6" fill={T.selva} stroke={T.ink} strokeWidth="2" />
      <path d="M70 45 L 130 45" stroke={T.ink} strokeWidth="2" strokeDasharray="4 6" />
      <path d="M45 70 Q 60 110, 90 130" stroke={T.ink} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M155 70 Q 140 110, 110 130" stroke={T.ink} strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="100" cy="100" r="5" fill={T.fire} />
    </svg>
  );
}

function GearIllustration({ color }: { color: string }) {
  return (
    <svg width="clamp(220px, 28vw, 360px)" height="clamp(220px, 28vw, 360px)" viewBox="0 0 200 200" fill="none">
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "100px 100px" }}
      >
        <circle cx="100" cy="100" r="48" fill={color} stroke={T.ink} strokeWidth="2" />
        {[...Array(10)].map((_, i) => {
          const angle = (i * 36 * Math.PI) / 180;
          const x = 100 + Math.cos(angle) * 58;
          const y = 100 + Math.sin(angle) * 58;
          return <rect key={i} x={x - 6} y={y - 6} width="12" height="12" fill={color} stroke={T.ink} strokeWidth="2" />;
        })}
        <circle cx="100" cy="100" r="20" fill={T.ink} />
        <circle cx="100" cy="100" r="8" fill={T.cream} />
      </motion.g>
    </svg>
  );
}

function RocketIllustration({ color }: { color: string }) {
  return (
    <svg width="clamp(220px, 28vw, 360px)" height="clamp(220px, 28vw, 360px)" viewBox="0 0 200 200" fill="none">
      <motion.g
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M 100 30 L 130 110 L 100 140 L 70 110 Z" fill={color} stroke={T.ink} strokeWidth="2" />
        <circle cx="100" cy="80" r="10" fill={T.cream} stroke={T.ink} strokeWidth="2" />
        <path d="M 70 110 L 50 140 L 85 135 Z" fill={T.orange} stroke={T.ink} strokeWidth="2" />
        <path d="M 130 110 L 150 140 L 115 135 Z" fill={T.orange} stroke={T.ink} strokeWidth="2" />
      </motion.g>
      <motion.g
        animate={{ opacity: [0.6, 1, 0.6], y: [0, 6, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M 90 145 L 100 175 L 110 145 Z" fill={T.fire} />
        <path d="M 95 148 L 100 165 L 105 148 Z" fill={T.yellow} />
      </motion.g>
    </svg>
  );
}

function SpiralIllustration({ color }: { color: string }) {
  return (
    <svg width="clamp(220px, 28vw, 360px)" height="clamp(220px, 28vw, 360px)" viewBox="0 0 200 200" fill="none">
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "100px 100px" }}
      >
        {[...Array(6)].map((_, i) => (
          <circle
            key={i}
            cx="100"
            cy="100"
            r={25 + i * 18}
            stroke={T.selva}
            strokeWidth="1.5"
            fill="none"
            strokeDasharray={i % 2 === 0 ? "6 12" : undefined}
            opacity={0.55 - i * 0.06}
          />
        ))}
      </motion.g>
      <circle cx="100" cy="100" r="18" fill={color} stroke={T.ink} strokeWidth="2" />
      <circle cx="100" cy="100" r="6" fill={T.ink} />
    </svg>
  );
}
