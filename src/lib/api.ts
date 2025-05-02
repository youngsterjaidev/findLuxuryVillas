// src/lib/api.ts

interface Villa {
  id: string;
  slug: string;
  name: string;
  description: string;
  location: {
    city: string;
    region: string;
    country: string;
  };
  featuredImage: string;
  updatedAt: string;
  // Add other villa properties as needed
}

// Mock data - Replace with actual API calls
const mockVillas: Villa[] = [
  {
    id: "1",
    slug: "luxury-beachfront-villa-bali",
    name: "Luxury Beachfront Villa, Bali",
    description:
      "Stunning 5-bedroom villa with private infinity pool overlooking the ocean",
    location: {
      city: "Seminyak",
      region: "Bali",
      country: "Indonesia",
    },
    featuredImage: "/images/villas/villa-bali.jpg",
    updatedAt: "2023-10-15T09:00:00Z",
  },
  {
    id: "2",
    slug: "mountain-retreat-switzerland",
    name: "Mountain Retreat, Switzerland",
    description:
      "Luxury alpine chalet with panoramic mountain views and private spa",
    location: {
      city: "Zermatt",
      region: "Valais",
      country: "Switzerland",
    },
    featuredImage: "/images/villas/villa-swiss.jpg",
    updatedAt: "2023-10-10T14:30:00Z",
  },
  // Add more villas as needed
];

// For production: Real API calls
const API_BASE_URL =
  process.env.API_BASE_URL || "https://api.findluxuryvillas.com";

export async function getAllVillas(): Promise<Villa[]> {
  if (process.env.NODE_ENV === "development") {
    // Return mock data in development
    return mockVillas;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/villas`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch villas");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching villas:", error);
    // Fallback to mock data if API fails
    return mockVillas;
  }
}

export async function getVillaBySlug(slug: string): Promise<Villa | null> {
  if (process.env.NODE_ENV === "development") {
    // Find in mock data
    return mockVillas.find((villa) => villa.slug === slug) || null;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/villas/${slug}`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error("Failed to fetch villa");
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching villa ${slug}:`, error);
    // Fallback to mock data
    return mockVillas.find((villa) => villa.slug === slug) || null;
  }
}

// Add other API functions as needed
export async function getFeaturedVillas(limit = 4): Promise<Villa[]> {
  const allVillas = await getAllVillas();
  return allVillas.slice(0, limit);
}
