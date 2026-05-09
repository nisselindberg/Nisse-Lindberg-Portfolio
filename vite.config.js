import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const devPort = process.env.PORT ? Number(process.env.PORT) : 5173;

export default defineConfig({
  plugins: [react()],
  base: "./", // Gör sökvägar relativa så sidan fungerar oavsett repo-namn
  server: {
    host: true,
    port: devPort,
    strictPort: !!process.env.PORT,
  },
});
