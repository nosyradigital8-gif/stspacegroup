import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactStrip } from "@/components/ContactStrip";

export const metadata = pageMetadata("Industries Served | ST-SPACE Ghana", "ST-SPACE applies facilities management and property support across commercial, corporate, residential, retail, institutional and industrial environments.", "/industries");

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-[#050607] py-14 sm:py-20"><div className="container-shell"><Breadcrumbs items={[{ label: "Industries" }]} /><div className="mt-16 grid gap-10 lg:grid-cols-[1fr_.75fr] lg:items-end"><div><p className="eyebrow">01 / SERVICE APPLICATIONS</p><h1 className="display mt-5 max-w-4xl text-6xl font-semibold leading-[.88] sm:text-8xl">Different spaces. <span className="text-[#F5BC38]">Same discipline.</span></h1></div><p className="max-w-md text-base leading-7 text-white/55">Our services are designed to adapt to the people, pace and priorities of the environment around them.</p></div></div></section>
      <section className="bg-[#111315] py-16 sm:py-24"><div className="container-shell grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">{siteConfig.industries.map((industry, index) => <article key={industry.label} className="bg-[#111315] p-7 sm:min-h-64 sm:p-9"><p className="eyebrow text-white/35">0{index + 1} / CONTEXT</p><h2 className="display mt-12 text-3xl font-semibold">{industry.label}</h2><p className="mt-4 text-sm leading-6 text-white/50">{industry.detail}</p></article>)}</div></section>
      <section className="bg-[#f3f0e8] py-16 text-[#050607] sm:py-24"><div className="container-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div className="image-frame aspect-[4/3]"><Image src="/images/hero/operations-night.webp" alt="Floodlit sports facility from supplied operational imagery" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div><div><p className="eyebrow text-[#9b6b0c]">02 / THE COMMON THREAD</p><h2 className="display mt-5 text-4xl font-semibold leading-[.98] sm:text-5xl">People notice when the environment works.</h2><p className="mt-6 max-w-xl text-base leading-7 text-black/60">Whether the property is commercial, residential, institutional or industrial, good facilities management is felt through safer movement, clearer support and fewer avoidable distractions.</p><Link href="/request-a-quote" className="btn-primary mt-8">Discuss your property <ArrowUpRight size={16} /></Link></div></div></section>
      <ContactStrip />
    </>
  );
}
