/// <reference types="vitest" />
/// <reference types="vite/client" />

import { viteSingleFile } from "vite-plugin-singlefile";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: { target: "es2020", supported: { bigint: true } }
  },
  plugins: [
    react(),
    viteSingleFile({
      removeViteModuleLoader: true
    })
  ],

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"]
  },
  build: {
    target: "es2020",
    emptyOutDir: true,
    outDir: "dist",
    sourcemap: false,
    minify: true,
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        chunkFileNames: "assets/js/[hash].js",
        entryFileNames: "assets/js/[hash].js",
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "assets/images/[hash][extname]";
          }
          if (/\.(ttf|woff2|svg)$/.test(name ?? "")) {
            return "assets/font/[hash][extname]";
          }
          if (/\.css$/.test(name ?? "")) {
            return "assets/css/[hash][extname]";
          }
          return "assets/[hash][extname]";
        }
      }
    }
  }
});
