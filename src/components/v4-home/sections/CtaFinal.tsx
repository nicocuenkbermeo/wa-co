"use client";

import { V4, F } from "../tokens";
import { WHATSAPP_LINK } from "../../v2-home/tokens";

export default function CtaFinal() {
  return (
    <section
      className="cta-final4"
      style={{
        position: "relative",
        padding: "180px 0",
        overflow: "hidden",
        textAlign: "center",
        borderTop: `1px solid ${V4.border}`,
        background: V4.bg0,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1200,
          height: 1200,
          maxWidth: "130vw",
          background:
            "radial-gradient(circle, rgba(212,182,40,0.28) 0%, rgba(147,166,74,0.16) 35%, transparent 65%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "orbFloat 16s ease-in-out infinite",
        }}
      />
      <div
        className="mx-auto px-8"
        style={{ maxWidth: 1320, position: "relative", zIndex: 2 }}
      >
        <h2
          className="reveal4"
          style={{
            fontFamily: F.display,
            fontSize: "clamp(52px, 8vw, 140px)",
            lineHeight: 0.92,
            letterSpacing: "-0.035em",
            marginBottom: 36,
            maxWidth: 1000,
            marginInline: "auto",
            color: V4.fg,
          }}
        >
          ¿Listo para que tu negocio
          <br />
          <em
            style={{
              fontStyle: "italic",
              background: V4.paezGrad,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            trabaje dormido?
          </em>
        </h2>
        <p
          className="reveal4"
          style={{
            fontFamily: F.body,
            color: V4.fgMuted,
            fontSize: 18,
            marginBottom: 48,
            maxWidth: 560,
            marginInline: "auto",
            lineHeight: 1.65,
          }}
        >
          Diagnóstico de 30 minutos por WhatsApp. Si no te sirve, te lo decimos. Si te sirve, el lunes empezamos.
        </p>
        <div className="reveal4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn4 btn4-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "20px 38px",
              borderRadius: 999,
              background: V4.paezGrad,
              color: "#0a0a08",
              fontFamily: F.body,
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: ".02em",
              boxShadow: "0 24px 48px -15px rgba(147,166,74,0.55)",
              textDecoration: "none",
            }}
          >
            Hablar ahora por WhatsApp
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
        <div
          className="reveal4"
          style={{
            marginTop: 56,
            display: "flex",
            justifyContent: "center",
            gap: 40,
            fontFamily: F.mono,
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: V4.fgDim,
            flexWrap: "wrap",
          }}
        >
          <span>Neiva · Huila · Colombia</span>
          <span>·</span>
          <span>Respuesta &lt; 2h</span>
          <span>·</span>
          <span>Sin compromiso</span>
        </div>
      </div>
    </section>
  );
}
