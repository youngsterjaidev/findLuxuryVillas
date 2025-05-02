// src/config/site.ts

export const SITE = {
  // Site metadata
  name: "Find Luxury Villas",
  title: "Find Luxury Villas | Premium Vacation Rentals Worldwide",
  description:
    "Discover the most exquisite luxury villas for your perfect vacation. Private pools, stunning views, and premium amenities.",
  url: "https://www.findLuxuryVillas.com",

  // Company information
  company: {
    name: "Luxury Villas Inc.",
    address: "123 Ocean View Drive, Malibu, CA 90210",
    phone: "+1 (555) 123-4567",
    email: "bookings@findluxuryvillas.com",
  },

  // Social media links
  social: {
    twitter: "https://twitter.com/luxuryvillas",
    instagram: "https://instagram.com/luxuryvillas",
    facebook: "https://facebook.com/luxuryvillas",
    pinterest: "https://pinterest.com/luxuryvillas",
  },

  // Default Open Graph image
  ogImage: "/images/og-default.jpg",

  // Site navigation
  nav: [
    { name: "Home", href: "/" },
    { name: "Villas", href: "/villas" },
    { name: "Destinations", href: "/destinations" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],

  // Featured destinations
  featuredDestinations: [
    { name: "Bali", slug: "bali", image: "/images/destinations/bali.jpg" },
    {
      name: "Santorini",
      slug: "santorini",
      image: "/images/destinations/santorini.jpg",
    },
    {
      name: "Maldives",
      slug: "maldives",
      image: "/images/destinations/maldives.jpg",
    },
    {
      name: "St. Barts",
      slug: "st-barts",
      image: "/images/destinations/st-barts.jpg",
    },
  ],

  // SEO defaults
  seo: {
    defaultTitle: "Luxury Villa Rentals | Premium Vacation Homes Worldwide",
    defaultDescription:
      "Book stunning luxury villas with private pools, ocean views, and premium amenities. Find your perfect vacation rental today.",
    keywords: [
      "luxury villas",
      "vacation rentals",
      "private villas",
      "luxury vacation homes",
      "villa rentals",
      "premium villas",
    ],
  },

  // Booking configuration
  booking: {
    minimumStay: 3, // nights
    maxGuests: 12,
    currency: "USD",
  },

  // Testimonials
  testimonials: [
    {
      quote:
        "The most breathtaking villa we've ever stayed in. Perfect in every detail!",
      author: "The Johnson Family",
      location: "New York, USA",
    },
    {
      quote:
        "Exceptional service and stunning properties. We'll be back every year!",
      author: "Sophie & Mark",
      location: "London, UK",
    },
  ],
} as const;

// Site-wide utility functions
export const formatPrice = (
  amount: number,
  currency: string = SITE.booking.currency,
) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(amount);
};

// Type definitions for site configuration
export type SiteConfig = typeof SITE;
export type NavItem = (typeof SITE.nav)[number];
export type Destination = (typeof SITE.featuredDestinations)[number];
export type Testimonial = (typeof SITE.testimonials)[number];
