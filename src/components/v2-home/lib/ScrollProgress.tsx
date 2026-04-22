"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 22, mass: 0.25 });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left"
      style={{ background: "#0A330A", scaleX }}
    />
  );
}
