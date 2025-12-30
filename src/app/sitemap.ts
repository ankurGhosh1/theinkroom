import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://theinkroom.in/",
      lastModified: new Date().toISOString(),
    },
    // {
    //   url: "https://theinkroom.in/about",
    //   lastModified: new Date().toISOString(),
    // },
    // {
    //   url: "https://theinkroom.in/contact",
    //   lastModified: new Date().toISOString(),
    // },
    // Add more routes as needed
  ];
}
