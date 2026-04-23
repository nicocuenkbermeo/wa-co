"use client";

import { motion, useMotionValue, useTransform, useSpring, type MotionValue } from "framer-motion";
import { useEffect } from "react";
import MagneticButton from "../lib/MagneticButton";
import SplitText from "../lib/SplitText";
import AnimatedLettermark from "../icons/AnimatedLettermark";
import { T, WHATSAPP_LINK } from "../tokens";

export default function Hero() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  const orbX = useTransform(sx, [0, 1], ["-8%", "8%"]);
  const orbY = useTransform(sy, [0, 1], ["-5%", "5%"]);

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: T.obsidian, color: T.cream }}
    >
      <FuturistBackdrop orbX={orbX} orbY={orbY} />

      <div className="relative mx-auto max-w-[1400px] px-5 pb-28 pt-36 md:px-10 md:pb-40 md:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-10"
        >
          <AnimatedLettermark height={78} label={false} tone="light" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mb-10 flex items-center gap-3"
        >
          <span
            className="inline-flex h-2 w-2 rounded-full"
            style={{ background: T.aqua, boxShadow: `0 0 18px ${T.aqua}` }}
          />
          <span
            className="font-mono text-[11px] uppercase tracking-[0.32em]"
            style={{ color: `${T.ghost}` }}
          >
            Agencia IA · v2026 · operando 24/7
          </span>
        </motion.div>

        <h1
          className="relative leading-[0.86] tracking-[-0.045em]"
          style={{
            fontFamily: "var(--font-unbounded)",
            fontWeight: 200,
            fontSize: "clamp(44px, 10.5vw, 168px)",
            color: T.cream,
            textWrap: "balance",
          }}
        >
          <SplitText text="construimos" as="span" stagger={0.035} />
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "inline-block",
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontWeight: 300,
              backgroundImage: `linear-gradient(110deg, ${T.aqua} 0%, ${T.violet} 45%, ${T.pitaya} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            inteligencia
          </motion.span>
          <br />
          <SplitText text="que trabaja." as="span" stagger={0.035} delay={0.4} />
        </h1>

        <div className="relative mt-16 grid gap-8 md:mt-24 md:grid-cols-12 md:gap-10">
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-[19px] leading-[1.5] md:col-span-6 md:text-[22px]"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 400,
              color: T.ghost,
              textWrap: "pretty",
            }}
          >
            Agentes, chatbots y flujos <em className="italic" style={{ color: T.cream }}>n8n</em> que
            hacen el trabajo silencioso —&nbsp;mientras tu equipo duerme.
            Diseñado en el Huila. Desplegado en la nube. Corre para toda LATAM.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start gap-3 md:col-span-6 md:items-end md:justify-end"
          >
            <MagneticButton
              as="a"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 text-[12px] font-medium uppercase tracking-[0.22em]"
              style={{
                background: T.cream,
                color: T.obsidian,
                boxShadow: `0 0 0 1px ${T.cream}, 0 20px 60px -20px ${T.aqua}66`,
              }}
            >
              Agendar llamada
              <span aria-hidden>→</span>
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#capacidades"
              className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-[12px] font-medium uppercase tracking-[0.22em]"
              style={{
                background: "rgba(255,255,255,0.04)",
                color: T.cream,
                border: `1px solid ${T.ghost}33`,
                backdropFilter: "blur(10px)",
              }}
            >
              Ver capacidades
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-24 grid gap-5 md:mt-32 md:grid-cols-4"
        >
          {[
            { kpi: "24/7", label: "Operando sin humanos", tone: T.aqua },
            { kpi: "+400h", label: "Liberadas por año", tone: T.violet },
            { kpi: "$0", label: "Leads perdidos de madrugada", tone: T.pitaya },
            { kpi: "1", label: "Cerebro — muchos canales", tone: T.yellow },
          ].map((it) => (
            <div
              key={it.label}
              className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: `1px solid ${T.ghost}1f`,
                backdropFilter: "blur(14px)",
              }}
            >
              <div
                aria-hidden
                className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(400px 200px at top, ${it.tone}22, transparent 70%)` }}
              />
              <div
                className="relative font-light"
                style={{ fontFamily: "var(--font-unbounded)", fontSize: 44, letterSpacing: "-0.04em", color: T.cream }}
              >
                {it.kpi}
              </div>
              <div
                className="relative mt-2 font-mono text-[11px] uppercase tracking-[0.22em]"
                style={{ color: T.ghost }}
              >
                {it.label}
              </div>
              <div
                aria-hidden
                className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                style={{ background: `linear-gradient(90deg, ${it.tone}, transparent)` }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FuturistBackdrop({ orbX, orbY }: { orbX: MotionValue<string>; orbY: MotionValue<string> }) {
  return (
    <>
      {/* grid sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,203,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,203,212,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)",
        }}
      />

      {/* orbe gradient gigante — sigue el cursor */}
      <motion.div
        aria-hidden
        className="absolute"
        style={{
          top: "-20%",
          left: "50%",
          x: orbX,
          y: orbY,
          translateX: "-50%",
          width: "min(1100px, 110vw)",
          height: "min(1100px, 110vw)",
          background: `radial-gradient(circle at 30% 35%, ${T.violet}bb 0%, ${T.aqua}88 25%, ${T.fire}44 55%, transparent 75%)`,
          filter: "blur(40px)",
          zIndex: 0,
          mixBlendMode: "screen",
        }}
      />

      {/* orbe secundario naranja/rojo */}
      <motion.div
        aria-hidden
        className="absolute rounded-full"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        style={{
          bottom: "-35%",
          right: "-10%",
          width: "min(760px, 80vw)",
          height: "min(760px, 80vw)",
          background: `radial-gradient(circle at 40% 40%, ${T.fire}99 0%, ${T.pitaya}66 40%, transparent 75%)`,
          filter: "blur(60px)",
          zIndex: 0,
          mixBlendMode: "screen",
          animation: "orb-float 14s ease-in-out infinite",
        }}
      />

      {/* scan line horizontal */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0"
        initial={{ top: "0%", opacity: 0 }}
        animate={{ top: "100%", opacity: [0, 0.4, 0] }}
        transition={{ duration: 8, ease: "linear", repeat: Infinity, delay: 1 }}
        style={{
          height: 1,
          background: `linear-gradient(90deg, transparent, ${T.aqua}, transparent)`,
          zIndex: 0,
        }}
      />

      <style>{`
        @keyframes orb-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-4%, -6%) scale(1.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="orb-float"] { animation: none !important; }
        }
      `}</style>
    </>
  );
}
