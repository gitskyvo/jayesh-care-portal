import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL } from "./Navbar";

export default function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-[0_12px_30px_-8px_hsl(var(--whatsapp)/0.7)] hover:scale-110 transition-transform float"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
