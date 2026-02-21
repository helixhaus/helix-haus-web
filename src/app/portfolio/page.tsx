import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-[#E5E1D8] px-6 py-12 md:px-12 flex flex-col selection:bg-[#2D362E]">
      {/* Portfolio header */}
      <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#E5E1D8] mb-12">
        Portfolio
      </p>

      {/* BAUDDI section */}
      <section className="max-w-4xl mx-auto w-full mb-24">
        <p className="font-sans text-[9px] uppercase tracking-[0.5em] text-[#E5E1D8]/50 mb-8">
          Bauddi
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-zinc-800 overflow-hidden">
            <Image
              src="/bauddi-4.jpg"
              alt="Bauddi 4"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="border border-zinc-800 overflow-hidden">
            <Image
              src="/bauddi-2.jpg"
              alt="Bauddi 2"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="border border-zinc-800 overflow-hidden">
            <Image
              src="/bauddi-5.jpg"
              alt="Bauddi 5"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto pt-8 border-t border-zinc-800 flex justify-between items-end">
        <p className="font-sans text-[8px] tracking-[0.5em] text-[#E5E1D8]/20 uppercase">
          EST. 2026
        </p>
        <p className="font-sans text-[8px] tracking-[0.5em] text-[#E5E1D8]/20 uppercase">
          TORONTO // GLOBAL
        </p>
      </footer>
    </main>
  );
}
