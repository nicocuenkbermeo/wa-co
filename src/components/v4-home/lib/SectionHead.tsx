"use client";

import { V4, F } from "../tokens";
import type { ReactNode, CSSProperties } from "react";

export function SectionHead({
  eyebrow,
  title,
  lede,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  center?: boolean;
}) {
  const wrap: CSSProperties = center
    ? { marginInline: "auto", textAlign: "center", maxWidth: 720 }
    : { maxWidth: 820 };
  return (
    <div className="section-head4 reveal4" style={{ marginBottom: 80, ...wrap }}>
      <span
        className="section-eyebrow4"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          fontFamily: F.mono,
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: V4.goldDeep,
          marginBottom: 24,
          ...(center ? { marginInline: "auto" } : null),
        }}
      >
        <span style={{ width: 24, height: 1, background: V4.goldDeep }} />
        {eyebrow}
      </span>
      <h2
        style={{
          fontFamily: F.display,
          fontSize: "clamp(44px, 5.5vw, 92px)",
          lineHeight: 1,
          letterSpacing: "-0.028em",
          marginBottom: 28,
          color: V4.fg,
          textWrap: "balance" as CSSProperties["textWrap"],
        }}
      >
        {title}
      </h2>
      {lede && (
        <p
          style={{
            fontFamily: F.body,
            fontSize: 18,
            color: V4.fgMuted,
            lineHeight: 1.65,
            maxWidth: 640,
            ...(center ? { marginInline: "auto" } : null),
          }}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
