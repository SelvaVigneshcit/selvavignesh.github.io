import React from "react";
import { Star } from "lucide-react";
import { family, lifeGoals, profile } from "../mock/mockData";

const FamilyLife = () => {
  return (
    <section id="family" className="relative py-24 md:py-32 overflow-hidden bg-[#0D0D0D] border-t border-[#1A1A1A]">
      <div className="absolute inset-0">
        <img
          src={profile.homeImage}
          alt=""
          className="w-full h-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#0D0D0D]/95 to-[#0A0A0A]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-[1px] w-8 bg-[#C9A961]" />
            <span className="font-[Manrope] text-[10.5px] tracking-[0.36em] uppercase text-[#8F8878]">
              Family
            </span>
          </div>
          <h2 className="font-[Cormorant_Garamond] font-light text-[#F2EEE5] text-[40px] md:text-[52px] leading-[1.05] tracking-tight">
            The people who made <span className="italic text-[#C9A961] font-normal">me</span>.
          </h2>
          <p className="mt-6 font-[Manrope] font-light text-[15.5px] leading-[1.9] text-[#C9C3B3]">
            {family.summary}
          </p>
          <p className="mt-4 font-[Cormorant_Garamond] italic text-[18px] leading-[1.7] text-[#A8A195]">
            “{family.values}”
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-[1px] w-8 bg-[#C9A961]" />
            <span className="font-[Manrope] text-[10.5px] tracking-[0.36em] uppercase text-[#8F8878]">
              Life Goals
            </span>
          </div>
          <h3 className="font-[Cormorant_Garamond] font-light text-[#F2EEE5] text-[30px] md:text-[36px] leading-tight tracking-tight">
            The kind of life I hope to build —
          </h3>
          <ul className="mt-8 space-y-5">
            {lifeGoals.map((g, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1.5 flex-shrink-0">
                  <Star size={14} className="text-[#C9A961]" fill="#C9A961" />
                </span>
                <span className="font-[Manrope] font-light text-[15px] leading-[1.8] text-[#C9C3B3]">
                  {g}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FamilyLife;
