"use client";

import { V4, F } from "../tokens";
import { WHATSAPP_LINK } from "../../v2-home/tokens";

export default function Footer() {
  return (
    <footer
      style={{
        background: V4.bg1,
        borderTop: `1px solid ${V4.border}`,
        padding: "100px 0 44px",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="mx-auto px-8" style={{ maxWidth: 1320 }}>
        <div
          className="footer4-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 60,
            marginBottom: 72,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: F.display,
                fontSize: 44,
                lineHeight: 1,
                marginBottom: 16,
                color: V4.fg,
              }}
            >
              wa
              <i
                style={{
                  fontStyle: "italic",
                  background: V4.paezGrad,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                .co
              </i>
            </div>
            <p
              style={{
                color: V4.fgMuted,
                fontFamily: F.body,
                fontSize: 15,
                maxWidth: 320,
                lineHeight: 1.65,
                marginBottom: 24,
              }}
            >
              Estudio de IA unipersonal en Neiva, Huila. Construimos el tejido invisible que hace que tu negocio responda, agende y venda solo. Atendemos toda LATAM.
            </p>
            <div
              style={{
                width: "100%",
                maxWidth: 280,
                height: 1,
                background: `linear-gradient(to right, ${V4.gold}, transparent)`,
              }}
            />
          </div>

          {[
            {
              h: "Capacidades",
              links: [
                ["Chatbots WA", "#capacidades"],
                ["Agentes IA", "#capacidades"],
                ["Flujos n8n", "#capacidades"],
                ["Voice AI", "#capacidades"],
                ["Dashboards", "#capacidades"],
              ],
            },
            {
              h: "Compañía",
              links: [
                ["Proceso", "#proceso"],
                ["Precios", "#precios"],
                ["Casos", "#casos"],
                ["Brand", "/brand"],
                ["Contacto", WHATSAPP_LINK],
              ],
            },
            {
              h: "Contacto",
              links: [
                ["WhatsApp", WHATSAPP_LINK],
                ["hola@agency-wa.co", "mailto:hola@agency-wa.co"],
                ["Neiva · Huila", "#"],
                ["Lun–Vie 8–18 COT", "#"],
              ],
            },
          ].map((col) => (
            <div key={col.h}>
              <h4
                style={{
                  fontFamily: F.mono,
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: V4.fgDim,
                  marginBottom: 22,
                  fontWeight: 500,
                }}
              >
                {col.h}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, padding: 0 }}>
                {col.links.map(([label, href]) => (
                  <li
                    key={label}
                    style={{
                      fontFamily: F.body,
                      fontSize: 14.5,
                      color: V4.fgMuted,
                    }}
                  >
                    <a
                      href={href}
                      className="footer4-link"
                      style={{ transition: "color .2s", textDecoration: "none", color: "inherit" }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="footer4-bottom"
          style={{
            paddingTop: 36,
            borderTop: `1px solid ${V4.border}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: F.mono,
            fontSize: 11,
            color: V4.fgDim,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span>© 2026 wa.co — Estudio de IA · Huila</span>
          <span>v2026.04 · Operando 24/7</span>
        </div>
      </div>

      <style>{`
        .footer4-link:hover { color: ${V4.goldDeep}; }
        @media (max-width: 860px) { .footer4-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; } }
      `}</style>
    </footer>
  );
}
