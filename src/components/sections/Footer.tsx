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

const empresa = [
  { label: "Servicios", href: "#servicios" },
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
    <footer className="bg-[var(--ink-950)] border-t border-[var(--border-subtle)] relative">
      {/* River divider (gradient stripe) */}
      <div className="h-[2px] w-full paez-gradient-bg opacity-60" />

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Lettermark height={28} />
              <span className="font-mono text-xs tracking-[0.14em] uppercase text-[var(--text-primary)]">
                wa.co <span className="text-[var(--text-faint)]">/ agency</span>
              </span>
            </div>
            <p className="font-display text-xl italic leading-[1.3] text-[var(--paez-300)] max-w-[22ch]">
              Automatización con alma.
            </p>
            <p className="mt-4 text-sm leading-[1.6] text-[var(--text-secondary)]">
              Agencia de IA enraizada en el Huila. Raíces locales, tecnología global.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--text-faint)] mb-5">
              · Servicios
            </h3>
            <ul className="space-y-2.5">
              {servicios.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--paez-300)]"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--text-faint)] mb-5">
              · Navegar
            </h3>
            <ul className="space-y-2.5">
              {empresa.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--paez-300)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--text-faint)] mt-8 mb-5">
              · Recursos
            </h3>
            <ul className="space-y-2.5">
              {recursos.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--paez-300)]"
                  >
                    {item.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--text-faint)] mb-5">
              · Contacto
            </h3>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li>
                <a
                  href="mailto:hola@agency-wa.co"
                  className="font-display italic text-lg text-[var(--paez-300)] hover:text-[var(--paez-200)] transition-colors"
                >
                  hola@agency-wa.co
                </a>
              </li>
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--paez-300)]"
                >
                  +57 316 383 6881
                </a>
              </li>
              <li className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--text-faint)] pt-2">
                Neiva · Huila · Colombia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[var(--border-subtle)] pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] tracking-[0.1em] text-[var(--text-faint)]">
            © 2026 wa.co agency · Todos los derechos reservados
          </p>
          <p className="font-mono text-[11px] tracking-[0.1em] text-[var(--text-faint)]">
            Hecho desde el Huila, para el mundo.
          </p>
        </div>
      </div>
    </footer>
  );
}
