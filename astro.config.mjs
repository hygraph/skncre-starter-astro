import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import metaTags from "astro-meta-tags";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://skncre-cosmetics-hygraph-astro.vercel.app",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    metaTags(),
    sitemap(),
  ],
  image: {
    domains: ["https://media.graphassets.com"],
  },
});
