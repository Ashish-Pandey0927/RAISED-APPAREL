import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./", // Ensure correct asset paths
  build: {
    outDir: "dist", // Ensure Vite builds to the correct folder
  },
});
