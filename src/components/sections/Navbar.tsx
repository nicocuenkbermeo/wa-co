"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Lettermark from "@/components/shared/Lettermark";

const navLinks = [
  { label: "Manifiesto", href: "#manifiesto", num: "01" },
  { label: "Capacidades", href: "#servicios", num: "02" },
  { label: "Proceso", href: "#proceso", num: "03" },
  { label: "Casos", href: "#portafolio", num: "04" },
  { label: "Precios", href: "#precios", num: "06" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--ink-950)]/90 backdrop-blur-xl border-b border-[var(--border-subtle)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="#inicio" className="flex items-center gap-3 group">
            <Lettermark height={26} />
            <span className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
              wa.co <span className="text-[var(--text-faint)]">— agency</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-secondary)] transition-all duration-200 hover:text-[var(--paez-300)] flex items-center gap-1.5"
              >
                <span className="text-[var(--text-faint)]">{link.num}</span>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="#contacto"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--paez-300)] hover:bg-[var(--paez-200)] pl-5 pr-4 py-2.5 font-mono text-[10px] tracking-[0.22em] uppercase font-medium text-[var(--ink-950)] transition-all"
            >
              Agendar
              <span className="inline-block w-5 h-px bg-[var(--ink-950)] transition-all group-hover:w-8" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-card)] lg:hidden"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="h-5 w-5" strokeWidth={1.5} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="h-5 w-5" strokeWidth={1.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--ink-950)]/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-0 px-6 py-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="border-b border-[var(--border-subtle)] py-4"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-baseline gap-6 group"
                  >
                    <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--text-faint)]">
                      {link.num}
                    </span>
                    <span className="font-display text-3xl text-[var(--text-primary)] group-hover:italic group-hover:text-[var(--paez-300)] transition-all">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                className="mt-8"
              >
                <Link
                  href="#contacto"
                  onClick={() => setIsOpen(false)}
                  className="block w-full rounded-full bg-[var(--paez-300)] px-6 py-4 text-center font-mono text-[11px] tracking-[0.22em] uppercase font-medium text-[var(--ink-950)] transition-colors"
                >
                  Agendar llamada →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
