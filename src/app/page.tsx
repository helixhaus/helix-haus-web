import Link from 'next/link';

export default function Home() {
  return (
    <main className="grain min-h-screen bg-[#141614] text-[#E5E1D8] font-sans relative z-10">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-10 border-b border-[#2D362E]/40">
        <Link href="/" className="font-sans font-semibold text-lg tracking-[0.3em] uppercase text-[#E5E1D8]">
          HELIX HAUS
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/about"
            className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#E5E1D8]/60 hover:text-[#E5E1D8] transition-colors duration-300"
          >
            ABOUT
          </Link>
          <Link
            href="/services"
            className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#E5E1D8]/60 hover:text-[#E5E1D8] transition-colors duration-300"
          >
            SERVICES
          </Link>
          <Link
            href="/contact"
            className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#E5E1D8]/60 hover:text-[#E5E1D8] transition-colors duration-300"
          >
            CONTACT
          </Link>
        </nav>
      </header>

      {/* Hero — boutique: smaller headline, luxury padding */}
      <section className="font-sans max-w-5xl mx-auto pt-32 pb-48 px-6">
        <div className="flex flex-col items-end text-right">
          <h1 className="font-sans text-xl font-light italic tracking-tight leading-[1.2] text-[#E5E1D8] mb-8 max-w-lg">
            Our Vision
          </h1>
          <p className="text-xs uppercase tracking-[0.3em] text-[#E5E1D8]/80 max-w-md leading-relaxed ml-20 md:ml-32">
            A creative-led marketing house built to scale brands. We leverage a private intelligence engine to automate visibility and craft the foundations that allow brands to outpace the market in real-time.
          </p>
        </div>
      </section>

      {/* Services — catalog / price list, aligned with Hero */}
      <section id="services" className="max-w-6xl mx-auto py-32 px-6 border-t border-white/[0.05]" style={{ borderTopWidth: "1px" }}>
        <div className="flex flex-col">
          <div className="border-t border-white/5 py-24 first:border-t-0 first:pt-0">
            <h3 className="font-sans text-xl font-light tracking-[0.3em] text-[#E5E1D8] uppercase mb-4">
              Brand Design
            </h3>
            <p className="font-sans text-xs leading-relaxed max-w-md text-[#E5E1D8]/70">
              Engineering the visual identity and market positioning that defines category leaders. We build the high-conversion foundations required to capture attention and outpace the market in real-time.
            </p>
          </div>
          <div className="border-t border-white/5 py-24">
            <h3 className="font-sans text-xl font-light tracking-[0.3em] text-[#E5E1D8] uppercase mb-4">
              Algorithmic Growth
            </h3>
            <p className="font-sans text-xs leading-relaxed max-w-md text-[#E5E1D8]/70">
              Constructing the digital infrastructure required to dominate your niche. We use data-driven strategy to automate your visibility and outpace the market in real-time.
            </p>
          </div>
          <div className="border-t border-white/5 py-24">
            <h3 className="font-sans text-xl font-light tracking-[0.3em] text-[#E5E1D8] uppercase mb-4">
              Content Creation
            </h3>
            <p className="font-sans text-xs leading-relaxed max-w-md text-[#E5E1D8]/70">
              Engineering premium digital assets designed to capture market attention and drive conversion. We translate brand vision into high-performance visual systems that sustain engagement in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-white/[0.05] py-20 px-6" style={{ borderTopWidth: "1px" }}>
        <div className="max-w-6xl mx-auto flex justify-between items-end">
          <p className="font-sans text-[8px] tracking-[0.5em] text-[#E5E1D8]/20 uppercase">
            EST. 2026
          </p>
          <p className="font-sans text-[8px] tracking-[0.5em] text-[#E5E1D8]/20 uppercase">
            TORONTO // GLOBAL
          </p>
        </div>
      </footer>
    </main>
  );
}
