import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LABS, getLab } from "@/labs/data";

export async function generateStaticParams() {
  return LABS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lab = getLab(slug);
  if (!lab) return { title: "Laboratorio — wa.co" };
  return {
    title: `${lab.title} — wa.co Labs`,
    description: lab.subtitle,
  };
}

export default async function LabDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lab = getLab(slug);
  if (!lab) notFound();

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA]">
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/labs"
            className="text-xs uppercase tracking-[0.22em] text-[#D4A853] hover:text-[#4A9D6E] transition-colors"
          >
            ← Laboratorios
          </Link>
          <p className="mt-8 text-xs uppercase tracking-[0.22em] text-[#6B6B6B]">
            {lab.project} · {lab.industry}
          </p>
          <h1
            className="mt-3 text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {lab.title}
          </h1>
          <p className="mt-4 text-[#A1A1A1] text-lg leading-relaxed">
            {lab.subtitle}
          </p>

          {/* Stack */}
          <div className="mt-8 flex flex-wrap gap-2">
            {lab.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[#2a2a2a] px-3 py-1 text-[11px] text-[#CDCDCD]"
              >
                {s}
              </span>
            ))}
          </div>

          {/* KPIs */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {lab.kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-2xl border border-[#222] bg-[#121212] p-5"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[#6B6B6B]">
                  {kpi.label}
                </p>
                <p
                  className="mt-2 text-3xl font-bold text-[#4A9D6E]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {kpi.value}
                </p>
                {kpi.hint && (
                  <p className="mt-1 text-xs text-[#A1A1A1]">{kpi.hint}</p>
                )}
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-10 text-[#CDCDCD] text-[16px] leading-relaxed">
            <p>{lab.summary}</p>
          </div>

          {/* Blocks */}
          <div className="mt-8 space-y-6">
            {lab.blocks.map((b, i) => {
              if (b.kind === "text") {
                return (
                  <p
                    key={i}
                    className="text-[#CDCDCD] text-[16px] leading-relaxed"
                  >
                    {b.content}
                  </p>
                );
              }
              if (b.kind === "callout") {
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-[#4A9D6E55] bg-[#4A9D6E14] p-6"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-[#4A9D6E]">
                      · {b.title}
                    </p>
                    <p className="mt-3 text-[#FAFAFA] text-[16px] leading-relaxed">
                      {b.body}
                    </p>
                  </div>
                );
              }
              return (
                <ul
                  key={i}
                  className="list-disc pl-6 space-y-2 text-[#CDCDCD] text-[15px] leading-relaxed"
                >
                  {b.items.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-3xl border border-[#222] bg-[#121212] p-8 text-center">
            <p className="text-[#A1A1A1] mb-5">
              ¿Ves algo similar a lo que necesitas?
            </p>
            <a
              href="https://wa.me/573163836881?text=Hola,%20vengo%20del%20laboratorio%20wa.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#4A9D6E] hover:bg-[#6BBF8A] text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm"
            >
              Hablemos por WhatsApp →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
