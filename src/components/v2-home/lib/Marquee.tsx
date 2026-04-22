"use client";

import { type ReactNode, type CSSProperties } from "react";

type Props = {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  style?: CSSProperties;
  repeat?: number;
};

export default function Marquee({
  children,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
  className = "",
  style,
  repeat = 4,
}: Props) {
  const dur = `${speed}s`;
  const animName = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div
      className={`marquee-root relative w-full overflow-hidden ${className}`}
      style={style}
      data-pause={pauseOnHover ? "true" : "false"}
    >
      <div className="marquee-track flex w-max" style={{ animation: `${animName} ${dur} linear infinite` }}>
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center">
            {children}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee-left {
          0% { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-25%,0,0); }
        }
        @keyframes marquee-right {
          0% { transform: translate3d(-25%,0,0); }
          100% { transform: translate3d(0,0,0); }
        }
        .marquee-root[data-pause="true"]:hover .marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
