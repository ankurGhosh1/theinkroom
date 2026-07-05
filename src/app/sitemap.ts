import { MetadataRoute } from "next";
import { serviceAreas } from "@/data/serviceAreas";

const baseUrl = "https://www.theinkroom.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
    },
    {
      url: `${baseUrl}/tattoo-course`,
      lastModified,
    },
    {
      url: `${baseUrl}/tattoo-parlour-in-kolkata`,
      lastModified,
    },
    ...serviceAreas.map((area) => ({
      url: `${baseUrl}/tattoo-parlour-in/${area.slug}`,
      lastModified,
    })),
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: new Date().toISOString(),
    // },
    // {
    //   url: `${baseUrl}/contact`,
    //   lastModified: new Date().toISOString(),
    // },
    // Add more routes as needed
  ];
}
