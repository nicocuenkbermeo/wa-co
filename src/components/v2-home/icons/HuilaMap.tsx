import { T } from "../tokens";

export default function HuilaMap({ className = "", width = 280 }: { className?: string; width?: number }) {
  return (
    <svg
      className={className}
      width={width}
      viewBox="0 0 320 380"
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M150 20 C 200 30, 240 60, 260 110 C 280 160, 270 210, 250 260 C 235 300, 200 340, 160 360 C 120 345, 85 305, 70 260 C 55 210, 55 155, 80 105 C 100 60, 125 35, 150 20 Z"
        fill="none"
        stroke={T.selva}
        strokeWidth="2"
      />
      <path
        d="M150 40 C 155 80, 160 120, 165 160 C 170 200, 175 240, 170 280 C 165 310, 155 335, 150 350"
        stroke={T.cyan}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M100 120 C 120 130, 145 140, 165 155"
        stroke={T.cyan}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M200 180 C 185 195, 175 220, 168 240"
        stroke={T.cyan}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="160" cy="180" r="5" fill={T.fire} />
      <circle cx="160" cy="180" r="12" fill="none" stroke={T.fire} strokeWidth="1" opacity="0.5" />
      <text
        x="175"
        y="184"
        fill={T.selva}
        style={{ fontFamily: "var(--font-unbounded)", fontSize: 11, fontWeight: 500 }}
      >
        Neiva
      </text>
      <text
        x="90"
        y="60"
        fill={T.selva}
        opacity="0.55"
        style={{ fontFamily: "var(--font-fraunces)", fontSize: 10, fontStyle: "italic" }}
      >
        Huila
      </text>
      <text
        x="175"
        y="368"
        fill={T.selva}
        opacity="0.4"
        style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.25em" }}
      >
        RÍO MAGDALENA
      </text>
    </svg>
  );
}
