"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "../lib/Reveal";
import { VineNervure, MonsteraLeaf } from "../icons/Botanicals";
import { T } from "../tokens";

type Shot = {
  src: string;
  alt: string;
  caption: string;
  coords: string;
};

const SHOTS: Shot[] = [
  {
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1400&q=85&auto=format&fit=crop",
    alt: "Granos de café arábica",
    caption: "El café que corre hasta Suiza empieza en una tolva de Rivera.",
    coords: "2.7777° N · 75.2564° W",
  },
  {
    src: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=1400&q=85&auto=format&fit=crop",
    alt: "Río Magdalena serpenteando",
    caption: "El Magdalena corre 1,528 km sin parar. Nuestros flujos también.",
    coords: "2.1894° N · 75.8344° W",
  },
  {
    src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1400&q=85&auto=format&fit=crop",
    alt: "Desierto de la Tatacoa",
    coords: "3.2276° N · 75.1683° W",
    caption: "Tatacoa — donde la IA se queda sin excusas para dormir.",
  },
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&q=85&auto=format&fit=crop",
    alt: "Montañas andinas verdes",
    caption: "Cadena andina. Cada proyecto, una cumbre distinta.",
    coords: "2.9273° N · 75.2819° W",
  },
];

export default function GaleriaHuila() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: T.creamSoft }}
    >
      <div className="pointer-events-none absolute -right-10 top-10 hidden lg:block" style={{ zIndex: 0, opacity: 0.6 }}>
        <MonsteraLeaf size={340} rotate={18} />
      </div>
      <div className="pointer-events-none absolute -left-10 bottom-4 hidden md:block" style={{ zIndex: 0, opacity: 0.5 }}>
        <VineNervure width={560} />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-16 grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: T.fire, fontWeight: 500 }}>
              · Terreno
            </p>
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-9">
            <h2
              className="leading-[0.92] tracking-[-0.03em]"
              style={{
                fontFamily: "var(--font-unbounded)",
                fontWeight: 200,
                fontSize: "clamp(36px, 6vw, 88px)",
                color: T.ink,
                textWrap: "balance",
              }}
            >
              Construimos desde{" "}
              <em style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", color: T.selva }}>
                un lugar real
              </em>{" "}
              — con tiempo, río y café.
            </h2>
            <p
              className="mt-6 max-w-[62ch] text-[16px] leading-[1.6]"
              style={{ fontFamily: "var(--font-fraunces)", color: `${T.ink}cc` }}
            >
              Huila no es decoración. Es la razón por la que tus flujos no se
              caen. Aprendimos a pensar como el río: paciencia, volumen y
              profundidad.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-12">
          {SHOTS.map((s, i) => (
            <Reveal
              key={s.src}
              delay={i * 0.1}
              className={
                i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5" : i === 2 ? "md:col-span-5" : "md:col-span-7"
              }
            >
              <motion.figure
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden"
                style={{
                  borderRadius: 6,
                  border: `1.5px solid ${T.ink}22`,
                  background: T.cream,
                }}
              >
                <div className="relative h-[320px] overflow-hidden md:h-[420px]">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(180deg, transparent 50%, ${T.ink}66 100%)`,
                    }}
                  />
                </div>
                <figcaption className="flex items-start justify-between gap-6 p-6 md:p-7">
                  <p
                    className="text-[15px] leading-[1.5] md:text-[17px]"
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      color: T.ink,
                      textWrap: "balance",
                    }}
                  >
                    {s.caption}
                  </p>
                  <span
                    className="shrink-0 font-mono text-[10px] uppercase tracking-[0.22em]"
                    style={{ color: `${T.ink}99` }}
                  >
                    {s.coords}
                  </span>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
