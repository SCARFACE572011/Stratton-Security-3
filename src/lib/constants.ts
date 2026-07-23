/* ─── STRATTON SECURITY GROUP — SITE CONSTANTS ──────────────────────────────
   All data verified from site audit (April 2026).
   Fields marked // VERIFY need client confirmation before launch.
──────────────────────────────────────────────────────────────────────────── */

// Single source for the office address — maps link derives from it (see SITE_CONFIG).
const FULL_ADDRESS = "10940 Wilshire Blvd, Suite 1720, Los Angeles, CA 90024";

export const SITE_CONFIG = {
  name: "Stratton Security Group",
  tagline: "Strength. Vigilance. Integrity.",
  shortTagline: "Los Angeles Security Guard & Patrol Services",
  heroBrand: "Strength. Vigilance. Integrity.",
  brand_promise:
    "We place only qualified, background-checked, rigorously trained professionals at your property — carrying the discipline of military and law-enforcement service, personalized to your needs.",
  mission: "Protect People, Assets, and Peace of Mind",
  vision: "Set the standard for private security across California.",
  phone: "(424) 440-5554",
  phoneRaw: "4244405554",
  phoneE164: "+14244405554",
  email: "Info@StrattonSecurityGroup.com",
  // VERIFY: confirm current office with client — project docs previously listed
  // 2029 Century Park E, Suite 400, LA 90067. Maps link + JSON-LD geo derive
  // from these fields, so they must all describe the SAME building.
  address: "10940 Wilshire Blvd, Suite 1720",
  city: "Los Angeles",
  state: "CA",
  zip: "90024",
  fullAddress: FULL_ADDRESS,
  mapsUrl: `https://maps.google.com/?q=${encodeURIComponent(FULL_ADDRESS)}`,
  geo: { latitude: 34.0603, longitude: -118.4448 }, // 10940 Wilshire Blvd
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

// The careers apply form + its API route both exempt this position from the
// Guard Card requirement — single source so client/server validation can't drift.
export const GENERAL_INQUIRY_POSITION = "Other / General Inquiry";

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
      { label: "Fire Watch", href: "/services/fire-watch" },
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
  {
    label: "Locations",
    href: "/service-areas",
    children: [
      { label: "Beverly Hills", href: "/service-areas/beverly-hills" },
      { label: "Santa Monica", href: "/service-areas/santa-monica" },
      { label: "Century City", href: "/service-areas/century-city" },
      { label: "West Hollywood", href: "/service-areas/west-hollywood" },
      { label: "Downtown Los Angeles", href: "/service-areas/downtown-los-angeles" },
      { label: "Pasadena", href: "/service-areas/pasadena" },
      { label: "Malibu", href: "/service-areas/malibu" },
      { label: "Hollywood", href: "/service-areas/hollywood" },
      { label: "All Service Areas →", href: "/service-areas" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Guides & Insights", href: "/resources" },
      { label: "FAQ", href: "/faq" },
      { label: "Training & Workshops", href: "/training" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export type ServiceDetail = {
  id: string;
  title: string;
  // Keyword-bearing <title>/H1 for the detail page (cards/nav keep `title`).
  seoTitle: string;
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
    seoTitle: "Security Patrol Services Los Angeles",
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
    seoTitle: "Armed & Unarmed Security Guards Los Angeles",
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
    seoTitle: "Commercial Property Security Services Los Angeles",
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
    seoTitle: "Residential & HOA Security Services Los Angeles",
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
    seoTitle: "Hotel & Hospitality Security Los Angeles",
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
    seoTitle: "Retail & Shopping Center Security Los Angeles",
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
    seoTitle: "Construction Site Security Guards Los Angeles",
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
    seoTitle: "Event Security Services Los Angeles",
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
    seoTitle: "Executive Protection & Corporate Security Los Angeles",
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
  {
    id: "fire-watch",
    title: "Fire Watch",
    seoTitle: "Fire Watch Security Guards Los Angeles",
    slug: "fire-watch",
    shortDescription:
      "Trained fire watch officers deployed fast when sprinkler or alarm systems are down — timed patrol rounds and the documented logs your fire authority expects, until the system is restored.",
    longDescription:
      "When a fire protection system is impaired — a sprinkler line shut down for repair, an alarm panel offline, hot work underway on a construction site — fire code requires a dedicated fire watch until the system is restored. It is one of the most time-critical services in security: the requirement usually lands with no warning, and every uncovered hour is a compliance exposure. Stratton deploys trained fire watch officers who patrol on the required intervals, maintain the written log the fire department expects to see, know how to activate manual notification if something ignites, and stay on post until the impairment is formally cleared. We coordinate with your contractor, property team, and the local fire authority so the paper trail is as solid as the patrol.",
    benefits: [
      {
        title: "Fast, Urgent Deployment",
        description:
          "Fire watch needs rarely arrive on a schedule. Urgent requests are prioritized — we have mobilized teams in under 24 hours, and move as fast as staging allows.",
      },
      {
        title: "Code-Compliant Logs",
        description:
          "Officers keep timed, written patrol logs in the format fire authorities expect, so your compliance record survives scrutiny.",
      },
      {
        title: "Trained for the Assignment",
        description:
          "Fire watch is not standing around — officers are briefed on patrol intervals, ignition risks, manual alarm activation, and evacuation triggers.",
      },
      {
        title: "Insurance & Liability Cover",
        description:
          "A documented, professional fire watch protects your insurance position while a required protection system is out of service.",
      },
    ],
    capabilities: [
      "Impaired sprinkler & alarm system coverage",
      "Hot work / welding fire watch",
      "Post-fire and post-incident watch",
      "Timed patrol rounds with written logs",
      "Coordination with fire authority requirements",
      "Construction & occupied-building coverage",
      "Utility outage and generator-failure response",
    ],
    relatedIndustries: ["construction", "commercial-real-estate", "industrial", "hospitality"],
    icon: "ShieldCheck",
    color: "blue",
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
  // Deep local content — unique per area for local SEO (rendered as the
  // "How We Protect {name}" section + a local FAQ block with FAQPage schema).
  localContext: string[];
  faqs: { q: string; a: string }[];
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
    localContext: [
      "Coverage across Beverly Hills is built around how the terrain actually moves. In the Flats, the predictable street grid lets marked vehicle patrols run varied, GPS-logged checkpoint routes so no pattern becomes readable from the curb. Above Sunset Boulevard, Trousdale Estates and the upper reaches of Coldwater Canyon sit on hillside roads with limited ingress, so we anchor coverage to those single-road approaches and the sightlines they create. Foot patrol suits the compact, high-footfall blocks of the Golden Triangle and Rodeo Drive, where an officer on the sidewalk reads the street faster than a vehicle can. Subterranean garages get dedicated sweeps rather than drive-bys.",
      "The property mix here calls for access control tuned to each setting. At estates in Trousdale and the Flats, an on-site posture centers on the gate and the front door: credentialing vendors, domestic staff, and delivery drivers, keeping current visitor logs, and controlling who reaches the motor court during construction or a private event. Retail along Rodeo Drive and through the Golden Triangle leans on loss-prevention officers who can work a sales floor discreetly or stand a visible uniformed post at the entrance. Where discretion is paramount, plainclothes officers hold the perimeter without announcing a security presence to guests or passersby.",
      "Response in Beverly Hills depends on coordination that respects how fast conditions change. Live 24/7 supervision keeps officers in contact and lets a shift scale as an event surges — a gala, a premiere, or an estate arrival that draws a crowd onto Sunset Boulevard. For gatherings, we plan guest flow and arrival timing alongside your event and building operations, and defer to the Beverly Hills Police Department on anything that warrants a sworn response. Hillside properties in Trousdale and Coldwater Canyon carry real evacuation constraints on their single roads, so fire watch and clear egress planning belong in the program from the start.",
    ],
    faqs: [
      { q: "Do you provide armed guards in Beverly Hills?", a: "Yes — both armed and unarmed officers, depending on your risk profile. All are background-checked and trained beyond California minimums, with live 24/7 supervision. For estates, retail, or events, a free on-site assessment lets a Stratton advisor recommend the right posture; you can pair discreet unarmed coverage with armed protection where the threat picture calls for it. Stratton is licensed, bonded, and insured under CA PPO #122163." },
      { q: "How fast can you deploy to a Beverly Hills property?", a: "Coverage typically begins within 72 hours of signing. For urgent situations — a credible threat, a sudden event, or a gap in existing coverage — teams have mobilized in under 24 hours. Start with the free on-site assessment; a Stratton advisor responds within one business day and can scope an interim posture while a longer-term program is finalized." },
      { q: "Can you handle access control for an estate during construction or a private event?", a: "Yes. Estate and residential protection includes managing the gate and front door — credentialing contractors, domestic staff, and delivery drivers, maintaining visitor logs, and controlling who reaches the property during construction, staff changes, or a gathering. For events, officers can manage guest arrivals and flow; venue officers can be TEAM-certified. Foot and vehicle patrol with GPS-logged checkpoints documents each pass." },
      { q: "Do you offer loss prevention for Rodeo Drive retail?", a: "Yes. Retail loss-prevention officers can work the Golden Triangle and Rodeo Drive either discreetly on the sales floor or as a visible uniformed presence at the entrance, whichever fits your brand. Coverage can extend to opening and closing, back-of-house and stockroom access, and coordination with building operations. All officers are licensed under CA PPO #122163 and backed by live 24/7 supervision." },
    ],
  },
  {
    slug: "santa-monica",
    name: "Santa Monica",
    region: "Westside Los Angeles",
    summary: "Santa Monica blends a major tourist economy along the Pier and Promenade with dense residential blocks, Silicon Beach offices, and a significant unhoused population that strains downtown retail and public spaces. Stratton delivers loss-prevention and ambassador-style coverage for Third Street and Main Street merchants, after-hours patrol for mixed-use buildings, and event teams for the beach and pier. Officers are trained to balance firm enforcement with the city's visitor-facing brand.",
    neighborhoods: ["Third Street Promenade", "Santa Monica Pier", "Main Street", "Montana Avenue", "Ocean Avenue", "Downtown Santa Monica"],
    concerns: ["Retail theft and aggressive panhandling along the Promenade and Main Street corridors", "Transient encampments and after-hours trespass at commercial and mixed-use properties", "Crowd management and asset protection at the Pier, beach, and outdoor events", "Vehicle break-ins and vandalism in tourist parking structures and lots"],
    services: ["retail", "patrol", "events"],
    localContext: [
      "Effective coverage in Santa Monica depends on reading how each corridor moves. Along the Third Street Promenade's pedestrian mall, foot patrol with GPS-logged checkpoints fits better than vehicles, letting officers work storefront to storefront and cover the alleys and service courts behind them. Downtown Santa Monica and Ocean Avenue reward marked-vehicle loops that fold in the subterranean parking structures where visibility drops after dark. Main Street and Montana Avenue, with their low-rise shopfronts and rear lots, suit scheduled walking rounds tied to opening and closing windows. Near the Pier and beachfront, patrol routes flex around tidal foot traffic and single-approach access points.",
      "The property mix here calls for different postures on the same block. Silicon Beach offices and mixed-use towers benefit from lobby and access-control coverage — visitor screening, credential checks, and after-hours entry management — that keeps tenants moving without turning a workplace into a checkpoint. Promenade and Main Street merchants are better served by unarmed loss-prevention and ambassador-style officers who deter theft while staying visible and approachable to shoppers. Residential blocks and HOA-governed buildings off Montana Avenue and Ocean Avenue typically pair standing coverage with roving checks of garages, mailrooms, and shared amenities. We match the posture to the asset, not a one-size template.",
      "Timing is everything in a visitor-driven city. Weekend and summer surges around the Pier, the beach, and Downtown Santa Monica change the risk picture hour by hour, so staffing plans scale to event calendars and peak arrival windows rather than a flat headcount. Officers coordinate with building operations and on-site management on incident escalation, and are briefed to work alongside Santa Monica police and local emergency responders when a situation exceeds private-security scope. For outdoor events and beach gatherings, teams plan crowd flow, entry and egress, and evacuation routing in advance, and TEAM-certified venue officers can staff alcohol-served programs. Live 24/7 supervision backs every shift.",
    ],
    faqs: [
      { q: "Do you provide armed guards in Santa Monica?", a: "Yes. Stratton fields both armed and unarmed officers across Santa Monica, and the right choice depends on your property and risk profile. Many Promenade and Main Street retailers do well with unarmed loss-prevention and ambassador-style coverage, while some Downtown and mixed-use sites warrant an armed presence. During your free on-site assessment, a Stratton advisor recommends the posture that fits. All officers are licensed under CA PPO #122163, bonded, and insured." },
      { q: "How quickly can you deploy security to my Santa Monica property?", a: "Coverage typically begins within 72 hours of signing, and our teams have mobilized in under 24 hours for urgent needs such as an active trespass or encampment issue. To start, request a free on-site assessment — a Stratton advisor responds within one business day to walk your property, map the risks, and build a coverage plan before officers are scheduled." },
      { q: "Can you help with retail theft and panhandling along the Promenade?", a: "Yes. Retail loss prevention is a core service, and along the Third Street Promenade and Main Street we deploy visible foot patrol and ambassador-style officers trained to deter theft and manage aggressive panhandling while staying approachable to shoppers. Officers work storefront to storefront with GPS-logged checkpoints, document incidents, and coordinate with your staff and, when needed, local police." },
      { q: "Do you cover HOAs, residential buildings, and outdoor events in Santa Monica?", a: "Yes. Stratton provides residential and HOA security for buildings around Montana Avenue, Ocean Avenue, and Downtown, including standing coverage plus roving checks of garages and shared amenities. For beach, Pier, and outdoor events, we field event security teams — with TEAM-certified officers available for alcohol-served programs — handling crowd management, access control, and asset protection." },
    ],
  },
  {
    slug: "century-city",
    name: "Century City",
    region: "Westside Los Angeles",
    summary: "Century City is a vertical business district of Class-A office towers, the Westfield mall, and luxury high-rise condominiums clustered around Avenue of the Stars and Constellation Boulevard. Stratton provides lobby ambassador programs, tenant escort and access control for multi-tenant towers, and 24/7 residential coverage for high-rise communities. The priority is seamless integration with building engineering, parking operations, and corporate tenants who expect security to be present yet invisible.",
    neighborhoods: ["Avenue of the Stars", "Constellation Boulevard", "Westfield Century City", "Century Park East", "Century Plaza Towers", "Olympic Boulevard"],
    concerns: ["Access control and tenant screening across multi-tenant Class-A office towers", "Parking structure security and vehicle theft in large subterranean garages", "Loss prevention and crowd flow at Westfield Century City retail", "Lobby management and resident safety in luxury high-rise condominiums"],
    services: ["commercial-real-estate", "corporate", "residential"],
    localContext: [
      "Because Century City stacks its risk vertically, your coverage is built around movement between levels rather than a single fixed post. Foot patrols with GPS-logged checkpoints work the tower cores along Avenue of the Stars and Constellation Boulevard, sweeping elevator lobbies, stairwells, and subterranean garage levels on staggered rounds so patrol timing never settles into a predictable pattern. Marked vehicle patrol ties the exterior together, linking motor courts, loading docks, and street frontage from Century Park East to Olympic Boulevard. Rounds are timed to the district's commute peaks and after-hours quiet, when an empty office floor is most exposed.",
      "The property mix here demands different postures within a few blocks, so on-site officers are matched to the environment rather than dropped in uniformly. In the Class-A office lobbies around Constellation Boulevard, the posture is ambassador-first: visitor verification, after-hours badge and access logging, and tenant escorts handled with the discretion corporate occupants expect. Residential high-rise lobbies call for a concierge-style presence that residents recognize by name, while the Westfield Century City environment favors blended plainclothes and uniformed loss-prevention coverage that reads the retail crowd without dampening it. Armed or unarmed staffing is then set to each building's threat profile and insurer requirements.",
      "Response in a dense high-rise district is as much about coordination as speed. Your officers work alongside building engineering and parking operations so a fire alarm, elevator recall, or garage incident follows one plan rather than competing ones, and 24/7 live supervision keeps a decision-maker reachable when a lobby team needs backing. Radio and reporting habits are aligned with how LAPD's West Los Angeles patrol responds into the Avenue of the Stars corridor. For event surges around Westfield Century City or a tower plaza, staffing scales up on notice; coverage for new sites typically begins within 72 hours, and teams have mobilized in under 24 for urgent needs.",
    ],
    faqs: [
      { q: "Do you provide armed guards for Century City office towers?", a: "Yes. Stratton fields both armed and unarmed officers, and the right mix is set to your building's threat profile, tenant expectations, and insurer requirements rather than a one-size default. Many Class-A lobbies are best served by an unarmed ambassador posture with armed coverage added where warranted. Every officer is background-checked, trained beyond California minimums, and backed by 24/7 supervision. Stratton is licensed, bonded, and insured under CA PPO #122163." },
      { q: "How fast can you deploy security to a Century City property?", a: "After a free on-site assessment, a Stratton advisor responds within one business day with a coverage plan. For most properties, standing coverage begins within 72 hours of signing. When the need is urgent, a sudden vacancy, an incident, or a short-notice event at the Westfield or a tower plaza, teams have mobilized in under 24 hours. The on-site assessment is the fastest path to a realistic start date." },
      { q: "Can you staff the lobby and concierge desk in a Century City high-rise condo?", a: "Yes. Residential and HOA coverage is a core service, including lobby and front-desk staffing for luxury high-rise condominiums. Officers manage visitor access, package and vendor entry, and after-hours security while maintaining the concierge-style presence residents expect to recognize. Coverage runs 24/7/365 with live supervision behind every shift. We coordinate directly with your building management and HOA board so access rules, guest policies, and incident reporting match how your community already operates." },
      { q: "Do you handle event and crowd security at Westfield Century City?", a: "Yes. Stratton provides event security and retail loss prevention, and coverage scales for crowd surges at Westfield Century City, film premieres, and plaza gatherings along Avenue of the Stars. Venue officers can be TEAM-certified for alcohol-served and ticketed events, and foot patrols log GPS-verified checkpoints for documented accountability. Whether you need a discreet loss-prevention presence or a full detail for a scheduled event, staffing is built around the crowd, footprint, and timing." },
    ],
  },
  {
    slug: "west-hollywood",
    name: "West Hollywood",
    region: "Central Los Angeles",
    summary: "West Hollywood runs from the nightlife density of the Sunset Strip and Santa Monica Boulevard to design-district showrooms and walkable residential blocks. The city's late-night bar, club, and restaurant scene drives demand for venue security, crowd management, and DUI-adjacent incident response, while design-district retail needs daytime loss prevention. Stratton fields TEAM-certified officers who keep venues safe and on-brand without dampening the guest experience.",
    neighborhoods: ["Sunset Strip", "Santa Monica Boulevard", "Pacific Design Center", "Melrose Avenue", "Boystown", "West Hollywood Design District"],
    concerns: ["Nightlife crowd control, intoxication, and altercations along the Sunset Strip", "Venue capacity, ID enforcement, and queue management for bars and clubs", "Loss prevention for design-district showrooms and Melrose retail", "After-hours protection for residential buildings near high-traffic corridors"],
    services: ["hospitality", "events", "patrol"],
    localContext: [
      "Your West Hollywood coverage is built around the city's tight, walkable grid, where foot patrol often does more than a vehicle can. Officers work GPS-logged checkpoints along the Sunset Strip and Santa Monica Boulevard, then loop the quieter residential blocks and subterranean garages that sit behind them. Because Boystown's venues and Melrose Avenue's storefronts share narrow curbs, patrols are timed to rideshare and valet surges, alley-facing loading docks, and closing hours. Marked vehicle patrol bridges the gaps between corridors, while foot officers hold the dense pockets around the Pacific Design Center and West Hollywood Design District.",
      "The posture shifts with each property type. At bars and clubs along Santa Monica Boulevard and the Strip, officers manage door screening, capacity counts, queue lines, and orderly wristbanding, and venue officers can be TEAM-certified for that setting. To-the-trade showrooms in the Design District and Pacific Design Center need credentialed, appointment-based access, protected high-value inventory, and controlled after-hours locking. Melrose Avenue retail leans on unarmed loss-prevention officers who read the floor without pressuring guests. Residential mid-rises get lobby coverage, visitor logging, package-room control, and garage access management. Armed or unarmed staffing is matched to each site's risk.",
      "West Hollywood is policed by the Los Angeles County Sheriff's Department rather than the LAPD, so your program is structured to coordinate cleanly with the West Hollywood Sheriff's Station and with building operations, valet, and event staff. That matters most during predictable surges — LA Pride, the Halloween Carnaval on Santa Monica Boulevard, and Strip event nights — when street closures and crowds compress response lanes. Officers plan closing-time dispersal, radio handoffs across shifts, and clear evacuation routes for mid-rise buildings. Live 24/7 supervision backs every post, and staffing scales up ahead of known event dates rather than reacting after crowds arrive.",
    ],
    faqs: [
      { q: "Do you provide armed guards in West Hollywood?", a: "Yes. Stratton fields both armed and unarmed officers, and the right choice depends on your property and threat profile. Nightlife venues and retail often run unarmed, visible deterrence, while some estates or high-value sites warrant armed staffing. Every officer is background-checked, trained beyond California minimums, and backed by live 24/7 supervision. A free on-site assessment helps determine the appropriate posture for your location." },
      { q: "Can your officers staff a nightclub or bar door on the Sunset Strip?", a: "Yes. We provide venue security for bars, clubs, and restaurants along the Strip and Santa Monica Boulevard, covering door screening, ID and capacity enforcement, queue management, and crowd control. Venue officers can be TEAM-certified for alcohol-service settings. We support both ongoing weekend coverage and one-off event nights, with staffing sized to your venue's layout and expected attendance." },
      { q: "How fast can you deploy to a West Hollywood property?", a: "It starts with a free on-site security assessment, and a Stratton advisor responds within one business day. Coverage typically begins within 72 hours of signing, and teams have mobilized in under 24 hours for urgent needs. For a known event date — a Design District opening or a busy Strip weekend — booking ahead lets us plan staffing and coordinate with building operations." },
      { q: "Do you offer retail loss prevention for Melrose and Design District showrooms?", a: "Yes. We provide loss-prevention officers for Melrose Avenue boutiques, Pacific Design Center tenants, and to-the-trade showrooms across the West Hollywood Design District. Depending on the setting, that means unarmed floor coverage, credentialed access control, and after-hours patrol with GPS-logged checkpoints. Officers protect high-value inventory while keeping the experience calm for legitimate clients and buyers. Staffing and hours are matched to your foot traffic." },
    ],
  },
  {
    slug: "downtown-los-angeles",
    name: "Downtown Los Angeles",
    region: "Central Los Angeles",
    summary: "Downtown LA is the region's densest mix of high-rise offices, converted residential lofts, the entertainment campus around L.A. Live, and active transit hubs \u2014 set against acute street-level challenges in and around Skid Row. Stratton secures office and mixed-use towers, manages loading docks and lobbies, and deploys scalable event teams for arenas and convention crowds. Programs are built to coordinate with LAPD, Metro, and building operations across a 24-hour urban environment.",
    neighborhoods: ["Financial District", "Arts District", "L.A. Live", "Historic Core", "Little Tokyo", "South Park"],
    concerns: ["Trespass, vagrancy, and encampments at building perimeters and loading docks", "Lobby and access control for high-rise offices and converted residential lofts", "Large-crowd and event security around Crypto.com Arena, the Convention Center, and L.A. Live", "Vehicle break-ins, transit-adjacent crime, and after-hours patrol in mixed-use blocks"],
    services: ["commercial-real-estate", "events", "patrol"],
    localContext: [
      "Downtown's compact one-way street grid, the freeway ring that boxes it in, and the vertical stacking of the Financial District and Bunker Hill all shape how your coverage is built. In the Historic Core and Little Tokyo, foot patrol works dense sidewalks and building entrances; across the wider industrial blocks of the Arts District and South Park, marked-vehicle patrol covers more ground between GPS-logged checkpoints. Subterranean, multi-level parking garages beneath the towers get their own interior sweeps, and alley-facing loading docks are worked on a schedule that shifts with the building's day-and-night rhythm rather than a single fixed loop.",
      "The property mix here demands a different access-control posture block to block. A Financial District office tower needs lobby officers managing turnstiles, visitor credentialing, tenant escorts, and freight-elevator control; the converted lofts of the Arts District and Historic Core often lack purpose-built lobbies, so retrofitted entry points, package rooms, roof access, and fire escapes become the pressure points your program covers. Ground-floor retail beneath these buildings gets loss-prevention support, while South Park's high-rise residences can layer concierge-style front-desk staffing with executive or estate protection. Officers are armed or unarmed to fit the building, all background-checked and trained beyond California minimums.",
      "Timing and coordination decide outcomes here. On event days around Crypto.com Arena, the Convention Center, and L.A. Live, ingress and egress compress into tight windows, so venue teams — TEAM-certified where needed — plan crowd flow and post assignments with building operations and local law enforcement well before doors open. In the towers, we work evacuation routes, stairwell control, and muster points against the reality of vertical crowds and gridlocked surface streets. Every post runs under 24/7 live supervision. A Stratton advisor responds within one business day, coverage typically begins within 72 hours of signing, and teams have mobilized in under 24 hours for urgent needs.",
    ],
    faqs: [
      { q: "Do you provide armed guards in Downtown Los Angeles?", a: "Yes. Stratton fields both armed and unarmed officers, and we match the posture to your property and risk — a high-rise lobby or residential concierge desk is often unarmed, while certain garages, ground-floor retail, or after-hours industrial blocks may warrant armed coverage. During a free on-site assessment, a Stratton advisor recommends the right mix. All officers are licensed, background-checked, and trained beyond California minimums, operating under CA PPO License #122163." },
      { q: "How fast can you deploy officers to a Downtown LA property?", a: "After you request a free on-site assessment, a Stratton advisor responds within one business day to review your building and scope. Coverage typically begins within 72 hours of signing, and for urgent situations — a sudden vacancy, an incident, or a short-notice event — teams have mobilized in under 24 hours. Because downtown properties range from single lobbies to multi-tower campuses, exact timelines are confirmed once we understand your posts and hours." },
      { q: "Can Stratton staff lobby and access control for a Downtown high-rise or loft building?", a: "Yes. Corporate and lobby security is a core service — officers manage visitor credentialing, turnstiles, tenant escorts, freight-elevator and loading-dock control, and after-hours access. For converted residential lofts and high-rise residences in the Arts District, Historic Core, and South Park, we can staff concierge-style front desks and secure retrofitted entry points, package rooms, and roof or fire-escape access. Every post is backed by 24/7 live supervision and, where patrol is included, GPS-logged checkpoints." },
      { q: "Do you handle event security near Crypto.com Arena and the Convention Center?", a: "Yes. Stratton deploys scalable event teams for arena, convention, and L.A. Live-area crowds, and venue officers can be TEAM-certified. We plan crowd flow, ingress and egress, and post assignments alongside your building operations and local law enforcement, scaling staffing to the event's size and hours. For adjacent office and residential buildings affected by event-day surges, patrol and access control can be adjusted so your property stays covered while the crowds move through." },
    ],
  },
  {
    slug: "pasadena",
    name: "Pasadena",
    region: "San Gabriel Valley",
    summary: "Pasadena combines the upscale shopping and dining of Old Pasadena and South Lake with historic estate neighborhoods, civic and cultural institutions, and marquee events like the Rose Parade and Rose Bowl games. Stratton supports retail loss prevention along Colorado Boulevard, estate and HOA patrol in the foothill neighborhoods, and large-scale event security for crowds that swell into the hundreds of thousands. Officers reflect the city's professional, community-oriented character.",
    neighborhoods: ["Old Pasadena", "South Lake Avenue", "Colorado Boulevard", "Rose Bowl", "Bungalow Heaven", "Playhouse District"],
    concerns: ["Retail theft and parking-structure incidents in Old Pasadena and South Lake", "Massive crowd and perimeter security for the Rose Parade and Rose Bowl events", "Estate and HOA protection in historic foothill residential neighborhoods", "Vandalism and after-hours trespass at civic, cultural, and commercial properties"],
    services: ["retail", "events", "residential"],
    localContext: [
      "Your patrol program is built around how Pasadena actually moves. Along Colorado Boulevard and the Old Pasadena grid, foot officers work storefront-dense blocks where vehicle patrol stalls in congestion, while marked units cover the wider South Lake Avenue corridor and its multi-level parking structures on GPS-logged checkpoint routes. In the foothill estate pockets and the historic bungalow blocks of Bungalow Heaven, patrols shift to slower, license-plate-aware passes on narrow residential grids. Around the Rose Bowl and its arroyo approaches, coverage accounts for open perimeters and long sightlines. Routes are timed to local rhythms, not a fixed loop an intruder can predict.",
      "On-site posture is matched to each property type. Retail along South Lake Avenue and Old Pasadena is served by plainclothes or uniformed loss-prevention officers who work fitting rooms, entrances, and closing procedures rather than simply standing post. Office and mixed-use buildings in the Playhouse District get lobby and access-control officers managing visitor screening, after-hours entry logs, and tenant escorts. For gated communities and HOAs, officers handle gatehouse credentialing, vendor verification, and amenity checks. Estate assignments in the historic foothill neighborhoods can pair standing residential coverage with executive and estate protection, using armed or unarmed officers depending on your assessed risk.",
      "Coordination is where Pasadena assignments are won or lost. Officers work alongside your building operations and property managers, and stay ready to interface with Pasadena Police and fire personnel when an incident escalates. For high-traffic dates around the Rose Bowl and Colorado Boulevard, staffing scales up with pre-planned post assignments, radio protocols, and crowd-flow and evacuation awareness; event officers can be TEAM-certified for venues serving alcohol. Everything runs under 24/7 live supervision. If you need to launch quickly, coverage typically begins within 72 hours of signing, and teams have mobilized in under 24 hours for urgent situations after a free on-site assessment.",
    ],
    faqs: [
      { q: "Do you provide armed guards in Pasadena?", a: "Yes. Stratton provides both armed and unarmed officers throughout Pasadena, and the right posture is determined during your free on-site assessment based on the property, threat level, and setting. Whether it is estate protection in the foothills or lobby coverage in the Playhouse District, we deploy accordingly. Stratton is licensed, bonded, and insured under CA PPO License #122163, and every officer is background-checked and trained beyond state minimums." },
      { q: "How fast can you deploy to a Pasadena property?", a: "After you request a free on-site assessment, a Stratton advisor responds within one business day. Coverage typically begins within 72 hours of signing, and for urgent situations our teams have mobilized in under 24 hours. Timing depends on the scope and posture your property needs, which we confirm during the assessment so staffing and checkpoints are set up correctly from the first shift." },
      { q: "Can you protect an HOA or private estate in Pasadena's foothill neighborhoods?", a: "Yes. Stratton offers residential and HOA services along with executive and estate protection suited to Pasadena's historic foothill areas and gated communities. That can include gatehouse credentialing, vendor verification, marked vehicle and foot patrol with GPS-logged checkpoints, and standing residential officers. We start with a free on-site assessment of access points, sightlines, and routines, then build a program around how your community or estate actually lives day to day." },
      { q: "Do you handle event and crowd security for Rose Bowl-area venues?", a: "Yes. Stratton provides event security in Pasadena, including gatherings around the Rose Bowl and Colorado Boulevard. Staffing scales to the date with pre-planned post assignments, perimeter and crowd-flow coverage, and radio coordination, and venue officers can be TEAM-certified for events serving alcohol. We also offer fire watch when required. Because timing and headcount vary by event, we recommend a free on-site assessment early so the plan and staffing are locked in before your date." },
    ],
  },
  {
    slug: "malibu",
    name: "Malibu",
    region: "Coastal Los Angeles County",
    summary: "Malibu is 21 miles of beachfront and canyon estates strung along PCH, where the security reality is defined by isolation, single-road access, and seasonal wildfire and storm threats. Stratton provides discreet estate details for high-profile residents, gated-community and access patrol along remote canyons, and surge coverage during evacuations and the summer tourist influx. Programs account for slow emergency response times and the long, exposed approaches that make these properties uniquely vulnerable.",
    neighborhoods: ["Pacific Coast Highway", "Point Dume", "Malibu Colony", "Carbon Beach", "Malibu Canyon", "Zuma Beach"],
    concerns: ["Estate burglary and trespass enabled by isolation and long property approaches", "Wildfire and evacuation security \u2014 access control and asset protection during closures", "Seasonal beach crowds, parking conflicts, and beachfront-property trespass", "Slow emergency response times along PCH requiring on-site first-line presence"],
    services: ["residential", "patrol", "corporate"],
    localContext: [
      "Coverage in Malibu is built around the single artery every response depends on: Pacific Coast Highway. Vehicle patrols are routed and timed to the corridor's real congestion, so marked units aren't stranded miles from a call, and GPS-logged checkpoints are placed along the long private driveways and gated turnoffs that branch off PCH into Point Dume and Malibu Canyon. On the sand side, foot patrol covers the exposed property lines at Carbon Beach and Malibu Colony, where the public wet-sand boundary and rear decks create approach paths no fence addresses. Routes are staggered, not fixed, so patterns can't be learned from the road.",
      "The property mix here rewards a standing on-site presence over drive-by checks. For estates set behind long approaches in Point Dume or up Malibu Canyon, Stratton fields estate and executive-protection details that manage the gate as the real perimeter — credentialing vendors, domestic staff, caterers, and construction crews before they reach the residence. Officers can run armed or unarmed, uniformed for deterrence or low-profile to match a private household, and hold the entry point as a first line while help is still en route. Access logs and checkpoint scans give you a defensible record of everyone who came up the drive.",
      "Because sworn response can be slow along a closed or gridlocked PCH, programs are written to coordinate with Los Angeles County Sheriff's patrols rather than assume them. During Red Flag conditions and evacuation orders, fire watch and access-control officers can hold a property through a closure, document conditions, and control who re-enters once roads reopen. Summer surges at Zuma Beach and the Colony bring parking overflow and trespass that scale up event-style staffing. All posts run under 24/7 live supervision, and for urgent needs teams have mobilized in under 24 hours — with standard coverage typically beginning within 72 hours of signing.",
    ],
    faqs: [
      { q: "Do you provide armed guards for Malibu estates?", a: "Yes. Stratton fields both armed and unarmed officers, and the right posture depends on your property and threat profile. On a Point Dume or Malibu Colony estate, unarmed uniformed patrol often delivers the visible deterrence you want, with armed estate or executive-protection details where the risk warrants it. All officers are background-checked, trained beyond California minimums, and work under 24/7 live supervision. Stratton is licensed, bonded, and insured under CA PPO #122163." },
      { q: "How fast can you deploy to a Malibu property?", a: "For urgent situations — a fire watch during Red Flag conditions, a sudden vacancy, or a security incident — Stratton teams have mobilized in under 24 hours. Standard, ongoing coverage typically begins within 72 hours of signing. The first step is a free on-site assessment: an advisor walks the property, factors in your PCH access and approach realities, and responds within one business day." },
      { q: "Can you handle security during a wildfire evacuation or PCH closure?", a: "Yes. Fire watch and access-control officers can remain on an estate through an evacuation or road closure, monitor and document conditions, protect assets, and manage who re-enters once PCH reopens. Because emergency response can be delayed along the single coast road, an on-site officer serves as your first line until help arrives. Programs are coordinated with local Sheriff and fire authorities rather than built to replace them." },
      { q: "Do you cover gated communities and HOAs in Malibu?", a: "Yes. Stratton provides residential and HOA patrol for gated enclaves and canyon communities, including access control at the gate, GPS-logged checkpoint tours, and after-hours coverage of shared roads and beachfront property lines at areas like Carbon Beach. For summer surges — beach crowds, parking overflow, and private events near Zuma or the Colony — coverage scales with event-trained officers, who can be TEAM-certified for larger gatherings." },
    ],
  },
  {
    slug: "hollywood",
    name: "Hollywood",
    region: "Central Los Angeles",
    summary: "Hollywood draws constant foot traffic to the Walk of Fame, the Boulevard's tourist corridor, and a dense nightlife and live-entertainment scene, while hillside homes sit just above the congestion. The mix of crowds, street vendors, and transient activity drives demand for retail and venue security, premiere and event teams, and residential patrol in the adjacent hills. Stratton officers manage high-volume crowds and protect guest-facing brands without disrupting the visitor experience.",
    neighborhoods: ["Hollywood Walk of Fame", "Hollywood Boulevard", "Sunset & Vine", "Hollywood Hills", "TCL Chinese Theatre", "Dolby Theatre"],
    concerns: ["Heavy tourist crowds, pickpocketing, and aggressive solicitation along the Boulevard", "Premiere, red-carpet, and live-venue crowd management and credentialing", "Retail theft and after-hours trespass in the tourist and nightlife corridor", "Residential burglary and access concerns in the adjacent Hollywood Hills"],
    services: ["events", "retail", "residential"],
    localContext: [
      "Hollywood's terrain splits into two very different jobs. Along Hollywood Boulevard and the Walk of Fame, coverage works best on foot — officers hold fixed, high-visibility posts near TCL Chinese Theatre and the Dolby Theatre, then walk defined loops with GPS-logged checkpoints so no storefront or entrance sits unwatched during peak hours. Up in the Hollywood Hills, where narrow canyon streets and single-access driveways make foot coverage impractical, we shift to marked and unmarked vehicle patrol on staggered timing. Around Sunset & Vine, we blend both — foot presence at street level, vehicle sweeps through the parking structures behind the towers.",
      "The property mix here rewards a layered posture rather than one standard guard. Guest-facing retail and quick-service storefronts on the Boulevard are served by uniformed loss-prevention officers positioned at entrances, trained to de-escalate rather than confront in front of tourist crowds. Live venues and theaters call for a different setup — credentialed access points, bag and wristband checks, and TEAM-certified officers who can manage a queue without stalling it. For hillside residences, we lean on access control at the gate or driveway: visitor and vendor verification, package and delivery screening, and discreet standing patrol during events, staff turnover, or absences.",
      "Response in Hollywood is a timing problem as much as a staffing one. Programs are structured to coordinate with LAPD's Hollywood Division and, for ticketed premieres at the Dolby or TCL Chinese Theatre, with venue operations and event producers on credentialing, road-closure timing, and crowd flow. We plan around the district's daily rhythm — the tourist peak by midday, the nightlife surge after dark near Sunset & Vine — and staff accordingly rather than flat across the clock. Officers work under 24/7 live supervision, so a shift in crowd size, an evacuation, or an after-hours alarm at a hillside home routes to a supervisor immediately.",
    ],
    faqs: [
      { q: "Do you provide armed guards in Hollywood?", a: "Yes. Stratton fields both armed and unarmed officers, and we help you decide which fits your property during a free on-site assessment. Many Boulevard retailers and hillside homes are well served by trained unarmed officers with strong patrol discipline, while some venues or higher-risk posts warrant armed coverage. Every officer is background-checked, trained beyond California minimums, and licensed, bonded, and insured under CA PPO #122163." },
      { q: "How quickly can you deploy security to a Hollywood property?", a: "Coverage typically begins within 72 hours of signing, and our teams have mobilized in under 24 hours for urgent needs. To start, request a free on-site assessment — a Stratton advisor responds within one business day, reviews your property, and builds a staffing and patrol plan before deployment. Timing can flex around premiere dates, events, or an immediate security concern." },
      { q: "Can you handle security for a premiere or event at a Hollywood theater?", a: "Yes. Event security is a core service, covering crowd management, credentialing, and access control for premieres, red-carpet arrivals, and live-venue crowds around the Dolby Theatre and TCL Chinese Theatre. Venue officers can be TEAM-certified for guest-facing crowd control. We coordinate with venue operations and, where needed, local law enforcement on credentialing and crowd flow so entrances stay orderly without stalling the line." },
      { q: "Do you offer security for homes in the Hollywood Hills?", a: "Yes. We provide residential, estate, and HOA protection tailored to the hills' narrow canyon streets and single-access driveways, using marked and unmarked vehicle patrol with GPS-logged checkpoints alongside gate or driveway access control. Coverage can include visitor and vendor verification, package screening, and standing details during travel, events, or staff turnover. Executive and estate protection is available for higher-profile residents." },
    ],
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
    slug: "how-much-do-security-guards-cost-in-los-angeles",
    title: "How Much Do Security Guards Cost in Los Angeles?",
    category: "Pricing Guide",
    excerpt:
      "Real Los Angeles market rates for armed and unarmed guards, the six factors that move your hourly bill, and how to compare quotes without getting burned by the cheapest one.",
    readTime: "9 min read",
    sections: [
      {
        heading: "What Security Guards Cost in Los Angeles Right Now",
        body: [
          "Security guard service in Los Angeles is billed by the hour, and the billed rate is not the officer's wage \u2014 it covers the guard's pay, payroll taxes, workers' compensation, liability insurance, training, supervision, scheduling, and the company's margin. That distinction matters, because it explains most of the price spread you'll see when you collect quotes. As of this writing, most reputable, properly licensed Los Angeles firms bill unarmed officers somewhere in the low-$20s to high-$30s per hour, and armed officers from the mid-$30s to $60 or more, depending on the assignment. Specialized posts \u2014 executive protection, high-risk sites, off-duty-officer details \u2014 run higher still.",
          "Treat any quote dramatically below that band as a warning rather than a bargain. An unarmed rate in the teens does not leave room to pay a guard legally in Los Angeles, carry real insurance, and supervise the post \u2014 something has to give, and it is usually the officer's wages, the insurance, or both. The Los Angeles market also moves with California's wage laws and insurance costs, so published numbers age quickly; use the ranges here to sanity-check proposals, not as a substitute for a written quote on your actual property.",
          "One structural note that surprises many first-time buyers: there is usually no per-guard equipment or setup fee for a standard post \u2014 the hourly rate is the price. Where you will see additional line items is in patrol vehicles, dedicated site vehicles, or technology add-ons like camera monitoring, and a good proposal will price those separately and transparently.",
        ],
      },
      {
        heading: "The Six Factors That Actually Move Your Rate",
        body: [
          "First: armed versus unarmed. An armed officer carries additional BSIS permitting, firearm qualification requirements, and substantially higher insurance exposure for the company \u2014 which is why the armed premium is real and universal across the industry. Many properties that assume they need armed coverage are better served by well-run unarmed officers with strong patrol discipline; an honest vendor will walk through that decision with you rather than upsell the higher rate.",
          "Second and third: hours and consistency. Total weekly volume is the biggest lever on rate \u2014 a 24/7 post (168 hours a week) earns meaningfully better pricing than eight hours every Saturday night, because it lets the company build stable schedules and assign consistent officers. Predictable, long-term schedules also price better than fluctuating on-call coverage. Fourth: the site itself. A quiet lobby post and a site with a history of break-ins, transient activity, or crowd exposure are not the same assignment, and post orders that demand more of the officer justify \u2014 and should get \u2014 a more experienced, better-paid guard.",
          "Fifth: officer profile. Training beyond the state minimum, prior law-enforcement or military experience, and specialized certifications all move the wage that attracts and keeps that caliber of officer. Sixth: contract structure. Most firms have hourly minimums per shift (commonly four hours), and short-notice or holiday coverage typically carries a premium. None of these factors are unique to any one company \u2014 what varies is whether a vendor explains them up front or buries them in the invoice.",
        ],
      },
      {
        heading: "Why the Cheapest Bid Usually Costs the Most",
        body: [
          "When a quote undercuts the market by a third, the savings are coming out of something you would have paid for on purpose. The most common casualties: officer wages (which drives the turnover and no-show rates that plague low-cost operators), insurance coverage (verify the certificate \u2014 and confirm armed operations are actually covered if you're buying armed), training (state-minimum-only guards handling situations that demand de-escalation skill), and supervision (nobody checking that the 2 a.m. guard is awake, on post, and writing reports).",
          "The verification steps take minutes and are worth doing on every bid: confirm the company's Private Patrol Operator license is active on the BSIS public lookup (Stratton operates under California PPO #122163, and any legitimate firm will hand you its number without being asked twice), request a current Certificate of Insurance naming you as additional insured, and ask what the officer on your post will actually be paid. That last question makes low-cost vendors visibly uncomfortable \u2014 which is precisely the point.",
          "There is also a liability arithmetic to the cheap bid. If an under-insured company's guard injures someone or fails to act on your property, the claim doesn't stay the vendor's problem. The few dollars an hour you saved can be dwarfed by a single incident that lands on your own policy \u2014 or your own balance sheet.",
        ],
      },
      {
        heading: "Patrol Service: The Budget Alternative to a 24/7 Post",
        body: [
          "If a dedicated round-the-clock guard is more coverage than your risk profile demands, mobile patrol is the standard cost-managed alternative. Instead of paying for 168 hours of standing presence, you pay for scheduled (and intentionally randomized) visits \u2014 a marked vehicle and uniformed officer who checks your property several times a night, documents each visit with GPS-verified scans, and responds to alarms in between. Because a patrol route is shared across nearby properties, the per-property cost is a fraction of a dedicated post.",
          "Patrol pricing is typically quoted per visit or as a flat monthly rate for an agreed visit schedule, with alarm response billed per event or bundled. For many HOAs, retail centers, office buildings, and construction sites, a patrol program plus good lighting and cameras delivers most of the deterrence of a standing guard at a stark fraction of the price \u2014 and the honest answer from a security advisor is often a hybrid: standing coverage for high-risk hours, patrol for the rest.",
          "The right structure depends on your property's actual incident pattern, which is exactly what a walkthrough is for. Beware any vendor who quotes a 24/7 post without asking what problem you're trying to solve.",
        ],
      },
      {
        heading: "How to Get an Exact Number for Your Property",
        body: [
          "Market ranges bound the problem, but your rate comes from your property: the hours you need, armed or unarmed, the post orders, and the site's risk picture. Any serious Los Angeles firm will put a number in writing after a walkthrough \u2014 at Stratton the walkthrough and assessment are free, and what comes back is a clear written proposal, not a teaser rate that grows once you've signed.",
          "To make any vendor's quote faster and sharper, have three things ready: the coverage window you think you need (be honest about whether it's peace-of-mind coverage or a response to specific incidents), any incident history \u2014 police reports, HOA complaints, break-in dates \u2014 and site logistics like parking, access, and where a guard or patrol vehicle would actually be positioned. Ten minutes of preparation turns a generic bid into a program design.",
          "Then compare proposals on the whole picture: the billed rate, the officer wage behind it, the insurance certificate, the training standard, the supervision model, and the contract's minimums and exit terms. The cheapest number on the page is easy to find. The best value \u2014 the program that actually prevents the incident \u2014 takes one more phone call to identify. Reach us at (424) 440-5554 or through the Contact page and we'll give you a real number for your property within one business day of the walkthrough.",
        ],
      },
    ],
  },
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
