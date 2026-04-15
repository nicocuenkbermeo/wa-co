"use client";

import { motion } from "framer-motion";
import { MessageCircle, PenTool, RefreshCw, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Briefing",
    description: "Nos cuentas tu idea y definimos objetivos claros",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Diseño",
    description: "Creamos tu sitio en tiempo récord con tecnología de punta",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Revisión",
    description: "Ajustes ilimitados hasta que quedes completamente feliz",
    icon: RefreshCw,
  },
  {
    number: "04",
    title: "Lanzamiento",
    description: "Tu sitio en vivo, optimizado y listo para vender",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#D4A853" }}
          >
            CÓMO TRABAJAMOS
          </span>
          <h2
            className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl"
            style={{ color: "#FAFAFA" }}
          >
            De la idea al lanzamiento en tiempo récord
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Connecting line - horizontal on md+, vertical on mobile */}
          <div
            className="absolute left-6 top-0 hidden h-full w-px md:left-0 md:top-1/2 md:block md:h-px md:w-full md:-translate-y-1/2"
            style={{ backgroundColor: "#222222" }}
          />
          <div
            className="absolute left-6 top-0 block h-full w-px md:hidden"
            style={{ backgroundColor: "#222222" }}
          />

          {/* Steps */}
          <div className="relative flex flex-col gap-8 md:flex-row md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex-1 pl-16 md:pl-0"
                >
                  {/* Dot on timeline - mobile */}
                  <div
                    className="absolute left-[18px] top-6 z-10 h-3 w-3 rounded-full md:hidden"
                    style={{ backgroundColor: "#D4A853" }}
                  />

                  {/* Card */}
                  <div
                    className="rounded-2xl border p-6"
                    style={{
                      backgroundColor: "#161616",
                      borderColor: "#222222",
                    }}
                  >
                    {/* Dot on timeline - desktop */}
                    <div
                      className="absolute -top-[6px] left-1/2 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full md:block"
                      style={{ backgroundColor: "#D4A853" }}
                    />

                    <span
                      className="text-3xl font-bold"
                      style={{ color: "#D4A853" }}
                    >
                      {step.number}
                    </span>

                    <div
                      className="mt-4 flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "rgba(212, 168, 83, 0.1)" }}
                    >
                      <Icon
                        className="h-5 w-5"
                        style={{ color: "#D4A853" }}
                      />
                    </div>

                    <h3
                      className="mt-4 text-lg font-semibold"
                      style={{ color: "#FAFAFA" }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="mt-2 text-sm leading-relaxed"
                      style={{ color: "#A1A1A1" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
