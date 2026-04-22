import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import MarqueeTicker from "./sections/MarqueeTicker";
import Cifras from "./sections/Cifras";
import Capacidades from "./sections/Capacidades";
import WordmarkMonumental from "./sections/WordmarkMonumental";
import Variaciones from "./sections/Variaciones";
import Proceso from "./sections/Proceso";
import Casos from "./sections/Casos";
import Testimonios from "./sections/Testimonios";
import Pricing from "./sections/Pricing";
import Manifiesto from "./sections/Manifiesto";
import CtaFinal from "./sections/CtaFinal";
import Footer from "./sections/Footer";
import RiverDivider from "./sections/RiverDivider";
import SmoothScroll from "./lib/SmoothScroll";
import ScrollProgress from "./lib/ScrollProgress";
import CustomCursor from "./lib/CustomCursor";
import GrainOverlay from "./lib/GrainOverlay";
import WhatsAppFab from "./WhatsAppFab";
import Preloader from "./Preloader";
import { T } from "./tokens";

export default function Home() {
  return (
    <div
      style={{
        background: T.cream,
        color: T.ink,
        fontFamily: "var(--font-unbounded), system-ui, sans-serif",
      }}
    >
      <Preloader />
      <SmoothScroll />
      <ScrollProgress />
      <CustomCursor />
      <GrainOverlay opacity={0.09} blendMode="multiply" />
      <Navbar />

      <main>
        <Hero />
        <MarqueeTicker />
        <RiverDivider from={T.cream} to={T.selva} />
        <Cifras />
        <Capacidades />
        <WordmarkMonumental />
        <Variaciones />
        <Proceso />
        <Casos />
        <Testimonios />
        <Pricing />
        <Manifiesto />
        <CtaFinal />
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
