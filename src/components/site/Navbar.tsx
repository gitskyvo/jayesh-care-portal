import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#second-opinion", label: "Second Opinion" },
  { href: "#education", label: "Education" },
  { href: "#locations", label: "OPD Locations" },
];

export const WHATSAPP_URL = "https://wa.me/91XXXXXXXXXX";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-ink/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between h-20">
        <a href="#top" className="font-serif text-lg md:text-xl text-gold tracking-tight">
          Dr. Jayesh Sharma <span className="text-white/70 font-sans text-sm font-light">· Cancer Care</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-[0_8px_24px_-8px_hsl(var(--whatsapp)/0.6)]"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-whatsapp flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </a>
          <button onClick={() => setOpen(o => !o)} className="text-white p-2" aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-ink border-t border-white/5">
          <div className="container py-6 flex flex-col gap-4">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-white/85 hover:text-gold py-2 border-b border-white/5">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
