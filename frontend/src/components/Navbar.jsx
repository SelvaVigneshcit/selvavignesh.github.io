import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../mock/mockData";

const links = [
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "hobbies", label: "Pursuits" },
  { id: "values", label: "Values" },
  { id: "family", label: "Family" },
  { id: "horoscope", label: "Horoscope" },
  { id: "connect", label: "Connect" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,backdrop-filter,border] duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/85 backdrop-blur-md border-b border-[#1F1F1F]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
        >
          <span className="font-[Cormorant_Garamond] text-[24px] md:text-[26px] text-[#F2EEE5] tracking-tight">
            {profile.shortName}
            <span className="text-[#C9A961]">.</span>
          </span>
          <span className="hidden md:block h-[1px] w-8 bg-[#C9A961] group-hover:w-12 transition-[width] duration-300" />
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="font-[Manrope] text-[11.5px] uppercase tracking-[0.24em] text-[#A8A195] hover:text-[#C9A961] transition-colors duration-300"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-[#F2EEE5]"
          aria-label="menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[#1F1F1F]">
          <ul className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className="w-full text-left py-2 font-[Manrope] text-[12px] uppercase tracking-[0.24em] text-[#A8A195]"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
