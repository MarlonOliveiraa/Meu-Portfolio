import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  base: "./", // chave para branch main
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
