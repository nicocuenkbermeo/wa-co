"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { T } from "../tokens";

export default function WordmarkMonumental() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-1.5, 1.5]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: T.creamSoft }}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-10 flex items-center gap-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em]" style={{ color: T.selva, fontWeight: 500 }}>
            · Identidad
          </span>
          <span className="h-[1px] flex-1" style={{ background: `${T.ink}22` }} aria-hidden />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: `${T.ink}66` }}>
            Lettermark · wa
          </span>
        </div>

        <motion.div style={{ x, rotate }} className="relative flex w-full items-center justify-center">
          <Image
            src="/design-system/assets/logo-wa-escultorico.png"
            alt="Lettermark wa.co escultórico con gradiente del río Páez al verde selva"
            width={1400}
            height={900}
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1260px"
            className="block h-auto w-full max-w-[1200px]"
            style={{ mixBlendMode: "multiply" }}
          />
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <p
              className="text-[18px] leading-[1.45]"
              style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", color: `${T.ink}cc` }}
            >
              El trazo nace en el río Páez — amarillo sol — y fluye hasta el verde selva del Magdalena.
            </p>
          </div>
          <div className="md:col-span-7 md:text-right">
            <p
              className="text-[13px] leading-[1.55]"
              style={{ fontFamily: "var(--font-unbounded)", fontWeight: 300, color: `${T.ink}aa` }}
            >
              Cada versión territorial tiene nombre —{" "}
              <span style={{ color: T.selva, fontWeight: 500 }}>Magdalena, Páez, La Plata, Suaza</span>
              — porque la marca <em style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic" }}>es el territorio</em>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
