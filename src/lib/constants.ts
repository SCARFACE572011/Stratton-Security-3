/* ─── STRATTON SECURITY GROUP — SITE CONSTANTS ──────────────────────────────
   All data verified from site audit (April 2026).
   Fields marked // VERIFY need client confirmation before launch.
──────────────────────────────────────────────────────────────────────────── */

export const SITE_CONFIG = {
  name: "Stratton Security Group",
  tagline: "Strength. Vigilance. Integrity.",
  shortTagline: "California's Premier Private Security",
  heroBrand: "Strength. Vigilance. Integrity.",
  brand_promise:
    "We place only qualified, background-checked, rigorously trained professionals at your property — carrying the discipline of military and law-enforcement service, personalized to your needs.",
  mission: "Protect People, Assets, and Peace of Mind",
  vision: "Set the standard for private security across California.",
  phone: "(424) 440-5554",
  phoneRaw: "4244405554",
  phoneE164: "+14244405554",
  email: "Info@StrattonSecurityGroup.com",
  address: "10940 Wilshire Blvd, Suite 1720",
  city: "Los Angeles",
  state: "CA",
  zip: "90024",
  fullAddress: "10940 Wilshire Blvd, Suite 1720, Los Angeles, CA 90024",
  serviceAreas: ["Los Angeles", "Beverly Hills", "Southern California", "California"],
  hours: "24 Hours / 7 Days a Week / 365 Days a Year",
  licenseNumber: "122163", // CA PPO License #122163
  social: {
    instagram: "https://www.instagram.com/stratton.security/",
    facebook: "https://www.facebook.com/p/Stratton-Security-100067025670413",
    twitter: "https://x.com/STRATTONSCGROUP",
    linkedin: "", // TODO: confirm LinkedIn URL
  },
  values: ["Strength", "Vigilance", "Integrity"],
  heroVideoSrc: "", // TODO: obtain direct video URL from Squarespace CDN or client
  heroPosterImage: "/images/hero-poster.svg", // TODO: replace with high-res photographic poster
};

// Real clients shown in the "Worked With & Trusted By" marquee. Logos sourced
// from strattonsecuritygroup.com and hosted locally in /public/brand/clients.
export const CLIENT_LOGOS = [
  { name: "LAX", file: "/brand/clients/lax.png" },
  { name: "Los Angeles World Airports", file: "/brand/clients/los-angeles-world-airports.png" },
  { name: "Lincoln Property Company", file: "/brand/clients/lincoln-property-company.png" },
  { name: "Douglas Emmett", file: "/brand/clients/douglas-emmett.png" },
  { name: "Cushman & Wakefield", file: "/brand/clients/cushman-wakefield.png" },
  { name: "Caruso", file: "/brand/clients/caruso.jpg" },
  { name: "Hilton", file: "/brand/clients/hilton.png" },
  { name: "W Hotels", file: "/brand/clients/w-hotels.png" },
  { name: "sbe", file: "/brand/clients/sbe.png" },
  { name: "Rosewood Hotels & Resorts", file: "/brand/clients/rosewood.jpg" },
  { name: "Loews Hotels", file: "/brand/clients/loews.jpeg" },
  { name: "The Bicycle Hotel & Casino", file: "/brand/clients/bicycle-hotel-casino.png" },
  { name: "McShane Construction", file: "/brand/clients/mcshane-construction.png" },
  { name: "Mill Creek Residential", file: "/brand/clients/mill-creek.png" },
  { name: "Optimus Properties", file: "/brand/clients/optimus-properties.png" },
  { name: "Sierra Pacific", file: "/brand/clients/sierra-pacific.jpg" },
  { name: "Glaser Property Management", file: "/brand/clients/glaser.jpg" },
  { name: "Platinum Motorsport", file: "/brand/clients/platinum-motorsport.jpeg" },
] as const;

export const NAV_ITEMS = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Security Patrol", href: "/services/patrol" },
      { label: "Armed & Unarmed Officers", href: "/services/guard-services" },
      { label: "Commercial Real Estate", href: "/services/commercial-real-estate" },
      { label: "Residential & Community", href: "/services/residential" },
      { label: "Hotel & Hospitality", href: "/services/hospitality" },
      { label: "Retail & Shopping Centers", href: "/services/retail" },
      { label: "Construction & Job Sites", href: "/services/construction" },
      { label: "Corporate & Executive", href: "/services/corporate" },
      { label: "Event Security", href: "/services/events" },
      { label: "View All Services →", href: "/services" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Training", href: "/training" },
  { label: "Guides", href: "/resources" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export type ServiceDetail = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  benefits: { title: string; description: string }[];
  capabilities: string[];
  relatedIndustries: string[];
  icon: string;
  color: string;
};

export const SERVICES: ServiceDetail[] = [
  {
    id: "patrol",
    title: "Security Patrol",
    slug: "patrol",
    shortDescription:
      "Uniformed mobile and vehicle patrols delivering visible deterrence, rapid incident response, and around-the-clock coverage across your property.",
    longDescription:
      "Stratton's patrol program pairs marked vehicles and uniformed officers with randomized patrol timing and GPS-logged checkpoints — the combination that deters opportunistic crime without letting patterns become predictable. Every patrol is documented, every route auditable, and every response backed by a live 24/7 supervisor.",
    benefits: [
      {
        title: "Visible Deterrence",
        description:
          "Marked patrol vehicles and uniformed officers broadcast a clear signal: this property is protected and monitored.",
      },
      {
        title: "Randomized Routes",
        description:
          "Patrol intervals are intentionally non-patterned so bad actors cannot time a gap in coverage.",
      },
      {
        title: "Rapid Response",
        description:
          "Mobile officers respond to alarms, incidents, and after-hours calls — often faster than third-party dispatch.",
      },
      {
        title: "Documented Accountability",
        description:
          "GPS-verified checkpoints and digital logs give you full visibility into when and where our officers were on property.",
      },
    ],
    capabilities: [
      "Marked vehicle patrols",
      "Foot patrols on complex properties",
      "GPS-verified checkpoint scans",
      "Alarm response & investigation",
      "Lock & unlock services",
      "Incident documentation with photos",
    ],
    relatedIndustries: ["commercial-real-estate", "retail", "condominiums", "construction"],
    icon: "Shield",
    color: "blue",
  },
  {
    id: "guard",
    title: "Armed & Unarmed Officers",
    slug: "guard-services",
    shortDescription:
      "Professionally trained armed and unarmed security officers — licensed, background-checked, and held to the highest standards of conduct.",
    longDescription:
      "Every Stratton officer is licensed by the California Bureau of Security and Investigative Services, background-checked, drug-tested, and trained to our internal standards — which exceed the state minimum. Armed officers carry additional firearms permits (Exposed Firearm Permit) and complete live-fire requalification on a defined cadence.",
    benefits: [
      {
        title: "Vetted Personnel",
        description:
          "Criminal background checks, drug screening, and work history verification for every officer before deployment.",
      },
      {
        title: "Armed Or Unarmed",
        description:
          "Match the posture to the risk — armed officers for high-value assets, unarmed for guest-facing environments.",
      },
      {
        title: "Exceeds Minimums",
        description:
          "Stratton training goes beyond California's required hours — TEAM, CPR/First Aid, Power to Arrest, and more.",
      },
      {
        title: "Professional Presence",
        description:
          "Officers are uniformed, composed, and trained in de-escalation — never the loud, unprofessional type the industry is known for.",
      },
    ],
    capabilities: [
      "Armed officers (with Exposed Firearm Permit)",
      "Unarmed uniformed officers",
      "Plainclothes security",
      "Dedicated post assignments",
      "Relief and supervisor coverage",
      "Event deployment teams",
    ],
    relatedIndustries: ["hospitality", "financial", "government", "estates"],
    icon: "ShieldCheck",
    color: "gold",
  },
  {
    id: "commercial",
    title: "Commercial Real Estate",
    slug: "commercial-real-estate",
    shortDescription:
      "Comprehensive security management for office parks, corporate campuses, retail centers, condominiums, and multi-tenant facilities.",
    longDescription:
      "Commercial properties have multiple stakeholders — owners, tenants, visitors, and vendors — and every one of them expects security to be both present and invisible. Stratton designs programs that integrate with building operations, preserve tenant experience, and deliver measurable reduction in incident frequency.",
    benefits: [
      {
        title: "Tenant-Friendly Operations",
        description:
          "Officers are trained to be service-oriented with tenants while maintaining firm enforcement of access policies.",
      },
      {
        title: "Post Analysis & Reporting",
        description:
          "Quarterly reviews with property management — what happened, what changed, what's next.",
      },
      {
        title: "Vendor & Access Control",
        description:
          "Credentialed vendor check-in, package management, and after-hours access protocols.",
      },
      {
        title: "Integrated With Facilities",
        description:
          "Our team coordinates with engineering, janitorial, and leasing so security supports operations — not the other way around.",
      },
    ],
    capabilities: [
      "24/7 lobby ambassadors",
      "Tenant service & escort programs",
      "Loading dock & vendor control",
      "After-hours access management",
      "Parking enforcement coordination",
      "Emergency action plan integration",
    ],
    relatedIndustries: ["commercial-real-estate", "financial", "condominiums"],
    icon: "Building2",
    color: "steel",
  },
  {
    id: "residential",
    title: "Residential & Community",
    slug: "residential",
    shortDescription:
      "HOA patrol, gated community security, apartment complex protection, and discreet estate-level services for luxury residences.",
    longDescription:
      "Residential security is about trust with the people who live on the property. Stratton builds programs with HOAs and property managers that deliver consistent presence, recognize residents by name, enforce community rules with composure, and respond to issues without creating new ones.",
    benefits: [
      {
        title: "Known, Trusted Faces",
        description:
          "Consistent officer assignment so residents recognize and trust the team protecting their homes.",
      },
      {
        title: "HOA Coordination",
        description:
          "Regular communication with board members, property managers, and community leadership.",
      },
      {
        title: "Rule Enforcement With Composure",
        description:
          "Officers trained to enforce community standards respectfully — protecting residents without antagonizing them.",
      },
      {
        title: "Discretion For Estates",
        description:
          "For private residences, officers are trained in low-profile protocols matched to high-net-worth expectations.",
      },
    ],
    capabilities: [
      "Gated community patrol",
      "HOA & condo board reporting",
      "Apartment complex security",
      "Private estate detail",
      "Resident concierge support",
      "Package & delivery verification",
    ],
    relatedIndustries: ["condominiums", "estates"],
    icon: "Home",
    color: "blue",
  },
  {
    id: "hospitality",
    title: "Hotel & Hospitality",
    slug: "hospitality",
    shortDescription:
      "Guest-forward security for hotels, resorts, and entertainment venues — balancing presence with a service-first approach.",
    longDescription:
      "In hospitality, security is part of the guest experience. An officer who stands rigid in the lobby works against a five-star brand. Stratton places officers who read the room, hold the standard, and handle incidents before they become guest-visible problems.",
    benefits: [
      {
        title: "Guest Experience First",
        description:
          "Officers trained to be warm and service-oriented while maintaining vigilance — not either/or.",
      },
      {
        title: "TEAM Certified",
        description:
          "All officers certified in Techniques for Effective Alcohol Management for venues serving alcohol.",
      },
      {
        title: "Event Ready",
        description:
          "Scalable teams for conferences, galas, weddings, and venue-wide events with crowd management experience.",
      },
      {
        title: "Incident Discretion",
        description:
          "Issues are handled quickly and discreetly — protecting the guest experience and the brand reputation.",
      },
    ],
    capabilities: [
      "Lobby & front-of-house security",
      "Event & banquet detail",
      "VIP guest protection",
      "TEAM-certified alcohol management",
      "Pool, beach, and venue patrols",
      "Back-of-house & employee entrance posts",
    ],
    relatedIndustries: ["hospitality", "retail"],
    icon: "Star",
    color: "gold",
  },
  {
    id: "retail",
    title: "Retail & Shopping Centers",
    slug: "retail",
    shortDescription:
      "Loss prevention, access control, and customer-focused security for retail environments and high-traffic shopping destinations.",
    longDescription:
      "Retail security demands a specific balance — enough presence to deter theft and organized retail crime, light enough to preserve the shopping experience. Stratton deploys uniformed and plainclothes teams trained in California's legal framework for retail loss prevention.",
    benefits: [
      {
        title: "Organized Retail Crime Response",
        description:
          "Officers trained to recognize, document, and respond to organized retail crime patterns.",
      },
      {
        title: "Loss Prevention Expertise",
        description:
          "California-specific training on civil recovery and legal detainment for shoplifting incidents.",
      },
      {
        title: "Customer-Facing Professionalism",
        description:
          "Officers double as brand ambassadors — visible, approachable, and helpful to shoppers.",
      },
      {
        title: "Center-Wide Coordination",
        description:
          "For shopping centers, we coordinate with individual tenants and mall management as a single integrated team.",
      },
    ],
    capabilities: [
      "Uniformed store & center security",
      "Plainclothes loss prevention",
      "Organized retail crime investigations",
      "Parking lot patrols",
      "Opening & closing procedures",
      "Emergency evacuation drills",
    ],
    relatedIndustries: ["retail", "commercial-real-estate"],
    icon: "ShoppingBag",
    color: "steel",
  },
  {
    id: "construction",
    title: "Construction & Job Sites",
    slug: "construction",
    shortDescription:
      "Around-the-clock protection for construction sites, heavy equipment, materials, and active project environments.",
    longDescription:
      "Active construction sites combine high-value equipment, expensive raw materials, and unfinished structures — a combination that attracts theft, vandalism, and illegal dumping. Stratton's site programs combine fixed posts, mobile patrols, and access control for subcontractors.",
    benefits: [
      {
        title: "Copper & Equipment Theft Prevention",
        description:
          "Targeted deterrence for the materials and tools most often stolen from active job sites.",
      },
      {
        title: "Subcontractor Access Control",
        description:
          "Credentialed check-in for subs, deliveries, and inspectors — full visibility on who is on-site.",
      },
      {
        title: "After-Hours Coverage",
        description:
          "Site security scales up during the overnight and weekend hours when job sites are most vulnerable.",
      },
      {
        title: "Project Manager Reporting",
        description:
          "Daily logs and incident reports delivered to the GC and owner on a cadence that matches the project.",
      },
    ],
    capabilities: [
      "Fixed-post site security",
      "Mobile patrol between sites",
      "Gate & access control",
      "Subcontractor check-in",
      "Material & equipment inventory logs",
      "Firewatch during hot work",
    ],
    relatedIndustries: ["construction", "industrial"],
    icon: "HardHat",
    color: "blue",
  },
  {
    id: "events",
    title: "Event Security",
    slug: "events",
    shortDescription:
      "Scalable uniformed and plainclothes teams for galas, conferences, private events, and venue-wide functions — crowd management without compromising the guest experience.",
    longDescription:
      "Event security is a balance of visible presence and guest-experience preservation. Stratton plans each event from advance walk-through through post-event debrief — sizing the team to venue, attendance, VIP profile, and risk exposure. Officers coordinate with event staff, caterers, and venue leadership so security becomes part of a well-run event, not a friction point.",
    benefits: [
      {
        title: "Advance Planning",
        description:
          "Site advance, route planning, and risk assessment before the event — not scrambled together on arrival.",
      },
      {
        title: "Scalable Teams",
        description:
          "From intimate private dinners to 1,000+ guest galas — sized and staffed appropriately, not one-size-fits-all.",
      },
      {
        title: "VIP & Celebrity Experienced",
        description:
          "Officers with experience protecting high-profile guests, including discreet coordination with principal details.",
      },
      {
        title: "TEAM Certified",
        description:
          "Officers certified in alcohol management protocols for events serving beer, wine, and spirits.",
      },
    ],
    capabilities: [
      "Event advance and walk-through",
      "Credentialing and access control",
      "Crowd management & flow",
      "VIP arrival and departure details",
      "Perimeter and venue patrols",
      "Post-event incident reporting",
    ],
    relatedIndustries: ["hospitality", "government", "education"],
    icon: "Star",
    color: "gold",
  },
  {
    id: "corporate",
    title: "Corporate & Executive",
    slug: "corporate",
    shortDescription:
      "Executive protection, corporate security programs, concierge lobby services, and chauffeur services for high-profile clients.",
    longDescription:
      "For executives, board members, and high-profile principals, security is a balance of risk mitigation and personal comfort. Stratton provides discreet, professional protection details — from lobby ambassadors that elevate the guest experience to full executive protection for travel and events.",
    benefits: [
      {
        title: "Low-Profile Protection",
        description:
          "Executive protection that does not announce itself — discreet, professional, and sized to the threat.",
      },
      {
        title: "Advance & Travel Work",
        description:
          "Route planning, venue advance, and travel coordination for principals on the move.",
      },
      {
        title: "Concierge Ambassador Services",
        description:
          "Polished lobby teams that handle access control and visitor experience with executive-grade professionalism.",
      },
      {
        title: "Confidentiality",
        description:
          "Principal identities, schedules, and routines are protected by strict internal confidentiality standards.",
      },
    ],
    capabilities: [
      "Executive protection details",
      "Residential executive security",
      "Chauffeur & secure transport",
      "Corporate lobby ambassadors",
      "Event & conference advance",
      "Board meeting security",
    ],
    relatedIndustries: ["financial", "estates", "commercial-real-estate"],
    icon: "Briefcase",
    color: "gold",
  },
];

export type Industry = {
  label: string;
  slug: string;
  summary?: string;
  threats?: string[];
  approach?: string;
  relatedServices?: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    label: "Commercial Real Estate",
    slug: "commercial-real-estate",
    summary:
      "Office buildings, corporate campuses, business parks, and multi-tenant properties rely on Stratton for security programs that preserve tenant experience while delivering measurable incident reduction.",
    threats: [
      "Unauthorized after-hours access",
      "Vendor and delivery fraud",
      "Tenant workplace violence risk",
      "Parking structure incidents",
      "Loading dock theft",
    ],
    approach:
      "Integrated programs combining lobby ambassadors, roving patrols, and access control — built in coordination with property managers, engineers, and leasing teams.",
    relatedServices: ["commercial-real-estate", "patrol", "corporate"],
  },
  {
    label: "Retail & Shopping Centers",
    slug: "retail",
    summary:
      "Retail environments demand security that deters loss without degrading the shopping experience. Stratton deploys uniformed and plainclothes teams trained in organized retail crime response.",
    threats: [
      "Organized retail crime (ORC)",
      "Internal theft and shrink",
      "Parking lot incidents",
      "Customer conflict and disorderly conduct",
      "Unauthorized vendor solicitation",
    ],
    approach:
      "Customer-facing uniformed security combined with plainclothes loss prevention, backed by incident documentation that supports prosecution.",
    relatedServices: ["retail", "patrol", "guard-services"],
  },
  {
    label: "Hotel & Hospitality",
    slug: "hospitality",
    summary:
      "Hotels, resorts, and entertainment venues count on Stratton for guest-forward security — officers who read the room, maintain the brand standard, and handle incidents before guests notice.",
    threats: [
      "Guest room access violations",
      "Alcohol-related incidents in F&B venues",
      "VIP and celebrity guest exposure",
      "Event and banquet disruptions",
      "Back-of-house theft",
    ],
    approach:
      "TEAM-certified officers trained to balance warmth with vigilance, scalable teams for special events, and confidential VIP protocols.",
    relatedServices: ["hospitality", "corporate", "guard-services"],
  },
  {
    label: "Healthcare Facilities",
    slug: "healthcare",
    summary:
      "Hospitals, medical offices, and healthcare campuses face a unique mix of public access, vulnerable patients, and regulated workflows — requiring officers trained in de-escalation and HIPAA-aware conduct.",
    threats: [
      "Workplace violence against staff",
      "Patient elopement from restricted wards",
      "Pharmacy and controlled-substance security",
      "Visitor access violations",
      "Emergency department disruptions",
    ],
    approach:
      "De-escalation-first officers trained in healthcare-specific protocols, coordinated with nursing leadership and facilities security.",
    relatedServices: ["guard-services", "patrol"],
  },
  {
    label: "Education & Campus",
    slug: "education",
    summary:
      "Universities, K–12 schools, and educational campuses require security attuned to the rhythms of campus life — visible enough to reassure parents, calibrated enough to respect student experience.",
    threats: [
      "Unauthorized campus access",
      "Event and athletics crowd management",
      "Residential housing incidents",
      "Parking and traffic conflicts",
      "After-hours facility protection",
    ],
    approach:
      "Community-oriented officers trained in student and parent interaction, with scalable teams for athletic events, graduations, and campus functions.",
    relatedServices: ["patrol", "guard-services"],
  },
  {
    label: "Industrial & Manufacturing",
    slug: "industrial",
    summary:
      "Manufacturing plants, processing facilities, and industrial parks require disciplined access control and material accountability — with officers trained in the specific risks of each operational environment.",
    threats: [
      "Raw material and finished goods theft",
      "Employee credential fraud",
      "Truck and logistics fraud",
      "Industrial espionage attempts",
      "Safety and OSHA observation gaps",
    ],
    approach:
      "Gate and access control paired with patrols tuned to shift-change and loading cycles — plus incident reporting integrated with operations.",
    relatedServices: ["guard-services", "patrol", "construction"],
  },
  {
    label: "Government Institutions",
    slug: "government",
    summary:
      "Municipal buildings, courthouses, and public infrastructure require officers who understand public-sector protocols, credentialing, and the elevated threat environment of civic spaces.",
    threats: [
      "Public-facing workplace violence",
      "Credential and access fraud",
      "Protest and demonstration management",
      "Infrastructure targeting",
      "Elected-official protection needs",
    ],
    approach:
      "Officers with law enforcement backgrounds, trained in public-sector conduct and coordinated with municipal emergency management.",
    relatedServices: ["guard-services", "patrol", "corporate"],
  },
  {
    label: "Financial Institutions",
    slug: "financial",
    summary:
      "Banks, credit unions, investment firms, and financial data centers demand security that signals institutional seriousness while protecting assets and personnel.",
    threats: [
      "Robbery and armed threats",
      "Cash-in-transit exposure",
      "ATM and branch skimming",
      "Executive and employee protection",
      "Data center physical security",
    ],
    approach:
      "Armed uniformed officers, executive protection for principals, and integrated coordination with corporate security teams.",
    relatedServices: ["guard-services", "corporate", "commercial-real-estate"],
  },
  {
    label: "Auto Dealerships",
    slug: "auto-dealership",
    summary:
      "Auto dealerships combine high-value rolling inventory, customer-facing showrooms, and service centers with parts storage — each with its own security profile.",
    threats: [
      "Vehicle theft and catalytic converter theft",
      "Test-drive and customer fraud",
      "Service center parts theft",
      "After-hours lot access",
      "Employee theft",
    ],
    approach:
      "Overnight lot security combined with daytime showroom presence and service bay observation — tuned to the specific layout and exposure of each dealership.",
    relatedServices: ["patrol", "guard-services"],
  },
  {
    label: "Estates & Private Residences",
    slug: "estates",
    summary:
      "Luxury private residences, estates, and high-net-worth homes require discretion above all — officers trained in low-profile protocols and confidentiality.",
    threats: [
      "Paparazzi and unwanted surveillance",
      "Stalker and obsessed-fan exposure",
      "Staff credentialing and internal risk",
      "Construction and vendor access",
      "Residence-to-vehicle transitions",
    ],
    approach:
      "Low-profile officers with executive protection backgrounds, scaled to the principal's risk posture and lifestyle requirements.",
    relatedServices: ["residential", "corporate", "guard-services"],
  },
  {
    label: "Construction & Job Sites",
    slug: "construction",
    summary:
      "Active construction sites combine high-value materials and expensive equipment with unfinished, unsecured structures — a profile that demands purpose-built security programs.",
    threats: [
      "Copper and metal theft",
      "Heavy equipment theft",
      "Tool and material theft",
      "Illegal dumping on site",
      "Unauthorized subcontractor access",
    ],
    approach:
      "Fixed posts combined with mobile patrols, credentialed subcontractor check-in, and firewatch coverage during hot work — reporting directly to the GC.",
    relatedServices: ["construction", "patrol", "guard-services"],
  },
  {
    label: "Distribution & Logistics",
    slug: "logistics",
    summary:
      "Distribution centers, warehouses, and freight hubs operate around the clock with high truck volumes and continuous inventory flow — requiring security tuned to logistics operations.",
    threats: [
      "Cargo theft in transit",
      "Loading dock fraud",
      "Driver credential verification",
      "Perimeter breach attempts",
      "Inventory diversion",
    ],
    approach:
      "24/7 gate control, truck verification, and patrols coordinated with shift changes — backed by incident reporting that integrates with logistics operations.",
    relatedServices: ["guard-services", "patrol"],
  },
  {
    label: "Train & Bus Terminals",
    slug: "transit",
    summary:
      "Transit hubs require officers comfortable in high-traffic public environments — visible, composed, and trained to respond quickly in crowded settings.",
    threats: [
      "Passenger disputes and workplace violence",
      "Theft from passengers and platforms",
      "Homeless and mental health encounters",
      "Emergency response in crowds",
      "Credentialing at controlled access points",
    ],
    approach:
      "Uniformed officers trained in public-transit protocols, de-escalation, and emergency response — with experience in high-volume environments.",
    relatedServices: ["guard-services", "patrol"],
  },
  {
    label: "Condominiums & High-Rises",
    slug: "condominiums",
    summary:
      "Condominium complexes and high-rises rely on Stratton for consistent, resident-forward security that coordinates with HOA boards and property management.",
    threats: [
      "Unauthorized common-area access",
      "Package theft",
      "Resident disputes and rule enforcement",
      "After-hours visitor control",
      "Parking structure incidents",
    ],
    approach:
      "Consistent officer assignment for resident familiarity, HOA-integrated reporting, and concierge-style front-desk coverage.",
    relatedServices: ["residential", "commercial-real-estate", "patrol"],
  },
];

export const STATS = [
  { value: 50, suffix: "+", label: "Years Combined Experience" },
  { value: 14, suffix: "", label: "Industry Verticals Served" },
  { value: 24, suffix: "/7", label: "Operations Center" },
  { value: 5, suffix: "★", label: "Bark.com Rated" },
];

// Testimonials and Bark.com reviews are now CMS-managed (edit at /keystatic →
// Testimonials / Bark.com Reviews). Content lives in src/content/testimonials/*
// and src/content/bark-reviews/*, read via src/lib/content.ts.
//
// REVIEW_COUNT feeds the Organization aggregateRating JSON-LD. It's a static
// total (not auto-derived from the CMS) — bump it if the review volume changes
// significantly.
export const REVIEW_COUNT = 11;

export const FAQS = [
  {
    q: "What areas does Stratton Security Group serve?",
    a: "Stratton Security Group is headquartered in Los Angeles and operates statewide across California. We deploy patrol, guard, and specialized security services across LA County, Beverly Hills, Southern California, and adjacent markets.",
  },
  {
    q: "Is Stratton Security Group licensed and insured?",
    a: "Yes. Stratton holds California PPO License #122163 issued by the Bureau of Security and Investigative Services. All officers are individually licensed, and the company is fully bonded and insured.",
  },
  {
    q: "What is the difference between armed and unarmed officers?",
    a: "Armed officers carry an additional Exposed Firearm Permit and complete live-fire qualification on a defined cadence; they are appropriate for environments with elevated threat profiles. Unarmed officers provide the same professional presence and training for environments where an armed posture is not required or desired. Stratton helps you select the right posture during the risk assessment.",
  },
  {
    q: "How quickly can Stratton deploy to a new property?",
    a: "For standard deployments we can typically begin coverage within 72 hours of contract signing. For urgent incidents we have mobilized teams in under 24 hours. A Stratton advisor will confirm timing during your initial consultation.",
  },
  {
    q: "Are Stratton officers LAPD trained?",
    a: "Stratton's roster includes officers with current and former LAPD experience. All Stratton officers — LAPD-credentialed or not — complete our internal training program, which exceeds California's minimum requirements and includes TEAM certification, CPR/First Aid, and Power to Arrest.",
  },
  {
    q: "Do you provide security for one-time events?",
    a: "Yes. Stratton's event security program supports galas, conferences, weddings, private events, and venue-wide functions. We advance the venue, size the team appropriately, and deliver a post-event debrief. Start a conversation on the Contact page.",
  },
  {
    q: "Do you offer unarmed-only or plainclothes options?",
    a: "Yes. Stratton deploys unarmed uniformed officers, plainclothes teams (common in retail loss prevention and hospitality), and concierge-style lobby ambassadors. The posture is always matched to the property and the risk profile.",
  },
  {
    q: "How does Stratton handle incident reporting?",
    a: "Every incident is documented digitally with timestamps, photos when relevant, and written narrative. Clients receive regular reports on a cadence agreed to during program setup — daily for high-security operations, weekly or monthly for ongoing patrol programs. Supervisors are reachable 24/7.",
  },
  {
    q: "What training do Stratton officers receive?",
    a: "All active officers complete California's mandatory Power to Arrest curriculum, First Aid & CPR certification, and TEAM (Techniques for Effective Alcohol Management) certification. New officers complete Stratton's initial officer training covering post orders, communication, reporting, and conduct standards. See the Training page for more.",
  },
  {
    q: "Can Stratton customize a program to my specific property?",
    a: "Yes — and we strongly recommend it. No two properties are identical. Stratton starts every engagement with a risk assessment and designs a tailored program based on your facility, risk profile, and operational requirements.",
  },

  {
    q: "How does Stratton price its security services?",
    a: "Pricing is built around the program, not a flat menu rate. The main drivers are coverage hours, the number of posts, armed versus unarmed posture, officer experience level, site complexity, and whether you need supervision, vehicles, or specialized equipment. After the risk assessment, your advisor provides a clear written proposal that itemizes what you are paying for, so there are no surprises on the invoice.",
  },
  {
    q: "Is there a minimum contract or long-term commitment?",
    a: "For ongoing patrol and guard programs we typically structure straightforward service agreements rather than locking clients into long multi-year terms. One-time events, vacation watches, and short-term coverage are handled as standalone engagements with no continuing obligation. We would rather earn renewal through performance than hold a client to a contract they have outgrown.",
  },
  {
    q: "What does the onboarding process look like once I decide to start?",
    a: "It begins with a consultation and an on-site risk assessment, after which we draft post orders, define reporting cadence, and assign and brief the officers who will cover your site. Standard programs can usually begin coverage within 72 hours of a signed agreement, and a supervisor walks the property with you before the first shift so expectations are aligned from day one.",
  },
  {
    q: "We already have a guard company we are unhappy with. Is switching difficult?",
    a: "No. Transitions are routine for us, and we handle them so coverage is continuous with no gap between the outgoing provider and our team. We map your current post orders, identify what has been falling short, and stand up our officers on your timeline. Most clients tell us the hardest part was deciding to make the call.",
  },
  {
    q: "Can you check on a vacant home or property while the owner is away?",
    a: "Yes. Vacation and vacant-property checks are a common request, especially for estates and second homes. We schedule documented exterior and interior patrols on a set or randomized cadence, verify entry points, watch for signs of intrusion or maintenance issues like water leaks, and send you a timestamped report after each visit so you have a record while you are away.",
  },
  {
    q: "What technology and reporting tools do clients have access to?",
    a: "Officers log activity, patrols, and incidents through digital tools that capture timestamps, GPS-verified checkpoints, photos, and written narratives. Clients receive reports on the cadence set during program design and can reach a live supervisor 24/7. The goal is simple: you should always be able to see what happened on your property and when, without having to ask.",
  },];

export const DIFFERENTIATORS = [
  {
    title: "California Licensed & Insured",
    description:
      "All Stratton personnel hold active California PPO credentials and are thoroughly vetted, trained, and uniformed. Fully licensed, bonded, and insured.",
    icon: "BadgeCheck",
  },
  {
    title: "24/7/365 Operations",
    description:
      "Our operations center is staffed every hour of every day. You can reach a live supervisor at 3am on a holiday — because security risk doesn't keep business hours.",
    icon: "Clock",
  },
  {
    title: "LAPD-Trained Officers",
    description:
      "Our team includes officers with current and former LAPD experience, bringing law enforcement discipline and situational awareness to every assignment.",
    icon: "Shield",
  },
  {
    title: "Custom Security Programs",
    description:
      "No two properties are identical. Stratton builds tailored programs matched to your specific risk profile, facility type, and operational requirements.",
    icon: "Settings2",
  },
  {
    title: "Certified Training Standards",
    description:
      "Officers are certified in TEAM (Alcohol Management), First Aid & CPR, Power to Arrest, and ongoing professional development — not just the minimum.",
    icon: "Award",
  },
  {
    title: "Transparent Accountability",
    description:
      "Quarterly security post analysis, digital reporting, real-time incident logs, and proactive supervisor communication keep you informed and in control.",
    icon: "FileText",
  },
];

/* ─── SERVICE AREAS (local SEO landing pages) ─────────────────────────────── */
export type ServiceArea = {
  slug: string;
  name: string;
  region: string;
  summary: string;
  neighborhoods: string[];
  concerns: string[];
  services: string[]; // SERVICES slugs
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "beverly-hills",
    name: "Beverly Hills",
    region: "Westside Los Angeles",
    summary: "Beverly Hills pairs gated estates north of Sunset with the flagship luxury retail of the Golden Triangle, a combination that draws both property crime and persistent privacy intrusions. Stratton protects high-net-worth residences against follow-home robberies and unwanted media attention while securing boutique storefronts against organized smash-and-grab crews. Discretion is the operating standard \u2014 visible enough to deter, low-profile enough to fit a five-star address.",
    neighborhoods: ["Rodeo Drive", "The Golden Triangle", "Trousdale Estates", "Beverly Hills Flats", "Coldwater Canyon", "Sunset Boulevard"],
    concerns: ["Follow-home and home-invasion robberies targeting high-net-worth residents", "Paparazzi, trespassers, and privacy intrusions at estates and event arrivals", "Organized smash-and-grab crews hitting Rodeo Drive luxury retail", "Estate access control during construction, staff turnover, and large gatherings"],
    services: ["residential", "corporate", "retail"],
  },
  {
    slug: "santa-monica",
    name: "Santa Monica",
    region: "Westside Los Angeles",
    summary: "Santa Monica blends a major tourist economy along the Pier and Promenade with dense residential blocks, Silicon Beach offices, and a significant unhoused population that strains downtown retail and public spaces. Stratton delivers loss-prevention and ambassador-style coverage for Third Street and Main Street merchants, after-hours patrol for mixed-use buildings, and event teams for the beach and pier. Officers are trained to balance firm enforcement with the city's visitor-facing brand.",
    neighborhoods: ["Third Street Promenade", "Santa Monica Pier", "Main Street", "Montana Avenue", "Ocean Avenue", "Downtown Santa Monica"],
    concerns: ["Retail theft and aggressive panhandling along the Promenade and Main Street corridors", "Transient encampments and after-hours trespass at commercial and mixed-use properties", "Crowd management and asset protection at the Pier, beach, and outdoor events", "Vehicle break-ins and vandalism in tourist parking structures and lots"],
    services: ["retail", "patrol", "events"],
  },
  {
    slug: "century-city",
    name: "Century City",
    region: "Westside Los Angeles",
    summary: "Century City is a vertical business district of Class-A office towers, the Westfield mall, and luxury high-rise condominiums clustered around Avenue of the Stars and Constellation Boulevard. Stratton provides lobby ambassador programs, tenant escort and access control for multi-tenant towers, and 24/7 residential coverage for high-rise communities. The priority is seamless integration with building engineering, parking operations, and corporate tenants who expect security to be present yet invisible.",
    neighborhoods: ["Avenue of the Stars", "Constellation Boulevard", "Westfield Century City", "Century Park East", "Century Plaza Towers", "Olympic Boulevard"],
    concerns: ["Access control and tenant screening across multi-tenant Class-A office towers", "Parking structure security and vehicle theft in large subterranean garages", "Loss prevention and crowd flow at Westfield Century City retail", "Lobby management and resident safety in luxury high-rise condominiums"],
    services: ["commercial-real-estate", "corporate", "residential"],
  },
  {
    slug: "west-hollywood",
    name: "West Hollywood",
    region: "Central Los Angeles",
    summary: "West Hollywood runs from the nightlife density of the Sunset Strip and Santa Monica Boulevard to design-district showrooms and walkable residential blocks. The city's late-night bar, club, and restaurant scene drives demand for venue security, crowd management, and DUI-adjacent incident response, while design-district retail needs daytime loss prevention. Stratton fields TEAM-certified officers who keep venues safe and on-brand without dampening the guest experience.",
    neighborhoods: ["Sunset Strip", "Santa Monica Boulevard", "Pacific Design Center", "Melrose Avenue", "Boystown", "West Hollywood Design District"],
    concerns: ["Nightlife crowd control, intoxication, and altercations along the Sunset Strip", "Venue capacity, ID enforcement, and queue management for bars and clubs", "Loss prevention for design-district showrooms and Melrose retail", "After-hours protection for residential buildings near high-traffic corridors"],
    services: ["hospitality", "events", "patrol"],
  },
  {
    slug: "downtown-los-angeles",
    name: "Downtown Los Angeles",
    region: "Central Los Angeles",
    summary: "Downtown LA is the region's densest mix of high-rise offices, converted residential lofts, the entertainment campus around L.A. Live, and active transit hubs \u2014 set against acute street-level challenges in and around Skid Row. Stratton secures office and mixed-use towers, manages loading docks and lobbies, and deploys scalable event teams for arenas and convention crowds. Programs are built to coordinate with LAPD, Metro, and building operations across a 24-hour urban environment.",
    neighborhoods: ["Financial District", "Arts District", "L.A. Live", "Historic Core", "Little Tokyo", "South Park"],
    concerns: ["Trespass, vagrancy, and encampments at building perimeters and loading docks", "Lobby and access control for high-rise offices and converted residential lofts", "Large-crowd and event security around Crypto.com Arena, the Convention Center, and L.A. Live", "Vehicle break-ins, transit-adjacent crime, and after-hours patrol in mixed-use blocks"],
    services: ["commercial-real-estate", "events", "patrol"],
  },
  {
    slug: "pasadena",
    name: "Pasadena",
    region: "San Gabriel Valley",
    summary: "Pasadena combines the upscale shopping and dining of Old Pasadena and South Lake with historic estate neighborhoods, civic and cultural institutions, and marquee events like the Rose Parade and Rose Bowl games. Stratton supports retail loss prevention along Colorado Boulevard, estate and HOA patrol in the foothill neighborhoods, and large-scale event security for crowds that swell into the hundreds of thousands. Officers reflect the city's professional, community-oriented character.",
    neighborhoods: ["Old Pasadena", "South Lake Avenue", "Colorado Boulevard", "Rose Bowl", "Bungalow Heaven", "Playhouse District"],
    concerns: ["Retail theft and parking-structure incidents in Old Pasadena and South Lake", "Massive crowd and perimeter security for the Rose Parade and Rose Bowl events", "Estate and HOA protection in historic foothill residential neighborhoods", "Vandalism and after-hours trespass at civic, cultural, and commercial properties"],
    services: ["retail", "events", "residential"],
  },
  {
    slug: "malibu",
    name: "Malibu",
    region: "Coastal Los Angeles County",
    summary: "Malibu is 21 miles of beachfront and canyon estates strung along PCH, where the security reality is defined by isolation, single-road access, and seasonal wildfire and storm threats. Stratton provides discreet estate details for high-profile residents, gated-community and access patrol along remote canyons, and surge coverage during evacuations and the summer tourist influx. Programs account for slow emergency response times and the long, exposed approaches that make these properties uniquely vulnerable.",
    neighborhoods: ["Pacific Coast Highway", "Point Dume", "Malibu Colony", "Carbon Beach", "Malibu Canyon", "Zuma Beach"],
    concerns: ["Estate burglary and trespass enabled by isolation and long property approaches", "Wildfire and evacuation security \u2014 access control and asset protection during closures", "Seasonal beach crowds, parking conflicts, and beachfront-property trespass", "Slow emergency response times along PCH requiring on-site first-line presence"],
    services: ["residential", "patrol", "corporate"],
  },
  {
    slug: "hollywood",
    name: "Hollywood",
    region: "Central Los Angeles",
    summary: "Hollywood draws constant foot traffic to the Walk of Fame, the Boulevard's tourist corridor, and a dense nightlife and live-entertainment scene, while hillside homes sit just above the congestion. The mix of crowds, street vendors, and transient activity drives demand for retail and venue security, premiere and event teams, and residential patrol in the adjacent hills. Stratton officers manage high-volume crowds and protect guest-facing brands without disrupting the visitor experience.",
    neighborhoods: ["Hollywood Walk of Fame", "Hollywood Boulevard", "Sunset & Vine", "Hollywood Hills", "TCL Chinese Theatre", "Dolby Theatre"],
    concerns: ["Heavy tourist crowds, pickpocketing, and aggressive solicitation along the Boulevard", "Premiere, red-carpet, and live-venue crowd management and credentialing", "Retail theft and after-hours trespass in the tourist and nightlife corridor", "Residential burglary and access concerns in the adjacent Hollywood Hills"],
    services: ["events", "retail", "residential"],
  },
];

/* ─── RESOURCES / GUIDES (evergreen articles) ─────────────────────────────── */
export type Resource = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  sections: { heading: string; body: string[] }[];
};

export const RESOURCES: Resource[] = [
  {
    slug: "how-to-choose-a-private-security-company-in-los-angeles",
    title: "How to Choose a Private Security Company in Los Angeles",
    category: "Buyer's Guide",
    excerpt: "A practical, no-nonsense framework for vetting Los Angeles security companies on licensing, insurance, training, and operational fit before you sign a contract.",
    readTime: "8 min read",
    sections: [
      {
        heading: "Start With the License \u2014 and Verify It Yourself",
        body: [
          "In California, no company can lawfully provide contract security guard services without a Private Patrol Operator (PPO) license issued by the Bureau of Security and Investigative Services (BSIS). This is the single most important credential, and it is the first thing you should confirm \u2014 not because a vendor told you they're licensed, but because you checked. BSIS maintains a public license verification lookup where you can enter a PPO number and confirm it is active, in good standing, and unencumbered by disciplinary action.",
          "Ask any prospective company for its PPO number in writing and verify it before the first meeting ends. A legitimate operator will volunteer it without hesitation; Stratton, for example, operates under California PPO #122163. Be wary of any firm that is slow to produce a number, gives you a number that doesn't match the legal business name, or describes itself as 'in the process' of licensing. Operating guards without an active PPO is illegal in California, and a company willing to cut that corner will cut others.",
          "Licensing is not a one-time hurdle, either. PPO licenses must be renewed, and a company that has lapsed, been suspended, or accrued citations is a liability you inherit the moment you sign. The lookup tool shows status and history. Five minutes here can save you from a vendor that looks polished in a pitch deck but is on thin ice with the state.",
        ],
      },
      {
        heading: "Confirm Insurance, Bonding, and Indemnification",
        body: [
          "A security incident is, by definition, a situation where something went wrong \u2014 and the question of who pays follows close behind. Before you contract anyone, request a Certificate of Insurance (COI) and read it. At minimum you want to see active general liability coverage and workers' compensation. If armed officers will be on your property, ask specifically whether the policy covers armed operations; some carriers exclude it, and a generic COI can paper over that gap.",
          "Ask to be named as an additional insured on the policy. This is standard practice for serious commercial engagements and it is the mechanism that actually protects you if an officer's action \u2014 or inaction \u2014 leads to a claim. A company that resists naming you as additional insured, or that can't produce a current COI within a day, is telling you something. Confirm coverage limits are appropriate to your exposure: a luxury estate, a high-rise full of tenants, and a single retail storefront do not carry the same risk, and the policy should reflect that.",
          "Finally, read the indemnification language in the proposed contract carefully. Who bears liability for an officer's conduct? What happens in the event of property damage, a use-of-force incident, or a claim by a third party? The cheapest bid often hides the thinnest protection. The right answer is a company that is fully licensed, bonded, and insured, and willing to put those protections in writing alongside clear indemnification.",
        ],
      },
      {
        heading: "Vet the People, Not Just the Company",
        body: [
          "A security program is only as good as the officer standing at your post at 2 a.m. The brand on the patrol car matters far less than how that individual was screened, trained, and supervised. Ask how the company recruits and vets: Do they run criminal background checks, verify work history, and drug-test before deployment? In California, every guard must hold a BSIS-issued guard card (a Security Guard Registration), which requires Power to Arrest training and a background check through the Department of Justice and FBI. That is the floor, not the ceiling.",
          "The companies worth your money go beyond the state minimum. Ask what their internal training program covers and how often officers requalify. Strong operators add de-escalation, report writing, customer-service conduct, CPR and First Aid, and TEAM (Techniques for Effective Alcohol Management) certification for venues that serve alcohol. Stratton's officers, for instance, complete training that exceeds California's required hours and includes TEAM, CPR/First Aid, and Power to Arrest as standard. The difference shows up in how an incident is handled \u2014 and whether it becomes a lawsuit.",
          "Ask about turnover and post consistency, too. The Los Angeles guard industry is notorious for churn, and a rotating cast of unfamiliar faces undermines exactly the recognition and trust that make a residential or commercial program work. A company that assigns consistent officers, pays them properly, and supervises them actively will deliver dramatically better outcomes than one that treats guards as interchangeable bodies.",
        ],
      },
      {
        heading: "Match the Company to Your Environment",
        body: [
          "Security is not a commodity, and the best firm for a construction site is rarely the best firm for a five-star hotel. Los Angeles spans gated estates in the hills, Class-A office towers in Century City, nightlife on the Sunset Strip, sprawling retail centers, active job sites, and HOAs \u2014 each with a distinct risk profile and a distinct definition of what good looks like. A guest-facing hotel needs officers who read the room and protect the brand experience; a job site needs officers who control access and deter copper theft at 3 a.m. Ask the company to describe relevant experience in your specific environment, with specifics.",
          "Probe for fit beyond the sales pitch. Will they conduct a site assessment before quoting, or do they hand you a flat per-hour rate sight unseen? A serious operator wants to see your property, understand your operations, and design a program around your actual exposure \u2014 not drop a generic body at a post. The willingness to assess first is one of the clearest signals that a company will treat you as a tailored engagement rather than a line item.",
          "Consider the surrounding details that separate professionals from the field: branded vehicles and clean uniforms, GPS-verified patrol logs, written post orders, and digital incident reporting. These are not luxuries \u2014 they are the accountability infrastructure that proves the service you're paying for is actually being delivered.",
        ],
      },
      {
        heading: "Test Their Operations Before You Need Them",
        body: [
          "Risk does not keep business hours, and the moment you'll most need your security company is precisely when most companies are hardest to reach. Before signing, find out who answers the phone at night. Is there a live, staffed operations center, or does an after-hours call route to voicemail? Ask for the supervisor escalation path and, frankly, test it \u2014 call after hours during the evaluation period and see who picks up and how fast.",
          "Reachability is one of the most common complaints clients voice about their previous vendor, and one of the clearest differentiators among LA operators. A company that runs a genuine 24/7/365 operation can put a live supervisor on the line at 3 a.m. on a holiday. Stratton built its operation around exactly this standard because security failures cluster in the hours when weaker companies have gone quiet.",
          "Finally, ask about reporting cadence and transparency. How will you know what happened on your property last night, last week, last quarter? The right partner gives you timestamped digital logs, incident documentation with photos where relevant, and a reporting rhythm matched to your operation \u2014 daily for high-security posts, periodic reviews for ongoing patrol. You should never have to wonder whether the service you're paying for is being delivered.",
        ],
      },
      {
        heading: "Talk to a Stratton Advisor",
        body: [
          "Choosing a security company is a decision you live with every day and notice most on your worst day. If you'd like a straightforward conversation about your property, your exposure, and what an appropriately scoped program looks like, Stratton is glad to help \u2014 starting with a site assessment, not a sales pitch. Reach us at (424) 440-5554 or through the Contact page to schedule a consultation.",
        ],
      },
    ],
  },
  {
    slug: "armed-vs-unarmed-security-officers-how-to-decide",
    title: "Armed vs. Unarmed Security Officers: How to Decide",
    category: "Buyer's Guide",
    excerpt: "A clear-eyed guide to weighing armed and unarmed security against your real risk posture, environment, legal requirements, cost, and the perception you want to project.",
    readTime: "7 min read",
    sections: [
      {
        heading: "Start With Risk Posture, Not Preference",
        body: [
          "The decision between armed and unarmed officers should follow from an honest assessment of your threat environment \u2014 not from instinct, status, or the assumption that armed always means safer. The right question is not 'do I want armed guards?' but 'what specific threats am I defending against, and what response do those threats realistically require?' A jewelry retailer holding high-value inventory, a bank branch, or a cash-handling operation presents a categorically different exposure than a corporate lobby or an HOA gate.",
          "Armed officers are appropriate where there is a credible risk of violent confrontation or where the assets being protected are the kind that draw armed, organized adversaries. The presence of a firearm changes the calculus for a potential aggressor \u2014 and it changes the calculus for liability and escalation in equal measure. An armed posture is a serious tool for serious threats, and deploying it where the threat doesn't warrant it adds risk rather than removing it.",
          "Unarmed officers are not a downgrade. For the large majority of commercial, residential, and guest-facing environments, a professional, well-trained, visible unarmed officer delivers exactly the deterrence and response the situation calls for. The goal is to match the posture to the threat, which is why Stratton begins with a risk assessment rather than a default recommendation in either direction.",
        ],
      },
      {
        heading: "The Legal and Licensing Reality in California",
        body: [
          "California treats armed security as a distinctly higher regulatory category, and the requirements are not trivial. Every security officer must hold a BSIS guard card, but to carry a firearm on duty an officer must additionally hold a BSIS Exposed Firearm Permit. Earning that permit requires completing a state-approved firearms training course, passing both written and range qualification, and clearing background checks through the Department of Justice and FBI. The permit is firearm-caliber-specific and must be renewed, with periodic requalification on the range.",
          "Officers carrying a baton or chemical agents need their own separate BSIS permits as well. This matters to you as a buyer because it defines who is actually qualified to do what on your property. When a company proposes armed officers, you are entitled to confirm that each assigned officer holds a current, valid Exposed Firearm Permit \u2014 not just a guard card. Stratton's armed officers carry the required Exposed Firearm Permit and complete live-fire requalification on a defined cadence, and you should expect that level of documentation from any reputable operator.",
          "Be aware too that an armed deployment narrows your vendor pool and your insurance options. Not every PPO is set up to staff armed posts, and not every insurance policy covers armed operations. Confirm both before you assume an armed program is simply a matter of asking for it.",
        ],
      },
      {
        heading: "Match the Posture to the Environment",
        body: [
          "Environment is often the deciding factor. Guest-facing settings \u2014 hotels, restaurants, retail floors, residential communities, corporate lobbies \u2014 generally call for unarmed officers. In these spaces the officer is part of the experience, and a visible firearm can unsettle guests, residents, and customers in ways that work against the brand and the atmosphere you've built. A hotel that wants its arriving guests to feel welcomed is poorly served by an armed presence in the lobby.",
          "Higher-risk and asset-heavy environments tilt the other way. Cash operations, high-value inventory, executive protection in elevated-threat situations, certain financial institutions, and properties with a documented history of violent incidents may warrant armed coverage. The key word is documented: base the decision on actual exposure, incident history, and credible threat \u2014 not on a vague sense that more firepower equals more safety.",
          "Many properties land on a blended approach. A high-rise might pair unarmed lobby ambassadors who manage access and guest experience with an armed officer assigned to a specific high-risk function. A retail center might run uniformed unarmed officers for visible deterrence alongside plainclothes loss-prevention staff. The posture can \u2014 and often should \u2014 vary by post within a single program, which is exactly the kind of nuance a proper assessment surfaces.",
        ],
      },
      {
        heading: "Cost, Liability, and Perception",
        body: [
          "Armed coverage costs more, and the premium is justified by real factors: the additional licensing and training each officer carries, the higher insurance requirements, the smaller pool of qualified personnel, and the elevated liability the company assumes. If a company quotes armed officers at a price that looks close to unarmed, treat it as a red flag \u2014 either the officers aren't truly armed-qualified or the insurance behind them is thin.",
          "Liability runs in both directions, and it deserves sober consideration. An armed officer can decisively stop a violent threat; an armed officer can also escalate a situation that a skilled unarmed officer would have de-escalated, and the consequences of a use-of-force incident \u2014 legal, financial, and reputational \u2014 are severe. Introducing a firearm into an environment that doesn't need one can increase your risk rather than reduce it. This is why training, judgment, and supervision matter as much as the weapon itself.",
          "Perception is the third axis, and it cuts differently by context. In some settings an armed presence is reassuring and signals serious protection; in others it signals danger and undermines the very sense of safety you're trying to create. Think carefully about the message your officers send to the people you want to protect, attract, or retain \u2014 and let that inform, alongside risk and cost, where on the armed-unarmed spectrum your program belongs.",
        ],
      },
      {
        heading: "Let an Assessment Make the Call",
        body: [
          "The armed-versus-unarmed question rarely has a clean one-size answer, and it shouldn't be settled by guesswork or by whoever pitches hardest. Stratton helps clients select the right posture \u2014 armed, unarmed, plainclothes, or a blend \u2014 during a risk assessment that weighs your environment, threat profile, legal requirements, and the experience you want to deliver. If you'd like a grounded recommendation for your property, call (424) 440-5554 or reach out through the Contact page to start the conversation.",
        ],
      },
    ],
  },
  {
    slug: "california-ppo-licensing-and-bsis-requirements-explained",
    title: "Understanding California PPO Licensing & BSIS Requirements",
    category: "Licensing",
    excerpt: "What PPO licensing and BSIS regulation actually mean in California, why guard cards and firearm permits matter, and how to verify a security company is operating legally.",
    readTime: "7 min read",
    sections: [
      {
        heading: "What BSIS Is and Why It Governs Your Security",
        body: [
          "California regulates the private security industry more tightly than most states, and the agency that does it is the Bureau of Security and Investigative Services, or BSIS. BSIS sits within the California Department of Consumer Affairs and licenses the companies, the individual officers, the firearm and baton permits, and the training instructors that make up the legal security industry. If you are buying security in California, BSIS is the framework that determines whether what you're buying is legitimate.",
          "The reason this matters to you as a buyer is simple: BSIS licensing is the line between a professional, accountable security provider and an unregulated liability. A licensed PPO is bound by state standards for training, conduct, insurance, and recordkeeping, and is subject to citation, suspension, or revocation if it falls short. An unlicensed operator is bound by none of that \u2014 and any incident on your property involving unlicensed guards becomes your exposure.",
          "Understanding the basics of how BSIS works puts you in a stronger position. You don't need to be an expert in the regulations, but knowing what credentials exist, what they require, and how to verify them turns a leap of faith into an informed decision.",
        ],
      },
      {
        heading: "The PPO License: The Company's Credential",
        body: [
          "A Private Patrol Operator (PPO) license is the credential a company must hold to lawfully provide contract security guard services in California. It is issued to the business, not to individual officers, and it is the foundational requirement \u2014 without it, a company cannot legally place a single guard at your property. Obtaining a PPO requires a qualified manager who has passed a licensing examination, undergone fingerprinting and background checks, and met the Bureau's experience and insurance requirements.",
          "Every PPO is assigned a license number that appears on the company's contracts, uniforms, vehicles, and marketing, and that number is publicly verifiable. Stratton operates under California PPO #122163, and a reputable company will display its number openly rather than treat it as an afterthought. The number is your key to confirming the license is real, active, and clean.",
          "PPO licenses carry ongoing obligations. They must be renewed on schedule, the company must maintain required insurance, and it must comply with BSIS regulations on recordkeeping and officer registration. A lapsed, suspended, or disciplined PPO is a serious problem \u2014 and one that a few minutes of verification can surface before you sign rather than after something goes wrong.",
        ],
      },
      {
        heading: "Guard Cards and Officer-Level Registration",
        body: [
          "Holding a PPO covers the company; it does not cover the individual officers. Every security officer working in California must separately hold a Security Guard Registration \u2014 universally known as a guard card \u2014 issued by BSIS to that individual. To earn a guard card, an applicant must complete state-mandated Power to Arrest training, submit fingerprints, and clear background checks through both the California Department of Justice and the FBI before being deployed.",
          "California also requires ongoing training for registered guards beyond that initial step, with mandated training hours that must be completed within defined windows after registration. The intent is that officers are not just background-checked once but continually developed in the core competencies of the job. As a buyer, you are entitled to ask whether every officer assigned to your property holds a current guard card \u2014 and a professional operator will be able to confirm it without hesitation.",
          "The strongest companies treat the guard card as the legal minimum and build well beyond it. Stratton's internal training program exceeds California's required hours and layers in TEAM (Techniques for Effective Alcohol Management) certification, CPR and First Aid, de-escalation, and report-writing standards. The state floor keeps unqualified people out; the additional training is what produces officers who actually handle incidents well.",
        ],
      },
      {
        heading: "Firearm and Baton Permits: Higher Bars",
        body: [
          "Carrying a weapon on duty triggers additional, separate BSIS credentials that go well beyond the guard card. To carry a firearm, an officer must hold an Exposed Firearm Permit, which requires completing a BSIS-approved firearms course, passing written and range qualification, and clearing the relevant background checks. The permit is tied to specific firearm calibers, must be renewed on schedule, and requires periodic requalification \u2014 an armed officer cannot simply qualify once and carry indefinitely.",
          "Batons and chemical agents such as pepper spray each require their own distinct BSIS permits as well. The practical upshot is that an officer's authority to use any given tool is documented and verifiable, credential by credential. When a company proposes armed officers, you can and should confirm that each assigned officer carries a current Exposed Firearm Permit \u2014 not merely a guard card. Stratton's armed officers hold the required Exposed Firearm Permit and complete live-fire requalification on a defined cadence.",
          "These higher bars exist for good reason: the consequences of an armed or baton-carrying officer acting improperly are severe. The permitting structure is California's mechanism for ensuring that the people authorized to use force have been trained, tested, and vetted to a standard that matches that authority.",
        ],
      },
      {
        heading: "How to Verify a Company Before You Sign",
        body: [
          "Verification is the part most buyers skip and the part that matters most. BSIS maintains a free public license lookup that lets anyone confirm the status of a PPO, a guard card, or a firearm permit. Ask any prospective company for its PPO number in writing, then run it through the lookup yourself to confirm the license is active, matches the legal business name, and carries no disciplinary action. Do not rely on a logo, a website, or a verbal assurance.",
          "Pair the license check with the insurance check. Request a current Certificate of Insurance showing general liability and workers' compensation, confirm the coverage extends to armed operations if armed officers are involved, and ask to be named as an additional insured. A company that is genuinely licensed and properly insured will move through these requests easily; one that stalls or deflects is answering your question without meaning to.",
          "Spend the ten minutes. Confirming a PPO number, checking insurance, and asking whether assigned officers hold current guard cards and any required firearm permits is the most efficient due diligence you can do. It separates the legitimate operators from the ones hoping you won't look \u2014 and it costs you nothing but a little time before a decision you'll live with daily.",
        ],
      },
      {
        heading: "Questions About Licensing? Ask Stratton",
        body: [
          "If you want a clear walkthrough of how California licensing applies to your situation \u2014 or simply want to verify what proper credentials look like before you evaluate vendors \u2014 Stratton is happy to help. We operate under California PPO #122163 and are glad to explain exactly what BSIS requires of a serious security provider. Call (424) 440-5554 or reach out through the Contact page to start a conversation.",
        ],
      },
    ],
  },
  {
    slug: "what-to-expect-from-a-professional-security-assessment",
    title: "What to Expect From a Professional Security Assessment",
    category: "Process",
    excerpt: "A step-by-step look at how a professional security assessment works, what a thorough one covers, and the concrete outcomes you should expect to walk away with.",
    readTime: "7 min read",
    sections: [
      {
        heading: "Why the Assessment Comes First",
        body: [
          "A security program built without an assessment is a guess, and guesses are expensive in this field \u2014 you either overpay for coverage you don't need or, worse, leave the real vulnerabilities exposed. A professional security assessment is the diagnostic step that grounds the entire program in your property's actual conditions: its layout, its operations, its people, and its specific exposure. It is the difference between a tailored program and a body dropped at a post.",
          "The willingness to assess before quoting is one of the clearest signals of a serious operator. A company that hands you a flat per-hour rate without seeing your property is selling you a commodity; a company that wants to walk your site, understand how it functions, and learn what keeps you up at night is preparing to design something that fits. Stratton begins every engagement with a risk assessment for exactly this reason \u2014 no two properties are identical, and the program should reflect that.",
          "An assessment also protects you. It documents what was found, what was recommended, and why a given posture was chosen. That record matters operationally, and it matters if an incident ever invites scrutiny of whether reasonable precautions were taken.",
        ],
      },
      {
        heading: "The Walkthrough and Discovery Phase",
        body: [
          "A proper assessment starts on-site, on foot. An experienced assessor walks the property the way a potential adversary would \u2014 looking at perimeters, entry and exit points, lighting, blind spots, parking structures, loading docks, lobbies, and the natural paths of approach. In a Los Angeles context this means accounting for the specifics of your environment: the long, exposed approaches of a Malibu canyon estate, the multi-tenant access complexity of a Century City tower, the crowd dynamics of a Sunset Strip venue, or the after-hours vulnerability of an active job site.",
          "Discovery is also a conversation. The assessor should be asking how your property actually operates: When are you busiest and most exposed? What incidents have you experienced, and what near-misses? Who needs access, when, and how is it currently controlled? What does a normal day look like, and what does a bad one look like? The answers shape the program as much as the physical walkthrough does, because risk lives at the intersection of place and routine.",
          "Good assessors examine what already exists, too. Cameras, alarms, access control systems, gates, existing guard coverage, and emergency procedures all factor in. The goal is not to rip everything out and start over \u2014 it is to understand the full picture so the human security layer complements, rather than duplicates, the protections you already have.",
        ],
      },
      {
        heading: "What a Thorough Assessment Actually Covers",
        body: [
          "A complete assessment evaluates several dimensions together. Physical vulnerabilities come first: perimeter integrity, access points, lighting, sightlines, and the locations where incidents are most likely to originate. Operational patterns come next: shift changes, delivery and vendor flows, opening and closing routines, peak occupancy, and the hours when the property is least protected \u2014 which, in practice, is when most incidents happen.",
          "The threat profile is assessed in context. A thorough assessor weighs your specific exposure \u2014 the crime patterns in your area, your asset profile, your visibility, your industry's particular risks, and any history of incidents or threats directed at you. A retail center's concern with organized retail crime is a different problem than an estate's concern with privacy intrusion or a financial institution's concern with robbery, and the assessment should name your threats specifically rather than generically.",
          "Finally, the assessment considers people and procedures: how staff and visitors are credentialed, how emergencies would be handled, how incidents would be reported and escalated, and where the gaps in current practice lie. The output of all of this is not a vague sense that 'you need security' \u2014 it is a specific, prioritized understanding of where you are vulnerable and why.",
        ],
      },
      {
        heading: "From Findings to a Designed Program",
        body: [
          "An assessment is only valuable if it converts into a plan you can act on. A professional engagement turns findings into a concrete, prioritized program: the recommended posture (armed, unarmed, plainclothes, or a blend), the number and placement of posts, patrol routes and timing, access-control procedures, and the reporting and escalation structure. Recommendations should be ranked by importance so you can see clearly what addresses your highest-priority risks first.",
          "The proposed program should fit your operations rather than fight them. Officers should be positioned and instructed in ways that support how your property actually runs \u2014 service-oriented in a guest-facing setting, firm and access-focused at a job site, discreet at a private estate. Written post orders, defined patrol intervals, and clear protocols translate the assessment's findings into the day-to-day behavior of the people protecting you.",
          "A good program also builds in accountability from the start: GPS-verified patrol logs, digital incident reporting, a defined reporting cadence, and a supervisor escalation path you can actually reach. These are not extras \u2014 they are how you confirm, on an ongoing basis, that the program designed on paper is being delivered in practice on your property.",
        ],
      },
      {
        heading: "The Outcomes You Should Walk Away With",
        body: [
          "By the end of a professional assessment you should have more than a quote. You should have a clear understanding of your property's specific vulnerabilities, a prioritized view of the risks that matter most, and a proposed program that maps directly to those risks rather than to a generic template. You should understand why each recommendation was made and what threat it addresses.",
          "You should also have clarity on the practical questions: what the program will cost and why, what the officers' qualifications and credentials are, how incidents will be reported and how often, and who you call \u2014 and who actually answers \u2014 when something happens at 3 a.m. If an assessment leaves you with a number and no understanding, it wasn't an assessment; it was a sales call.",
          "The deeper outcome is confidence. A well-run assessment replaces the anxiety of not knowing your exposure with a grounded, specific plan to manage it. That clarity is the real product, and it is what allows you to make a security decision you can stand behind.",
        ],
      },
      {
        heading: "Schedule an Assessment With Stratton",
        body: [
          "Every Stratton engagement begins with a risk assessment because the right program can only be built on a real understanding of your property. If you'd like a professional, specific evaluation of your exposure and a program designed around it, we'd welcome the conversation \u2014 starting with a walkthrough, not a pitch. Call (424) 440-5554 or reach out through the Contact page to schedule your assessment.",
        ],
      },
    ],
  },
];
