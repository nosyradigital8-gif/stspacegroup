import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/config/site";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article className="group grid gap-0 border-t border-white/15 py-7 md:grid-cols-[72px_1fr_180px] md:gap-6 md:py-8">
      <p className="eyebrow text-white/45">{String(index + 1).padStart(2, "0")}</p>
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <p className="eyebrow">{service.eyebrow.split(" / ")[1]}</p>
          <span className="h-px w-7 bg-[#D99B20]" />
        </div>
        <h3 className="display mt-3 text-2xl font-semibold text-white sm:text-3xl">{service.title}</h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-white/55">{service.summary}</p>
        <Link href={`/services/${service.slug}`} className="mt-5 inline-flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#F5BC38]">View service <ArrowUpRight size={15} /></Link>
      </div>
      <div className="image-frame mt-6 aspect-[4/3] md:mt-0">
        <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 768px) 180px, 100vw" className="object-cover" />
      </div>
    </article>
  );
}
