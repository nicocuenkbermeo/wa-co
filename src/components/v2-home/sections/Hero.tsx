"use client";

import { motion } from "framer-motion";
import MagneticButton from "../lib/MagneticButton";
import SplitText from "../lib/SplitText";
import { T, WHATSAPP_LINK } from "../tokens";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: T.cream }}>
      <div className="relative mx-auto max-w-[1400px] px-5 pb-24 pt-36 md:px-10 md:pb-40 md:pt-44">
        <HeroIllustration />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8 flex items-center gap-3"
        >
          <span className="inline-block h-[1px] w-10" style={{ background: T.ink, opacity: 0.4 }} />
          <span
            className="font-mono text-[11px] uppercase tracking-[0.3em]"
            style={{ color: `${T.ink}aa` }}
          >
            Agencia IA · Huila · LATAM
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
            Construimos chatbots, agentes IA y flujos que trabajan por ti.
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
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <>
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
          boxShadow: `0 0 80px ${T.yellow}55`,
        }}
      />

      <svg
        aria-hidden
        className="pointer-events-none absolute"
        style={{ left: "-5%", bottom: "-10%", width: "110%", height: "70%", zIndex: 0, opacity: 0.92 }}
        viewBox="0 0 1400 600"
        preserveAspectRatio="none"
      >
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.55 }}
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

      <svg
        aria-hidden
        className="pointer-events-none absolute hidden md:block"
        style={{ left: "2%", bottom: "6%", width: 180, height: 180, zIndex: 0 }}
        viewBox="0 0 200 200"
      >
        <path
          d="M40 180 Q 60 120, 100 100 Q 140 80, 170 30"
          stroke={T.selva}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        {[
          { cx: 60, cy: 150, fill: T.fire, r: 14 },
          { cx: 90, cy: 120, fill: T.pitaya, r: 11 },
          { cx: 120, cy: 95, fill: T.orange, r: 16 },
          { cx: 145, cy: 60, fill: T.yellow, r: 13 },
        ].map((c, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 + i * 0.1, ease: "backOut" }}
            style={{ transformOrigin: `${c.cx}px ${c.cy}px` }}
          >
            <circle cx={c.cx} cy={c.cy} r={c.r} fill={c.fill} />
            <circle cx={c.cx} cy={c.cy} r={c.r * 0.4} fill={T.ink} opacity="0.2" />
          </motion.g>
        ))}
      </svg>

      <svg
        aria-hidden
        className="pointer-events-none absolute hidden lg:block"
        style={{ right: "3%", top: "34%", width: 220, height: 220, zIndex: 0, opacity: 0.9 }}
        viewBox="0 0 200 200"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          d="M 20 100 Q 50 40, 100 100 T 180 100"
          stroke={T.fire}
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
          opacity="0.82"
        />
        <path
          d="M 20 100 Q 50 40, 100 100 T 180 100"
          stroke={T.ink}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="4 8"
        />
      </svg>

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
