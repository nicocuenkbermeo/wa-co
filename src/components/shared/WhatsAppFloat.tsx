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
      className={`group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] hover:bg-[#1fb857] text-white pl-4 pr-5 py-3.5 shadow-[0_8px_32px_rgba(37,211,102,0.35)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(37,211,102,0.55)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20" />
      <MessageCircle className="relative h-5 w-5" strokeWidth={2} />
      <span className="font-mono text-[11px] tracking-[0.14em] uppercase font-medium">
        Chatea ahora
      </span>
    </a>
  );
}
