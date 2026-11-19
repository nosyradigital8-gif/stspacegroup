import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactStrip } from "@/components/ContactStrip";

export const metadata = pageMetadata("Our Work | ST-SPACE Facilities Management", "Explore selected supplied facilities, construction and operational imagery from ST-SPACE. Project details can be expanded after client approval.", "/projects");

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-[#050607] py-14 sm:py-20"><div className="container-shell"><Breadcrumbs items={[{ label: "Our Work" }]} /><div className="mt-16 grid gap-10 lg:grid-cols-[1fr_.75fr] lg:items-end"><div><p className="eyebrow">01 / SUPPLIED PROJECT IMAGERY</p><h1 className="display mt-5 max-w-4xl text-6xl font-semibold leading-[.88] sm:text-8xl">Work that gives the space <span className="text-[#F5BC38]">momentum.</span></h1></div><p className="max-w-md text-base leading-7 text-white/55">A visual gallery of supplied facilities, construction and operational imagery. Named client references and project outcomes will be added once approved.</p></div></div></section>
      <section className="bg-[#111315] py-16 sm:py-24"><div className="container-shell grid gap-6 lg:grid-cols-[1.15fr_.85fr] lg:items-start"><div className="image-frame aspect-[4/3]"><Image src="/images/facilities/site-progress.webp" alt="Workers on a supplied building project image" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" /></div><div className="grid gap-6"><div className="image-frame aspect-[4/3]"><Image src="/images/facilities/construction-slab.webp" alt="Concrete slab and reinforcement on a supplied building site" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" /></div><div className="border-t border-white/15 pt-5"><p className="eyebrow">02 / FIELD OPERATIONS</p><h2 className="display mt-3 text-3xl font-semibold">A closer look at the work behind the space.</h2><p className="mt-3 text-sm leading-6 text-white/50">The supplied footage below is presented as operational imagery, not as a named client case study.</p></div></div></div></section>
      <section className="bg-[#050607] py-16 sm:py-24"><div className="container-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div><p className="eyebrow">03 / VIDEO FIELD NOTE</p><h2 className="display mt-5 text-4xl font-semibold leading-[.98] sm:text-5xl">Progress is a practice.</h2><p className="mt-5 max-w-md text-sm leading-7 text-white/55">Use the supplied video to see the kind of operational context that informs a considered facilities conversation.</p><Link href="/request-a-quote" className="inline-flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#F5BC38]">Start a project conversation <ArrowUpRight size={16} /></Link></div><div className="image-frame relative aspect-video"><video controls preload="metadata" poster="/images/projects/operations-video-poster.jpg" className="h-full w-full object-cover"><source src="/videos/operations-progress.mp4" type="video/mp4" />Your browser does not support the supplied video.</video><div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 bg-[#050607]/80 px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white"><Play size={13} className="text-[#F5BC38]" /> supplied footage</div></div></div></section>
      <ContactStrip />
    </>
  );
}
