"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "../lib/MagneticButton";
import SplitText from "../lib/SplitText";
import AnimatedLettermark from "../icons/AnimatedLettermark";
import { Heliconia, MonsteraLeaf, Anturio, CoffeeBranch } from "../icons/Botanicals";
import { T, WHATSAPP_LINK } from "../tokens";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: T.cream }}>
      {/* fondo — sol respirando + capas botánicas */}
      <HeroBackdrop />

      <div className="relative mx-auto max-w-[1400px] px-5 pb-24 pt-36 md:px-10 md:pb-40 md:pt-44">
        {/* Logo animado protagonista */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-10"
        >
          <AnimatedLettermark height={78} label={false} tone="dark" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mb-8 flex items-center gap-3"
        >
          <span className="inline-block h-[1px] w-10" style={{ background: T.ink, opacity: 0.4 }} />
          <span
            className="font-mono text-[11px] uppercase tracking-[0.3em]"
            style={{ color: `${T.ink}aa` }}
          >
            Agencia IA · Nace en el Huila · Corre en LATAM
          </span>
        </motion.div>

        <h1
          className="relative leading-[0.88] tracking-[-0.035em]"
          style={{
            fontFamily: "var(--font-unbounded)",
            fontWeight: 200,
            fontSize: "clamp(42px, 9.2vw, 140px)",
            color: T.ink,
            textWrap: "balance",
          }}
        >
          <SplitText text="automatizamos" as="span" stagger={0.04} />
          <br />
          <SplitText
            text="lo que te hace"
            as="span"
            stagger={0.04}
            delay={0.15}
            style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", fontWeight: 300, color: T.selva }}
          />
          <br />
          <SplitText text="pensar." as="span" stagger={0.04} delay={0.3} />
        </h1>

        <div className="relative mt-14 grid gap-6 md:mt-20 md:grid-cols-12 md:gap-10">
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-[19px] leading-[1.45] md:col-span-7 md:text-[22px]"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 400,
              color: `${T.ink}dd`,
              textWrap: "pretty",
            }}
          >
            Construimos chatbots, agentes IA y flujos n8n que trabajan por ti.
            Desde el <em className="italic">Huila</em>, para PyMEs de Colombia y LATAM
            que quieren que su negocio corra — de día, de noche, siempre.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start gap-3 md:col-span-5 md:items-end md:justify-end"
          >
            <MagneticButton
              as="a"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-[12px] font-medium uppercase tracking-[0.2em]"
              style={{ background: T.ink, color: T.cream }}
            >
              Agendar llamada
              <span aria-hidden>→</span>
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#capacidades"
              className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-[12px] font-medium uppercase tracking-[0.2em]"
              style={{ background: "transparent", color: T.ink, border: `1.5px solid ${T.ink}` }}
            >
              Ver capacidades
            </MagneticButton>
          </motion.div>
        </div>

        {/* strip editorial inferior con foto real */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-20 grid items-center gap-8 md:mt-28 md:grid-cols-[1fr_auto_1fr]"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.3em]" style={{ color: `${T.ink}88` }}>
            · Río Magdalena ·
            <br />
            Nace en el Macizo Colombiano
          </div>
          <div
            className="relative overflow-hidden"
            style={{
              width: "min(560px, 100%)",
              height: 260,
              borderRadius: 6,
              border: `1.5px solid ${T.ink}22`,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1558443957-d6a905fb6364?w=1200&q=80&auto=format&fit=crop"
              alt="Montañas del Huila"
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              style={{ objectFit: "cover", filter: "saturate(0.9) contrast(1.02)" }}
              priority
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, transparent 40%, ${T.cream}44 100%)`,
              }}
            />
          </div>
          <div
            className="font-mono text-[11px] uppercase tracking-[0.3em] md:text-right"
            style={{ color: `${T.ink}88` }}
          >
            · fluye 24/7 ·
            <br />
            como tus automatizaciones
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroBackdrop() {
  return (
    <>
      {/* sol */}
      <motion.div
        aria-hidden
        className="absolute rounded-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{
          top: "-6%",
          right: "-4%",
          width: "clamp(140px, 24vw, 380px)",
          height: "clamp(140px, 24vw, 380px)",
          background: `radial-gradient(circle at 35% 35%, ${T.yellow} 0%, ${T.orange} 70%, ${T.fire} 100%)`,
          zIndex: 0,
          animation: "sun-breathe 9s ease-in-out infinite",
          boxShadow: `0 0 120px ${T.yellow}55`,
        }}
      />

      {/* río cyan trazado */}
      <svg
        aria-hidden
        className="pointer-events-none absolute"
        style={{ left: "-5%", bottom: "-10%", width: "110%", height: "70%", zIndex: 0, opacity: 0.85 }}
        viewBox="0 0 1400 600"
        preserveAspectRatio="none"
      >
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          d="M 0 400 C 200 300, 300 500, 500 420 C 700 340, 800 540, 1000 460 C 1200 380, 1300 500, 1400 440"
          stroke={T.cyan}
          strokeWidth="42"
          fill="none"
          strokeLinecap="round"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          d="M 0 400 C 200 300, 300 500, 500 420 C 700 340, 800 540, 1000 460 C 1200 380, 1300 500, 1400 440"
          stroke={T.selva}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="4 6"
        />
      </svg>

      {/* plantas laterales */}
      <div className="pointer-events-none absolute hidden md:block" style={{ left: "-2%", bottom: "2%", zIndex: 0 }}>
        <Heliconia size={260} />
      </div>
      <div className="pointer-events-none absolute hidden lg:block" style={{ left: "-3%", top: "28%", zIndex: 0, opacity: 0.9 }}>
        <MonsteraLeaf size={240} rotate={-28} />
      </div>
      <div className="pointer-events-none absolute hidden md:block" style={{ right: "-2%", bottom: "-4%", zIndex: 0 }}>
        <CoffeeBranch size={320} />
      </div>
      <div className="pointer-events-none absolute hidden lg:block" style={{ right: "6%", top: "18%", zIndex: 0 }}>
        <Anturio size={140} />
      </div>

      <style>{`
        @keyframes sun-breathe {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.025); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="sun-breathe"] { animation: none !important; }
        }
      `}</style>
    </>
  );
}
