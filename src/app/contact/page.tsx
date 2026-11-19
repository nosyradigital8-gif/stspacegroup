import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactStrip } from "@/components/ContactStrip";

export const metadata = pageMetadata("Contact ST-SPACE | Accra & Kumasi", "Contact ST-SPACE Facilities Management Services by phone, WhatsApp or email, with locations in Accra and Kumasi, Ghana.", "/contact");

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#050607] py-14 sm:py-20"><div className="container-shell"><Breadcrumbs items={[{ label: "Contact" }]} /><div className="mt-16 grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end"><div><p className="eyebrow">01 / CONTACT ST-SPACE</p><h1 className="display mt-5 max-w-4xl text-6xl font-semibold leading-[.88] sm:text-8xl">Let&apos;s talk about <span className="text-[#F5BC38]">your space.</span></h1></div><p className="max-w-md text-base leading-7 text-white/55">Tell us what you need to manage, maintain or improve. We&apos;ll help you identify the right next conversation.</p></div></div></section>
      <section className="bg-[#111315] py-16 sm:py-24"><div className="container-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr]"><div><p className="eyebrow">02 / DIRECT CONTACT</p><div className="mt-7 grid gap-0 border-t border-white/15">{[{ icon: Phone, label: "Call", value: siteConfig.contact.phone, href: siteConfig.contact.phoneHref }, { icon: MessageCircle, label: "WhatsApp", value: siteConfig.contact.whatsapp, href: siteConfig.contact.whatsappHref }, { icon: Mail, label: "Email", value: siteConfig.contact.email, href: siteConfig.contact.emailHref }].map(({ icon: Icon, label, value, href }) => <a key={label} href={href} className="flex items-start gap-4 border-b border-white/15 py-6 transition-colors hover:text-[#F5BC38]"><Icon size={21} className="mt-0.5 text-[#D99B20]" /><span><span className="block text-[0.66rem] font-bold uppercase tracking-[0.14em] text-white/40">{label}</span><span className="mt-1 block break-all text-lg font-semibold">{value}</span></span><ArrowUpRight size={16} className="ml-auto text-white/30" /></a>)}</div><Link href="/request-a-quote" className="btn-primary mt-8">Request a quote <ArrowUpRight size={16} /></Link></div><div><p className="eyebrow">03 / LOCATIONS</p><div className="mt-7 grid gap-5 sm:grid-cols-2">{siteConfig.contact.locations.map((location, index) => <div key={location.city} className="border-t border-white/15 pt-5"><MapPin size={22} className="text-[#F5BC38]" /><p className="mt-8 text-2xl font-bold">{location.city}</p><p className="mt-2 text-sm leading-6 text-white/50">{location.address}</p><p className="mt-8 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-white/30">Location 0{index + 1}</p></div>)}</div><div className="mt-12 border border-[#D99B20]/45 bg-[#050607] p-6"><p className="eyebrow">Need a detailed response?</p><p className="mt-3 text-base leading-7 text-white/65">Use the quote request form to share the property context, service required and what success looks like for you.</p><Link href="/request-a-quote" className="mt-5 inline-flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#F5BC38]">Open quote form <ArrowUpRight size={15} /></Link></div></div></div></section>
      <ContactStrip compact />
    </>
  );
}
