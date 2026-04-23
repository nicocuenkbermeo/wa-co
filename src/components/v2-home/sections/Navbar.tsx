"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AnimatedLettermark from "../icons/AnimatedLettermark";
import MagneticButton from "../lib/MagneticButton";
import { T, SHADOW, WHATSAPP_LINK } from "../tokens";

const LINKS = [
  { label: "Capacidades", href: "/#capacidades" },
  { label: "Casos", href: "/#casos" },
  { label: "Precios", href: "/#pricing" },
  { label: "Brand", href: "/brand" },
  { label: "Proyecto", href: "/#proyecto" },
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
        background: scrolled ? "rgba(253,252,247,0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(18px) saturate(140%)" : "none",
        borderBottom: scrolled ? `1px solid ${T.border}` : "1px solid transparent",
        boxShadow: scrolled ? SHADOW.xs : "none",
        transition:
          "background 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease, box-shadow 300ms ease",
      }}
    >
      <div
        className="mx-auto flex max-w-[1240px] items-center justify-between px-5 md:px-10"
        style={{
          paddingTop: scrolled ? 12 : 18,
          paddingBottom: scrolled ? 12 : 18,
          transition: "padding 300ms ease",
        }}
      >
        <Link href="/" className="flex items-center" aria-label="Inicio wa.co">
          <AnimatedLettermark
            height={scrolled ? 26 : 32}
            label={true}
            drawOnMount={false}
            breathe={true}
            tone="dark"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link relative"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 500,
                color: T.fgMuted,
                transition: "color 200ms ease",
              }}
            >
              <span className="nav-link-underline">{l.label}</span>
            </a>
          ))}
          <div
            className="flex items-center gap-4 border-l pl-6"
            style={{ borderColor: T.border }}
          >
            <span
              className="uppercase"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.22em",
                color: T.fgSubtle,
              }}
            >
              ES · CO
            </span>
            <MagneticButton
              as="a"
              href="#contacto"
              className="inline-flex items-center gap-2 px-5"
              style={{
                height: 40,
                borderRadius: 999,
                background: T.paez800,
                color: T.paez50,
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: 600,
                boxShadow: SHADOW.sm,
              }}
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
          style={{ color: T.fg }}
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
            style={{
              background: "rgba(253,252,247,0.98)",
              backdropFilter: "blur(18px)",
              borderTop: `1px solid ${T.border}`,
            }}
          >
            <div className="flex flex-col gap-2 px-6 py-6">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-4"
                  style={{
                    color: T.fg,
                    background: T.surfaceAlt,
                    fontFamily: "var(--font-body)",
                    fontSize: 18,
                    fontWeight: 500,
                  }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 uppercase"
                style={{
                  background: T.paez800,
                  color: T.paez50,
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                }}
              >
                WhatsApp →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link:hover { color: ${T.fg}; }
        .nav-link-underline { position: relative; }
        .nav-link-underline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          height: 1.5px;
          width: 100%;
          background: ${T.paez800};
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
