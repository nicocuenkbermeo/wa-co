import Lettermark from "@/components/shared/Lettermark";

const WA_LINK =
  "https://wa.me/573163836881?text=Hola,%20quiero%20hablar%20con%20wa.co";

const servicios = [
  { label: "Chatbots WhatsApp", href: "#servicios" },
  { label: "Automatizaciones n8n", href: "#servicios" },
  { label: "Agentes IA", href: "#servicios" },
  { label: "Dashboards", href: "#servicios" },
  { label: "Consultoría", href: "#servicios" },
];

const navegar = [
  { label: "Proceso", href: "#proceso" },
  { label: "Casos", href: "#portafolio" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
];

const recursos = [
  { label: "Design System", href: "/design-system/index.html" },
  { label: "Manifiesto", href: "/design-system/01-brand.html" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[var(--paez-950)] text-[#fdfcf7] overflow-hidden">
      {/* Gradient stripe top */}
      <div className="h-[3px] w-full paez-gradient-bg" />

      {/* Big wordmark */}
      <div className="border-b border-[var(--paez-800)]/40">
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-24 md:pt-32 pb-16 md:pb-20">
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--paez-300)] mb-8">
            — Desde el Huila, para el mundo
          </p>
          <p
            className="font-display font-normal italic text-[var(--paez-300)] leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(56px, 11vw, 180px)", textWrap: "balance" }}
          >
            agency-wa.co
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <Lettermark height={28} />
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase">
                wa.co <span className="text-[var(--paez-300)]">— agency</span>
              </span>
            </div>
            <p className="font-display text-2xl md:text-3xl italic leading-[1.2] text-[var(--paez-300)] max-w-[20ch]">
              Automatización con alma.
            </p>
            <p className="mt-6 text-[14px] leading-[1.65] text-[#b8b6a6] max-w-[40ch]">
              Agencia de inteligencia artificial enraizada en el Huila. Raíces
              locales, tecnología global.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--paez-300)] mb-6">
              · Servicios
            </h3>
            <ul className="space-y-3">
              {servicios.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-[14px] text-[#ecebe1] transition-colors hover:text-[var(--paez-300)]"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--paez-300)] mb-6">
              · Navegar
            </h3>
            <ul className="space-y-3">
              {navegar.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[14px] text-[#ecebe1] transition-colors hover:text-[var(--paez-300)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--paez-300)] mt-10 mb-6">
              · Recursos
            </h3>
            <ul className="space-y-3">
              {recursos.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[14px] text-[#ecebe1] transition-colors hover:text-[var(--paez-300)]"
                  >
                    {item.label} <span className="text-[var(--paez-400)]">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--paez-300)] mb-6">
              · Contacto
            </h3>
            <a
              href="mailto:hola@agency-wa.co"
              className="block font-display italic text-3xl md:text-4xl text-[var(--paez-300)] hover:text-[var(--paez-200)] transition-colors leading-[1.1] tracking-[-0.01em]"
            >
              hola@agency-wa.co
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-[14px] text-[#ecebe1] transition-colors hover:text-[var(--paez-300)]"
            >
              +57 316 383 6881 <span className="text-[#8f8d7e]">(WhatsApp)</span>
            </a>
            <p className="mt-6 font-mono text-[10px] tracking-[0.22em] uppercase text-[#8f8d7e]">
              Neiva — Huila — Colombia
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-[var(--paez-800)]/40 pt-8 md:flex-row md:items-center">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#8f8d7e]">
            © 2026 wa.co agency — Todos los derechos reservados
          </p>
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#8f8d7e]">
            Hecho desde el Huila
          </p>
        </div>
      </div>
    </footer>
  );
}
