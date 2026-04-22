"use client";

import { motion, type Variants } from "framer-motion";
import { T } from "../tokens";

/**
 * Botánica Huila — ilustraciones SVG orgánicas.
 * Heliconia, monstera, palma de cera, anturio, café, hojas nervadas.
 * Cada planta anima al entrar en viewport (sway + grow).
 */

const sway: Variants = {
  rest: { rotate: 0 },
  wave: { rotate: [0, 1.2, -0.8, 0.6, 0], transition: { duration: 7, repeat: Infinity, ease: [0.42, 0, 0.58, 1] } },
};

export function Heliconia({ size = 260, color = T.fire, accent = T.yellow, leaf = T.selva, flipX = false }: { size?: number; color?: string; accent?: string; leaf?: string; flipX?: boolean }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 240"
      fill="none"
      style={{ transformOrigin: "bottom center", transform: flipX ? "scaleX(-1)" : undefined }}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      {/* tallo */}
      <motion.path
        d="M 100 238 C 100 200, 98 160, 100 120 C 102 80, 105 50, 108 30"
        stroke={leaf}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        variants={sway}
        initial="rest"
        animate="wave"
        style={{ transformOrigin: "100px 238px" }}
      />
      {/* inflorescencia heliconia — brácteas zig-zag */}
      {[0, 1, 2, 3, 4].map((i) => {
        const y = 180 - i * 28;
        const side = i % 2 === 0 ? 1 : -1;
        return (
          <motion.g
            key={i}
            variants={sway}
            initial="rest"
            animate="wave"
            style={{ transformOrigin: `100px ${y + 10}px` }}
          >
            <path
              d={`M 100 ${y + 12} L ${100 + side * 44} ${y - 8} L ${100 + side * 30} ${y + 4} L 100 ${y - 4} Z`}
              fill={i % 2 === 0 ? color : accent}
              opacity="0.95"
            />
            <path
              d={`M 100 ${y + 12} L ${100 + side * 44} ${y - 8}`}
              stroke={T.ink}
              strokeWidth="1.2"
              opacity="0.5"
            />
          </motion.g>
        );
      })}
      {/* hojas base */}
      <path
        d="M 60 238 Q 30 210, 50 170 Q 80 180, 90 220 Z"
        fill={leaf}
        opacity="0.88"
      />
      <path
        d="M 140 238 Q 170 210, 150 170 Q 120 180, 110 220 Z"
        fill={leaf}
        opacity="0.75"
      />
      <path
        d="M 60 238 Q 40 210, 55 180"
        stroke={T.cream}
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
    </motion.svg>
  );
}

export function MonsteraLeaf({ size = 300, color = T.selva, flipX = false, rotate = 0 }: { size?: number; color?: string; flipX?: boolean; rotate?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 220 220"
      fill="none"
      style={{ transform: `${flipX ? "scaleX(-1) " : ""}rotate(${rotate}deg)`, transformOrigin: "center" }}
      initial={{ opacity: 0, scale: 0.6, rotate: rotate - 12 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      {/* hoja con ranuras caraterísticas */}
      <motion.g
        variants={sway}
        initial="rest"
        animate="wave"
        style={{ transformOrigin: "110px 200px" }}
      >
        <path
          d="M 110 210 C 70 180, 40 140, 40 95 C 40 50, 70 20, 110 22 C 150 20, 180 50, 180 95 C 180 140, 150 180, 110 210 Z"
          fill={color}
          opacity="0.95"
        />
        {/* ranuras monstera */}
        <path d="M 110 40 C 80 60, 70 90, 72 130" stroke={T.cream} strokeWidth="1.5" fill="none" opacity="0.35" />
        <path d="M 80 80 C 70 90, 62 105, 64 125" stroke={T.cream} strokeWidth="1.2" fill="none" opacity="0.3" />
        <path d="M 140 80 C 150 90, 158 105, 156 125" stroke={T.cream} strokeWidth="1.2" fill="none" opacity="0.3" />
        {/* agujeros característicos */}
        <ellipse cx="90" cy="100" rx="8" ry="14" fill={T.cream} opacity="0.14" />
        <ellipse cx="130" cy="100" rx="8" ry="14" fill={T.cream} opacity="0.14" />
        <ellipse cx="100" cy="140" rx="7" ry="12" fill={T.cream} opacity="0.12" />
        {/* nervadura central */}
        <path d="M 110 210 L 110 25" stroke={T.cream} strokeWidth="1.6" opacity="0.45" />
        {/* tallo */}
        <path d="M 110 210 L 108 230" stroke={color} strokeWidth="5" strokeLinecap="round" />
      </motion.g>
    </motion.svg>
  );
}

export function PalmaDeCera({ size = 420, color = T.selva, trunkColor = "#3a2a12" }: { size?: number; color?: string; trunkColor?: string }) {
  return (
    <motion.svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 200 280"
      fill="none"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      {/* tronco alto palma de cera (símbolo Colombia/Huila) */}
      <path d="M 98 280 L 100 80 L 102 280 Z" fill={trunkColor} />
      {/* textura tronco */}
      {Array.from({ length: 20 }).map((_, i) => (
        <line
          key={i}
          x1="98"
          y1={80 + i * 10}
          x2="102"
          y2={80 + i * 10}
          stroke={T.cream}
          strokeWidth="0.8"
          opacity="0.25"
        />
      ))}
      {/* corona de hojas pinadas */}
      <motion.g variants={sway} initial="rest" animate="wave" style={{ transformOrigin: "100px 80px" }}>
        {[
          { rot: -75, len: 90 },
          { rot: -55, len: 100 },
          { rot: -30, len: 85 },
          { rot: -10, len: 95 },
          { rot: 15, len: 92 },
          { rot: 35, len: 88 },
          { rot: 60, len: 98 },
          { rot: 80, len: 85 },
        ].map((f, i) => (
          <g key={i} transform={`translate(100 80) rotate(${f.rot})`}>
            <path
              d={`M 0 0 Q 20 -8, ${f.len} -4 Q ${f.len - 12} 0, 0 2 Z`}
              fill={color}
              opacity="0.9"
            />
            {/* frondas pequeñas */}
            {[0.2, 0.4, 0.6, 0.8].map((t, j) => (
              <line
                key={j}
                x1={f.len * t}
                y1={-3}
                x2={f.len * t + 6}
                y2={-10}
                stroke={color}
                strokeWidth="1.4"
                opacity="0.7"
              />
            ))}
          </g>
        ))}
      </motion.g>
    </motion.svg>
  );
}

export function Anturio({ size = 160, flower = T.fire, leaf = T.selva }: { size?: number; flower?: string; leaf?: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      {/* hoja de fondo */}
      <path
        d="M 80 150 Q 30 130, 30 80 Q 30 30, 80 30 Q 130 30, 130 80 Q 130 130, 80 150 Z"
        fill={leaf}
        opacity="0.85"
      />
      <path d="M 80 150 L 80 30" stroke={T.cream} strokeWidth="1" opacity="0.3" />
      {/* espata roja (flor) */}
      <path
        d="M 80 90 Q 55 80, 55 55 Q 55 35, 80 30 Q 105 35, 105 55 Q 105 80, 80 90 Z"
        fill={flower}
      />
      <path
        d="M 80 90 Q 55 80, 55 55"
        stroke={T.ink}
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
      />
      {/* espádice (espiga) */}
      <motion.path
        d="M 82 30 Q 85 45, 83 68"
        stroke={T.yellow}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        animate={{ pathLength: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

export function CoffeeBranch({ size = 240, leaf = T.selva, cherry = "#c73d2a", cherryRipe = T.fire }: { size?: number; leaf?: string; cherry?: string; cherryRipe?: string }) {
  return (
    <motion.svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 240 170"
      fill="none"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      <motion.g variants={sway} initial="rest" animate="wave" style={{ transformOrigin: "10px 90px" }}>
        {/* rama */}
        <path d="M 10 90 Q 110 70, 230 85" stroke="#4a2e12" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* hojas ovaladas opuestas (cafeto) */}
        {[
          { x: 60, y: 85, r: 20, flip: false },
          { x: 60, y: 85, r: -20, flip: true },
          { x: 120, y: 80, r: 15, flip: false },
          { x: 120, y: 80, r: -15, flip: true },
          { x: 180, y: 82, r: 22, flip: false },
          { x: 180, y: 82, r: -22, flip: true },
        ].map((l, i) => (
          <g key={i} transform={`translate(${l.x} ${l.y}) rotate(${l.r})`}>
            <path
              d={`M 0 0 Q 18 ${l.flip ? 18 : -18}, 52 0 Q 18 ${l.flip ? -18 : 18}, 0 0 Z`}
              fill={leaf}
              opacity="0.92"
            />
            <path
              d="M 0 0 L 52 0"
              stroke={T.cream}
              strokeWidth="0.7"
              opacity="0.5"
            />
          </g>
        ))}
        {/* cerezas (rojo/amarillo mezcladas) */}
        {[
          { cx: 80, cy: 96, c: cherryRipe },
          { cx: 88, cy: 92, c: cherry },
          { cx: 150, cy: 98, c: cherryRipe },
          { cx: 158, cy: 94, c: "#8c9f3e" },
          { cx: 210, cy: 96, c: cherry },
          { cx: 218, cy: 92, c: cherryRipe },
        ].map((c, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.08, duration: 0.5, ease: "backOut" }}
          >
            <circle cx={c.cx} cy={c.cy} r="6" fill={c.c} />
            <circle cx={c.cx - 1.6} cy={c.cy - 1.6} r="1.8" fill={T.cream} opacity="0.5" />
          </motion.g>
        ))}
      </motion.g>
    </motion.svg>
  );
}

export function VineNervure({ width = 520, stroke = T.selva, opacity = 0.55 }: { width?: number; stroke?: string; opacity?: number }) {
  return (
    <motion.svg
      width={width}
      height={width * 0.5}
      viewBox="0 0 520 260"
      fill="none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity }}
      viewport={{ once: true }}
      transition={{ duration: 1.4 }}
      aria-hidden
    >
      <motion.path
        d="M 0 160 C 80 120, 140 180, 220 140 C 300 100, 360 180, 440 140 C 480 120, 510 150, 520 140"
        stroke={stroke}
        strokeWidth="1.3"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      />
      {[
        { cx: 100, cy: 135, rot: -30 },
        { cx: 180, cy: 165, rot: 20 },
        { cx: 260, cy: 120, rot: -15 },
        { cx: 340, cy: 155, rot: 25 },
        { cx: 420, cy: 135, rot: -10 },
      ].map((p, i) => (
        <motion.g
          key={i}
          transform={`translate(${p.cx} ${p.cy}) rotate(${p.rot})`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 + i * 0.12, duration: 0.7, ease: "backOut" }}
        >
          <path d="M 0 0 Q 10 -14, 30 -8 Q 12 0, 0 0 Z" fill={stroke} opacity="0.9" />
          <path d="M 0 0 L 30 -8" stroke={T.cream} strokeWidth="0.6" opacity="0.5" />
        </motion.g>
      ))}
    </motion.svg>
  );
}
