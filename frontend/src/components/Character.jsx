import React from "react";
import { Heart, Compass, Feather, Sparkles, BookOpen, Home } from "lucide-react";
import { values } from "../mock/mockData";

const iconMap = { Heart, Compass, Feather, Sparkles, BookOpen, Home };

const Character = () => {
  return (
    <section id="values" className="py-24 md:py-32 bg-[#FAF5EC]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-[1px] w-8 bg-[#B86B4B]" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#6B5A4A]">
            Character & values
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="font-[Playfair_Display] text-[#2C1F14] text-[40px] md:text-[54px] leading-[1.05] tracking-tight max-w-2xl">
            What I hold <span className="italic text-[#B86B4B]">close.</span>
          </h2>
          <p className="max-w-md text-[15px] leading-[1.85] text-[#4A3A2A]">
            These aren't things I aspire to — they are the small principles that
            already run quietly under my days.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#E3D5BD] border border-[#E3D5BD]">
          {values.map((v) => {
            const Icon = iconMap[v.icon] || Heart;
            return (
              <div
                key={v.title}
                className="group relative bg-[#FAF5EC] p-8 md:p-10 hover:bg-[#F2E9D8] transition-colors duration-500"
              >
                <div className="h-10 w-10 rounded-full bg-[#F2E9D8] border border-[#D8C6A8] flex items-center justify-center group-hover:bg-[#B86B4B] group-hover:border-[#B86B4B] transition-colors duration-500">
                  <Icon
                    size={17}
                    className="text-[#B86B4B] group-hover:text-[#FAF5EC] transition-colors duration-500"
                  />
                </div>
                <h3 className="mt-6 font-[Playfair_Display] text-[26px] text-[#2C1F14] tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.85] text-[#4A3A2A]">
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
