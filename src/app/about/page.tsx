'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    { 
      title: 'Brand Architecture', 
      desc: 'Engineering the visual DNA and narrative positioning that defines modern icons. We craft the aesthetic foundations required to command market authority.' 
    },
    { 
      title: 'Algorithmic Visibility', 
      desc: 'Orchestrating digital dominance through strategic discovery. We ensure your brand’s presence is felt exactly where the culture is looking.' 
    },
    { 
      title: 'Performance Intelligence', 
      desc: 'Transforming raw data into proprietary insights. We map the trajectory of growth to ensure every move is a calculated step toward market leadership.' 
    },
    { 
      title: 'Content Narrative', 
      desc: 'Curating high-fidelity digital assets that stop the scroll and build brand lore. We translate vision into a consistent, hypnotic aesthetic.' 
    },
    { 
      title: 'Market Intelligence', 
      desc: 'Deep-tier analysis of competitor moves and emerging cultural shifts to keep your brand ahead of the curve.' 
    },
    { 
      title: 'Digital Presence', 
      desc: 'Architecting seamless, high-status digital environments and ecosystems designed for elite global audiences.' 
    }
  ];

  return (
    <main className="min-h-screen bg-[#141614] text-[#E5E1D8] px-6 py-12 md:px-12 flex flex-col selection:bg-[#2D362E]">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-32">
        <Link href="/" className="font-sans text-[10px] tracking-[0.4em] uppercase opacity-50 hover:opacity-100 transition-opacity">
          HELIX HAUS
        </Link>
        <Link href="/" className="font-sans text-[9px] uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity border-b border-transparent hover:border-[#E5E1D8]/20 pb-1">
          Back to Home
        </Link>
      </nav>

      <section className="max-w-3xl mx-auto space-y-32 mb-40">
        
        {/* 1. Brand Philosophy */}
        <div className="space-y-6">
          <p className="font-sans text-[9px] uppercase tracking-[0.5em] opacity-30">Brand Philosophy</p>
          <h1 className="font-sans text-lg md:text-xl font-light italic tracking-tight leading-relaxed opacity-80 max-w-2xl">
            We believe that true influence is quiet. In a world of loud, fleeting trends, we architect the silent systems that sustain market leadership. We don’t just build brands; we engineer the proprietary DNA that allows them to move with intentionality and outpace the noise of the modern era.
          </h1>
        </div>

        {/* 2. Original Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div className="space-y-4">
            <p className="font-sans text-[9px] uppercase tracking-[0.5em] opacity-30">The Distinction</p>
            <p className="font-sans text-[11px] leading-relaxed opacity-50 uppercase tracking-widest">
              Most agencies provide solutions for today. We build systems for legacy. Our approach combines creative high-fidelity with performance intelligence to ensure your brand isn’t just seen—it’s remembered.
            </p>
          </div>

          <div className="space-y-4">
            <p className="font-sans text-[9px] uppercase tracking-[0.5em] opacity-30">Behind the Name</p>
            <p className="font-sans text-[11px] leading-relaxed opacity-50 uppercase tracking-widest">
              A <span className="italic">Helix</span> represents the fundamental structure of growth and evolution—the DNA of an icon. A <span className="italic">Haus</span> represents the craftsmanship, privacy, and curated nature of a bespoke studio. Together, we are the architectural foundation of brand evolution.
            </p>
          </div>
        </div>

        {/* 3. Core Capabilities - Interactive */}
        <div className="pt-16 border-t border-white/5 space-y-12">
          <p className="font-sans text-[9px] uppercase tracking-[0.5em] opacity-30 text-center">Core Capabilities</p>
          
          <div className="flex flex-col items-center space-y-10">
            {services.map((s) => (
              <div key={s.title} className="w-full max-w-md text-center">
                <button 
                  onClick={() => setActiveService(activeService === s.title ? null : s.title)}
                  className={`font-sans text-[11px] uppercase tracking-[0.4em] transition-all duration-300 ${activeService === s.title ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                >
                  {s.title}
                </button>
                
                {activeService === s.title && (
                  <div className="mt-6 animate-in fade-in slide-in-from-top-2 duration-500">
                    <p className="font-sans text-[11px] uppercase tracking-[0.2em] opacity-50 max-w-[320px] mx-auto leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - No Copyright Symbol */}
      <footer className="mt-auto pt-8 border-t border-white/5 flex justify-between items-end">
        <p className="font-sans text-[8px] tracking-[0.5em] opacity-20 uppercase">
          EST. 2026
        </p>
        <p className="font-sans text-[8px] tracking-[0.5em] opacity-20 uppercase">
          Toronto // Global
        </p>
      </footer>
    </main>
  );
}