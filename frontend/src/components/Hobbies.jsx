import React from "react";
import { hobbies, interests } from "../mock/mockData";

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-24 md:py-32 bg-[#F6EEDC]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-[1px] w-8 bg-[#B86B4B]" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#6B5A4A]">
            Hobbies & hours well spent
          </span>
        </div>
        <h2 className="font-[Playfair_Display] text-[#2C1F14] text-[40px] md:text-[54px] leading-[1.05] tracking-tight max-w-3xl">
          Small <span className="italic text-[#B86B4B]">rituals</span> that make me, me.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {hobbies.map((h, i) => (
            <article
              key={h.title}
              className={`group relative overflow-hidden bg-[#FAF5EC] border border-[#E3D5BD] ${
                i === 1 ? "md:translate-y-8" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={h.image}
                  alt={h.title}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1F14]/35 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10.5px] uppercase tracking-[0.3em] text-[#B86B4B]">
                    0{i + 1}
                  </span>
                  <span className="h-[1px] flex-1 bg-[#E3D5BD]" />
                </div>
                <h3 className="font-[Playfair_Display] text-[24px] text-[#2C1F14] leading-tight">
                  {h.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.8] text-[#4A3A2A]">
                  {h.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 md:mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[#B86B4B]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#6B5A4A]">
              A few other things I love
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {interests.map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-[#FAF5EC] border border-[#E3D5BD] text-[13.5px] text-[#2C1F14] font-[Playfair_Display] italic hover:border-[#B86B4B] hover:text-[#B86B4B] transition-colors duration-300 cursor-default"
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
