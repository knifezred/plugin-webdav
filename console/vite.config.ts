import { fileURLToPath, URL } from "url";

import { HaloUIPluginBundlerKit } from "@halo-dev/ui-plugin-bundler-kit";
import Vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [Vue(), HaloUIPluginBundlerKit()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
