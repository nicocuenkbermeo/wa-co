import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Status — wa.co",
  description:
    "Estado operativo de los sistemas de wa.co: sitio, chatbots, automatizaciones e integraciones.",
};

const UPDATED = "2026-04-22";

type ServiceStatus = "operational" | "degraded" | "outage";

const STATUS_LABEL: Record<ServiceStatus, string> = {
  operational: "Operativo",
  degraded: "Degradado",
  outage: "Caído",
};

const STATUS_COLOR: Record<ServiceStatus, string> = {
  operational: "#4A9D6E",
  degraded: "#D4A853",
  outage: "#DC2626",
};

type System = { name: string; status: ServiceStatus; note?: string };

const SYSTEMS: System[] = [
  { name: "agency-wa.co (sitio)", status: "operational" },
  { name: "Chatbot WhatsApp (Meta Cloud API)", status: "operational" },
  { name: "Pipelines n8n", status: "operational" },
  { name: "Ingesta de leads / formulario contacto", status: "operational" },
  { name: "Integraciones externas (OpenAI, Google, Meta)", status: "operational" },
];

export default function StatusPage() {
  const allGood = SYSTEMS.every((s) => s.status === "operational");

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA]">
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-[#D4A853] mb-4">
            Estado del sistema
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Status
          </h1>

          <div
            className="flex items-center gap-3 mb-4 rounded-2xl border px-5 py-4"
            style={{
              borderColor: allGood ? "#4A9D6E55" : "#D4A85355",
              background: allGood ? "#4A9D6E14" : "#D4A85314",
            }}
          >
            <CheckCircle2
              className="w-5 h-5"
              style={{ color: allGood ? "#4A9D6E" : "#D4A853" }}
            />
            <p className="text-[15px]">
              {allGood
                ? "Todos los sistemas operando con normalidad."
                : "Uno o más sistemas presentan incidencias — ver detalle abajo."}
            </p>
          </div>
          <p className="text-[#6B6B6B] text-sm mb-10">
            Última actualización: {UPDATED} · Reportes en vivo vía{" "}
            <a href="mailto:hola@agency-wa.co" className="text-[#4A9D6E] hover:underline">
              hola@agency-wa.co
            </a>
            .
          </p>

          <div className="space-y-3">
            {SYSTEMS.map((s) => (
              <div
                key={s.name}
                className="flex items-center justify-between rounded-xl border border-[#222222] bg-[#121212] px-5 py-4"
              >
                <div>
                  <p className="text-[#FAFAFA] text-[15px]">{s.name}</p>
                  {s.note && (
                    <p className="text-[#6B6B6B] text-sm mt-1">{s.note}</p>
                  )}
                </div>
                <span
                  className="text-xs font-mono uppercase tracking-[0.18em]"
                  style={{ color: STATUS_COLOR[s.status] }}
                >
                  · {STATUS_LABEL[s.status]}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[#222222] bg-[#121212] px-6 py-6 text-[13px] text-[#A1A1A1]">
            <p>
              ¿Ves algo raro en tu proyecto? Escríbenos por WhatsApp al{" "}
              <a
                href="https://wa.me/573163836881"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4A9D6E] hover:underline"
              >
                +57 316 383 6881
              </a>{" "}
              y lo revisamos en menos de 1 hora en horario hábil.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
