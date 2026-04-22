"use client";

import { motion } from "framer-motion";
import SplitText from "../lib/SplitText";
import MagneticButton from "../lib/MagneticButton";
import AnimatedLettermark from "../icons/AnimatedLettermark";
import { PalmaDeCera, Heliconia, Anturio } from "../icons/Botanicals";
import { T, WHATSAPP_LINK, CALENDLY_LINK } from "../tokens";

export default function CtaFinal() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-32 md:py-48"
      style={{ background: T.yellow }}
    >
      <div className="pointer-events-none absolute -left-10 bottom-0 hidden md:block" style={{ zIndex: 0, opacity: 0.9 }}>
        <PalmaDeCera size={260} color={T.selva} />
      </div>
      <div className="pointer-events-none absolute right-8 bottom-10 hidden lg:block" style={{ zIndex: 0 }}>
        <Heliconia size={180} color={T.fire} accent={T.orange} leaf={T.selva} flipX />
      </div>
      <div className="pointer-events-none absolute left-[32%] top-20 hidden lg:block" style={{ zIndex: 0 }}>
        <Anturio size={110} />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <OrbitalRings />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7 }}
          className="relative mb-8 font-mono text-[12px] uppercase tracking-[0.3em]"
          style={{ color: T.selva }}
        >
          · Agendar llamada
        </motion.p>

        <h2
          className="relative leading-[0.88] tracking-[-0.035em]"
          style={{
            fontFamily: "var(--font-unbounded)",
            fontWeight: 200,
            fontSize: "clamp(48px, 11vw, 180px)",
            color: T.ink,
            textWrap: "balance",
          }}
        >
          <SplitText text="Tu operación" as="span" stagger={0.05} />
          <br />
          <SplitText
            text="ya debería estar"
            as="span"
            stagger={0.05}
            delay={0.1}
            style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", fontWeight: 300, color: T.selva }}
          />
          <br />
          <SplitText text="fluyendo." as="span" stagger={0.05} delay={0.25} />
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mt-14 flex flex-col items-start gap-4 md:flex-row"
        >
          <MagneticButton
            as="a"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full px-8 py-5 text-[12px] font-medium uppercase tracking-[0.22em]"
            style={{ background: T.ink, color: T.yellow }}
          >
            Hablar por WhatsApp
            <span aria-hidden>↗</span>
          </MagneticButton>
          <MagneticButton
            as="a"
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full px-8 py-5 text-[12px] font-medium uppercase tracking-[0.22em]"
            style={{ color: T.ink, border: `1.5px solid ${T.ink}` }}
          >
            Agendar 20 min
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative mt-20 flex items-end gap-6 border-t pt-8 md:mt-28"
          style={{ borderColor: `${T.ink}22` }}
        >
          <AnimatedLettermark height={64} tone="dark" label={false} drawOnMount={false} />
          <div className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: `${T.ink}aa` }}>
            agency-wa.co
            <br />
            las letras salen del agua.
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function OrbitalRings() {
  return (
    <svg
      className="pointer-events-none absolute"
      style={{
        right: "-5%",
        top: "10%",
        width: "clamp(260px, 40vw, 640px)",
        height: "clamp(260px, 40vw, 640px)",
        zIndex: 0,
        opacity: 0.55,
      }}
      viewBox="0 0 400 400"
      aria-hidden
    >
      {[...Array(6)].map((_, i) => (
        <motion.circle
          key={i}
          cx="200"
          cy="200"
          r={60 + i * 30}
          stroke={T.selva}
          strokeWidth="1.5"
          fill="none"
          opacity={0.4 - i * 0.05}
          initial={{ rotate: 0 }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 24 + i * 6, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
          strokeDasharray={i % 2 === 0 ? "4 10" : undefined}
        />
      ))}
      <circle cx="200" cy="200" r="40" fill={T.fire} />
      <circle cx="200" cy="200" r="40" fill="none" stroke={T.ink} strokeWidth="2" />
      <path d="M 80 320 Q 200 200, 320 80" stroke={T.selva} strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}
