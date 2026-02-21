'use client';

import { useState } from 'react';

const services = [
  {
    title: 'Brand Foundations',
    desc: 'Engineering the core strategic infrastructure of your brand. From market positioning to long-term growth blueprints, we design the industrial-strength foundations required for market leadership.',
  },
  {
    title: 'Digital Architecture',
    desc: 'Engineering high-status digital environments that serve as the central hub for your brand. We build high-performance, minimalist platforms designed to sustain prestige and convert attention into authority.',
  },
  {
    title: 'Brand Identity',
    desc: 'Engineering the visual systems and strategic positioning required to command market authority. We craft the high-status aesthetic foundations that allow your brand to move with intentionality and prestige.',
  },
  {
    title: 'Algorithmic Growth',
    desc: 'Orchestrating digital dominance through strategic discovery. We engineer the technical infrastructure required to automate your visibility and ensure your brand commands authority wherever your market is looking.',
  },
  {
    title: 'Performance Intelligence',
    desc: 'Turning data into a clear path forward. We look at the numbers to help you make smart moves and stay ahead of the game.',
  },
  {
    title: 'Content Narrative',
    desc: 'Telling your story through beautiful visuals. We create the look and feel that stops people in their tracks and keeps them interested.',
  },
  {
    title: 'Market Intelligence',
    desc: 'Keeping an eye on the horizon. We study your industry and your peers to make sure your brand is always leading, never following.',
  },
  {
    title: 'Digital Presence',
    desc: 'Everywhere your brand lives online, it should feel seamless. We manage your digital ecosystem so your experience is polished on every screen.',
  },
];

export default function ServicesPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#141614] text-[#E5E1D8] px-6 py-12 md:px-12 flex flex-col selection:bg-[#2D362E]">
      <div className="pt-[120px] md:pt-[180px] flex flex-col flex-1">
      {/* Section title + list — exact match to About (Brand Philosophy block) */}
      <section className="max-w-3xl mx-auto space-y-32 mb-40 w-full text-left">
        <div className="space-y-6 text-left w-full">
          <p className="font-sans text-[9px] uppercase tracking-[0.5em] opacity-30">
            Services Offered
          </p>
          <div className="space-y-8">
            {services.map((item) => (
              <div key={item.title}>
                <button
                  type="button"
                  onClick={() => setExpanded(expanded === item.title ? null : item.title)}
                  className="font-sans text-[11px] uppercase tracking-[0.4em] text-[#E5E1D8] text-left w-full"
                >
                  {item.title}
                </button>
                {expanded === item.title && (
                  <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#E5E1D8]/50 leading-relaxed mt-4 max-w-lg">
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
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
