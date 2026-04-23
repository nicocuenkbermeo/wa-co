"use client";

import { V4, F } from "../tokens";
import { SectionHead } from "../lib/SectionHead";

const STEPS = [
  {
    tag: "Fase 01",
    h: "Diagnóstico express.",
    p: "Llamada gratis por WhatsApp. Te mostramos dónde hay fuga de tiempo y si podemos ayudarte. Si no, te lo decimos — sin humo.",
    time: "⏱ 30 minutos",
  },
  {
    tag: "Fase 02",
    h: "Construcción + pruebas.",
    p: "Entrenamos el agente con tus datos, conectamos APIs, lo corremos contra 50 mensajes reales tuyos antes de salir al aire. Nada de “ya está listo” a ciegas.",
    time: "⏱ 7–14 días",
  },
  {
    tag: "Fase 03",
    h: "Operación continua.",
    p: "Monitoreamos, ajustamos el prompt, mejoramos el flujo. Reporte mensual con qué respondió, qué escaló, qué cerró. El bot mejora contigo.",
    time: "⏱ Indefinido",
  },
];

export default function Proceso() {
  return (
    <section
      id="proceso"
      style={{
        padding: "160px 0",
        position: "relative",
        zIndex: 2,
        background: `linear-gradient(180deg, ${V4.bg0} 0%, ${V4.bg1} 100%)`,
        borderTop: `1px solid ${V4.border}`,
      }}
    >
      <div className="mx-auto px-8" style={{ maxWidth: 1320 }}>
        <SectionHead
          center
          eyebrow="02 — Proceso"
          title={
            <>
              De brief a <em className="em-gold">producción</em> en diez días.
            </>
          }
          lede="Sin cotizaciones eternas ni slides. Hablamos 30 min, te mandamos propuesta en 24h, empezamos el lunes."
        />

        <div className="timeline4" style={{ position: "relative", marginTop: 60 }}>
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 1,
              background: `linear-gradient(to bottom, transparent, ${V4.border3} 15%, ${V4.border3} 85%, transparent)`,
            }}
            className="timeline4-rail"
          />
          {STEPS.map((s, i) => (
            <div
              key={i}
              className={`step4 reveal4 ${i % 2 === 0 ? "step4-odd" : "step4-even"}`}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 80,
                alignItems: "center",
                padding: "60px 0",
                position: "relative",
              }}
            >
              <div className="step4-text" style={{ textAlign: i % 2 === 0 ? "right" : "left" }}>
                <span
                  style={{
                    fontFamily: F.mono,
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: V4.goldDeep,
                    marginBottom: 14,
                    display: "block",
                  }}
                >
                  {s.tag}
                </span>
                <h3
                  style={{
                    fontFamily: F.display,
                    fontSize: "clamp(32px, 4vw, 54px)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                    marginBottom: 18,
                    color: V4.fg,
                  }}
                >
                  {s.h}
                </h3>
                <p
                  style={{
                    fontFamily: F.body,
                    fontSize: 16,
                    color: V4.fgMuted,
                    lineHeight: 1.65,
                  }}
                >
                  {s.p}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    marginTop: 20,
                    padding: "8px 16px",
                    border: `1px solid ${V4.border3}`,
                    borderRadius: 999,
                    fontFamily: F.mono,
                    fontSize: 11,
                    color: V4.goldDeep,
                    letterSpacing: "0.08em",
                    background: "rgba(253,252,247,0.6)",
                  }}
                >
                  {s.time}
                </span>
              </div>

              <div className="step4-visual" style={{ textAlign: i % 2 === 0 ? "left" : "right" }}>
                <span
                  style={{
                    fontFamily: F.display,
                    fontSize: "clamp(120px, 14vw, 220px)",
                    lineHeight: 0.85,
                    color: "transparent",
                    WebkitTextStroke: `1px ${V4.border3}`,
                    letterSpacing: "-0.04em",
                    fontStyle: "italic",
                    display: "inline-block",
                  }}
                >
                  0{i + 1}
                </span>
              </div>

              <div
                aria-hidden
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: V4.gold,
                  boxShadow: `0 0 0 8px ${V4.bg0}, 0 0 20px ${V4.gold}`,
                  zIndex: 2,
                }}
                className="step4-dot"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .step4-even .step4-text { order: 2; }
        .step4-even .step4-visual { order: 1; }

        .em-gold {
          font-style: italic;
          background: ${V4.paezGrad};
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        @media (max-width: 860px) {
          .timeline4-rail { left: 20px !important; }
          .step4 { grid-template-columns: 1fr !important; gap: 32px !important; padding: 40px 0 40px 48px !important; }
          .step4-dot { left: 20px !important; }
          .step4-text, .step4-visual { order: 2 !important; text-align: left !important; }
          .step4-even .step4-visual { order: 1 !important; }
        }
      `}</style>
    </section>
  );
}
