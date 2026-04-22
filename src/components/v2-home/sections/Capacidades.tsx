"use client";

import Reveal from "../lib/Reveal";
import TiltCard from "../lib/TiltCard";
import { T } from "../tokens";

type Capacity = {
  code: string;
  title: string;
  detail: string;
  region: string;
  accent: string;
  wide?: boolean;
  dark?: boolean;
};

const CAPACITIES: Capacity[] = [
  {
    code: "01",
    title: "Chatbots de WhatsApp",
    detail:
      "Atiende clientes, cotiza y agenda — 24/7, en tu tono de voz. Meta Business API + n8n router. El que te responde a las 2am.",
    region: "Neiva · Huila",
    accent: T.fire,
    wide: true,
  },
  {
    code: "02",
    title: "Agentes IA conversacionales",
    detail: "Claude + GPT orquestados con herramientas: leen catálogo, consultan CRM, cierran ventas.",
    region: "Cross-LATAM",
    accent: T.orange,
  },
  {
    code: "03",
    title: "Automatizaciones n8n",
    detail: "Flujos que conectan WhatsApp, Gmail, Sheets, Notion, CRM. Lo que hoy haces a mano, corre solo.",
    region: "Nube · global",
    accent: T.yellow,
    dark: true,
  },
  {
    code: "04",
    title: "Dashboards + reportes IA",
    detail: "Claude lee tu operación cada semana y te dice qué mover. Sin abrir una hoja de cálculo.",
    region: "Remoto",
    accent: T.cyan,
  },
  {
    code: "05",
    title: "Integraciones a medida",
    detail: "Meta, Stripe, Wompi, Shopify, Pipedrive, HubSpot. Si tiene API, lo conectamos.",
    region: "Stack abierto",
    accent: T.pitaya,
  },
  {
    code: "06",
    title: "Consultoría IA PyME",
    detail: "Dos semanas. Mapeamos tu operación, marcamos 3 cuellos de botella, entregamos roadmap.",
    region: "Huila · Colombia",
    accent: T.selva,
    dark: true,
  },
];

export default function Capacidades() {
  return (
    <section id="capacidades" className="relative overflow-hidden py-24 md:py-32" style={{ background: T.cream }}>
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-20 grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p
              className="mb-4 text-[11px] uppercase tracking-[0.3em]"
              style={{ color: T.fire, fontWeight: 500 }}
            >
              · Capacidades
            </p>
            <div className="font-mono text-[12px] leading-[1.6]" style={{ color: `${T.ink}88` }}>
              Cada implementación nace en Neiva,
              <br />
              se afina en terreno,
              <br />
              corre en la nube.
            </div>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-8">
            <h2
              className="leading-[0.9] tracking-[-0.03em]"
              style={{
                fontFamily: "var(--font-unbounded)",
                fontWeight: 200,
                fontSize: "clamp(36px, 6vw, 88px)",
                color: T.ink,
                textWrap: "balance",
              }}
            >
              Seis capacidades que convierten tu operación en un{" "}
              <em style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", color: T.selva }}>
                sistema que fluye.
              </em>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
          {CAPACITIES.map((cap, i) => (
            <Reveal
              key={cap.code}
              delay={0.05 * i}
              className={cap.wide ? "md:col-span-4" : "md:col-span-2"}
            >
              <CapacityCard {...cap} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapacityCard({ code, title, detail, region, accent, wide, dark }: Capacity) {
  const bg = dark ? T.selva : "#FFFDF4";
  const fg = dark ? T.cream : T.ink;

  return (
    <TiltCard
      className="group relative h-full overflow-hidden"
      style={{
        background: bg,
        color: fg,
        border: `1.5px solid ${dark ? `${T.yellow}33` : `${T.ink}22`}`,
        borderRadius: 4,
        minHeight: wide ? 380 : 340,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
        style={{
          background: `radial-gradient(circle at 70% 30%, ${accent}22, transparent 55%)`,
        }}
      />
      <div className="relative flex h-full flex-col justify-between p-8 md:p-10" style={{ transform: "translateZ(20px)" }}>
        <div>
          <div className="mb-8 flex items-center justify-between">
            <span className="font-mono text-[11px] tracking-[0.3em]" style={{ color: accent }}>
              ({code})
            </span>
            <span
              className="text-[10px] uppercase tracking-[0.22em]"
              style={{ color: dark ? `${T.cream}88` : `${T.ink}66` }}
            >
              {region}
            </span>
          </div>
          <h3
            className="mb-6 leading-[0.95] tracking-[-0.02em]"
            style={{
              fontFamily: "var(--font-unbounded)",
              fontWeight: 300,
              fontSize: wide ? "clamp(34px, 3.8vw, 54px)" : "clamp(26px, 3.2vw, 38px)",
              color: fg,
            }}
          >
            {title}
          </h3>
          <p
            className="text-[15px] leading-[1.55]"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 400,
              color: dark ? `${T.cream}cc` : `${T.ink}bb`,
            }}
          >
            {detail}
          </p>
        </div>
        <div className="mt-10 flex items-center justify-between">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-45"
            style={{ background: accent, color: T.ink, fontWeight: 600 }}
            aria-hidden
          >
            →
          </div>
          <div className="ml-4 h-[2px] flex-1" style={{ background: accent, opacity: 0.5 }} />
        </div>
      </div>
    </TiltCard>
  );
}
