import React from "react";
import { Quote as QuoteIcon } from "lucide-react";
import { favoriteQuote, languages } from "../mock/mockData";

const Quote = () => {
  return (
    <>
      <section className="py-24 md:py-32 bg-[#2C1F14] text-[#F6EEDC] relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(700px 300px at 20% 30%, rgba(201,168,105,0.35), transparent 60%), radial-gradient(600px 260px at 80% 80%, rgba(184,107,75,0.3), transparent 60%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
          <QuoteIcon size={34} className="mx-auto text-[#C9A869] opacity-80" />
          <blockquote className="mt-8 font-[Playfair_Display] italic text-[30px] sm:text-[38px] md:text-[48px] leading-[1.2] tracking-tight text-[#F6EEDC]">
            “{favoriteQuote.text}”
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="h-[1px] w-12 bg-[#C9A869]" />
            <span className="text-[12px] tracking-[0.3em] uppercase text-[#C9A869]">
              {favoriteQuote.author}
            </span>
            <span className="h-[1px] w-12 bg-[#C9A869]" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[#FAF5EC]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-[1px] w-8 bg-[#B86B4B]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#6B5A4A]">
              Languages I speak
            </span>
          </div>
          <h2 className="font-[Playfair_Display] text-[#2C1F14] text-[34px] md:text-[44px] leading-[1.1] tracking-tight">
            Words that feel like <span className="italic text-[#B86B4B]">home</span>.
          </h2>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {languages.map((l) => (
              <div
                key={l.name}
                className="bg-[#F6EEDC] border border-[#E3D5BD] px-5 py-5 hover:border-[#B86B4B] transition-colors duration-300"
              >
                <div className="font-[Playfair_Display] text-[22px] text-[#2C1F14]">
                  {l.name}
                </div>
                <div className="mt-1 text-[11.5px] uppercase tracking-[0.22em] text-[#8A7458]">
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
