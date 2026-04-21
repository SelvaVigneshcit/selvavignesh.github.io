import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { career, education } from "../mock/mockData";

const TimelineItem = ({ item, type }) => (
  <div className="relative pl-8 pb-10 last:pb-0">
    <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-[#B86B4B] ring-4 ring-[#FAF5EC]" />
    <span className="absolute left-[4.5px] top-5 bottom-0 w-px bg-[#E3D5BD]" />
    <div className="text-[11px] uppercase tracking-[0.28em] text-[#8A7458]">
      {item.year}
    </div>
    <h4 className="mt-2 font-[Playfair_Display] text-[22px] md:text-[24px] text-[#2C1F14] leading-snug">
      {type === "work" ? item.role : item.degree}
    </h4>
    <div className="mt-1 text-[14.5px] text-[#6B5A4A]">{item.place}</div>
    {item.note && (
      <p className="mt-2 italic text-[14.5px] text-[#4A3A2A]/85 font-[Playfair_Display]">
        {item.note}
      </p>
    )}
  </div>
);

const CareerEducation = () => {
  return (
    <section id="journey" className="py-24 md:py-32 bg-[#FAF5EC]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-[1px] w-8 bg-[#B86B4B]" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#6B5A4A]">
            The journey
          </span>
        </div>
        <h2 className="font-[Playfair_Display] text-[#2C1F14] text-[40px] md:text-[54px] leading-[1.05] tracking-tight max-w-3xl">
          Where I've worked & <span className="italic text-[#B86B4B]">studied</span>
        </h2>
        <p className="mt-5 max-w-2xl text-[15.5px] leading-[1.9] text-[#4A3A2A]">
          A short list of the rooms I have grown in — the people, the places, and the quiet years in between.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase size={18} className="text-[#B86B4B]" />
              <h3 className="font-[Playfair_Display] text-[22px] text-[#2C1F14] tracking-wide">
                Occupation
              </h3>
            </div>
            {career.map((c, i) => (
              <TimelineItem key={i} item={c} type="work" />
            ))}
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={20} className="text-[#B86B4B]" />
              <h3 className="font-[Playfair_Display] text-[22px] text-[#2C1F14] tracking-wide">
                Education
              </h3>
            </div>
            {education.map((e, i) => (
              <TimelineItem key={i} item={e} type="edu" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerEducation;
