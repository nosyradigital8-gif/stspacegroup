import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return <section className="flex min-h-[70vh] items-center bg-[#050607] py-20"><div className="container-shell"><p className="eyebrow">404 / ROUTE NOT FOUND</p><h1 className="display mt-5 max-w-3xl text-6xl font-semibold leading-[.88] sm:text-8xl">This space is not on the map.</h1><p className="mt-7 max-w-lg text-base leading-7 text-white/55">The page you requested could not be found. Let&apos;s get you back to the spaces ST-SPACE can help manage.</p><div className="mt-9 flex flex-wrap gap-3"><Link href="/" className="btn-primary"><ArrowLeft size={16} /> Back home</Link><Link href="/contact" className="btn-secondary">Contact ST-SPACE <ArrowUpRight size={16} /></Link></div></div></section>;
}
