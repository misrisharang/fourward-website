// FOURWARD — all site content in one editable structure.

export const IMAGES = {
  eventDinner: "/images/eventDinner.jpg",
  banquet: "/images/banquet.jpg",
  delhi: "/images/delhi.jpg",
  concrete: "/images/concrete.jpg",
  dataGrid: "/images/dataGrid.jpg",
  circuit: "/images/circuit.jpg",
};

export const LANE_NAMES = ["SEARCH", "BRAND", "LIFECYCLE", "FIELD"];

export const LANES = [
  {
    id: "search",
    num: "01",
    short: "SEARCH",
    name: "SEARCH, CONTENT & AI VISIBILITY",
    description:
      "Being found — by people and by machines. Technical SEO, editorial programmes and GEO/AEO so your brand becomes the answer, in search results and AI overviews alike.",
    services: [
      "SEO strategy & technical SEO",
      "GEO / AEO",
      "Content strategy",
      "Editorial programmes",
      "Learning hubs",
      "Pillar content",
      "Comparison pages",
      "Website optimization",
      "Landing pages",
      "CRO",
      "Migrations",
      "Internal linking",
      "Schema",
      "CTR programmes",
      "Analytics",
      "Attribution",
    ],
    metric: { value: "3×", label: "Organic traffic per page after consolidation", source: "AHREFS" },
    caseStudyId: "adpushup-search",
  },
  {
    id: "brand",
    num: "02",
    short: "BRAND",
    name: "BRAND, PR & PARTNERSHIPS",
    description:
      "What the market believes about you. Positioning, press, reviews and partnerships that compound into trust — and trust that converts into pipeline.",
    services: [
      "Positioning",
      "Messaging",
      "Brand identity",
      "PR",
      "Media relations",
      "Announcements",
      "Founder thought leadership",
      "Executive thought leadership",
      "Reviews & reputation",
      "G2",
      "Trustpilot",
      "Glassdoor",
      "Partnerships",
      "Industry bodies",
      "Co-marketing",
      "Social",
      "LinkedIn programmes",
      "Awards",
      "Rankings",
    ],
    metric: { value: "2.9 → 3.9", label: "Public review rating rebuilt", source: "REVIEW PLATFORMS" },
    caseStudyId: "adpushup-brand",
  },
  {
    id: "lifecycle",
    num: "03",
    short: "LIFECYCLE",
    name: "LIFECYCLE & DEMAND GENERATION",
    description:
      "Turning attention into revenue. Automation, nurture and demand programmes wired straight into the CRM — measured on pipeline, not opens.",
    services: [
      "Marketing automation",
      "CRM hygiene",
      "HubSpot",
      "Email workflows",
      "Drip campaigns",
      "Trigger campaigns",
      "Exit-intent workflows",
      "Newsletters",
      "Gated content",
      "Webinars",
      "Video",
      "Podcast programmes",
      "ABM",
      "Sales enablement",
      "Case studies",
      "Decks",
      "Tools",
      "Funnel reporting",
    ],
    metric: { value: "$12.3M", label: "ARR SQL pipeline influenced", source: "HUBSPOT" },
    caseStudyId: "adpushup-lifecycle",
  },
  {
    id: "field",
    num: "04",
    short: "FIELD",
    name: "FIELD MARKETING & EVENTS",
    description:
      "Rooms built for thirty people, not three thousand. Owned series, executive dinners and closed-door summits — with booth-to-booking follow-up that converts.",
    services: [
      "Owned event series",
      "Conference strategy",
      "Executive dinners",
      "Roundtables",
      "Summits",
      "Partner events",
      "Co-hosted events",
      "LinkedIn paid media",
      "Google paid media",
      "Booth-to-booking workflows",
      "Event content",
      "Event films",
      "Event recaps",
      "Nurture",
      "Budget management",
      "Cost-per-meeting measurement",
      "Pipeline attribution",
    ],
    metric: { value: "25–30%", label: "Attendee-to-SQL conversion", source: "EVENTS PROGRAMME" },
    caseStudyId: "field-events",
  },
];

export const WHY = [
  {
    num: "01",
    title: "SENIOR ENOUGH TO DECIDE",
    body: "Each lane is owned by someone who has run it at scale. No junior handoff — the person who plans the work is the person who ships it.",
  },
  {
    num: "02",
    title: "SHIPPED TOGETHER",
    body: "Years inside one growth team means strategy and execution are already connected. No forming stage, no vendor ping-pong.",
  },
  {
    num: "03",
    title: "MEASURED TO PIPELINE",
    body: "We report on pipeline, signups and citations — not activity for activity's sake. Every number names its source.",
  },
  {
    num: "04",
    title: "ONE TEAM. ONE PLAN.",
    body: "No fragmented agencies, no endless handoffs. One senior team, one dashboard, one weekly shipping cadence.",
  },
];

export const METRICS = [
  { value: 3, suffix: "×", label: "Organic traffic per page after consolidation", source: "AHREFS" },
  { value: 12.3, prefix: "$", suffix: "M", decimals: 1, label: "ARR SQL pipeline influenced by content and lifecycle", source: "HUBSPOT" },
  { value: 30, suffix: "+", label: "Events run end-to-end", source: "EVENTS PROGRAMME" },
  { value: 11, label: "Press pieces", source: "PR PROGRAMME" },
  { value: 260, suffix: "K", label: "Monthly organic visits built from zero on a new domain", source: "AHREFS" },
  { value: 20, label: "Leads generated in the first week for The Vedic School", source: "CRM ATTRIBUTION" },
  { value: 2.5, prefix: "$", suffix: "M", decimals: 1, label: "Peak annual pipeline influenced by the events programme", source: "CRM ATTRIBUTION" },
  { text: "25–30%", label: "Attendee-to-SQL conversion with structured follow-up", source: "EVENTS PROGRAMME" },
  { text: "2.9 → 3.9", label: "Public review rating rebuilt", source: "REVIEW PLATFORMS" },
];

export const CASE_STUDIES = [
  {
    id: "adpushup-search",
    index: "01",
    client: "ADPUSHUP",
    lane: "Search, Content & AI Visibility",
    headline: "Ask Google about header bidding. Its AI answers with our film.",
    image: "dataGrid",
    imageAlt: "Abstract grid of screens in dark ambient light, evoking AI search interfaces",
    results: [
      { value: "3×", label: "Organic traffic per ranking page" },
      { value: "22K", label: "Peak monthly organic visits" },
      { value: "1st", label: "Source cited for “Scaler vs Masai” comparison query" },
    ],
    shipped: ["Content consolidation", "Technical SEO", "Comparison pages", "Pillar guides", "GEO / AEO", "AI Overview visibility", "Video content"],
    story:
      "AdPushup's content library had grown wide but thin. We consolidated overlapping articles into pillar guides, rebuilt the technical SEO foundation, launched comparison pages and ran a GEO/AEO programme — including video content that Google's AI now cites when asked about header bidding. Traffic per ranking page tripled.",
  },
  {
    id: "adpushup-brand",
    index: "02",
    client: "ADPUSHUP",
    lane: "Brand, PR & Partnerships",
    headline: "11 press pieces. Review score rebuilt from 2.9 to 3.9.",
    image: "concrete",
    imageAlt: "Minimalist concrete architectural facade in monochrome light and shadow",
    results: [
      { value: "11", label: "Press pieces" },
      { value: "3.9", label: "Public review rating, rebuilt from 2.9" },
      { value: "3×", label: "LinkedIn audience at ~20% engagement" },
    ],
    shipped: ["PR", "Media relations", "Executive thought leadership", "Review reputation", "Industry partnerships"],
    story:
      "Eleven press pieces, a rebuilt public review profile and a LinkedIn programme running at roughly twenty percent engagement. PR and media relations, executive thought leadership and review-reputation work ran side by side — lifting AdPushup's public rating from 2.9 to 3.9.",
  },
  {
    id: "adpushup-lifecycle",
    index: "03",
    client: "ADPUSHUP",
    lane: "Lifecycle & Demand Generation",
    headline: "Content that turns into pipeline, not just traffic.",
    image: "circuit",
    imageAlt: "High-tech circuit board with golden traces in dark tones, evoking CRM systems",
    results: [
      { value: "$12.3M", label: "ARR SQL pipeline influenced" },
      { value: "8%", label: "Sustained quarter-on-quarter inbound growth" },
      { value: "+54%", label: "Resource downloads" },
    ],
    shipped: ["150+ campaigns / year", "Newsletter", "Gated library", "Webinars", "Video", "Nurture", "Marketing automation", "HubSpot"],
    story:
      "More than 150 campaigns a year across newsletter, gated library, webinars, video and nurture — all wired through HubSpot with attribution to revenue. The result: $12.3M in ARR SQL pipeline influenced, sustained 8% quarter-on-quarter inbound growth and a 54% lift in resource downloads.",
  },
  {
    id: "field-events",
    index: "04",
    client: "FIELD MARKETING",
    lane: "Field Marketing & Events",
    headline: "Rooms built for thirty people, not three thousand.",
    image: "eventDinner",
    imageAlt: "Sophisticated executive dinner setting prepared for a closed-door summit",
    results: [
      { value: "30+", label: "International events, run end-to-end" },
      { value: "4", label: "Regions" },
      { value: "25–30%", label: "Attendee-to-SQL conversion" },
      { value: "$2.5M", label: "Peak annual pipeline influenced" },
    ],
    shipped: ["Executive dinners", "Publisher nights", "Closed-door CIO/CISO summits", "Venue strategy", "Guest lists", "Speakers", "Event production", "Films", "Paid promotion", "Follow-up workflows"],
    story:
      "Executive dinners, publisher nights and closed-door CIO/CISO summits across four regions. Thirty-plus international events run end-to-end: venue strategy, guest lists, speakers, production, films, paid promotion and structured follow-up — converting 25–30% of attendees to SQLs and influencing $2.5M in peak annual pipeline.",
  },
];

export const PROJECTS = [
  { name: "AdPushup", tag: "FOUR LANES" },
  { name: "The Vedic School", tag: "DEMAND GENERATION" },
  { name: "Bootcamp Guide", tag: "CONTENT" },
  { name: "Nexera", tag: "SELECTED WORK" },
  { name: "TestMu AI", tag: "SELECTED WORK" },
  { name: "Hirect", tag: "SELECTED WORK" },
  { name: "RattanIndia", tag: "SELECTED WORK" },
  { name: "Canon", tag: "SELECTED WORK" },
  { name: "CenturyPly", tag: "SELECTED WORK" },
  { name: "Coca-Cola", tag: "SELECTED WORK" },
  { name: "REHAU", tag: "SELECTED WORK" },
];

export const PROCESS = [
  {
    num: "STEP 01",
    cadence: "START",
    title: "Baseline report",
    lines: ["What is indexed.", "What ranks.", "What AI says.", "Where pipeline leaks."],
  },
  {
    num: "STEP 02",
    cadence: "WEEKLY",
    title: "Progress update",
    lines: ["What shipped.", "What moved.", "What is next."],
  },
  {
    num: "STEP 03",
    cadence: "EVERY TWO WEEKS",
    title: "Review call",
    lines: ["Results by lane,", "against agreed targets."],
  },
  {
    num: "STEP 04",
    cadence: "MONTHLY",
    title: "Full report",
    lines: ["Traffic. Rankings.", "AI citations. Coverage.", "Pipeline. Learnings.", "Next month's plan."],
  },
];

export const DASHBOARD = {
  SEARCH: [
    { k: "Organic visits", v: "84,210", d: "+12.4%", bars: [42, 48, 45, 55, 60, 58, 66, 72, 70, 80, 86, 92] },
    { k: "Signups", v: "1,208", d: "+8.1%", bars: [30, 34, 38, 36, 44, 50, 48, 56, 60, 58, 66, 72] },
    { k: "Pages ranking", v: "3,412", d: "+6.2%", bars: [50, 52, 55, 54, 58, 62, 65, 63, 70, 74, 78, 82] },
    { k: "AI citations", v: "146", d: "+31.0%", bars: [10, 14, 18, 24, 28, 34, 40, 48, 56, 66, 78, 90] },
    { k: "AI-referred sessions", v: "2,940", d: "+18.7%", bars: [16, 20, 26, 30, 36, 42, 48, 54, 60, 68, 76, 84] },
  ],
  BRAND: [
    { k: "Coverage", v: "11 pieces", d: "+3", bars: [10, 12, 20, 18, 26, 30, 34, 40, 46, 52, 58, 64] },
    { k: "Review score", v: "3.9", d: "+0.2", bars: [30, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72] },
    { k: "Share of voice", v: "18.4%", d: "+2.1%", bars: [28, 32, 34, 38, 42, 46, 44, 52, 56, 60, 64, 68] },
    { k: "Partner placements", v: "6", d: "+2", bars: [12, 16, 20, 26, 24, 32, 38, 36, 44, 50, 56, 62] },
    { k: "LinkedIn inbound", v: "42", d: "+9", bars: [22, 26, 30, 28, 36, 40, 46, 50, 48, 58, 64, 70] },
  ],
  LIFECYCLE: [
    { k: "MQL → SQL", v: "22.8%", d: "+1.9%", bars: [40, 42, 46, 50, 48, 54, 58, 56, 62, 66, 70, 74] },
    { k: "Pipeline touched", v: "$412K", d: "+11.2%", bars: [30, 36, 40, 46, 44, 52, 58, 62, 60, 70, 76, 84] },
    { k: "Sequence reply rate", v: "9.6%", d: "+0.8%", bars: [34, 36, 40, 38, 44, 48, 46, 52, 56, 54, 60, 64] },
    { k: "Asset downloads", v: "3,180", d: "+14.5%", bars: [26, 30, 36, 40, 38, 46, 52, 56, 62, 60, 70, 78] },
    { k: "Webinar meetings", v: "26", d: "+6", bars: [18, 22, 26, 24, 32, 36, 42, 40, 48, 54, 60, 66] },
  ],
  EVENTS: [
    { k: "Attendee → SQL", v: "27%", d: "+2%", bars: [36, 40, 44, 42, 50, 54, 52, 60, 64, 62, 70, 76] },
    { k: "Pipeline", v: "$186K", d: "+22.4%", bars: [20, 26, 24, 34, 40, 38, 48, 54, 52, 64, 72, 82] },
    { k: "Cost per meeting", v: "$840", d: "−6.1%", bars: [80, 76, 72, 74, 68, 64, 66, 60, 56, 58, 52, 48] },
    { k: "Follow-up completion", v: "94%", d: "+3%", bars: [60, 64, 62, 70, 74, 72, 78, 82, 80, 86, 90, 94] },
  ],
};

export const WAYS = [
  {
    num: "01",
    name: "SPRINT",
    meta: "30 DAYS · ONE LANE",
    body: "Pick the lane that is hurting most. We audit it, fix the foundations and hand you a plan.",
    details: ["Lane audit & baseline report", "Foundations fixed in 30 days", "Written plan you can keep"],
  },
  {
    num: "02",
    name: "POD RETAINER",
    meta: "MONTHLY · ALL FOUR LANES",
    body: "The full department. Weekly shipping cadence, one point of contact, a shared dashboard and a quarterly plan tied to pipeline targets.",
    details: ["All four lanes, one plan", "Weekly shipping cadence", "Shared dashboard & reporting rhythm", "Quarterly plan tied to pipeline"],
    featured: true,
  },
  {
    num: "03",
    name: "PROJECT",
    meta: "FIXED SCOPE",
    body: "For defined marketing projects with a clear start and finish.",
    details: ["Launches", "Migrations", "Conference seasons", "Review-site turnarounds", "Defined marketing projects"],
  },
];

export const CLIENTS = [
  "Geniee India & Geniee SEA",
  "Embee, with Microsoft",
  "TestMu AI",
  "Hirect",
  "RattanIndia",
  "Canon",
  "CenturyPly",
  "Coca-Cola",
  "REHAU",
];

export const INSIGHTS = [
  { theme: "Search & AI Visibility", category: "SEARCH" },
  { theme: "GEO / AEO", category: "SEARCH" },
  { theme: "Content Strategy", category: "SEARCH" },
  { theme: "AI Overviews", category: "SEARCH" },
  { theme: "Brand & PR", category: "BRAND" },
  { theme: "Lifecycle & Demand Generation", category: "LIFECYCLE" },
  { theme: "Events & Field Marketing", category: "FIELD" },
  { theme: "Pipeline Attribution", category: "LIFECYCLE" },
];

export const OBJECTIVES = [
  "Search / AI Visibility",
  "Brand / PR",
  "Lifecycle / Demand",
  "Field Marketing / Events",
  "Multiple lanes",
  "Not sure yet",
];

export const CONTACT = {
  email: "hello@fourward.in",
  location: "Delhi NCR, India",
  reach: "Working with teams worldwide",
  linkedin: "https://www.linkedin.com/company/fourward",
};
