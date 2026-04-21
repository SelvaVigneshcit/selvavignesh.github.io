import React from "react";
import { profile } from "../mock/mockData";

const Footer = () => {
  return (
    <footer className="bg-[#2C1F14] text-[#E3D5BD] py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-[Playfair_Display] italic text-[22px] text-[#FAF5EC]">
          {profile.shortName.toLowerCase()}.
        </div>
        <div className="text-[12px] tracking-[0.24em] uppercase text-[#C9A869]">
          a gentle introduction
        </div>
        <div className="text-[12px] text-[#D8C6A8]/75">
          © {new Date().getFullYear()} {profile.fullName} — made with warmth.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
