import Image from "next/image";

const WA_LINK =
  "https://wa.me/573163836881?text=Hola,%20quiero%20cotizar%20un%20proyecto";

const servicios = [
  "Diseño Web",
  "Chatbots IA",
  "Automatización",
  "Apps Web",
  "SEO",
];

const empresa = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#222222]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="WA.CO logo"
                width={36}
                height={36}
                className="rounded"
              />
              <span className="text-lg font-bold text-[#FAFAFA]">.CO</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#A1A1A1]">
              Agencia de diseño web y automatización con IA. Hechos en Colombia.
            </p>
          </div>

          {/* Column 2 — Servicios */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#FAFAFA]">
              Servicios
            </h3>
            <ul className="mt-4 space-y-2">
              {servicios.map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    className="text-sm text-[#A1A1A1] transition-colors hover:text-[#FAFAFA]"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Empresa */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#FAFAFA]">
              Empresa
            </h3>
            <ul className="mt-4 space-y-2">
              {empresa.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-[#A1A1A1] transition-colors hover:text-[#FAFAFA]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#FAFAFA]">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[#A1A1A1]">
              <li>
                <a
                  href="mailto:hola@wa.co"
                  className="transition-colors hover:text-[#FAFAFA]"
                >
                  hola@wa.co
                </a>
              </li>
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#FAFAFA]"
                >
                  +57 316 383 6881
                </a>
              </li>
              <li>Colombia</li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#222222] pt-8 sm:flex-row">
          <p className="text-xs text-[#A1A1A1]">
            &copy; 2026 WA.CO. Todos los derechos reservados.
          </p>
          <p className="text-xs text-[#A1A1A1]">
            Hecho con amor en Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
