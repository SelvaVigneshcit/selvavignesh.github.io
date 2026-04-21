import React from "react";
import { MapPin, ArrowDown } from "lucide-react";
import { profile } from "../mock/mockData";

const Hero = () => {
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden">
      {/* subtle gold glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(900px 400px at 85% 15%, rgba(201,169,97,0.10), transparent 60%), radial-gradient(700px 340px at 10% 90%, rgba(201,169,97,0.05), transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
        <div className="md:col-span-7 order-2 md:order-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-10 bg-[#C9A961]" />
            <span className="font-[Manrope] text-[10.5px] tracking-[0.36em] uppercase text-[#8F8878]">
              An Introduction
            </span>
          </div>

          <h1 className="font-[Cormorant_Garamond] font-light text-[#F2EEE5] leading-[0.98] tracking-tight text-[56px] sm:text-[72px] md:text-[88px] lg:text-[104px]">
            I am <span className="italic text-[#C9A961] font-normal">{profile.shortName}</span>.
          </h1>

          <p className="font-[Cormorant_Garamond] italic text-[22px] md:text-[26px] text-[#C9C3B3] mt-5 md:mt-6 max-w-xl">
            {profile.tagline}
          </p>

          <p className="font-[Manrope] font-light mt-6 md:mt-8 text-[15px] md:text-[15.5px] leading-[1.9] text-[#A8A195] max-w-xl">
            {profile.intro}
          </p>

          <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#262626] font-[Manrope] text-[11.5px] tracking-wide text-[#C9C3B3]">
              <MapPin size={12} className="text-[#C9A961]" />
              {profile.location}
            </span>
            {[`${profile.age} years`, profile.height, profile.zodiac].map((t) => (
              <span
                key={t}
                className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#262626] font-[Manrope] text-[11.5px] tracking-wide text-[#C9C3B3]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-10 md:mt-14 flex items-center gap-4">
            <button
              onClick={scrollToAbout}
              className="group inline-flex items-center gap-2 font-[Manrope] text-[11.5px] uppercase tracking-[0.3em] text-[#F2EEE5] hover:text-[#C9A961] transition-colors duration-300"
            >
              Read more
              <ArrowDown
                size={14}
                className="group-hover:translate-y-0.5 transition-transform duration-300"
              />
            </button>
          </div>
        </div>

        {/* Portrait */}
        <div className="md:col-span-5 order-1 md:order-2 relative">
          <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto">
            <div className="absolute -inset-3 md:-inset-5 border border-[#C9A961]/60" />
            <div className="absolute inset-0 overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)]">
              <img
                src={profile.heroImage}
                alt={profile.fullName}
                className="w-full h-full object-cover"
                style={{ filter: "saturate(0.9) contrast(1.05)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#0A0A0A] border border-[#2A2A2A] px-4 py-2 font-[Cormorant_Garamond] italic text-[#C9A961] text-[15px]">
              est. {new Date().getFullYear() - profile.age}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
