// Central business configuration for Mehar Ji Tikka Shop.
// Update these values to change contact info, links, etc. across the whole site.

export const site = {
  name: "Mehar Ji Tikka Shop",
  nameUrdu: "مہر جی تکہ شاپ",
  tagline: "Faisalabad's Real BBQ Destination",
  phoneDisplay: "+92 321 7623880",
  phoneRaw: "+923217623880",
  whatsappRaw: "923217623880",
  rating: "4.1",
  reviewCount: "1,196",
  priceRange: "Rs 1,000 – Rs 3,000 / person",
  hoursShort: "Afternoon – Late Night",
  hoursPeak: "Sunset → Midnight",
  address: {
    line1: "Abbas Chowk, Satayana Road",
    line2: "Shadman Colony Block D, People's Colony No.1",
    city: "Faisalabad, Pakistan",
  },
  // Google Maps query for the embed + directions
  mapsQuery: "Mehar Ji Tikka Shop, Abbas Chowk, Satayana Road, People's Colony, Faisalabad",
  services: [
    "Dine-In",
    "Curbside Pickup",
    "Delivery",
    "No-Contact Delivery",
    "Outdoor Seating",
    "BBQ Dining",
    "Group Dining",
  ],
  socials: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
    youtube: "#",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Specialties", href: "#specialties" },
  { label: "Gallery", href: "#gallery" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
];

// Pre-built helper links
export const whatsappLink = `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(
  "Assalam o Alaikum! I'd like to place an order from Mehar Ji Tikka Shop."
)}`;
export const callLink = `tel:${site.phoneRaw}`;
export const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  site.mapsQuery
)}`;
export const mapEmbedLink = `https://maps.google.com/maps?q=${encodeURIComponent(
  site.mapsQuery
)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
