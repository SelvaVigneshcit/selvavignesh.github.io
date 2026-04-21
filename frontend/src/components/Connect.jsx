import React from "react";
import { Phone } from "lucide-react";
import { connectInfo, profile } from "../mock/mockData";

const Connect = () => {
  return (
    <section id="connect" className="py-24 md:py-32 bg-[#0D0D0D] border-t border-[#1A1A1A]">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-[1px] w-8 bg-[#C9A961]" />
          <span className="font-[Manrope] text-[10.5px] tracking-[0.36em] uppercase text-[#8F8878]">
            Connect
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="md:col-span-7">
            <h2 className="font-[Cormorant_Garamond] font-light text-[#F2EEE5] text-[44px] md:text-[60px] leading-[1.02] tracking-tight">
              A proper <span className="italic text-[#C9A961] font-normal">introduction</span>.
            </h2>
            <p className="mt-6 font-[Manrope] font-light text-[15.5px] leading-[1.9] text-[#A8A195] max-w-xl">
              {connectInfo.note}
            </p>
            <div className="mt-10 font-[Cormorant_Garamond] italic text-[16px] text-[#8F8878]">
              — sincerely, {profile.shortName}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="bg-[#0A0A0A] border border-[#1F1F1F] p-6 md:p-8">
              <div className="font-[Manrope] text-[10.5px] uppercase tracking-[0.36em] text-[#7A7364] mb-6">
                Reach us
              </div>

              <a
                href={`tel:${connectInfo.phone.replace(/\s+/g, "")}`}
                className="group flex items-start gap-4 py-4 hover:border-[#C9A961]/60 transition-colors duration-300"
              >
                <span className="mt-1 h-10 w-10 rounded-full bg-[#141414] border border-[#2A2A2A] flex items-center justify-center group-hover:border-[#C9A961] transition-colors duration-300">
                  <Phone size={15} className="text-[#C9A961]" />
                </span>
                <span className="flex-1">
                  <span className="block font-[Manrope] text-[10px] uppercase tracking-[0.3em] text-[#7A7364]">
                    {connectInfo.phoneLabel}
                  </span>
                  <span className="block mt-1 font-[Cormorant_Garamond] text-[24px] text-[#F2EEE5] group-hover:text-[#C9A961] transition-colors duration-300">
                    {connectInfo.phone}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
