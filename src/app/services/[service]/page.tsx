import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { siteConfig, serviceBySlug } from "@/config/site";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ContactStrip } from "@/components/ContactStrip";

export function generateStaticParams() { return siteConfig.services.map((service) => ({ service: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return pageMetadata("Service not found | ST-SPACE", "The requested ST-SPACE service could not be found.", `/services/${slug}`);
  return pageMetadata(`${service.title} | ST-SPACE Facilities Management`, `${service.description} Explore ST-SPACE ${service.title.toLowerCase()} support in Ghana.`, `/services/${service.slug}`);
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  return (
    <>
      <JsonLd data={[serviceJsonLd(service), breadcrumbJsonLd([{ name: "Services", path: "/services" }, { name: service.title, path: `/services/${service.slug}` }])]} />
      <section className="bg-[#050607] py-14 sm:py-20"><div className="container-shell"><Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.title }]} /><div className="mt-16 grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end"><div><p className="eyebrow">{service.eyebrow}</p><h1 className="display mt-5 max-w-3xl text-6xl font-semibold leading-[.88] sm:text-8xl">{service.title}</h1><p className="mt-7 max-w-xl text-base leading-7 text-white/60">{service.description}</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/request-a-quote" className="btn-primary">Request a consultation <ArrowUpRight size={16} /></Link><Link href="/contact" className="btn-secondary">Talk to the team <ArrowUpRight size={16} /></Link></div></div><div className="image-frame aspect-[4/3]"><Image src={service.image} alt={service.imageAlt} fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div></div></div></section>
      <section className="bg-[#f3f0e8] py-16 text-[#050607] sm:py-24"><div className="container-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow text-[#9b6b0c]">01 / WHY IT MATTERS</p><h2 className="display mt-5 text-4xl font-semibold leading-[.98] sm:text-5xl">{service.summary}</h2></div><div><p className="max-w-2xl text-xl leading-8 text-black/70">{service.description}</p><div className="mt-9 grid gap-4 border-t border-black/15 pt-7 sm:grid-cols-3">{service.benefits.map((benefit) => <div key={benefit}><Check size={19} className="text-[#9b6b0c]" /><p className="mt-3 text-sm font-bold leading-6">{benefit}</p></div>)}</div></div></div></section>
      <section className="bg-[#111315] py-16 sm:py-24"><div className="container-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow">02 / SCOPE OF SUPPORT</p><h2 className="display mt-5 text-4xl font-semibold leading-[.98] sm:text-5xl">A clearer next step starts here.</h2></div><div className="grid gap-0 border-t border-white/15">{service.scope.map((item, index) => <div key={item} className="grid gap-3 border-b border-white/15 py-5 sm:grid-cols-[70px_1fr] sm:items-center"><span className="eyebrow text-white/35">0{index + 1}</span><p className="text-lg font-semibold text-white/80">{item}</p></div>)}</div></div></section>
      <section className="bg-[#050607] py-16 sm:py-24"><div className="container-shell"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow">03 / RELATED SERVICES</p><h2 className="display mt-4 text-4xl font-semibold">Keep the whole space in view.</h2></div><Link href="/services" className="inline-flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#F5BC38]">All services <ArrowUpRight size={15} /></Link></div><div className="mt-8 grid gap-4 sm:grid-cols-3">{siteConfig.services.filter((item) => item.slug !== service.slug).slice(0, 3).map((item) => <Link key={item.slug} href={`/services/${item.slug}`} className="border-t border-white/15 py-5 transition-colors hover:border-[#D99B20]"><p className="eyebrow text-white/35">{item.eyebrow}</p><p className="mt-4 text-lg font-bold text-white">{item.title}</p><span className="mt-5 inline-flex text-[#F5BC38]"><ArrowUpRight size={17} /></span></Link>)}</div></div></section>
      <ContactStrip />
    </>
  );
}
