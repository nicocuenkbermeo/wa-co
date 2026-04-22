"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AnimatedLettermark from "../icons/AnimatedLettermark";
import MagneticButton from "../lib/MagneticButton";
import { T, WHATSAPP_LINK } from "../tokens";

const LINKS = [
  { label: "Capacidades", href: "#capacidades" },
  { label: "Casos", href: "#casos" },
  { label: "Precios", href: "#pricing" },
  { label: "Proyecto", href: "#proyecto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className="fixed left-0 right-0 top-0 z-50"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: scrolled ? `${T.cream}f2` : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${T.ink}14` : "1px solid transparent",
        transition: "background 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10" style={{ paddingTop: scrolled ? 14 : 20, paddingBottom: scrolled ? 14 : 20, transition: "padding 300ms ease" }}>
        <Link href="/" className="flex items-center" aria-label="Inicio wa.co">
          <AnimatedLettermark height={scrolled ? 30 : 38} label={true} drawOnMount={false} breathe={true} />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[12px] font-medium uppercase tracking-[0.18em]"
              style={{ color: T.ink }}
            >
              <span className="nav-link-underline">{l.label}</span>
            </a>
          ))}
          <div className="flex items-center gap-4 border-l pl-6" style={{ borderColor: `${T.ink}22` }}>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: `${T.ink}88` }}>
              ES · CO
            </span>
            <MagneticButton
              as="a"
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em]"
              style={{ background: T.ink, color: T.cream }}
            >
              Agendar
              <span aria-hidden>→</span>
            </MagneticButton>
          </div>
        </div>

        <button
          className="md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{ color: T.ink }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 8h16" strokeLinecap="round" />
                <path d="M4 16h16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
            style={{ background: T.cream, borderTop: `1px solid ${T.ink}14` }}
          >
            <div className="flex flex-col gap-2 px-6 py-6">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-4 text-[18px] font-medium"
                  style={{ color: T.ink, background: `${T.ink}06`, fontFamily: "var(--font-unbounded)", fontWeight: 300 }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-[11px] font-medium uppercase tracking-[0.22em]"
                style={{ background: T.ink, color: T.cream }}
              >
                WhatsApp →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link-underline { position: relative; }
        .nav-link-underline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          height: 1.5px;
          width: 100%;
          background: ${T.ink};
          transform: scaleX(0);
          transform-origin: right center;
          transition: transform 360ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        a:hover .nav-link-underline::after {
          transform: scaleX(1);
          transform-origin: left center;
        }
      `}</style>
    </motion.nav>
  );
}
