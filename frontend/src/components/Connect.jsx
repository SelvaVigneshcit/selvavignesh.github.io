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
        title: "Something's missing",
        description: "Please fill your name, email and a short note.",
      });
      return;
    }
    try {
      const prev = JSON.parse(localStorage.getItem("persona_messages") || "[]");
      prev.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem("persona_messages", JSON.stringify(prev));
    } catch (_err) {
      // ignore storage errors
    }
    setSent(true);
    toast({
      title: "Thank you.",
      description: "Your note has been received. I'll respond personally.",
    });
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="connect" className="py-24 md:py-32 bg-[#0D0D0D] border-t border-[#1A1A1A]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-[1px] w-8 bg-[#C9A961]" />
            <span className="font-[Manrope] text-[10.5px] tracking-[0.36em] uppercase text-[#8F8878]">
              Connect
            </span>
          </div>
          <h2 className="font-[Cormorant_Garamond] font-light text-[#F2EEE5] text-[42px] md:text-[52px] leading-[1.02] tracking-tight">
            A proper <span className="italic text-[#C9A961] font-normal">introduction</span>.
          </h2>
          <p className="mt-6 font-[Manrope] font-light text-[15px] leading-[1.9] text-[#A8A195] max-w-md">
            {connectInfo.note}
          </p>
          <a
            href={`mailto:${connectInfo.email}`}
            className="mt-8 inline-flex items-center gap-3 font-[Manrope] text-[14.5px] text-[#F2EEE5] hover:text-[#C9A961] transition-colors duration-300"
          >
            <Mail size={16} className="text-[#C9A961]" />
            {connectInfo.email}
          </a>
          <div className="mt-10 pt-8 border-t border-[#262626] font-[Cormorant_Garamond] italic text-[14px] text-[#7A7364]">
            — sincerely, {profile.shortName}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="md:col-span-7 bg-[#0A0A0A] border border-[#1F1F1F] p-6 md:p-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block font-[Manrope] text-[10.5px] uppercase tracking-[0.3em] text-[#7A7364] mb-2">
                Your name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                className="w-full bg-transparent border-b border-[#2A2A2A] focus:border-[#C9A961] outline-none py-2 text-[#F2EEE5] text-[15px] font-[Manrope] font-light transition-colors duration-300"
                placeholder="Priya / Mrs. Menon"
              />
            </div>
            <div>
              <label className="block font-[Manrope] text-[10.5px] uppercase tracking-[0.3em] text-[#7A7364] mb-2">
                Your email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                className="w-full bg-transparent border-b border-[#2A2A2A] focus:border-[#C9A961] outline-none py-2 text-[#F2EEE5] text-[15px] font-[Manrope] font-light transition-colors duration-300"
                placeholder="name@domain.com"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block font-[Manrope] text-[10.5px] uppercase tracking-[0.3em] text-[#7A7364] mb-2">
              A short note
            </label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={onChange}
              className="w-full bg-transparent border-b border-[#2A2A2A] focus:border-[#C9A961] outline-none py-2 text-[#F2EEE5] text-[15px] font-[Manrope] font-light resize-none transition-colors duration-300"
              placeholder="A little about you, or your family — no formality needed."
            />
          </div>

          <button
            type="submit"
            className="mt-8 inline-flex items-center gap-3 px-7 py-3.5 bg-[#C9A961] text-[#0A0A0A] hover:bg-[#DFC480] transition-colors duration-300 font-[Manrope] text-[11.5px] uppercase tracking-[0.3em] font-medium"
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
