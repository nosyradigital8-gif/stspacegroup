import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a href={siteConfig.contact.whatsappHref} target="_blank" rel="noreferrer" aria-label="Contact ST-SPACE on WhatsApp" className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 bg-[#D99B20] px-4 py-3 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[#050607] shadow-[0_12px_35px_rgba(0,0,0,.35)] transition hover:bg-[#F5BC38] sm:bottom-7 sm:right-7">
      <MessageCircle size={17} /> <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  );
}
