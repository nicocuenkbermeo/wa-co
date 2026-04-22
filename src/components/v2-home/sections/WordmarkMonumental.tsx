"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { T } from "../tokens";

export default function WordmarkMonumental() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32" style={{ background: T.creamSoft }}>
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="relative">
          <motion.div
            style={{ x }}
            className="leading-[0.82] tracking-[-0.05em]"
          >
            <span
              style={{
                fontFamily: "var(--font-unbounded)",
                fontWeight: 200,
                fontSize: "clamp(100px, 24vw, 380px)",
                color: T.selva,
              }}
            >
              wa
              <span
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: T.fire,
                }}
              >
                .
              </span>
              co
            </span>
          </motion.div>
          <p
            className="absolute bottom-6 right-0 max-w-[30ch] text-right text-[13px] md:bottom-12 md:text-[14px]"
            style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", color: `${T.ink}99` }}
          >
            —— enraizada en el Huila,
            <br />
            fluye por toda Colombia y LATAM.
          </p>
        </div>
      </div>
    </section>
  );
}
