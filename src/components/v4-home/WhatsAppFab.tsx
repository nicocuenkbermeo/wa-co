"use client";

import { WHATSAPP_LINK } from "../v2-home/tokens";

export default function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="wa4-float"
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 40,
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "16px 24px",
        background: "#25d366",
        color: "#001b0d",
        borderRadius: 999,
        fontWeight: 700,
        fontSize: 14,
        letterSpacing: ".01em",
        boxShadow: "0 20px 40px -10px rgba(37,211,102,0.45)",
        transition: "transform .3s cubic-bezier(.22,1,.36,1)",
        textDecoration: "none",
        fontFamily: "var(--font-body), system-ui, sans-serif",
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 3.5A10.5 10.5 0 0 0 3.6 16.2L2 22l5.9-1.6A10.5 10.5 0 1 0 20.5 3.5zM12 20.1c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.2.9.9-3.2-.2-.3a8.5 8.5 0 1 1 7.2 4z" />
      </svg>
      WhatsApp
      <style>{`
        .wa4-float::before {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: 999px;
          border: 2px solid #25d366;
          opacity: 0;
          animation: waPing4 2.5s ease-out infinite;
        }
        @keyframes waPing4 {
          0% { opacity: .6; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.4); }
        }
        .wa4-float:hover { transform: translateY(-3px) scale(1.03); }
      `}</style>
    </a>
  );
}
