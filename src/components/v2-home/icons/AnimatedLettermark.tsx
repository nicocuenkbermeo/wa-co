"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import { T } from "../tokens";

type Props = {
  height?: number;
  label?: boolean;
  tone?: "light" | "dark";
  breathe?: boolean;
  drawOnMount?: boolean;
  compact?: boolean;
};

/**
 * Lettermark oficial wa.co — las letras nacen del río.
 * "w" = 4 ondas del Magdalena/Páez/Suaza/La Plata.
 * "a" = punto de convergencia.
 */
export default function AnimatedLettermark({
  height = 48,
  label = true,
  tone = "dark",
  breathe = true,
  drawOnMount = true,
  compact = false,
}: Props) {
  const uid = useId().replace(/[^a-z0-9]/gi, "");
  const gradId = `wa-grad-${uid}`;
  const glowId = `wa-glow-${uid}`;
  const ink = tone === "dark" ? T.ink : T.cream;
  const sub = tone === "dark" ? `${T.ink}88` : `${T.cream}99`;

  const pathW =
    "M 14 42 C 14 26, 38 18, 52 30 C 62 40, 66 58, 72 78 C 78 98, 88 116, 100 116 C 112 116, 122 100, 128 82 C 134 62, 138 42, 152 30 C 166 18, 188 24, 192 42 C 196 62, 200 82, 208 100 C 214 114, 224 122, 236 116";
  const pathA =
    "M 286 64 C 286 44, 270 32, 252 32 C 234 32, 220 46, 220 66 C 220 86, 234 100, 252 100 C 270 100, 286 88, 286 68 M 286 46 L 286 116";

  return (
    <div className="flex items-end gap-3" style={{ color: ink }}>
      <motion.div
        style={{ display: "inline-flex" }}
        animate={
          breathe
            ? { y: [0, -2, 0], filter: ["drop-shadow(0 0 0 transparent)", "drop-shadow(0 4px 18px rgba(226,199,40,0.35))", "drop-shadow(0 0 0 transparent)"] }
            : undefined
        }
        transition={breathe ? { duration: 6, ease: "easeInOut", repeat: Infinity } : undefined}
      >
        <svg
          viewBox="0 0 320 140"
          style={{ height, width: "auto", overflow: "visible" }}
          role="img"
          aria-label="wa.co"
        >
          <defs>
            <linearGradient id={gradId} x1="0%" y1="60%" x2="100%" y2="40%">
              <stop offset="0%" stopColor="#e2c728" />
              <stop offset="28%" stopColor="#c8bd36" />
              <stop offset="55%" stopColor="#93a64a" />
              <stop offset="80%" stopColor="#5f8a52" />
              <stop offset="100%" stopColor="#0A330A" />
            </linearGradient>
            <filter id={glowId}>
              <feGaussianBlur stdDeviation="1.2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <motion.path
            d={pathW}
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="28"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter={`url(#${glowId})`}
            initial={drawOnMount ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.path
            d={pathA}
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="28"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter={`url(#${glowId})`}
            initial={drawOnMount ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          />
          <motion.circle
            cx="286"
            cy="116"
            r="8"
            fill="#E31E24"
            initial={drawOnMount ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.9, ease: "backOut" }}
          />
        </svg>
      </motion.div>

      {label && !compact && (
        <div className="leading-none" style={{ paddingBottom: height * 0.1 }}>
          <div
            style={{
              fontFamily: "var(--font-unbounded)",
              fontWeight: 300,
              fontSize: Math.round(height * 0.6),
              letterSpacing: "-0.05em",
              color: ink,
            }}
          >
            wa.co
          </div>
          <div
            className="font-mono uppercase mt-1"
            style={{
              fontSize: Math.round(height * 0.2),
              letterSpacing: "0.25em",
              color: sub,
            }}
          >
            agency · huila
          </div>
        </div>
      )}
    </div>
  );
}
