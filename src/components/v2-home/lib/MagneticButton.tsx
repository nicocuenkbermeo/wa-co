"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { useReducedMotion } from "./useReducedMotion";

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  ariaLabel?: string;
  style?: React.CSSProperties;
};

export default function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  as = "a",
  href,
  target,
  rel,
  onClick,
  ariaLabel,
  style,
}: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 22, mass: 0.4 });

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const common = {
    ref: ref as React.RefObject<HTMLAnchorElement & HTMLButtonElement>,
    className,
    style: { ...style, x: springX, y: springY },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onClick,
    "aria-label": ariaLabel,
  };

  if (as === "a") {
    return (
      <motion.a href={href} target={target} rel={rel} {...common}>
        {children}
      </motion.a>
    );
  }
  return <motion.button type="button" {...common}>{children}</motion.button>;
}
