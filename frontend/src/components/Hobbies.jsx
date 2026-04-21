import React from "react";
import { hobbies, interests } from "../mock/mockData";

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-24 md:py-32 bg-[#0D0D0D] border-t border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-[1px] w-8 bg-[#C9A961]" />
          <span className="font-[Manrope] text-[10.5px] tracking-[0.36em] uppercase text-[#8F8878]">
            Pursuits &amp; Pastimes
          </span>
        </div>
        <h2 className="font-[Cormorant_Garamond] font-light text-[#F2EEE5] text-[44px] md:text-[60px] leading-[1.02] tracking-tight max-w-3xl">
          The things that keep me <span className="italic text-[#C9A961] font-normal">sharp</span>.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {hobbies.map((h, i) => (
            <article
              key={h.title}
              className={`group relative overflow-hidden bg-[#0A0A0A] border border-[#1F1F1F] hover:border-[#3A3020] transition-colors duration-500 ${
                i === 1 ? "md:translate-y-8" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={h.image}
                  alt={h.title}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                  style={{ filter: "saturate(0.85) contrast(1.05)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-[Manrope] text-[10px] uppercase tracking-[0.36em] text-[#C9A961]">
                    0{i + 1}
                  </span>
                  <span className="h-[1px] flex-1 bg-[#262626]" />
                </div>
                <h3 className="font-[Cormorant_Garamond] text-[26px] text-[#F2EEE5] leading-tight">
                  {h.title}
                </h3>
                <p className="mt-3 font-[Manrope] font-light text-[14px] leading-[1.8] text-[#A8A195]">
                  {h.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 md:mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[#C9A961]" />
            <span className="font-[Manrope] text-[10.5px] tracking-[0.36em] uppercase text-[#8F8878]">
              A few other pleasures
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {interests.map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-[#0A0A0A] border border-[#262626] font-[Cormorant_Garamond] italic text-[15px] text-[#C9C3B3] hover:border-[#C9A961] hover:text-[#C9A961] transition-colors duration-300 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
