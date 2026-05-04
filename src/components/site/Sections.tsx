import { MessageCircle, Calendar, Users, Award, Shield, MapPin, Heart, Star, Quote, ArrowRight, Stethoscope, Sparkles, Microscope, GraduationCap, Activity, Pill, HeartPulse, ScanLine, PlayCircle, FileText } from "lucide-react";
import drHero from "@/assets/dr-hero.jpg";
import drAbout from "@/assets/dr-about.jpg";
import Reveal from "./Reveal";
import { WHATSAPP_URL } from "./Navbar";

const BOOK_URL = WHATSAPP_URL;

/* ---------- HERO ---------- */
export function Hero() {
  return (
    <section id="top" className="relative ink-bg text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 lotus-bg pointer-events-none" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="container relative grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-3 fade-up">
          <span className="section-label">Cancer Surgeon · Raipur, Chhattisgarh</span>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            You deserve answers,<br />
            not just <em className="text-gold not-italic"><span className="italic">reports.</span></em>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed font-light">
            Personalised cancer care with clarity, compassion and clinical excellence. Here to help you make confident decisions about your health.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white px-7 py-4 rounded-full font-medium transition-all shadow-[0_14px_40px_-10px_hsl(var(--whatsapp)/0.6)] hover:translate-y-[-2px]">
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
            <a href={BOOK_URL} className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-gold hover:text-gold text-white px-7 py-4 rounded-full font-medium transition-all">
              <Calendar className="w-5 h-5" /> Book an Appointment
            </a>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {[
              { icon: Award, top: "20+ years", sub: "Experience" },
              { icon: Shield, top: "Surgical Oncology", sub: "Speciality Focus" },
              { icon: MapPin, top: "Raipur · Bilaspur · Korba", sub: "Serving Chhattisgarh" },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-3">
                <s.icon className="w-5 h-5 text-gold mt-1 shrink-0" />
                <div>
                  <div className="text-sm font-medium">{s.top}</div>
                  <div className="text-xs text-white/55 uppercase tracking-wider mt-0.5">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 relative fade-up" style={{ animationDelay: "150ms" }}>
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
            <img src={drHero} alt="Dr. Jayesh Sharma, Surgical Oncologist" className="w-full h-full object-cover" width={1024} height={1280} />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -top-4 -right-4 md:-right-8 bg-white text-foreground rounded-2xl px-4 py-3 shadow-lift flex items-center gap-2 max-w-[230px]">
            <Users className="w-4 h-4 text-gold" />
            <span className="text-xs font-medium leading-tight">Trusted by families across Chhattisgarh</span>
          </div>
          <div className="absolute -bottom-4 -right-2 md:right-6 bg-gold text-ink rounded-full px-5 py-2.5 text-xs font-semibold shadow-gold uppercase tracking-wider">
            Fellowship in Surgical Oncology
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TRUST BAR ---------- */
export function TrustBar() {
  const items = [
    { icon: Award, text: "20+ Years Experience" },
    { icon: Users, text: "Thousands of Patients Treated" },
    { icon: Shield, text: "Advanced Surgical Expertise" },
    { icon: Heart, text: "Compassionate, Personalised Care" },
    { icon: MapPin, text: "Locations Across Chhattisgarh" },
  ];
  return (
    <section className="bg-background py-10 border-b border-border/60">
      <div className="container grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-2">
        {items.map((it, i) => (
          <div key={i} className={`flex items-center gap-3 justify-center text-center md:text-left ${i > 0 ? "md:border-l md:border-border/70 md:pl-4" : ""}`}>
            <it.icon className="w-6 h-6 text-gold shrink-0" />
            <span className="text-sm font-medium text-foreground/85">{it.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
export function About() {
  const tags = ["GI Oncology", "Hepato-Pancreato-Biliary", "Breast Oncology", "Thoracic Oncology", "Soft Tissue & Sarcoma", "Minimal Access Surgery"];
  const services = [
    { icon: Stethoscope, label: "Personalised Consultation" },
    { icon: Sparkles, label: "Advanced Treatment" },
    { icon: ScanLine, label: "Minimal Access Surgery" },
    { icon: Users, label: "Multidisciplinary Approach" },
    { icon: HeartPulse, label: "Supportive Care" },
    { icon: Activity, label: "Follow-up & Survivorship" },
  ];
  return (
    <section id="about" className="bg-background py-24">
      <div className="container grid lg:grid-cols-12 gap-10 items-start">
        <Reveal className="lg:col-span-3">
          <div className="aspect-[4/5] rounded-[1.75rem] overflow-hidden shadow-soft">
            <img src={drAbout} alt="Dr. Jayesh Sharma" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={120}>
          <span className="section-label">About Dr. Sharma</span>
          <h2 className="mt-4 text-4xl md:text-5xl leading-tight">A surgeon who speaks <em className="text-gold">your language.</em></h2>
          <div className="gold-divider my-6 mx-0" />
          <p className="text-foreground/75 text-lg leading-relaxed font-light">
            Dr. Jayesh Sharma is a Surgical Oncologist with over two decades of experience in the diagnosis and treatment of complex cancers. He believes every patient deserves honest answers, clear options and care that respects their dignity and choices.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {tags.map(t => (
              <span key={t} className="border border-border bg-white/60 px-4 py-1.5 rounded-full text-xs font-medium text-foreground/80">{t}</span>
            ))}
          </div>
        </Reveal>

        <Reveal className="lg:col-span-4" delay={240}>
          <div className="ink-bg text-white rounded-[1.75rem] p-8 lg:p-9 shadow-lift relative overflow-hidden">
            <div className="absolute inset-0 lotus-bg pointer-events-none" />
            <h3 className="relative text-2xl text-gold font-serif">Expert care, close to home.</h3>
            <div className="relative mt-6 grid grid-cols-2 gap-x-4 gap-y-6">
              {services.map(s => (
                <div key={s.label} className="flex flex-col gap-2">
                  <s.icon className="w-5 h-5 text-gold" />
                  <span className="text-sm text-white/85 leading-snug">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SECOND OPINION ---------- */
export function SecondOpinion() {
  const steps = [
    { n: "1", t: "Share your reports" },
    { n: "2", t: "Get expert review by Dr. Sharma" },
    { n: "3", t: "Receive clear next steps" },
  ];
  return (
    <section id="second-opinion" className="ink-bg text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="container relative text-center">
        <Reveal>
          <span className="section-label">Second Opinion</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Have reports but no <em className="text-gold">clarity?</em></h2>
          <div className="gold-divider my-8" />
        </Reveal>
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-6 md:gap-3 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} className="flex-1 flex md:contents items-center">
              <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-gold text-ink flex items-center justify-center font-serif text-lg mx-auto">{s.n}</div>
                <p className="mt-4 text-white/85">{s.t}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-6 h-6 text-gold mx-2 shrink-0" />
              )}
            </Reveal>
          ))}
        </div>
        <Reveal delay={360}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white px-7 py-4 rounded-full font-medium shadow-[0_14px_40px_-10px_hsl(var(--whatsapp)/0.6)] hover:translate-y-[-2px] transition-all">
            <MessageCircle className="w-5 h-5" /> Get Clarity on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- CREDENTIALS ---------- */
export function Credentials() {
  const timeline = [
    { y: "1998", t: "MBBS", s: "Pt. JLN Memorial Medical College, Raipur" },
    { y: "2001", t: "MS (General Surgery)", s: "Lokmanya Tilak Medical College, Sion Hospital, Mumbai" },
    { y: "2002–2005", t: "Fellowship in Surgical Oncology", s: "Aastha Oncology Associates, Ahmedabad" },
    { y: "—", t: "Fellowship in Minimal Access Surgery (FMAS)", s: "Coimbatore" },
    { y: "6 yrs", t: "Consultant Surgeon", s: "Al Sanaiya Hospital, Dubai" },
  ];
  const highlights = [
    "22+ years of practice",
    "35,000+ new cancer cases served in Chhattisgarh region",
    "Founder-head of prominent Cancer Centre, Naya Raipur",
    "Leading cancer surgeon of Central India",
  ];
  return (
    <section id="education" className="bg-background py-24">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20">
        <Reveal>
          <span className="section-label">Credentials & Education</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Two decades, <em className="text-gold">one calling.</em></h2>
          <div className="gold-divider my-7 mx-0" />
          <ol className="mt-8 space-y-7 relative border-l border-border pl-8">
            {timeline.map((t, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[37px] top-1 w-3.5 h-3.5 rounded-full bg-gold ring-4 ring-background" />
                <div className="text-xs uppercase tracking-widest text-gold font-medium">{t.y}</div>
                <div className="font-serif text-lg mt-1">{t.t}</div>
                <div className="text-sm text-foreground/65 mt-0.5">{t.s}</div>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal delay={140}>
          <div className="ink-bg text-white rounded-[1.75rem] p-9 lg:p-10 shadow-lift relative overflow-hidden h-full">
            <div className="absolute inset-0 lotus-bg pointer-events-none" />
            <div className="relative">
              <GraduationCap className="w-8 h-8 text-gold" />
              <h3 className="mt-5 text-2xl text-gold font-serif">Highlights & Impact</h3>
              <div className="mt-7 space-y-5">
                {highlights.map(h => (
                  <div key={h} className="flex items-start gap-3 border-b border-white/10 pb-4">
                    <Sparkles className="w-4 h-4 text-gold mt-1 shrink-0" />
                    <span className="text-white/90 leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
export function Services() {
  const items = [
    { icon: HeartPulse, t: "Breast Oncology", d: "Mastectomy, breast conservation, oncoplastic surgery" },
    { icon: Pill, t: "GI Oncology", d: "Stomach, colon, rectal cancer surgeries" },
    { icon: Microscope, t: "Head & Neck Cancers", d: "Oral, thyroid, parotid surgeries" },
    { icon: Activity, t: "Hepato-Pancreato-Biliary", d: "Liver, pancreas, bile duct" },
    { icon: ScanLine, t: "Thoracic Oncology", d: "Lung and chest cancers" },
    { icon: Sparkles, t: "Soft Tissue & Sarcoma", d: "Rare tumours, precision resection" },
  ];
  return (
    <section id="services" className="bg-background py-24">
      <div className="container">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-label">What I Treat</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Comprehensive cancer surgery, <em className="text-gold">close to home.</em></h2>
            <div className="gold-divider my-7" />
          </div>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 70}>
              <div className="group bg-white border border-border/60 rounded-2xl p-7 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <it.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="mt-5 text-xl font-serif">{it.t}</h3>
                <p className="mt-2 text-foreground/65 leading-relaxed text-sm">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- LOCATIONS ---------- */
export function Locations() {
  const locs = [
    { city: "Raipur", name: "Tiara Building", addr: "Shankar Nagar, Khamardih, Anupam Nagar" },
    { city: "Bilaspur", name: "OPD Clinic", addr: "Address details on request" },
    { city: "Korba", name: "OPD Clinic", addr: "Address details on request" },
  ];
  return (
    <section id="locations" className="ink-bg text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 lotus-bg pointer-events-none" />
      <div className="container relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-label">OPD Locations</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Serving patients across <em className="text-gold">Chhattisgarh</em></h2>
            <div className="gold-divider my-7" />
          </div>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {locs.map((l, i) => (
            <Reveal key={l.city} delay={i * 100}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm hover:bg-white/[0.07] transition-colors h-full flex flex-col">
                <MapPin className="w-7 h-7 text-gold" />
                <h3 className="mt-4 text-2xl font-serif">{l.city}</h3>
                <div className="mt-2 text-white/85 font-medium">{l.name}</div>
                <p className="text-white/60 text-sm mt-1 leading-relaxed flex-1">{l.addr}</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 border border-white/40 hover:border-gold hover:text-gold text-white px-5 py-2.5 rounded-full text-sm transition-colors">
                  Book Appointment
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- EDUCATION CARDS ---------- */
export function Insights() {
  const items = [
    { kind: "Video", t: "Understanding Cancer Staging", icon: PlayCircle, hue: "from-amber-700/60 to-amber-900/60" },
    { kind: "Article", t: "Robotic vs. Open Surgery: Which Is Right for You?", icon: FileText, hue: "from-slate-700/60 to-slate-900/60" },
    { kind: "Video", t: "Nutrition During Cancer Treatment", icon: PlayCircle, hue: "from-emerald-800/50 to-slate-900/60" },
    { kind: "Article", t: "Early Signs You Shouldn't Ignore", icon: FileText, hue: "from-rose-800/50 to-slate-900/60" },
  ];
  return (
    <section className="bg-background py-24">
      <div className="container">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-label">Insights</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Learn, then <em className="text-gold">decide.</em></h2>
            <div className="gold-divider my-7" />
          </div>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 80}>
              <a href="#" className="group block bg-white border border-border/60 rounded-2xl overflow-hidden shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-500">
                <div className={`aspect-[16/9] bg-gradient-to-br ${it.hue} relative flex items-center justify-center`}>
                  <it.icon className="w-14 h-14 text-white/90" />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-widest text-gold font-medium">{it.kind}</span>
                  <h3 className="mt-2 text-xl font-serif group-hover:text-gold transition-colors">{it.t}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-foreground/70">
                    Read more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
export function Testimonials() {
  const reviews = [
    "Undoubtedly the leading cancer surgeon in Raipur. Every patient will return home feeling better after a consultation.",
    "He is very polite and humble. He personally gives everyone time to explain the disease and suggests the most appropriate treatment.",
    "Dr. Jayesh Sharma deals with patients very patiently and empathetically. Highly qualified and experienced.",
  ];
  return (
    <section className="bg-background py-24">
      <div className="container">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-label">Patient Voices</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Care, <em className="text-gold">remembered.</em></h2>
            <div className="gold-divider my-7" />
          </div>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-white border border-border/60 rounded-2xl p-7 shadow-soft h-full flex flex-col">
                <Quote className="w-8 h-8 text-gold" />
                <p className="mt-5 text-foreground/80 leading-relaxed flex-1">"{r}"</p>
                <div className="mt-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER / FINAL CTA ---------- */
export function Footer() {
  return (
    <footer className="ink-bg text-white pt-24 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 lotus-bg pointer-events-none" />
      <div className="absolute inset-x-0 top-0" style={{ background: "var(--gradient-radial-gold)", height: "60%" }} />
      <div className="container relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-5xl md:text-6xl">Start with <em className="text-gold">clarity.</em></h2>
            <div className="gold-divider my-8" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white px-7 py-4 rounded-full font-medium shadow-[0_14px_40px_-10px_hsl(var(--whatsapp)/0.6)] hover:translate-y-[-2px] transition-all">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
              <a href={WHATSAPP_URL} className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-gold hover:text-gold text-white px-7 py-4 rounded-full font-medium transition-all">
                <Calendar className="w-5 h-5" /> Book an Appointment
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="font-serif text-gold text-lg">Dr. Jayesh Sharma <span className="text-white/60 text-sm font-sans font-light">· Cancer Care</span></div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            <a href="#about" className="hover:text-gold">About</a>
            <a href="#services" className="hover:text-gold">Services</a>
            <a href="#second-opinion" className="hover:text-gold">Second Opinion</a>
            <a href="#locations" className="hover:text-gold">OPD Locations</a>
            <a href="#education" className="hover:text-gold">Education</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold">WhatsApp</a>
          </nav>
        </div>
        <p className="mt-8 text-center text-xs text-white/45">© 2025 Dr. Jayesh Sharma Cancer Care · Raipur, Chhattisgarh</p>
      </div>
    </footer>
  );
}
