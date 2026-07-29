/* ─── SERVICE × CITY PAGES ───────────────────────────────────────────────────
   Hand-written intersections of a SERVICES slug and a SERVICE_AREAS slug,
   targeting "{service} in {city}" search and answer-engine queries.

   THE ARRAY IS THE ANTI-DOORWAY GATE. 10 services x 20 cities = 200 possible
   permutations, but most are junk ("Hotel & Hospitality Security in Calabasas"
   has no market) and a cartesian product of templated geo-pages is exactly what
   Google's doorway-page guidance targets — and what answer engines decline to
   cite. A page exists here ONLY when someone has written genuinely city- and
   service-specific content for it. Never generate these programmatically.

   Quality bar per entry: >=450 unique words across intro + risk factors + FAQ
   answers, naming at least three real sub-areas/streets/venues and the correct
   responding agency. Shared boilerplate (capabilities, pricing, CTA) comes from
   the parent SERVICES entry and sits below the fold.
──────────────────────────────────────────────────────────────────────────── */

export type ServiceCityPage = {
  /** SERVICES slug */
  service: string;
  /** SERVICE_AREAS slug */
  area: string;
  /** <title> before the "| Stratton Security Group" template appends */
  metaTitle: string;
  metaDescription: string;
  /** Answer-first extractable facts, rendered in the KeyFacts box */
  atAGlance: string[];
  /** 3-4 paragraphs, 100% bespoke — the page's reason to exist */
  intro: string[];
  /** This service's risk picture in THIS city */
  riskFactors: string[];
  /** Who polices here + any REAL local rule. Never invent an ordinance. */
  jurisdictionNote: string;
  faqs: { q: string; a: string }[];
};

export const SERVICE_CITY_PAGES: ServiceCityPage[] = [
  {
    service: "patrol",
    area: "culver-city",
    metaTitle: "Security Patrol in Culver City, CA",
    metaDescription:
      "Marked-vehicle and foot patrols for Culver City businesses — Downtown, the Hayden Tract, Fox Hills. GPS-verified rounds, alarm response, live within 72 hours.",
    atAGlance: [
      "Marked-vehicle and foot patrols across Downtown Culver City, the Hayden Tract, the Washington Boulevard corridor and Fox Hills",
      "GPS-verified checkpoints with timestamped, photo-documented reports after every round",
      "Alarm response, lock-and-unlock service and vacant-property checks for offices, studios and retail",
      "Coverage typically live within 72 hours of signing — urgent deployments in under 24",
      "Licensed, bonded and insured under California PPO #122163, with a live supervisor 24/7",
    ],
    intro: [
      "Culver City packs three very different patrol problems into about five square miles. Downtown, the blocks where Culver Boulevard meets Washington Boulevard under the Culver Hotel run late — restaurants, bars and the Culver Steps keep foot traffic moving well past midnight, and the public parking structures on Cardiff, Ince and Watseka absorb most of it. A mile east, the Hayden Tract and the Washington Boulevard corridor hold the creative and tech offices that made Culver City a studio town again, and those streets empty almost completely after 8 p.m. South of the 90, Fox Hills is a different city again: apartment towers, hotel frontage and the regional draw of Westfield Culver City. A patrol program here has to treat those as three separate assignments that happen to share a police department.",
      "Our routes are built the way the city actually moves. Downtown rounds concentrate on closing windows — walking the restaurant rows as staff lock up, sweeping the parking structures where vehicle break-ins cluster, checking alley doors behind Main Street. Overnight, marked units run the Hayden Tract and the Arts District on staggered, GPS-logged loops; those architectural office blocks have almost no ambient foot traffic at 3 a.m., which makes a predictable patrol pattern the only thing an intruder needs to learn — so we randomise timing and vary approach direction on every pass. Around Ivy Station and the E Line stop, patrols account for transit-adjacent foot traffic after the last trains. In Fox Hills, rounds tie retail frontage, hotel perimeters and residential garages into one loop.",
      "Every visit is documented. Officers scan GPS-verified checkpoints, photograph anything out of order and file timestamped reports you can read the next morning — if a gate was found open at 2:14 a.m., you will know at 8. Because a patrol route is shared across nearby properties, the per-property cost is a fraction of a dedicated post; most Culver City clients combine scheduled overnight rounds with alarm response and lock-and-unlock at opening and closing. The major studio lots run their own security, so our clients here are the production-adjacent offices, post houses, restaurants and property managers around them.",
    ],
    riskFactors: [
      "Vehicle break-ins in the downtown public parking structures",
      "After-hours burglary exposure across the Hayden Tract and Arts District office blocks, which have almost no ambient foot traffic overnight",
      "Transit-adjacent property crime near the E Line and Ivy Station after the last trains",
      "Retail theft pressure around Westfield Culver City and the Fox Hills frontage",
      "Equipment and copper theft at active tenant-improvement sites",
    ],
    jurisdictionNote:
      "Culver City is policed by its own Culver City Police Department, headquartered on Duquesne Avenue — not the LAPD. The city line matters more here than people expect: after decades of annexations it zig-zags block by block, so an address one street from yours may route 911 to LAPD's Pacific Division instead of CCPD, and south of Fox Hills the city meets unincorporated Ladera Heights, which the Sheriff's Marina del Rey Station covers. We write the responding agency for each entrance into your post orders, so an officer calling in an incident knows who owns the response before dialling. Culver City also administers its own alarm-permit programme separately from Los Angeles, which is one more reason patrol-verified alarm response pays for itself.",
    faqs: [
      {
        q: "How much does mobile patrol cost in Culver City?",
        a: "Patrol is priced per visit or as a flat monthly rate for an agreed schedule, and because routes are shared across nearby properties it costs a fraction of a dedicated 24/7 post. The exact number depends on visit frequency, hours, and whether alarm response is bundled. A free walkthrough produces a written quote, typically within one business day.",
      },
      {
        q: "Can your officers respond to alarms at my Culver City business?",
        a: "Yes — alarm response is a core patrol service. An officer investigates, documents what they find, and escalates to Culver City PD only when the alarm is real, which also keeps false-alarm dispatch fees under the city's alarm programme off your account. Response windows are agreed in your post orders rather than left open-ended.",
      },
      {
        q: "Which parts of Culver City do you patrol?",
        a: "All of it: Downtown and the Culver Steps, the Arts District and Washington corridor, the Hayden Tract, Ivy Station and the E Line corridor, and Fox Hills including the blocks around Westfield Culver City. Routes are built around your property rather than a fixed citywide loop, so a Hayden Tract office and a Fox Hills retail frontage get different rounds.",
      },
      {
        q: "How fast can patrol coverage start in Culver City?",
        a: "Standing coverage typically begins within 72 hours of a signed agreement. For urgent needs — a break-in last night, a fire-watch order, a sudden vendor failure — teams have mobilised in under 24 hours. The free on-site assessment comes first: an advisor responds within one business day and walks the property before anything is scheduled.",
      },
    ],
  },
];

/** Look up a written page for a given (area, service) pair. */
export function findServiceCityPage(area: string, service: string) {
  return SERVICE_CITY_PAGES.find((p) => p.area === area && p.service === service);
}

/** Every written page for an area — used to cross-link from the city page. */
export function serviceCityPagesForArea(area: string) {
  return SERVICE_CITY_PAGES.filter((p) => p.area === area);
}
