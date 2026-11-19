import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

const paths = ["/", "/about", "/services", "/services/facility-management", "/services/asset-property-management", "/services/project-support-services", "/services/fumigation", "/industries", "/projects", "/contact", "/request-a-quote"];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.publicOrigin) return [];
  return paths.map((path) => ({ url: absoluteUrl(path) as string, lastModified: new Date(), changeFrequency: path === "/" ? "weekly" : "monthly", priority: path === "/" ? 1 : 0.7 }));
}
