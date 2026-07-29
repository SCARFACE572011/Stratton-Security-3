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
  /**
   * <title> before the root template appends " | Stratton Security Group".
   * That suffix is 26 characters, so keep this to <=34 to stay under the ~60
   * where Google truncates the displayed title. Two entries shipped over the
   * limit before this was written down.
   */
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
    metaTitle: "Security Patrol in Westwood, LA",
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
    metaTitle: "Fire Watch in Downtown Los Angeles",
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
  {
    service: "construction",
    area: "pacific-palisades",
    metaTitle: "Palisades Construction Security",
    metaDescription:
      "Site security for Palisades rebuild projects — material and tool theft, access logging, vacant-lot checks across the Riviera, Highlands and Marquez Knolls.",
    atAGlance: [
      "Overnight and weekend coverage for active rebuild sites, cleared parcels and staged materials",
      "Documented access control: who entered, when, and on whose authority — kept as a written record",
      "Marked-vehicle checks for vacant lots and homes at framing stage, when a site is most exposed",
      "Urgent mobilisation in under 24 hours; standing coverage typically within 72 of signing",
      "Licensed, bonded and insured under California PPO #122163, with a live supervisor 24/7",
    ],
    intro: [
      "The January 2025 fire took a large share of the housing stock here, and the rebuild that followed created a security problem the Palisades never had before. Loss ran unevenly street to street, so the hardest-hit pockets are now a patchwork of cleared parcels, homes at various stages of framing, and standing residences whose neighbours are gone. That mix is the whole difficulty: a street with three occupied houses and nine construction sites has no ambient eyes on it after dark, and the people who would normally notice a stranger loading a truck at 2 a.m. are not there.",
      "What gets taken from a residential rebuild is predictable. Copper and wire before drywall goes up, appliances and fixtures once they are delivered but before they are installed, tools and compressors from unsecured lockups, and lumber and windows straight off the staging pile. The exposure peaks in the window between delivery and installation, which is exactly when a site has the most value sitting on it and the least protection around it. Our coverage is built around that timing rather than a flat nightly round: heavier presence when materials land, and documented checks of the lockup and the perimeter at close of work.",
      "Access is the other half. A rebuild street carries a constant stream of trades, inspectors, utility crews, debris haulers and homeowners, and on a site with no permanent staff nobody is recording who came through. Officers log arrivals and departures against your approved list, hold the gate when a delivery is not expected, and escalate to you rather than guessing. Rounds cover the practical geography too — the narrow canyon streets above Sunset, the Riviera, the Highlands and Marquez Knolls all have limited access and few turnarounds, which shapes how a patrol vehicle can realistically work them and how long a full round actually takes.",
    ],
    riskFactors: [
      "Copper, wire and plumbing theft before walls are closed",
      "Appliance and fixture theft in the window between delivery and installation",
      "Tool and equipment loss from site lockups and unattended trailers",
      "Vacant cleared parcels used for illegal dumping or informal access to neighbouring sites",
      "Streets where most neighbours are displaced, leaving no ambient observation overnight",
      "Unlogged access by trades, haulers and utility crews on sites with no permanent staff",
    ],
    jurisdictionNote:
      "Pacific Palisades is part of the City of Los Angeles, so the responding police agency is the LAPD's West Los Angeles Division and the fire authority is the Los Angeles Fire Department — not a separate city department. That matters on a rebuild because the same LAFD requirements govern fire watch if a site's or a neighbouring building's fire-protection systems are impaired during work, and because canyon access affects real response times. Where a project's permits carry site-security or fencing conditions, we write those into the post orders so the officer is enforcing your actual obligations rather than a generic checklist.",
    faqs: [
      {
        q: "Do you secure residential rebuild sites in Pacific Palisades?",
        a: "Yes — single-lot rebuilds as well as streets where a builder is running several at once. Coverage is usually overnight and weekend, when sites are empty, with heavier presence around material deliveries. On multi-lot streets one patrol route can cover several projects, which spreads the cost across them rather than charging each site for a dedicated post.",
      },
      {
        q: "What gets stolen from a construction site, and when?",
        a: "Copper and wire before drywall, appliances and fixtures once delivered but not yet installed, and tools from lockups and trailers. The peak exposure is the gap between delivery and installation, when the most value is on site with the least protection around it. Timing coverage to your delivery schedule matters more than adding rounds at a flat rate.",
      },
      {
        q: "Can officers control who comes onto the site?",
        a: "Yes. Officers check arrivals against your approved list of trades, inspectors and deliveries, log entries and exits with times, hold anyone not expected, and call your site contact rather than making the decision themselves. On a rebuild street with constant crew turnover, that written record is often the first thing anyone asks for when something goes missing.",
      },
      {
        q: "How quickly can coverage start?",
        a: "Standing coverage typically begins within 72 hours of a signed agreement, and teams have mobilised in under 24 hours when a site has been hit or left open. The free on-site assessment comes first — an advisor responds within one business day, walks the site, and scopes the hours and access requirements before officers are scheduled.",
      },
    ],
  },
  {
    service: "events",
    area: "inglewood",
    metaTitle: "Event Security in Inglewood, CA",
    metaDescription:
      "Event-day security for Inglewood businesses and lots near SoFi Stadium, Intuit Dome and the Kia Forum — crowd flow, lot control and overflow parking management.",
    atAGlance: [
      "Event-day coverage for businesses, lots and properties around SoFi Stadium, Intuit Dome and the Kia Forum",
      "Parking-lot control to stop unauthorised event parking on private property",
      "Uniformed and plainclothes officers for crowd flow, entrances and closing procedures",
      "Scheduling built around the venue calendar, including back-to-back and overlapping event days",
      "Licensed, bonded and insured under California PPO #122163, with a live supervisor 24/7",
    ],
    intro: [
      "Inglewood's event economy is unlike anywhere else in the county: SoFi Stadium, Intuit Dome and the Kia Forum sit within a short walk of each other, so a single evening can move tens of thousands of people through the same few square miles, and some dates stack two venues at once. The major venues run their own security operations. The businesses and properties around them mostly do not — and they absorb the spillover.",
      "That spillover is a specific, repeatable problem rather than a vague one. Private lots fill with event parkers who ignore signage, which blocks customers and tenants and leaves the owner with vehicles that will not move until midnight. Storefronts along Market Street and the Century Boulevard corridor see foot traffic surges that have nothing to do with their business, and staff closing up at the same moment a venue empties are doing it in a crowd. Restaurants and bars near the Hollywood Park district get a compressed rush that is good for revenue and hard on door control. Meanwhile every route in and out is congested, so anyone planning coverage has to think about when officers can physically arrive — arriving after the crowd is arriving too late.",
      "We build event-day coverage from the venue calendar backwards. Officers are posted before gates open rather than at kickoff, lot control is staffed through the departure window rather than ending when the event starts, and closing procedures are covered on the far side of the crowd rather than left to staff. For properties with recurring exposure we hold the same officers across dates, because someone who has worked your lot through three events knows which entrance backs up and which neighbour's driveway gets blocked. Coverage can be uniformed for visible deterrence, plainclothes where a visible guard would change the feel of the room, or both.",
    ],
    riskFactors: [
      "Unauthorised event parking filling private lots and blocking tenants and customers",
      "Crowd surges through retail frontage on Market Street and the Century Boulevard corridor with no relation to the business's own trade",
      "Staff closing up as a venue empties, in a crowd rather than an empty street",
      "Compressed rushes straining door control at restaurants and bars near Hollywood Park",
      "Congested access on event days, which makes late officer arrival effectively no coverage",
      "Back-to-back or overlapping dates across two venues, doubling exposure on a single evening",
    ],
    jurisdictionNote:
      "Inglewood is an independent city with its own Inglewood Police Department, which handles calls inside the city limits — this is not LAPD territory, and event nights are exactly when knowing that matters, because escalating to the wrong dispatcher costs time you do not have. The city and the venues run their own event-day traffic and parking programmes around SoFi Stadium and Intuit Dome, and those affect access routes and street parking near your property. We confirm the arrangements in force for the dates you are covering rather than assuming they are the same every event.",
    faqs: [
      {
        q: "Do you provide security inside SoFi Stadium or Intuit Dome?",
        a: "No — the major venues run their own security operations. Our clients are the businesses, lots, hotels and properties around them, which carry real event-day exposure and usually have no dedicated coverage. If you own a lot near a venue or a storefront on an event route, that is the gap we fill.",
      },
      {
        q: "Can you stop event parkers from using my private lot?",
        a: "Yes, and it is one of the most common requests here. An officer posted at the entrance through the arrival window turns away non-customers before they park, which is far more effective than towing afterwards. Coverage normally runs through the departure window as well, since a lot that is cleared at kickoff refills as soon as it is unattended.",
      },
      {
        q: "How far in advance should we book event coverage?",
        a: "As early as the venue calendar allows. Inglewood has dates where two venues run the same evening, and those are the hardest to staff well at short notice. Booking ahead also lets us assign the same officers across your recurring dates, which matters more than it sounds — an officer who has worked your lot before knows which entrance backs up and which neighbour gets blocked.",
      },
      {
        q: "Uniformed or plainclothes officers for an event?",
        a: "It depends what you want the presence to do. Uniformed officers deter and direct — the right call for lots, entrances and perimeter control. Plainclothes suits interior spaces where a visible guard would change the atmosphere, such as a restaurant or private function. Many event-day plans use both, and an advisor will scope the mix during the free assessment.",
      },
    ],
  },
  {
    service: "residential",
    area: "calabasas",
    metaTitle: "Residential Security in Calabasas",
    metaDescription:
      "Estate and gated-community security in Calabasas — The Oaks, Calabasas Park, Old Town. Discreet patrol, vacation checks and wildfire-evacuation readiness.",
    atAGlance: [
      "Discreet residential patrol for estates, gated communities and HOA-managed streets",
      "Vacation and extended-absence checks with photo-documented reports while you are away",
      "Coverage coordinated with existing gate staff and community patrols rather than duplicating them",
      "Wildfire-aware planning: access, evacuation routes and post-evacuation property checks",
      "Licensed, bonded and insured under California PPO #122163, with a live supervisor 24/7",
    ],
    intro: [
      "Calabasas residential security is mostly a discretion problem rather than a visibility one. Behind the gates at The Oaks and Calabasas Park, and along the estate streets off Mulholland and Las Virgenes, a marked officer standing at the front of a house is not what a homeowner wants — the point is that nothing looks out of the ordinary while the property is genuinely covered. Our residential work here is built to be low-profile: unmarked or discreet vehicle checks on randomised timing, officers who know which cars belong on the street, and reporting that goes to you rather than being visible to the neighbourhood.",
      "The practical exposures are specific to how these properties sit. Estate lots are large, often with long frontages, canyon-side rear boundaries and landscaping that gives cover — so a perimeter is rarely a single line of sight and a round has to include the back of the property, not just the driveway. Gated communities create a false sense of closure: the gate stops casual traffic but not a vehicle that follows a resident through, and service and delivery access is a standing gap. Extended absences are the highest-risk period, and they are common here — a house that is dark for three weeks with landscaping and pool service still arriving on schedule needs someone confirming that the only people on site are the ones who should be.",
      "We coordinate rather than duplicate. Many Calabasas communities already have gate attendants or an HOA patrol, and the useful role is filling what those cannot cover: individual properties behind the gate, the hours the community patrol is not running, and documented checks during absences. Wildfire is the other planning input that cannot be ignored in the Santa Monica Mountains — we build routes knowing which streets have a single way out, and after an evacuation order lifts, property checks are often the first thing a homeowner wants before they return.",
    ],
    riskFactors: [
      "Large estate lots with canyon-side rear boundaries and landscaping cover, where the perimeter is not a single line of sight",
      "Vehicles following residents through community gates, which stop casual traffic but not deliberate entry",
      "Standing service and delivery access as a gap in otherwise gated streets",
      "Extended absences with vendors still arriving on schedule — the highest-risk period for these properties",
      "Wildfire exposure in the Santa Monica Mountains, including streets with a single evacuation route",
      "Targeted residential burglary of high-value homes, which is planned rather than opportunistic",
    ],
    jurisdictionNote:
      "Calabasas is a contract city: it has no municipal police department, and law enforcement is provided by the Los Angeles County Sheriff's Department out of the Malibu/Lost Hills Station. That is the same station that covers Malibu, which is a genuine operational advantage — a patrol program can serve properties in both without crossing into a different agency's response area, and post orders use one escalation path rather than two. Fire protection comes from the Los Angeles County Fire Department. For gated communities we confirm how Sheriff's units and the fire department actually gain entry during an emergency, because a gate code that is out of date is a delay measured in minutes.",
    faqs: [
      {
        q: "Can security be discreet at a Calabasas estate?",
        a: "That is usually the requirement. Residential coverage here is built to be low-profile — discreet vehicle checks on randomised timing rather than a marked officer posted at the front of the house, with reporting that goes to you privately. The aim is that the property is genuinely covered while nothing about it looks unusual from the street.",
      },
      {
        q: "We already have a gate and an HOA patrol. What would you add?",
        a: "The parts those cannot cover: your individual property behind the gate, the hours the community patrol is not running, and documented checks while you are away. Gates stop casual traffic but not a vehicle following a resident through, and service access is a standing gap. We coordinate with existing gate staff rather than duplicating them.",
      },
      {
        q: "Do you check the property while we are away?",
        a: "Yes — vacation and extended-absence checks are a core part of residential work here. Officers verify the exterior and access points, confirm that only expected vendors have been on site, and file photo-documented reports so you can see the condition of the property rather than take it on trust. Frequency is set to the length of the absence.",
      },
      {
        q: "How does wildfire risk affect a security program in Calabasas?",
        a: "It shapes routing and planning. Several streets in the Santa Monica Mountains have a single way out, which affects how a patrol vehicle works them and what an officer does if an evacuation order comes during a shift. After an order lifts, property checks before the owner returns are one of the most common requests — confirming the structure and access points rather than waiting to find out on arrival.",
      },
    ],
  },
  {
    service: "patrol",
    area: "glendale",
    metaTitle: "Security Patrol in Glendale, CA",
    metaDescription:
      "Marked-vehicle and foot patrols for Glendale retail and offices — Brand Boulevard, the Galleria area, Montrose and the Grand Central district. GPS-verified rounds.",
    atAGlance: [
      "Patrol coverage across the Brand Boulevard retail core, the Galleria area, Montrose and the Grand Central district",
      "GPS-verified checkpoints with timestamped, photo-documented reports after every round",
      "Alarm response, lock-and-unlock and structure sweeps for retail, restaurants and offices",
      "Coverage typically live within 72 hours of signing — urgent deployments in under 24",
      "Licensed, bonded and insured under California PPO #122163, with a live supervisor 24/7",
    ],
    intro: [
      "Glendale concentrates an unusual amount of regional retail into a small area, and that shapes what patrol has to do here. The blocks around Brand Boulevard, the Americana at Brand and the Glendale Galleria pull shoppers from across the Verdugos and the eastern Valley, which means the exposure is daytime retail theft and evening parking-structure crime rather than the empty-street burglary problem of an office district. Patrol rounds in that core work the structures and the service alleys as much as the frontage, because the storefront is watched during trading hours and the back of house is not.",
      "Away from the retail core the job changes character. The Montrose Shopping Park on Honolulu Avenue is small-tenant retail with roll-down gates, rear alley access and owners who mostly close up themselves — the classic case for staggered after-hours passes and lock-and-unlock support. The office and media stock around the Grand Central district and along Central Avenue empties in the evening, which turns it into a genuine overnight patrol assignment with randomised timing. Along the Brand corridor and the residential edges climbing toward the Verdugo foothills, coverage ties commercial frontage and adjacent residential streets into a single loop rather than treating them as separate contracts.",
      "Every visit is documented the same way regardless of property type: officers scan GPS-verified checkpoints, photograph anything out of place, and file timestamped reports available the next morning. Because a route is shared across nearby properties, per-property cost is a fraction of a dedicated post, which is why most Glendale clients run scheduled overnight rounds with alarm response and opening or closing support rather than a standing guard. Where a property needs both, we scope a standing post for the high-risk hours and patrol for the rest.",
    ],
    riskFactors: [
      "Daytime retail theft pressure across the Brand Boulevard core and the Galleria area",
      "Vehicle break-ins and after-hours activity in retail parking structures",
      "Rear and alley access exposure for small-tenant retail in Montrose",
      "Overnight burglary risk in the Grand Central and Central Avenue office and media stock, which empties in the evening",
      "Service and loading areas that go unwatched while storefronts are staffed",
    ],
    jurisdictionNote:
      "Glendale is an independent city with its own Glendale Police Department and its own fire department — not LAPD and not Los Angeles City Fire, which is a distinction worth getting right before an incident rather than during one. It also means alarm and false-alarm rules are administered by the city itself rather than by Los Angeles, so patrol-verified alarm response has a direct financial benefit: an officer confirming whether an alarm is real keeps unnecessary dispatches off your account. Where a property sits close to the Los Angeles or Burbank line, we confirm the responding agency for each entrance and write it into the post orders.",
    faqs: [
      {
        q: "Do you patrol the Brand Boulevard and Galleria area?",
        a: "Yes — that retail core is the most requested coverage in Glendale. Rounds work the parking structures and service alleys as well as the frontage, because storefronts are watched during trading hours while the back of house is not. Coverage can be scheduled around trading hours, extended through closing, or run overnight depending on where your exposure actually sits.",
      },
      {
        q: "Which police department responds in Glendale?",
        a: "The Glendale Police Department. Glendale is an independent city with its own police and fire departments, so it is neither LAPD nor Los Angeles City Fire territory. For properties near the Los Angeles or Burbank boundary we confirm which agency answers each entrance and write it into your post orders so an officer escalates correctly the first time.",
      },
      {
        q: "Can you handle alarm response for a Glendale property?",
        a: "Yes, and it is worth bundling. An officer investigates, documents what they find, and escalates to Glendale PD only when the alarm is genuine — which also keeps unnecessary dispatches, and the city's false-alarm charges, off your account. Response windows are agreed in the post orders rather than left open-ended.",
      },
      {
        q: "How fast can patrol coverage start in Glendale?",
        a: "Standing coverage typically begins within 72 hours of a signed agreement, and teams have mobilised in under 24 hours for urgent needs such as a break-in or a sudden vendor failure. The free on-site assessment comes first: an advisor responds within one business day and walks the property before anything is scheduled.",
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
