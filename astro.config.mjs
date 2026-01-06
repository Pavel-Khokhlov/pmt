// @ts-check
import { defineConfig } from "astro/config";
// @ts-ignore
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  site: 'https://pavel-khokhlov.github.io/pmt',
  output: "static",
  build: {
    format: "directory"
  },
  server: {
    host: true,
  },
  trailingSlash: "ignore",
});
