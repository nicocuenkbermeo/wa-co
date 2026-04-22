"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type CSSProperties } from "react";
import { useReducedMotion } from "./useReducedMotion";

type Props = {
  text: string;
  className?: string;
  style?: CSSProperties;
  stagger?: number;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  mode?: "word" | "char";
  once?: boolean;
};

export default function SplitText({
  text,
  className,
  style,
  stagger = 0.05,
  delay = 0,
  as = "span",
  mode = "word",
  once = true,
}: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });

  const units = mode === "char" ? Array.from(text) : text.split(" ");

  if (reduced) {
    const Tag = as;
    return (
      <Tag className={className} style={style}>
        {text}
      </Tag>
    );
  }

  const Tag = motion[as] as typeof motion.span;

  return (
    <Tag ref={ref as React.Ref<HTMLDivElement>} className={className} style={{ ...style, display: "inline-block" }} aria-label={text}>
      {units.map((unit, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
          <motion.span
            aria-hidden
            style={{ display: "inline-block", willChange: "transform, opacity, filter" }}
            initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
            animate={inView ? { y: 0, opacity: 1, filter: "blur(0px)" } : undefined}
            transition={{
              duration: 0.9,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {unit}
            {mode === "word" && i < units.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
