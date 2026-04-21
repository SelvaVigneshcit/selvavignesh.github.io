import React from "react";
import { Star } from "lucide-react";
import { family, lifeGoals, profile } from "../mock/mockData";

const FamilyLife = () => {
  return (
    <section id="family" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={profile.homeImage}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F6EEDC] via-[#F6EEDC]/98 to-[#EDE0C6]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-[1px] w-8 bg-[#B86B4B]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#6B5A4A]">
              Family
            </span>
          </div>
          <h2 className="font-[Playfair_Display] text-[#2C1F14] text-[38px] md:text-[48px] leading-[1.05] tracking-tight">
            The people who made <span className="italic text-[#B86B4B]">me.</span>
          </h2>
          <p className="mt-6 text-[16px] leading-[1.9] text-[#3D2C1E]">
            {family.summary}
          </p>
          <p className="mt-4 text-[16px] leading-[1.9] text-[#3D2C1E] italic font-[Playfair_Display]">
            “{family.values}”
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-[1px] w-8 bg-[#B86B4B]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#6B5A4A]">
              Life goals
            </span>
          </div>
          <h3 className="font-[Playfair_Display] text-[#2C1F14] text-[28px] md:text-[34px] leading-tight tracking-tight">
            The kind of life I hope to build —
          </h3>
          <ul className="mt-8 space-y-5">
            {lifeGoals.map((g, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1.5 flex-shrink-0">
                  <Star size={15} className="text-[#C9A869]" fill="#C9A869" />
                </span>
                <span className="text-[15.5px] leading-[1.8] text-[#3D2C1E]">
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
