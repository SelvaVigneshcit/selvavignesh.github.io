import React, { useState } from "react";
import { Mail, Send, Check } from "lucide-react";
import { connectInfo, profile } from "../mock/mockData";
import { useToast } from "../hooks/use-toast";

const Connect = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({
        title: "A small something is missing",
        description: "Please fill your name, email and a short note.",
      });
      return;
    }
    // Store locally as mock
    try {
      const prev = JSON.parse(localStorage.getItem("persona_messages") || "[]");
      prev.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem("persona_messages", JSON.stringify(prev));
    } catch (_err) {
      // ignore storage errors
    }
    setSent(true);
    toast({
      title: "Thank you, truly.",
      description: "Your message has been noted. I'll write back soon.",
    });
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="connect" className="py-24 md:py-32 bg-[#F6EEDC]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-[1px] w-8 bg-[#B86B4B]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#6B5A4A]">
              Connect
            </span>
          </div>
          <h2 className="font-[Playfair_Display] text-[#2C1F14] text-[38px] md:text-[48px] leading-[1.05] tracking-tight">
            Say <span className="italic text-[#B86B4B]">hello.</span>
          </h2>
          <p className="mt-6 text-[15.5px] leading-[1.9] text-[#4A3A2A] max-w-md">
            {connectInfo.note}
          </p>
          <a
            href={`mailto:${connectInfo.email}`}
            className="mt-8 inline-flex items-center gap-3 text-[15px] text-[#2C1F14] hover:text-[#B86B4B] transition-colors duration-300"
          >
            <Mail size={17} className="text-[#B86B4B]" />
            {connectInfo.email}
          </a>
          <div className="mt-10 pt-8 border-t border-[#D8C6A8] text-[13px] text-[#6B5A4A] italic font-[Playfair_Display]">
            — with warmth, {profile.shortName}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="md:col-span-7 bg-[#FAF5EC] border border-[#E3D5BD] p-6 md:p-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[11px] uppercase tracking-[0.24em] text-[#8A7458] mb-2">
                Your name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                className="w-full bg-transparent border-b border-[#D8C6A8] focus:border-[#B86B4B] outline-none py-2 text-[#2C1F14] text-[15px] transition-colors duration-300"
                placeholder="Priya / Mrs. Menon"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-[0.24em] text-[#8A7458] mb-2">
                Your email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                className="w-full bg-transparent border-b border-[#D8C6A8] focus:border-[#B86B4B] outline-none py-2 text-[#2C1F14] text-[15px] transition-colors duration-300"
                placeholder="priya@email.com"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-[11px] uppercase tracking-[0.24em] text-[#8A7458] mb-2">
              A short note
            </label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={onChange}
              className="w-full bg-transparent border-b border-[#D8C6A8] focus:border-[#B86B4B] outline-none py-2 text-[#2C1F14] text-[15px] resize-none transition-colors duration-300"
              placeholder="A little about you, or your family — no formality needed."
            />
          </div>

          <button
            type="submit"
            className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-[#2C1F14] text-[#FAF5EC] hover:bg-[#B86B4B] transition-colors duration-300 text-[12.5px] uppercase tracking-[0.22em]"
          >
            {sent ? (
              <>
                <Check size={15} /> Sent
              </>
            ) : (
              <>
                Send a note <Send size={14} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Connect;
