import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Building2, Check, Clock3, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionIntro } from "@/components/SectionIntro";
import { ContactStrip } from "@/components/ContactStrip";

export const metadata = pageMetadata("Facilities Management Services in Ghana | ST-SPACE", "ST-SPACE delivers practical facilities, property, project support and fumigation services for better-managed spaces in Accra, Kumasi and across Ghana.", "/");

export default function HomePage() {
  return (
    <>
      <section className="noise relative overflow-hidden border-b border-white/10 bg-[#050607]">
        <div className="container-shell grid min-h-[680px] items-stretch gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10 flex flex-col justify-center py-20 pr-0 lg:py-24 lg:pr-14">
            <div className="flex items-center gap-3"><span className="eyebrow">ST-SPACE / GHANA</span><span className="h-px w-10 bg-[#D99B20]" /></div>
            <h1 className="display mt-7 max-w-xl text-balance text-6xl font-semibold leading-[0.89] text-white sm:text-7xl lg:text-[5.8rem]">Smarter facilities. <span className="text-[#F5BC38]">Better managed spaces.</span></h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-white/60">Professional facilities management solutions that protect your assets, improve operational efficiency and create safer, better-performing environments.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link href="/request-a-quote" className="btn-primary">Request a consultation <ArrowUpRight size={16} /></Link><Link href="/services" className="btn-secondary">Explore services <ArrowDownRight size={16} /></Link></div>
            <div className="mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-white/15 pt-5 text-[0.66rem] uppercase tracking-[0.13em] text-white/45"><span><strong className="block text-xl font-semibold text-white">01</strong>Partner mindset</span><span><strong className="block text-xl font-semibold text-white">02</strong>Operational care</span><span><strong className="block text-xl font-semibold text-white">03</strong>Clear next steps</span></div>
          </div>
          <div className="image-frame relative min-h-[460px] lg:min-h-0">
            <Image src="/images/hero/operations-night.webp" alt="Floodlit sports facility supplied as ST-SPACE operational imagery" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050607]/65 via-transparent to-transparent lg:from-[#050607]/70" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 border-t border-white/40 pt-3 text-[0.62rem] font-bold uppercase tracking-[0.17em] text-white/70"><span>Spaces in motion</span><span className="text-[#F5BC38]">Your space. Our priority.</span></div>
          </div>
        </div>
      </section>

      <section className="section-frame bg-[#111315] py-20 sm:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <SectionIntro eyebrow="01 / THE ST-SPACE APPROACH" title="We manage the conditions that keep your work moving." />
          <div className="max-w-2xl lg:pt-10"><p className="text-xl leading-8 text-white/82 sm:text-2xl">{siteConfig.positioning}</p><p className="mt-7 max-w-xl text-sm leading-7 text-white/50">From the everyday detail of a well-managed property to the focused support of a live project, we bring practical coordination, care and accountability to the spaces people rely on.</p><Link href="/about" className="mt-8 inline-flex items-center gap-2 text-[0.7rem] font-extrabold uppercase tracking-[0.15em] text-[#F5BC38]">About ST-SPACE <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      <section id="services" className="section-frame bg-[#050607] py-20 sm:py-28">
        <div className="container-shell"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><SectionIntro eyebrow="02 / CORE SERVICES" title="One partner. All solutions." text="A focused set of services for property owners, operators, teams and institutions who need spaces to perform." /><Link href="/services" className="inline-flex items-center gap-2 text-[0.7rem] font-extrabold uppercase tracking-[0.15em] text-[#F5BC38]">View all services <ArrowUpRight size={16} /></Link></div><div className="mt-12">{siteConfig.services.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}</div></div>
      </section>

      <section className="section-frame bg-[#f3f0e8] py-20 text-[#050607] sm:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-20">
          <div className="image-frame aspect-[4/3]"><Image src="/images/facilities/construction-slab.webp" alt="Construction team working across a concrete slab" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" /></div>
          <div><p className="eyebrow text-[#9b6b0c]">03 / OPERATIONAL CARE</p><div className="gold-rule mt-4" /><h2 className="display mt-5 text-4xl font-semibold leading-[0.98] sm:text-5xl">Care for the space. Clarity for the people in it.</h2><p className="mt-6 text-base leading-7 text-black/60">A property is never just a building. It is where teams work, customers arrive, residents live and organizations deliver. Our job is to help the operational layer stay visible, supported and ready.</p><div className="mt-8 grid gap-4 border-t border-black/15 pt-6 text-sm text-black/70 sm:grid-cols-2"><div><ShieldCheck className="text-[#9b6b0c]" size={22} /><p className="mt-3 font-bold">Safety-conscious support</p></div><div><Sparkles className="text-[#9b6b0c]" size={22} /><p className="mt-3 font-bold">Better-presented spaces</p></div></div><Link href="/contact" className="btn-primary mt-9">Talk to our team <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      <section className="section-frame bg-[#111315] py-20 sm:py-28">
        <div className="container-shell"><SectionIntro eyebrow="04 / WHY ST-SPACE" title="Dependability is a daily practice." text="The best facilities partner is the one that helps you feel in control of the space, not further away from it." /><div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">{siteConfig.differentiators.map((item) => <div key={item.number} className="bg-[#111315] p-6"><p className="eyebrow text-white/35">{item.number}</p><h3 className="mt-12 text-lg font-bold leading-snug text-white">{item.title}</h3><p className="mt-4 text-sm leading-6 text-white/50">{item.text}</p></div>)}</div></div>
      </section>

      <section className="section-frame bg-[#050607] py-20 sm:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><SectionIntro eyebrow="05 / HOW WE WORK" title="A clear operating rhythm." text="The process stays straightforward: understand the need, plan the support, deliver carefully and keep improving the fit." /><div className="grid gap-0 border-t border-white/15">{siteConfig.process.map((item) => <div key={item.number} className="grid gap-4 border-b border-white/15 py-6 sm:grid-cols-[80px_1fr_1.5fr] sm:items-center"><p className="eyebrow text-white/35">{item.number}</p><h3 className="text-xl font-bold text-white">{item.title}</h3><p className="text-sm leading-6 text-white/50">{item.text}</p></div>)}</div></div>
      </section>

      <section className="section-frame bg-[#111315] py-20 sm:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_.95fr] lg:items-end"><div><SectionIntro eyebrow="06 / WHERE WE FIT" title="Built around the places people depend on." text="Relevant applications include commercial buildings, offices, residences, retail, institutions and industrial facilities. These are service applications, not a list of confirmed clients." /><div className="mt-10 grid gap-x-8 gap-y-0 sm:grid-cols-2">{siteConfig.industries.map((industry, index) => <div key={industry.label} className="flex gap-4 border-t border-white/15 py-5"><span className="eyebrow text-white/30">0{index + 1}</span><div><h3 className="font-bold text-white">{industry.label}</h3><p className="mt-2 text-sm leading-6 text-white/45">{industry.detail}</p></div></div>)}</div></div><div className="image-frame aspect-[4/3]"><Image src="/images/facilities/site-progress.webp" alt="Workers coordinating on a supplied building project image" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" /></div></div>
      </section>

      <ContactStrip />
      <section className="bg-[#050607] py-8"><div className="container-shell flex flex-wrap items-center justify-between gap-4 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-white/35"><span className="flex items-center gap-2"><Building2 size={15} className="text-[#D99B20]" /> Accra · Kumasi · Ghana</span><span className="flex items-center gap-2"><Clock3 size={15} className="text-[#D99B20]" /> 24/7 reliability mindset</span><span className="flex items-center gap-2"><UsersRound size={15} className="text-[#D99B20]" /> People-first operations</span><span className="hidden items-center gap-2 sm:flex"><Check size={15} className="text-[#D99B20]" /> Your space. Our priority.</span></div></section>
    </>
  );
}
