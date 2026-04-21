import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../mock/mockData";

const links = [
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "hobbies", label: "Hobbies" },
  { id: "values", label: "Values" },
  { id: "family", label: "Family" },
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
          ? "bg-[#FAF5EC]/85 backdrop-blur-md border-b border-[#E3D5BD]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <span className="font-[Playfair_Display] italic text-[22px] md:text-[24px] text-[#2C1F14] tracking-tight">
            {profile.shortName.toLowerCase()}.
          </span>
          <span className="hidden md:block h-[1px] w-8 bg-[#B86B4B] group-hover:w-12 transition-[width] duration-300" />
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="text-[13px] uppercase tracking-[0.18em] text-[#2C1F14]/80 hover:text-[#B86B4B] transition-colors duration-300"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-[#2C1F14]"
          aria-label="menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#FAF5EC] border-t border-[#E3D5BD]">
          <ul className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className="w-full text-left py-2 text-[14px] uppercase tracking-[0.18em] text-[#2C1F14]/85"
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
