import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { career, education } from "../mock/mockData";

const TimelineItem = ({ item, type }) => (
  <div className="relative pl-8 pb-10 last:pb-0">
    <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-[#C9A961] ring-4 ring-[#0A0A0A]" />
    <span className="absolute left-[4.5px] top-5 bottom-0 w-px bg-[#262626]" />
    <div className="font-[Manrope] text-[10.5px] uppercase tracking-[0.32em] text-[#7A7364]">
      {item.year}
    </div>
    <h4 className="mt-2 font-[Cormorant_Garamond] text-[24px] md:text-[26px] text-[#F2EEE5] leading-snug">
      {type === "work" ? item.role : item.degree}
    </h4>
    <div className="mt-1 font-[Manrope] text-[14px] text-[#A8A195]">{item.place}</div>
    {item.note && (
      <p className="mt-2 italic font-[Cormorant_Garamond] text-[15px] text-[#8F8878]">
        {item.note}
      </p>
    )}
  </div>
);

const CareerEducation = () => {
  return (
    <section id="journey" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-[1px] w-8 bg-[#C9A961]" />
          <span className="font-[Manrope] text-[10.5px] tracking-[0.36em] uppercase text-[#8F8878]">
            The Journey
          </span>
        </div>
        <h2 className="font-[Cormorant_Garamond] font-light text-[#F2EEE5] text-[44px] md:text-[60px] leading-[1.02] tracking-tight max-w-3xl">
          Where I've worked &amp; <span className="italic text-[#C9A961] font-normal">studied</span>
        </h2>
        <p className="mt-5 max-w-2xl font-[Manrope] font-light text-[15px] leading-[1.9] text-[#A8A195]">
          A short record of the rooms I've grown in — the firms, the classrooms,
          and the quiet years in between.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase size={17} className="text-[#C9A961]" />
              <h3 className="font-[Cormorant_Garamond] text-[22px] text-[#F2EEE5] tracking-wide">
                Occupation
              </h3>
            </div>
            {career.map((c, i) => (
              <TimelineItem key={i} item={c} type="work" />
            ))}
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={19} className="text-[#C9A961]" />
              <h3 className="font-[Cormorant_Garamond] text-[22px] text-[#F2EEE5] tracking-wide">
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
