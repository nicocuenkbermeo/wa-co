"use client";

import { useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

type Props = {
  value: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
};

function parseValue(raw: string): { numeric: number | null; suffix: string; prefix: string } {
  const m = raw.match(/^(\D*?)([\d.,]+)(.*)$/);
  if (!m) return { numeric: null, suffix: "", prefix: "" };
  const prefix = m[1] ?? "";
  const num = parseFloat(m[2].replace(/,/g, ""));
  const suffix = m[3] ?? "";
  if (!Number.isFinite(num)) return { numeric: null, suffix: "", prefix: "" };
  return { numeric: num, suffix, prefix };
}

export default function NumberCounter({ value, duration = 1.8, className, style }: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const { numeric, suffix, prefix } = parseValue(value);
  const motion = useMotionValue(0);
  const [display, setDisplay] = useState<string>(numeric === null ? value : `${prefix}0${suffix}`);

  const decimals = (() => {
    if (numeric === null) return 0;
    const raw = value.match(/[\d.,]+/)?.[0] ?? "";
    const dot = raw.indexOf(".");
    return dot === -1 ? 0 : raw.length - dot - 1;
  })();

  const rounded = useTransform(motion, (v) => {
    if (numeric === null) return value;
    return `${prefix}${v.toFixed(decimals)}${suffix}`;
  });

  useEffect(() => {
    if (numeric === null) return;
    if (reduced) {
      setDisplay(`${prefix}${numeric.toFixed(decimals)}${suffix}`);
      return;
    }
    if (!inView) return;
    const unsub = rounded.on("change", (v) => setDisplay(v));
    const controls = animate(motion, numeric, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, numeric, duration, reduced, rounded, motion, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className} style={style}>
      {numeric === null ? value : display}
    </span>
  );
}
