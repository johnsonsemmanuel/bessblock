import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.SANITY_STUDIO_PROJECT_ID': JSON.stringify(process.env.SANITY_STUDIO_PROJECT_ID || ''),
  },
})
