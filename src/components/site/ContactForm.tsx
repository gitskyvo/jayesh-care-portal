import { useState } from "react";
import Reveal from "./Reveal";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    description: "",
    preferred: "WhatsApp",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to email / WhatsApp webhook
    console.log("Contact form submission:", form);
    setSubmitted(true);
  };

  const update = (k: string, v: string) => setForm(s => ({ ...s, [k]: v }));

  return (
    <section id="contact" className="bg-background py-24">
      <div className="container max-w-3xl">
        <Reveal>
          <div className="text-center">
            <span className="section-label">Request a Callback</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Not ready to chat? <em className="text-[#7B509A]">We'll reach out.</em></h2>
            <div className="gold-divider my-7" />
            <p className="text-foreground/70 max-w-xl mx-auto">
              Share a few details and our clinic team will get back to you within 24 hours.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 bg-white border border-border/60 rounded-2xl p-8 md:p-10 shadow-soft">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-14 h-14 text-[#7B509A] mx-auto" />
                <h3 className="mt-5 font-serif text-2xl">Thank you.</h3>
                <p className="mt-3 text-foreground/75">We will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                <div className="sm:col-span-1">
                  <label className="text-xs uppercase tracking-wider text-foreground/60 font-medium">Name *</label>
                  <input required value={form.name} onChange={e => update("name", e.target.value)}
                    className="mt-2 w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:border-[#7B509A] transition-colors" />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-xs uppercase tracking-wider text-foreground/60 font-medium">Phone *</label>
                  <input required type="tel" value={form.phone} onChange={e => update("phone", e.target.value)}
                    className="mt-2 w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:border-[#7B509A] transition-colors" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-foreground/60 font-medium">City</label>
                  <input value={form.city} onChange={e => update("city", e.target.value)}
                    className="mt-2 w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:border-[#7B509A] transition-colors" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-foreground/60 font-medium">Brief description of the situation *</label>
                  <textarea required rows={3} value={form.description} onChange={e => update("description", e.target.value)}
                    placeholder="Please mention the specific type, e.g. Oral Cancer or Breast Cancer."
                    className="mt-2 w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:border-[#7B509A] transition-colors resize-none" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-foreground/60 font-medium">Preferred contact method</label>
                  <div className="mt-3 flex gap-6">
                    {["WhatsApp", "Phone call"].map(opt => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="preferred" value={opt}
                          checked={form.preferred === opt}
                          onChange={e => update("preferred", e.target.value)}
                          className="accent-[#7B509A]" />
                        <span className="text-sm text-foreground/80">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="sm:col-span-2 mt-2">
                  <button type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#7B509A] hover:bg-[#6a4486] text-white px-7 py-4 rounded-full font-medium transition-all shadow-[0_14px_40px_-12px_hsl(var(--purple)/0.7)] hover:translate-y-[-2px]">
                    <Send className="w-4 h-4" /> Request a Callback
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
