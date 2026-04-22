"use client";

import Marquee from "../lib/Marquee";
import { T } from "../tokens";

const ITEMS = [
  "Chatbots WhatsApp",
  "Agentes IA",
  "n8n",
  "Integraciones",
  "Claude + GPT",
  "Neiva",
  "Huila",
  "LATAM",
  "Operación 24/7",
];

export default function MarqueeTicker() {
  return (
    <section
      aria-label="Servicios y territorio"
      style={{ background: T.selva, borderTop: `1px solid ${T.ink}`, borderBottom: `1px solid ${T.ink}` }}
    >
      <Marquee speed={42} repeat={6}>
        <div className="flex items-center gap-10 py-6 pr-10 md:py-8">
          {ITEMS.map((item) => (
            <span key={item} className="flex items-center gap-10 shrink-0">
              <span
                className="whitespace-nowrap uppercase"
                style={{
                  fontFamily: "var(--font-unbounded)",
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                  fontSize: "clamp(34px, 5.5vw, 72px)",
                  color: T.yellow,
                }}
              >
                {item}
              </span>
              <span className="shrink-0" aria-hidden>
                <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="6" fill={T.fire} />
                  <circle cx="20" cy="20" r="16" stroke={T.yellow} strokeWidth="1" opacity="0.35" fill="none" />
                </svg>
              </span>
            </span>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
