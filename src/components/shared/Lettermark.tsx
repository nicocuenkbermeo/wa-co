/* WA.CO Lettermark — reutilizable, canónico.
   SVG inline con gradient Páez (amarillo → verde). */

type Props = {
  className?: string;
  height?: number | string;
  variant?: "gradient" | "currentColor";
  title?: string;
};

export default function Lettermark({
  className,
  height = 32,
  variant = "gradient",
  title = "wa.co",
}: Props) {
  const gradId = `wa-grad-${Math.random().toString(36).slice(2, 8)}`;
  const stroke = variant === "gradient" ? `url(#${gradId})` : "currentColor";

  return (
    <svg
      viewBox="0 0 320 140"
      style={{ height, width: "auto" }}
      className={className}
      role="img"
      aria-label={title}
    >
      {variant === "gradient" && (
        <defs>
          <linearGradient id={gradId} x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#e2c728" />
            <stop offset="35%" stopColor="#c8bd36" />
            <stop offset="65%" stopColor="#93a64a" />
            <stop offset="100%" stopColor="#5f8a52" />
          </linearGradient>
        </defs>
      )}
      <path
        d="M 14 42 C 14 26, 38 18, 52 30 C 62 40, 66 58, 72 78 C 78 98, 88 116, 100 116 C 112 116, 122 100, 128 82 C 134 62, 138 42, 152 30 C 166 18, 188 24, 192 42 C 196 62, 200 82, 208 100 C 214 114, 224 122, 236 116"
        fill="none"
        stroke={stroke}
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 286 64 C 286 44, 270 32, 252 32 C 234 32, 220 46, 220 66 C 220 86, 234 100, 252 100 C 270 100, 286 88, 286 68 M 286 46 L 286 116"
        fill="none"
        stroke={stroke}
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
