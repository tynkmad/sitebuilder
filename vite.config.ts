import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/promanage/pmsme/template-builder/",
  base: "/sitebuilder/",
  plugins: [vue()],
  // server: {
  //   host: "local.promanage.biz",
  //   proxy: {
  //     "/local": {
  //       target: "http://127.0.0.1:7071",
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/local/, ""),
  //     },
  //   },
  // },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist",
  },
});
