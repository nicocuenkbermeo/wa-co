"use client";

import { motion } from "framer-motion";
import Lettermark from "@/components/shared/Lettermark";

const floatingMetrics = [
  { value: "24 / 7", label: "Uptime", delay: 0.8, pos: "top-[18%] left-[6%]" },
  { value: "−80%", label: "Tiempo manual", delay: 1.0, pos: "top-[32%] right-[8%]" },
  { value: "100%", label: "Trazabilidad", delay: 1.2, pos: "bottom-[34%] left-[4%]" },
  { value: "E2E", label: "Pipeline IA", delay: 1.4, pos: "bottom-[22%] right-[6%]" },
];

export default function HeroV2() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#0a0a08] flex items-center justify-center isolate">
      {/* ============================================================ */}
      {/* LAYER 1 — Radial spotlights (guayaba + amarillo + verde)      */}
      {/* ============================================================ */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: [
            "radial-gradient(ellipse 60% 55% at 20% 20%, rgba(230,106,46,0.22), transparent 60%)",
            "radial-gradient(ellipse 65% 55% at 80% 30%, rgba(212,182,40,0.18), transparent 60%)",
            "radial-gradient(ellipse 70% 45% at 50% 95%, rgba(63,107,64,0.24), transparent 65%)",
          ].join(", "),
        }}
      />

      {/* Noise texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ============================================================ */}
      {/* LAYER 2 — Topographic rings (river contour lines, concentric) */}
      {/* ============================================================ */}
      <motion.svg
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 w-full h-full opacity-[0.09]"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.09, scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <g fill="none" stroke="#e0c94a" strokeWidth="0.6">
          {Array.from({ length: 28 }).map((_, i) => {
            const r = 80 + i * 28;
            return (
              <ellipse
                key={i}
                cx="800"
                cy="450"
                rx={r}
                ry={r * 0.62}
                transform={`rotate(${-8 + i * 0.4} 800 450)`}
              />
            );
          })}
        </g>
      </motion.svg>

      {/* ============================================================ */}
      {/* LAYER 3 — Central 3D-feel lettermark                           */}
      {/* ============================================================ */}
      <div className="absolute inset-0 flex items-center justify-center -z-0">
        {/* Big soft glow */}
        <div
          aria-hidden
          className="absolute rounded-full blur-[100px] opacity-60"
          style={{
            width: "520px",
            height: "520px",
            background:
              "radial-gradient(circle, rgba(226,199,40,0.55), rgba(147,166,74,0.35) 40%, transparent 70%)",
            animation: "pulseGlow 6s ease-in-out infinite",
          }}
        />

        {/* Rotating orbital ring behind */}
        <motion.div
          aria-hidden
          className="absolute w-[640px] h-[640px] rounded-full"
          style={{
            border: "1px dashed rgba(224,201,74,0.18)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#e0c94a] shadow-[0_0_12px_rgba(224,201,74,0.8)]" />
        </motion.div>

        <motion.div
          aria-hidden
          className="absolute w-[780px] h-[780px] rounded-full"
          style={{ border: "1px dashed rgba(230,106,46,0.14)" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#e66a2e] shadow-[0_0_8px_rgba(230,106,46,0.8)]" />
        </motion.div>

        {/* The lettermark — with 3D perspective float */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
          className="relative"
        >
          <motion.div
            animate={{
              rotateY: [-6, 6, -6],
              rotateX: [3, -3, 3],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              transformStyle: "preserve-3d",
              filter:
                "drop-shadow(0 30px 60px rgba(226,199,40,0.35)) drop-shadow(0 10px 30px rgba(63,107,64,0.45))",
            }}
          >
            <Lettermark height={340} />
          </motion.div>
        </motion.div>
      </div>

      {/* ============================================================ */}
      {/* LAYER 4 — Floating metric glass cards                          */}
      {/* ============================================================ */}
      {floatingMetrics.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: m.delay, ease: [0.22, 1, 0.36, 1] }}
          className={`hidden md:block absolute ${m.pos} z-10`}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative rounded-2xl px-5 py-4 min-w-[140px] backdrop-blur-xl bg-white/[0.04] border border-white/[0.08] shadow-[0_24px_48px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            <span className="absolute -top-2 -left-2 w-2 h-2 rounded-full bg-[#e0c94a] shadow-[0_0_10px_rgba(224,201,74,0.9)]" />
            <p
              className="font-display italic text-3xl md:text-4xl leading-none text-[#e0c94a] tracking-[-0.01em]"
              style={{ textShadow: "0 0 24px rgba(224,201,74,0.35)" }}
            >
              {m.value}
            </p>
            <p className="mt-2 font-mono text-[10px] tracking-[0.22em] uppercase text-white/60">
              {m.label}
            </p>
          </motion.div>
        </motion.div>
      ))}

      {/* ============================================================ */}
      {/* LAYER 5 — Hero content (text on top)                           */}
      {/* ============================================================ */}
      <div className="relative z-20 mx-auto max-w-5xl px-6 md:px-10 text-center py-24">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-[#e0c94a]/90 mb-10"
        >
          <span className="inline-flex items-center gap-2">
            <span className="w-6 h-px bg-[#e0c94a]/50" />
            Agencia de IA · Neiva, Huila · Colombia
            <span className="w-6 h-px bg-[#e0c94a]/50" />
          </span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-normal text-white leading-[0.98] tracking-[-0.02em]"
          style={{
            fontSize: "clamp(42px, 7vw, 112px)",
            textWrap: "balance",
            textShadow: "0 2px 40px rgba(0,0,0,0.6)",
          }}
        >
          Automatizaciones que{" "}
          <em className="italic text-[#e0c94a]">corren solas</em>.
          <br />
          Equipos que vuelven a pensar.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mx-auto mt-10 max-w-[52ch] text-[16px] md:text-[18px] leading-[1.65] text-white/70"
        >
          Construimos chatbots, agentes IA y flujos que trabajan por ti. Desde el
          Huila, para PyMEs de Colombia y LATAM que quieren que su negocio corra
          — de día, de noche, siempre.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contacto"
            className="group relative inline-flex items-center gap-3 rounded-full pl-6 pr-5 py-4 font-mono text-[11px] tracking-[0.22em] uppercase font-medium text-[#0a0a08] transition-all shadow-[0_12px_32px_rgba(224,201,74,0.35)] hover:shadow-[0_16px_40px_rgba(224,201,74,0.55)] hover:-translate-y-0.5"
            style={{
              background:
                "linear-gradient(135deg, #e2c728 0%, #d4b628 50%, #b8a02a 100%)",
            }}
          >
            Agendar llamada
            <span className="inline-block w-6 h-px bg-[#0a0a08] transition-all group-hover:w-10" />
          </a>

          <a
            href="#capacidades"
            className="inline-flex items-center gap-3 rounded-full pl-6 pr-5 py-4 font-mono text-[11px] tracking-[0.22em] uppercase text-white/90 hover:text-white transition-all backdrop-blur-xl bg-white/[0.04] border border-white/[0.1] hover:border-white/[0.25] hover:bg-white/[0.08]"
          >
            Ver capacidades
            <span className="inline-block w-5 h-px bg-white/60" />
          </a>
        </motion.div>
      </div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center z-20"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="font-mono text-[9px] tracking-[0.28em] uppercase text-white/40">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 8, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-8 bg-white/40"
          />
        </div>
      </motion.div>

      <style jsx global>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}
