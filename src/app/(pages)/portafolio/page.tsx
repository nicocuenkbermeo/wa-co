import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Portafolio — WA.CO",
  description:
    "Conoce los proyectos que hemos entregado. Sitios web, chatbots y automatizaciones que generan resultados.",
};

const projects = [
  {
    title: "TodoCamisas",
    category: "E-commerce",
    description:
      "Tienda online de dotaciones empresariales con catálogo interactivo, cotizador automático y chatbot WhatsApp integrado.",
    result: "+300% en consultas mensuales",
    gradient: "from-[#4A9D6E] to-[#2D6B4A]",
    tags: ["Next.js", "WhatsApp Bot", "E-commerce"],
  },
  {
    title: "Almería US",
    category: "Portal Inmobiliario",
    description:
      "Portal inmobiliario internacional con búsqueda avanzada de propiedades, sistema de favoritos y contacto directo con agentes.",
    result: "Presencia digital internacional desde cero",
    gradient: "from-[#D4A853] to-[#A17D3A]",
    tags: ["React", "API REST", "SEO"],
  },
  {
    title: "A Lo Profundo",
    category: "Plataforma Deportiva",
    description:
      "Plataforma de análisis y estadísticas de béisbol con datos en tiempo real, rankings y comunidad de fanáticos.",
    result: "+500 usuarios activos",
    gradient: "from-[#3B82F6] to-[#1D4ED8]",
    tags: ["Next.js", "Data", "Comunidad"],
  },
  {
    title: "Chatbot TodoCamisas",
    category: "Automatización IA",
    description:
      "Asistente virtual para WhatsApp Business con GPT que responde consultas, genera cotizaciones y notifica al equipo de ventas.",
    result: "Atención automática 24/7",
    gradient: "from-[#25D366] to-[#128C3E]",
    tags: ["WhatsApp API", "GPT-4", "n8n"],
  },
  {
    title: "Sistema de Cotizaciones",
    category: "Automatización",
    description:
      "Flujo automatizado en n8n que detecta pedidos especiales, notifica al equipo, registra en Google Sheets y envía precios al cliente.",
    result: "Tiempo de respuesta reducido 80%",
    gradient: "from-[#8B5CF6] to-[#6D28D9]",
    tags: ["n8n", "Google Sheets", "WhatsApp"],
  },
  {
    title: "Próximo proyecto",
    category: "¿El tuyo?",
    description:
      "Tu negocio merece una presencia digital que realmente funcione. Cuéntanos tu idea y la hacemos realidad.",
    result: "Resultados que importan",
    gradient: "from-[#6B6B6B] to-[#333333]",
    tags: ["Tu idea", "Nuestro equipo"],
    isCta: true,
  },
];

export default function PortafolioPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA]">
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#D4A853] mb-4">
            Portafolio
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Proyectos que
            <br />
            <span className="text-[#4A9D6E]">generan resultados</span>
          </h1>
          <p className="text-[#A1A1A1] text-lg md:text-xl max-w-2xl mx-auto">
            Cada proyecto es un caso de éxito. Diseñamos, construimos y
            automatizamos con un objetivo claro: que tu negocio crezca.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-[#161616] border border-[#222222] rounded-3xl overflow-hidden hover:border-[#4A9D6E] transition-all hover:-translate-y-1"
            >
              {/* Gradient Header */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}
              >
                <span
                  className="text-white/90 text-3xl font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </span>
                {!project.isCta && (
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-3 py-1 rounded-full bg-[#4A9D6E]/10 text-[#4A9D6E] border border-[#4A9D6E]/20">
                    {project.category}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h3>
                <p className="text-[#A1A1A1] text-sm mb-4">
                  {project.description}
                </p>
                <p className="text-[#4A9D6E] text-sm font-semibold mb-4">
                  {project.result}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-[#0A0A0A] text-[#6B6B6B] border border-[#222222]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.isCta && (
                  <Link
                    href="/contacto"
                    className="mt-6 inline-flex items-center gap-2 text-[#4A9D6E] hover:text-[#6BBF8A] font-semibold transition-colors"
                  >
                    Empezar mi proyecto
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
