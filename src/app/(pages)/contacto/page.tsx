import { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto — WA.CO",
  description:
    "Contáctanos para cotizar tu proyecto web o de automatización. Respuesta en menos de 24 horas.",
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA]">
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#D4A853] mb-4">
            Contacto
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Hablemos de
            <br />
            <span className="text-[#4A9D6E]">tu proyecto</span>
          </h1>
          <p className="text-[#A1A1A1] text-lg md:text-xl max-w-2xl mx-auto">
            Escríbenos y te respondemos en menos de 24 horas con una propuesta
            personalizada.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Información de contacto
              </h2>
              <div className="space-y-6">
                <a
                  href="https://wa.me/573163836881?text=Hola,%20quiero%20cotizar%20un%20proyecto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#6B6B6B]">WhatsApp</p>
                    <p className="text-[#FAFAFA] group-hover:text-[#4A9D6E] transition-colors">
                      +57 316 383 6881
                    </p>
                  </div>
                </a>

                <a href="mailto:hola@wa.co" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#4A9D6E]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#4A9D6E]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#6B6B6B]">Email</p>
                    <p className="text-[#FAFAFA] group-hover:text-[#4A9D6E] transition-colors">
                      hola@wa.co
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4A853]/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#D4A853]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#6B6B6B]">Teléfono</p>
                    <p className="text-[#FAFAFA]">+57 316 383 6881</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#4A9D6E]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#4A9D6E]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#6B6B6B]">Ubicación</p>
                    <p className="text-[#FAFAFA]">Colombia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="bg-[#161616] border border-[#222222] rounded-2xl p-6">
              <p className="text-[#A1A1A1] mb-4">
                ¿Prefieres una respuesta inmediata? Escríbenos directamente por
                WhatsApp.
              </p>
              <a
                href="https://wa.me/573163836881?text=Hola,%20quiero%20cotizar%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Abrir WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#161616] border border-[#222222] rounded-3xl p-8">
            <h2
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Envíanos un mensaje
            </h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-[#A1A1A1] mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  className="w-full bg-[#0A0A0A] border border-[#222222] rounded-xl px-4 py-3 text-[#FAFAFA] placeholder-[#6B6B6B] focus:outline-none focus:border-[#4A9D6E] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[#A1A1A1] mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tu@email.com"
                  className="w-full bg-[#0A0A0A] border border-[#222222] rounded-xl px-4 py-3 text-[#FAFAFA] placeholder-[#6B6B6B] focus:outline-none focus:border-[#4A9D6E] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm text-[#A1A1A1] mb-2">
                  WhatsApp (opcional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+57 300 000 0000"
                  className="w-full bg-[#0A0A0A] border border-[#222222] rounded-xl px-4 py-3 text-[#FAFAFA] placeholder-[#6B6B6B] focus:outline-none focus:border-[#4A9D6E] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm text-[#A1A1A1] mb-2">
                  ¿Qué servicio te interesa?
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-[#0A0A0A] border border-[#222222] rounded-xl px-4 py-3 text-[#FAFAFA] focus:outline-none focus:border-[#4A9D6E] transition-colors"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="web">Diseño Web</option>
                  <option value="chatbot">Chatbot WhatsApp IA</option>
                  <option value="automation">Automatización n8n</option>
                  <option value="app">Aplicación Web</option>
                  <option value="seo">SEO & Analytics</option>
                  <option value="branding">Branding</option>
                  <option value="paquete">Paquete completo</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-[#A1A1A1] mb-2">
                  Cuéntanos sobre tu proyecto
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Describe brevemente qué necesitas..."
                  className="w-full bg-[#0A0A0A] border border-[#222222] rounded-xl px-4 py-3 text-[#FAFAFA] placeholder-[#6B6B6B] focus:outline-none focus:border-[#4A9D6E] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#4A9D6E] hover:bg-[#6BBF8A] text-white font-semibold py-4 rounded-full transition-colors"
              >
                Enviar Mensaje
              </button>
              <p className="text-xs text-[#6B6B6B] text-center">
                Te respondemos en menos de 24 horas.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
