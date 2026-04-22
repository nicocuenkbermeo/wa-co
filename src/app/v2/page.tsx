import HeroV2 from "@/components/sections/HeroV2";
import Link from "next/link";

export const metadata = {
  title: "wa.co — v2 preview",
  description: "Preview del nuevo hero dark premium de wa.co",
};

export default function V2Page() {
  return (
    <div className="bg-[#0a0a08] text-white">
      {/* Top bar preview flag */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a08]/90 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-3 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/60">
            <span className="text-[#e0c94a]">●</span> preview v2 — dark premium
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/50 hover:text-[#e0c94a] transition-colors"
            >
              Ver v1 (actual) →
            </Link>
          </div>
        </div>
      </div>

      <main className="pt-10">
        <HeroV2 />

        {/* Simple dark placeholder below so user can scroll and compare tone */}
        <section className="relative py-32 md:py-48 bg-[#0a0a08] border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#e0c94a] mb-6">
              — Siguiente sección (placeholder)
            </p>
            <h2
              className="font-display font-normal text-white leading-[1.05] tracking-[-0.02em] max-w-3xl"
              style={{ fontSize: "clamp(36px, 5vw, 72px)", textWrap: "balance" }}
            >
              Si este hero vibra,{" "}
              <em className="italic text-[#e0c94a]">escalamos el estilo</em>{" "}
              al resto: Capacidades, Casos, Pricing, etc.
            </h2>
            <p className="mt-8 max-w-[58ch] text-white/70 leading-[1.65] text-[17px]">
              Toda la página actual (agency-wa.co) queda intacta en{" "}
              <Link href="/" className="text-[#e0c94a] underline underline-offset-4 hover:text-[#e2c728]">
                /
              </Link>{" "}
              — esto es solo el preview para decidir. Dime si te late y
              rehago el resto de secciones con este lenguaje visual.
            </p>

            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {[
                {
                  label: "Mantener",
                  items: ["Verde oscuro paez-950", "Amarillo sol spotlight", "Lettermark central"],
                },
                {
                  label: "Nuevo",
                  items: ["Glass cards flotando", "Anillos orbitales rotando", "Drop shadows en capas"],
                },
                {
                  label: "Eliminar",
                  items: ["Italic dominante", "Páginas largas editoriales", "Fondos cream light"],
                },
              ].map((g) => (
                <div
                  key={g.label}
                  className="rounded-2xl p-6 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08]"
                >
                  <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#e0c94a] mb-4">
                    · {g.label}
                  </p>
                  <ul className="space-y-2">
                    {g.items.map((it) => (
                      <li key={it} className="text-[14px] text-white/80">
                        — {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
