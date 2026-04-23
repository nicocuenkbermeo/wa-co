import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — wa.co",
  description:
    "Cómo wa.co recolecta, usa y protege los datos personales de quienes nos contactan o usan nuestras automatizaciones.",
};

const UPDATED = "2026-04-22";

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA]">
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-[#D4A853] mb-4">
            Legal · Privacidad
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Política de Privacidad
          </h1>
          <p className="text-[#6B6B6B] text-sm mb-10">
            Última actualización: {UPDATED}
          </p>

          <div className="space-y-8 text-[#CDCDCD] leading-relaxed text-[15px]">
            <section>
              <h2 className="text-xl font-semibold text-[#FAFAFA] mb-3">1. Quiénes somos</h2>
              <p>
                wa.co es una agencia de automatización con IA operada desde Neiva,
                Huila, Colombia. Responsable del tratamiento: Nicolás Cuenca Bermeo
                (titular), correo de contacto{" "}
                <a href="mailto:hola@agency-wa.co" className="text-[#4A9D6E] hover:underline">
                  hola@agency-wa.co
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FAFAFA] mb-3">
                2. Qué datos recogemos
              </h2>
              <p>Cuando nos contactas vía formulario, WhatsApp o correo podemos recoger:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Nombre y apellidos.</li>
                <li>Correo electrónico.</li>
                <li>Número de WhatsApp o teléfono.</li>
                <li>Nombre de la empresa, si aplica.</li>
                <li>
                  Detalles del proyecto o mensaje que nos compartes voluntariamente.
                </li>
                <li>
                  Datos técnicos básicos de navegación (IP, navegador, páginas visitadas)
                  agregados de forma anónima vía Vercel Analytics.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FAFAFA] mb-3">
                3. Para qué usamos los datos
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Responder a tus consultas y preparar propuestas.</li>
                <li>Ejecutar contratos y proyectos acordados.</li>
                <li>Enviar comunicaciones comerciales sólo si nos diste permiso explícito (newsletter).</li>
                <li>Mejorar el sitio web y nuestras ofertas mediante métricas anónimas.</li>
                <li>Cumplir con obligaciones legales, contables y fiscales.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FAFAFA] mb-3">
                4. Con quién compartimos los datos
              </h2>
              <p>No vendemos datos personales. Los compartimos únicamente con:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Proveedores de infraestructura (Vercel, Meta WhatsApp Business, proveedor de correo).</li>
                <li>Autoridades competentes cuando la ley lo exija.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FAFAFA] mb-3">
                5. Tiempo de conservación
              </h2>
              <p>
                Conservamos los datos el tiempo necesario para cumplir la finalidad
                para la que fueron recogidos o mientras dure la relación comercial,
                salvo obligación legal de retención superior (ejemplo: 5 años para
                documentos contables en Colombia).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FAFAFA] mb-3">
                6. Tus derechos (Habeas Data — Ley 1581 de 2012)
              </h2>
              <p>
                Puedes ejercer en cualquier momento los derechos de acceso,
                rectificación, actualización, supresión y revocatoria del
                consentimiento escribiendo a{" "}
                <a href="mailto:hola@agency-wa.co" className="text-[#4A9D6E] hover:underline">
                  hola@agency-wa.co
                </a>
                . Atendemos la solicitud dentro de los 15 días hábiles siguientes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FAFAFA] mb-3">
                7. Seguridad
              </h2>
              <p>
                Aplicamos medidas técnicas y organizativas razonables para proteger
                los datos frente a pérdida, acceso no autorizado o alteración. Ningún
                sistema es 100% invulnerable; en caso de incidente relevante
                notificaremos a los afectados conforme a la ley.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FAFAFA] mb-3">
                8. Cookies y trackers
              </h2>
              <p>
                Usamos cookies técnicas estrictamente necesarias y cookies analíticas
                de Vercel Analytics / Speed Insights. No usamos cookies publicitarias
                propias. Puedes bloquearlas desde la configuración de tu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FAFAFA] mb-3">
                9. Cambios
              </h2>
              <p>
                Podemos actualizar esta política. La versión vigente siempre lleva la
                fecha de &quot;Última actualización&quot; arriba. Cambios sustantivos
                se comunican por correo si tenemos tu contacto.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
