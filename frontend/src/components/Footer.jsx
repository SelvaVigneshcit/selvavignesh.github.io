import React from "react";
import { profile } from "../mock/mockData";

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-[#A8A195] py-12 border-t border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-[Cormorant_Garamond] text-[24px] text-[#F2EEE5]">
          {profile.shortName}
          <span className="text-[#C9A961]">.</span>
        </div>
        <div className="font-[Manrope] text-[10.5px] tracking-[0.36em] uppercase text-[#C9A961]">
          An Introduction
        </div>
        <div className="font-[Manrope] text-[11.5px] text-[#7A7364]">
          © {new Date().getFullYear()} {profile.fullName} — all rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
