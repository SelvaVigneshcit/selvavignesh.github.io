import React from "react";
import { profile, aboutParagraphs } from "../mock/mockData";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0D0D0D] border-t border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] w-full max-w-[380px]">
            <div className="absolute inset-0 overflow-hidden shadow-[0_30px_90px_-30px_rgba(0,0,0,0.9)]">
              <img
                src={profile.aboutImage}
                alt="A quieter moment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 via-transparent to-transparent" />
            </div>
            <div className="absolute -right-3 -bottom-3 h-24 w-24 border border-[#C9A961]/70" />
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-[1px] w-8 bg-[#C9A961]" />
            <span className="font-[Manrope] text-[10.5px] tracking-[0.36em] uppercase text-[#8F8878]">
              About
            </span>
          </div>

          <h2 className="font-[Cormorant_Garamond] font-light text-[#F2EEE5] text-[44px] md:text-[60px] leading-[1.02] tracking-tight">
            A little <span className="italic text-[#C9A961] font-normal">about</span> me.
          </h2>

          <div className="mt-8 space-y-5 font-[Manrope] font-light text-[15.5px] md:text-[16px] leading-[1.9] text-[#C9C3B3]">
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
            {[
              ["Height", profile.height],
              ["Zodiac", profile.zodiac],
              ["Diet", profile.diet],
              ["Based in", profile.location.split(",")[0]],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-[#2A2A2A] pt-3">
                <div className="font-[Manrope] text-[10px] uppercase tracking-[0.3em] text-[#7A7364]">
                  {k}
                </div>
                <div className="mt-1 font-[Cormorant_Garamond] text-[#F2EEE5] text-[19px]">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
