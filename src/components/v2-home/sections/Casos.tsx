"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Reveal from "../lib/Reveal";
import { T } from "../tokens";

type Case = {
  id: string;
  name: string;
  tag: string;
  result: string;
  body: string;
  color: string;
  accent: string;
  detail: {
    challenge: string;
    solution: string;
    stack: string[];
    metrics: { label: string; value: string }[];
  };
};

const CASES: Case[] = [
  {
    id: "b2b-dotaciones",
    name: "Cliente B2B",
    tag: "Dotaciones · Colombia",
    result: "+340% consultas atendidas fuera de horario",
    body:
      "Chatbot WhatsApp con router dual, cotización automática y forwarder a humano. Cotiza solo de noche, durmiendo el equipo.",
    color: T.fire,
    accent: T.fire,
    detail: {
      challenge:
        "Equipo humano solo podía cotizar en horario laboral. El 62% de los leads llegaban entre 6pm y 11pm — se perdían al día siguiente.",
      solution:
        "Chatbot router en WhatsApp Business API. Detecta intent de cotización, pregunta 4 variables, calcula precio con recargos y descuentos, escala a humano si el caso es complejo.",
      stack: ["WhatsApp Cloud API", "n8n router", "Claude + GPT", "Google Sheets", "Meta Business"],
      metrics: [
        { label: "Consultas fuera horario", value: "+340%" },
        { label: "Tiempo respuesta", value: "<15s" },
        { label: "Escalado a humano", value: "18%" },
      ],
    },
  },
  {
    id: "pipeline-mlb",
    name: "Pipeline MLB",
    tag: "Consumer · Deportes",
    result: "Pipeline de contenido 100% automático",
    body: "n8n + generación de imagen IA + Claude: de data bruta a video social con script + thumbnail, cero intervención humana.",
    color: T.yellow,
    accent: T.yellow,
    detail: {
      challenge:
        "Creator publicaba picks MLB manualmente 3x día. Hacía cuello de botella, limitaba expansión a otras ligas y horarios.",
      solution:
        "Pipeline n8n: consume API stats → filtra value bets → Claude redacta script → Nano Banana genera thumbnail → publica a TikTok/IG con UTM tracking.",
      stack: ["n8n", "Claude API", "Nano Banana (Gemini)", "Sports Data API", "TikTok Graph"],
      metrics: [
        { label: "Picks por día", value: "9–12" },
        { label: "Intervención humana", value: "0 min" },
        { label: "Tasa de publicación", value: "99%" },
      ],
    },
  },
  {
    id: "ops-interno",
    name: "Ops interno wa.co",
    tag: "Propio · Agency Ops",
    result: "4 proyectos, 1 operador",
    body: "Briefing diario, health checks cada 6h, alertas Slack/email. La agencia corre sola mientras duerme.",
    color: T.cyan,
    accent: T.cyan,
    detail: {
      challenge:
        "Founder solo orquestando 4 proyectos (TC, A Lo Profundo, wa.co, Padel). Cabeza llena de contexto, decisiones se retrasaban.",
      solution:
        "Cron schedules que ejecutan agente Claude cada 6h: revisa estado de cada proyecto, genera briefing HTML, alerta solo si algo realmente urgente. Founder abre la inbox y ve el dashboard ya digerido.",
      stack: ["Claude Agent SDK", "Cron triggers", "Gmail MCP", "GitHub MCP", "NotebookLM"],
      metrics: [
        { label: "Proyectos orquestados", value: "4" },
        { label: "Briefings automáticos", value: "daily" },
        { label: "Alertas reales/día", value: "≤3" },
      ],
    },
  },
  {
    id: "pyme-neiva",
    name: "PyME Neiva",
    tag: "Retail · Local · NDA",
    result: "−60% tiempo en cotizar",
    body: "Integración Pipedrive + WhatsApp + Sheets. Los vendedores dejan de copiar/pegar y se enfocan en cerrar.",
    color: T.pitaya,
    accent: T.pitaya,
    detail: {
      challenge:
        "Vendedores perdían 40 min por cotización copiando precios de Excel a WhatsApp, errores humanos, precios viejos.",
      solution:
        "Bot lee catálogo vivo en Sheets, recibe requisitos por WhatsApp, arma cotización formateada en segundos, guarda deal en Pipedrive. Humano solo aprueba o negocia.",
      stack: ["WhatsApp Cloud API", "Pipedrive API", "Google Sheets", "Claude tools"],
      metrics: [
        { label: "Tiempo por cotización", value: "−60%" },
        { label: "Errores de precio", value: "0" },
        { label: "Cotizaciones/semana", value: "+2.3×" },
      ],
    },
  },
];

export default function Casos() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = CASES.find((c) => c.id === openId) ?? null;

  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <section id="casos" className="relative overflow-hidden py-24 md:py-32" style={{ background: T.ink, color: T.cream }}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="mb-16 grid gap-6 md:grid-cols-12">
            <Reveal className="md:col-span-3">
              <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: T.yellow }}>
                · Casos
              </p>
            </Reveal>
            <Reveal delay={0.15} className="md:col-span-9">
              <h2
                className="leading-[0.92] tracking-[-0.03em]"
                style={{
                  fontFamily: "var(--font-unbounded)",
                  fontWeight: 200,
                  fontSize: "clamp(36px, 6vw, 88px)",
                  textWrap: "balance",
                }}
              >
                Negocios que ya{" "}
                <em style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", color: T.yellow }}>
                  corren solos
                </em>{" "}
                mientras duermen.
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-12">
            {CASES.map((c, i) => (
              <Reveal
                key={c.id}
                delay={i * 0.08}
                className={
                  i === 0
                    ? "md:col-span-7"
                    : i === 1
                    ? "md:col-span-5"
                    : i === 2
                    ? "md:col-span-5"
                    : "md:col-span-7"
                }
              >
                <CaseCard data={c} onOpen={() => setOpenId(c.id)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && <CaseModal key={active.id} data={active} onClose={() => setOpenId(null)} />}
      </AnimatePresence>
    </>
  );
}

function CaseCard({ data, onOpen }: { data: Case; onOpen: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      layoutId={`case-${data.id}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full w-full flex-col justify-between overflow-hidden p-8 text-left md:p-10"
      style={{
        background: `${T.cream}06`,
        border: `1.5px solid ${T.cream}22`,
        borderRadius: 4,
        minHeight: 320,
        color: T.cream,
      }}
      aria-label={`Ver caso ${data.name}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle at 100% 0%, ${data.accent}22, transparent 60%)` }}
      />
      <div className="relative mb-6 flex items-start justify-between">
        <div>
          <motion.h3
            layoutId={`case-name-${data.id}`}
            className="leading-[0.95] tracking-[-0.02em]"
            style={{
              fontFamily: "var(--font-unbounded)",
              fontWeight: 300,
              fontSize: "clamp(28px, 3.2vw, 42px)",
              color: T.cream,
            }}
          >
            {data.name}
          </motion.h3>
          <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: `${T.cream}aa` }}>
            {data.tag}
          </div>
        </div>
        <motion.span
          className="mt-3 h-3 w-3 rounded-full"
          style={{ background: data.color }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
      </div>
      <div className="relative">
        <p className="mb-5 text-[15px] leading-[1.55]" style={{ fontFamily: "var(--font-fraunces)", color: `${T.cream}cc` }}>
          {data.body}
        </p>
        <div
          className="flex items-center justify-between pt-4 text-[13px] tracking-[0.1em]"
          style={{
            fontFamily: "var(--font-unbounded)",
            fontWeight: 500,
            color: data.color,
            borderTop: `1px solid ${T.cream}22`,
          }}
        >
          <span>→ {data.result}</span>
          <span
            className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em] transition-all group-hover:bg-[#FFEFBF] group-hover:text-[#0a0a08]"
            style={{ border: `1px solid ${T.cream}44`, color: `${T.cream}aa` }}
          >
            Ver caso
          </span>
        </div>
      </div>
    </motion.button>
  );
}

function CaseModal({ data, onClose }: { data: Case; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto p-4 md:p-8"
      initial={{ backgroundColor: "rgba(10,10,8,0)" }}
      animate={{ backgroundColor: "rgba(10,10,8,0.75)" }}
      exit={{ backgroundColor: "rgba(10,10,8,0)" }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.article
        layoutId={`case-${data.id}`}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[1100px] overflow-hidden"
        style={{
          background: T.cream,
          color: T.ink,
          borderRadius: 6,
          border: `1.5px solid ${T.ink}22`,
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar caso"
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/10"
          style={{ color: T.ink }}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4l12 12M4 16L16 4" strokeLinecap="round" />
          </svg>
        </button>

        <div className="p-8 md:p-14">
          <div className="mb-10 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: data.accent }} aria-hidden />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em]" style={{ color: `${T.ink}88` }}>
              {data.tag}
            </span>
          </div>

          <motion.h3
            layoutId={`case-name-${data.id}`}
            className="mb-12 leading-[0.95] tracking-[-0.02em]"
            style={{
              fontFamily: "var(--font-unbounded)",
              fontWeight: 200,
              fontSize: "clamp(40px, 7vw, 96px)",
              color: T.ink,
            }}
          >
            {data.name}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-10 md:grid-cols-2"
          >
            <div>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: data.accent }}>
                · Reto
              </div>
              <p
                className="text-[17px] leading-[1.55]"
                style={{ fontFamily: "var(--font-fraunces)", color: `${T.ink}cc` }}
              >
                {data.detail.challenge}
              </p>
            </div>
            <div>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: data.accent }}>
                · Solución
              </div>
              <p
                className="text-[17px] leading-[1.55]"
                style={{ fontFamily: "var(--font-fraunces)", color: `${T.ink}cc` }}
              >
                {data.detail.solution}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12"
          >
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: data.accent }}>
              · Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {data.detail.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full px-4 py-2 text-[12px]"
                  style={{ background: "#FFFDF4", border: `1px solid ${T.ink}22`, color: T.ink }}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid gap-4 md:grid-cols-3"
          >
            {data.detail.metrics.map((m) => (
              <div
                key={m.label}
                className="p-6"
                style={{
                  background: T.selva,
                  color: T.cream,
                  borderRadius: 4,
                }}
              >
                <div
                  className="leading-none"
                  style={{
                    fontFamily: "var(--font-unbounded)",
                    fontWeight: 200,
                    fontSize: "clamp(30px, 3.6vw, 48px)",
                    color: data.accent,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {m.value}
                </div>
                <div className="mt-3 text-[11px] uppercase tracking-[0.22em]" style={{ color: `${T.cream}aa`, fontWeight: 500 }}>
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.article>
    </motion.div>
  );
}
