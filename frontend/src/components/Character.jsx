import React from "react";
import {
  Heart,
  Link as LinkIcon,
  Handshake,
  Sparkles,
  Home,
  Smile,
} from "lucide-react";
import { values } from "../mock/mockData";

const iconMap = { Heart, Link: LinkIcon, Handshake, Sparkles, Home, Smile };

const Character = () => {
  return (
    <section id="values" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-[1px] w-8 bg-[#C9A961]" />
          <span className="font-[Manrope] text-[10.5px] tracking-[0.36em] uppercase text-[#8F8878]">
            What I hope for
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="font-[Cormorant_Garamond] font-light text-[#F2EEE5] text-[44px] md:text-[60px] leading-[1.02] tracking-tight max-w-2xl">
            The qualities I hope for in my <span className="italic text-[#C9A961] font-normal">partner</span>.
          </h2>
          <p className="max-w-md font-[Manrope] font-light text-[14.5px] leading-[1.85] text-[#A8A195]">
            Not a checklist — just the small, true things that I believe make
            a home, and a life together, feel right.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#1F1F1F] border border-[#1F1F1F]">
          {values.map((v) => {
            const Icon = iconMap[v.icon] || Heart;
            return (
              <div
                key={v.title}
                className="group relative bg-[#0A0A0A] p-8 md:p-10 hover:bg-[#111111] transition-colors duration-500"
              >
                <div className="h-11 w-11 rounded-full bg-[#141414] border border-[#2A2A2A] flex items-center justify-center group-hover:bg-[#C9A961] group-hover:border-[#C9A961] transition-colors duration-500">
                  <Icon
                    size={17}
                    className="text-[#C9A961] group-hover:text-[#0A0A0A] transition-colors duration-500"
                  />
                </div>
                <h3 className="mt-6 font-[Cormorant_Garamond] text-[28px] text-[#F2EEE5] tracking-tight leading-tight">
                  {v.title}
                </h3>
                <p className="mt-3 font-[Manrope] font-light text-[14px] leading-[1.85] text-[#A8A195]">
                  {v.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Character;
