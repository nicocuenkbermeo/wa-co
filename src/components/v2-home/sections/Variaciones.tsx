"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "../lib/Reveal";
import { T } from "../tokens";

const VERSIONS = [
  { n: "i", title: "Magdalena + Suaza", sub: "Trazo grueso · río madre", accent: T.orange },
  { n: "ii", title: "Río Páez", sub: "Paleta saturada · sol puro", accent: T.yellow },
  { n: "iii", title: "La Plata", sub: "Línea fina · trazo botánico", accent: T.fire },
  { n: "iv", title: "Magdalena", sub: "Gradiente agua-selva", accent: T.selva },
  { n: "v", title: "Páez", sub: "Alto contraste · editorial", accent: T.ink },
  { n: "vi", title: "Sistema fluvial", sub: "Trazo puro · outline", accent: T.cyan },
];

export default function Variaciones() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: T.creamDeep }}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-14 grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em]" style={{ color: T.selva, fontWeight: 600 }}>
              · Seis direcciones
            </p>
            <div
              className="font-mono text-[12px] leading-[1.6]"
              style={{ color: T.ink, opacity: 0.72 }}
            >
              Un solo sistema. Seis versiones
              <br />
              nombradas por los ríos y
              <br />
              territorios del Huila que
              <br />
              formaron la marca.
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8">
            <h2
              className="leading-[0.92] tracking-[-0.03em]"
              style={{
                fontFamily: "var(--font-unbounded)",
                fontWeight: 200,
                fontSize: "clamp(32px, 5vw, 72px)",
                color: T.ink,
                textWrap: "balance",
              }}
            >
              La marca{" "}
              <em style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", color: T.selva }}>
                es el territorio
              </em>
              . No un logo.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <motion.div
            style={{ y: imgY }}
            className="relative mx-auto"
          >
            <Image
              src="/design-system/assets/lettermark-6-direcciones.png"
              alt="Seis variaciones territoriales del lettermark wa nombradas por los ríos del Huila — Magdalena, Páez, La Plata, Suaza"
              width={1600}
              height={2133}
              sizes="(max-width: 768px) 100vw, (max-width: 1400px) 95vw, 1320px"
              className="block h-auto w-full"
              style={{ mixBlendMode: "multiply" }}
            />
          </motion.div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
            {VERSIONS.map((v) => (
              <div key={v.n} className="border-t pt-4" style={{ borderColor: `${T.ink}22` }}>
                <div className="flex items-center gap-2">
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.3em]"
                    style={{ color: v.accent, fontWeight: 600 }}
                  >
                    {v.n}.
                  </span>
                  <span
                    aria-hidden
                    className="h-[1px] flex-1"
                    style={{ background: v.accent, opacity: 0.5 }}
                  />
                </div>
                <div
                  className="mt-3 text-[14px] leading-[1.15] tracking-[-0.01em]"
                  style={{
                    fontFamily: "var(--font-unbounded)",
                    fontWeight: 400,
                    color: T.ink,
                  }}
                >
                  {v.title}
                </div>
                <div
                  className="mt-1 text-[12px] leading-[1.35]"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontStyle: "italic",
                    color: T.ink,
                    opacity: 0.65,
                  }}
                >
                  {v.sub}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
