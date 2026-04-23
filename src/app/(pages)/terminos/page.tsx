import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones — wa.co",
  description:
    "Términos del uso del sitio web agency-wa.co y de los servicios de automatización con IA prestados por wa.co.",
};

const UPDATED = "2026-04-22";

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA]">
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-[#D4A853] mb-4">
            Legal · Términos
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Términos y Condiciones
          </h1>
          <p className="text-[#6B6B6B] text-sm mb-10">
            Última actualización: {UPDATED}
          </p>

          <div className="space-y-8 text-[#CDCDCD] leading-relaxed text-[15px]">
            <section>
              <h2 className="text-xl font-semibold text-[#FAFAFA] mb-3">1. Objeto</h2>
              <p>
                Estos términos regulan el uso del sitio{" "}
                <span className="font-mono">agency-wa.co</span> y la contratación de
                los servicios de diseño web, chatbots WhatsApp con IA,
                automatización con n8n, branding y afines ofrecidos por wa.co.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FAFAFA] mb-3">
                2. Prestador del servicio
              </h2>
              <p>
                wa.co — agencia operada por Nicolás Cuenca Bermeo, Colombia. Contacto:{" "}
                <a href="mailto:hola@agency-wa.co" className="text-[#4A9D6E] hover:underline">
                  hola@agency-wa.co
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FAFAFA] mb-3">
                3. Modelo comercial
              </h2>
              <p>Los servicios se contratan bajo dos componentes:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>
                  <strong>Setup único</strong> (desde USD $800) por la construcción,
                  configuración y despliegue.
                </li>
                <li>
                  <strong>MRR — mantenimiento mensual</strong> (desde USD $150) por
                  operación, soporte, monitoreo y pequeños ajustes según plan.
                </li>
              </ul>
              <p className="mt-3">
                El alcance exacto, SLA, plazos y precios finales de cada proyecto se
                firman en propuesta escrita independiente antes de iniciar.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FAFAFA] mb-3">
                4. Propiedad intelectual
              </h2>
              <p>
                Entregables pagados en su totalidad pasan a propiedad del cliente para
                uso comercial y explotación. wa.co conserva:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>
                  Derechos sobre las herramientas, librerías y piezas reutilizables
                  desarrolladas internamente.
                </li>
                <li>
                  Derecho a mostrar el trabajo en portafolio, casos y laboratorios,
                  salvo pacto expreso de confidencialidad.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FAFAFA] mb-3">
                5. Responsabilidades del cliente
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Entregar contenidos, accesos y decisiones en los plazos acordados.</li>
                <li>Cumplir la normativa aplicable a su industria (datos, publicidad, salud, etc.).</li>
                <li>Mantener vigentes las cuentas de terceros necesarias (Meta, dominios, hosting propio).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FAFAFA] mb-3">
                6. Limitación de responsabilidad
              </h2>
              <p>
                wa.co responde por la calidad técnica de lo entregado. No es
                responsable por lucro cesante, interrupciones en servicios de
                terceros (Meta, OpenAI, Vercel, etc.), uso indebido de los sistemas
                entregados ni por datos introducidos por el cliente. La
                responsabilidad máxima total se limita al monto pagado por el cliente
                en los últimos 3 meses.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FAFAFA] mb-3">
                7. Cancelación y refunds
              </h2>
              <p>
                El mantenimiento mensual se cobra por ciclo completo; la cancelación
                debe notificarse con 15 días de anticipación al siguiente ciclo.
                Setup ya iniciado no se reembolsa; si el proyecto se cancela antes de
                su entrega final se factura proporcional al avance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FAFAFA] mb-3">
                8. Ley aplicable y resolución de disputas
              </h2>
              <p>
                Estos términos se rigen por las leyes de la República de Colombia.
                Cualquier controversia se intentará resolver primero de buena fe; en
                caso de no llegar a acuerdo, se someterá a los jueces competentes de
                Neiva, Huila.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
