import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://taharb.com",

  integrations: [
    sitemap(),
  ],

  build: {
    format: "directory",
  },
});