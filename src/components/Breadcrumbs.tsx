import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-white/45">
      <Link href="/" className="hover:text-[#F5BC38]">Home</Link>
      {items.map((item) => (
        <span key={`${item.label}-${item.href ?? "current"}`} className="flex items-center gap-2">
          <ChevronRight size={13} className="text-[#D99B20]" />
          {item.href ? <Link href={item.href} className="hover:text-[#F5BC38]">{item.label}</Link> : <span aria-current="page" className="text-white/70">{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}
