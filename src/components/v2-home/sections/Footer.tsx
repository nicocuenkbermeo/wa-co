"use client";

import AnimatedLettermark from "../icons/AnimatedLettermark";
import HuilaMap from "../icons/HuilaMap";
import Reveal from "../lib/Reveal";
import { T, EMAIL } from "../tokens";

const COL_NAV = [
  { label: "Capacidades", href: "#capacidades" },
  { label: "Casos", href: "#casos" },
  { label: "Precios", href: "#pricing" },
  { label: "Proyecto", href: "#proyecto" },
];

const COL_CONTACTO = [
  { label: EMAIL, href: `mailto:${EMAIL}` },
  { label: "+57 · Neiva, Huila", href: "https://wa.me/573163836881" },
  { label: "WhatsApp →", href: "https://wa.me/573163836881" },
];

const COL_LEGAL = [
  { label: "Privacidad", href: "/privacidad" },
  { label: "Términos", href: "/terminos" },
  { label: "Status", href: "/status" },
];

export default function Footer() {
  return (
    <footer className="relative" style={{ background: T.cream, borderTop: `1px solid ${T.ink}14` }}>
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <AnimatedLettermark height={56} label={true} drawOnMount={false} />
            <p
              className="mt-6 text-[14px] leading-[1.6]"
              style={{ color: `${T.ink}aa`, fontFamily: "var(--font-fraunces)", fontStyle: "italic" }}
            >
              Un sistema que fluye como el río.
              <br />
              Agencia de IA enraizada en el Huila.
            </p>
            <div className="mt-8 hidden md:block">
              <HuilaMap width={220} />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-7">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              <FooterCol title="Navegar" items={COL_NAV} />
              <FooterCol title="Contacto" items={COL_CONTACTO} />
              <FooterCol title="Legal" items={COL_LEGAL} />
            </div>

            <div
              className="mt-10 rounded-2xl p-6"
              style={{ background: T.selva, color: T.cream }}
            >
              <p
                className="text-[11px] uppercase tracking-[0.28em]"
                style={{ color: T.yellow, fontWeight: 500 }}
              >
                · Newsletter
              </p>
              <p
                className="mt-2 text-[18px] leading-[1.3]"
                style={{ fontFamily: "var(--font-unbounded)", fontWeight: 300 }}
              >
                Un recap mensual de lo que estamos automatizando.
              </p>
              <form
                className="mt-5 flex flex-col gap-2 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = `mailto:${EMAIL}?subject=Newsletter wa.co`;
                }}
              >
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  className="min-w-0 flex-1 rounded-full px-5 py-3 text-[14px] outline-none"
                  style={{ background: T.creamDeep, color: T.ink }}
                  aria-label="Correo"
                />
                <button
                  type="submit"
                  className="rounded-full px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em]"
                  style={{ background: T.yellow, color: T.ink }}
                >
                  Entrar
                </button>
              </form>
            </div>
          </Reveal>
        </div>

        <div
          className="mt-14 flex flex-col justify-between gap-3 pt-6 font-mono text-[11px] sm:flex-row sm:items-center"
          style={{ borderTop: `1px solid ${T.ink}14`, color: `${T.ink}99` }}
        >
          <span>© 2026 — wa.co agency · agency-wa.co</span>
          <span>hecho en neiva · corre en todas partes</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <div
        className="mb-3 text-[11px] uppercase tracking-[0.22em]"
        style={{ color: T.ink, fontWeight: 500 }}
      >
        {title}
      </div>
      <ul className="space-y-1.5 text-[13px]" style={{ color: `${T.ink}99` }}>
        {items.map((i) => (
          <li key={i.label}>
            <a href={i.href} className="transition-colors hover:text-[#0a0a08]">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
