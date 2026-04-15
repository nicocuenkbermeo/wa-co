import { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  MessageSquare,
  Cog,
  Smartphone,
  BarChart3,
  Palette,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios — WA.CO",
  description:
    "Diseño web, chatbots IA, automatización, apps web, SEO y branding. Todos los servicios digitales que tu negocio necesita.",
};

const services = [
  {
    icon: Globe,
    title: "Diseño & Desarrollo Web",
    description:
      "Creamos sitios web que no solo se ven increíbles — convierten visitantes en clientes. Desde landing pages hasta e-commerce completos.",
    features: [
      "Landing pages de alta conversión",
      "Sitios corporativos multi-página",
      "Tiendas online (e-commerce)",
      "Diseño 100% responsive",
      "Optimización de velocidad",
      "Panel de administración",
    ],
    gradient: "from-[#4A9D6E]/20 to-transparent",
  },
  {
    icon: MessageSquare,
    title: "Chatbots con IA",
    description:
      "Automatiza la atención al cliente en WhatsApp Business con inteligencia artificial que entiende y responde como un humano.",
    features: [
      "Integración WhatsApp Business",
      "Respuestas inteligentes con GPT",
      "Disponibilidad 24/7",
      "Flujos de cotización automática",
      "Escalamiento a agente humano",
      "Historial de conversaciones",
    ],
    gradient: "from-[#D4A853]/20 to-transparent",
  },
  {
    icon: Cog,
    title: "Automatización con n8n",
    description:
      "Eliminamos las tareas repetitivas de tu negocio con flujos inteligentes que conectan todas tus herramientas.",
    features: [
      "Workflows personalizados",
      "Integración entre apps (CRM, email, sheets)",
      "Notificaciones automáticas",
      "Procesamiento de datos",
      "Reportes automáticos",
      "Sincronización de inventario",
    ],
    gradient: "from-[#4A9D6E]/20 to-transparent",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Web",
    description:
      "Desarrollamos aplicaciones web personalizadas con las últimas tecnologías para resolver problemas específicos de tu negocio.",
    features: [
      "React & Next.js",
      "Paneles de administración",
      "Dashboards en tiempo real",
      "Sistemas de reservas",
      "Portales para clientes",
      "APIs personalizadas",
    ],
    gradient: "from-[#D4A853]/20 to-transparent",
  },
  {
    icon: BarChart3,
    title: "SEO & Analytics",
    description:
      "Hacemos que tu sitio aparezca en Google y te damos las herramientas para medir y optimizar tus resultados.",
    features: [
      "Auditoría SEO completa",
      "Optimización on-page",
      "Google Analytics & Search Console",
      "Estrategia de contenido",
      "Link building",
      "Reportes mensuales",
    ],
    gradient: "from-[#4A9D6E]/20 to-transparent",
  },
  {
    icon: Palette,
    title: "Branding & Identidad Visual",
    description:
      "Construimos la identidad visual de tu marca desde cero o renovamos la existente para que refleje profesionalismo.",
    features: [
      "Diseño de logotipo",
      "Paleta de colores",
      "Tipografía de marca",
      "Manual de identidad",
      "Papelería corporativa",
      "Assets para redes sociales",
    ],
    gradient: "from-[#D4A853]/20 to-transparent",
  },
];

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA]">
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#D4A853] mb-4">
            Nuestros Servicios
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Soluciones digitales
            <br />
            <span className="text-[#4A9D6E]">para cada necesidad</span>
          </h1>
          <p className="text-[#A1A1A1] text-lg md:text-xl max-w-2xl mx-auto">
            Desde el diseño hasta la automatización, cubrimos todo el espectro
            digital para que tu negocio crezca sin límites.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.title}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-center`}
              >
                {/* Icon / Visual */}
                <div className="w-full md:w-2/5 flex justify-center">
                  <div
                    className={`w-48 h-48 rounded-3xl bg-gradient-to-br ${service.gradient} border border-[#222222] flex items-center justify-center`}
                  >
                    <Icon className="w-20 h-20 text-[#4A9D6E]" strokeWidth={1} />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-3/5">
                  <h2
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-[#A1A1A1] text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#4A9D6E] shrink-0" />
                        <span className="text-[#A1A1A1] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto text-center bg-[#161616] border border-[#222222] rounded-3xl p-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ¿Listo para empezar?
          </h2>
          <p className="text-[#A1A1A1] mb-8">
            Cuéntanos sobre tu proyecto y te enviamos una propuesta en menos de
            24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/573163836881?text=Hola,%20quiero%20cotizar%20un%20proyecto"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-[#4A9D6E] hover:bg-[#6BBF8A] text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Cotizar Proyecto
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#precios"
              className="inline-flex items-center justify-center gap-2 border border-[#333333] hover:border-[#4A9D6E] text-[#FAFAFA] font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Ver Precios
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
