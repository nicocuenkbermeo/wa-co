"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { T } from "../tokens";

type Props = {
  from?: string;
  to?: string;
};

export default function RiverDivider({ from = T.cream, to = T.selva }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <div ref={ref} className="relative" style={{ background: from, height: 140, overflow: "hidden" }}>
      <svg width="100%" height="140" viewBox="0 0 1400 140" preserveAspectRatio="none" style={{ display: "block" }} aria-hidden>
        <path
          d="M 0 90 C 200 40, 400 130, 700 70 C 1000 10, 1200 100, 1400 60 L 1400 140 L 0 140 Z"
          fill={to}
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : undefined}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          d="M 0 90 C 200 40, 400 130, 700 70 C 1000 10, 1200 100, 1400 60"
          stroke={T.yellow}
          strokeWidth="3"
          fill="none"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : undefined}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          d="M 0 100 C 200 50, 400 140, 700 80 C 1000 20, 1200 110, 1400 70"
          stroke={T.cyan}
          strokeWidth="2"
          fill="none"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}
