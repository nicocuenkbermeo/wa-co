import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "wa.co — Un sistema que fluye como el río";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CREAM = "#FFEFBF";
const SELVA = "#0A330A";
const INK = "#0a0a08";
const YELLOW = "#FFE800";
const FIRE = "#FF4000";
const ORANGE = "#E19100";
const CYAN = "#72E8FF";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: CREAM,
          color: INK,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 340,
            height: 340,
            borderRadius: "50%",
            background: `radial-gradient(circle at 35% 35%, ${YELLOW} 0%, ${ORANGE} 70%, ${FIRE} 100%)`,
            display: "flex",
          }}
        />

        <svg
          width="1200"
          height="260"
          viewBox="0 0 1200 260"
          style={{ position: "absolute", left: 0, bottom: 180 }}
        >
          <path
            d="M 0 180 C 200 120, 400 220, 700 140 C 1000 60, 1100 160, 1200 100"
            stroke={CYAN}
            strokeWidth="32"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M 0 180 C 200 120, 400 220, 700 140 C 1000 60, 1100 160, 1200 100"
            stroke={SELVA}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="6 10"
          />
        </svg>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <svg width="56" height="56" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="28" stroke={INK} strokeWidth="2" fill={YELLOW} />
            <path d="M12 34 Q 20 22, 28 32 T 46 28" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <circle cx="46" cy="28" r="3" fill={FIRE} />
          </svg>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1,
            }}
          >
            <span style={{ fontSize: 36, fontWeight: 300, letterSpacing: "-0.04em", color: INK }}>
              wa.co
            </span>
            <span
              style={{
                fontSize: 12,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: INK,
                opacity: 0.55,
                marginTop: 6,
              }}
            >
              agency · huila
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 16,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: INK,
              opacity: 0.6,
            }}
          >
            · Agencia IA · Huila · LATAM
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 116,
              fontWeight: 300,
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
              color: INK,
            }}
          >
            <span style={{ display: "flex" }}>automatizamos</span>
            <span style={{ display: "flex", fontStyle: "italic", color: SELVA }}>
              lo que te hace
            </span>
            <span style={{ display: "flex" }}>pensar.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontStyle: "italic",
              color: SELVA,
              maxWidth: 620,
              lineHeight: 1.35,
            }}
          >
            Chatbots WhatsApp, agentes IA y n8n para PyMEs de Colombia y LATAM.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: INK,
              fontWeight: 500,
            }}
          >
            agency-wa.co →
          </div>
        </div>
      </div>
    ),
    size,
  );
}
