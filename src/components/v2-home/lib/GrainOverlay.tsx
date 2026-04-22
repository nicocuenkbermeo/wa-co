"use client";

type Props = {
  opacity?: number;
  baseFrequency?: number;
  blendMode?: "overlay" | "multiply" | "soft-light" | "screen";
  zIndex?: number;
};

export default function GrainOverlay({
  opacity = 0.1,
  baseFrequency = 0.88,
  blendMode = "overlay",
  zIndex = 4,
}: Props = {}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0"
      style={{ zIndex, mixBlendMode: blendMode, opacity }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="wa-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency}
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#wa-grain)" />
      </svg>
    </div>
  );
}
