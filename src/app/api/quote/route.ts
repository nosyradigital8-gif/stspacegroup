import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const requiredFields = ["fullName", "email", "phone", "service", "propertyType", "location", "requirements"] as const;

export async function POST(request: Request) {
  try {
    const payload = await request.json() as Record<string, unknown>;
    if (typeof payload.website === "string" && payload.website.trim()) return NextResponse.json({ message: "Thanks." });
    const missing = requiredFields.find((field) => typeof payload[field] !== "string" || !String(payload[field]).trim());
    if (missing) return NextResponse.json({ message: `Please complete the ${missing.replace(/([A-Z])/g, " $1").toLowerCase()} field.` }, { status: 400 });
    if (!String(payload.email).includes("@")) return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    if (String(payload.requirements).trim().length < 20) return NextResponse.json({ message: "Please add a little more detail about your project requirements." }, { status: 400 });

    const formData = new URLSearchParams({
      _subject: `New ST-SPACE enquiry: ${String(payload.service)}`,
      _template: "table",
      _captcha: "false",
      fullName: String(payload.fullName).trim(),
      companyName: String(payload.companyName ?? "").trim(),
      email: String(payload.email).trim(),
      phone: String(payload.phone).trim(),
      service: String(payload.service).trim(),
      propertyType: String(payload.propertyType).trim(),
      location: String(payload.location).trim(),
      requirements: String(payload.requirements).trim(),
      message: String(payload.message ?? "").trim(),
    });

    const delivery = await fetch(siteConfig.quoteForm.endpoint, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/x-www-form-urlencoded" }, body: formData, cache: "no-store" });
    if (!delivery.ok) return NextResponse.json({ message: "The enquiry service is temporarily unavailable. Please call or WhatsApp ST-SPACE instead." }, { status: 502 });
    return NextResponse.json({ message: "Your enquiry has been sent." });
  } catch {
    return NextResponse.json({ message: "We could not process the enquiry. Please call or WhatsApp ST-SPACE instead." }, { status: 500 });
  }
}
