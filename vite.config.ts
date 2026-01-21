import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  base: "./", // <<- chave para resolver MIME/paths
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // se você usa @ para imports
    },
  },
})
