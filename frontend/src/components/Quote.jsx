import React from "react";
import { Quote as QuoteIcon } from "lucide-react";
import { favoriteQuote, profile } from "../mock/mockData";

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

      {/* Horoscope section */}
      <section id="horoscope" className="py-24 md:py-32 bg-[#0A0A0A] border-t border-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-[1px] w-8 bg-[#C9A961]" />
            <span className="font-[Manrope] text-[10.5px] tracking-[0.36em] uppercase text-[#8F8878]">
              Jathagam
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <h2 className="font-[Cormorant_Garamond] font-light text-[#F2EEE5] text-[44px] md:text-[56px] leading-[1.02] tracking-tight">
              <span className="italic text-[#C9A961] font-normal">Horoscope</span>
            </h2>
            <div className="font-[Manrope] font-light text-[13.5px] text-[#A8A195] tracking-wide">
              <span className="text-[#7A7364]">Born</span>{" · "}
              {profile.dob}
              <span className="mx-2 text-[#7A7364]">|</span>
              <span className="text-[#7A7364]">Rasi</span>{" · "}
              {profile.rasi}
              <span className="mx-2 text-[#7A7364]">|</span>
              <span className="text-[#7A7364]">Nakshatra</span>{" · "}
              {profile.nakshatra}
            </div>
          </div>

          <div className="relative bg-[#111111] border border-[#1F1F1F] p-4 md:p-6">
            <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A961]/60 to-transparent" />
            <div className="relative w-full overflow-hidden">
              <img
                src={profile.horoscopeImage}
                alt="Horoscope — Selva Vignesh"
                className="w-full h-auto max-h-[720px] object-contain mx-auto"
              />
            </div>
          </div>

          <p className="mt-6 font-[Cormorant_Garamond] italic text-[15.5px] text-[#8F8878] text-center">
            Shared with the respect and reverence it deserves.
          </p>
        </div>
      </section>
    </>
  );
};

export default Quote;
