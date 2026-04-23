import { Metadata } from "next";
import Link from "next/link";
import { LABS } from "@/labs/data";

export const metadata: Metadata = {
  title: "Laboratorios — wa.co",
  description:
    "Casos reales de wa.co: chatbots con IA, automatizaciones y sistemas que movieron métricas concretas.",
};

const STATUS_LABEL: Record<string, string> = {
  live: "En vivo",
  draft: "En borrador",
  "coming-soon": "Próximamente",
};

export default function LabsIndexPage() {
  const labs = LABS;

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA]">
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-[#D4A853] mb-4">
            Laboratorios
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Cosas que construimos
            <br />
            <span className="text-[#4A9D6E]">y que se pueden medir.</span>
          </h1>
          <p className="text-[#A1A1A1] text-lg max-w-2xl mb-16">
            Cada laboratorio es un caso real: stack, KPIs, aprendizajes. Sin
            humo. Úsalos como referencia de lo que podemos hacer para tu
            proyecto.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {labs.map((lab) => (
              <Link
                key={lab.slug}
                href={`/labs/${lab.slug}`}
                className="group block rounded-3xl border border-[#222] bg-[#121212] p-8 transition-colors hover:border-[#4A9D6E]"
              >
                <div className="flex items-center justify-between mb-4 text-[11px] uppercase tracking-[0.18em]">
                  <span className="text-[#D4A853]">{lab.project}</span>
                  <span className="text-[#6B6B6B]">
                    · {STATUS_LABEL[lab.status] ?? lab.status}
                  </span>
                </div>
                <h2
                  className="text-2xl md:text-3xl font-bold leading-tight mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {lab.title}
                </h2>
                <p className="text-[#A1A1A1] text-[15px] mb-6 leading-relaxed">
                  {lab.subtitle}
                </p>
                <div className="flex flex-wrap gap-2">
                  {lab.stack.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-[#2a2a2a] px-3 py-1 text-[11px] text-[#CDCDCD]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-[13px] text-[#4A9D6E] opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver laboratorio →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
