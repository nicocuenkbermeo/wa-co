"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { T, WHATSAPP_LINK } from "./tokens";

export default function WhatsAppFab() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setTooltip(true), 800);
    const t2 = setTimeout(() => setTooltip(false), 5800);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="fab"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 right-5 z-40 flex items-end gap-2"
        >
          <AnimatePresence>
            {tooltip && (
              <motion.div
                key="tt"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.22 }}
                className="mb-2 hidden max-w-[240px] rounded-2xl px-4 py-3 text-[13px] leading-[1.35] sm:block"
                style={{
                  background: T.ink,
                  color: T.cream,
                  fontFamily: "var(--font-fraunces)",
                }}
              >
                Te contestamos en vivo —{" "}
                <em style={{ color: T.yellow }}>o el bot cotiza mientras tanto.</em>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribir por WhatsApp"
            className="group flex items-center gap-3 rounded-full py-3.5 pl-4 pr-5 shadow-[0_14px_32px_rgba(10,51,10,0.3)] transition-all hover:shadow-[0_18px_40px_rgba(10,51,10,0.4)]"
            style={{ background: T.selva, color: T.yellow }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20.52 3.48A12 12 0 003.48 20.52L2 22l1.48-1.48A12 12 0 1020.52 3.48zM12 21.55a9.53 9.53 0 01-4.86-1.33l-.35-.2-3.4.9.91-3.31-.23-.36A9.55 9.55 0 1121.55 12 9.55 9.55 0 0112 21.55zm5.26-7.12c-.29-.14-1.69-.83-1.95-.93s-.45-.14-.64.15-.73.93-.9 1.12-.33.22-.62.07a7.8 7.8 0 01-2.29-1.42 8.65 8.65 0 01-1.59-1.98c-.17-.29 0-.44.13-.59l.47-.55a2.13 2.13 0 00.29-.49.55.55 0 000-.5c-.07-.15-.64-1.55-.88-2.12s-.47-.48-.64-.49h-.55a1.05 1.05 0 00-.77.36 3.22 3.22 0 00-1 2.4 5.58 5.58 0 001.17 2.97 12.85 12.85 0 004.92 4.36 8.5 8.5 0 001.65.62 3.94 3.94 0 001.82.12 2.95 2.95 0 001.94-1.38 2.4 2.4 0 00.17-1.38c-.07-.14-.26-.22-.55-.36z" />
            </svg>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.22em]">
              WhatsApp
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
