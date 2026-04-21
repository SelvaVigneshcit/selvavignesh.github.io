import React from "react";
import { profile, aboutParagraphs } from "../mock/mockData";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F6EEDC]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] w-full max-w-[380px]">
            <div className="absolute inset-0 overflow-hidden shadow-[0_30px_80px_-40px_rgba(44,31,20,0.4)]">
              <img
                src={profile.aboutImage}
                alt="A quiet moment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -right-3 -bottom-3 h-24 w-24 border border-[#B86B4B]/70" />
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-[1px] w-8 bg-[#B86B4B]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#6B5A4A]">
              About me
            </span>
          </div>

          <h2 className="font-[Playfair_Display] text-[#2C1F14] text-[40px] md:text-[54px] leading-[1.05] tracking-tight">
            A little <span className="italic text-[#B86B4B]">about</span> me —
          </h2>

          <div className="mt-8 space-y-5 text-[16px] md:text-[17px] leading-[1.9] text-[#3D2C1E]">
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
              <div key={k} className="border-t border-[#D8C6A8] pt-3">
                <div className="text-[10.5px] uppercase tracking-[0.24em] text-[#8A7458]">
                  {k}
                </div>
                <div className="mt-1 font-[Playfair_Display] text-[#2C1F14] text-[17px]">
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
