"use client";

import { V4, F } from "../tokens";

const ITEMS = [
  "Claude 4.7",
  "GPT-5",
  "n8n",
  "Meta Cloud API",
  "Vercel",
  "Stripe",
  "HubSpot",
  "Wompi",
  "Pipedrive",
  "Supabase",
];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "44px 0",
        borderBlock: `1px solid ${V4.border}`,
        background: `linear-gradient(to right, ${V4.bg1}, ${V4.bg0} 50%, ${V4.bg1})`,
        zIndex: 2,
      }}
    >
      <div
        style={{
          fontFamily: F.mono,
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: V4.fgDim,
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        Construido sobre stack enterprise
      </div>
      <div
        className="marquee4-track"
        style={{
          display: "flex",
          gap: 80,
          whiteSpace: "nowrap",
          animation: "scroll4 30s linear infinite",
          width: "max-content",
        }}
      >
        {track.map((it, i) => (
          <span
            key={i}
            style={{
              fontFamily: F.display,
              fontStyle: "italic",
              fontSize: 28,
              color: V4.fgMuted,
              letterSpacing: "-0.01em",
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: V4.gold,
                opacity: 0.5,
              }}
            />
            {it}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes scroll4 { to { transform: translateX(-50%); } }
        section:hover .marquee4-track { animation-play-state: paused; }
      `}</style>
    </section>
  );
}
