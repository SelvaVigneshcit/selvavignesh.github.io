import React from "react";
import { Quote as QuoteIcon } from "lucide-react";
import { favoriteQuote, languages } from "../mock/mockData";

const Quote = () => {
  return (
    <>
      <section className="relative py-24 md:py-32 bg-[#080808] text-[#F2EEE5] overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(900px 400px at 50% 50%, rgba(201,169,97,0.09), transparent 60%)",
          }}
        />
        {/* decorative gold hairlines */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-[#C9A961]/70 to-transparent" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-[#C9A961]/70 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
          <QuoteIcon size={34} className="mx-auto text-[#C9A961] opacity-90" />
          <blockquote className="mt-8 font-[Cormorant_Garamond] italic font-light text-[32px] sm:text-[40px] md:text-[52px] leading-[1.2] tracking-tight text-[#F2EEE5]">
            “{favoriteQuote.text}”
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="h-[1px] w-12 bg-[#C9A961]" />
            <span className="font-[Manrope] text-[11px] tracking-[0.36em] uppercase text-[#C9A961]">
              {favoriteQuote.author}
            </span>
            <span className="h-[1px] w-12 bg-[#C9A961]" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[#0A0A0A] border-t border-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-[1px] w-8 bg-[#C9A961]" />
            <span className="font-[Manrope] text-[10.5px] tracking-[0.36em] uppercase text-[#8F8878]">
              Languages
            </span>
          </div>
          <h2 className="font-[Cormorant_Garamond] font-light text-[#F2EEE5] text-[38px] md:text-[48px] leading-[1.1] tracking-tight">
            Words that feel like <span className="italic text-[#C9A961] font-normal">home</span>.
          </h2>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {languages.map((l) => (
              <div
                key={l.name}
                className="bg-[#111111] border border-[#1F1F1F] px-5 py-5 hover:border-[#C9A961] transition-colors duration-300"
              >
                <div className="font-[Cormorant_Garamond] text-[24px] text-[#F2EEE5]">
                  {l.name}
                </div>
                <div className="mt-1 font-[Manrope] text-[10.5px] uppercase tracking-[0.28em] text-[#7A7364]">
                  {l.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Quote;
