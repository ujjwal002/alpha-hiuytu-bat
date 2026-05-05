// app/lib/cityData.ts
// City-specific data for the Metro Detroit service area pages.
// Unique content per city is CRITICAL for local SEO — Google penalizes
// duplicate landing pages with the same body copy and just the city name swapped.
//
// Each city has: neighborhoods, ZIP codes, distance from your Livonia HQ,
// local landmarks, and a unique intro paragraph keyed to that area.

export type CityInfo = {
  slug: string;
  name: string;
  county: "Wayne" | "Oakland" | "Macomb";
  population: string;
  zips: string[];
  neighborhoods: string[];
  landmarks: string[];
  distanceFromHQ: string;       // from Livonia HQ
  intro: string;                // unique 2-3 sentence intro
  homeProfile: string;          // what kinds of homes/baths in this city
  popularService: string;       // most-requested service for this city
  avgProjectCost: string;
};

export const CITY_DATA: Record<string, CityInfo> = {
  detroit: {
    slug: "detroit",
    name: "Detroit",
    county: "Wayne",
    population: "~633,000",
    zips: ["48201", "48202", "48207", "48214", "48215", "48226", "48238"],
    neighborhoods: ["Corktown", "Indian Village", "Palmer Woods", "Boston-Edison", "Brush Park", "Midtown", "Lafayette Park"],
    landmarks: ["Belle Isle", "Detroit Riverwalk", "Eastern Market"],
    distanceFromHQ: "20 minutes from our Livonia office",
    intro: "Detroit's housing stock spans century-old Boston-Edison mansions, mid-century brick bungalows in East English Village, and modern Midtown lofts — each with its own bathroom remodeling challenges. We've worked in homes from every era and know how to handle Detroit's older plumbing, plaster walls, and unique tile work.",
    homeProfile: "Pre-war historic homes with cast iron drains, mid-century ranches, and modern downtown condos",
    popularService: "Full bathroom renovation",
    avgProjectCost: "$10,000 – $22,000",
  },

  livonia: {
    slug: "livonia",
    name: "Livonia",
    county: "Wayne",
    population: "~95,000",
    zips: ["48150", "48151", "48152", "48154"],
    neighborhoods: ["Rosedale Gardens", "Coventry Gardens", "Burton Hollow", "Bicentennial Estates", "Sheldon Park"],
    landmarks: ["Laurel Park Place", "Greenmead Historical Park", "Rotary Park"],
    distanceFromHQ: "Our home base — we live and work here",
    intro: "Livonia is our hometown — Stone Works Remodeling has been completing bathroom remodels in Rosedale Gardens, Burton Hollow, and Coventry Gardens since 2009. We know which subdivisions have the original 1960s pink and blue tile that's begging for a refresh, and we know your township's permit process inside and out.",
    homeProfile: "Postwar ranches, colonials, and 1970s-80s tract homes with original tile bathrooms",
    popularService: "Tub-to-shower conversion",
    avgProjectCost: "$8,000 – $18,000",
  },

  troy: {
    slug: "troy",
    name: "Troy",
    county: "Oakland",
    population: "~87,000",
    zips: ["48083", "48084", "48085", "48098"],
    neighborhoods: ["Big Beaver", "Beach Forest", "Stage Crest", "Charnwood"],
    landmarks: ["Somerset Collection", "Troy Beaumont Hospital", "Stage Nature Center"],
    distanceFromHQ: "30 minutes from Livonia",
    intro: "Troy homeowners typically own 2,000–4,000 sq ft colonials and contemporary builds from the 1980s and 90s — bathrooms there often feature large soaking tubs nobody uses anymore and oversized vanities ready for a modern refresh. Master bath conversions are by far our most-requested Troy service.",
    homeProfile: "Larger Oakland County colonials and contemporaries with master en-suites",
    popularService: "Master bathroom remodel",
    avgProjectCost: "$15,000 – $30,000",
  },

  rochester: {
    slug: "rochester",
    name: "Rochester",
    county: "Oakland",
    population: "~13,000 (Rochester) / ~75,000 (Rochester Hills)",
    zips: ["48306", "48307", "48309"],
    neighborhoods: ["Downtown Rochester", "Stoney Creek", "Christian Hills", "Greystone Estates"],
    landmarks: ["Meadow Brook Hall", "Rochester Hills Museum", "Paint Creek Trail"],
    distanceFromHQ: "35 minutes from Livonia",
    intro: "Rochester and Rochester Hills homes range from charming downtown craftsmans to luxury Stoney Creek estates. We've installed walk-in tubs for Rochester seniors aging in place and built spa-style master baths in Greystone — every project is sized to the home and the homeowner.",
    homeProfile: "Mix of historic downtown homes and upscale subdivision colonials",
    popularService: "Walk-in tub installation",
    avgProjectCost: "$12,000 – $25,000",
  },

  "sterling-heights": {
    slug: "sterling-heights",
    name: "Sterling Heights",
    county: "Macomb",
    population: "~135,000",
    zips: ["48310", "48312", "48313", "48314"],
    neighborhoods: ["Lakeside", "Plumbrook", "Utica", "Riverside"],
    landmarks: ["Lakeside Mall", "Dodge Park", "Sterling Heights Nature Center"],
    distanceFromHQ: "45 minutes from Livonia",
    intro: "Sterling Heights is Macomb County's biggest city and home to thousands of brick ranches and split-levels from the 1960s and 70s. The original baths in these homes — often small, with a tub-shower combo — are perfect candidates for our 5–10 day full conversions.",
    homeProfile: "1960s-80s brick ranches, split-levels, and tri-levels",
    popularService: "Tub-to-shower conversion",
    avgProjectCost: "$8,000 – $16,000",
  },

  "royal-oak": {
    slug: "royal-oak",
    name: "Royal Oak",
    county: "Oakland",
    population: "~59,000",
    zips: ["48067", "48073"],
    neighborhoods: ["Vinsetta Park", "Northwood", "Red Run", "Downtown Royal Oak"],
    landmarks: ["Detroit Zoo", "Downtown Royal Oak", "Royal Oak Farmers Market"],
    distanceFromHQ: "25 minutes from Livonia",
    intro: "Royal Oak's tightly-packed 1920s and 30s bungalows have small but charming bathrooms — and Vinsetta Park's pre-war homes often have original hex tile that we either restore or carefully demo. We specialize in maximizing every square foot of these compact but characterful baths.",
    homeProfile: "Pre-war bungalows and 1920s-40s small-footprint homes",
    popularService: "Small bathroom remodel",
    avgProjectCost: "$7,000 – $14,000",
  },

  birmingham: {
    slug: "birmingham",
    name: "Birmingham",
    county: "Oakland",
    population: "~21,000",
    zips: ["48009"],
    neighborhoods: ["Quarton Lake", "Pembroke", "Poppleton Park", "Holy Name"],
    landmarks: ["Booth Park", "Shain Park", "Birmingham 8 Theatre"],
    distanceFromHQ: "30 minutes from Livonia",
    intro: "Birmingham homeowners expect — and deserve — premium finishes. Quarton Lake and Pembroke homes regularly call for honed marble, frameless glass, and custom vanities. We source high-end materials and our tile work meets the standards Birmingham buyers expect at resale.",
    homeProfile: "Upscale tudors, colonials, and modern luxury builds",
    popularService: "Luxury master bathroom renovation",
    avgProjectCost: "$20,000 – $45,000",
  },

  "bloomfield-hills": {
    slug: "bloomfield-hills",
    name: "Bloomfield Hills",
    county: "Oakland",
    population: "~4,500",
    zips: ["48301", "48302", "48304"],
    neighborhoods: ["Bloomfield Village", "Wabeek", "Lone Pine", "Vhay Lake"],
    landmarks: ["Cranbrook", "Kirk in the Hills", "Birmingham Country Club"],
    distanceFromHQ: "35 minutes from Livonia",
    intro: "Bloomfield Hills means full custom — period. Estate homes off Lone Pine and Wabeek call for true luxury bathrooms with Schluter waterproofing, radiant heated floors, and high-end fixtures from Kohler, TOTO, and Brizo. We treat every project here as a portfolio piece.",
    homeProfile: "Estate homes, large custom builds, and traditional luxury properties",
    popularService: "Full luxury bathroom remodel",
    avgProjectCost: "$30,000 – $75,000",
  },

  "farmington-hills": {
    slug: "farmington-hills",
    name: "Farmington Hills",
    county: "Oakland",
    population: "~83,000",
    zips: ["48331", "48334", "48335", "48336"],
    neighborhoods: ["Ramblewood", "Independence Commons", "Copper Creek", "Heritage Park"],
    landmarks: ["Heritage Park", "Riley Park", "Drakeshire Plaza"],
    distanceFromHQ: "15 minutes from Livonia",
    intro: "Farmington Hills is one of our highest-volume service areas — we work in Ramblewood, Independence Commons, and Copper Creek almost weekly. Most homes here are 1970s-90s colonials and ranches with builder-grade baths that are 30+ years overdue for a modern refresh.",
    homeProfile: "1970s-90s colonials, ranches, and updated mid-century builds",
    popularService: "Tub-to-shower conversion",
    avgProjectCost: "$10,000 – $20,000",
  },

  warren: {
    slug: "warren",
    name: "Warren",
    county: "Macomb",
    population: "~138,000",
    zips: ["48088", "48089", "48091", "48092", "48093"],
    neighborhoods: ["Center Line", "Macomb Mall", "Halmich Park", "Van Dyke Sports"],
    landmarks: ["Macomb Mall", "GM Tech Center", "Halmich Park"],
    distanceFromHQ: "45 minutes from Livonia",
    intro: "Warren is Macomb County's largest city and full of solid post-war brick bungalows and ranches built for autoworkers. The bathrooms are typically small, original to the home, and prime for a value-oriented full remodel — our most-requested package here is a complete bath update under $12,000.",
    homeProfile: "Postwar brick bungalows and ranches",
    popularService: "Full small-bathroom remodel",
    avgProjectCost: "$7,500 – $15,000",
  },

  dearborn: {
    slug: "dearborn",
    name: "Dearborn",
    county: "Wayne",
    population: "~109,000",
    zips: ["48124", "48126", "48128"],
    neighborhoods: ["West Dearborn", "East Dearborn", "Springwells", "Greenfield Village"],
    landmarks: ["Henry Ford Museum", "Greenfield Village", "Fairlane Town Center"],
    distanceFromHQ: "20 minutes from Livonia",
    intro: "Dearborn's housing mix runs from grand West Dearborn colonials near Greenfield Village to tighter East Dearborn brick homes. We've remodeled bathrooms throughout the city and understand the older Wayne County permit process and inspection requirements.",
    homeProfile: "Mix of large West Dearborn homes and compact East Dearborn brick houses",
    popularService: "Full bathroom remodel",
    avgProjectCost: "$8,500 – $20,000",
  },

  canton: {
    slug: "canton",
    name: "Canton",
    county: "Wayne",
    population: "~98,000",
    zips: ["48187", "48188"],
    neighborhoods: ["Cherry Hill Village", "Sunflower", "Ravines of Pheasant Run", "Carriage Hills"],
    landmarks: ["Heritage Park", "Summit on the Park", "IKEA Canton"],
    distanceFromHQ: "10 minutes from Livonia",
    intro: "Canton is right next door to our Livonia office and one of our easiest service areas — we're regularly in Sunflower, Cherry Hill Village, and Ravines of Pheasant Run. Most Canton homes are 1990s-2010s builds with master baths that are dated but structurally sound — perfect candidates for fast 5–7 day refreshes.",
    homeProfile: "1990s-2010s subdivision colonials and ranches",
    popularService: "Master bathroom remodel",
    avgProjectCost: "$12,000 – $22,000",
  },

  novi: {
    slug: "novi",
    name: "Novi",
    county: "Oakland",
    population: "~67,000",
    zips: ["48374", "48375", "48377"],
    neighborhoods: ["Tollgate", "Walden Woods", "Bristol Corners", "Island Lake"],
    landmarks: ["Twelve Oaks Mall", "Maybury State Park", "Novi Civic Center"],
    distanceFromHQ: "15 minutes from Livonia",
    intro: "Novi homes — particularly in Island Lake, Tollgate, and Walden Woods — tend to be larger 1990s-2020s builds with multiple bathrooms per home. We see lots of \"all the kids' bathrooms at once\" remodels here, where we package 2–3 baths together and complete them sequentially over 3–4 weeks.",
    homeProfile: "Newer subdivision homes with multiple full bathrooms",
    popularService: "Multi-bathroom package remodel",
    avgProjectCost: "$15,000 – $35,000 (per bathroom)",
  },

  southfield: {
    slug: "southfield",
    name: "Southfield",
    county: "Oakland",
    population: "~76,000",
    zips: ["48033", "48034", "48075", "48076"],
    neighborhoods: ["Magnolia", "Beverly Hills border", "Lathrup Village border", "Northland"],
    landmarks: ["Lawrence Tech University", "Star Southfield", "Carpenter Lake"],
    distanceFromHQ: "20 minutes from Livonia",
    intro: "Southfield's housing is a great mix of mid-century ranches and 1970s-90s colonials. Many of the homes we work on belong to original owners — long-time residents who have been waiting decades to finally update that builder-grade bath. We bring patience, communication, and clean job sites that respect their home.",
    homeProfile: "Mid-century ranches and 1970s-90s colonials, often original-owner",
    popularService: "Full bathroom renovation",
    avgProjectCost: "$10,000 – $20,000",
  },

  westland: {
    slug: "westland",
    name: "Westland",
    county: "Wayne",
    population: "~84,000",
    zips: ["48185", "48186"],
    neighborhoods: ["Hawthorne Valley", "Norwayne", "Madison Heights area", "Cherry Hill border"],
    landmarks: ["Westland Shopping Center", "Westland Historical Village Park", "Tattan Park"],
    distanceFromHQ: "10 minutes from Livonia",
    intro: "Westland is right next to Livonia and we're in and out of Hawthorne Valley and Norwayne almost every week. The bathrooms in Westland's mid-century homes tend to be small and tightly laid out — we have proven floor plans for getting a full walk-in shower into a 5x8 bath without losing storage.",
    homeProfile: "Mid-century ranches, capes, and small colonials",
    popularService: "Small bathroom full remodel",
    avgProjectCost: "$7,500 – $14,000",
  },
};

export function getCityInfo(slug: string): CityInfo | null {
  return CITY_DATA[slug.toLowerCase()] || null;
}