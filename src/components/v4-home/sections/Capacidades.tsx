"use client";

import { V4, F } from "../tokens";
import { WHATSAPP_LINK } from "../../v2-home/tokens";
import { SectionHead } from "../lib/SectionHead";

type Cap = {
  tag: string;
  h: string;
  p: string;
  img: string;
  icon: React.ReactNode;
  span: 1 | 2 | 3;
};

const CAPS: Cap[] = [
  {
    tag: "01 — Chatbot WhatsApp",
    h: "Atiende mientras\nduermes.",
    p: "Bot en tu WhatsApp Business con IA que cotiza, agenda y escala a humano cuando debe. Conectado a n8n, tu CRM y tu calendario. El que contesta a las 2am.",
    img: "/v4/img/pin-05.jpg",
    span: 3,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    tag: "02 — Agentes IA",
    h: "Tu copiloto de ventas.",
    p: "Claude + GPT orquestados con tus datos. Leen catálogo, consultan CRM, cierran ventas.",
    img: "/v4/img/pin-08.jpg",
    span: 1,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v6m0 10v6M4.22 4.22l4.24 4.24m7.07 7.07l4.24 4.24M1 12h6m10 0h6M4.22 19.78l4.24-4.24m7.07-7.07l4.24-4.24" />
      </svg>
    ),
  },
  {
    tag: "03 — Flujos n8n",
    h: "El tejido invisible.",
    p: "Workflows que conectan todas tus apps. Cero copy-paste. Todo corre solo.",
    img: "/v4/img/pin-03.jpg",
    span: 1,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    tag: "04 — Voice AI",
    h: "Llama. Cotiza. Agenda.",
    p: "Voz natural en español. Responde en tu tono. 24/7 sin call center.",
    img: "/v4/img/pin-07.jpg",
    span: 1,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
      </svg>
    ),
  },
  {
    tag: "05 — Dashboards IA",
    h: "Reportes que piensan.",
    p: "Claude lee tu operación semanalmente y te dice qué mover. Sin hojas de cálculo.",
    img: "/v4/img/pin-10.jpg",
    span: 1,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 4 5-5" />
      </svg>
    ),
  },
  {
    tag: "06 — Stack abierto",
    h: "Integramos lo que tengas.",
    p: "Meta, Stripe, Wompi, Shopify, Pipedrive, HubSpot. Si tiene API, lo conectamos.",
    img: "/v4/img/pin-12.jpg",
    span: 1,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
  },
];

export default function Capacidades() {
  return (
    <section id="capacidades" style={{ padding: "160px 0", position: "relative", zIndex: 2, background: V4.bg0 }}>
      <div className="mx-auto px-8" style={{ maxWidth: 1320 }}>
        <SectionHead
          eyebrow="01 — Capacidades"
          title={
            <>
              Seis capas. Un solo <em className="em-violet">organismo</em> que responde por ti.
            </>
          }
          lede="No vendemos “un bot”. Construimos el tejido operativo donde tu WhatsApp, tu calendario, tu CRM y tu inventario conversan entre sí — sin copiar datos a mano, sin perder el hilo."
        />

        <div className="caps4">
          {CAPS.map((c, i) => (
            <article
              key={i}
              className={`cap4 cap4-${i === 0 ? "lg" : "sm"}`}
              style={{
                position: "relative",
                border: `1px solid ${V4.border2}`,
                borderRadius: 28,
                overflow: "hidden",
                background: V4.bgCard,
                display: "flex",
                flexDirection: "column",
                willChange: "transform",
                transition: "transform .5s cubic-bezier(.22,1,.36,1), border-color .4s, box-shadow .5s",
              }}
            >
              <div className="cap4-bg" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                <img
                  src={c.img}
                  alt=""
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.38,
                    filter: "saturate(.6) contrast(1.08)",
                    transition: "transform 1.2s cubic-bezier(.22,1,.36,1), opacity .5s",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(to top, ${V4.bgCard} 10%, rgba(255,255,255,0.6) 50%, transparent 100%)`,
                  }}
                />
              </div>
              <a
                href={WHATSAPP_LINK}
                aria-label="Agendar"
                className="cap4-arrow"
                style={{
                  position: "absolute",
                  top: 24,
                  right: 24,
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  border: `1px solid ${V4.border3}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: V4.fgMuted,
                  transition: "all .35s cubic-bezier(.22,1,.36,1)",
                  zIndex: 3,
                  background: "rgba(255,255,255,0.5)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <div
                className="cap4-body"
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: 32,
                  marginTop: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <div
                  className="cap4-icon"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "rgba(212,182,40,0.14)",
                    border: "1px solid rgba(212,182,40,0.32)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: V4.goldDeep,
                    marginBottom: 8,
                  }}
                >
                  {c.icon}
                </div>
                <div
                  style={{
                    fontFamily: F.mono,
                    fontSize: 10.5,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: V4.goldDeep,
                  }}
                >
                  {c.tag}
                </div>
                <h3
                  style={{
                    fontFamily: F.display,
                    fontSize: 34,
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                    color: V4.fg,
                    whiteSpace: "pre-line",
                  }}
                >
                  {c.h}
                </h3>
                <p
                  style={{
                    fontFamily: F.body,
                    fontSize: 14.5,
                    color: V4.fgMuted,
                    lineHeight: 1.6,
                    maxWidth: "42ch",
                  }}
                >
                  {c.p}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .caps4 {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: minmax(280px, auto);
          gap: 20px;
        }
        .cap4-lg { grid-column: span 8; grid-row: span 2; min-height: 520px; }
        .cap4-sm { grid-column: span 4; }
        .cap4:hover { transform: translateY(-6px); border-color: ${V4.border3}; box-shadow: ${V4.shadowLg}; }
        .cap4:hover .cap4-bg img { transform: scale(1.06); opacity: .5; }
        .cap4:hover .cap4-arrow { background: ${V4.gold}; color: #0a0a08; border-color: ${V4.gold}; transform: rotate(-45deg); }
        @media (max-width: 960px) {
          .cap4-lg, .cap4-sm { grid-column: span 12 !important; grid-row: auto !important; min-height: 380px !important; }
        }
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
