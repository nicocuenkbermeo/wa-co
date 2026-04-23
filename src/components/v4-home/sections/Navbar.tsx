"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedLettermark from "../../v2-home/icons/AnimatedLettermark";
import { V4, F } from "../tokens";
import { WHATSAPP_LINK } from "../../v2-home/tokens";

const LINKS = [
  { label: "Capacidades", href: "#capacidades" },
  { label: "Proceso", href: "#proceso" },
  { label: "Precios", href: "#precios" },
  { label: "Casos", href: "#casos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50"
      style={{
        padding: scrolled ? "12px 0" : "18px 0",
        background: scrolled ? "rgba(253,252,247,0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(160%)" : "none",
        borderBottom: scrolled ? `1px solid ${V4.border}` : "1px solid transparent",
        transition: "all .4s cubic-bezier(.22,1,.36,1)",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between gap-6 px-8"
        style={{ maxWidth: 1320 }}
      >
        <Link href="/" aria-label="wa.co" className="flex items-center">
          <AnimatedLettermark height={scrolled ? 24 : 30} label tone="dark" breathe />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav4-link relative"
              style={{
                fontFamily: F.body,
                fontSize: 13,
                fontWeight: 500,
                color: V4.fgMuted,
                padding: "6px 0",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="nav4-cta"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "11px 20px",
            background: V4.paezGrad,
            color: "#0a0a08",
            borderRadius: 999,
            fontFamily: F.body,
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: ".02em",
            boxShadow: "0 10px 24px -8px rgba(147,166,74,0.35)",
          }}
        >
          Agendar <span aria-hidden>→</span>
        </a>
      </div>

      <style>{`
        .nav4-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 1px;
          background: ${V4.olive};
          transition: width .4s cubic-bezier(.22,1,.36,1);
        }
        .nav4-link:hover { color: ${V4.fg}; }
        .nav4-link:hover::after { width: 100%; }
        .nav4-cta { transition: all .3s cubic-bezier(.22,1,.36,1); }
        .nav4-cta:hover { transform: translateY(-2px); box-shadow: 0 16px 32px -10px rgba(147,166,74,0.5); }
      `}</style>
    </nav>
  );
}
