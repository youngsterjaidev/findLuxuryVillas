import { MetadataRoute } from "next";
// import { getAllVillas } from "@/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.findLuxuryVillas.com";
  // const villas = await getAllVillas();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // ...villas.map((villa) => ({
    //   url: `${baseUrl}/villas/${villa.slug}`,
    //   lastModified: new Date(villa.updatedAt),
    //   changeFrequency: "weekly",
    //   priority: 0.9,
    // })),
  ];
}
