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
  { label: "Manifiesto", href: "#manifiesto" },
  { label: "Proceso", href: "#proceso" },
  { label: "Casos", href: "#portafolio" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
];

const recursos = [
  { label: "Design System", href: "/design-system/index.html" },
  { label: "Manifiesto completo", href: "/design-system/01-brand.html" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[var(--ink-950)] overflow-hidden">
      {/* River divider gradient */}
      <div className="h-[2px] w-full paez-gradient-bg opacity-70" />

      {/* HUGE wordmark wash */}
      <div className="relative border-b border-[var(--border-subtle)]">
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-28 md:pt-36 pb-16 md:pb-24">
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--paez-300)] mb-8">
            — Desde el Huila, para el mundo
          </p>
          <p
            className="font-display font-normal italic text-[var(--paez-300)] leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(60px, 12vw, 200px)", textWrap: "balance" }}
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
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--text-primary)]">
                wa.co <span className="text-[var(--text-faint)]">— agency</span>
              </span>
            </div>
            <p className="font-display text-2xl md:text-3xl italic leading-[1.2] text-[var(--paez-300)] max-w-[20ch]">
              Automatización con alma.
            </p>
            <p className="mt-6 text-[14px] leading-[1.6] text-[var(--text-secondary)] max-w-[40ch]">
              Agencia de inteligencia artificial enraizada en el Huila. Raíces
              locales, tecnología global. Founder invisible, sistema visible.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-faint)] mb-6">
              · Servicios
            </h3>
            <ul className="space-y-3">
              {servicios.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--paez-300)]"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-faint)] mb-6">
              · Navegar
            </h3>
            <ul className="space-y-3">
              {navegar.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--paez-300)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-faint)] mt-10 mb-6">
              · Recursos
            </h3>
            <ul className="space-y-3">
              {recursos.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--paez-300)]"
                  >
                    {item.label} <span className="text-[var(--paez-400)]">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-faint)] mb-6">
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
              className="block mt-4 text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--paez-300)]"
            >
              +57 316 383 6881 <span className="text-[var(--text-faint)]">(WhatsApp)</span>
            </a>
            <p className="mt-6 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-faint)]">
              Neiva — Huila — Colombia
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-[var(--border-subtle)] pt-8 md:flex-row md:items-center">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-faint)]">
            © 2026 wa.co agency — Todos los derechos reservados
          </p>
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-faint)]">
            Hecho desde el Huila
          </p>
        </div>
      </div>
    </footer>
  );
}
