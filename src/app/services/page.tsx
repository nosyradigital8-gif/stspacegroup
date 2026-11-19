import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactStrip } from "@/components/ContactStrip";

export const metadata = pageMetadata("Facilities Management Services | ST-SPACE", "Explore ST-SPACE facility management, asset and property management, project support and fumigation services in Ghana.", "/services");

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#050607] py-14 sm:py-20"><div className="container-shell"><Breadcrumbs items={[{ label: "Services" }]} /><div className="mt-16 grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end"><div><p className="eyebrow">01 / SERVICE PLATFORM</p><h1 className="display mt-5 max-w-4xl text-6xl font-semibold leading-[0.88] sm:text-8xl">Support for the spaces that support your work.</h1></div><p className="max-w-md text-base leading-7 text-white/55">One partner across the operational details: facilities, property, projects and fumigation. Clearer support for better-managed environments.</p></div></div></section>
      <section className="bg-[#111315] py-16 sm:py-24"><div className="container-shell grid gap-8 lg:grid-cols-2">{siteConfig.services.map((service, index) => <article key={service.slug} className="group grid gap-0 border-t border-white/15 pt-6"><div className="image-frame aspect-[16/10]"><Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div><div className="flex items-start justify-between gap-6 py-6"><div><p className="eyebrow">{service.eyebrow}</p><h2 className="display mt-3 text-3xl font-semibold">{service.title}</h2><p className="mt-3 max-w-md text-sm leading-6 text-white/50">{service.description}</p></div><span className="text-4xl font-light text-white/20">0{index + 1}</span></div><Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 border-t border-white/15 py-4 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#F5BC38]">Explore service <ArrowUpRight size={16} /></Link></article>)}</div></section>
      <section className="bg-[#f3f0e8] py-16 text-[#050607] sm:py-24"><div className="container-shell grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow text-[#9b6b0c]">02 / DESIGNED FOR CONTEXT</p><h2 className="display mt-5 text-4xl font-semibold leading-[.98] sm:text-5xl">Not a package. A fit for the space.</h2></div><div className="grid gap-7 text-base leading-7 text-black/60 sm:grid-cols-2"><p>Every property has its own rhythm, pressure points and people. Our role is to understand the context before recommending a support model.</p><p>That is why the next step is always a conversation: the property, the priorities and the practical outcome you need to see.</p></div></div></section>
      <ContactStrip />
    </>
  );
}
