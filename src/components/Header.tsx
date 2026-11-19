"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f3f0e8]/95 backdrop-blur-md">
      <div className="container-shell flex min-h-[76px] items-center justify-between gap-6">
        <Link href="/" aria-label="ST-SPACE home" className="flex items-center">
          <Image src="/images/branding/st-space-logo.png" alt="ST-SPACE Facilities Management Services" width={208} height={70} priority className="h-auto w-[170px] sm:w-[208px]" />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-black/70 transition-colors hover:text-[#9b6b0c]">
              {item.label}
            </Link>
          ))}
          <Link href="/request-a-quote" className="btn-primary min-h-0 px-4 py-3 text-[0.66rem]">
            Request a quote <ArrowUpRight size={15} strokeWidth={2.4} />
          </Link>
        </nav>
        <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" className="inline-flex min-h-11 min-w-11 items-center justify-center border border-black/20 text-[#050607] lg:hidden">
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && (
        <div id="mobile-navigation" className="border-t border-black/10 bg-[#f3f0e8] lg:hidden">
          <nav aria-label="Mobile navigation" className="container-shell flex flex-col gap-1 py-4">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-black/10 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black/80">
                {item.label} <ArrowUpRight size={16} className="text-[#9b6b0c]" />
              </Link>
            ))}
            <Link href="/request-a-quote" onClick={() => setOpen(false)} className="btn-primary mt-4">Request a quote <ArrowUpRight size={16} /></Link>
          </nav>
        </div>
      )}
    </header>
  );
}
