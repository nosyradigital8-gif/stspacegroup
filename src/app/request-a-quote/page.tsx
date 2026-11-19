import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata = pageMetadata("Request a Quote | ST-SPACE Facilities Management", "Share your property and facilities management requirements with ST-SPACE to request a consultation in Ghana.", "/request-a-quote");

export default function RequestQuotePage() {
  return (
    <>
      <section className="bg-[#050607] py-14 sm:py-20"><div className="container-shell"><Breadcrumbs items={[{ label: "Request a Quote" }]} /><div className="mt-16 grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end"><div><p className="eyebrow">01 / REQUEST A QUOTE</p><h1 className="display mt-5 max-w-4xl text-6xl font-semibold leading-[.88] sm:text-8xl">Give us the context. <span className="text-[#F5BC38]">We&apos;ll take it from there.</span></h1></div><p className="max-w-md text-base leading-7 text-white/55">The more we understand about your property and priorities, the more useful the first conversation can be.</p></div></div></section>
      <section className="bg-[#111315] py-16 sm:py-24"><div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-start"><aside><p className="eyebrow">02 / WHAT TO SHARE</p><div className="mt-7 grid gap-0 border-t border-white/15">{["Where the property is", "What needs attention", "The service you are considering", "What a better result looks like"].map((item, index) => <div key={item} className="flex gap-4 border-b border-white/15 py-5"><span className="eyebrow text-white/35">0{index + 1}</span><p className="text-sm leading-6 text-white/65">{item}</p></div>)}</div><div className="mt-10 border-l-2 border-[#D99B20] pl-5"><p className="text-lg leading-7 text-white/80">{siteConfig.secondaryStatement}</p><p className="mt-3 text-sm leading-6 text-white/45">Prefer a direct conversation? Call {siteConfig.contact.phone} or use WhatsApp.</p><a href={siteConfig.contact.whatsappHref} className="mt-5 inline-flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#F5BC38]">WhatsApp ST-SPACE <ArrowUpRight size={15} /></a></div></aside><div className="border border-white/10 bg-[#050607] p-5 sm:p-9"><QuoteForm /></div></div></section>
    </>
  );
}
