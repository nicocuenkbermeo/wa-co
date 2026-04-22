"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type CSSProperties, type MouseEvent } from "react";
import { useReducedMotion } from "./useReducedMotion";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  max?: number;
};

export default function TiltCard({ children, className = "", style, max = 7 }: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const spX = useSpring(mx, { stiffness: 180, damping: 20, mass: 0.4 });
  const spY = useSpring(my, { stiffness: 180, damping: 20, mass: 0.4 });

  const rotateY = useTransform(spX, [0, 1], [-max, max]);
  const rotateX = useTransform(spY, [0, 1], [max, -max]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1000 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}
