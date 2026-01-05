import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nikunj-vaghasiya-resume.vercel.app/",
      lastModified: new Date(),
    },
  ];
}
