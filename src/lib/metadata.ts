import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const absoluteUrl = (path = "/") =>
  siteConfig.publicOrigin ? new URL(path, siteConfig.publicOrigin).toString() : undefined;

export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      ...(url ? { url } : {}),
      images: [{ url: "/images/hero/operations-night.webp", width: 1280, height: 960, alt: "ST-SPACE operational facilities imagery" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero/operations-night.webp"],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.positioning,
    logo: absoluteUrl("/images/branding/st-space-logo.png"),
    url: absoluteUrl("/"),
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    areaServed: ["Accra", "Kumasi", "Ghana"],
    address: siteConfig.contact.locations.map((location) => ({
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressCountry: "GH",
      streetAddress: location.address,
    })),
    sameAs: [siteConfig.contact.whatsappHref],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.positioning,
    url: absoluteUrl("/"),
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(absoluteUrl(item.path) ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

export function serviceJsonLd(service: { title: string; description: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: absoluteUrl("/"),
    },
    areaServed: ["Accra", "Kumasi", "Ghana"],
    url: absoluteUrl(`/services/${service.slug}`),
  };
}
