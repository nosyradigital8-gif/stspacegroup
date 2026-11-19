"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const initialState = { fullName: "", companyName: "", email: "", phone: "", service: "", propertyType: "", location: "", requirements: "", message: "", website: "" };

type FormState = typeof initialState;

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const update = (field: keyof FormState, value: string) => setForm((current) => ({ ...current, [field]: value }));

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const response = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "We could not send your request.");
      setStatus("success");
      setForm(initialState);
    } catch (submissionError) {
      setStatus("error");
      setError(submissionError instanceof Error ? submissionError.message : "We could not send your request. Please call or WhatsApp us instead.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-[#D99B20]/60 bg-[#111315] p-8 sm:p-10">
        <CheckCircle2 className="text-[#F5BC38]" size={34} />
        <p className="eyebrow mt-7">Request received</p>
        <h2 className="display mt-3 text-3xl font-semibold">Thanks for reaching out.</h2>
        <p className="mt-4 max-w-lg text-sm leading-7 text-white/60">Your enquiry has been sent to the ST-SPACE team. We&apos;ll review the details and follow up using the contact information you provided.</p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-secondary mt-7">Send another request <ArrowUpRight size={16} /></button>
      </div>
    );
  }

  const fieldClass = "form-field mt-2";
  return (
    <form onSubmit={submit} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm text-white/75">Full name *<input required className={fieldClass} value={form.fullName} onChange={(event) => update("fullName", event.target.value)} placeholder="Your full name" /></label>
        <label className="text-sm text-white/75">Company name<input className={fieldClass} value={form.companyName} onChange={(event) => update("companyName", event.target.value)} placeholder="Company or organization" /></label>
        <label className="text-sm text-white/75">Email address *<input required type="email" className={fieldClass} value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="you@company.com" /></label>
        <label className="text-sm text-white/75">Phone number *<input required type="tel" className={fieldClass} value={form.phone} onChange={(event) => update("phone", event.target.value)} placeholder="+233 ..." /></label>
        <label className="text-sm text-white/75">Service required *<select required className={fieldClass} value={form.service} onChange={(event) => update("service", event.target.value)}><option value="">Select a service</option>{siteConfig.services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}</select></label>
        <label className="text-sm text-white/75">Property type *<select required className={fieldClass} value={form.propertyType} onChange={(event) => update("propertyType", event.target.value)}><option value="">Select a property type</option>{siteConfig.industries.map((industry) => <option key={industry.label} value={industry.label}>{industry.label}</option>)}</select></label>
      </div>
      <label className="text-sm text-white/75">Location *<input required className={fieldClass} value={form.location} onChange={(event) => update("location", event.target.value)} placeholder="Accra, Kumasi or another location" /></label>
      <label className="text-sm text-white/75">Project requirements<textarea required minLength={20} rows={5} className={fieldClass} value={form.requirements} onChange={(event) => update("requirements", event.target.value)} placeholder="Tell us what needs attention, the current situation and the support you are looking for." /></label>
      <label className="text-sm text-white/75">Additional message<textarea rows={4} className={fieldClass} value={form.message} onChange={(event) => update("message", event.target.value)} placeholder="Anything else we should know?" /></label>
      <label className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(event) => update("website", event.target.value)} /></label>
      {status === "error" && <p role="alert" className="border border-red-400/40 bg-red-950/30 p-3 text-sm text-red-200">{error}</p>}
      <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-md text-xs leading-5 text-white/40">By submitting this form, you are asking ST-SPACE to contact you about the information provided.</p><button type="submit" disabled={status === "loading"} className="btn-primary shrink-0 disabled:cursor-wait disabled:opacity-60">{status === "loading" ? <><LoaderCircle size={16} className="animate-spin" /> Sending</> : <>Send enquiry <ArrowUpRight size={16} /></>}</button></div>
      <p className="text-xs leading-5 text-white/35">Form delivery is handled through {siteConfig.quoteForm.provider}. {siteConfig.quoteForm.activationNote}</p>
    </form>
  );
}
