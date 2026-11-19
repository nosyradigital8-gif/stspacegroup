export type Service = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  benefits: string[];
  scope: string[];
};

export const siteConfig = {
  name: "ST-SPACE",
  descriptor: "FACILITIES MANAGEMENT SERVICES",
  publicOrigin: "https://stspacegroup-nosyradigital8-9804s-projects.vercel.app",
  tagline: "We manage spaces. You focus on success.",
  positioning:
    "At ST-SPACE, we deliver comprehensive and innovative facilities management solutions that ensure your property, assets, and people are safe, efficient, and productive.",
  brandStatement: "YOUR SPACE. OUR PRIORITY.",
  secondaryStatement: "ONE PARTNER. ALL SOLUTIONS. EXCEPTIONAL RESULTS.",
  contact: {
    phone: "+233 24 437 0672",
    phoneHref: "tel:+233244370672",
    whatsapp: "+233 20 593 5800",
    whatsappHref: "https://wa.me/233205935800",
    email: "ayusuffirstnmae@yahoo.com",
    emailHref: "mailto:ayusuffirstnmae@yahoo.com",
    locations: [
      { city: "Accra", address: "Beacham Street, Dansoman, Ghana." },
      { city: "Kumasi", address: "Asokore Mampong, Ghana." },
    ],
  },
  navigation: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Our Work", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    {
      slug: "facility-management",
      navLabel: "Facility Management",
      eyebrow: "01 / OPERATIONS",
      title: "Facility Management",
      summary: "Keep the everyday running with discipline, visibility and care.",
      description:
        "ST-SPACE supports the operational rhythm of your property through practical facilities management, preventive attention and a safer, better-managed environment.",
      image: "/images/facilities/construction-slab.webp",
      imageAlt: "Construction team working across a concrete building slab",
      benefits: [
        "More consistent day-to-day operations",
        "Proactive attention to building needs",
        "A safer, more organized environment",
      ],
      scope: [
        "Routine facilities coordination",
        "Preventive maintenance planning",
        "Operational support for property teams",
        "Clearer attention to safety and presentation",
      ],
    },
    {
      slug: "asset-property-management",
      navLabel: "Asset & Property Management",
      eyebrow: "02 / VALUE PROTECTION",
      title: "Asset & Property Management",
      summary: "Protect the value of the spaces and assets you depend on.",
      description:
        "We help owners and operators take a more strategic view of property care, keeping attention on asset condition, occupant experience and long-term value.",
      image: "/images/facilities/site-progress.webp",
      imageAlt: "Team members working on a building project in Accra",
      benefits: [
        "Greater visibility across property needs",
        "A more deliberate approach to asset care",
        "Support for protecting long-term value",
      ],
      scope: [
        "Property operations coordination",
        "Asset condition attention",
        "Maintenance and support planning",
        "Communication around priorities and next steps",
      ],
    },
    {
      slug: "project-support-services",
      navLabel: "Project & Support Services",
      eyebrow: "03 / DELIVERY SUPPORT",
      title: "Project & Support Services",
      summary: "Bring an operating partner into the work from planning to execution.",
      description:
        "From project support to practical operational needs, ST-SPACE adds focused coordination where your team needs another capable set of hands.",
      image: "/images/maintenance/technical-maintenance.webp",
      imageAlt: "Technician carrying out technical maintenance beside a sports facility",
      benefits: [
        "Focused support for active projects",
        "Better coordination across practical tasks",
        "A partner that stays close to the detail",
      ],
      scope: [
        "Project planning support",
        "On-site operational assistance",
        "Technical and practical coordination",
        "Execution support around agreed requirements",
      ],
    },
    {
      slug: "fumigation",
      navLabel: "Fumigation",
      eyebrow: "04 / HEALTH & SAFETY",
      title: "Fumigation",
      summary: "Support healthier, cleaner and safer spaces with effective pest control.",
      description:
        "ST-SPACE provides focused fumigation support for properties that need a cleaner, more comfortable environment for people, assets and daily operations.",
      image: "/images/hero/operations-night.webp",
      imageAlt: "Floodlit sports facility ready for evening operations",
      benefits: [
        "A cleaner, more comfortable environment",
        "Targeted attention to pest-control needs",
        "Support for property health and presentation",
      ],
      scope: [
        "Fumigation planning and coordination",
        "Property-specific service discussions",
        "Practical preparation guidance",
        "Follow-up conversations around ongoing needs",
      ],
    },
  ] satisfies Service[],
  differentiators: [
    { number: "01", title: "Experienced & Trained Team", text: "People who understand that dependable service is built in the details." },
    { number: "02", title: "24/7 Reliability", text: "A service mindset that keeps your priorities visible beyond the obvious hours." },
    { number: "03", title: "Tailored Solutions", text: "Practical support shaped around your property, people and operating context." },
    { number: "04", title: "Quality Assured", text: "Clear expectations, careful execution and attention to the finished result." },
    { number: "05", title: "Customer Satisfaction Driven", text: "A partnership approach that starts with listening and stays accountable." },
  ],
  industries: [
    { label: "Commercial buildings", detail: "For properties where presentation, uptime and coordination matter every day." },
    { label: "Corporate offices", detail: "For teams that need safe, efficient spaces without operational distraction." },
    { label: "Residential properties", detail: "For developments that need consistent care across shared and private spaces." },
    { label: "Retail & commercial spaces", detail: "For active environments where customers and staff feel the difference." },
    { label: "Institutional facilities", detail: "For spaces that serve people and need practical, responsible support." },
    { label: "Industrial facilities", detail: "For operational sites where maintenance and attention to detail protect momentum." },
  ],
  process: [
    { number: "01", title: "Understand", text: "We start with the property, the people and the operating requirements in front of us." },
    { number: "02", title: "Plan", text: "We shape a clear support approach around the priorities that matter most." },
    { number: "03", title: "Deliver", text: "We put the agreed plan into action with practical coordination and care." },
    { number: "04", title: "Improve", text: "We keep the conversation open so the support continues to fit the space." },
  ],
  quoteForm: {
    endpoint: "https://formsubmit.co/ajax/ayusuffirstnmae@yahoo.com",
    provider: "FormSubmit",
    activationNote: "The supplied recipient must activate FormSubmit before the first live enquiry can be delivered.",
  },
} as const;

export const serviceBySlug = (slug: string) => siteConfig.services.find((service) => service.slug === slug);
