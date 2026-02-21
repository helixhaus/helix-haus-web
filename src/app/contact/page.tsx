import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#141614] text-[#E5E1D8] px-6 py-12 md:px-12 flex flex-col selection:bg-[#2D362E]">
      <div className="pt-[120px] md:pt-[180px] flex flex-col flex-1">
      {/* Hero */}
      <section className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
        <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#E5E1D8]/30 mb-6">
          Inquiries
        </p>
        <h1 className="font-sans text-xl md:text-2xl font-light italic tracking-tight leading-relaxed text-[#E5E1D8]/80 mb-12">
          For those looking to redefine their market trajectory.
        </h1>
        <p className="font-sans text-xs uppercase tracking-[0.3em] leading-relaxed text-[#E5E1D8]/50 max-w-md mb-12">
          We operate as a private, creative-led studio. Our capacity is intentionally limited to ensure every brand we touch receives the dedicated focus and custom craftsmanship it deserves.
        </p>
        <Link
          href="/inquiry"
          className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#E5E1D8] border border-[#E5E1D8]/40 px-8 py-4 hover:border-[#E5E1D8]/60 inline-block"
        >
          Request Complimentary Consultation
        </Link>
      </section>

      {/* Footer */}
      <footer className="mt-auto pt-8 border-t border-white/5 flex justify-between items-end">
        <p className="font-sans text-[8px] tracking-[0.5em] text-[#E5E1D8]/20 uppercase">
          EST. 2026
        </p>
        <p className="font-sans text-[8px] tracking-[0.5em] text-[#E5E1D8]/20 uppercase">
          TORONTO // GLOBAL
        </p>
      </footer>
      </div>
    </main>
  );
}
