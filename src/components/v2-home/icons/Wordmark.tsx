import { T } from "../tokens";

export default function Wordmark({ size = 48, label = true }: { size?: number; label?: boolean }) {
  return (
    <div className="flex items-end gap-3" style={{ color: T.ink }}>
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none" aria-hidden>
        <circle cx="30" cy="30" r="28" stroke={T.ink} strokeWidth="2" fill={T.yellow} />
        <path
          d="M12 34 Q 20 22, 28 32 T 46 28"
          stroke={T.ink}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="46" cy="28" r="3" fill={T.fire} />
      </svg>
      {label && (
        <div className="leading-none">
          <div
            style={{
              fontFamily: "var(--font-unbounded)",
              fontWeight: 300,
              fontSize: size === 34 ? 22 : 30,
              letterSpacing: "-0.04em",
              color: T.ink,
            }}
          >
            wa.co
          </div>
          <div
            className="font-mono text-[9px] tracking-[0.25em] uppercase mt-0.5"
            style={{ color: `${T.ink}88` }}
          >
            agency · huila
          </div>
        </div>
      )}
    </div>
  );
}
