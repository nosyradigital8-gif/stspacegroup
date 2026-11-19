# ST-SPACE Facilities Management Services

Production corporate website for ST-SPACE, built with Next.js App Router, TypeScript, Tailwind CSS and Lucide icons.

**Production:** https://stspacegroup.vercel.app  
**Repository:** https://github.com/nosyradigital8-gif/stspacegroup  
**Branch:** `main`

## Local development

```bash
npm install
npm run dev
```

Validation commands:

```bash
npm run typecheck
npm run lint
npm run build
npm run start -- --hostname 0.0.0.0 --port 3000
```

## Website structure

The public site includes the homepage, About, Services, four service detail routes, Industries, Our Work, Contact and Request a Quote. Public business content and integration settings are centralized in `src/config/site.ts`. SEO routes live in `src/app/sitemap.ts` and `src/app/robots.ts`; the verified public origin is configured there.

## Supplied assets

The original repository archive and extracted source files are retained. Optimized web derivatives live under `public/images/` and `public/videos/`. The site uses the supplied ST-SPACE logo and supplied facilities, construction, maintenance and operational imagery. The Our Work page labels the gallery as supplied imagery because approved project names, clients and outcomes were not provided.

## Quote form delivery

`/api/quote` validates the request, rejects the honeypot field, and forwards valid enquiries to the FormSubmit AJAX endpoint configured in `src/config/site.ts` using the exact supplied email address. The recipient must complete FormSubmit activation before the first live enquiry can be delivered. If the third-party service is unavailable, the API returns an error and the UI directs the visitor to call or WhatsApp ST-SPACE instead.

## Verified checks

The production build, TypeScript check and ESLint check pass. The live production route check returned 200 for all required pages, sitemap, robots and route manifest, and returned a real 404 for an unknown route. A production Lighthouse pass on 19 November 2026 measured Performance **97**, Accessibility **96**, Best Practices **96** and SEO **100**.

## Business confirmation before final approval

The supplied email address is preserved exactly as `ayusuffirstnmae@yahoo.com` and should be confirmed by the client before final approval. FormSubmit recipient activation is required before live quote delivery. Custom domain and DNS changes are intentionally not included.
