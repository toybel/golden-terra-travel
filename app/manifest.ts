import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Golden Terra Travel",
    short_name: "Golden Terra Travel",
    description: "Tour e itinerari in Uzbekistan lungo la Via della Seta.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#080414",
    theme_color: "#120A24",
    orientation: "portrait",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ]
  };
}
