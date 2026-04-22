"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/573163836881?text=Hola,%20quiero%20hablar%20con%20wa.co";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className={`group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[var(--paez-950)] hover:bg-[var(--paez-900)] text-[var(--paez-300)] pl-4 pr-5 py-3.5 shadow-[0_12px_32px_rgba(20,19,15,0.25)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(20,19,15,0.35)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <MessageCircle className="relative h-4 w-4" strokeWidth={1.8} />
      <span className="font-mono text-[11px] tracking-[0.22em] uppercase font-medium">
        WhatsApp
      </span>
    </a>
  );
}
