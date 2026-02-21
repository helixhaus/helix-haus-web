'use client';

import { useState } from 'react';

export default function InquiryPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: 'application/json' },
    });
    if (response.ok) {
      setSubmitted(true);
    }
  }

  return (
    <main className="min-h-screen bg-[#141614] text-[#E5E1D8] px-6 py-12 md:px-12 flex flex-col selection:bg-[#2D362E]">
      {/* Form section — left-aligned, match About */}
      <section className="max-w-3xl mx-auto w-full text-left mb-40">
        <p className="font-sans text-[9px] uppercase tracking-[0.5em] opacity-30 mb-12">
          Project Inquiry
        </p>

        {submitted ? (
          <p className="font-sans text-lg font-light italic tracking-tight leading-relaxed text-[#E5E1D8]/80 max-w-xl">
            Your vision has been received. We will be in touch.
          </p>
        ) : (
        <form
          action="https://formspree.io/f/xkovvojb"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div>
            <label htmlFor="name" className="block font-sans text-[10px] uppercase tracking-widest opacity-40 mb-2">
              Name / Brand
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full font-sans text-[11px] text-[#E5E1D8] bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-[#E5E1D8]/30"
              placeholder=""
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-sans text-[10px] uppercase tracking-widest opacity-40 mb-2">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full font-sans text-[11px] text-[#E5E1D8] bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-[#E5E1D8]/30"
              placeholder=""
            />
          </div>

          <div>
            <label htmlFor="stage" className="block font-sans text-[10px] uppercase tracking-widest opacity-40 mb-2">
              Where are you currently?
            </label>
            <select
              id="stage"
              name="stage"
              className="w-full font-sans text-[11px] text-[#E5E1D8] bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-[#E5E1D8]/30 appearance-none cursor-pointer"
              defaultValue=""
            >
              <option value="" className="bg-[#141614] text-[#E5E1D8]/60">
                Select your stage...
              </option>
              <option value="launching" className="bg-[#141614] text-[#E5E1D8]">
                I am launching a new idea
              </option>
              <option value="refresh" className="bg-[#141614] text-[#E5E1D8]">
                I have an existing brand that needs a refresh
              </option>
              <option value="partnership" className="bg-[#141614] text-[#E5E1D8]">
                I need long-term creative partnership
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="vision" className="block font-sans text-[10px] uppercase tracking-widest opacity-40 mb-2">
              What are we building?
            </label>
            <textarea
              id="vision"
              name="vision"
              rows={4}
              placeholder="Briefly describe your vision..."
              className="w-full font-sans text-[11px] text-[#E5E1D8] bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-[#E5E1D8]/30 resize-none placeholder-[#E5E1D8]/30"
            />
          </div>

          <button
            type="submit"
            className="font-sans text-[10px] uppercase tracking-[0.3em] py-4 px-10 border border-white/20 text-[#E5E1D8] hover:bg-white hover:text-black transition-all"
          >
            Send Inquiry
          </button>
        </form>
        )}
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
    </main>
  );
}
