import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f3f0e8] text-[#050607]">
      <div className="container-shell grid gap-12 py-14 md:grid-cols-[1.2fr_.8fr_.8fr] md:py-20">
        <div>
          <Image src="/images/branding/st-space-logo.png" alt="ST-SPACE" width={220} height={74} className="h-auto w-[190px]" />
          <p className="mt-6 max-w-sm text-sm leading-7 text-black/60">{siteConfig.positioning}</p>
          <Link href="/request-a-quote" className="btn-secondary-light mt-7">Start a conversation <ArrowUpRight size={16} /></Link>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <div className="mt-5 grid gap-3">
            {[...siteConfig.navigation, { label: "Request a Quote", href: "/request-a-quote" }].map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-black/65 transition-colors hover:text-[#9b6b0c]">{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Connect</p>
          <div className="mt-5 grid gap-4 text-sm text-black/65">
            <a href={siteConfig.contact.phoneHref} className="flex items-start gap-3 hover:text-[#9b6b0c]"><Phone size={16} className="mt-0.5 text-[#9b6b0c]" />{siteConfig.contact.phone}</a>
            <a href={siteConfig.contact.emailHref} className="flex items-start gap-3 break-all hover:text-[#9b6b0c]"><Mail size={16} className="mt-0.5 shrink-0 text-[#9b6b0c]" />{siteConfig.contact.email}</a>
            <div className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-[#9b6b0c]" /><span>Accra · Kumasi, Ghana</span></div>
          </div>
        </div>
      </div>
      <div className="border-t border-black/10">
        <div className="container-shell flex flex-col gap-2 py-5 text-[0.65rem] uppercase tracking-[0.14em] text-black/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ST-SPACE Facilities Management Services.</p>
          <p>Professional. Reliable. Efficient. Always.</p>
        </div>
      </div>
    </footer>
  );
}
