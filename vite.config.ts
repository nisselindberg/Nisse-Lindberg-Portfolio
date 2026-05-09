import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { cloudflare } from "@cloudflare/vite-plugin";

const devPort = process.env.PORT ? Number(process.env.PORT) : 3000;

export default defineConfig({
  plugins: [react(), cloudflare()],
  base: "./",
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  server: {
    host: true,
    port: devPort,
    strictPort: !!process.env.PORT,
  },
});