import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // Runs on port 3000
    open: true   // Automatically opens browser
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020'  // Ensures compatibility with modern JS
    }
  }
})