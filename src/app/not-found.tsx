import Link from "next/link";
import Lettermark from "@/components/shared/Lettermark";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <Lettermark height={56} className="mx-auto mb-8 opacity-60" />

        <div className="font-display text-[140px] md:text-[200px] leading-none text-[var(--bg-card)] select-none italic">
          404
        </div>
        <h1 className="font-display text-3xl md:text-4xl mb-4 -mt-8 relative tracking-[-0.02em]">
          Esta página se <em className="italic text-[var(--paez-300)]">fue río abajo</em>.
        </h1>
        <p className="text-[var(--text-secondary)] mb-10 leading-relaxed">
          Parece que el cauce cambió y este link quedó en una orilla vieja.
          Te devolvemos a la corriente principal.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[var(--paez-800)] hover:bg-[var(--paez-700)] text-white font-medium px-8 py-3.5 rounded-full transition-colors"
          >
            Volver al inicio
          </Link>
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center border border-[var(--border-strong)] hover:border-[var(--paez-400)] hover:text-[var(--paez-300)] text-[var(--text-primary)] font-medium px-8 py-3.5 rounded-full transition-colors"
          >
            Contactarnos
          </Link>
        </div>
      </div>
    </main>
  );
}
