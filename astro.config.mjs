// @ts-check
import { defineConfig } from "astro/config";

const site = process.env.ASTRO_SITE?.trim() || "https://www.artificenyc.org";

export default defineConfig({
  site,
  trailingSlash: "ignore",
  build: {
    inlineStylesheets: "auto",
  },
});
