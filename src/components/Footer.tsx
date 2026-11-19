import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050607]">
      <div className="container-shell grid gap-12 py-14 md:grid-cols-[1.2fr_.8fr_.8fr] md:py-20">
        <div>
          <Image src="/images/branding/st-space-logo.png" alt="ST-SPACE" width={220} height={74} className="h-auto w-[190px]" />
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">{siteConfig.positioning}</p>
          <Link href="/request-a-quote" className="btn-secondary mt-7">Start a conversation <ArrowUpRight size={16} /></Link>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <div className="mt-5 grid gap-3">
            {[...siteConfig.navigation, { label: "Request a Quote", href: "/request-a-quote" }].map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/65 transition-colors hover:text-[#F5BC38]">{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Connect</p>
          <div className="mt-5 grid gap-4 text-sm text-white/65">
            <a href={siteConfig.contact.phoneHref} className="flex items-start gap-3 hover:text-[#F5BC38]"><Phone size={16} className="mt-0.5 text-[#D99B20]" />{siteConfig.contact.phone}</a>
            <a href={siteConfig.contact.emailHref} className="flex items-start gap-3 break-all hover:text-[#F5BC38]"><Mail size={16} className="mt-0.5 shrink-0 text-[#D99B20]" />{siteConfig.contact.email}</a>
            <div className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-[#D99B20]" /><span>Accra · Kumasi, Ghana</span></div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-2 py-5 text-[0.65rem] uppercase tracking-[0.14em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ST-SPACE Facilities Management Services.</p>
          <p>Professional. Reliable. Efficient. Always.</p>
        </div>
      </div>
    </footer>
  );
}
