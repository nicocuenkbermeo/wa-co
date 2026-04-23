"use client";

import { V4, F } from "../tokens";
import { WHATSAPP_LINK } from "../../v2-home/tokens";
import { SectionHead } from "../lib/SectionHead";

type Plan = {
  tag: string;
  h: string;
  price: string;
  priceSub?: string;
  desc: string;
  features: string[];
  cta: string;
  pro?: boolean;
};

const PLANS: Plan[] = [
  {
    tag: "Starter",
    h: "Bot WA Básico",
    price: "$800",
    priceSub: "USD · setup",
    desc: "Para atender FAQ, capturar leads y agendar citas. El piso sólido.",
    features: [
      "Bot WhatsApp Cloud API oficial",
      "Hasta 20 flujos de conversación",
      "Integración Sheets / Calendly",
      "Handoff a humano",
      "Mensualidad $150 USD",
    ],
    cta: "Empezar →",
  },
  {
    tag: "Pro",
    h: "Agente IA Vendedor",
    price: "$1,500",
    priceSub: "USD · setup",
    desc: "Cotiza, escribe propuestas, conecta CRM, cierra venta. Tu operador nocturno.",
    features: [
      "Todo lo de Starter",
      "Claude + GPT entrenado con tu data",
      "CRM (HubSpot/Pipedrive) + Stripe",
      "Voice AI opcional (llamadas)",
      "Mensualidad $300 USD",
    ],
    cta: "Agendar diagnóstico →",
    pro: true,
  },
  {
    tag: "Custom",
    h: "Stack completo",
    price: "Cotizar",
    desc: "Multiagente, múltiples canales, dashboards IA. Armado a tu medida.",
    features: [
      "Todo lo de Pro",
      "Multi-canal (WA, IG, email, voz)",
      "Dashboards Claude semanales",
      "Integraciones a medida",
      "SLA y soporte dedicado",
    ],
    cta: "Hablar con humano →",
  },
];

export default function Precios() {
  return (
    <section id="precios" style={{ padding: "160px 0", position: "relative", zIndex: 2, background: V4.bg0 }}>
      <div className="mx-auto px-8" style={{ maxWidth: 1320 }}>
        <SectionHead
          eyebrow="03 — Precios"
          title={
            <>
              Setup una vez. <em className="em-gold">Mensualidad</em> predecible.
            </>
          }
          lede="Sin contratos anuales. Sin letras chicas. Facturamos en COP o USD. Pagos por Wompi, Stripe o transferencia."
        />

        <div
          className="precios4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginTop: 56,
          }}
        >
          {PLANS.map((p, i) => (
            <div
              key={i}
              className={`plan4 ${p.pro ? "plan4-pro" : ""}`}
              style={{
                position: "relative",
                border: p.pro ? `1px solid rgba(212,182,40,0.5)` : `1px solid ${V4.border2}`,
                borderRadius: 28,
                padding: 40,
                background: p.pro
                  ? `linear-gradient(165deg, rgba(212,182,40,0.08) 0%, ${V4.bgCard} 50%)`
                  : V4.bgCard,
                display: "flex",
                flexDirection: "column",
                gap: 26,
                transition: "transform .5s cubic-bezier(.22,1,.36,1), border-color .4s",
                overflow: "hidden",
                boxShadow: p.pro
                  ? "0 30px 80px -30px rgba(212,182,40,0.35)"
                  : undefined,
              }}
            >
              {p.pro && (
                <div
                  style={{
                    position: "absolute",
                    top: 24,
                    right: 24,
                    padding: "5px 12px",
                    background: V4.paezGrad,
                    color: "#0a0a08",
                    fontFamily: F.mono,
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    borderRadius: 999,
                    fontWeight: 700,
                  }}
                >
                  ★ Recomendado
                </div>
              )}
              <div
                style={{
                  fontFamily: F.mono,
                  fontSize: 10.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: p.pro ? V4.goldDeep : V4.fgMuted,
                }}
              >
                {p.tag}
              </div>
              <div
                style={{
                  fontFamily: F.display,
                  fontSize: 42,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: V4.fg,
                }}
              >
                {p.h}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 6,
                  fontFamily: F.display,
                  fontSize: 64,
                  lineHeight: 1,
                  letterSpacing: "-0.028em",
                  color: V4.fg,
                }}
              >
                {p.price}
                {p.priceSub && (
                  <span
                    style={{
                      fontSize: 18,
                      color: V4.fgMuted,
                      fontFamily: F.body,
                      fontWeight: 400,
                    }}
                  >
                    {p.priceSub}
                  </span>
                )}
              </div>
              <p
                style={{
                  color: V4.fgMuted,
                  fontFamily: F.body,
                  fontSize: 14,
                  lineHeight: 1.6,
                  minHeight: 48,
                }}
              >
                {p.desc}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  padding: "24px 0",
                  borderTop: `1px solid ${V4.border}`,
                  fontFamily: F.body,
                  fontSize: 14,
                  color: V4.fg2,
                }}
              >
                {p.features.map((f, fi) => (
                  <li key={fi} style={{ display: "flex", gap: 12, alignItems: "flex-start", lineHeight: 1.5 }}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      style={{
                        flexShrink: 0,
                        marginTop: 3,
                        width: 14,
                        height: 14,
                        color: p.pro ? V4.goldDeep : V4.selva,
                      }}
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_LINK}
                className="plan4-cta"
                style={{
                  position: "relative",
                  display: "block",
                  textAlign: "center",
                  padding: "15px 24px",
                  borderRadius: 999,
                  border: p.pro ? "none" : `1px solid ${V4.border3}`,
                  color: p.pro ? "#0a0a08" : V4.fg,
                  background: p.pro ? V4.paezGrad : "rgba(253,252,247,0.5)",
                  fontFamily: F.body,
                  fontSize: 14,
                  fontWeight: 600,
                  transition: "all .3s cubic-bezier(.22,1,.36,1)",
                  overflow: "hidden",
                  marginTop: "auto",
                  textDecoration: "none",
                }}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .plan4:hover { transform: translateY(-6px); border-color: ${V4.border3}; }
        .plan4-pro:hover { box-shadow: 0 40px 100px -30px rgba(212,182,40,0.5); }
        .plan4-cta:hover { transform: translateY(-1px); box-shadow: 0 15px 30px -10px rgba(147,166,74,0.35); }
        @media (max-width: 960px) { .precios4 { grid-template-columns: 1fr !important; } }

        .em-gold {
          font-style: italic;
          background: ${V4.paezGrad};
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </section>
  );
}
