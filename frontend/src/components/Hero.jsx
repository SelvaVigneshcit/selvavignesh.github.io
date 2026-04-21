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
      {/* soft warm grain layer */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(1200px 500px at 80% 10%, rgba(201,168,105,0.18), transparent 60%), radial-gradient(900px 400px at 10% 90%, rgba(184,107,75,0.14), transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
        {/* Left */}
        <div className="md:col-span-7 order-2 md:order-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-10 bg-[#B86B4B]" />
            <span className="text-[11px] tracking-[0.32em] uppercase text-[#6B5A4A]">
              A gentle hello
            </span>
          </div>

          <h1 className="font-[Playfair_Display] text-[#2C1F14] leading-[1.02] tracking-tight text-[52px] sm:text-[64px] md:text-[80px] lg:text-[92px]">
            I am <span className="italic text-[#B86B4B]">{profile.shortName}</span>.
          </h1>

          <p className="font-[Playfair_Display] italic text-[20px] md:text-[24px] text-[#4A3A2A] mt-4 md:mt-6 max-w-xl">
            {profile.tagline}
          </p>

          <p className="mt-6 md:mt-8 text-[15.5px] md:text-[16px] leading-[1.85] text-[#4A3A2A] max-w-xl">
            {profile.intro}
          </p>

          <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2E9D8] border border-[#E3D5BD] text-[12.5px] text-[#2C1F14]">
              <MapPin size={13} className="text-[#B86B4B]" />
              {profile.location}
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#F2E9D8] border border-[#E3D5BD] text-[12.5px] text-[#2C1F14]">
              {profile.age} years
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#F2E9D8] border border-[#E3D5BD] text-[12.5px] text-[#2C1F14]">
              {profile.height}
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#F2E9D8] border border-[#E3D5BD] text-[12.5px] text-[#2C1F14]">
              {profile.zodiac}
            </span>
          </div>

          <div className="mt-10 md:mt-14 flex items-center gap-4">
            <button
              onClick={scrollToAbout}
              className="group inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.24em] text-[#2C1F14] hover:text-[#B86B4B] transition-colors duration-300"
            >
              Read more about me
              <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Right — Portrait */}
        <div className="md:col-span-5 order-1 md:order-2 relative">
          <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto">
            <div className="absolute -inset-3 md:-inset-5 border border-[#C9A869]/70 rounded-[2px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[2px] shadow-[0_30px_80px_-40px_rgba(44,31,20,0.45)]">
              <img
                src={profile.heroImage}
                alt={profile.fullName}
                className="w-full h-full object-cover"
                style={{ filter: "saturate(0.95) contrast(1.02)" }}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#FAF5EC] border border-[#E3D5BD] px-4 py-2 font-[Playfair_Display] italic text-[#2C1F14] text-[15px]">
              est. {new Date().getFullYear() - profile.age}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
