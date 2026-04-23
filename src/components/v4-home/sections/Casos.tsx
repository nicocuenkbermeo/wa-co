"use client";

import { V4, F } from "../tokens";
import { SectionHead } from "../lib/SectionHead";

const CASOS = [
  {
    img: "/v4/img/pin-02.jpg",
    sector: "Retail · Neiva",
    h: "+500 mensajes/mes automatizados.",
    metric: (
      <>
        <strong>87%</strong> resueltos sin humano · <strong>−4h/día</strong>
      </>
    ),
  },
  {
    img: "/v4/img/pin-06.jpg",
    sector: "Salud · Opita",
    h: "120 citas/mes sin recepcionista nocturna.",
    metric: (
      <>
        Ahorra <strong>$1.8M COP/mes</strong>
      </>
    ),
  },
  {
    img: "/v4/img/pin-11.jpg",
    sector: "Restaurante · Pitalito",
    h: "40% de pedidos llegan por WhatsApp.",
    metric: (
      <>
        Respuesta: <strong>12 min → 8 seg</strong>
      </>
    ),
  },
];

export default function Casos() {
  return (
    <section
      id="casos"
      style={{
        padding: "160px 0",
        position: "relative",
        zIndex: 2,
        background: `linear-gradient(180deg, ${V4.bg0}, ${V4.bg1})`,
        borderTop: `1px solid ${V4.border}`,
      }}
    >
      <div className="mx-auto px-8" style={{ maxWidth: 1320 }}>
        <SectionHead
          eyebrow="04 — Casos"
          title={
            <>
              Silencioso. <em className="em-violet">Ruidoso</em> en resultados.
            </>
          }
          lede="Operaciones reales del Huila y LATAM donde el bot atiende lo que antes tomaba turnos completos. Logos ocultos por NDA — resultados, no."
        />

        <div
          className="casos4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {CASOS.map((c, i) => (
            <article
              key={i}
              className="caso4"
              style={{
                position: "relative",
                borderRadius: 28,
                overflow: "hidden",
                aspectRatio: "4/5",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: 32,
                transition: "transform .6s cubic-bezier(.22,1,.36,1)",
              }}
            >
              <img
                src={c.img}
                alt=""
                loading="lazy"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 0,
                  transition: "transform 1.2s cubic-bezier(.22,1,.36,1)",
                  filter: "saturate(.9) brightness(.55)",
                }}
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(20,19,15,0.92) 0%, rgba(20,19,15,0.35) 55%, transparent 100%)",
                  zIndex: 1,
                }}
              />
              <div style={{ position: "relative", zIndex: 2 }}>
                <div
                  style={{
                    fontFamily: F.mono,
                    fontSize: 10.5,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: V4.gold,
                    marginBottom: 12,
                  }}
                >
                  {c.sector}
                </div>
                <h3
                  style={{
                    fontFamily: F.display,
                    fontSize: 30,
                    lineHeight: 1.08,
                    letterSpacing: "-0.018em",
                    marginBottom: 14,
                    color: "#f4f1e8",
                  }}
                >
                  {c.h}
                </h3>
                <p
                  style={{
                    fontFamily: F.body,
                    fontSize: 14,
                    color: "#e8e3d4",
                    opacity: 0.9,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  {c.metric}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .caso4:hover { transform: translateY(-6px); }
        .caso4:hover img { transform: scale(1.08); }
        .caso4 strong { color: ${V4.gold}; font-weight: 600; }
        @media (max-width: 860px) { .casos4 { grid-template-columns: 1fr !important; } }

        .em-violet {
          font-style: italic;
          background: linear-gradient(115deg, ${V4.olive}, ${V4.selva});
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </section>
  );
}
