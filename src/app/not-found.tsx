import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div
          className="text-[120px] md:text-[180px] font-bold leading-none text-[#161616] select-none"
          style={{ fontFamily: "var(--font-display)" }}
        >
          404
        </div>
        <h1
          className="text-2xl md:text-4xl font-bold mb-4 -mt-8 relative"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Página no encontrada
        </h1>
        <p className="text-[#A1A1A1] mb-8">
          Parece que esta página se fue de expedición por la Amazonia y no
          regresó. Pero no te preocupes, te llevamos de vuelta.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[#4A9D6E] hover:bg-[#6BBF8A] text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Volver al inicio
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center border border-[#333333] hover:border-[#4A9D6E] text-[#FAFAFA] font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Contactar soporte
          </Link>
        </div>
      </div>
    </main>
  );
}
