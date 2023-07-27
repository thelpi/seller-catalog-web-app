import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // eslint-disable-next-line no-undef
    alias: { "@": path.join(__dirname, "src") },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTest.js",
  },
});
