"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { T } from "./tokens";

/**
 * Initial page preloader with wordmark SVG stroke animation.
 * Shows for ~1.1s then fades out with mask reveal.
 * Uses sessionStorage so it only runs on first visit of the session.
 */
export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("wa-seen");
    if (seen) {
      setVisible(false);
      return;
    }
    const t = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("wa-seen", "1");
    }, 1100);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: T.cream }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" aria-label="Cargando wa.co">
              <motion.circle
                cx="60"
                cy="60"
                r="56"
                stroke={T.ink}
                strokeWidth="2"
                fill={T.yellow}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path
                d="M24 68 Q 40 44, 56 64 T 92 56"
                stroke={T.ink}
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              />
              <motion.circle
                cx="92"
                cy="56"
                r="6"
                fill={T.fire}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, ease: "backOut", delay: 0.9 }}
              />
            </svg>

            <motion.div
              className="overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            >
              <div
                className="whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-unbounded)",
                  fontWeight: 300,
                  fontSize: 36,
                  letterSpacing: "-0.04em",
                  color: T.ink,
                }}
              >
                wa<span style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", color: T.fire }}>.</span>co
              </div>
            </motion.div>

            <motion.div
              className="font-mono text-[10px] uppercase tracking-[0.32em]"
              style={{ color: `${T.ink}66` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              un sistema que fluye
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
