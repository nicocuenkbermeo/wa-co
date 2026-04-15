"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/573163836881?text=Hola,%20quiero%20cotizar%20un%20proyecto";

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
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  );
}
