import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Identity from "@/components/sections/Identity";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Identity />
        <Portfolio />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
