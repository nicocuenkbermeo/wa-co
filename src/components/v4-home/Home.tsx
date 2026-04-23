import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import Capacidades from "./sections/Capacidades";
import Proceso from "./sections/Proceso";
import Precios from "./sections/Precios";
import Casos from "./sections/Casos";
import CtaFinal from "./sections/CtaFinal";
import Footer from "./sections/Footer";
import WhatsAppFab from "./WhatsAppFab";
import Reveal from "./lib/Reveal";
import CustomCursor from "./lib/CustomCursor";
import { V4, F } from "./tokens";

export default function Home() {
  return (
    <div
      style={{
        background: V4.bg0,
        color: V4.fg,
        fontFamily: F.body,
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Grain sutil global (warm) */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence baseFrequency='0.85' stitchTiles='stitch' numOctaves='2'/><feColorMatrix values='0 0 0 0 0.08 0 0 0 0 0.07 0 0 0 0 0.06 0 0 0 0.05 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          opacity: 0.7,
          mixBlendMode: "multiply",
        }}
      />
      {/* Glow layer global */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(212,182,40,0.10), transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(95,122,60,0.08), transparent 50%)",
        }}
      />

      <Reveal />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Capacidades />
        <Proceso />
        <Precios />
        <Casos />
        <CtaFinal />
      </main>

      <Footer />
      <WhatsAppFab />

      <style>{`
        html { scroll-behavior: smooth; background: ${V4.bg0}; }
        ::selection { background: ${V4.gold}; color: #0a0a08; }
        .reveal4 {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1);
        }
        .reveal4.in { opacity: 1; transform: none; }
      `}</style>
    </div>
  );
}
