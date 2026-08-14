export type ServiceArea = {
  slug: string;
  name: string;
  /** Short label used in the hero eyebrow, e.g. "South Kolkata". */
  region: string;
  /** Landmarks / sub-localities. Used for the chip row and in copy. */
  landmarks: string[];
  /** Hero paragraph. Must be unique per area. */
  intro: string;
  /** Which neighbourhoods the at-home service actually reaches from here. */
  coverage: string;
  /** Approximate road distance from the Behala studio. */
  travel: {
    distanceKm: number;
    note: string;
  };
  /** Real transport context — metro line, station, rail, main roads. */
  transport: string;
  /** Practical prep notes for an at-home session in this area. */
  sessionNote: string;
  /** Slugs of neighbouring areas, for internal linking. */
  nearby: string[];
  /** One extra FAQ that only makes sense for this area. */
  localFaq: {
    question: string;
    answer: string;
  };
};

/**
 * ⚠️ REVIEW BEFORE LAUNCH: distances, travel times and transport details below
 * are approximate. Correct anything that does not match how you actually
 * operate — thin or inaccurate local pages hurt more than they help.
 */
export const serviceAreas: ServiceArea[] = [
  {
    slug: "behala",
    name: "Behala",
    region: "South West Kolkata",
    landmarks: [
      "Behala Chowrasta",
      "James Long Sarani",
      "Sarsuna",
      "Parnasree",
      "Barisha",
      "Thakurpukur",
    ],
    intro:
      "Behala is home. The Ink Room studio is based right here, which means this is the one part of Kolkata where you can skip the at-home setup entirely and get tattooed in a permanent, purpose-built space with a proper artist chair, sterilisation station and full stencil setup.",
    coverage:
      "Walk-ins and studio appointments work best for anyone around Behala Chowrasta, Barisha, Sakherbazar, Silpara, Parnasree, Sarsuna, Thakurpukur and along James Long Sarani. If you are anywhere in this belt, you are usually within fifteen minutes of the studio, so booking a consultation before committing to a design costs you almost nothing.",
    travel: {
      distanceKm: 0,
      note: "This is where the studio is, so there is no travel charge and no at-home setup needed — though at-home sessions are still available if you would rather be tattooed at home.",
    },
    transport:
      "The Joka–Esplanade metro line runs straight through Behala along Diamond Harbour Road, with stops at Behala Bazar, Behala Chowrasta and Sakherbazar. Buses and autos along Diamond Harbour Road and James Long Sarani connect the whole area, and parking is generally easier here than in central Kolkata.",
    sessionNote:
      "For studio sessions, come having eaten a proper meal and wear something that gives easy access to the placement — a loose sleeve for forearm work, a vest for shoulder or back pieces. Bring a valid photo ID showing you are 18 or over.",
    nearby: ["tollygunge", "rashbehari", "howrah"],
    localFaq: {
      question: "Can I walk into the Behala studio without an appointment?",
      answer:
        "It is much better to message on WhatsApp first. Custom work needs a design conversation before the session, and booking ahead means the stencil is ready and the slot is held for you rather than waiting on whatever the day looks like.",
    },
  },
  {
    slug: "tollygunge",
    name: "Tollygunge",
    region: "South Kolkata",
    landmarks: [
      "Tollygunge Metro",
      "Tollygunge Club",
      "Netaji Nagar",
      "Ranikuthi",
      "Charu Market",
    ],
    intro:
      "Tollygunge is the closest neighbourhood to the Behala studio, which makes it the easiest at-home area we cover. Short hop, full kit, no compromise on setup — and close enough that a touch-up or a second sitting is never a logistical problem.",
    coverage:
      "At-home sessions run across Tollygunge proper, Netaji Nagar, Ranikuthi, Charu Market, New Alipore fringes and down towards Bansdroni. Because the studio is a short drive away, this is also the area where clients most often split larger pieces across two sittings instead of forcing everything into one long day.",
    travel: {
      distanceKm: 6,
      note: "Roughly 6 km from the Behala studio — usually 20 to 25 minutes depending on traffic on Diamond Harbour Road and Prince Anwar Shah Road.",
    },
    transport:
      "Mahanayak Uttam Kumar (Tollygunge) metro on the Blue Line is the main landmark, and the area is well connected by bus along Deshpran Sasmal Road and Prince Anwar Shah Road. If you would rather come to the studio, it is a single short cab ride.",
    sessionNote:
      "For an at-home session, clear a table and a chair near a power point with decent light — a dining table works better than a bed. The full sterile kit comes with us, so you do not need to arrange anything beyond space and a clean surface.",
    nearby: ["behala", "rashbehari", "jadavpur"],
    localFaq: {
      question: "Is Tollygunge close enough for a multi-session tattoo?",
      answer:
        "Yes — it is the closest area we cover, so larger pieces that need two or three sittings are straightforward here. Sessions are usually spaced two to three weeks apart to let the previous work heal properly.",
    },
  },
  {
    slug: "rashbehari",
    name: "Rashbehari",
    region: "South Kolkata",
    landmarks: [
      "Rashbehari Avenue",
      "Deshapriya Park",
      "Kalighat",
      "Bhowanipore",
      "Hindustan Park",
    ],
    intro:
      "The Rashbehari belt — Deshapriya Park, Kalighat, Bhowanipore, Hindustan Park — is dense, well connected and a regular at-home service zone. Old buildings and narrow lanes here mean access matters, so the setup gets planned around your space before the appointment.",
    coverage:
      "At-home appointments cover Rashbehari Avenue and the lanes running off it, Deshapriya Park, Hindustan Park, Kalighat, Bhowanipore, Lansdowne and towards Lake Market. Sessions here are often booked by people who work central-Kolkata hours and would rather not lose an evening to cross-city travel.",
    travel: {
      distanceKm: 9,
      note: "About 9 km from the Behala studio, typically 30 to 40 minutes depending on the Rashbehari and Kalighat crossings.",
    },
    transport:
      "Kalighat and Jatin Das Park metro stations on the Blue Line both serve this area, and Rashbehari Avenue is one of the main east–west arteries in South Kolkata. If you would rather visit the studio, the metro to Tollygunge plus a short cab is the simplest route.",
    sessionNote:
      "A lot of homes in this area are older flats with tight staircases and limited natural light. Mention the floor and whether there is a lift when booking, and set aside a spot near a window or a good overhead light — clean line work depends heavily on lighting.",
    nearby: ["gariahat", "tollygunge", "park-street-maidan"],
    localFaq: {
      question: "Do you cover the smaller lanes off Rashbehari Avenue?",
      answer:
        "Yes. Most of the residential lanes around Deshapriya Park, Hindustan Park and Kalighat are covered. Just share a location pin on WhatsApp when booking so the approach and parking can be sorted out in advance.",
    },
  },
  {
    slug: "gariahat",
    name: "Gariahat",
    region: "South Kolkata",
    landmarks: [
      "Gariahat Market",
      "Golpark",
      "Ballygunge",
      "Ekdalia",
      "Dhakuria",
    ],
    intro:
      "Gariahat sits at one of the busiest crossings in South Kolkata, and the residential pockets around it — Ballygunge, Golpark, Ekdalia, Dhakuria — are all inside the at-home service zone. Appointments here are usually scheduled to dodge the market-hour traffic rather than fight it.",
    coverage:
      "At-home sessions cover Gariahat, Golpark, Ballygunge Phari, Ekdalia, Ballygunge Place, Dhakuria and the stretch towards Jodhpur Park. Weekend afternoons around the Gariahat crossing get genuinely difficult, so morning or later-evening slots tend to work better here.",
    travel: {
      distanceKm: 11,
      note: "Roughly 11 km from the Behala studio, usually 35 to 45 minutes — longer if it lands during Gariahat market hours.",
    },
    transport:
      "Ballygunge railway station serves the area, and the Gariahat flyover connects it to both Rashbehari and the EM Bypass. Buses along Gariahat Road and Southern Avenue are frequent, and the area is a short ride from the Kalighat and Rabindra Sarobar metro stations.",
    sessionNote:
      "Book a slot outside peak market hours if you can — arriving in gridlock eats into session time. Clear a table near a power point, and if you live above the second floor without a lift, mention it while booking so the kit can be packed accordingly.",
    nearby: ["rashbehari", "jadavpur", "salt-lake"],
    localFaq: {
      question: "What is the best time to book a session around Gariahat?",
      answer:
        "Mornings or later evenings on weekdays. The Gariahat crossing and market area get heavily congested through weekend afternoons, which makes arrival times unpredictable and cuts into the time available for the tattoo itself.",
    },
  },
  {
    slug: "jadavpur",
    name: "Jadavpur",
    region: "South Kolkata",
    landmarks: [
      "Jadavpur University",
      "8B Bus Stand",
      "Jadavpur Station",
      "Santoshpur",
      "Baghajatin",
    ],
    intro:
      "Jadavpur has one of the youngest crowds in the city, and a large share of sessions here are somebody's first tattoo. That changes how the appointment runs — more time on placement and sizing, a proper walk-through of what the needle actually feels like, and no pressure to go bigger than you planned.",
    coverage:
      "At-home appointments cover Jadavpur, the 8B and university belt, Santoshpur, Baghajatin, Jodhpur Park fringes and towards Garia. First-time clients here often start with something small and script-based, then come back for a larger piece once they know how their skin takes ink.",
    travel: {
      distanceKm: 10,
      note: "About 10 km from the Behala studio, generally 35 to 45 minutes via Prince Anwar Shah Road or the Bypass depending on the hour.",
    },
    transport:
      "Jadavpur railway station and the 8B bus stand are the two main hubs, with buses and autos running constantly along Raja Subodh Chandra Mallick Road. The area connects easily to Tollygunge metro if you would rather visit the studio in Behala.",
    sessionNote:
      "If this is your first tattoo, eat properly beforehand and skip alcohol for a day before the session — it thins the blood and makes the skin harder to work on. Shared flats and hostels are fine as long as there is a table, a chair and a power point in a room that can stay undisturbed for the sitting.",
    nearby: ["gariahat", "tollygunge", "rashbehari"],
    localFaq: {
      question: "I am a student getting my first tattoo — what should I know?",
      answer:
        "Bring a photo ID confirming you are 18 or over, eat a full meal beforehand, and come with a reference rather than a fixed final design so there is room to adjust size and placement. First sessions are deliberately kept short so you learn how your own skin reacts before committing to anything large.",
    },
  },
  {
    slug: "park-street-maidan",
    name: "Park Street / Maidan",
    region: "Central Kolkata",
    landmarks: [
      "Park Street",
      "Maidan",
      "Camac Street",
      "Esplanade",
      "Victoria Memorial",
    ],
    intro:
      "Central Kolkata — Park Street, Camac Street, Esplanade, the Maidan edge — is mostly offices, hotels and older residential blocks. At-home sessions here are commonly booked by people staying in the city short-term or working central hours who cannot spare a half-day for travel.",
    coverage:
      "At-home appointments cover Park Street, Camac Street, Russell Street, Chowringhee, Esplanade, the Maidan surrounds and towards Elgin and Sarat Bose Road. Hotel rooms are workable if the room has a proper table and the property permits visitors, but do confirm that with the hotel before booking.",
    travel: {
      distanceKm: 12,
      note: "Around 12 km from the Behala studio via Taratala and Hastings, usually 35 to 50 minutes depending on the time of day.",
    },
    transport:
      "Park Street, Maidan and Esplanade metro stations on the Blue Line all serve this area, and Esplanade is the main bus interchange for the city. Getting to the Behala studio from here is straightforward by cab down Diamond Harbour Road.",
    sessionNote:
      "Parking is the main constraint in this area — share a location pin and mention where the vehicle can stop. If you are in a serviced apartment or hotel, clear the arrangement with reception in advance so there is no problem at the door with equipment cases.",
    nearby: ["rashbehari", "howrah", "salt-lake"],
    localFaq: {
      question: "Can you do a session in a hotel room near Park Street?",
      answer:
        "Yes, provided the room has a table and a chair with reasonable lighting, and the hotel is fine with it. Check with the property first — some hotels restrict visitors carrying equipment, and it is better to know that before the appointment than at the entrance.",
    },
  },
  {
    slug: "salt-lake",
    name: "Salt Lake",
    region: "East Kolkata",
    landmarks: [
      "Sector V",
      "Central Park",
      "City Centre",
      "Bidhannagar",
      "Karunamoyee",
    ],
    intro:
      "Salt Lake — Bidhannagar on paper — is planned, spacious and easy to work in. Wide blocks, newer flats and reliable lighting make it one of the more comfortable at-home areas we cover, and Sector V's tech crowd books a lot of weekend and post-work sessions.",
    coverage:
      "At-home appointments cover Sectors I, II and III, Karunamoyee, City Centre, Central Park and the Sector V office belt. The grid layout here makes navigation simple, so arrival times are more predictable than almost anywhere else in the city.",
    travel: {
      distanceKm: 20,
      note: "Roughly 20 km from the Behala studio — usually 50 to 70 minutes, which makes this a plan-ahead booking rather than a same-day one.",
    },
    transport:
      "The Green Line metro runs through Salt Lake with stations at Salt Lake Sector V, Karunamoyee, Central Park, City Centre and Bengal Chemical, connecting through to Sealdah and Howrah Maidan. Wide internal roads mean parking is rarely an issue.",
    sessionNote:
      "Because of the distance, sessions here are booked with a confirmed time slot rather than a loose window. Salt Lake flats generally have good natural light — a spot near a window with a table and chair is ideal, and an evening session works fine with decent overhead lighting.",
    nearby: ["new-town", "dum-dum", "gariahat"],
    localFaq: {
      question: "Do you charge extra to travel to Salt Lake?",
      answer:
        "Travel to Salt Lake is further than most of our service areas, so confirm the full quote on WhatsApp when booking. The design cost, session length and travel are all discussed upfront — there are no charges added after the session.",
    },
  },
  {
    slug: "new-town",
    name: "New Town",
    region: "East Kolkata",
    landmarks: [
      "Action Area I",
      "Action Area II",
      "Action Area III",
      "Eco Park",
      "Rajarhat",
    ],
    intro:
      "New Town is the furthest area we cover, and the trade-off is worth naming plainly: the travel is long, so sessions here are booked well in advance and run as single, properly planned appointments rather than casual drop-ins.",
    coverage:
      "At-home appointments cover Action Area I, II and III, the Eco Park surrounds and parts of Rajarhat. The high-rises here are generally well suited to at-home work — good lighting, lifts, and enough room to set up properly without rearranging the whole flat.",
    travel: {
      distanceKm: 26,
      note: "Around 26 km from the Behala studio, realistically 60 to 80 minutes each way. Book at least a few days ahead so the slot can be blocked properly.",
    },
    transport:
      "New Town is served by the Orange Line metro corridor and connects to the city via the Biswa Bangla Sarani and the Bypass. It is the closest of our service areas to the airport, which suits clients visiting Kolkata for a few days.",
    sessionNote:
      "Given the travel, confirm your design and placement over WhatsApp before the appointment date so the session starts with a stencil ready rather than a blank sheet. Most towers here require visitor entry to be cleared at the gate — leave a note with security in advance.",
    nearby: ["salt-lake", "dum-dum", "gariahat"],
    localFaq: {
      question: "How far in advance should I book a New Town session?",
      answer:
        "A few days at minimum. New Town is the furthest area we serve, so slots there are blocked as full appointments and the design is finalised over WhatsApp beforehand rather than on the day.",
    },
  },
  {
    slug: "dum-dum",
    name: "Dum Dum",
    region: "North Kolkata",
    landmarks: [
      "Dum Dum Metro",
      "Dum Dum Cantonment",
      "Nagerbazar",
      "Jessore Road",
    ],
    intro:
      "Dum Dum covers the northern approach to the city — Nagerbazar, the Cantonment, and the residential blocks along Jessore Road towards the airport. It is a long run from Behala, so appointments here are scheduled with a firm time rather than a rough window.",
    coverage:
      "At-home appointments cover Dum Dum, Dum Dum Cantonment, Nagerbazar, Motijheel and the Jessore Road belt heading towards the airport. Being close to NSCBI Airport makes this a practical option if you are flying in and want a session before leaving the city.",
    travel: {
      distanceKm: 22,
      note: "About 22 km from the Behala studio — typically 55 to 75 minutes, since the route crosses the city north to south.",
    },
    transport:
      "Dum Dum Junction is one of the busiest interchanges in Kolkata, combining the Blue Line metro with the suburban rail network. Jessore Road and the airport connect the area northwards, and Nagerbazar is the main local commercial hub.",
    sessionNote:
      "Confirm the slot a day or two ahead so the cross-city travel can be planned around traffic. Set up in a room with a table, a chair and a power point that can stay closed off for the sitting — Dum Dum's older buildings can be tight on space, so mention the floor and lift access when booking.",
    nearby: ["salt-lake", "new-town", "howrah"],
    localFaq: {
      question: "I am flying out of Kolkata soon — can I get a tattoo in Dum Dum?",
      answer:
        "Yes, and being near the airport makes it convenient, but leave at least a day before flying. A fresh tattoo is an open wound, and you want the first wrap changed and the skin settled before a flight rather than dealing with it in transit.",
    },
  },
  {
    slug: "howrah",
    name: "Howrah",
    region: "Across the Hooghly",
    landmarks: [
      "Howrah Station",
      "Howrah Maidan",
      "Shibpur",
      "Botanical Garden",
      "Ramrajatala",
    ],
    intro:
      "Howrah sits across the river, but from Behala it is a far shorter run than most people expect — the route via Taratala and the Vidyasagar Setu skips central Kolkata entirely. If you have been putting off a tattoo because crossing to the city felt like a whole day out, it does not have to be.",
    coverage:
      "At-home appointments cover Howrah Maidan, Shibpur, the Botanical Garden side, Ramrajatala and the areas around Howrah Station. Clients here often assume they need to travel to a Kolkata studio — the at-home service exists precisely so that river crossing is our problem and not yours.",
    travel: {
      distanceKm: 12,
      note: "Roughly 12 km from the Behala studio via Taratala and the Vidyasagar Setu, usually 30 to 45 minutes — comparable to Gariahat despite being across the river.",
    },
    transport:
      "Howrah Station is the main rail terminus for the region, and the Green Line metro now runs under the Hooghly connecting Howrah Maidan to Esplanade and Sealdah. The Vidyasagar Setu is the most direct road link from the Behala side.",
    sessionNote:
      "Share a location pin when booking — Howrah's lanes are harder to navigate by address alone than most parts of Kolkata. Clear a table and chair near a power point, and if the building has no lift, mention the floor so the equipment can be packed down accordingly.",
    nearby: ["behala", "park-street-maidan", "dum-dum"],
    localFaq: {
      question: "Do you actually travel across the river to Howrah?",
      answer:
        "Yes, regularly. From the Behala studio the Vidyasagar Setu route makes Howrah roughly as quick to reach as Gariahat, so it is a standard part of the at-home service area rather than an exception.",
    },
  },
];

export function getServiceAreaBySlug(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}

export function getNearbyAreas(area: ServiceArea) {
  return area.nearby
    .map((slug) => getServiceAreaBySlug(slug))
    .filter((nearby): nearby is ServiceArea => Boolean(nearby));
}
