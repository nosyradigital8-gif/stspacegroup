import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/", disallow: ["/api/"] }, ...(siteConfig.publicOrigin ? { sitemap: absoluteUrl("/sitemap.xml") } : {}) };
}
