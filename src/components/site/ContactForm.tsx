import { useState, useRef } from "react";
import Reveal from "./Reveal";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

// ──────────────────────────────────────────────
// Web3Forms — update with your access key
// 1. Go to https://web3forms.com and enter your email
// 2. You'll receive an access key in your inbox
// 3. Paste it below
// ──────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setError("");

    try {
      const formData = new FormData(formRef.current);
      formData.append("access_key", "2f8ab4bf-3fce-4e7b-936e-bf7c16f09ecd");
      formData.append("subject", "New Callback Request – Dr. Jayesh Sharma Website");
      formData.append("from_name", "Dr. Jayesh Sharma Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        formRef.current.reset();
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err: any) {
      console.error("Web3Forms error:", err);
      setError(
        err?.message || "Something went wrong. Please try again or contact us directly."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="bg-background py-24">
      <div className="container max-w-3xl">
        <Reveal>
          <div className="text-center">
            <span className="section-label">Request a Callback</span>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Not ready to chat?{" "}
              <em className="text-[#7B509A]">We'll reach out.</em>
            </h2>
            <div className="gold-divider my-7" />
            <p className="text-foreground/70 max-w-xl mx-auto">
              Share a few details and our clinic team will get back to you within
              24 hours.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 bg-white border border-border/60 rounded-2xl p-8 md:p-10 shadow-soft">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-14 h-14 text-[#7B509A] mx-auto" />
                <h3 className="mt-5 font-serif text-2xl">Thank you.</h3>
                <p className="mt-3 text-foreground/75">
                  Your enquiry has been sent. We will be in touch within 24
                  hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setError("");
                    formRef.current?.reset();
                  }}
                  className="mt-6 text-sm text-[#7B509A] hover:underline cursor-pointer"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="grid sm:grid-cols-2 gap-5"
              >
                {/* Web3Forms honeypot for spam protection */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <div className="sm:col-span-1">
                  <label className="text-xs uppercase tracking-wider text-foreground/60 font-medium">
                    Name *
                  </label>
                  <input
                    required
                    name="from_name"
                    className="mt-2 w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:border-[#7B509A] transition-colors"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-xs uppercase tracking-wider text-foreground/60 font-medium">
                    Phone *
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    className="mt-2 w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:border-[#7B509A] transition-colors"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-foreground/60 font-medium">
                    City
                  </label>
                  <input
                    name="city"
                    className="mt-2 w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:border-[#7B509A] transition-colors"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-foreground/60 font-medium">
                    Brief description of the situation *
                  </label>
                  <textarea
                    required
                    rows={3}
                    name="message"
                    placeholder="Please mention the specific type, e.g. Oral Cancer or Breast Cancer."
                    className="mt-2 w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:border-[#7B509A] transition-colors resize-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-foreground/60 font-medium">
                    Preferred contact method
                  </label>
                  <div className="mt-3 flex gap-6">
                    {["WhatsApp", "Phone call"].map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="preferred_contact"
                          value={opt}
                          defaultChecked={opt === "WhatsApp"}
                          className="accent-[#7B509A]"
                        />
                        <span className="text-sm text-foreground/80">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {error && (
                  <div className="sm:col-span-2 flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {error}
                  </div>
                )}

                <div className="sm:col-span-2 mt-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#7B509A] hover:bg-[#6a4486] text-white px-7 py-4 rounded-full font-medium transition-all shadow-[0_14px_40px_-12px_hsl(var(--purple)/0.7)] hover:translate-y-[-2px] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {sending ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Request a Callback
                      </>
                    )}
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
