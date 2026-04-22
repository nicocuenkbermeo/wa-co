"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Reveal from "../lib/Reveal";
import { T } from "../tokens";

type Msg = {
  from: "client" | "bot" | "human";
  text: string;
  time: string;
};

const CONVERSATION: Msg[] = [
  { from: "client", text: "Hola, necesito cotizar 120 polos uniformados para mi empresa", time: "22:47" },
  { from: "bot", text: "Hola 👋 Soy el asistente de wa.co. Te cotizo en 1 minuto. ¿Logo bordado o estampado?", time: "22:47" },
  { from: "client", text: "Bordado. Logo tenemos, 2 colores", time: "22:48" },
  { from: "bot", text: "Perfecto. ¿Talla única o surtido S-M-L-XL? ¿Fecha de entrega?", time: "22:48" },
  { from: "client", text: "Surtido. Entrega en 2 semanas", time: "22:49" },
  {
    from: "bot",
    text: "Cotización lista ✨\n\n120 polos · bordado 2 colores\nUSD $1,840 · entrega 14 días\n\n¿Confirmamos pedido?",
    time: "22:49",
  },
  { from: "human", text: "Soy Yedmi, tomo desde aquí. Mañana te envío la orden firmada.", time: "22:51" },
];

export default function PhoneDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{ background: T.creamDeep }}>
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-5 md:grid-cols-12 md:gap-10 md:px-10">
        <Reveal className="md:col-span-6">
          <div className="mb-6 flex items-center gap-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em]" style={{ color: T.fire, fontWeight: 600 }}>
              · Así funciona
            </p>
            <span className="h-[1px] flex-1" style={{ background: `${T.ink}22` }} aria-hidden />
          </div>
          <h2
            className="leading-[0.92] tracking-[-0.03em]"
            style={{
              fontFamily: "var(--font-unbounded)",
              fontWeight: 200,
              fontSize: "clamp(34px, 5.5vw, 76px)",
              color: T.ink,
              textWrap: "balance",
            }}
          >
            El bot contesta a{" "}
            <em style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", color: T.selva }}>
              las 10 de la noche
            </em>
            . Tú duermes.
          </h2>
          <p
            className="mt-8 max-w-[52ch] text-[17px] leading-[1.5]"
            style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", color: `${T.ink}cc` }}
          >
            Un cliente real escribió a las 22:47. A las 22:49 tenía cotización. A las 22:51 Yedmi (humana) tomó el
            relevo. El 62% de las consultas B2B llegan fuera de horario — antes se perdían.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            <StatBlock value="22:49" label="cotización lista" />
            <StatBlock value="<2min" label="tiempo total" />
            <StatBlock value="24/7" label="operación bot" />
          </div>
        </Reveal>

        <div ref={ref} className="relative md:col-span-6">
          <PhoneFrame>
            <ChatBody messages={CONVERSATION} inView={inView} />
          </PhoneFrame>
          <DecoBotanical />
        </div>
      </div>
    </section>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t pt-4" style={{ borderColor: `${T.ink}22` }}>
      <div
        className="leading-none"
        style={{
          fontFamily: "var(--font-unbounded)",
          fontWeight: 300,
          fontSize: "clamp(26px, 3vw, 38px)",
          color: T.selva,
          letterSpacing: "-0.03em",
        }}
      >
        {value}
      </div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: `${T.ink}99` }}>
        {label}
      </div>
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="relative mx-auto"
      initial={{ opacity: 0, y: 20, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        width: "min(340px, 85vw)",
        aspectRatio: "340 / 680",
        background: T.ink,
        borderRadius: 42,
        padding: 10,
        boxShadow: `0 24px 60px rgba(10,10,8,0.18), 0 8px 20px rgba(10,10,8,0.12)`,
      }}
    >
      <div
        className="relative h-full w-full overflow-hidden"
        style={{
          borderRadius: 32,
          background: "#ECE5D8",
          backgroundImage: `radial-gradient(circle at 20% 30%, ${T.cyan}18, transparent 50%), radial-gradient(circle at 80% 70%, ${T.yellow}18, transparent 50%)`,
        }}
      >
        <div
          aria-hidden
          className="absolute left-1/2 top-2 h-1.5 w-20 -translate-x-1/2 rounded-full"
          style={{ background: T.ink, opacity: 0.85 }}
        />
        <div
          className="flex items-center gap-3 border-b px-4 pb-3 pt-7"
          style={{ borderColor: "#00000010", background: "#FFFDF4" }}
        >
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{ background: T.selva, color: T.yellow, fontFamily: "var(--font-unbounded)", fontWeight: 500, fontSize: 14 }}
          >
            wa
          </div>
          <div>
            <div className="text-[13px] font-semibold" style={{ fontFamily: "var(--font-unbounded)", fontWeight: 500, color: T.ink }}>
              wa.co · TC
            </div>
            <div className="flex items-center gap-1.5 text-[10px]" style={{ color: T.selva, fontFamily: "var(--font-fraunces)", fontStyle: "italic" }}>
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#22C55E" }} />
              en línea
            </div>
          </div>
        </div>
        {children}
      </div>
    </motion.div>
  );
}

function ChatBody({ messages, inView }: { messages: Msg[]; inView: boolean }) {
  return (
    <div className="flex h-full flex-col gap-2 overflow-hidden px-3 py-4">
      {messages.map((msg, i) => (
        <motion.div
          key={i}
          className={`flex ${msg.from === "client" ? "justify-start" : "justify-end"}`}
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.4, delay: 0.25 + i * 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="max-w-[78%] whitespace-pre-line px-3 py-2 text-[11.5px] leading-[1.35]"
            style={{
              background:
                msg.from === "client"
                  ? "#FFFFFF"
                  : msg.from === "human"
                  ? T.selva
                  : T.yellow,
              color: msg.from === "human" ? T.cream : T.ink,
              borderRadius: 14,
              borderTopLeftRadius: msg.from === "client" ? 4 : 14,
              borderTopRightRadius: msg.from === "client" ? 14 : 4,
              fontFamily: "var(--font-fraunces)",
              boxShadow: "0 1px 2px rgba(10,10,8,0.08)",
            }}
          >
            {msg.from === "bot" && (
              <div
                className="mb-1 font-mono text-[8px] uppercase tracking-[0.22em]"
                style={{ color: `${T.ink}77`, fontStyle: "normal" }}
              >
                BOT · wa.co
              </div>
            )}
            {msg.from === "human" && (
              <div
                className="mb-1 font-mono text-[8px] uppercase tracking-[0.22em]"
                style={{ color: `${T.cream}aa`, fontStyle: "normal" }}
              >
                HUMANO · YEDMI
              </div>
            )}
            {msg.text}
            <div
              className="mt-1 text-right text-[8px]"
              style={{
                color: msg.from === "human" ? `${T.cream}88` : `${T.ink}66`,
                fontStyle: "normal",
                fontFamily: "var(--font-mono)",
              }}
            >
              {msg.time} {msg.from !== "client" && "✓✓"}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function DecoBotanical() {
  return (
    <>
      <motion.svg
        aria-hidden
        className="pointer-events-none absolute hidden md:block"
        style={{ top: "-6%", right: "-8%", width: 140, height: 140, zIndex: -1, opacity: 0.85 }}
        viewBox="0 0 120 120"
        animate={{ rotate: [0, 6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M60 10 C 90 25, 100 55, 85 90 C 75 110, 45 115, 30 95 C 10 75, 15 40, 35 20 C 45 12, 52 10, 60 10 Z"
          fill={T.yellow}
          stroke={T.ink}
          strokeWidth="1.5"
        />
        <path d="M60 15 L 60 105" stroke={T.selva} strokeWidth="1.5" />
      </motion.svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute hidden md:block"
        style={{ bottom: "-6%", left: "-12%", width: 180, height: 180, zIndex: -1, opacity: 0.5 }}
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="90" stroke={T.selva} strokeWidth="1" strokeDasharray="4 6" fill="none" />
        <circle cx="100" cy="100" r="60" stroke={T.fire} strokeWidth="1" fill="none" />
      </svg>
    </>
  );
}
