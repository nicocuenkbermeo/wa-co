"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode, type CSSProperties } from "react";
import { useReducedMotion } from "./useReducedMotion";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  y?: number;
  once?: boolean;
};

export default function Reveal({ children, className, style, delay = 0, y = 28, once = true }: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-12% 0px -12% 0px" });

  if (reduced) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, willChange: "transform, opacity, filter" }}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
