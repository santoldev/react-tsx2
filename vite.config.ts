import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // host: true, // Listen on all interfaces
    allowedHosts: true, // Allow all domains and subdomains
    // port: 5173, // Optional: specify port
    // cors: true, // Optional: enable CORS for API/assets
  },
})
