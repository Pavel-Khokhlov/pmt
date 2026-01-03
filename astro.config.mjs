// @ts-check
import { defineConfig } from "astro/config";
// @ts-ignore
import vue from "@astrojs/vue";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  site: 'https://pavel-khokhlov.github.io',
  output: "server",
  adapter: node({
    mode: 'standalone',
  }),
  build: {
    format: "directory"
  },
  server: {
    host: true,
  },
  trailingSlash: "ignore",
});
