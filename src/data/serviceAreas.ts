export type ServiceArea = {
  slug: string;
  name: string;
  region: string;
  landmarks: string[];
  intro: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "behala",
    name: "Behala",
    region: "South West Kolkata",
    landmarks: ["Behala Chowrasta", "James Long Sarani", "Sarsuna", "Parnasree", "Barisha"],
    intro:
      "Behala is home turf for The Ink Room — our studio is based right here, so if you're near Behala Chowrasta, James Long Sarani, Sarsuna, Parnasree or Barisha, you can walk into the studio directly or book an at-home session.",
  },
  {
    slug: "park-street-maidan",
    name: "Park Street / Maidan",
    region: "Central Kolkata",
    landmarks: ["Park Street", "Maidan", "Camac Street", "Esplanade", "Victoria Memorial"],
    intro:
      "For clients around Park Street, Maidan, Camac Street, Esplanade or Victoria Memorial, we offer at-home tattoo appointments across Central Kolkata, bringing full sterilized equipment and the same hygiene standards as our Behala studio.",
  },
  {
    slug: "rashbehari",
    name: "Rashbehari",
    region: "South Kolkata",
    landmarks: ["Rashbehari Avenue", "Deshapriya Park", "Kalighat", "Bhowanipore"],
    intro:
      "Rashbehari Avenue, Deshapriya Park, Kalighat and Bhowanipore are well within reach for at-home tattoo sessions with Soniya, so you can get a fully custom tattoo done in the comfort of your own home in South Kolkata.",
  },
  {
    slug: "gariahat",
    name: "Gariahat",
    region: "South Kolkata",
    landmarks: ["Gariahat Market", "Golpark", "Lake Market", "Ballygunge"],
    intro:
      "If you're around Gariahat Market, Golpark, Lake Market or Ballygunge and looking for a hygienic, custom tattoo experience, we bring the studio setup to you with at-home appointments across the Gariahat area.",
  },
  {
    slug: "tollygunge",
    name: "Tollygunge",
    region: "South Kolkata",
    landmarks: ["Tollygunge Metro", "Tollygunge Club", "Netaji Nagar"],
    intro:
      "From Tollygunge Metro to Tollygunge Club and Netaji Nagar, we cover at-home tattoo sessions across Tollygunge for clients who'd rather get inked at home than travel across the city.",
  },
  {
    slug: "new-town",
    name: "New Town",
    region: "East Kolkata",
    landmarks: ["Action Area I", "Action Area II", "Action Area III", "Eco Park"],
    intro:
      "New Town's Action Area I, II, III and the areas around Eco Park are part of our at-home tattoo service zone — a good option if you're further from Behala but still want a custom, hygienic tattoo experience without the commute.",
  },
  {
    slug: "dum-dum",
    name: "Dum Dum",
    region: "North Kolkata",
    landmarks: ["Dum Dum Metro", "Dum Dum Cantonment", "Nagerbazar"],
    intro:
      "For clients near Dum Dum Metro, Dum Dum Cantonment or Nagerbazar, The Ink Room offers at-home tattoo appointments across North Kolkata with the same single-use equipment and sterilization standards used at our studio.",
  },
  {
    slug: "salt-lake",
    name: "Salt Lake",
    region: "East Kolkata",
    landmarks: ["Sector V", "Central Park", "City Centre", "Bidhannagar"],
    intro:
      "Salt Lake (Bidhannagar) clients around Sector V, Central Park or City Centre can book an at-home tattoo session with Soniya, or plan a visit to our Behala studio — either way, hygiene and custom design stay non-negotiable.",
  },
  {
    slug: "jadavpur",
    name: "Jadavpur",
    region: "South Kolkata",
    landmarks: ["Jadavpur University", "8B Bus Stand", "Jadavpur Station"],
    intro:
      "Jadavpur, home to Jadavpur University and the 8B bus stand area, is one of our regular at-home service zones — a lot of our younger clients here are getting their first tattoo, and we take extra time to talk through design, placement and aftercare.",
  },
  {
    slug: "howrah",
    name: "Howrah",
    region: "Across the Hooghly",
    landmarks: ["Howrah Station", "Howrah Maidan", "Shibpur", "Howrah Bridge"],
    intro:
      "For clients across the river near Howrah Station, Howrah Maidan or Shibpur, we offer at-home tattoo appointments in Howrah so you don't have to cross over to Behala for a custom, hygienic tattoo session.",
  },
];

export function getServiceAreaBySlug(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}
