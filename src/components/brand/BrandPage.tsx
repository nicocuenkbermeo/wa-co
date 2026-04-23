"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/v2-home/sections/Navbar";
import Footer from "@/components/v2-home/sections/Footer";
import Reveal from "@/components/v2-home/lib/Reveal";
import MagneticButton from "@/components/v2-home/lib/MagneticButton";
import { T } from "@/components/v2-home/tokens";

type Section = {
  slug: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
};

const SECTIONS: Section[] = [
  {
    slug: "01-brand",
    number: "01",
    title: "Fundamentos",
    description:
      "Territorio, propósito y tesis. Por qué wa.co existe y cómo se lee la marca en una línea.",
    tags: ["Propósito", "Territorio", "Tono"],
  },
  {
    slug: "02-logo",
    number: "02",
    title: "Logo & Lettermark",
    description:
      "Construcción del lettermark, variaciones escultóricas, área de respiro y usos mínimos.",
    tags: ["Lettermark", "Construcción", "Clearspace"],
  },
  {
    slug: "03-color",
    number: "03",
    title: "Paleta Cromática",
    description:
      "Crema Páez, selva Huila y tintes de río. Sistema primario, acentos y combinaciones accesibles.",
    tags: ["Páez", "Selva", "Contraste"],
  },
  {
    slug: "04-typography",
    number: "04",
    title: "Tipografía",
    description:
      "Instrument Sans + Instrument Serif + Unbounded. Escala editorial y jerarquía responsive.",
    tags: ["Instrument", "Escala", "Responsive"],
  },
  {
    slug: "05-spacing",
    number: "05",
    title: "Grilla & Espaciado",
    description:
      "Grilla de 12 columnas, ritmo de 8px y cadencia vertical. Cómo respira el sistema.",
    tags: ["Grid 12", "8pt", "Ritmo"],
  },
  {
    slug: "06-components",
    number: "06",
    title: "Componentes",
    description:
      "Botones, tarjetas, inputs, navegaciones. Reglas de estado, foco, motion y jerarquía.",
    tags: ["UI Kit", "Estados", "Motion"],
  },
  {
    slug: "07-iconography",
    number: "07",
    title: "Iconografía",
    description:
      "Sistema de íconos lineales, trazo de 1.5px, esquinas suaves y set operativo de la agencia.",
    tags: ["Lineal", "Set", "Consistencia"],
  },
  {
    slug: "08-patterns",
    number: "08",
    title: "Patrones & Texturas",
    description:
      "Cartografía fluvial, botánicos del Huila y texturas Páez aplicadas como capa narrativa.",
    tags: ["Cartografía", "Botánicos", "Texturas"],
  },
  {
    slug: "09-applications",
    number: "09",
    title: "Aplicaciones",
    description:
      "Landing, deck, social, papelería y merchandising. El sistema puesto a operar.",
    tags: ["Web", "Deck", "Social"],
  },
];

function Card({ section, index }: { section: Section; index: number }) {
  return (
    <Reveal delay={index * 0.04}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="group relative flex h-full flex-col overflow-hidden rounded-[20px]"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${T.ghost}1f`,
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          className="relative aspect-[16/10] overflow-hidden"
          style={{ background: T.stardust }}
        >
          <img
            src={`/brand/thumbs/${section.slug}.jpg`}
            alt={`Vista previa — ${section.title}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, transparent 55%, ${T.obsidian}cc 100%)`,
            }}
          />
          <span
            className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em]"
            style={{ color: T.cream }}
          >
            {section.number} / 09
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-5 p-6 md:p-7">
          <header className="flex flex-col gap-2">
            <h3
              className="text-[22px] leading-[1.15] md:text-[26px]"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontWeight: 400,
                color: T.cream,
                letterSpacing: "-0.01em",
              }}
            >
              {section.title}
            </h3>
            <p
              className="text-[13.5px] leading-[1.55]"
              style={{ color: `${T.ghost}`, opacity: 0.85 }}
            >
              {section.description}
            </p>
          </header>

          <ul className="flex flex-wrap gap-2">
            {section.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em]"
                style={{
                  color: T.ghost,
                  border: `1px solid ${T.ghost}26`,
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
            <a
              href={`/brand/${section.slug}.pdf`}
              download
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-all"
              style={{
                background: T.cream,
                color: T.obsidian,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M12 3v12m0 0l-5-5m5 5l5-5M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              PDF
            </a>
            <a
              href={`/design-system/${section.slug}.html`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors"
              style={{
                color: T.cream,
                border: `1px solid ${T.ghost}40`,
              }}
            >
              Ver online
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function BrandPage() {
  return (
    <main style={{ background: T.obsidian, color: T.cream }}>
      <Navbar />

      <section
        className="relative overflow-hidden"
        style={{ background: T.obsidian }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(60% 80% at 15% 20%, ${T.aqua}1a, transparent 60%), radial-gradient(60% 70% at 85% 40%, ${T.violet}22, transparent 65%)`,
          }}
        />

        <div className="relative mx-auto max-w-[1400px] px-5 pb-20 pt-40 md:px-10 md:pb-28 md:pt-48">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex items-center gap-3"
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: T.aqua, boxShadow: `0 0 12px ${T.aqua}` }}
            />
            <span
              className="font-mono text-[11px] uppercase tracking-[0.28em]"
              style={{ color: T.ghost }}
            >
              Brand Book · 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="max-w-[18ch] text-balance text-[52px] leading-[0.98] tracking-[-0.02em] md:text-[96px] lg:text-[118px]"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 300,
              color: T.cream,
            }}
          >
            Identidad{" "}
            <span style={{ fontStyle: "italic", color: T.aqua }}>wa.co</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mt-8 max-w-[60ch] text-[16px] leading-[1.7] md:text-[18px]"
            style={{ color: `${T.ghost}`, opacity: 0.88 }}
          >
            Un sistema de marca que fluye como el río. Cartografía fluvial del
            Huila aplicada a una agencia de IA. Nueve capítulos abiertos en
            código, listos para descargar, remixar e implementar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <MagneticButton
              as="a"
              href="/brand/wa-co-brandbook-completo.pdf"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[12px] font-medium uppercase tracking-[0.22em]"
              style={{
                background: T.cream,
                color: T.obsidian,
                boxShadow: `0 10px 40px -12px ${T.aqua}80`,
              }}
            >
              Descargar brand book
              <span aria-hidden>↓</span>
            </MagneticButton>

            <a
              href="/brand/wa-co-brand-assets.zip"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[12px] font-medium uppercase tracking-[0.22em]"
              style={{
                color: T.cream,
                border: `1px solid ${T.ghost}40`,
              }}
            >
              Pack assets (ZIP)
              <span aria-hidden>↓</span>
            </a>

            <a
              href="/design-system/index.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[12px] font-medium uppercase tracking-[0.22em]"
              style={{
                color: T.cream,
                border: `1px solid ${T.ghost}40`,
              }}
            >
              Explorar en línea
              <span aria-hidden>↗</span>
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 gap-6 md:mt-20 md:max-w-3xl md:grid-cols-4"
          >
            {[
              { k: "Capítulos", v: "09" },
              { k: "Formato", v: "PDF · A4" },
              { k: "Assets", v: "32 MB" },
              { k: "Licencia", v: "© wa.co" },
            ].map((item) => (
              <div key={item.k}>
                <dt
                  className="font-mono text-[10px] uppercase tracking-[0.22em]"
                  style={{ color: T.ghost, opacity: 0.7 }}
                >
                  {item.k}
                </dt>
                <dd
                  className="mt-2 text-[22px] md:text-[28px]"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontWeight: 300,
                    color: T.cream,
                  }}
                >
                  {item.v}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      <section className="relative py-20 md:py-28" style={{ background: T.night }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <header className="mb-14 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
              <div>
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.28em]"
                  style={{ color: T.aqua }}
                >
                  · Capítulos
                </span>
                <h2
                  className="mt-4 max-w-[22ch] text-[36px] leading-[1.05] tracking-[-0.015em] md:text-[56px]"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontWeight: 300,
                    color: T.cream,
                  }}
                >
                  Nueve piezas,{" "}
                  <em style={{ color: T.aqua, fontStyle: "italic" }}>
                    un solo río
                  </em>
                  .
                </h2>
              </div>
              <p
                className="max-w-sm text-[14px] leading-[1.7]"
                style={{ color: T.ghost, opacity: 0.85 }}
              >
                Cada capítulo vive como página interactiva y como PDF
                imprimible. Úsalo para implementar, auditar o presentar.
              </p>
            </header>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
            {SECTIONS.map((s, i) => (
              <Card key={s.slug} section={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{ background: T.obsidian }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(70% 90% at 50% 100%, ${T.aqua}26, transparent 70%)`,
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="flex flex-col items-start gap-8 rounded-[28px] p-10 md:p-16"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${T.ghost}26`,
              }}
            >
              <span
                className="font-mono text-[11px] uppercase tracking-[0.28em]"
                style={{ color: T.aqua }}
              >
                · Descarga todo
              </span>
              <h3
                className="max-w-[20ch] text-[40px] leading-[1.04] tracking-[-0.015em] md:text-[72px]"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontWeight: 300,
                  color: T.cream,
                }}
              >
                Brand book completo{" "}
                <em style={{ color: T.aqua, fontStyle: "italic" }}>
                  en un clic
                </em>
                .
              </h3>
              <p
                className="max-w-[58ch] text-[16px] leading-[1.7]"
                style={{ color: T.ghost, opacity: 0.88 }}
              >
                PDF unificado de 9 capítulos + pack ZIP con todos los assets:
                logos vectoriales, lettermarks, botánicos del Huila, patrones
                cartográficos y thumbnails. Listos para usar.
              </p>

              <div className="flex flex-wrap gap-3">
                <MagneticButton
                  as="a"
                  href="/brand/wa-co-brandbook-completo.pdf"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.22em]"
                  style={{
                    background: T.cream,
                    color: T.obsidian,
                    boxShadow: `0 10px 40px -12px ${T.aqua}99`,
                  }}
                >
                  Brand book (PDF)
                  <span aria-hidden>↓</span>
                </MagneticButton>
                <a
                  href="/brand/wa-co-brand-assets.zip"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.22em]"
                  style={{
                    color: T.cream,
                    border: `1px solid ${T.ghost}40`,
                  }}
                >
                  Pack completo (ZIP)
                  <span aria-hidden>↓</span>
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.22em]"
                  style={{
                    color: T.cream,
                    border: `1px solid ${T.ghost}40`,
                  }}
                >
                  Volver al home
                  <span aria-hidden>←</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
