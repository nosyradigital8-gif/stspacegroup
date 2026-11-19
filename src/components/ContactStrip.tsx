import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactStrip({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`noise overflow-hidden bg-[#D99B20] text-[#050607] ${compact ? "py-8" : "py-12 sm:py-16"}`}>
      <div className="container-shell flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#050607]/65">Talk to ST-SPACE</p>
          <h2 className="display mt-3 text-3xl font-semibold leading-[1] sm:text-5xl">Let&apos;s take care of your space.</h2>
          {!compact && <p className="mt-4 max-w-xl text-sm leading-6 text-[#050607]/70">Tell us what your property needs. We&apos;ll help you identify the right next step.</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/request-a-quote" className="inline-flex items-center gap-2 border border-[#050607]/40 px-5 py-3 text-[0.68rem] font-extrabold uppercase tracking-[0.13em] transition hover:bg-[#050607] hover:text-[#F5BC38]">Request a quote <ArrowUpRight size={16} /></Link>
          <a href={siteConfig.contact.phoneHref} className="inline-flex items-center gap-2 bg-[#050607] px-5 py-3 text-[0.68rem] font-extrabold uppercase tracking-[0.13em] text-white transition hover:bg-[#111315]"><Phone size={16} /> Call {siteConfig.contact.phone}</a>
        </div>
      </div>
    </section>
  );
}
