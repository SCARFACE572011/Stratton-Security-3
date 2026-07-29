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
  {
    service: "patrol",
    area: "westwood",
    metaTitle: "Security Patrol in Westwood, Los Angeles",
    metaDescription:
      "Marked-vehicle and foot patrols for Westwood Village, the Wilshire Corridor and Westwood Boulevard. Stratton's office is here. GPS-verified rounds, alarm response.",
    atAGlance: [
      "Patrol coverage across Westwood Village, the Wilshire Corridor towers, Westwood Boulevard and the medical-centre blocks",
      "Stratton's own office is at 10940 Wilshire Blvd — this is the neighbourhood we work from, not a satellite territory",
      "GPS-verified checkpoints with timestamped, photo-documented reports after every round",
      "Alarm response, lock-and-unlock and garage sweeps for retail, restaurants, offices and residential towers",
      "Licensed, bonded and insured under California PPO #122163, with a live supervisor 24/7",
    ],
    intro: [
      "Westwood is the one market where our patrol vehicles start and end the shift a few blocks from the office. Stratton is headquartered at 10940 Wilshire Blvd, on the Corridor itself, which means response times here are measured in minutes and supervisors can be on a property in person rather than on a phone. That matters more than it sounds: the most common failure in contract patrol is a supervisor who has never physically stood on the client's site.",
      "The neighbourhood asks for three different patrol rhythms. Westwood Village runs on a student-and-restaurant clock — Broxton, Weyburn and Gayley fill and empty around class schedules and closing time, and the parking structures behind the Village absorb most of the vehicle crime. The Wilshire Corridor is the opposite: a wall of residential towers between Beverly Glen and the 405 where the exposure is garage-level, at the valet lane, the subterranean parking gates and the service entrances rather than the lobby a doorman already watches. South of Wilshire, the Westwood Boulevard business district — the Persian-American commercial strip locals call Persian Square — is dense small-tenant retail where after-hours roll-down gates, alley doors and rear parking are the whole job.",
      "Our routes reflect that. Village rounds concentrate on closing windows, walking the restaurant blocks as staff lock up and sweeping structures where break-ins cluster. Corridor rounds work vertically as much as horizontally: garage levels, service corridors and the trash and loading areas where an unbadged person is easiest to miss. Along Westwood Boulevard, patrols run staggered passes after close and check the rear of the strip rather than only the storefront. Around the UCLA medical blocks on Westwood Plaza, timing accounts for shift changes, when foot traffic spikes and attention drops. Every visit is scanned at a GPS-verified checkpoint and written up with photographs you can read the next morning.",
    ],
    riskFactors: [
      "Vehicle break-ins and catalytic-converter theft in Westwood Village parking structures",
      "Garage-level and service-entrance exposure at Wilshire Corridor residential towers, where the front door is already staffed but the back of house often is not",
      "After-hours burglary along the Westwood Boulevard retail strip, particularly rear and alley access",
      "Transient and late-night foot traffic through the Village once bars and restaurants close",
      "Shift-change windows around the UCLA medical blocks, when access points see the highest churn",
    ],
    jurisdictionNote:
      "Westwood is part of the City of Los Angeles, so the responding agency is the LAPD's West Los Angeles Division — not a city police department. The exception is significant and easy to get wrong: the UCLA campus proper has its own sworn force, the UCLA Police Department, with primary jurisdiction on university property. A block can therefore change who answers, and properties adjacent to campus need that written into their post orders so an officer escalates to the right dispatcher the first time. Century City sits in the same LAPD division, which is why patrol programmes across the two often share supervision.",
    faqs: [
      {
        q: "Do you actually operate in Westwood, or just cover it?",
        a: "Stratton's office is at 10940 Wilshire Blvd, Suite 1720 — inside Westwood, on the Corridor. Patrol units working this area are not dispatched from across the county, and a supervisor can walk a property in person the same day. That is a practical difference in how fast a problem gets looked at rather than a marketing claim.",
      },
      {
        q: "Which police department responds in Westwood?",
        a: "The LAPD's West Los Angeles Division covers Westwood, because it is part of the City of Los Angeles rather than a separate municipality. The UCLA campus itself is different — the UCLA Police Department has primary jurisdiction on university property. For a building near campus we establish which agency answers each entrance before an incident, not during one.",
      },
      {
        q: "Can you patrol a Wilshire Corridor residential tower that already has a doorman?",
        a: "Yes, and that is a common arrangement. A lobby attendant watches the front door; the exposure in these towers is usually the subterranean garage, the valet lane, service corridors and the loading and trash areas. Patrol rounds cover those on a randomised schedule, respond to alarms, and document each pass — so the building gets coverage of the areas a single fixed post cannot see.",
      },
      {
        q: "How fast can patrol coverage start in Westwood?",
        a: "Standing coverage typically begins within 72 hours of a signed agreement, and teams have mobilised in under 24 hours for urgent needs. Because this is our home neighbourhood, the walkthrough itself is usually quick to schedule — an advisor responds within one business day and the on-site assessment is free.",
      },
    ],
  },
  {
    service: "fire-watch",
    area: "downtown-los-angeles",
    metaTitle: "Fire Watch Security in Downtown Los Angeles",
    metaDescription:
      "Certified fire watch officers for Downtown LA high-rises when sprinklers or alarms are impaired. Timed written logs, LAFD-ready documentation, mobilised in under 24 hours.",
    atAGlance: [
      "Fire watch officers for Downtown high-rises, adaptive-reuse conversions and hotel and residential towers",
      "Continuous patrol of the affected floors and areas, with timed written logs kept for the fire authority and your insurer",
      "Urgent mobilisation in under 24 hours — impairment fire watch is rarely scheduled in advance",
      "Officers briefed on the building's alarm-pull locations, standpipe connections, stairwells and evacuation routes",
      "Licensed, bonded and insured under California PPO #122163, with a live supervisor 24/7",
    ],
    intro: [
      "Fire watch is not a general guard post, and Downtown is where that distinction bites hardest. When a sprinkler system, standpipe or fire-alarm system is taken out of service in a high-rise — for a retrofit, a repair, a failed inspection, or a valve closed after a leak — the California Fire Code requires a dedicated fire watch for the duration of the impairment. The officer's job is narrow and specific: walk the affected areas on a set cycle, watch for smoke and heat, keep egress clear, know where the pull stations and standpipe connections are, and call 911 directly rather than waiting for a system that is currently switched off.",
      "Downtown's building stock makes this a real assignment rather than a formality. The Financial District and Bunker Hill towers mean vertical patrol across many floors with long travel times between them, so the cycle length has to be set against how long a full round actually takes. The Historic Core and the blocks converted under the city's adaptive-reuse programme hold older buildings where a retrofit routinely takes systems offline in one wing while residents or tenants remain in another — that combination, occupied space plus impaired protection, is exactly what the code is written for. Around South Park, the Arts District and Little Tokyo, hotel and mixed-use properties add guests who did not choose to be in a building with a disabled alarm, which raises the bar on egress checks and on how visibly the officer is posted.",
      "What you get from us is the documentation as much as the presence. Every round is logged with a timestamp, the areas covered and anything observed, because the fire authority and your insurer will both ask for that record and a verbal assurance is worth nothing. Officers are briefed on your specific building before the first round — alarm-pull locations, standpipe connections, stairwell discharge points, which lifts are usable, and who to call in your organisation at 3 a.m. Coverage continues until the system is restored and signed off, and we do not quietly reduce the cycle when a shift gets long.",
    ],
    riskFactors: [
      "Occupied floors remaining in service while protection systems are impaired in another part of the building — the core scenario the code addresses",
      "Long vertical travel times in Financial District and Bunker Hill towers, which lengthen the real patrol cycle",
      "Hot work, temporary power and stored combustibles during adaptive-reuse and retrofit projects in the Historic Core",
      "Hotel and residential guests unaware that alarm or sprinkler coverage is reduced, making egress checks and visible posting more important",
      "Incomplete or after-the-fact logs, which fail the documentation the fire authority and insurers expect",
    ],
    jurisdictionNote:
      "Downtown Los Angeles is in the City of Los Angeles, so the Los Angeles Fire Department is the fire authority and the LAPD's Central Division is the responding police agency. That matters for fire watch specifically because the LAFD is who sets and signs off expectations for an impairment watch in a Los Angeles high-rise, and its requirements are not interchangeable with those of the independent fire departments in cities like Burbank, Glendale or Long Beach. If your building sits at the edge of the city limits, confirm the authority having jurisdiction before the watch starts rather than assuming.",
    faqs: [
      {
        q: "When is a fire watch legally required in Los Angeles?",
        a: "The California Fire Code requires a fire watch whenever a required fire-protection system — sprinklers, standpipes or fire alarm — is out of service in an occupied building, for the duration of the impairment. In practice it is triggered by retrofits, repairs, a closed valve after a leak, or a failed inspection. The Los Angeles Fire Department is the authority having jurisdiction Downtown and will expect a documented, continuous watch rather than an occasional walk-through.",
      },
      {
        q: "How quickly can you start a fire watch Downtown?",
        a: "Under 24 hours in most cases, and often the same day. Impairment fire watch is almost never planned in advance — a valve gets closed or an inspection fails and coverage is needed immediately. Call (424) 440-5554 and an advisor will scope the affected areas, the cycle length and the shift pattern on the phone rather than waiting for a walkthrough.",
      },
      {
        q: "What does a fire watch officer actually do?",
        a: "Patrols the affected areas on a fixed cycle looking for smoke, heat and ignition sources; keeps exits and egress paths clear; knows the alarm-pull, standpipe and stairwell locations for that specific building; calls 911 directly if anything is found, because the system that would normally do so is offline; and records every round in a timed written log. The officer is posted to that task and is not doubling as a lobby or access-control guard.",
      },
      {
        q: "Will the log satisfy the fire department and our insurer?",
        a: "That is what it is for. Each round is recorded with the time, the areas covered and any observations, and the log is available to you throughout rather than assembled afterwards. Both the fire authority and your carrier will typically ask for that record as evidence the impairment was covered continuously, which is also why we do not shorten cycles or leave gaps between shifts.",
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
