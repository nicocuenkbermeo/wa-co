"use client";

import { motion } from "framer-motion";
import { T } from "../tokens";

const services = [
  {
    num: "01",
    tag: "Chatbot WhatsApp",
    title: "Atiende mientras duermes.",
    desc: "Bot de WhatsApp con IA que cotiza, agenda y escala a humano cuando debe. Conectado a tu n8n, tu CRM, tu calendario.",
    tint: T.aqua,
    span: "lg:col-span-2 lg:row-span-2",
    highlight: true,
  },
  {
    num: "02",
    tag: "Agentes IA",
    title: "Tu copiloto de ventas.",
    desc: "Claude + GPT entrenados con tus datos. Responden emails, resumen llamadas, escriben propuestas.",
    tint: T.violet,
    span: "",
  },
  {
    num: "03",
    tag: "Flujos n8n",
    title: "El tejido invisible.",
    desc: "Workflows que conectan tus herramientas. Cero tareas repetidas. Cero datos copiados a mano.",
    tint: T.pitaya,
    span: "",
  },
  {
    num: "04",
    tag: "Voice AI",
    title: "Llama, cobra, recuerda.",
    desc: "Agentes de voz que llaman a deudores, confirman citas, hacen seguimiento post-venta.",
    tint: T.orange,
    span: "",
  },
  {
    num: "05",
    tag: "Dashboards",
    title: "Ver todo. Entender todo.",
    desc: "Notion, Airtable, Retool — el panel único que tu equipo necesitaba.",
    tint: T.yellow,
    span: "",
  },
];

export default function FuturistServices() {
  return (
    <section
      id="capacidades"
      className="relative overflow-hidden py-24 md:py-36"
      style={{ background: T.obsidian, color: T.cream }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 20% 0%, ${T.violet}20, transparent 60%), radial-gradient(ellipse 60% 50% at 90% 100%, ${T.aqua}16, transparent 60%)`,
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col gap-5 md:mb-24 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div
              className="mb-5 font-mono text-[11px] uppercase tracking-[0.32em]"
              style={{ color: T.ghost }}
            >
              · Capacidades ·
            </div>
            <h2
              className="leading-[0.9] tracking-[-0.04em]"
              style={{
                fontFamily: "var(--font-unbounded)",
                fontWeight: 200,
                fontSize: "clamp(40px, 6.8vw, 104px)",
                color: T.cream,
              }}
            >
              lo que{" "}
              <span
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontStyle: "italic",
                  backgroundImage: `linear-gradient(110deg, ${T.aqua}, ${T.violet} 60%, ${T.pitaya})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                construimos
              </span>
            </h2>
          </div>
          <p
            className="max-w-sm text-[15px] leading-[1.55]"
            style={{ fontFamily: "var(--font-fraunces)", color: T.ghost }}
          >
            Cinco frentes que operan como uno solo. Cada pieza hablando con las demás —
            la diferencia entre herramientas y un organismo.
          </p>
        </motion.div>

        <div className="grid gap-4 md:gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {services.map((s, i) => (
            <ServiceCard key={s.num} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 md:p-10 ${service.span}`}
      style={{
        background: service.highlight
          ? `linear-gradient(145deg, ${service.tint}12 0%, rgba(255,255,255,0.02) 60%)`
          : "rgba(255,255,255,0.025)",
        border: `1px solid ${T.ghost}1f`,
        backdropFilter: "blur(14px)",
        minHeight: service.highlight ? 440 : 240,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px 300px at var(--mx,50%) var(--my,0%), ${service.tint}2e, transparent 60%)`,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-px rounded-[calc(1.5rem-1px)] opacity-40"
        style={{
          background: `radial-gradient(circle at 0% 0%, ${service.tint}1a, transparent 50%)`,
        }}
      />

      <div className="relative flex items-start justify-between">
        <span
          className="font-mono text-[11px] uppercase tracking-[0.28em]"
          style={{ color: T.ghost }}
        >
          {service.num} — {service.tag}
        </span>
        <span
          aria-hidden
          className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-45"
          style={{
            border: `1px solid ${T.ghost}33`,
            color: T.cream,
            fontSize: 14,
          }}
        >
          ↗
        </span>
      </div>

      <div className="relative mt-12">
        <h3
          className="leading-[0.95] tracking-[-0.035em]"
          style={{
            fontFamily: "var(--font-unbounded)",
            fontWeight: 200,
            fontSize: service.highlight
              ? "clamp(32px, 3.6vw, 52px)"
              : "clamp(22px, 2.2vw, 30px)",
            color: T.cream,
          }}
        >
          {service.title}
        </h3>
        <p
          className="mt-4 text-[14.5px] leading-[1.55] md:text-[15.5px]"
          style={{
            fontFamily: "var(--font-fraunces)",
            color: T.ghost,
            maxWidth: service.highlight ? 440 : 320,
          }}
        >
          {service.desc}
        </p>
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
        style={{
          background: `linear-gradient(90deg, ${service.tint}, transparent)`,
        }}
      />
    </motion.article>
  );
}
