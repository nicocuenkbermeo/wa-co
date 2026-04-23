import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#fdfcf7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="64"
          height="64"
          viewBox="0 0 320 140"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gp" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#e2c728" />
              <stop offset="0.35" stopColor="#c8bd36" />
              <stop offset="0.65" stopColor="#93a64a" />
              <stop offset="1" stopColor="#5f8a52" />
            </linearGradient>
          </defs>
          <g
            fill="none"
            stroke="url(#gp)"
            strokeWidth="28"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M 14 42 C 14 26, 38 18, 52 30 C 62 40, 66 58, 72 78 C 78 98, 88 116, 100 116 C 112 116, 122 100, 128 82 C 134 62, 138 42, 152 30 C 166 18, 188 24, 192 42 C 196 62, 200 82, 208 100 C 214 114, 224 122, 236 116" />
            <path d="M 286 64 C 286 44, 270 32, 252 32 C 234 32, 220 46, 220 66 C 220 86, 234 100, 252 100 C 270 100, 286 88, 286 68 M 286 46 L 286 116" />
          </g>
        </svg>
      </div>
    ),
    { ...size }
  );
}
