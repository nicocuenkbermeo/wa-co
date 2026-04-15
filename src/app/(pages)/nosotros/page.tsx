import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Heart, Shield, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros — WA.CO",
  description:
    "Somos una agencia digital colombiana que combina diseño premium con inteligencia artificial para entregar resultados excepcionales.",
};

const values = [
  {
    icon: Zap,
    title: "Velocidad",
    description:
      "Usamos IA como motor de producción para entregar en días lo que otros tardan meses.",
  },
  {
    icon: Heart,
    title: "Pasión",
    description:
      "Cada proyecto es una oportunidad de superar expectativas. No descansamos hasta que estés feliz.",
  },
  {
    icon: Shield,
    title: "Confianza",
    description:
      "Transparencia total en precios, tiempos y procesos. Sin letras pequeñas, sin sorpresas.",
  },
  {
    icon: Target,
    title: "Resultados",
    description:
      "No hacemos sitios bonitos que nadie visita. Cada decisión de diseño está orientada a convertir.",
  },
];

const stats = [
  { number: "20+", label: "Proyectos entregados" },
  { number: "7", label: "Días promedio de entrega" },
  { number: "98%", label: "Clientes satisfechos" },
  { number: "24/7", label: "Soporte disponible" },
];

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA]">
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#D4A853] mb-4">
            Nuestra Historia
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tecnología con alma
            <br />
            <span className="text-[#4A9D6E]">colombiana</span>
          </h1>
          <p className="text-[#A1A1A1] text-lg md:text-xl max-w-2xl mx-auto">
            Nacimos con la idea de democratizar el acceso a sitios web
            profesionales y automatización inteligente para negocios en
            Latinoamérica.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#161616] border border-[#222222] rounded-3xl p-8 md:p-12">
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ¿Por qué WA.CO?
            </h2>
            <div className="space-y-4 text-[#A1A1A1] text-lg leading-relaxed">
              <p>
                <strong className="text-[#FAFAFA]">WA</strong> viene de{" "}
                <em>Web & Automatización</em>.{" "}
                <strong className="text-[#FAFAFA]">CO</strong> es Colombia, nuestra
                casa. Juntos, representan nuestra misión: llevar soluciones
                digitales de clase mundial a negocios colombianos y
                latinoamericanos.
              </p>
              <p>
                Creemos que cada negocio merece una presencia digital que
                realmente funcione. No vendemos plantillas genéricas — diseñamos
                experiencias únicas que reflejan la personalidad de cada marca y
                están optimizadas para convertir.
              </p>
              <p>
                Nuestra ventaja es la{" "}
                <span className="text-[#4A9D6E] font-semibold">
                  inteligencia artificial
                </span>
                . La usamos como motor de producción para entregar más rápido,
                con más calidad y a mejor precio. El resultado: sitios web
                premium que antes solo podían pagar las grandes empresas, ahora
                accesibles para todos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center bg-[#161616] border border-[#222222] rounded-2xl p-6"
              >
                <div
                  className="text-4xl md:text-5xl font-bold text-[#4A9D6E] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.number}
                </div>
                <div className="text-[#A1A1A1] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-[#D4A853] mb-4">
              Nuestros Valores
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Lo que nos mueve
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-[#161616] border border-[#222222] rounded-2xl p-8 hover:border-[#4A9D6E] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#4A9D6E]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#4A9D6E]" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-[#A1A1A1]">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ¿Quieres ser parte de nuestra historia?
          </h2>
          <p className="text-[#A1A1A1] mb-8">
            Cada proyecto que entregamos es un capítulo más. El tuyo puede ser el
            siguiente.
          </p>
          <Link
            href="https://wa.me/573163836881?text=Hola,%20quiero%20cotizar%20un%20proyecto"
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#4A9D6E] hover:bg-[#6BBF8A] text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Hablemos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
