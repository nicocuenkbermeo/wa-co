"use client";

import { V4, F } from "../tokens";
import { WHATSAPP_LINK } from "../../v2-home/tokens";

export default function Hero() {
  return (
    <header
      className="relative overflow-hidden"
      style={{
        padding: "220px 0 120px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: V4.bg0,
      }}
    >
      {/* ORBS — versión paper: glow paez + tierra muy suaves */}
      <div
        aria-hidden
        className="orb orb-1"
        style={{
          position: "absolute",
          top: "-15%",
          right: "-10%",
          width: 780,
          height: 780,
          background:
            "radial-gradient(circle at 30% 30%, rgba(212,182,40,0.28), rgba(147,166,74,0.14) 35%, transparent 65%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "orbFloat 14s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden
        className="orb orb-2"
        style={{
          position: "absolute",
          bottom: "-30%",
          left: "-15%",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle at 50% 50%, rgba(194,150,89,0.20), rgba(230,106,46,0.08) 35%, transparent 65%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "orbFloat 18s ease-in-out infinite -7s",
        }}
      />
      <div
        aria-hidden
        className="orb orb-3"
        style={{
          position: "absolute",
          top: "40%",
          left: "45%",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(226,199,40,0.18), transparent 65%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "orbFloat 14s ease-in-out infinite -3s",
        }}
      />

      {/* Grid sutil */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,19,15,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(20,19,15,0.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 35%, black 40%, transparent 85%)",
          zIndex: 0,
        }}
      />

      <div
        className="relative mx-auto px-8"
        style={{ maxWidth: 1320, width: "100%", zIndex: 2 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr .8fr",
            gap: 80,
            alignItems: "center",
          }}
          className="hero4-grid"
        >
          {/* LEFT: TEXT */}
          <div>
            <span
              className="inline-flex items-center gap-3 px-[18px] py-[9px]"
              style={{
                border: `1px solid ${V4.border3}`,
                borderRadius: 999,
                fontFamily: F.mono,
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: V4.fgMuted,
                background: "rgba(253,252,247,0.4)",
                backdropFilter: "blur(8px)",
                marginBottom: 36,
              }}
            >
              <span
                className="dot"
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: V4.emerald,
                  boxShadow: `0 0 12px ${V4.emerald}`,
                }}
              />
              Estudio de IA · Neiva · Huila · Operando v2026
            </span>

            <h1
              style={{
                fontFamily: F.display,
                fontWeight: 400,
                fontSize: "clamp(56px, 9.5vw, 156px)",
                lineHeight: 0.92,
                letterSpacing: "-0.035em",
                marginBottom: 32,
                color: V4.fg,
              }}
            >
              <span className="line line-1">
                <span className="word">Agentes que</span>
              </span>
              <span className="line line-2">
                <em className="word em-paez">trabajan solos</em>
              </span>
              <span className="line line-3">
                <span className="word">mientras duermes.</span>
              </span>
            </h1>

            <p
              className="hero4-sub"
              style={{
                fontFamily: F.body,
                fontSize: 19,
                color: V4.fgMuted,
                maxWidth: 520,
                lineHeight: 1.65,
                marginBottom: 44,
              }}
            >
              Chatbots de WhatsApp, asistentes IA y flujos n8n entrenados con tu operación.
              Contestan, cotizan, agendan y venden — en tu tono, 24/7, sin que levantes un dedo.
            </p>

            <div className="hero4-ctas flex flex-wrap gap-[14px] mb-16">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn4 btn4-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "17px 30px",
                  borderRadius: 999,
                  background: V4.paezGrad,
                  color: "#0a0a08",
                  fontFamily: F.body,
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: ".02em",
                  boxShadow: "0 20px 40px -15px rgba(147,166,74,0.45)",
                }}
              >
                Escríbenos por WhatsApp
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="#capacidades"
                className="btn4 btn4-ghost"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "17px 30px",
                  borderRadius: 999,
                  border: `1px solid ${V4.border3}`,
                  color: V4.fg,
                  background: "rgba(253,252,247,0.4)",
                  fontFamily: F.body,
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                Ver capacidades
              </a>
            </div>
          </div>

          {/* RIGHT: CHAT MOCKUP */}
          <ChatMockup />

          {/* STATS */}
          <div
            className="hero4-stats"
            style={{
              gridColumn: "1 / -1",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
              paddingTop: 56,
              marginTop: 40,
              borderTop: `1px solid ${V4.border}`,
            }}
          >
            {[
              { num: "24", em: "/", suf: "7", label: "Sin humanos" },
              { num: "+400", em: "h", suf: "", label: "Liberadas / año" },
              { num: "", em: "$", suf: "0", label: "Leads perdidos 2am" },
              { num: "10", em: "d", suf: "", label: "De brief a live" },
            ].map((s, i) => (
              <div
                key={i}
                className="stat4"
                style={{
                  padding: "0 24px",
                  borderRight: i < 3 ? `1px solid ${V4.border}` : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: F.display,
                    fontSize: "clamp(40px, 5vw, 64px)",
                    lineHeight: 1,
                    letterSpacing: "-0.025em",
                    marginBottom: 8,
                    color: V4.fg2,
                  }}
                >
                  {s.num}
                  <em
                    style={{
                      fontStyle: "italic",
                      background: V4.paezGrad,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {s.em}
                  </em>
                  {s.suf}
                </div>
                <div
                  style={{
                    fontFamily: F.mono,
                    fontSize: 10.5,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: V4.fgDim,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orbFloat {
          0%,100% { transform: translate(0,0) scale(1) rotate(0deg); }
          33% { transform: translate(-40px,30px) scale(1.08) rotate(5deg); }
          66% { transform: translate(30px,-20px) scale(.95) rotate(-3deg); }
        }
        @keyframes riseUp { from { transform: translateY(110%); } to { transform: translateY(0); } }
        @keyframes fadeIn4 { from { opacity: 0; } to { opacity: 1; } }

        .line { display: block; overflow: hidden; }
        .line .word { display: inline-block; animation: riseUp 1.1s cubic-bezier(.16,1,.3,1) forwards; }
        .line-2 .word { animation-delay: .1s; }
        .line-3 .word { animation-delay: .2s; }

        .em-paez {
          font-style: italic;
          background: linear-gradient(115deg, ${V4.gold} 0%, ${V4.olive} 50%, ${V4.selva} 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer4 6s linear infinite;
        }
        @keyframes shimmer4 { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }

        .hero4-sub { opacity: 0; animation: fadeIn4 1s cubic-bezier(.22,1,.36,1) .6s forwards; }
        .hero4-ctas { opacity: 0; animation: fadeIn4 1s cubic-bezier(.22,1,.36,1) .8s forwards; }
        .hero4-stats { opacity: 0; animation: fadeIn4 1s cubic-bezier(.22,1,.36,1) 1.2s forwards; }

        .btn4 { position: relative; overflow: hidden; transition: all .35s cubic-bezier(.22,1,.36,1); }
        .btn4 svg { transition: transform .35s; }
        .btn4:hover svg { transform: translateX(4px); }
        .btn4-primary::before {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%);
          transform: translateX(-120%); transition: transform .8s cubic-bezier(.22,1,.36,1);
        }
        .btn4-primary:hover::before { transform: translateX(120%); }
        .btn4-primary:hover { transform: translateY(-2px); box-shadow: 0 24px 48px -15px rgba(147,166,74,0.55); }
        .btn4-ghost:hover { background: rgba(253,252,247,0.8) !important; border-color: ${V4.fgMuted} !important; transform: translateY(-2px); }

        @media (max-width: 1060px) { .hero4-grid { grid-template-columns: 1fr !important; gap: 60px !important; } }
        @media (max-width: 860px) {
          .hero4-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .stat4 { padding: 20px !important; border-right: none !important; border-bottom: 1px solid ${V4.border} !important; }
        }
      `}</style>
    </header>
  );
}

function ChatMockup() {
  return (
    <div
      className="chat4"
      style={{
        position: "relative",
        padding: 28,
        background: "linear-gradient(160deg, #ffffff, #fbf9f1)",
        border: `1px solid ${V4.border2}`,
        borderRadius: 32,
        backdropFilter: "blur(20px)",
        boxShadow: V4.shadowLg,
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="chat4-head flex items-center gap-3"
        style={{ paddingBottom: 18, borderBottom: `1px solid ${V4.border2}`, marginBottom: 22 }}
      >
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            background: V4.paezGrad,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: F.display,
            fontSize: 20,
            color: "#0a0a08",
            fontWeight: 500,
          }}
        >
          w
        </div>
        <div className="flex-1 min-w-0">
          <div
            style={{
              fontFamily: F.body,
              fontWeight: 600,
              fontSize: 14,
              color: V4.fg,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            wa.co · Bot IA
            <span
              style={{
                color: V4.emerald,
                fontSize: 11,
                background: "rgba(74,131,124,0.15)",
                padding: "1px 6px",
                borderRadius: 6,
                fontWeight: 700,
              }}
            >
              ✓
            </span>
          </div>
          <div
            className="chat4-status"
            style={{
              fontFamily: F.mono,
              fontSize: 11,
              color: V4.emerald,
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: V4.emerald,
                animation: "pulse4 1.5s ease-in-out infinite",
              }}
            />
            Respondiendo · ahora
          </div>
        </div>
      </div>

      <div className="msgs4 flex flex-col gap-[10px]" style={{ minHeight: 280 }}>
        <Bubble kind="in" delay={1.4}>Hola, quiero info sobre sus servicios</Bubble>
        <Bubble kind="out" delay={2.2}>
          ¡Qué tal! Soy el asistente de wa.co 🌿 Estoy 24/7. ¿Buscas chatbot, agente IA o flujos n8n?
        </Bubble>
        <Bubble kind="in" delay={3.2}>chatbot para mi restaurante</Bubble>
        <Bubble kind="out" delay={4}>Perfecto. Te mando cotización en 2 min. ¿Cuántos pedidos/día manejas?</Bubble>
        <Bubble kind="in" delay={4.8}>unos 80-100</Bubble>
      </div>

      <div
        className="typing4"
        style={{
          display: "inline-flex",
          gap: 4,
          padding: "14px 18px",
          background: V4.bg1,
          border: `1px solid ${V4.border2}`,
          borderRadius: 18,
          borderBottomLeftRadius: 6,
          alignSelf: "flex-start",
          marginTop: 10,
          opacity: 0,
          animation: "fadeIn4 .5s forwards 5.6s",
        }}
      >
        <span style={{ width: 6, height: 6, background: V4.fgDim, borderRadius: "50%", animation: "bounce4 1.2s ease-in-out infinite" }} />
        <span style={{ width: 6, height: 6, background: V4.fgDim, borderRadius: "50%", animation: "bounce4 1.2s ease-in-out infinite .15s" }} />
        <span style={{ width: 6, height: 6, background: V4.fgDim, borderRadius: "50%", animation: "bounce4 1.2s ease-in-out infinite .3s" }} />
      </div>

      <style>{`
        .chat4 { opacity: 0; animation: fadeIn4 1s cubic-bezier(.22,1,.36,1) 1s forwards, tilt4 8s ease-in-out infinite 1s; }
        @keyframes tilt4 { 0%,100% { transform: rotateY(0) rotateX(0); } 50% { transform: rotateY(-2deg) rotateX(1deg); } }
        @keyframes pulse4 { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .5; transform: scale(.8); } }
        @keyframes bounce4 { 0%,80%,100% { transform: translateY(0); opacity: .5; } 40% { transform: translateY(-5px); opacity: 1; } }
      `}</style>
    </div>
  );
}

function Bubble({ kind, delay, children }: { kind: "in" | "out"; delay: number; children: React.ReactNode }) {
  const inStyle: React.CSSProperties = {
    background: V4.bg1,
    border: `1px solid ${V4.border}`,
    alignSelf: "flex-start",
    borderBottomLeftRadius: 6,
  };
  const outStyle: React.CSSProperties = {
    background: "linear-gradient(135deg, rgba(226,199,40,0.18), rgba(95,122,60,0.12))",
    border: "1px solid rgba(212,182,40,0.35)",
    alignSelf: "flex-end",
    borderBottomRightRadius: 6,
  };
  return (
    <div
      className="msg4"
      style={{
        padding: "11px 16px",
        borderRadius: 18,
        fontFamily: F.body,
        fontSize: 13.5,
        lineHeight: 1.5,
        maxWidth: "85%",
        color: V4.fg,
        opacity: 0,
        animation: `msgIn4 .5s cubic-bezier(.22,1,.36,1) ${delay}s forwards`,
        ...(kind === "in" ? inStyle : outStyle),
      }}
    >
      {children}
      <span
        style={{
          display: "block",
          fontFamily: F.mono,
          fontSize: 10,
          color: V4.fgDim,
          marginTop: 4,
        }}
      >
        02:1{Math.floor(delay)} am
      </span>
      <style>{`@keyframes msgIn4 { from { opacity: 0; transform: translateY(12px) scale(.96); } to { opacity: 1; transform: none; } }`}</style>
    </div>
  );
}
