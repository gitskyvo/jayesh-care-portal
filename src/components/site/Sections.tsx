import { useRef } from "react";
import { Calendar, Users, Award, Shield, MapPin, Heart, Star, Quote, ArrowRight, Stethoscope, Sparkles, Microscope, GraduationCap, Activity, Pill, HeartPulse, ScanLine, PlayCircle, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import drHero from "@/assets/dr-hero.jpg";
import drAbout from "@/assets/dr-about.jpg";
import logo from "@/assets/drjayes.png";
import Reveal from "./Reveal";
import { WHATSAPP_URL } from "./Navbar";
import { WhatsAppIcon } from "./WhatsAppIcon";

const BOOK_URL = WHATSAPP_URL;

/* ---------- HERO ---------- */
export function Hero() {
  return (
    <section id="top" className="relative ink-bg text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 lotus-bg pointer-events-none" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-radial-purple)" }} />
      <div className="container relative grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-3 fade-up">
          <span className="section-label">Cancer Surgeon · Raipur, Chhattisgarh</span>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            You deserve answers,<br />
            not just <em className="text-[#7B509A] not-italic"><span className="italic">reports.</span></em>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed font-light">
            Personalised cancer care with clarity, compassion and clinical excellence. Here to help you make confident decisions about your health.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white px-7 py-4 rounded-full font-medium transition-all shadow-[0_14px_40px_-10px_hsl(var(--whatsapp)/0.6)] hover:translate-y-[-2px]">
              <WhatsAppIcon className="w-5 h-5" /> Chat on WhatsApp
            </a>
            <a href={BOOK_URL} className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-gold hover:text-[#7B509A] text-white px-7 py-4 rounded-full font-medium transition-all">
              <Calendar className="w-5 h-5" /> Book an Appointment
            </a>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {[
              { icon: Award, top: "25+ years", sub: "Experience" },
              { icon: Shield, top: "Surgical Oncology", sub: "Speciality Focus" },
              { icon: MapPin, top: "Raipur · Bilaspur · Korba", sub: "Serving Chhattisgarh" },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-3">
                <s.icon className="w-5 h-5 text-[#7B509A] mt-1 shrink-0" />
                <div>
                  <div className="text-sm font-medium">{s.top}</div>
                  <div className="text-xs text-white/55 uppercase tracking-wider mt-0.5">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 relative fade-up" style={{ animationDelay: "150ms" }}>
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-20px_hsl(var(--purple)/0.5)] ring-1 ring-purple-bright/30">
            <img src={drHero} alt="Dr. Jayesh Sharma, Surgical Oncologist" className="w-full h-full object-cover" width={1024} height={1280} />
            <div className="absolute inset-0 bg-gradient-to-t from-purple/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -top-4 -right-4 md:-right-8 bg-white text-foreground rounded-2xl px-4 py-3 shadow-lift flex items-center gap-2 max-w-[230px] border-l-4 border-purple">
            <Users className="w-4 h-4 text-purple" />
            <span className="text-xs font-medium leading-tight">Trusted by families across Chhattisgarh</span>
          </div>
          <div className="absolute text-white -bottom-4 -right-2 md:right-6 bg-[#7B509A] text-ink rounded-full px-5 py-2.5 text-xs font-semibold shadow-gold uppercase tracking-wider">
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
    { icon: Award, text: "25+ Years Experience" },
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
            <it.icon className="w-6 h-6 text-[#7B509A] shrink-0" />
            <span className="text-sm font-medium text-foreground/85">{it.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
export function About() {
  const tags = ["Breast Cancer: Preserve the breast, destroy just cancer", "Head and neck cancers: Keep appearance and speech", "GI Cancers: Open and minimally invasive", "Women's cancers: Handled with respect and minimal scars", "Reconstructive Surgery: We don't just remove cancers, we restore the body"];
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
          <h2 className="mt-4 text-4xl md:text-5xl leading-tight">A surgeon who speaks <em className="text-[#7B509A]">your language.</em></h2>
          <div className="gold-divider my-6 mx-0" />
          <p className="text-foreground/75 text-lg leading-relaxed font-light">
            Dr. Jayesh Sharma is a Surgical Oncologist with over two decades of experience in the diagnosis and treatment of complex cancers. He believes every patient deserves honest answers, clear options and care that respects their dignity and choices.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {tags.map(t => {
              const colonIndex = t.indexOf(":");
              if (colonIndex === -1) {
                return (
                  <span key={t} className="border border-border bg-white/60 px-4 py-1.5 rounded-full text-xs font-medium text-foreground/80">
                    {t}
                  </span>
                );
              }
              const title = t.slice(0, colonIndex);
              const desc = t.slice(colonIndex + 1);
              return (
                <span key={t} className="border border-border bg-white/60 px-4 py-1.5 rounded-full text-xs font-medium text-foreground/80">
                  <span className="text-[#7B509A] font-semibold">{title}:</span>{desc}
                </span>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="lg:col-span-4" delay={240}>
          <div className="ink-bg text-white rounded-[1.75rem] p-8 lg:p-9 shadow-lift relative overflow-hidden">
            <div className="absolute inset-0 lotus-bg pointer-events-none" />
            <h3 className="relative text-2xl text-[#7B509A] font-serif">Expert care, close to home.</h3>
            <div className="relative mt-6 grid grid-cols-2 gap-x-4 gap-y-6">
              {services.map(s => (
                <div key={s.label} className="flex flex-col gap-2">
                  <s.icon className="w-5 h-5 text-[#7B509A]" />
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
          <h2 className="mt-4 text-4xl md:text-5xl">Have reports but no <em className="text-[#7B509A]">clarity?</em></h2>
          <div className="gold-divider my-8" />
        </Reveal>
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-center gap-6 md:gap-3 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} className="flex-1 flex md:contents items-center">
              <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-[#7B509A] text-white flex items-center justify-center font-serif text-lg mx-auto">{s.n}</div>
                <p className="mt-4 text-white/85">{s.t}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-6 h-6 text-[#7B509A] mx-2 shrink-0" />
              )}
            </Reveal>
          ))}
        </div>
        <Reveal delay={360}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white px-7 py-4 rounded-full font-medium shadow-[0_14px_40px_-10px_hsl(var(--whatsapp)/0.6)] hover:translate-y-[-2px] transition-all">
            <WhatsAppIcon className="w-5 h-5" /> Get Clarity on WhatsApp
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
    "25+ years As Surgeon",
    "Treated Thousands of Patients from Chhattisgarh & beyond",
    "Founder-head of prominent Cancer Centre, Naya Raipur",
    "Leading cancer surgeon of Central India",
  ];
  return (
    <section id="education" className="bg-background py-24">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20">
        <Reveal>
          <span className="section-label">Credentials & Education</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Two decades, <em className="text-[#7B509A]">one calling.</em></h2>
          <div className="gold-divider my-7 mx-0" />
          <ol className="mt-8 space-y-7 relative border-l border-border pl-8">
            {timeline.map((t, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[37px] top-1 w-3.5 h-3.5 rounded-full bg-[#7B509A] ring-4 ring-purple/30" />
                <div className="text-xs uppercase tracking-widest text-[#7B509A] font-medium">{t.y}</div>
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
              <GraduationCap className="w-8 h-8 text-[#7B509A]" />
              <h3 className="mt-5 text-2xl text-[#7B509A] font-serif">Highlights & Impact</h3>
              <div className="mt-7 space-y-5">
                {highlights.map(h => (
                  <div key={h} className="flex items-start gap-3 border-b border-white/10 pb-4">
                    <Sparkles className="w-4 h-4 text-[#7B509A] mt-1 shrink-0" />
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
            <h2 className="mt-4 text-4xl md:text-5xl">Comprehensive cancer surgery, <em className="text-[#7B509A]">close to home.</em></h2>
            <div className="gold-divider my-7" />
          </div>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 70}>
              <div className="group bg-white border border-border/60 rounded-2xl p-7 shadow-soft hover:shadow-lift hover:-translate-y-1 hover:border-purple/40 transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center group-hover:bg-purple/20 transition-colors">
                  <it.icon className="w-6 h-6 text-purple" />
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
            <h2 className="mt-4 text-4xl md:text-5xl">Serving patients across <em className="text-[#7B509A]">Chhattisgarh</em></h2>
            <div className="gold-divider my-7" />
          </div>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {locs.map((l, i) => (
            <Reveal key={l.city} delay={i * 100}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm hover:bg-white/[0.07] transition-colors h-full flex flex-col">
                <MapPin className="w-7 h-7 text-[#7B509A]" />
                <h3 className="mt-4 text-2xl font-serif">{l.city}</h3>
                <div className="mt-2 text-white/85 font-medium">{l.name}</div>
                <p className="text-white/60 text-sm mt-1 leading-relaxed flex-1">{l.addr}</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 border border-white/40 hover:border-gold hover:text-[#7B509A] text-white px-5 py-2.5 rounded-full text-sm transition-colors">
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
  const videos = [
    { title: "Breast Cancer Treatment", url: "https://www.youtube.com/embed/oWWAyfg5mW0" },
    { title: "Cancer Symptoms", url: "https://www.youtube.com/embed/i6FielQm000" },
    { title: "Why Cancer Is Rising", url: "https://www.youtube.com/embed/hOkwZG9FnOo" },
    { title: "Lifestyle After Cancer", url: "https://www.youtube.com/embed/YESRTB7BYjo" },
    { title: "All About Breast Cancer", url: "https://www.youtube.com/embed/videoseries?list=PLoSjkfVBLSATrgFh6WrvX6cLWWfKKg7BR" },
    { title: "All About Oral Cancers", url: "https://www.youtube.com/embed/videoseries?list=PLoSjkfVBLSASJIhUlw58Bx75yVVUCEAQ2" },
  ];
  return (
    <section className="bg-background py-24">
      <div className="container">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-label">Insights</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Learn, then <em className="text-[#7B509A]">decide.</em></h2>
            <div className="gold-divider my-7" />
          </div>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((vid, i) => (
            <Reveal key={vid.title} delay={i * 80}>
              <div className="bg-white border border-border/60 rounded-2xl overflow-hidden shadow-soft hover:shadow-lift transition-all duration-500">
                <div className="aspect-video relative">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={vid.url}
                    title={vid.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs uppercase tracking-widest text-[#7B509A] font-medium">
                    {vid.url.includes("videoseries") ? "Playlist" : "Video"}
                  </span>
                  <h3 className="mt-2 text-lg font-serif text-foreground/90">{vid.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const reviews = [
    {
      name: "RAJEEV RANJAN SINGH",
      text: "Sir, first of all, I would like to express my deepest gratitude to you for the successful surgery on my father. Your skill and expertise have been truly remarkable, and I am incredibly grateful for the care and attention you have shown towards my father's oral health."
    },
    {
      name: "ruchi agnihotri",
      text: "Best onco in raipur..knowledgeable and sweet Jo bhi doubt the mujhe sare sune or bhit hi ache se ans Kiya..thank you sir 😀"
    },
    {
      name: "Jayesh Mission Viejo CA USA",
      text: "Let me first say that If I could give higher than 5 star review to Dr. Jayesh Sharma, I would. Jayeshji, you are very compassionate yet honest and cadid so as to give the right advice."
    },
    {
      name: "Jyoti Pandey Sharma",
      text: "Dr. Jayesh took the time to listen to my all kind of concerns without ever making me feel hurried...His approach is very calm and empathetic, which is missing in most oncologists these days..It's rare to find a doctor who combines such personal attention and genuine compassion with such professionalism and thorough care. I felt informed, reassured and truly supported. 🙏🏻🙏🏻"
    },
    {
      name: "Shivani",
      text: "A role model for how doctors should be…no fear mongering… no unnecessary protocol just facts explained very simply and a promise to hold your hand through ."
    },
    {
      name: "Debasmita Rout",
      text: "He is a very good Doctor I have ever seen..makes patient so comfortable that patient can share everything in detail and he is having much patience to listen everything.Excellent knowledgeable Doctor.Had an online consultation for my father.He calmly listened all the history and prescribed accordingly."
    },
    {
      name: "Kajal Sablani",
      text: "The best Dr.. His way of clearing doubts about myths which we r hearing. He is very supportive kind nature.what we feel every Dr should be like him 👍"
    }
  ];

  return (
    <section className="bg-background py-24">
      <div className="container relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-label">Patient Voices</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Care, <em className="text-[#7B509A]">remembered.</em></h2>
            <div className="gold-divider my-7" />
          </div>
        </Reveal>
        
        <div className="flex justify-end gap-3 mb-6">
          <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-border/60 bg-white flex items-center justify-center text-[#7B509A] hover:bg-[#7B509A] hover:text-white transition-colors shadow-sm">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-border/60 bg-white flex items-center justify-center text-[#7B509A] hover:bg-[#7B509A] hover:text-white transition-colors shadow-sm">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div 
          ref={scrollRef} 
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 50} className="w-full md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] snap-center shrink-0 flex">
              <div className="bg-white border border-border/60 rounded-2xl p-7 shadow-soft flex flex-col w-full">
                <Quote className="w-8 h-8 text-[#7B509A]" />
                <p className="mt-5 text-foreground/80 leading-relaxed flex-1">"{r.text}"</p>
                <div className="mt-6 pt-5 border-t border-border/60 flex flex-col gap-2">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="font-semibold text-sm text-foreground/90 uppercase">{r.name}</span>
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
            <h2 className="text-5xl md:text-6xl">Start with <em className="text-[#7B509A]">clarity.</em></h2>
            <div className="gold-divider my-8" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white px-7 py-4 rounded-full font-medium shadow-[0_14px_40px_-10px_hsl(var(--whatsapp)/0.6)] hover:translate-y-[-2px] transition-all">
                <WhatsAppIcon className="w-5 h-5" /> Chat on WhatsApp
              </a>
              <a href={WHATSAPP_URL} className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-gold hover:text-[#7B509A] text-white px-7 py-4 rounded-full font-medium transition-all">
                <Calendar className="w-5 h-5" /> Book an Appointment
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Dr. Jayesh Sharma" className="w-auto h-12" />
            <div className="font-serif text-[#7B509A] text-lg">Dr. Jayesh Sharma <span className="text-white/60 text-sm font-sans font-light">· Cancer Care</span></div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            <a href="#about" className="hover:text-[#7B509A]">About</a>
            <a href="#services" className="hover:text-[#7B509A]">Services</a>
            <a href="#second-opinion" className="hover:text-[#7B509A]">Second Opinion</a>
            <a href="#locations" className="hover:text-[#7B509A]">OPD Locations</a>
            <a href="#education" className="hover:text-[#7B509A]">Education</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#7B509A]">WhatsApp</a>
          </nav>
        </div>
        <p className="mt-8 text-center text-xs text-white/45">© {new Date().getFullYear()} Dr. Jayesh Sharma Cancer Care · Raipur, Chhattisgarh</p>
      </div>
    </footer>
  );
}
